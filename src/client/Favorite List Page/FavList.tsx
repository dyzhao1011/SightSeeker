import React from "react";
import NavBar from "../Components/nav/NavBar";
import "./FavList.css";
import { getFavorites, addFavorite, deleteFavorite } from "../config/firestore";
import { curr_usr, login, logout } from "../config/firebase";

function FavList() {
  if (curr_usr) {
    getFavorites(curr_usr.uid);
  }

  return (
    <div className="display_Fav_Page">
      <NavBar hasSearchBar={true} hasColor={true} isLoggedIn={true} />

      <div className="favlist_display" id="favlist_display"></div>
      <table className="table table-hover table-dark" id="favlist_display">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Location Name</th>
            <th scope="col">Address</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
    </div>
  );
}

export default FavList;
