import React, { useState } from 'react';
import "./mypage.css"
import {Task} from "./Task";

const Mypage = () => {
    const [tasks,setTasks] = useState([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const submithandler =(e)=>{
        e.preventDefault();
        setTasks([...tasks,{title,description}]);
    }

  return (
    <>
    <h1>Get Ready To Complete Your Daily Goals</h1>

    <div className='container'>
        <h2>DAILY GOALS</h2>
        <form onSubmit={submithandler}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <textarea placeholder='Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <button type='submit' className='submitbtn'>ADD</button>
        </form> 

        {tasks.map((item,index)=>(
            <Task key={index} title={item.title} description={item}/>
        ))}
    </div>
    </>
  )
}

export default Mypage;