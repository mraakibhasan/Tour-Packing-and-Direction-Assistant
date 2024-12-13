import React from "react";
import Banner from "./components/Banner";
import NavBar from "../../components/NavBar";

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
