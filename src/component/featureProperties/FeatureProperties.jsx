import "./featureProperties.css";

const FeatureProperties = () => {
  return (
    <div className="fp">
      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fp-img"
        />
        <span className="fp-name">Aparthotel Stare Miasto</span>
        <span className="fp-city">Madrid</span>
        <span className="fp-price">Starting from $120</span>
        <div className="fp-rating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fp-img"
        />
        <span className="fp-name">Four Seasons Hotel</span>
        <span className="fp-city">Lisbon</span>
        <span className="fp-price">Starting from $99</span>
        <div className="fp-rating">
          <button>8.4</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fp-img"
        />
        <span className="fp-name">Hilton Garden Inn</span>
        <span className="fp-city">Berlin</span>
        <span className="fp-price">Starting from $1</span>
        <div className="fp-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fp-img"
        />
        <span className="fp-name">Comfort Suites Airport</span>
        <span className="fp-city">Austin</span>
        <span className="fp-price">Starting from $140</span>
        <div className="fp-rating">
          <button>9.3</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperties;
