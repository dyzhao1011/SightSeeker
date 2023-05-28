import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../config/firebase";
import { curr_usr } from "../../config/firebase";
import "../avatar/Avatar.css";

function Avatar() {
  const navigate = useNavigate();

  const currentUser = curr_usr;
  const displayName = currentUser?.displayName;

  const handleClickFavoriteList = () => navigate("/favlist");
  const handleClickSignOut = (event) => {
    event.preventDefault();
    logout();
    navigate(`/`);
  };

  return (
    <div className="avatar">
      <img
        id="avatar-icon"
        src="http://localhost:3000/icons/avatar.png"
        alt="Avatar"
        width={"65px"}
      ></img>
      <div className="avatar-menu">
        <p id="avatar-menu-name">Hello, {displayName}</p>
        <div className="avatar-menu-options">
          <p id="avatar-menu-favList" onClick={handleClickFavoriteList}>
            Favorite List
          </p>
          <p id="avatar-menu-signout" onClick={handleClickSignOut}>
            Sign out
          </p>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
