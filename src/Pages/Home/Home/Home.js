import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Banner />
                <About />
            </div>
        </>
    );
};

export default Home;
