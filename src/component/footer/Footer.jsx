import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-lists">
        <ul className="footer-list">
          <li className="footer-item">Countries</li>
          <li className="footer-item">Region</li>
          <li className="footer-item">Cities</li>
          <li className="footer-item">Districts</li>
          <li className="footer-item">Airpots</li>
          <li className="footer-item">Hotels</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Home</li>
          <li className="footer-item">Apartments</li>
          <li className="footer-item">Resorts</li>
          <li className="footer-item">Villas</li>
          <li className="footer-item">Hostels</li>
          <li className="footer-item">Guests Houses</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Unique place to stay</li>
          <li className="footer-item">Reviews</li>
          <li className="footer-item">Unpacked: Travel Articles</li>
          <li className="footer-item">Travel communities</li>
          <li className="footer-item">Seasonal and holiday deals</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Car rental</li>
          <li className="footer-item">Flight Finder</li>
          <li className="footer-item">Restaurant reservations</li>
          <li className="footer-item">Travel Agents </li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Customer Service</li>
          <li className="footer-item">Partner Help</li>
          <li className="footer-item">Careers</li>
          <li className="footer-item">Sustainability</li>
          <li className="footer-item">Press center</li>
          <li className="footer-item">Safety Resource Center</li>
          <li className="footer-item">Investor relations</li>
          <li className="footer-item">Terms & conditions</li>
        </ul>
      </div>
      <div className="footer-text">
        Copyright © {new Date().getFullYear()} MuneebBooking.com
      </div>
    </div>
  );
};

export default Footer;
