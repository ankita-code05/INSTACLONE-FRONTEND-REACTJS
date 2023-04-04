import React from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import './List.css'
import blue from "../../../images/blue.jpg"
import dots from "../../../images/dots.jpg"
import like from "../../../images/heart_icon.png"
import share from "../../../images/rocket_icon.jpg"
import Header from "../Header/Header"


export default function AllPost() {
    return (
        <>
            <Header />
            <div className="post-list-view">
                <div className="row">
                    <div className="card-container">
                        <div className="head">
                            <span>Ankita</span>
                            <span>
                                <img src={dots} alt="" />
                            </span>
                        </div>
                        <div className="place">
                            bengluru
                        </div>
                        <div className="image">
                            <img src={blue} alt="body-imgage" />
                        </div>
                        <div className="below-img">
                            <div className="left">
                                <img src={like} alt="like" />
                                <img src={share} alt="share" />
                            </div>
                            <div className="right">
                                10x 2023
                            </div>
                        </div>
                        <div className="likes">
                            64 likes
                        </div>
                        <div className="text">
                            <h5>Kick start your career with a bang</h5>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )


}