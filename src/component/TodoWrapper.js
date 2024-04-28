import { Todoform } from "./Todoform"
import { Todo } from "./Todo"
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { EditTodoform } from "./EditTodoform";
uuidv4();
export const TodoWrapper = () => {
  const [todos,setTodos]=useState([]);
  const addTodo= todo=>{
     setTodos([...todos,{id:uuidv4(),task:todo,completed:false,IsEditing:false}])
    // console.log(todos)
  }
  const TogglleComplete=(id)=>{
     setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
  }
  const deleteTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  const editTodo=(id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,IsEditing:!todo.IsEditing}:todo))
  }
  const editTask=(task,id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,task,IsEditing:!todo.IsEditing}:todo))
  }
  return (
    <div className="TodoWrapper">
    <h1>Get Things Done!</h1>
     <Todoform addTodo={addTodo}/>
    {todos.map((todo,index)=>
    todo.IsEditing?(<EditTodoform editTodo={editTask} task={todo}/>):
      (<Todo task={todo} key={index} TogglleComplete={TogglleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />)
    )}
    </div>
  )
}