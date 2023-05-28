import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  const handleClick1 = () => navigate("/aboutUs");
  return (
    <div className="footer">
      <div className="footer-about">
        <h1>About</h1>
        <p onClick={handleClick1}>
          <FaMapMarkerAlt size="12px"></FaMapMarkerAlt> Ideation
        </p>
      </div>

      <div className="footer-technology">
        <h1>Technology</h1>
        <ul>
          <li>
            <a href="https://developers.google.com/maps/">Google Maps API</a>
          </li>
          <li>
            <a href="https://firebase.google.com/">FireBase</a>
          </li>
        </ul>
      </div>

      <div className="footer-team">
        <h1>Team</h1>
        <ul>
          <li>
            <a href="https://github.com/jchen056">Jiale (Jerry) Chen</a>
          </li>
          <li>
            <a href="https://github.com/dyzhao1011">Da Yuan (Michael) Zhao</a>
          </li>
          <li>
            <a href="https://github.com/Falselysium">Andy Zheng</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
