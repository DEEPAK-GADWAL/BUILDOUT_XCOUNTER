import React,{useState} from "react";

const Count= ()=>{
  const[count,setCount]=useState(0)
  const handleIncrement=()=>{
    setCount(prevState=>prevState+1)
  }

  const handleDecrement=()=>{
    setCount(prevState=>prevState-1)
  }

return(
<div className="mainContainer">
  <h1>Counter App</h1>
  <p>Count: {count}</p>
  <button onClick={handleIncrement}>Increment</button>
  <button onClick={handleDecrement}>Decrement</button>

</div>

)
}
export default Count;