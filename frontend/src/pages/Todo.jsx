import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import TodoList from '../components/TodoList';
import {BsPlus} from "react-icons/bs";
import "../index.css"
import Edit from '../components/Edit';
function Todo({searchData}) {
    const [todo,setTodo] = useState(JSON.parse(localStorage.getItem("todo"))||[]);
    const [input,setInput] = useState("");
    const [editVisisble, setEditVisisble] = useState(false);
    const [editTodo,setEditTodo]  = useState({});
    // const [taskStatus, setTaskStatus] = useState(false);
    const handleTodo = (e) => {
        e.preventDefault();
        if(!input){
            alert("Please enter a todo")
            return ;
        }
        let todo_with_id = {
            id: uuidv4(),
            title:input,
            status:false
        }
        let todos = [...todo,todo_with_id] 
        setTodo(todos);
        localStorage.setItem('todo', JSON.stringify(todos));
        setInput('');
    }
    const handleStatus = (id)=>{
            const task = todo.map(item=>{
                if(item.id == id){
                    item.status = !item.status;
                }
                return item;
            });
            
            const newTodowithChangeStatus = [...task];
            setTodo(newTodowithChangeStatus);
            localStorage.setItem('todo', JSON.stringify(newTodowithChangeStatus));
    }
    const handleDelete =(id)=>{
        const task = todo.filter(item=>{
            return item.id!==id;
        });
        const newTodowithDeltetask= [...task];
        setTodo(newTodowithDeltetask);
        localStorage.setItem('todo', JSON.stringify(newTodowithDeltetask));
    }
    const handleEdit=(id)=>{
        const EditTodo = todo.find((item)=>item.id===id);
        setEditVisisble(!editVisisble);
        setEditTodo(EditTodo);
    }
  return (
    <>
    {editVisisble&&<Edit editVisisble={editVisisble} setEditVisisble={setEditVisisble} edit={editTodo} todo={todo} setTodo={setTodo}/>}
    <div className={`text-center p-4 border-2 ${editVisisble?"blur-lg":"blur-none"}  border-cyan-800 m-auto rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm shadow-indigo-400/90 w-4/5 z-20`}>
        <h1 className='text-white font-mono font-bold text-5xl mb-6'>TODO:-A Task Management App</h1>
        <div className="container w-3/5  flex justify-between space-x-10 m-auto">
            <form action="" className='flex justify-around w-full '>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} className='p-3 w-8/12  font-sans rounded-xl bg-black tracking-wider text-xl outline text-white font-semibold outline-none' placeholder='Add todo' />
            <div className="todoButton w-30 flex justify-around p-2 border-none rounded-xl bg-sky-200 " onClick={handleTodo}>
            <BsPlus className='m-2 mx-2 text-xl text-blue-600 cursor-pointer'/>
            <input type='submit' value="New Task" className={`mx-1 px-2 font-semibold text-blue-600 text-lg cursor-pointer`}/>
            </div>
            </form>
        </div>
        <div className="my-3 mt-7 w-11/12 m-auto rounded-lg bg-#0C1423">
            {console.log(searchData)}
        {searchData?.length>0?
        searchData.map(item=>{
            return <TodoList key={todo?.id} todo={todo} handleStatus={handleStatus} handleDelete={handleDelete} handleEdit={handleEdit}/>
        })
        :todo.length>0?todo.map(todo=>{
            return <TodoList key={todo?.id} todo={todo} handleStatus={handleStatus} handleDelete={handleDelete} handleEdit={handleEdit}/>
        }):<h5 className="font-semibold font-mono text-green-800 text-4xl bg-gray-900 rounded-xl p-3 ">No todos in the list, Please add one!!</h5>}
        </div>
    </div>
    </>
  )
}

export default Todo