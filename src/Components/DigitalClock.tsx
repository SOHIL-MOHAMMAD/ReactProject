import { useState } from "react"


const DigitalClock = () => {
  let time = new Date().toLocaleTimeString()
 const [ctime,  setCtime]= useState(time)
 const updatetime = () =>{
  time = new Date().toLocaleTimeString()
  setCtime(time);
 }

 setInterval(updatetime,1000)

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <h1 className="text-7xl text-white font-light">{ctime}</h1>
    </div>
  )
}

export default DigitalClock
