// import React, { useState } from "react";
// import "./App.css";
// import { Login } from "./Login";
// import { Register } from "./Register";
import LoginPage from "./Login Page/LoginPage";
import SearchResults from "./Search Results Page/SearchResults";
import Home from "./Home Page/Home";
import FavList from "./Favorite List Page/FavList";
import AboutPage from "./About Page/About";
import { logout } from "./config/firebase";
import { log } from "console";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { Register } from "./Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={false} />}></Route>
        <Route
          path="/search-results"
          element={<SearchResults isLoggedIn={false} />}
        ></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favlist" element={<FavList />} />
        <Route path="/loggedin" element={<Home isLoggedIn={true} />} />
        <Route
          path="/loggedin/search-results"
          element={<SearchResults isLoggedIn={true} />}
        />
        <Route path="/aboutUs" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
