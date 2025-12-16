import { useReducer } from "react";

interface State  {
  count: number;
}

type Action =
  | {type : 'INCREMENT'}
  | {type : 'DECREMENT' }
  | {type : 'RESET'}
  | {type : 'ADD_FIVE'};

  
  const reducers = (state : State ,action :Action) :State => {
    switch (action.type){
      case "INCREMENT":
        return {count : state.count +1 };

      case "DECREMENT":
        return {count : state.count - 1};

      case "RESET" :
        return {count : 0};

      case "ADD_FIVE":
        return {count : state.count + 5};

      default:
        return state;
    }

  }
  
  const Reducer = () => {
    const [state , dispatch] = useReducer(reducers , {count : 0})
    return (
      <>
      <div style={{padding  :"20px", textAlign : 'center'}}>
        <h1>Counter :  {state.count}</h1>
        <div style={{display:'flex' , gap :'10px' ,justifyContent: 'center'}}>
          <button onClick={()=> dispatch({type : 'INCREMENT'})}>+</button>
          <button onClick={()=> dispatch({type : 'DECREMENT'})}>-</button>
          <button onClick={()=> dispatch({type : 'ADD_FIVE'})}>+ 5</button>
          <button onClick={()=> dispatch({type : 'RESET'})}
            style={{backgroundColor:'red' , color:'white'}}>RESET</button>
        </div>
      </div> 
      </>
    )
  }
  
  export default Reducer
  