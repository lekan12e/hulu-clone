import React from "react";
import logo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonIcon from "@mui/icons-material/Person";

const NavBar = () => {
  return (
    <nav className="flex items-center w-full sm:px-12 flex-col justify-between space-y-8 py-5 sm:flex-row sm:space-y-0">
      <div className="flex gap-6 flex-grow">
        <div className="flex items-center gap-2 w-2/3 sm:w-auto sm:space-x-10 justify-evenly sm:justify-start">
          <div className="flex flex-col items-center cursor-pointer gap-1 group">
            <HomeIcon
              className="w-9 h-9 animate-bounce-custom group-hover:animate-bounce"
              sx={{ width: "24px", height: "24px", color: "white" }}
            />
            <p className="opacity-0 text-white text-base group-hover:opacity-100 transition-opacity duration-300">
              Home
            </p>
          </div>

          <div className="flex flex-col items-center cursor-pointer gap-2 group">
            <CollectionsIcon
              className="w-9 h-9 animate-bounce-custom group-hover:animate-bounce"
              sx={{ width: "24px", height: "24px", color: "white" }}
            />
            <p className="opacity-0 text-white text-base group-hover:opacity-100 transition-opacity duration-300">
              Collections
            </p>
          </div>

          <div className="flex flex-col items-center cursor-pointer gap-2 group">
            <PersonIcon
              className="animate-bounce-custom group-hover:animate-bounce"
              sx={{ width: "24px", height: "24px", color: "white" }}
            />
            <p className="opacity-0 text-white text-base group-hover:opacity-100 transition-opacity duration-300">
              Profile
            </p>
          </div>
        </div>
        <form
          action="submit"
          className="flex items-center sm:flex-grow sm:ml-10 flex-1 mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-10 text-gray-200 p-2 bg-[#10B981] rounded-l-lg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            class="border-none font-bold bg-gray-100 outline-none p-2 rounded-r-lg flex flex-grow max-w-2xl"
            placeholder="Search for a movie"
          />
        </form>
      </div>
      <a href="">
        <img width={100} src={logo} alt="logo" />
      </a>
    </nav>
  );
};

export default NavBar;
