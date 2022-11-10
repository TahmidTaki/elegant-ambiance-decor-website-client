import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "../Services/Services";
import HomeServiceCard from "./HomeServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/serviceshome")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <section>
        <div className="bg-amber-300">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
              Choose services according to your preference
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque
              explicabo!
            </p>
          </div>
        </div>
        <div className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 ">
          {services.map((service) => (
            <HomeServiceCard key={service._id} service={service}></HomeServiceCard>
          ))}
        </div>
      </section>

      <Link
        to={"allservices"}
        className="group relative inline-block focus:outline-none focus:ring focus:ring-yellow-400"
      >
        <span className="relative z-10 block rounded bg-yellow-700 px-12 py-3 text-sm font-medium text-white transition group-hover:scale-105">
          View All Services
        </span>

        <span className="absolute inset-0 -rotate-3 scale-105 rounded bg-yellow-700/25 transition group-hover:rotate-0"></span>
      </Link>
    </div>
  );
};

export default Home;
