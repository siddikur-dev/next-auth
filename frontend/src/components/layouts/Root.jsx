import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <p className="text-4xl text-gray">Navbar</p>
      <Outlet></Outlet>
      <p>Footerr</p>
    </div>
  );
};

export default Root;
