import { useState } from "react";
import FormList from "./components/componentsForm";
import TodoList from "./components/ComponentsList";

export default function App(){

  const [todos, setTodos] = useState([])

  const addPost = (obj) => {
    setTodos([...todos, obj])
  }



  return (
    <div className="App">
      <div className="container my-5">
        <div className="gy-4">
            <div className="">
              <FormList addPost = {addPost}/>
            </div>

            <div className="">
              <TodoList todos = {todos}/>
            </div>
        </div>
      </div>
    </div>
  )
}

