import React from "react"
import home from "../../images/home (2).png"
import { Link } from "react-router-dom"
import './Landing.css'


export default function LandingPage(){
    return (
        <div className="home-content">
            <div className="Landing-img">
                <img src={home} alt="landing-pic"/>
            </div>
            <div className="Landing-content"> 
            <h1>10x Team 04</h1>
            <Link to={"post/all"}><button>Enter</button></Link>
            </div>
        </div>
    )

  
}