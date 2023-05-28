import React from "react";
import SearchBar from "../search bar/SearchBar";
import Avatar from "../avatar/Avatar";
import { BsCardChecklist } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { curr_usr, login, logout } from "../../config/firebase";
import "../nav/NavBar.css";

interface Props {
  hasSearchBar: boolean;
  hasColor: boolean;
  isLoggedIn: boolean;
}

function NavBar({ hasSearchBar, hasColor, isLoggedIn }: Props) {
  const navigate = useNavigate();
  const handleClickHome = () => {
    isLoggedIn ? navigate("/loggedin") : navigate("/");
  };
  const handleClickLogin = () => navigate("/login");
  const handleClickFavoriteList = () => navigate("/favlist");

  if (isLoggedIn) {
    return (
      <div
        className="header"
        style={{ backgroundColor: hasColor ? "#006994" : "none" }}
      >
        <div className="header-left">
          <img
            id="logo"
            src="http://localhost:3000/icons/logo.png"
            alt="Logo"
            onClick={handleClickHome}
          ></img>

          <div className="header-website-name">
            <p>SightSeeker</p>
          </div>
        </div>

        <div className="header-middle">
          {hasSearchBar ? <SearchBar isLoggedIn={isLoggedIn} /> : null}
        </div>

        <div className="header-right">
          <Avatar />
        </div>
      </div>
    );
  }

  return (
    <div
      className="header"
      style={{ backgroundColor: hasColor ? "#006994" : "none" }}
    >
      <div className="header-left">
        <img
          id="logo"
          src="icons/logo.png"
          alt="Logo"
          onClick={handleClickHome}
        ></img>

        <div className="header-website-name">
          <p>SightSeeker</p>
        </div>
      </div>

      <div className="header-middle">
        {hasSearchBar ? <SearchBar isLoggedIn={isLoggedIn} /> : null}
      </div>

      <div className="header-right">
        <div className="header-options">
          <div className="header-login" onClick={handleClickLogin}>
            <p>Log In</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
