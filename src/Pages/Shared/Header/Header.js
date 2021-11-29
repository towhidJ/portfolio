import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div>
            <nav className="navbar px-3 py-0 navbar-expand-lg header fixed">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <h1 className="logo">Ti</h1>
                    </Link>
                    <button
                        className="navbar-toggler mobile-expand-menu"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>
                    <Slide right>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav menu">
                                <li className="nav-item">
                                    <Link
                                        to="/"
                                        className="nav-link active"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/aboutMe" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/projectsData"
                                        className="nav-link"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blogs" className="nav-link">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item mt-2 mb-5 mb-sm-0">
                                    <a
                                        href="https://drive.google.com/uc?export=download&id=1cW9y6nEEUDpKZ_daSHALeU-JF3gWNA51"
                                        download
                                        className="resume"
                                    >
                                        <span>
                                            <i className="fas fa-file-download"></i>
                                        </span>{" "}
                                        RESUME
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Slide>
                </div>
            </nav>
        </div>
    );
};

export default Header;
