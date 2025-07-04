import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import formate from "date-fns/format"; // date formatting library
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });
  const clickHandler = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const searchHandler = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type == "list" ? "header-container list-mode" : "header-container"
        }
      >
        <div className="header-listing">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Rentals</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
        </div>{" "}
        {type !== "list" && (
          <>
            <h1 className="header-title">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="header-description">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free account.
            </p>
            <button className="header-button">Sign in / Register</button>
            <div className="header-search">
              <div className="header-search-item">
                <FontAwesomeIcon icon={faBed} className="header-icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header-search-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header-icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header-search-text"
                >
                  ` {formate(date[0].startDate, "MM/dd/yyyy")} to{" "}
                  {formate(date[0].endDate, "MM/dd/yyyy")}`
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div
                onClick={() => setOpenOptions(!openOptions)}
                className="header-search-item"
              >
                <FontAwesomeIcon icon={faPerson} className="header-icon" />
                <span className="header-search-text">
                  `{options.adult} adult . {options.children} children .{" "}
                  {options.room} room`
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="option-item">
                      <span className="option-text">Adult</span>
                      <div className="option-counter">
                        <button
                          className="option-counter-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            clickHandler("adult", "d");
                          }}
                          disabled={options.adult <= 0}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.adult}
                        </span>
                        <button
                          className="option-counter-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            clickHandler("adult", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Children</span>
                      <div className="option-counter">
                        <button
                          className="option-counter-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            clickHandler("children", "d");
                          }}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.children}
                        </span>
                        <button
                          className="option-counter-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            clickHandler("children", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Room</span>
                      <div className="option-counter">
                        <button
                          className="option-counter-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            clickHandler("room", "d");
                          }}
                          disabled={options.room <= 0}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.room}
                        </span>
                        <button
                          className="option-counter-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            clickHandler("room", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search-item">
                <button className="header-button" onClick={searchHandler}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
