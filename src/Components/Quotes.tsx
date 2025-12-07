import { useEffect, useState } from "react"
import axios from "axios"


interface Slip {
  id:number;
  advice:string;
}

interface Advicersponce {
  slip :Slip
}

const Quotes = () => {
  const [quotes , setQuotes] = useState<Slip []>([])
  const [count,setCount] = useState<number>(1)
  const [loading,setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchQuotes = async()=>{
    setLoading(true);
    setError(null)
   try{
    const request =  Array.from({length : count}).map(()=> axios.get<Advicersponce>(`https://api.adviceslip.com/advice?t=${Math.random()}`)); 
    const response = await Promise.all(request);
    const newQuotes = response.map((res)=>res.data.slip);
    setQuotes(newQuotes)
   } catch (err){
    setError("failder to fetch quotes . please try again")
    console.log(err)
   } finally {
    setLoading(false)
   }
  }

useEffect(() => {
    fetchQuotes()
  }, [])


  return (
   <div className="box-border min-h-screen bg-gray-50 py-10">
      <div className="shadow-xl shadow-gray-900/20 bg-white rounded-2xl max-w-md mx-auto px-6 py-8 flex flex-col items-center gap-8">
        
        {/* Header */}
        <div className="bg-fuchsia-900 text-white font-medium tracking-wide rounded-xl w-full py-4 text-2xl text-center shadow-md">
          <h1>Quote Generator</h1>
        </div>

        {/* Controls */}
        <div className="w-full space-y-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-lg font-semibold text-gray-700">
              <label htmlFor="quote-range">Number of quotes:</label>
              <span className="bg-fuchsia-100 text-fuchsia-900 px-3 py-1 rounded-lg">{count}</span>
            </div>
            
            {/* Controlled Input: Value is tied to State */}
            <input
              id="quote-range"
              type="range"
              min="1"
              max="5"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-fuchsia-600"
            />
          </div>

          <button
            type="button"
            onClick={fetchQuotes}
            disabled={loading}
            className={`w-full font-medium tracking-wide rounded-full py-4 text-xl text-white transition-all 
              ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-fuchsia-500 hover:bg-fuchsia-600 shadow-lg hover:shadow-fuchsia-500/30"}`}
          >
            {loading ? "Generating..." : "Generate Quotes"}
          </button>
        </div>
      </div>

      {/* Display Area */}
      <div className="max-w-md mx-auto mt-8 px-4 space-y-4">
        {error && <p className="text-red-500 text-center font-bold">{error}</p>}
        
        {quotes.map((item, index) => (
          <div key={`${item.id}-${index}`} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-fuchsia-500">
             <p className="text-lg text-gray-800 italic">"{item.advice}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quotes
