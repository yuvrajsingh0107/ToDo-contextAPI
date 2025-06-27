import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItems'
import {TodoProvider} from './contexts/todoContext'

function App() {
  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev , {id: Date.now() , ...todo}])
  }


  const updateTodo = (id , todo) => {
    setTodos((prev) => prev.map((currTodo) => (currTodo.id === id ? {...currTodo , todo: todo}: currTodo)))
  }

  const deletTodo = (id ) => {
    setTodos((prev) => prev.filter((prevTodo)=> ( prevTodo.id !== id)  ))
  }

  const togleCompleted = (id) => {
    // console.log(id)
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo) ))
  }

  useEffect(() => {
    const todosLocal = JSON.parse(localStorage.getItem("todos"))
    // console.log(todosLocal.length)
    if(todosLocal && todosLocal.length > 0){
      setTodos(todosLocal)
      // console.log("retrive from local")
    }
    
  } , [])
  
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
    // console.log("ritern in local from local")
  }, [todos])

  return (
    <TodoProvider value = {{todos, addTodo, updateTodo, deletTodo, togleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
              {
                todos.map((currTodo) => (
                  <div key={currTodo.id}> 
                    <TodoItem todo={currTodo} />
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
