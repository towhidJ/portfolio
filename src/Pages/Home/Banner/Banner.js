import React from "react";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="p-5 row justify-content-evenly align-items-center overflow-hidden">
            <Bounce left>
                <div className="col-md-5 banner-text">
                    <h4 className="mb-0">Hello! I'm</h4>
                    <h5>Towhidul Islam</h5>
                    <h3>
                        <Typewriter
                            options={{
                                strings: [
                                    "Front End Developer",
                                    "MERN Stack Developer",
                                    "Programmer",
                                    "Quick Learner",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <p>
                        A self-motivated enthusiastic Front End Developer with a
                        deep interest in Javascript. and knowing some frameworks
                        for the Front-End and the Backend. I am good at
                        Javascript, ES6, React, REST API, React
                        Bootstrap,ASP.NET,MSSQL, Bootstrap4, HTML5, CSS3. and
                        Comfortable with Material UI,Node.js, Express.js,
                        MongoDB, JSON.
                    </p>

                    <div className="social-icon">
                        <a
                            href="mailto:hasanrana178821@gmail.com"
                            target="blank"
                        >
                            {" "}
                            <i className="far fa-envelope"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hasan-rana-091803210/"
                            target="blank"
                        >
                            {" "}
                            <i className="far fa-github"></i>
                        </a>
                        <a href="https://github.com/hasanrana21" target="blank">
                            {" "}
                            <i class="far fa-github"></i>
                        </a>
                    </div>

                    <Link to="/contact">
                        <button className="btn primary-button">HIRE ME</button>
                    </Link>
                </div>
            </Bounce>

            <Slide bottom>
                <div className="col-md-7 banner-image">
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/8czgD2W/portfolio-Edited.png"
                        alt=""
                    />
                </div>
            </Slide>
        </div>
    );
};

export default Banner;
