import SearchBar from "../Components/search bar/SearchBar";
import React from "react";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import NavBar from "../Components/nav/NavBar";
import Footer from "../Components/footer/Footer";
import "../Home Page/Home.css";

const touristAttractionImages = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
];

function Home({ isLoggedIn }) {
  return (
    <div className="home">
      <div className="home-header">
        <NavBar hasSearchBar={false} hasColor={false} isLoggedIn={isLoggedIn} />
      </div>
      <div className="home-slider">
        <SimpleImageSlider
          width={"100%"}
          height={500}
          images={touristAttractionImages}
          showBullets={true}
          showNavs={true}
          loop={true}
          autoPlay={true}
          autoPlayDelay={5}
          slideDuration={1.5}
        />
      </div>
      <div className="home-message">
        <p>Find Attractions Near Anywhere!</p>
      </div>
      <div className="home-search-bar">
        <SearchBar isLoggedIn={isLoggedIn} />
      </div>

      <div className="home-info">
        <div id="home-info-info1">
          <img
            id="home-info-info1-icon"
            src="icons/discover.png"
            alt="Discover"
          />
          <h1 className="home-info-head">Discover New Sights and Adventures</h1>
          <p className="home-info-text">
            Search through millions of popular locations around the world
          </p>
        </div>

        <div id="home-info-info2">
          <img
            id="home-info-info2-icon"
            src="icons/favorite.png"
            alt="Favorite"
          />
          <h1 className="home-info-head">Save Your Favorite Locations</h1>
          <p className="home-info-text">
            Add your favorite destinations to a list and view it anytime
          </p>
        </div>
        <div className="home-info-info3">
          <h1>Powered By</h1>
          <img
            id="home-info-info3-icon"
            src="icons/google-place.png"
            alt="Google Places API"
          />
        </div>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
