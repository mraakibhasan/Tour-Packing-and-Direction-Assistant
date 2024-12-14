import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../constant/AxiosInstance";
import { TailSpin } from "react-loader-spinner";

const Chocolate = () => {
  const [chocolates, setChocolates] = useState([]);
  const [modalData, setModalData] = useState(null);

  // Fetch chocolates from API
  const { data, isLoading, isError } = useQuery({
    queryKey: ["chocolates"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/chocolate-list");
      return data.data;
    },
    staleTime: 60000,
  });

  useEffect(() => {
    if (data) {
      const initialChocolates = data.map((chocolate) => ({
        ...chocolate,
        section: "left",
      }));
      setChocolates(initialChocolates);
    }
  }, [data]);

  // Handle drag start
  const handleDragStart = (e, chocolate) => {
    e.dataTransfer.setData("chocolate", JSON.stringify(chocolate));
  };

  // Handle drop event
  const handleDrop = (e, targetSection) => {
    const chocolate = JSON.parse(e.dataTransfer.getData("chocolate"));

    setChocolates((prevChocolates) =>
      prevChocolates.map((item) =>
        item.id === chocolate.id ? { ...item, section: targetSection } : item
      )
    );
  };

  const handleBestSelection = async () => {
    const selectedChocolates = chocolates
      .filter((chocolate) => chocolate.section === "right")
      .map((chocolate) => chocolate.id);

    if (selectedChocolates.length === 0) {
      alert("No chocolates selected in the right section!");
      return;
    }

    try {
      const response = await axiosInstance.post("/chocolate/create", {
        capacity: 250,
        chocolates: selectedChocolates,
      });
      setModalData(response.data.data); // Set data for modal
    } catch (error) {
      console.error("Error sending chocolates:", error);
      alert("Failed to send chocolates. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin visible={true} height="80" width="80" color="#4fa94d" />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500">Error loading chocolates. Please try again later!</p>
    );
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-full max-w-screen-xl h-full p-4 gap-4">
        {/* Left Section */}
        <div
          className="w-1/2 bg-white border border-gray-300 p-4 flex flex-col justify-between"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "left")}
          style={{ height: "calc(100vh - 2rem)" }}
        >
          <h2 className="text-xl font-semibold mb-2">Available Chocolate</h2>
          <div className="grid grid-cols-3 gap-1 flex-1">
            {chocolates
              .filter((chocolate) => chocolate.section === "left")
              .map((chocolate) => (
                <div
                  key={chocolate.id}
                  className="relative bg-gray-100 overflow-hidden flex items-center justify-center border border-gray-500 rounded-lg"
                  draggable
                  onDragStart={(e) => handleDragStart(e, chocolate)}
                  style={{
                    cursor: "move",
                    height: "calc(28vh - 1rem)",
                    margin: "0.5rem",
                    flex: "1 1 calc(33.333% - 1rem)",
                  }}
                >
                  <img
                    src={chocolate.image}
                    alt={chocolate.item}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg text-white text-center">
                    <h3 className="text-lg font-bold">{chocolate.name}</h3>
                    <p>Weight: {chocolate.weight}g</p>
                    <p>Value: ${chocolate.value}</p>
                    <p>Ratio: {chocolate.ratio}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-1/2 bg-white border border-gray-500 p-4 flex flex-col justify-between"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "right")}
          style={{ height: "calc(100vh - 2rem)" }}
        >
          <h2 className="text-xl font-semibold mb-2">Your Selections</h2>
          <div className="grid grid-cols-3 gap-1 flex-1">
            {chocolates
              .filter((chocolate) => chocolate.section === "right")
              .map((chocolate) => (
                <div
                  key={chocolate.id}
                  className="relative bg-gray-100 overflow-hidden flex items-center justify-center border border-gray-500 rounded-lg"
                  draggable
                  onDragStart={(e) => handleDragStart(e, chocolate)}
                  style={{
                    cursor: "move",
                    height: "calc(25vh - 1rem)",
                    margin: "0.5rem",
                    flex: "1 1 calc(33.333% - 1rem)",
                  }}
                >
                  <img
                    src={chocolate.image}
                    alt={chocolate.item}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg text-white text-center">
                    <h3 className="text-lg font-bold">{chocolate.name}</h3>
                    <p>Weight: {chocolate.weight}g</p>
                    <p>Value: ${chocolate.value}</p>
                    <p>Ratio: {chocolate.ratio}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Button at the bottom */}
          <div className="mt-auto">
            <button
              onClick={handleBestSelection}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Make the best out of them
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-3/4 max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Let's see what you pick! 😏</h2>
            <p className="text-lg mb-4">{modalData.message}</p>
            <div className="grid grid-cols-2 gap-4">
              {modalData.selected_items.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.chocolate.image}
                    alt={item.chocolate.name}
                    className="w-20 h-20 object-cover mb-2"
                  />
                  <h3 className="text-sm font-bold">{item.chocolate.name}</h3>
                  <p className="text-sm">Weight: {item.weight}g</p>
                  <p className="text-sm">Value: ${item.value}</p>
                </div>
              ))}
            </div>
            <button
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
              onClick={() => setModalData(null)}
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chocolate;
