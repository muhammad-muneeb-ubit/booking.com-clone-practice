import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import "./listing.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns"; // Corrected import for date formatting
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchItem/SearchItem";
const Listing = () => {
  const location = useLocation();
  // console.log(location);
  const [destination, setDestination] = useState(
    location.state?.destination || ""
  );
  const [date, setDate] = useState(location.state?.date || []);
  const [options, setOptions] = useState(location.state?.options || {});
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-search-title">Search here</h1>
            <div className="list-searchitem">
              <label>Destination</label>
              <input type="text" placeholder={destination || ""} />
            </div>
            <div className="list-searchitem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list-searchitem">
              <label>Options</label>
              <div className="list-option">
                <div className="list-option-item">
                  <span className="list-option-text">
                    Min price <small>Per night</small>
                  </span>
                  <input type="number" className="list-option-input" />
                </div>
                <div className="list-option-item">
                  <span className="list-option-text">
                    Max price <small>Per night</small>
                  </span>
                  <input type="number" className="list-option-input" />
                </div>
                <div className="list-option-item">
                  <span className="list-option-text">Adult</span>
                  <input
                    type="number"
                    className="list-option-input"
                    placeholder={options.adult || 0}
                    min={1}
                  />
                </div>
                <div className="list-option-item">
                  <span className="list-option-text">Child</span>
                  <input
                    type="number"
                    className="list-option-input"
                    placeholder={options.children || 0}
                    min={0}
                  />
                </div>
                <div className="list-option-item">
                  <span className="list-option-text">Room</span>
                  <input
                    type="number"
                    className="list-option-input"
                    placeholder={options.room || 0}
                    min={1}
                  />
                </div>
              </div>
              <button>Search</button>
            </div>
          </div>
          <div className="list-result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
