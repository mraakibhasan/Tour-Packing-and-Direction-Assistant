import React, { useState } from 'react';
import { SiComma } from 'react-icons/si'; // Import SiComma from react-icons
import img from '../../../assets/testi.png';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Emily R.",
            testimonial:
                "BlissSingles has transformed my dating life! When I joined, I was unsure about online dating, but this platform completely exceeded my expectations. I've met amazing people who share my values, and finally found someone who truly understands me. The matching system is spot on, and the whole experience has been positive. I highly recommend BlissSingles to anyone looking for meaningful connections and a user-friendly experience.",
            image: img
        },
        {
            name: "Michael S.",
            testimonial:
                "Joining BlissSingles was the best decision I’ve made. The platform is incredibly easy to use, and the matches are genuinely compatible. I’ve tried other dating apps before, but BlissSingles felt different—it’s tailored to help you find real connections. Thanks to this platform, I’m now in a happy and fulfilling relationship with someone who shares my interests and goals. I couldn’t be happier and highly recommend it to anyone looking for something more serious.",
            image: img
        },
        {
            name: "Sophia L.",
            testimonial:
                "I never imagined online dating could lead to something so meaningful, but BlissSingles made it possible. The platform offers a safe and enjoyable experience, with a great community of people. It’s easy to connect with like-minded individuals, and the user interface is so intuitive. I’m grateful for the opportunity to meet such amazing people and highly recommend BlissSingles to anyone seeking genuine connections.",
            image: img
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState('');

    const handlePrev = () => {
        setTransitionClass('slide-out-right');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
            setTransitionClass('slide-in-left');
        }, 300);
    };

    const handleNext = () => {
        setTransitionClass('slide-out-left');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
            setTransitionClass('slide-in-right');
        }, 300);
    };

    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-thin text-gray-800">
                        What Our Users Say
                    </h2>
                    <div className="flex space-x-4">
                        <div
                            onClick={handlePrev}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white cursor-pointer"
                        >
                            <span className="text-3xl">&#8592;</span>
                        </div>
                        <div
                            onClick={handleNext}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white cursor-pointer"
                        >
                            <span className="text-3xl">&#8594;</span>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-row items-start text-left">
                    <div
                        className={`w-3/5 px-8 transition-transform duration-500 z-10 ${transitionClass}`}
                        onAnimationEnd={() => setTransitionClass('')}
                    >
                        {/* Adding SiComma icon */}
                        <div className="text-5xl text-red-500 mb-4 flex rotate-180 justify-end">
                            <SiComma />
                            <SiComma />
                        </div>

                        <p className="text-2xl text-gray-700 italic mb-4">
                            "{testimonials[currentIndex].testimonial}"
                        </p>
                        <h3 className="text-xl font-semibold text-red-500">
                            - {testimonials[currentIndex].name}
                        </h3>
                    </div>
                    <div className="w-2/5">
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-[400px] h-auto rounded-lg z-50"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2 w-full">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 flex-grow ${currentIndex === index ? 'bg-red-500' : 'bg-gray-300'} rounded-full`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
