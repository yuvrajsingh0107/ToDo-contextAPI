import { useState } from "react";
import { useTodo } from "../contexts/todoContext";

function TodoForm() {
    const [todo,setTodo] = useState("")

    const {addTodo} = useTodo();
    const add = (e) => {
        e.preventDefault();
        if(todo)
        addTodo({todo: todo, completed: false})
        // console.log(todo)
        setTodo("") 
        // console.log(todo)
    }
    return (
        <form  className="flex">
            <input
                type="text"
                onChange={(e) => {
                    setTodo(e.target.value)
                    // console.log(todo)
                }}
                value={todo}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit"  onClick={(e) => add(e)}  className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;