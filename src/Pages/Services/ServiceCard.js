import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, title, description, facility, img } = service;
  return (
    <div>
      <h2>service card</h2>
      <p>
        <img src={img} alt="" />
        {_id} {title} {facility.name}
      </p>
    </div>
  );
};

export default ServiceCard;
