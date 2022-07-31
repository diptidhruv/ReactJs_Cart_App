import React, { Component } from "react";

/* Stateless Functional Componenet:
if we dont need any state than instaed of class we can use function base components

Stateless Functional component does not have lifecycyle hooks
if you want to use life cycle hooks you have to use class component */

const Navbar = (props) => {
  console.log("Navbar - Rendered");

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="badge badge-pill badge-secondary">
          Totaltems : {props.totalCounters}
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
