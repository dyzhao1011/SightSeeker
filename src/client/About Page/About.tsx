import NavBar from "../Components/nav/NavBar";
import Footer from "../Components/footer/Footer";
import { curr_usr } from "../config/firebase";
import "./About.css";

function AboutPage() {
  return (
    <div>
      <NavBar
        hasSearchBar={true}
        hasColor={true}
        isLoggedIn={curr_usr ? true : false}
      />
      <div className="About">
        <div className="About1">
          <div className="About_Info">
            <h1>We are On the Road ...</h1>
            <p>Do not know where to go when you want to travel? </p>
            <p>No worries. Give all the headaches to us.</p>
            <p>
              Let us help you see and discover where to go and what to do
              nearby.
            </p>
          </div>
          <img src="images/6.jpg" alt="Throwing a Dart at a Map"></img>
        </div>
        <div className="About2">
          <img src="images/7.jpg" alt="Travel Guide For Newcomers"></img>
          <div className="About_Info">
            <h1>We make exploring easy</h1>
            <p>
              We give you top things to do nearby and freedom to do it all your
              way.
            </p>
            <p>Plan your trip accordingly.</p>
          </div>
        </div>
        <div className="About3">
          <div className="About_Info">
            <h1>We don't just feature the typical bucket-list landmarks...</h1>
            <p>...although we do have plenty of those!</p>
            <p>You can always find something of your interest. </p>
          </div>
          <img src="images/8.jpg" alt="Attractions on a NYC Map"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AboutPage;
