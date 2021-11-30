import React from "react";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Typewriter from "typewriter-effect";
import towhid from "../../../images/towhid.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="p-5 row justify-content-evenly align-items-center overflow-hidden">
            <Bounce left>
                <div className="col-12 col-md-5 banner-text">
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
                        Bootstrap,ASP.NET,ASP.NET Core ,MSSQL-2017, Bootstrap5,
                        HTML5, CSS3. and Comfortable with Material UI,Node.js,
                        Express.js, MongoDB, JSON.
                    </p>

                    <div className="social-icon">
                        <a
                            href="mailto:towhidulislamcse@gmail.com"
                            target="blank"
                        >
                            {" "}
                            <i className="far fa-envelope"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/towhidcse/"
                            target="blank"
                        >
                            {" "}
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/towhidJ" target="blank">
                            {" "}
                            <i class="fab fa-github"></i>
                        </a>
                    </div>

                    <a href="#contact">
                        <button className="btn primary-button">HIRE ME</button>
                    </a>
                </div>
            </Bounce>

            <Slide bottom>
                <div className="col-12 col-md-7 banner-image my-3 my-md-0 ">
                    <img className="img-fluid" src={towhid} alt="" />
                </div>
            </Slide>
        </div>
    );
};

export default Banner;
