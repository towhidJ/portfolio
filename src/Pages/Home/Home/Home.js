import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Blogs from "./../../Blogs/Blogs";
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
                <Blogs />
                <Contact />
            </div>
        </>
    );
};

export default Home;
