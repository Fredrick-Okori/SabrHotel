import React from "react";
import Image from "next/image";

export default function Introduction() { 
    return (
        <section className="flexCenter flex-col bg-white">
            <div className=" py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold" style={{ color: '#E89B23' }}>Luxury with comfort</h2>
                    <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-dark sm:text-5xl">Located in Wakiso, Kasubi Tombs</p>
                    <p className="mx-auto mt-4 max-w-md text-justify  text-gray-900 sm:text-sm">
                        With a foundation established in 2020, Sabr Resort Hotel prides itself on years of experience in hospitality, providing top-notch services tailored to meet the needs of every guest.
                    </p>
                </div>
                <div className="flex justify-center mt-12">
                    <Image src="/img-1.png" alt="Sabr Resort Hotel" width={900} height={400} />
                    <Image src="/img-3.png" alt="Sabr Resort Hotel" width={900} height={400} />
                </div>
                
            </div>
            </section>
    );
}