import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { FaBed, FaSpa, FaUtensils, FaEnvelope } from 'react-icons/fa';

export default function GetApp() {
  return (
    <section className="2xl:max-container flex-col" >
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-white">Deploy faster</h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-yellow-600 sm:text-5xl lg:text-balance">Everything you need is here</p>
            <p className="mt-6 text-lg leading-8 text-white">Indulge in our exquisite accommodations, rejuvenating spa treatments, delicious culinary delights, and enchanting event spaces.</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                    <FaBed className="h-6 w-6 text-white" />
                  </div>
                 Accomodation
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">Experience luxury and comfort in our elegantly designed rooms with modern amenities.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                    <FaSpa className="h-6 w-6 text-white" />
                  </div>
                  Spa & Wellness
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">Relax and unwind with our expert massage treatments tailored to your needs.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-normal leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                    <FaUtensils className="h-6 w-6 text-white" />
                  </div>
                  Dinning Experience
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">Savor the flavors of both local and international cuisine at our onsite restaurant.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                    <FaEnvelope className="h-6 w-6 text-white" />
                  </div>
                  Events spaces
                </dt>
                <dd className="mt-2 text-base font-400 leading-7 text-white">We large space for your events, from weddings to concerts, with a variety of amenities and features.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

    </section>
  );
}