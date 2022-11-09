import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReviewInfo = ({ review, handleDelete }) => {
  const { _id, service, serviceName, reviewer, email, reviewerImg, message } = review;
  const [serviceDetail, setServiceDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceDetail(data);
        console.log(data);
      });
  }, [service]);

  return (
    <div>
      <button onClick={() => handleDelete(_id)} className="p-4 bg-rose-400">
        X
      </button>
      <Link to={`/editReview/${_id}`}>
        <button>edit review</button>
      </Link>

      <p>{serviceName}</p>
      <p>{reviewer}</p>
      <p>{email}</p>
      <img src={reviewerImg} alt="" className="w-8 h-8" />
      {serviceDetail?.img && (
        <p>
          Srvice img: <img src={serviceDetail.img} alt="" className="w-8 h-8" />
        </p>
      )}
      <p>{message}</p>
      <hr />
    </div>
  );
};

export default ReviewInfo;
