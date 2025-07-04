import React from "react";
import "./features.css";

const Features = () => {
  return (
    <div className="feature">
      <div className="feature-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o="
          alt="Karachi"
          className="feature-img"
        />
        <div className="feature-titles">
          <h1>Karachi</h1>
          <h2>350 Properties</h2>
        </div>
      </div>
      <div className="feature-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o="
          alt="Islamabad     "
          className="feature-img"
        />
        <div className="feature-titles">
          <h1>Islamabad</h1>
          <h2>200 Properties</h2>
        </div>
      </div>
      <div className="feature-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/977227.jpg?k=7cf547df1d40f65019ad3bb9cc72a9bfd9763dc86b933cd51b50dfcb41dac8f2&o="
          alt="Istanbul"
          className="feature-img"
        />
        <div className="feature-titles">
          <h1>Istanbul</h1>
          <h2>150 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Features;
