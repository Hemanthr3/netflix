import React, { useEffect, useState } from "react";
import "./nav.css";

const Nav = () => {

    const [show, setShow] = useState(false);

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
          className="nav_logo"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        />
        <img
          className="nav_avatar"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VisualEditor_icon_profile-progressive.svg/1024px-VisualEditor_icon_profile-progressive.svg.png"
        />
      </div>
    </div>
  );
};

export default Nav;
