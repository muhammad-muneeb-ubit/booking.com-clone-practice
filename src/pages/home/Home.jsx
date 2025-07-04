import Features from "../../component/featured/Features";
import FeatureProperties from "../../component/featureProperties/FeatureProperties";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import MailList from "../../component/maillist/MailList";
import Navbar from "../../component/navbar/Navbar";
import PropertyList from "../../component/propertyList/PropertyList";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Features />
        <h1 className="home-container-title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home-container-title">Home guests love</h1>
        <FeatureProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
