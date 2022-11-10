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
      {/* prev code starts */}

      {/* prev code ends */}
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="">
            <div>
              <img
                src={reviewerImg}
                alt="avatar"
                className="object-cover w-10 h-10 mx-auto rounded-full bg-gray-500"
              />
              <span className="hover:underline dark:text-gray-400">{reviewer}</span>
            </div>
            <p>Reviewer Email: {email}</p>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">{serviceName}</p>
            <div>
              {serviceDetail?.img && (
                <p>
                  Service img: <img src={serviceDetail.img} alt="" className="w-64 h-64 mx-auto" />
                </p>
              )}
            </div>
            <p className="mt-2">{message}</p>
          </div>
          <div className="flex justify-center p-2">
            <Link to={`/editReview/${_id}`} className="hover:underline text-orange-400">
              <button className="btn btn-warning mx-3">Edit Review</button>
            </Link>
            <div className="">
              <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-8 h-px bg-amber-700 border-0 "></hr>
    </div>
  );
};

export default ReviewInfo;
