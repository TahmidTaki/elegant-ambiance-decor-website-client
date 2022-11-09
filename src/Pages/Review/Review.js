import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Review = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const reviewImg = form.reviewImg.value;
    const serviceName = form.serviceName.value;
    const email = form.email.value;
    const uid = form.uid.value;
    const name = form.name.value;
    const serviceId = service._id;

    // console.log(message, reviewImg, serviceName, email, uid, name, serviceId);
    const review = {
      service: serviceId,
      serviceName,
      reviewer: name,
      reviewerId: uid,
      email,
      reviewerImg: reviewImg,
      message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("review added");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      {/* service details */}
      <div>
        <h2>
          service detail section of {service._id} & {service.title}
        </h2>
      </div>

      {/* service reviews */}
      <div>
        <h3>this is service review</h3>
      </div>

      {/* add review */}
      <div className="flex max-w-screen mx-auto p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
          </div>
          {/* <form className="flex flex-col w-full"> */}
          <form
            className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
            onSubmit={handleAddReview}
          >
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="Name"
                name="name"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-400 dark:border-gray-700 dark:text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                User Id
              </label>
              <input
                id="lastname"
                name="uid"
                type="text"
                placeholder="UserID"
                className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-400 dark:border-gray-700 dark:text-gray-900"
                defaultValue={user?.uid}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                User Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-400 dark:border-gray-700 dark:text-gray-900"
                readOnly
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="serviceName" className="text-sm">
                Service Name
              </label>
              <input
                id="serviceName"
                type="text"
                defaultValue={service.title}
                name="serviceName"
                placeholder=""
                className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-400 dark:border-gray-700 dark:text-gray-900"
                readOnly
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="image" className="text-sm">
                Your Image Url
              </label>
              <input
                id="image"
                name="reviewImg"
                type="text"
                placeholder="for review please add your image url"
                required
                className="  p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <textarea
              rows="3"
              name="message"
              placeholder="Message..."
              className="p-4 col-span-full rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
              required
            ></textarea>
            <button
              type="submit"
              className="p-4 my-8 mx-auto w-full col-span-full font-semibold rounded-md text-gray-900 bg-amber-400"
            >
              Leave feedback
            </button>
          </form>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Review;
