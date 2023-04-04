import React from "react";
import cam from "../../../images/camera_icon.png";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css"



export default function Header() {
    return (
        <container className='header'>
            <div className="logo">
                <img src={logo} alt="logo" />
                <span className="text">InstaClone</span>
            </div>
            <div className="camera" ><Link to={"/post/new"}><img src={cam} alt="logo" /></Link></div>
        </container>
    )
}