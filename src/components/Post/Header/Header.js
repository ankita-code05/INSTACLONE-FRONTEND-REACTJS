import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import Logo from '../../../images/circle_icon.svg';
import Camera from '../../../images/camera_icon.png';
import './Header.css';

export default function Header() {

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Logo" />
                        <span >Insta Clone</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/post/new"> <img src={Camera} alt="Logo" /></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}