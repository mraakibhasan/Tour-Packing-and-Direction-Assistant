import React from "react";
import Banner from "../components/home/Banner";
import NavBar from "../components/home/NavBar";

const HomePage = () => {
    return (
        <div>
            {/* navbar */}
            <NavBar />
            {/* banner */}
            <Banner></Banner>
        </div>
    );
};

export default HomePage;
