import React from "react";

const Projects = () => {
    return (
        <>
            <div className="row project-section align-items-center container-fluid pt-5">
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
                                    <a
                                        href="https://flash-shoots-photography-fullstack.netlify.app/"
                                        target="blank"
                                    >
                                        <span>Live</span>
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/hasanrana21/flash-shoots-photograpy-2"
                                        target="blank"
                                    >
                                        <span>GitHub</span>
                                        <FontAwesomeIcon icon={faGithub} />
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
                                    <a
                                        href="https://laptop-village-fullstack.netlify.app/"
                                        target="blank"
                                    >
                                        <span>Live</span>
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/hasanrana21/laptop-villages-client-2"
                                        target="blank"
                                    >
                                        <span>GitHub</span>
                                        <FontAwesomeIcon icon={faGithub} />
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
                                    <a
                                        href="https://dining-out-fullstack-by-hasan.netlify.app/"
                                        target="blank"
                                    >
                                        <span>Live</span>
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/hasanrana21/dining-out-hot-onion--full-stack-project"
                                        target="blank"
                                    >
                                        <span>GitHub</span>
                                        <FontAwesomeIcon icon={faGithub} />
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

export default Projects;
