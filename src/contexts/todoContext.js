import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos : [
    {
      id: 1,
      todo: "todo task",
      completed: false
    },
    {}
  ],
  addTodo: (Todo) => {},
  updateTodo: (id , Todo) => {},
  deletTodo: (id) => {},
  togleCompleted: (id)=>{}
  
})

export const TodoProvider = todoContext.Provider

export const useTodo = () =>  useContext(todoContext)