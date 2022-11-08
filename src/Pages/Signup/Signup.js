import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("reg clicked");
  };
  return (
    <section>
      <div className="bg-amber-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
            Provident blanditiis cum exercitationem
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque
            explicabo!
          </p>
        </div>
      </div>
      <div className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-black">
        <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register</h1>
            <p className="text-sm dark:text-gray-400">Sign up to access your account</p>
          </div>
          <form
            onSubmit={handleRegister}
            novalidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label for="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-amber-400 dark:text-gray-900"
                >
                  Register
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Already have an account or want social sign in?
                <Link
                  rel="noopener noreferrer"
                  to="/login"
                  className="mx-2 underline dark:text-amber-400"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
