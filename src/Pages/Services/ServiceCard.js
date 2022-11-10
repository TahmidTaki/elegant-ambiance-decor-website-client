import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, title, description, facility, img, price } = service;

  /*  const mystyle = {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center center",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
  }; */
  return (
    <div>
      <article className="group mt-4">
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              src={img}
              alt=""
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />
          </PhotoView>
        </PhotoProvider>
        {/* <img
          alt="Lava"
          src={img}
          className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
        /> */}

        <div className="p-4">
          <h3 className="text-lg font-medium ">{title}</h3>

          <p className="mt-2 text-sm leading-relaxed  line-clamp-3 ">
            {description.slice(0, 100)}
            <span>...</span>
          </p>
          <ul className="steps pb-4">
            <li data-content="$" className="step step-neutral">
              Price: {price}
              {"$"}
            </li>
            <li data-content="★" className="step step-neutral">
              Rated {facility.rating}
            </li>
          </ul>
          <Link
            to={`/services/${_id}`}
            className="block rounded-lg w-3/5 mx-auto bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
          >
            Read More
          </Link>
        </div>
        <hr class="my-8 h-px bg-amber-700 border-0 "></hr>
      </article>
    </div>
  );
};

export default ServiceCard;
