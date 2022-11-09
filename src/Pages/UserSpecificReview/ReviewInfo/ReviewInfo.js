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
      {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          

          <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">Changed Your Mind?!</h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">Update your experience here.</span>
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  rows="3"
                  placeholder={review.message}
                  className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                ></textarea>
                <button
                  type="button"
                  className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-amber-400"
                >
                  Leave feedback
                </button>
              </div>
            </div>
          </div>
         
          <div className="modal-action flex items-center justify-center">
            <label htmlFor="my-modal-5" className="btn">
              Maybe later
            </label>
          </div>
        </div>
      </div> */}
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
