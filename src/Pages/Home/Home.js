import React from "react";
import { Link } from "react-router-dom";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Services></Services>
      <Link>
        <button>Button Services</button>
      </Link>
    </div>
  );
};

export default Home;
