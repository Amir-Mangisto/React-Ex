import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <Link to="/Order">
        <button>Order</button>
      </Link>
      <Link to="/Menu">
        <button>Menu</button>
      </Link>
    </div>
  );
};

export default Navbar;
