import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "../Services/Services";
import HomeServiceCard from "./HomeServiceCard";
import home2 from "../../../src/assets/22644-decoration-home.gif";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle("Home");
  useEffect(() => {
    fetch("http://localhost:5000/serviceshome")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <section className="overflow-hidden bg-yellow-100 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Welcome to my Site, Let me help you with your decor
            </h2>

            <p className="hidden text-gray-700 md:mt-4 md:block">
              I love sharing my passion for design. It's this passion that drives me to source decor
              and furniture from vendors and artisans worldwide that allows you to create truly
              one-of-a-kind spaces in your home.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="/allservices"
                className="group relative inline-block focus:outline-none focus:ring focus:ring-yellow-400"
              >
                <span className="relative z-10 block rounded bg-gray-900 px-12 py-3 text-sm font-medium text-white transition group-hover:scale-105">
                  Explore
                </span>

                <span className="absolute inset-0 -rotate-3 scale-105 rounded bg-gray-900/25 transition group-hover:rotate-0"></span>
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src={home2}
          className="h-full w-full border-l-4 border-t-4 border-gray-900 object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
        />
      </section>

      <section>
        <div className="bg-amber-300">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
              Choose services according to your preference
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              My design philosophy? There are no rules. Be free. Be creative. Be you.
            </p>
          </div>
        </div>
        <div className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 ">
          {services.map((service) => (
            <HomeServiceCard key={service._id} service={service}></HomeServiceCard>
          ))}
        </div>
      </section>

      <Link
        to={"allservices"}
        className="group relative inline-block focus:outline-none focus:ring focus:ring-yellow-400"
      >
        <span className="relative z-10 block rounded bg-yellow-700 px-12 py-3 text-sm font-medium text-white transition group-hover:scale-105">
          View All Services
        </span>

        <span className="absolute inset-0 -rotate-3 scale-105 rounded bg-yellow-700/25 transition group-hover:rotate-0"></span>
      </Link>

      {/* location */}
      <div className="bg-stone-900 w-full lg:flex lg:flex-row-reverse">
        <div className="flex flex-col lg:w-1/2 mt-10 pt-24 pb:8 lg:pb-28 pl-8 pr-8 ">
          <h2 className="text-4xl lg:text-6xl font-black  mb-8">Find My Decoration Lab</h2>
          <p className="text-xl mb-8 text-blued">
            You will find my Decoration Lab @IIUM, Gombak, Malaysia.
          </p>
          <p className="text-xl mb-8 text-blued">
            But you can also opt for my 3D animated design program purely online and from home as a
            self-player.
          </p>
          <p className="text-xl mb-8 text-blued">
            Would you like to know where to find my office? I am happy to help you with your search.
            Please Follow the route in the map.
          </p>
        </div>

        <div className="w-full mx-auto mt-10 pt-8 pb-8 lg:pt-24 pl-8 pr-8 lg:w-1/2">
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.38627389404!2d101.72790691470497!3d3.2538236976310926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc38c09ff366b5%3A0xebf4b45f23b31c79!2sFaculty%20of%20Information%20and%20Communication%20Technology%20-%20KICT!5e0!3m2!1sen!2smy!4v1662975464034!5m2!1sen!2smy"
          ></iframe>
        </div>
      </div>

      {/* testimonials */}
      <section className="px-4  mb-6 py-24 bg-gray-800 ">
        <h2 className="text-4xl lg:text-6xl  mb-8">About me and my business</h2>
        <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
            <div className="flex items-center justify-center px-4 bg-amber-400 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold">200+</p>
              <p>Projects</p>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
            <div className="flex items-center justify-center px-4 bg-amber-400 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold">150+</p>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
            <div className="flex items-center justify-center px-4 bg-amber-400 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold">14</p>
              <p>Awards</p>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
            <div className="flex items-center justify-center px-4 bg-amber-400 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"></path>
                <polygon points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"></polygon>
              </svg>
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold">Online</p>
              <p>Support</p>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
            <div className="flex items-center justify-center px-4 bg-amber-400 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M415.313,358.7c36.453-36.452,55.906-85.231,54.779-137.353-1.112-51.375-21.964-99.908-58.715-136.66L388.75,107.314A166.816,166.816,0,0,1,438.1,222.039c.937,43.313-15.191,83.81-45.463,114.083l-48.617,49.051.044-89.165-32-.016L311.992,440H456.063V408H366.449Z"></path>
                <path d="M47.937,112h89.614L88.687,161.3c-36.453,36.451-55.906,85.231-54.779,137.352a198.676,198.676,0,0,0,58.715,136.66l22.627-22.627A166.818,166.818,0,0,1,65.9,297.962c-.937-43.314,15.191-83.811,45.463-114.083l48.617-49.051-.044,89.165,32,.015L192.008,80H47.937Z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold">3</p>
              <p>Published Book</p>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-lg bg-gray-900 text-gray-100">
            <div className="flex items-center justify-center px-4 bg-amber-400 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M416,180H320V340h96a20.023,20.023,0,0,0,20-20V200A20.023,20.023,0,0,0,416,180ZM404,308H352V212h52Z"></path>
                <path d="M436.574,120H352V64H32V408a64.072,64.072,0,0,0,64,64H288a64.072,64.072,0,0,0,64-64v-8h84.574A59.493,59.493,0,0,0,496,340.574V179.426A59.493,59.493,0,0,0,436.574,120ZM464,340.574A27.457,27.457,0,0,1,436.574,368H320v40a32.036,32.036,0,0,1-32,32H96a32.036,32.036,0,0,1-32-32V96H320v56H436.574A27.457,27.457,0,0,1,464,179.426Z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold">720 L</p>
              <p>Coffee</p>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Home Decor is an area that is aesthetically pleasing to the users and where the
            decoration of the house is prepared visually. Often mathematical calculations are not
            made or a floor plan is not prepared, but measurements are still important in this area
            as well.
          </p>
          <div className="space-y-4">
            <details className="w-full border border-orange-900 rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-amber-400">
                What is home decoration??
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                <hr class="my-8 h-px bg-amber-700 border-0 "></hr>
                Home decoration is mostly small touches that change the vibe in the house with some
                accessories, sometimes paintings. Sometimes it is an area where the spirit of the
                house is determined by taking professional help while designing the house from
                scratch.{" "}
              </p>
            </details>
            <details className="w-full border  border-orange-900 rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-amber-400">
                How can I decide on the style I want in home decoration??
              </summary>
              <hr class="my-8 h-px bg-amber-700 border-0 "></hr>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                The important thing here, of course, is personal preference. If you are someone who
                likes a white and simple finish, you can choose Scandinavian minimalism. If you want
                warmer tones and a more cozy environment, the browns and greens of the Mid-Century
                Modern style can give you the warmth you are looking for. If you want a life
                intertwined with nature and you say that you were created for forests, Rustic style
                may be a good choice for you. Or you may not have decided what you want yet. Then
                Contemporary home style is for you. This style, which follows the trends and stands
                out with its easily changeable structure, is much easier to change as you get bored
                or ideas change.{" "}
              </p>
            </details>
            <details className="w-full border border-orange-900 rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-amber-400">
                How can I make my house look more expensive and luxurious??
              </summary>
              <hr class="my-8 h-px bg-amber-700 border-0 "></hr>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                White walls always evoke a luxurious look. Playing with colors is much easier when
                placing furniture inside white walls. Also, when you say white wall, you don't have
                to choose the whitest color directly. Warm whites may suit your home where you want
                a warm environment. For example, Benjamin Moore's White Dove color can be a good
                choice.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
