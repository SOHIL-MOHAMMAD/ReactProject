//import Counter from "./Components/Counter"
//import Todo from "./Components/Todo"
//import DigitalClock from "./Components/DigitalClock"
//import Calculator from "./Components/Calculator"
//import Quotes from "./Components/Quotes"
//import Infinite from "./Components/Infinite"
//import SearchWithDebouncing from "./Components/SearchWithDebouncing"
//import FilterSort from "./Components/FilterSort"
//import ToogleTheme from "./Components/ToogleTheme"
// import Accordion from "./Accordion"
//import useLocalStorage from "./Components/useLocalStorage"
//import UseListWithSkeleton from "./Components/UseListWithSkeleton"
import Reducer from "./Components/Reducer"
const App = () => {
// it is for useLocalStorage
  // const [name , setName] = useLocalStorage("user-name", "sohil")

  // const [count , setCount] = useLocalStorage<number>("counter", 0);
  return (
    <>
    {/* <div style={{padding : "20px"}}>
      <h1>Custom HOOK</h1> */}
     {/*<Counter/>*/}
     {/*<Todo/>*/}
     {/* <DigitalClock/>*/}
     {/* <Calculator/> */}
     {/* <Quotes/> */}
     {/* <Infinite/> */}
     {/* <SearchWithDebouncing/> */}
    {/* <FilterSort/> */}
    {/* <ToogleTheme/> */}
    {/* <Accordion/> */}

{/* it is also for useLocalStorage */}
    {/* <input type="text"
    value={name}
    onChange={(e)=> setName(e.target.value)}
    placeholder="enter name" />
    <p>hello , <strong>{name}</strong></p>

    <hr />

    <button onClick={()=>setCount(prev => prev + 1)}>
      count is {count}
    </button>

    <p style={{color : "gray" , marginTop : "20px"}}>
      (refresh the page , the content will be still same)
    </p> */}
    {/* </div> */}

    {/* <UseListWithSkeleton/> */}
    <Reducer/>
    </>
  )
}

export default App
