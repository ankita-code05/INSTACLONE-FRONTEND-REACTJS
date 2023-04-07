import React, { useState, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../images/circle_icon.svg';
import Circle from '../../../images/circle_icon.svg';
import heart from '../../../images/heart_icon.png';
import rocket from '../../../images/rocket_icon.jpg';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './List.css';

import Header from "../Header/Header";
import { PostList } from "../../../contexts/PostContext";

export default function AllPost() {

    const { posts } = useContext(PostList);
    return (
        <>
            <Header />

            <div className="list-post-container">
                {posts.length === 0 ? <h3>No post available...</h3> :
                    posts.map(post => {

                        return <div key={post.id}>
                            <div className="row m-3" >
                                <div className="col-12">
                                    <Card className="post-card">
                                        <Card.Header className="card-header">
                                            <div>
                                                <h4>{post.name}</h4>
                                                <label>{post.location}</label>
                                            </div>
                                            <div>
                                                <span className='dot'>&#9679;&#9679;&#9679;</span>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="card-body">
                                            <img src={`http://localhost:4000/${post.image}`} alt="" />
                                        </Card.Body>
                                        <Card.Footer className="card-footer">
                                            <div className="wrapper">
                                                <div className="col-5">
                                                    <img src={heart} alt="heart_icon" />
                                                    <img src={rocket} alt="heart_icon" />
                                                    <p> {post.likes}</p>
                                                </div>
                                                <div className="col-5">
                                                    <span className='date'>{post.date}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h5> {post.description}</h5>
                                            </div>
                                        </Card.Footer>
                                    </Card>


                                </div>
                            </div>

                        </div>
                    })}

            </div>


        </>

    )
}