import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default Root;
