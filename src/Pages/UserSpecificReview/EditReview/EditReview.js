import React from "react";
import { useLoaderData } from "react-router-dom";

const EditReview = () => {
  const review = useLoaderData();
  const id = review._id;
  console.log(id);
  const handleEdit = (event) => {
    event.preventDefault();
    const newMessage = event.target.newMessage.value;
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message: newMessage }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="w-full">
        <div className="relative flex flex-col items-center gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-gray-900 dark:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-40 h-40 fill-current shrink-0 dark:text-amber-400"
          >
            <path d="M68.328,383.063a31.654,31.654,0,0,1,.207-32.118l50.883-86.406,11.516,50.76,31.207-7.08L138.257,202.944,32.983,226.828l7.08,31.207,53.149-12.058L40.96,334.707a64,64,0,0,0,55.149,96.476h82.435l32-32H96.109A31.655,31.655,0,0,1,68.328,383.063Z"></path>
            <path d="M283.379,79.762l53.747,91.268-49.053-7.653-4.934,31.617L389.8,211.635l16.64-106.66-31.617-4.933-8.873,56.87L310.954,63.524a64,64,0,0,0-110.3,0l-39.939,67.82,10.407,45.39,57.106-96.972a32,32,0,0,1,55.148,0Z"></path>
            <path d="M470.65,334.707l-47.867-81.283-41.148-6.812,61.441,104.333A32,32,0,0,1,415.5,399.183H304.046l38.359-38.358L319.778,338.2l-76.332,76.332,76.332,76.333,22.627-22.628-37.052-37.051H415.5a64,64,0,0,0,55.149-96.476Z"></path>
          </svg>
          <h2 className="text-2xl font-semibold leading-tight tracking-wide">Changed Your Mind?</h2>
          <p className="flex-1 text-center dark:text-gray-400">
            You can always update your opinion here.
          </p>
        </div>

        {/* update form */}
        <div className="flex flex-col content-center  p-8 shadow-sm rounded-xl lg:p-12 ">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">Let Us Know what you think!</h2>
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center">How was your experience?</span>
              <div className="flex space-x-3">
                <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-gray-600"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <fieldset className="w-full space-y-2 dark:text-gray-100">
                <label htmlFor="url" className="block text-sm font-medium">
                  Reviewer
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700">
                    Name
                  </span>
                  <input
                    type="text"
                    name="url"
                    id="url"
                    placeholder={review.reviewer}
                    className="py-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-amber-400"
                    readOnly
                  />
                </div>
              </fieldset>
              <fieldset className="w-full space-y-2 dark:text-gray-100">
                <label htmlFor="url" className="block text-sm font-medium">
                  Service
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700">
                    Title
                  </span>
                  <input
                    type="text"
                    name="url"
                    id="url"
                    placeholder={review.serviceName}
                    className="py-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-amber-400"
                    readOnly
                  />
                </div>
              </fieldset>

              {/* edit section  */}
              <div className="alert shadow-lg mt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">Edit Your Message down below</h3>
                  </div>
                </div>
              </div>
              {/* edit section  */}
              <div>
                <form onSubmit={handleEdit} className="mt-4 w-full">
                  <textarea
                    rows="3"
                    placeholder={review.message}
                    name="newMessage"
                    required
                    className="p-4 w-full rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                  ></textarea>{" "}
                  <br />
                  <button
                    type="submit"
                    className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-amber-400"
                  >
                    Update feedback
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
