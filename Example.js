import { useState, useEffect } from "react";

export default function Example(){
    const[data,setData]=useState(10);
    const[count,setCount]=useState(4);
     useEffect(()=>{
        console.log("count was changed");
        if (count < 5) {
    setCount(0);
  }
        
    },[count])

    useEffect(()=>{
        console.log("data was changed")
    },[data])

    useEffect(()=>{
        console.log("run on every render");
    })
    
    useEffect(()=>{
        console.log("empty useEffect");
    },[])
    return(
        <div>
            <h3>data={data}</h3>
            <h3>count={count}</h3>
            <button onClick={()=>{setData(data+1)}}>data increment</button> &nbsp;
            <button onClick={()=>{setCount(count+1)}}>count increment</button>
        </div>
    );
}