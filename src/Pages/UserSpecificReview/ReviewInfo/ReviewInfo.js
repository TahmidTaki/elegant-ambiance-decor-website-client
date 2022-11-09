import React, { useEffect, useState } from "react";

const ReviewInfo = ({ review, handleDelete }) => {
  const { _id, service, serviceName, reviewer, email, reviewerImg, message } = review;
  const [serviceDetail, setServiceDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceDetail(data));
  }, [service]);

  return (
    <div>
      <button onClick={() => handleDelete(_id)} className="p-4 bg-rose-400">
        X
      </button>
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
