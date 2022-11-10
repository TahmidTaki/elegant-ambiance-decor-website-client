import React from "react";

const Blog = () => {
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-orange-400">
              <h3 className="text-3xl font-semibold">Blog</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                All About Web Dev
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-orange-400">
                <h3 className="text-xl font-semibold tracking-wide text-orange-300">
                  Difference between SQL and NoSQL{" "}
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">Dec 2022</time>
                <p className="mt-3">
                  <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                  <li>
                    SQL databases use structured query language and have a predefined schema. NoSQL
                    databases have dynamic schemas for unstructured data.
                  </li>
                  <li>
                    SQL databases are table-based, while NoSQL databases are document, key-value,
                    graph, or wide-column stores.
                  </li>
                  <li>
                    SQL databases are better for multi-row transactions, while NoSQL is better for
                    unstructured data like documents or JSON
                  </li>
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-orange-400">
                <h3 className="text-orange-300 text-xl font-semibold tracking-wide">
                  What is JWT, and how does it work?{" "}
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">Dec 2022</time>
                <p className="mt-3">
                  JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting
                  information between parties as JSON object. <br /> <hr />
                  The identity provider(IdP) generates a JWT certifying user identity and Resource
                  server decodes and verifies the authenticity of the token using secret salt /
                  public key.
                  <ol>
                    <li>User sign-in using username and password or google/facebook.</li>
                    <li>
                      Authentication server verifies the credentials and issues a jwt signed using
                      either a secret salt or a private key.
                    </li>
                    <li>
                      User's Client uses the JWT to access protected resources by passing the JWT in
                      HTTP Authorization header.
                    </li>
                    <li>
                      Resource server then verifies the authenticity of the token using the secret
                      salt/ public key.
                    </li>
                  </ol>
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-orange-400">
                <h3 className="text-orange-300 text-xl font-semibold tracking-wide">
                  What is the difference between javascript and NodeJS?
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">Jul 2021</time>
                <p className="mt-3">
                  JavaScript is a lightweight, object-oriented scripting language that is used to
                  build dynamic HTML pages with interactive effects on a webpage. On the other hand,
                  Node.js usually represents a list of objects and methods accessible to JavaScript
                  code when run in the V8 engine or via the node interpreter. <br /> <br /> <hr />
                  Node.js is a cross-platform, open-source JavaScript runtime environment that
                  enables JavaScript to be run on the server. Node.js enables JavaScript code to run
                  outside of the browser. Node.js comes with a large number of modules and is mostly
                  used in web creation.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-orange-400">
                <h3 className="text-xl font-semibold tracking-wide text-orange-300">
                  How does NodeJS handle multiple requests at the same time?
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">Jan 2022</time>
                <p className="mt-3">
                  Node JS works using a single thread. This means that there isn't a pool of
                  threads, which is assigned to handle client requests, but only a single thread to
                  accept the incoming requests. So, even if there are 100 clients, we have a single
                  thread to handle them, in one server. <br /> <br />
                  Node JS uses the concept of asynchronous and non-blocking behavior. This is what
                  is used by Node JS. This means that the thread will accept the first client’s
                  request, send the request to a pool of working threads, and become free to accept
                  the second client’s request (non-blocking behavior). This way it can handle
                  multiple or concurrent client requests at the same time. As soon as the response
                  is ready, the pool of threads sends it back to the main thread via callbacks
                  (asynchronous behavior). As soon as the thread receives the response, it returns
                  the response to the respective client. This is how Node JS handles concurrency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
