import React from "react";
import { IoSettingsSharp } from "react-icons/io5"; // Blue settings icon
import { FaBalanceScale } from "react-icons/fa"; // Yellow balance scale icon
import { RiLockFill } from "react-icons/ri"; // Red lock icon

const Features = () => {
    const features = [
        {
            title: "Efficient",
            description:
                "Our dating services help thousands of singles find meaningful connections and lasting love each month. Join us today and discover your perfect match on BlissSingles — your path to a new and exciting relationship starts here!",
            icon: <IoSettingsSharp />, // Blue settings icon
            bgColor: "bg-blue-300",
            iconColor: "text-blue-600",
        },
        {
            title: "Balance",
            description:
                "Achieve the perfect balance in your dating life with our carefully curated services. We help singles like you find not just love, but also compatibility, ensuring that every connection has the potential to grow into something meaningful and lasting.",
            icon: <FaBalanceScale />, // Yellow balance scale icon
            bgColor: "bg-yellow-200",
            iconColor: "text-yellow-600",
        },
        {
            title: "Smart Blocking",
            description:
                "Feel secure with our advanced smart blocking feature. Protect yourself and others by using our intelligent blocking system that ensures a safe and respectful dating experience for everyone on BlissSingles. Your safety is our top priority.",
            icon: <RiLockFill />, // Red lock icon
            bgColor: "bg-red-300",
            iconColor: "text-red-600",
        },
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-12">
                <h2 className="text-4xl font-bold  mb-12 text-gray-800">
                    Why <span className="text-red-400">Choose</span> Us
                </h2>
                <div className="grid md:grid-cols-3 border-2 border-gray-700">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} py-16 px-12 border-2 border-gray-700`}
                        >
                            <div className={`text-7xl mb-8 ${feature.iconColor}`}>{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-black mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
