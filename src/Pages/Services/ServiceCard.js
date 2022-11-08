import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, description, facility, img } = service;
  return (
    <div>
      <h2>service card</h2>
      <p>
        <img src={img} alt="" />
        {_id} {title} {facility.name}
      </p>
      <Link to={`/review/${_id}`}>
        <button>go</button>
      </Link>
    </div>
  );
};

export default ServiceCard;
