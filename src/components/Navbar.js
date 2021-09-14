import React, { useState } from "react";
import "./Navbar.css";
import {

  FaInstagramSquare,
} from "react-icons/fa";
import {AiOutlineHome} from 'react-icons/ai';
import {IoMdShuffle} from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";
import {FiMail} from "react-icons/fi"
import logo2 from '../images/logo2.png';
import {BiChevronDown} from 'react-icons/bi';
import Slide from 'react-reveal/Slide';
import Signup from './Signup';
import {Route, Switch,Link } from "react-router-dom";



const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <Slide right>  <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         <img className="logo-img" src={logo2} alt="logo"/>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
          <li>
       <Link to='/home'>     Home </Link>
            </li>
            <li>
       <Link to='/signup'>     Get Connected </Link>
            </li>
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
              style={{color:"black"}}
                href=""
                target="">
                <AiOutlineHome className="facebook" />
              </a>
            </li>
            <li>
              <a
               style={{color:"black"}}
                href=""
                target="">
                <FiMail className="mail" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="">
                < IoMdShuffle className="shuffle" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          
        </div>
       </div>
      </nav></Slide>
      <Switch>
            <Route exact path="/signup" component={Signup} />
            
        </Switch> 
    </>
  );
};

export default Navbar;