import React from "react";
import { useLoaderData } from "react-router-dom";

const Review = () => {
  const service = useLoaderData();
  return (
    <div>
      <h2>
        Review of {service._id} & {service.title}
      </h2>
    </div>
  );
};

export default Review;
