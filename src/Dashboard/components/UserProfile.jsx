import React from "react";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="flex flex-col p-5 border shadow-lg">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src="https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?size=626&ext=jpg&ga=GA1.1.1459026864.1687493706&semt=ais" />
        </div>
      </div>
      <h3 className="font-black mb-5">Jhon Doe</h3>
      <p className="flex items-center gap-3"><FaBriefcase /> Full Stack Web Developer</p>
      <p className="flex items-center gap-3"><FaMapMarkerAlt /> San Francisco, USA</p>

      <p className="text-gray-500 mt-4">Email Address:-</p>
      <p className="font-semibold">Jhon@mail.com</p>

      <p className="text-gray-500 mt-4">Home Address:-</p>
      <p className="font-semibold">92 Miles Drive, Newark, NJ 07103, California,
United States of America</p>

      <p className="text-gray-500 mt-4">Phone Number:-</p>
      <p className="font-semibold">+00 123 456 789 / +12 345 678</p>
    </div>
  );
};

export default UserProfile;
