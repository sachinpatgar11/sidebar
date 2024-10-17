import React from "react";

const Support = ({ sideNav }) => {
  return (
    <div
      className={`${
        sideNav ? "ml-24 md:ml-64" : "ml-24"
      } flex items-center justify-center h-[100vh]`}
    >
      <h1 className="font-bold text-2xl text-gray-700">Support</h1>
    </div>
  );
};

export default Support;
