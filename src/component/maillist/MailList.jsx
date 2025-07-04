import "./maillist.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mail-title">Save time, save money!</h1>
      <span className="mail-text">Sign up and we'll send you best deal</span>
      <div className="mail-input">
        <input
          className="mail-inputfield"
          type="text"
          placeholder="Your Email"
        />
        <button className="mail-button">Subscribe</button>
      </div>
      <div className="mail-checkbox">
        <input type="checkbox" id="" />
        <span>Send me a link to get the FREE Muneeb's Booking deal</span>
      </div>
    </div>
  );
};

export default MailList;
