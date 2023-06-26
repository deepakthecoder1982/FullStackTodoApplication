import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { SiTodoist } from "react-icons/si";
import { Link } from "react-router-dom";
import TodoList from "./TodoList";
import Todo from "../pages/Todo";
function Navbar() {
  const [searchTodo, setSearchTodo] = useState("");
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [searchData, setSearchData] = useState([]);
  const handleSearch = (e) => {
    setSearchTodo(e.target.value);
    for (let item of todo) {
      let filterData = item?.title.toLowerCase();
      if (filterData.includes(searchTodo.toLowerCase())) {
        setSearchData([item]);
      }else{
        setSearchData([]);
      }
    }
  };
  return (
    <>
      <div className="flex flex-auto justify-between text-white p-4 mt-3 mx-4 ">
        <div className="logo flex w-400 hover:scale-105 hover:translate-x-4 transition duration-700 ease-in-out z-40">
          <Link
            to="/"
            className="text-gray-400 text-4xl font-semibold font-serif shadow-lg shadow-cyan-900 rounded-full hover:cursor-pointer px-4 py-1 hover:text-white transition duration-700"
          >
            TODO{" "}
            <SiTodoist className="inline mb-2 text-3xl text-cyan-300 shadow-sm shadow-cyan-500 " />
          </Link>
        </div>
        <div id="searchBar" className="z-50">
          <form
            action=""
            className="flex w-80  bg-black rounded-full justify-between p-1 shadow-lg shadow-transparent/90 left-8 "
          >
            <input
              type="text"
              placeholder="Search for todo"
              value={searchTodo}
              onChange={handleSearch}
              className="relative p-2 px-4 border-none text-blue-600 font-semibold bg-black rounded-xl outline-none w-4/5 "
            />
            <BiSearchAlt className="text-blue-900 text-4xl mr-2 cursor-pointer hover:scale-125 ease-in duration-200" />
          </form>
        </div>
        <div className="links flex w-50 jusify-between border-solid space-x-8 z-40">
          <Link
            to="/userGuide"
            className="font-bold text-lg font-mono hover:text-red-500"
          >
            User Guide
          </Link>
          <Link
            to="/contact"
            className="font-bold text-lg font-mono hover:text-red-500"
          >
            Contact Us
          </Link>
          <Link
            to="/about-us"
            className="font-bold text-lg font-mono hover:text-red-500"
          >
            About Us
          </Link>
        </div>
      </div>
      {/* {searchTodo&&todo.map((item)=>{
      return <TodoList item={item}/>
    })} */}
    <div className="todoList container  m-auto mt-6 ">
    <Todo searchData={searchData}/>
    </div>
    </>
  );
}

export default Navbar;
