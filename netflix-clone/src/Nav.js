import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Nav = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        console.log(window.scrollY)
        if(window.scrollY > 100) {
            setShow(true);
        }else{
            setShow(false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
    
      return () => {
        window.removeEventListener("scroll",transitionNavBar)
      }
    }, [])    

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
        onClick={()=>{navigate("/")}}
          className="nav_logo"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        />
        
        <div className="nav-links">
      <a href="" >Home</a>
      <a href="">TV Shows</a>
      <a href="">New & Popular</a>
      <a href="">My List</a>
      <a href="">Browse by Language</a>
    </div>
        <img
        onClick={()=>{navigate("/profile")}}
          className="nav_avatar"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VisualEditor_icon_profile-progressive.svg/1024px-VisualEditor_icon_profile-progressive.svg.png"
        />
      </div>
    </div>
  );
};

export default Nav;
