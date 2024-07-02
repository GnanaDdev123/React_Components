import{useState} from "react"
export const UseStateExample=()=>{
    // const [counter,setCounter]=useState(0)
    const initialState=10
    const[count,setCount]=useState(initialState)
    
    // const handleIncrement=()=>{
    //     // this three ways are same
    //     // setCounter((count)=>{return count+1})
    //     //    setCounter(count=>count+1)
    //     // setCounter(counter+1)
    //     setCount(c=>c+1)
    // }
    // const decrementHandler=()=>{
    //     if(count>0)
    //      setCount(x=>x-1)
    // }
    // const resetHandler=()=>{
    //     setCount(0)
    // }
    const handleIncrement=(type,X)=>{
        switch(type){
            case "INCREMENT":
                setCount((count)=>count+X);
                break;
            case "DECREMENT":
                if(count>0){
                setCount((count)=>count-X)
                }             
                break;
            case "RESET":
                setCount(0)
                break;
                default:
                break;
        }
           
    }

    return(
        <>
        <h1>use state example</h1>
        <h1>current count value {count}</h1>
        <button onClick={()=>handleIncrement("INCREMENT",20)}>Increment</button>
        <button onClick={()=>handleIncrement("DECREMENT",5)}>Decrement</button>
        <button onClick={()=>handleIncrement("RESET",20)}>reset</button> 
        </>
    )
}
  
