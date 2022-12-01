import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="flex flex-grow">
        <p className="ml-10 font-montserrat text-5xl my-auto font-black text-blue-400">
          Expense Tracker
        </p>
      </div>
    </div>
  );
};

export default Header;
