import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
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
                <Contact />
            </div>
        </>
    );
};

export default Home;
