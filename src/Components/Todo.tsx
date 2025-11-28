/* creating a todo list and also saving it in the localStorage*/ 
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
const Todo = () => {
  return (
    <div className="h-screen  flex flex-col gap-8 bg-gray-800 text-white">
      <h1 className="text-6xl text-center py-6 px-4">
        Todolist
      </h1>

      <div className="w-full">
        <form action="" className="flex justify-center gap-8 items-center p-2">
          <input type="text"
          placeholder="enter your task"
          className="outline-none border rounded-full text-lg font-bold w-3/12 px-3 text-white py-3"
          />
          <button className="bg-purple-500 px-3 py-3 w-24 text-white text-lg font-bold rounded-full h-full">Add</button>
        </form>
      </div>

      <div className=" w-full">
        <ul className="w-full container mx-auto flex justify-center items-center">
          <li className="w-5/12 bg-purple-500 rounded-full">
            <div className="flex justify-between px-4 py-3 text-lg font-bold  items-center">
              <span>this is an element</span>
              <span className="flex gap-3 text-lg">
                <FaPencilAlt />
                <MdDelete />
                <FaCheckCircle />
              </span>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Todo
