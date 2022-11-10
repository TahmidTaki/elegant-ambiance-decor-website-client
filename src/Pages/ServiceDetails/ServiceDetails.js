import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, title, description, facility, img, price } = service;
  const { user } = useContext(AuthContext);

  /* load reviews for this service */
  const [serviceReview, setServiceReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/servicereviews/${service._id}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceReview(data);
        console.log(data);
      });
  }, [service]);
  /* load reviews for this service ends */

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
          window.location.reload(false);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      {/* service details */}
      <div>
        <div className="relative flex flex-col-reverse py-8 lg:py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-amber-900 transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <img
              className="hidden lg:block object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src={img}
              alt=""
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-600">
                {facility.name}
              </p>
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                {title}
              </h2>
              <p className="pr-5 p-5 mb-5 rounded-lg text-base md:text-lg border border-yellow-900 lg:border-0">
                <img
                  src={img}
                  className="object-cover w-full h-56 rounded shadow-lg mb-2 lg:hidden"
                  alt=""
                />

                {description}
              </p>
              <div className="alert alert-warning shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Good For You If You {facility.details}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="steps steps-vertical lg:steps-horizontal mx-auto">
          <li className="step step-primary">Choose plan</li>
          <li className="step step-primary">This Service Rating:{facility.rating}</li>
          <li className="step">Set Budget: ${price}</li>
          <li className="step">Receive My Decor Service</li>
        </ul>
      </div>

      {/* ===========================================
                  service reviews 
      ==============================================*/}
      <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold  text-center">
            What our customers are saying about my{" "}
            <span className="bg-yellow-600 text-slate-800 text-3xl px-2 italic rounded-lg">
              {service.title}
            </span>{" "}
            service
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          {serviceReview.map((rev) => (
            <div className="flex flex-col w-80 min-h-80 mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 text-amber-400"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  {rev.message}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 text-amber-400"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-amber-400 text-gray-900">
                <img
                  src={rev.reviewerImg}
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
                />
                <p className="text-xl font-semibold leading-tight">{rev.reviewer}</p>
                <p className="text-sm uppercase">{rev.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ===========================================
                  service reviews ends
      ==============================================*/}

      {/* ===========================================
                  add review
      ==============================================*/}
      {user ? (
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
      ) : (
        <Link to="/login" className="btn btn-error">
          Please Login to add review
        </Link>
      )}
    </div>
  );
};

export default ServiceDetails;
