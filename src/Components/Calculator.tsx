import { useState } from "react"


const Calculator = () => {
  const [value , setValue] = useState('')

  function handleInput (e:React.MouseEvent<HTMLInputElement>){
    const clickedValue= e.currentTarget.value;
     if(clickedValue === 'AC'){
      setValue('');
     }else if (clickedValue === 'DE'){
        setValue(value.slice(0,-1))
     } else if(clickedValue === '='){
      try{
        setValue(eval(value).toString())
      }catch (err){
        setValue('error')
      }
     }else{
      setValue(value + clickedValue)
     }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-950 text-gray-200'>
      <div className='bg-gray-800 rounded-xl w-2/12 '>
        <form action="">
          <div className="px-1 py-2 m-1">
            <input type="text" className='w-full bg-gray-200 text-gray-900 text-xl font-bold outline-none rounded-2xl px-2 py-3 ' value={value}  />
          </div>
          <div className='py-2 px-2'>
            <div className='flex justify-evenly px-1 py-2 '>
            <input type="button" value="AC" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer 'onClick={handleInput}/>
            <input type="button" value="DE" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="." className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer ' onClick={handleInput} />
            <input type="button" value="/" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
          </div>
          <div className='flex justify-evenly px-1 py-2 '>
            <input type="button" value="7" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer ' onClick={handleInput} />
            <input type="button" value="8" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="9" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput} />
            <input type="button" value="*" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput} />
          </div>
          <div className='flex justify-evenly px-1 py-2 '>
            <input type="button" value="4" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="5" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="6" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="+" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
          </div>
          <div className='flex justify-evenly px-1 py-2 '>
            <input type="button" value="1" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="2" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="3" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="-" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
          </div>
          <div className='flex justify-evenly px-1 py-2 '>
            <input type="button" value="00" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="0" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            <input type="button" value="=" className='bg-gray-200 text-gray-900 w-10 h-10 text-xl font-bold rounded-xl hover:bg-gray-400 transition cursor-pointer' onClick={handleInput}/>
            
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Calculator
