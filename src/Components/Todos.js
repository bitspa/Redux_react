import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addTodo,deleteTodo,removeTodo} from "../actions/index"
import "./Todos.css/todos.css"
const Todo=()=>{
  const list = useSelector((state)=>state.todoReducers.list)
const [inputData,setInputData]=useState('');
const dispatch =useDispatch();
    return (
        <>
        <div className="main-div">
        <div className="child-div">
          <figure>
          <figcaption>TodoList📝</figcaption>
          </figure>
  
          <div className="addItems">
            <input type="text" placeholder="Your plan 🖋️......................." value={inputData} onChange ={(event)=>setInputData(event.target.value)}/>
            <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputData),setInputData(""))}></i>
          </div>
          <div className="showItems">
            {
               list.map((ele)=>{
                return(
                  <div className="eachItem" key={ele.id}>
                    <h2> {ele.data} </h2>
                    <i className="fa fa-trash-alt add-btn" title ="Delete Item" onClick={()=>dispatch(deleteTodo(ele.id))} ></i>
                  </div>
                )
               })
            }
            
            </div>
            <div className="remove">
                <button onClick={()=>dispatch(removeTodo())}>Clear All</button>
            </div>
          </div>
        </div>
      {/* </div> */}
      </>
        
    )
}
export default Todo
