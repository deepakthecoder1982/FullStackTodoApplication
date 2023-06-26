import React, { useState } from "react";

function Edit({ edit,todo,setTodo,setEditVisisble,editVisisble}) {
  const [editTodo, seteditTodo] = useState(edit?.title);
  const handleSave = (e)=>{
    e.preventDefault();
    let todoEdited = {
        ...edit,
        title:editTodo
    }
    let todoUpdated = todo.map(item=>{
        if(item.id===todoEdited.id){
            item = todoEdited 
        }
        return item;
    });
    setTodo(todoUpdated);
    localStorage.setItem('todo',JSON.stringify(todoUpdated));
    setEditVisisble(!editVisisble);
    alert("Todo updated successfully")
  }
  return (
    <div className="w-3/5 m-auto bg-cyan-900 z-50 absolute p-4 rounded-xl top-50 inset-x-40 mt-50 shadow-lg shadow-gray-900">
      <h1 className="text-center text-blue-500 font-bold text-4xl mb-5">
       Edit Model
      </h1>
      <form action="" className="border-1 flex flex-col justify-center m-auto bg-gray-900 border-red-50 p-2 rounded-xl">
        <input type="text" value={editTodo} className="w-3/4 bg-black text-xl text-white font-semibold text-justify mx-50 rounded-lg p-4 mx-auto shadow-lg shadow-cyan-300 my-6"
          onChange={(e) => seteditTodo(e.target.value)}
        />
        <div className="flex w-1/2 justify-between mt-5 mx-60 align-left">
          <input
            type="submit"
            value={"Save"}
            className="px-2 p-2 mx-4 hover:cursor-pointer hover:bg-green-800 w-20 bg-green-600 text-white font-semibold text-xl rounded-lg"
            onClick={handleSave}
          />
          <input
            type="submit"
            value={"Cancel"}
            className="px-2 p-2 w-20 hover:cursor-pointer hover:bg-red-800 bg-red-600 text-white font-semibold text-xl rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
