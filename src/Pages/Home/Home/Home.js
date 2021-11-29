import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Banner />

                <About />
                <Service />
            </div>
        </>
    );
};

export default Home;
