import { React, useState } from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkIcon from "@mui/icons-material/Work";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '../../assets/logo.svg'

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <img src={Icon} />
        </div>
        <div className="nav">
          <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
          <li><a href="#home">Home</a></li>
          <li><a href="#branding">Branding</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#blog">Blog</a></li>
            <li className="icon">
              <SearchOutlinedIcon className="HeaderIcon" />
              <WorkIcon className="HeaderIcon" />
              <GridViewIcon className="HeaderIcon" />
            </li>
          </ul>
        </div>
        <button
          className="navbar-items-icon"
          onClick={() => setSidebar(!sidebar)}
        >
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
