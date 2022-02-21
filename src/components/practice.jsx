
import { useEffect } from "react";
import { useState } from "react";

const Practice=_=>{
    let [num , setNum]=useState(0)
    const dec =_=>{
        if (num <=0){
            alert("limit");
            return;
        }
        setNum(--num);
    }   
    useEffect(()=>{
        alert("hi")
    },[num])
    return(
        <>
        <h1>
            {num}
        </h1>
<button onClick={()=>{setNum(++num)}}>add</button>

<button onClick={()=>{dec()}}>subtract </button>
</>
   )
}
export default Practice