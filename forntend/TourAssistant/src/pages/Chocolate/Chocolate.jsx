import React, { useState } from "react";

// Image imports
import truffles from "../../assets/chocolate_images/chocolate_truffles.jpg";
import darkChocolate from "../../assets/chocolate_images/dark_chocolate.png";
import hazelnut from "../../assets/chocolate_images/hazelnut_chocolate.jpg";
import fudge from "../../assets/chocolate_images/chocolate_fudge.jpg";
import milkChocolate from "../../assets/chocolate_images/milk_chocolate.webp";
import bars from "../../assets/chocolate_images/dark_chocolate_bar.jpg";
import mocha from "../../assets/chocolate_images/mocha_chocolate.jpg";
import caramel from "../../assets/chocolate_images/caramel_chocolate.jpg";
import whiteChocolate from "../../assets/chocolate_images/white_chocolate.jpg";

const chocolates = [
    { item: "Chocolate Truffles", weight: 60, value: 150, ratio: 2.5, image_link: truffles },
    { item: "Dark Chocolate", weight: 50, value: 85, ratio: 1.7, image_link: darkChocolate },
    { item: "Hazelnut Chocolate", weight: 80, value: 120, ratio: 1.5, image_link: hazelnut },
    { item: "Chocolate Fudge", weight: 70, value: 90, ratio: 1.29, image_link: fudge },
    { item: "Milk Chocolate", weight: 100, value: 75, ratio: 0.75, image_link: milkChocolate },
    { item: "Dark Chocolate Bars", weight: 90, value: 55, ratio: 0.61, image_link: bars },
    { item: "Mocha Chocolate", weight: 110, value: 65, ratio: 0.59, image_link: mocha },
    { item: "Caramel Chocolate", weight: 150, value: 50, ratio: 0.33, image_link: caramel },
    { item: "White Chocolate", weight: 125, value: 40, ratio: 0.32, image_link: whiteChocolate },
];

const Chocolate = () => {
    const [leftChocolates, setLeftChocolates] = useState([...chocolates]);
    const [rightChocolates, setRightChocolates] = useState([]);

    const handleDragStart = (e, chocolate, fromLeft) => {
        e.dataTransfer.setData("chocolate", JSON.stringify(chocolate));
        e.dataTransfer.setData("fromLeft", fromLeft);
    };

    const handleDrop = (e, isLeftDrop) => {
        const chocolate = JSON.parse(e.dataTransfer.getData("chocolate"));
        const fromLeft = e.dataTransfer.getData("fromLeft") === "true";

        if (isLeftDrop && !fromLeft) {
            setRightChocolates(rightChocolates.filter((c) => c.item !== chocolate.item));
            setLeftChocolates([...leftChocolates, chocolate]);
        } else if (!isLeftDrop && fromLeft) {
            setLeftChocolates(leftChocolates.filter((c) => c.item !== chocolate.item));
            setRightChocolates([...rightChocolates, chocolate]);
        }
    };

    const handleBestSelection = () => {
        console.log(rightChocolates);  // Logs the array of chocolates in the right section (your selections)
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex w-full max-w-screen-xl h-full p-4 gap-4">
                {/* Left Section */}
                <div
                    className="w-1/2 bg-white border border-gray-300 p-4 flex flex-col justify-between"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, true)}
                    style={{ height: "calc(100vh - 2rem)" }}
                >
                    <h2 className="text-xl font-semibold mb-2">Available Chocolate</h2>
                    <div className="grid grid-cols-3 gap-1 flex-1">
                        {leftChocolates.map((chocolate) => (
                            <div
                                key={chocolate.item}
                                className="relative bg-gray-100 overflow-hidden flex items-center justify-center border border-gray-500"
                                draggable
                                onDragStart={(e) => handleDragStart(e, chocolate, true)}
                                style={{
                                    cursor: "move",
                                    height: "calc(28vh - 1rem)", // Reduce height to fit 3 items in the vertical space
                                    margin: "0.5rem", // Adjust margin for proper spacing
                                    flex: "1 1 calc(33.333% - 1rem)", // Ensure 3 items fit horizontally
                                }}
                            >
                                <img
                                    src={chocolate.image_link}
                                    alt={chocolate.item}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-white text-center p-2">
                                        <h3 className="font-bold text-sm">{chocolate.item}</h3>
                                        <p className="text-xs">Weight: {chocolate.weight}g</p>
                                        <p className="text-xs">Value: ${chocolate.value}</p>
                                        <p className="text-xs">Ratio: {chocolate.ratio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div
                    className="w-1/2 bg-white border border-gray-500 p-4 flex flex-col justify-between"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, false)}
                    style={{ height: "calc(100vh - 2rem)" }}
                >
                    <h2 className="text-xl font-semibold mb-2">Your Selections</h2>
                    <div className="grid grid-cols-3 gap-1 flex-1">
                        {rightChocolates.map((chocolate) => (
                            <div
                                key={chocolate.item}
                                className="relative bg-gray-100 overflow-hidden flex items-center justify-center border border-gray-500"
                                draggable
                                onDragStart={(e) => handleDragStart(e, chocolate, false)}
                                style={{
                                    cursor: "move",
                                    height: "calc(25vh - 1rem)", // Reduce height to fit 3 items in the vertical space
                                    margin: "0.5rem", // Adjust margin for proper spacing
                                    flex: "1 1 calc(33.333% - 1rem)", // Ensure 3 items fit horizontally
                                }}
                            >
                                <img
                                    src={chocolate.image_link}
                                    alt={chocolate.item}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-white text-center p-2">
                                        <h3 className="font-bold text-sm">{chocolate.item}</h3>
                                        <p className="text-xs">Weight: {chocolate.weight}g</p>
                                        <p className="text-xs">Value: ${chocolate.value}</p>
                                        <p className="text-xs">Ratio: {chocolate.ratio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button at the bottom */}
                    <div className="mt-auto">
                        <button
                            onClick={handleBestSelection}
                            className="w-full bg-red-400 text-white py-2 rounded-lg hover:bg-red-600"
                        >
                            Make the best out of them
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chocolate;
