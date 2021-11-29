import Slide from "react-reveal/Slide";
import "./About.css";

const About = () => {
    return (
        <>
            <div className=" towhid_tm_about">
                <div className="container ">
                    <div className="towhid_tm_title_holder">
                        <span>About Me</span>
                        <h3>About Me</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Amet, egestas. Id fermentum nullam ipsum
                            massa.
                        </p>
                    </div>

                    <div className="about_inner">
                        <div className="left">
                            <img src="" alt="" />
                        </div>
                        <div className="right">
                            <div className="short">
                                <h3>Hi There!</h3>
                                <p>
                                    I'm a Monalisa hug web designer &amp;
                                    front‑end developer focused on crafting
                                    clean &amp; user‑friendly experiences, I am
                                    passionate about building excellent software
                                    that improves the lives of those around me.
                                </p>
                            </div>
                            <div className="extra">
                                <h3 className="title">Personal Infos</h3>
                                <div className="list">
                                    <ul>
                                        <li>
                                            <p>
                                                <span>Name :</span> Towhidul
                                                Islam
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Address :</span>{" "}
                                                Chittagong
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Age :</span> 00 Years
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Phone :</span>{" "}
                                                +8801521401825
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Nationality :</span> BD
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Email :</span>{" "}
                                                towhidulislamcse@gmail.com
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Freelance :</span>{" "}
                                                Available
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Languages :</span> Bangla,
                                                English
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className=" color">
                                    <a href="img/about/1.jpg" download>
                                        <button className="ms-2 towhid_btn btn">
                                            Download Cv
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="towhid_tm_resume">
                        <div className="main_title">
                            <h3>Skill &amp; Education</h3>
                        </div>
                        <div className="resume_inner">
                            <div
                                className="skills wow fadeInLeft"
                                data-wow-duration="1.2s"
                            >
                                <div className="resume_title">
                                    <img
                                        className="svg"
                                        src="img/svg/briefcase.svg"
                                        alt=""
                                    />
                                    <span>Skills</span>
                                </div>
                                <Slide left>
                                    <div className="tokyo_progress">
                                        <div className="progress_inner">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div
                                                                className="skillbar"
                                                                data-percent="55%"
                                                            >
                                                                <div className="skillbar-title">
                                                                    Web design
                                                                </div>
                                                                <div className="skill-bar-percent">
                                                                    80%
                                                                </div>
                                                                <div
                                                                    className="skillbar-bar"
                                                                    style={{
                                                                        width: "80%",
                                                                    }}
                                                                ></div>
                                                            </div>

                                                            <div
                                                                className="skillbar"
                                                                data-percent="80%"
                                                            >
                                                                <div className="skillbar-title">
                                                                    ReactJS
                                                                </div>
                                                                <div className="skill-bar-percent">
                                                                    85%
                                                                </div>
                                                                <div
                                                                    className="skillbar-bar"
                                                                    style={{
                                                                        width: "85%",
                                                                    }}
                                                                ></div>
                                                            </div>

                                                            <div
                                                                className="skillbar"
                                                                data-percent="40%"
                                                            >
                                                                <div className="skillbar-title">
                                                                    Web
                                                                    Development
                                                                </div>
                                                                <div className="skill-bar-percent">
                                                                    80%
                                                                </div>
                                                                <div
                                                                    className="skillbar-bar"
                                                                    style={{
                                                                        width: "80%",
                                                                    }}
                                                                ></div>
                                                            </div>

                                                            <div
                                                                className="skillbar"
                                                                data-percent="70%"
                                                            >
                                                                <div className="skillbar-title">
                                                                    ASP.NET
                                                                </div>
                                                                <div className="skill-bar-percent">
                                                                    90%
                                                                </div>
                                                                <div
                                                                    className="skillbar-bar"
                                                                    style={{
                                                                        width: "90%",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>

                            <div
                                className="education  "
                                data-wow-duration="1.2s"
                                data-wow-delay="0.3s"
                            >
                                <div className="resume_title">
                                    <img
                                        className="svg"
                                        src="img/svg/award.svg"
                                        alt=""
                                    />
                                    <span>Education</span>
                                </div>
                                <Slide right>
                                    <div className="edu_list">
                                        <ul>
                                            <li>
                                                <p>
                                                    <span>BSc In CSE</span> -
                                                    BGC Trust University
                                                    Bangladesh
                                                </p>
                                                <span className="year">
                                                    2017-2021
                                                </span>
                                            </li>
                                            <li>
                                                <p>
                                                    <span>HSC</span> - Islamia
                                                    Collage Chittagong
                                                </p>
                                                <span className="year">
                                                    2014-2016
                                                </span>
                                            </li>
                                            <li>
                                                <p>
                                                    <span>
                                                        ASP.NET Web Development
                                                        Course
                                                    </span>{" "}
                                                    - BASIS BITM
                                                </p>
                                                <span className="year">
                                                    2019-2019
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
