"use client"
import { useState } from 'react';

const CTASection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "/image-3.png",
        "/spa.png",
        "/pool.png",
        "/gym.png",
        "/events.png",
       
    ];

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="w-screen mx-auto flex flex-col md:flex-row items-center justify-center bg-white text-center p-10">
            <div className="flex-1 p-4">
                <h2 className="text-2xl font-bold mb-4">Explore Our Gallery</h2>
                <p>Take a look at our collection of photos showcasing the beauty of our hotel and its surroundings.</p>
            </div>
            <div className="flex-1 p-4">
                <div id="gallery" className="relative w-full">
                    <div className="relative h-96 overflow-hidden rounded-lg md:h-128">
                        {images.map((image, index) => (
                            <div key={index} className={`absolute w-full h-full ${index === activeIndex ? 'block' : 'hidden'}`}>
                                <img src={image} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" style={{ height: '600px' }}/>
                            </div>
                        ))}
                    </div>
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrev}>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNext}>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
