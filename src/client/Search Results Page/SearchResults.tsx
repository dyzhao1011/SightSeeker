import React from "react";
import NavBar from "../Components/nav/NavBar";
import { Navigate, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getNearbyTouristAttractions } from "./TouristAttractions";
import Footer from "../Components/footer/Footer";
import "./Search.css";
import filterOnR from "./filterR";
import { curr_usr } from "../config/firebase";
import { addFavorite, favNumber } from "../config/firestore";

//REPLACE THE FOLLOWING WITH YOUR GOOGLE PLACES API KEY (DO NOT DELETE QUOTATIONS)
const API_KEY = "YOUR API KEY";

function SearchResults({ isLoggedIn }) {
  const [queryParam] = useSearchParams();
  const query = queryParam.get("q");
  let searchResults;
  const myslider = () => {
    var slider = document.getElementById("sliderRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function () {
      slider.value = this.value;
      output.innerHTML = this.value;
    };
  };

  const places = new Array();
  const myDiv = document.getElementById("display");
  if (!(myDiv == null)) {
    while (myDiv.firstChild) {
      myDiv.removeChild(myDiv.firstChild);
    }
  }
  getNearbyTouristAttractions(query)
    .then((result) => {
      searchResults = result;
      if (result.results.length == 0) {
        alert("No results found. Please enter a valid query.");
      }
      console.log(searchResults);
      result.results.forEach((place) => {
        const placeID = place.place_id;
        const placeN = place.name;
        const placeA = place.formatted_address;
        const placeR = place.rating;

        const placei = {
          id: placeID,
          title: placeN,
          addr: placeA,
          rating: placeR,
        };
        places.push(placei);

        const targetElement = document.getElementById("display");
        const x = document.createElement("section");
        x.setAttribute("Id", placeID);
        x.setAttribute("class", "place others");

        if (place.photos && place.photos.length > 0) {
          const photo_reference = place.photos[0].photo_reference;
          const photoURL = `http://localhost:3000/photo?maxheight=200&maxwidth=300&photoreference=${photo_reference}&key=${API_KEY}`;
          axios.get(photoURL, { responseType: "blob" }).then((response) => {
            const imageURL = URL.createObjectURL(response.data);
            const placeI = document.createElement("span");
            placeI.setAttribute("class", "place_image");
            const y = document.createElement("img");
            y.src = imageURL;

            y.setAttribute("aria-hidden", "true");
            y.setAttribute("class", "image");
            y.setAttribute("alt", placeN);
            placeI.append(y);
            x.append(placeI);
          });
        } else {
          const placeI = document.createElement("span");
          placeI.setAttribute("class", "place_image");
          const y = document.createElement("img");
          y.src = "http://localhost:3000/images/imageHolder.png";

          y.setAttribute("aria-hidden", "true");
          y.setAttribute("class", "image");
          y.setAttribute("alt", placeN);
          placeI.append(y);
          x.append(placeI);
        }

        const placeInfo = document.createElement("div");
        placeInfo.setAttribute("class", "place_info");

        const placeName = document.createElement("h2");
        placeName.setAttribute("class", "place_name");
        const txtName = document.createTextNode(placeN);
        placeName.appendChild(txtName);
        placeInfo.append(placeName);

        const placeAdd = document.createElement("span");
        placeAdd.setAttribute("class", "place_address");
        const txtAdd = document.createTextNode(placeA);
        placeAdd.appendChild(txtAdd);
        placeInfo.append(placeAdd);

        const placeRating = document.createElement("span");
        placeRating.setAttribute("class", "place_rating " + placeR);
        const txtRating = document.createTextNode(
          "Rating:" + placeR + " (" + place.user_ratings_total + ")"
        );
        placeRating.appendChild(txtRating);
        placeInfo.append(placeRating);

        const buttonA = document.createElement("button");
        buttonA.textContent = "Add to Favorite List";
        buttonA.addEventListener("click", () => {
          if (curr_usr) {
            buttonA.style.backgroundColor = "lightblue";
            console.log(curr_usr);
            addFavorite(curr_usr.uid, placeA, placeN).then(() =>
              favNumber(curr_usr.uid)
            );
          } else {
            alert("Please sign in to use this feature.");
          }
        });
        placeInfo.append(buttonA);
        x.appendChild(placeInfo);
        targetElement?.appendChild(x);
      });
    })
    .then(() => myslider())
    .then(() => {
      filterOnR();
    });

  return (
    <div>
      <NavBar hasSearchBar={true} hasColor={true} isLoggedIn={isLoggedIn} />
      <div className="search-result">
        <h2 id="search-result-user-input">Showing Results for: {query}</h2>
        <div className="search-result-main">
          <div className="search-result-filter">
            <span>
              <strong>Filter</strong>
            </span>

            <div className="search-result-rangeslider">
              <form id="slider">
                <p>Rating</p>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  defaultValue="0"
                  className="myslider"
                  id="sliderRange"
                  onClick={() => filterOnR()}
                />
                <p>
                  <span id="demo"></span> and above
                </p>
              </form>
            </div>
          </div>

          <div id="display"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchResults;
