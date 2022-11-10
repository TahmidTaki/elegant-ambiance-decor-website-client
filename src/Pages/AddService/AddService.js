import React from "react";

const AddService = () => {
  const addService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;
    const facilityName = form.facilityName.value;
    const facilityDetails = form.facilityDetails.value;
    const rating = "5";

    // console.log(rating, facilityDetails, facilityName, description, price, img, title);
    const service = {
      title: title,
      img: img,
      price: price,
      description: description,
      facility: {
        name: facilityName,
        rating: rating,
        details: facilityDetails,
      },
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("service added");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section>
      <div className="bg-amber-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
            Want Customized Service Just For You?
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Fill up the relevant fields below. Be cautious though, you need to fill up all the
            relevant fields!
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50 btn-disabled"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mb-48 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-stone-800">
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Please Fill Up Carefully!</h1>

              <p className="mt-4 text-gray-500">
                Successful Creation of Your Service Plan Will Be Added In My Sites Main Page, All
                the Best.
              </p>
            </div>

            <form className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={addService}>
              <div>
                <label htmlFor="title" className="">
                  Title
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    name="title"
                    placeholder="Enter Title (ex. Interior Design)"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="img" className="">
                  Image URL
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    name="img"
                    placeholder="Enter Image Url (ex. https://i.ibb.co/ZGpwPxC/service6.jpg)"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="price" className="">
                  Price
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    name="price"
                    placeholder="Enter Price (Only number ex. 210.00)"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="">
                  Description
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    name="description"
                    placeholder="Explain in details about this service"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="facilitydesc" className="">
                  Facility Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    name="facilityName"
                    placeholder="ex. Room Lift"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="">
                  Target Demographic
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    name="facilityDetails"
                    placeholder="This service is good for.."
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="">
                  Ratings, By default rating is 5 when creating new service
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    name="rating"
                    placeholder="5"
                    readOnly
                  />
                </div>
              </div>

              <div className=" justify-between">
                <button
                  type="submit"
                  className="ml-3 inline-block rounded-lg btn btn-success px-5 py-3"
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>

          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AddService;
