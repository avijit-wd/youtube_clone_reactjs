import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Avatar } from "@material-ui/core";

const Header = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search"
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar src="https://avatars1.githubusercontent.com/u/52578734?s=400&u=422d5c1a5203c5784395d81a83fd1379cd85e4b9&v=4" />
      </div>
    </div>
  );
};

export default Header;
