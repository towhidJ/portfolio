import React from "react";
import "./Service.css";
const Service = () => {
    return (
        <>
            <div className="mt-5 p-5">
                <div class="">
                    <div class="towhid_tm_title_holder py-5">
                        <span className="mt-5">Services</span>
                        <h3>I provide wide range of digital services</h3>
                    </div>
                    <div class="service_list">
                        <div className=" row row-cols-1 row-cols-md-4 g-2 mb-5">
                            <div className="col">
                                <div class="card text-center ">
                                    <h1
                                        className=" py-3 fw-bolder "
                                        style={{ color: "white" }}
                                    >
                                        <i class="far fa-file-code"></i>
                                    </h1>
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">
                                            Web Developer
                                        </h5>
                                    </div>
                                    <button className="btn">
                                        Learn more{" "}
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card text-center ">
                                    <h1
                                        className=" py-3 fw-bolder "
                                        style={{ color: "aliceblue" }}
                                    >
                                        <i class="fab fa-react"></i>
                                    </h1>
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">
                                            React Native Developer
                                        </h5>
                                    </div>
                                    <button className="btn">
                                        Learn more{" "}
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card text-center ">
                                    <h1
                                        className=" py-3 fw-bolder "
                                        style={{ color: "pink" }}
                                    >
                                        <i class="fas fa-desktop"></i>
                                    </h1>
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">
                                            Desktop Software Develop
                                        </h5>
                                    </div>
                                    <button className="btn">
                                        Learn more{" "}
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card text-center ">
                                    <h1
                                        className=" py-3 fw-bolder "
                                        style={{ color: "aliceblue" }}
                                    >
                                        <i class="fab fa-react"></i>
                                    </h1>
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">
                                            ASP.NET Developer
                                        </h5>
                                    </div>
                                    <button className="btn">
                                        Learn more{" "}
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
};

export default Service;
