import React from "react";
import Slide from "react-reveal/Slide";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "./Project.css";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Project = (props) => {
    const {
        id,
        project_name,
        project_details,
        image1,
        image2,
        image3,
        image4,
        image5,
        liveLink,
        github,
    } = props.project;
    return (
        <>
            <div className="row container mx-auto project-section align-items-center pt-5 ">
                <Slide left>
                    <div className="col-md-6 project-slider container-fluid">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            className="mySwiper slide"
                        >
                            <SwiperSlide>
                                {" "}
                                <img
                                    className="img-fluid"
                                    src={image1}
                                    alt=""
                                />{" "}
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <img
                                    className="img-fluid"
                                    src={image2}
                                    alt=""
                                />{" "}
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <img
                                    className="img-fluid"
                                    src={image3}
                                    alt=""
                                />{" "}
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <img
                                    className="img-fluid"
                                    src={image4}
                                    alt=""
                                />{" "}
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <img
                                    className="img-fluid"
                                    src={image5}
                                    alt=""
                                />{" "}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Slide>

                <Slide right>
                    <div className="col-md-6 project-info container-fluid">
                        <span style={{ color: "lightgrey" }}>{id}</span>
                        <h4>{project_name}</h4>
                        <p>
                            {" "}
                            <small>{project_details}</small>{" "}
                        </p>

                        {id === 1 ? (
                            <div>
                                <div className="technology-tag">
                                    <button>React.js</button>
                                    <button>Node.js</button>
                                    <button>Express.js</button>
                                    <button>MongoDB</button>
                                    <button>Stripe</button>
                                    <button>Bootstrap</button>
                                    <button>Firebase</button>
                                </div>
                                <div className="social-icon project-icon my-3">
                                    <a href={liveLink} target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href={github} target="blank">
                                        <span>GitHub</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        ) : id === 2 ? (
                            <div>
                                <div className="technology-tag">
                                    <button>React.js</button>
                                    <button>Node.js</button>
                                    <button>Express.js</button>
                                    <button>MongoDB</button>
                                    <button>Material UI</button>
                                    <button>Bootstrap</button>
                                    <button>Firebase</button>
                                </div>
                                <div className="social-icon project-icon my-3">
                                    <a href={liveLink} target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href={github} target="blank">
                                        <span>GitHub</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="technology-tag">
                                    <button>React.js</button>
                                    <button>Node.js</button>
                                    <button>Express.js</button>
                                    <button>MongoDB</button>
                                    <button>Bootstrap</button>
                                    <button>Firebase</button>
                                </div>
                                <div className="social-icon project-icon my-3">
                                    <a href={liveLink} target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href={github} target="blank">
                                        <span>GitHub</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </Slide>
            </div>
        </>
    );
};

export default Project;
