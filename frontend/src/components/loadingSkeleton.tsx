import React from "react";
import PropTypes from "prop-types";

const loadingSkeleton = () => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-md">
      {/* Image Placeholder */}
      <div className="bg-gray-300 w-full h-48 animate-pulse" />

      <div className="p-3">
        {/* Title Placeholder */}
        <div className="bg-gray-300 w-3/4 h-6 mb-2 animate-pulse" />

        {/* Byline and Date Placeholder */}
        <div className="flex justify-between items-center">
          <div className="bg-gray-300 w-1/2 h-4 animate-pulse" />
          <div className="bg-gray-300 w-1/4 h-4 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default loadingSkeleton;
