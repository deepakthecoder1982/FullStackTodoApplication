import React, { useState } from "react";
// import {FaTrashAlt} from "react-icons/alt";
function TodoList({ todo ,handleStatus,handleDelete,handleEdit}) {
    return (
    <div className="flex justify-around p-3 border-3 mt-2 align-middle rounded-lg bg-gray-900 border-1 transition duration-300 ">
      <input type="checkbox" className="w-6 text-black " checked={todo?.status} readOnly onClick={(e)=>handleStatus(todo?.id)}/>
      <p className={`text-gray-300 decoration-dashed font-semibold w-2/3 text-wrap text-lg text-justify font-serif  break-all  p-2 ${todo?.status?'line-through text-gray-600':'normal'}`}>
        {todo?.title}
      </p>
      <p
        className={`tracking-wide text-center rounded-lg  flex justify-center align-middle cursor-pointer text-white font-semibold w-28 h-10 my-auto py-1 text-lg ${
          !todo?.status ? "bg-yellow-500 w-24 " : "bg-green-500 p-3"
        }`}
      >
        {todo?.status ? "Completed" : "Pending"}
      </p>
      <button className="tracking-wide text-center  flex justify-center align-middle cursor-pointer  w-16 h-10 my-auto py-1 text-lg bg-red-500 px-3 font-semibold rounded-lg text-md text-white min-w-max" onClick={()=>handleDelete(todo?.id)}>
        {/* <FaTrashAlt className="" /> */}
        Delete
      </button>
      <button className="tracking-wide text-center  flex justify-center align-middle cursor-pointer  w-12 h-10 my-auto py-1 text-lg bg-cyan-500 px-3 font-semibold rounded-lg text-md text-white min-w-max" onClick={()=>handleEdit(todo?.id)}>
        {/* <FaTrashAlt/> */}
        Edit
      </button>
    </div>
  );
}

export default TodoList;
