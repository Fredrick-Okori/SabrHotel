'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function Introduction() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const lastImage = document.querySelector('.last-image');
        if (lastImage) {
            lastImage.addEventListener('mouseenter', () => setShowButton(true));
            lastImage.addEventListener('mouseleave', () => setShowButton(false));
        }
    }, []);

    return (
        <section className="flexCenter flex-col bg-white">
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold" style={{ color: '#E89B23' }}>WELCOME TO SABR RESORT HOTEL</h2>
                    <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-dark sm:text-5xl">Located in Wakiso, Kasubi Tombs</p>
                    <p className="mx-auto mt-4 max-w-md text-justify  text-gray-900 sm:text-sm">
                        With a foundation established in 2020, Sabr Resort Hotel prides itself on years of experience in hospitality, providing top-notch services tailored to meet the needs of every guest.
                    </p>
                </div>
                <div className="flex justify-center mt-12">
                    <Image src="/img-1.png" alt="Sabr Resort Hotel" width={900} height={400} />
                    <Image src="/img-3.png" alt="Sabr Resort Hotel" width={900} height={400} />

                </div>
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 mt-12 flex flex-col lg:flex-row">
                    <div className="flex-1">
                        <p className="mx-auto mt-2 max-w-lg text-pretty text-left text-4xl font-medium tracking-tight text-dark sm:text-5xl">Naturally Luxurious and comfortable Rooms and private Suites</p>
                        <p className="mx-auto mt-4 max-w-md text-justify  text-gray-900 sm:text-sm">
                            At Sabr Resort Hotel, our motivation lies in creating a peaceful retreat where guests can unwind and create cherished memories. We adhere to principles of excellence, hospitality, and sustainability.

                            Having served a diverse range of clients, from leisure travelers seeking relaxation to business guests in need of a comfortable stay, Sabr Resort Hotel caters to all with unparalleled hospitality.d to meet the needs of every guest.
                        </p>
                    </div>
                    <div className="flex-1 lg:ml-8 mt-8 lg:mt-0 relative">
                        <div className="last-image relative" onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}>
                            <Image src="/hotel_view.jpeg" alt="Sabr Resort Hotel" className="rounded-lg" width={900} height={400} />
                            <div className={`absolute bottom-0 left-0 right-0 top-0 bg-black rounded-lg bg-opacity-50 flex items-center justify-center transition-all duration-500 ease-in-out ${showButton ? 'opacity-400' : 'opacity-0'}`}>
                                <div>
                                    <h3 className="text-white text-2xl font-bold mb-4">Experience Luxury</h3>
                                    <p className="text-white text-lg">Indulge in the finest amenities and services at Sabr Resort Hotel.</p>
                                    <div>
                                        <Button className="mt-4" href="/rooms" type="button" title="Book your Stay" variant="" />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}