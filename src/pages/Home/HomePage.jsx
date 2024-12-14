import React from "react";
import Banner from "./components/Banner";
import NavBar from "../../components/NavBar";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
    return (
        <div style={{ fontFamily: '"Caveat", cursive' }} >
            {/* navbar */}
            < NavBar />
            {/* banner */}
            < Banner ></ Banner>
            {/* features */}
            <Features></Features>
            {/* testimonials */}
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;
