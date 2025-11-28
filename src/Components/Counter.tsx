import { useState } from "react"


const Counter = () => {

  const [count, setCount] = useState<number>(0)

  const increment = ()=>{
    setCount(() =>count +1)
  }

   const decrement= ()=>{
    setCount(() =>count -1)

    if (count <= 0){
      setCount(0)
    }
  }

  const Reset = ()=>{
    setCount(0)
  }

  return (
    <div className="h-screen flex-col flex justify-center items-center bg-black text-white">
      <h1 className="text-7xl px-1 py-5 mb-4">Counter APP</h1>
    <div className="flex gap-10 w-full container mx-auto items-center p-2 justify-center">
      <button className="w-26 h-10 bg-orange-500 text-black font-bold text-2xl px-1 rounded-full pt-1 pb-1 align-middle " onClick={increment}>+</button>
      <h1 className="font-extrabold text-2xl">{count}</h1>
      <button className="w-26 h-10 bg-orange-500 text-black font-bold text-2xl px-1 rounded-full pt-1 pb-1 align-middle " onClick={decrement}>-</button>
    </div>

    <div className="p-2 m-4 flex justify-center items-center">
      <button className="w-26 h-10 uppercase bg-orange-500 text-black font-bold text-2xl px-1 rounded-full pt-1 pb-1 align-middle " onClick={Reset}>reset</button>
    </div>

    </div>
  )
}

export default Counter
