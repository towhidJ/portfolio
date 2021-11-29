import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Projects from "./../../Projects/Projects/Projects";
import Service from "./../Service/Service";

const Home = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Banner />

                <About />
                <Service />
                <Projects />
            </div>
        </>
    );
};

export default Home;
