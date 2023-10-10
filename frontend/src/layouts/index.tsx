import React from "react";
import Navbar from "../components/navbar";
const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className="lg:absolute top-[68px] bg-gray-50 w-full h-full">
        {children}
      </div>
    </>
  );
};

export default Layout;
