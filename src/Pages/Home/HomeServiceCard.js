import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const HomeServiceCard = ({ service }) => {
  const { _id, title, description, facility, img, price } = service;
  return (
    <article className="rounded-md my-3 flex transition hover:shadow-xl bg-gray-800 shadow-gray-800/25">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white">
          <span> &copy;</span>
          <span className="w-px flex-1 bg-white/10"></span>
          <span>{facility.name}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" className="aspect-square sm:h-full sm:w-full object-cover" />
          </PhotoView>
        </PhotoProvider>
      </div>
      {/* <div className="hidden sm:block sm:basis-56">
        <img
          alt="serviceImage"
          src={img}
          className="aspect-square sm:h-full sm:w-full object-cover"
        />
      </div> */}

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-l border-white/10 sm:!border-l-transparent sm:p-6">
          <h3 className="font-bold uppercase text-white py-2">{title}</h3>
          <img src={img} alt="" className="object-cover h-40 w-full sm:hidden" />
          <p className="mt-2 py-2 text-sm leading-relaxedline-clamp-3 text-gray-200">
            {description.slice(0, 100)}
            <span>...</span>
          </p>
        </div>
        <ul className="steps pb-4">
          <li data-content="$" className="step step-neutral">
            Price: {price}
            {"$"}
          </li>
          <li data-content="★" className="step step-neutral">
            Rated {facility.rating}
          </li>
        </ul>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            to={`/services/${_id}`}
            className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HomeServiceCard;
