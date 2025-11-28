/* creating a todo list and also saving it in the localStorage*/ 
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";



type Todoitem = {
  id:number;
  text: string;
  complete : boolean;
}

const LOCAL_STORAGE_KEY = "react_todo_list";

const Todo = () => {
  const [value , setValue] = useState<string>("")
  const [editID, SetEditID] = useState<number | null>(null)
  const [task,setTask] = useState<Todoitem []>(()=>{
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  })

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(task))
  }, [task])

  const SubmitHandle=(e:React.FormEvent)=>{
    e.preventDefault();
    console.log(value)
    const trimvalue = value.trim();

    if(!trimvalue) return;

    if(editID){
      setTask((prevTask)=>
      prevTask.map((t)=> (t.id === editID ? {...t ,text :trimvalue} :t))
    )
    SetEditID(null);
    setValue("");
    return;
    }

    if(task.some((t)=>t.text.toLowerCase() === trimvalue.toLowerCase())){
      setValue("");
      alert("task already exist");
      return;
    }

    const newtask:Todoitem={
      id: Date.now(),
      text :trimvalue,
      complete : false,
    };

    setTask((prevtask)=>[...prevtask,newtask])

    setValue("")
  }

  const handleEdit = (id:number ,currentText :string) =>{
    setValue(currentText);
    SetEditID(id)
  }

  const handleSubmit =(value :string)=>{
    setValue(value)
  }

  const handleDelete = (id:number) => {
    setTask((prevTask)=>prevTask.filter((t)=> t.id !==id))
  }

  const handleToogle = (id: number) => {
    setTask((prevtask) =>
      prevtask.map((t) =>
        t.id === id ? { ...t, complete: !t.complete } : t
      )
    );
  };

  return (
    <div className="min-h-screen  flex flex-col gap-8 bg-gray-800 text-white">
      <h1 className="text-6xl text-center py-6 px-4">
        Todolist
      </h1>

      <div className="w-full">
        <form action=""
        onSubmit={SubmitHandle}
        className="flex justify-center gap-8 items-center p-2">
          <input type="text"
          placeholder="enter your task"
          value={value}
          onChange={(e)=>handleSubmit(e.target.value)}
          className="outline-none border rounded-full text-lg font-bold w-3/12 px-3 text-white py-3 bg-gray-700"
          />
          <button className="bg-purple-500 px-3 py-3 w-24 text-white text-lg font-bold rounded-full h-full" type="submit">Add</button>
        </form>
      </div>

      <div className=" w-full">
        <ul className="w-full container mx-auto flex flex-col gap-4 justify-center items-center">
         {task.map((todo)=>{

          const textStyle = todo.complete ? "line-through opacity-50" : " ";

          return (
             <li className="w-5/12 bg-purple-500 rounded-full" key={todo.id}>
            <div className="flex f justify-between px-4 py-3 text-lg font-bold  items-center">
              <span className={textStyle}>{todo.text}</span>
              <span className="flex gap-3 text-lg">
                <button onClick={()=> handleEdit(todo.id ,todo.text)}><FaPencilAlt /></button>
                <button onClick={()=>handleDelete(todo.id)}><MdDelete /></button>
                <button onClick={()=>handleToogle(todo.id)}><FaCheckCircle  /></button>
              </span>
            </div>
          </li>
          )
         }
        )}
        </ul>
      </div>

    </div>
  )
}

export default Todo
