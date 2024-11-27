import React from 'react';
import bannerImg from './../../assets/banner-pic.png'
import cloud from './../../assets/pink-cloud.webp'

const Banner = () => {
    return (
        <div className=''>
            <div className=''>
                <div className='absolute mt-16 scale-75'>
                    <img src={cloud} alt="" />
                </div>
                <div className='absolute right-0 mt-16 scale-75'>
                    <img src={cloud} alt="" />
                </div>
            </div>
            <div className="bg-white min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl space-y-6 text-center">
                    <div>
                        <h2 className="mt-6 text-5xl font-bold text-gray-900">Find Your <span className='text-red-400'>Real Connections</span></h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            We committed to helping singles find love every day and we are confident in our ability to do
                            so. eharmony matches single women and men for lasting and fulfilling relationships.
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="button"
                            className="shadow-[3px_3px_0px_black] relative px-6 py-3 text-sm font-medium text-black bg-[rgb(255,180,180)] border-2 border-black hover:bg-red-300 hover:scale-105 hover:transition-all"
                        >
                            Join MyDate
                        </button>
                    </div>
                </div>
                <div className='mt-6'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
