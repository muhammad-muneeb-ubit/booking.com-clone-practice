import { useNavigate } from "react-router-dom";
import "./searchItem.css";

const SearchItem = () => {
  const navigate = useNavigate();
  return (
    <div className="searchItem" onClick={() => navigate("/hotels/123")}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="searchItem-img"
      />
      <div className="searchItem-desc">
        <h1 className="searchItem-title">Tower Street Apartment</h1>
        <span className="searchItem-dist">500m from center</span>
        <span className="searchItem-taxi">Free airport taxi</span>
        <span className="searchItem-subtitle">
          Studio Apartment with Air Conditioning
        </span>
        <span className="searchItem-features">
          Entire Studio . 1 Bathrooms . 21m² 1 full bed
        </span>
        <span className="searchItem-cancel">Free cancellation</span>
        <span className="searchItem-cancelSubtitle">
          You can cancel later, so lock in this great price!
        </span>
      </div>
      <div className="searchItem-details">
        <div className="searchItem-rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchItem-detailTexts">
          <span className="searchItem-price">$112</span>
          <span className="searchItem-tax">Includes taxes and fees</span>
          <button className="searchItem-checkButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
