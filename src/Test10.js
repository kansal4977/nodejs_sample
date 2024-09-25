//getting values from textboxes and dynamically print them
import { useState } from "react";

export function Test10(){
    const [data,setData]=useState('')
    const [status,setStatus]=useState(false)
    function updateData(ctrl)
    {
        setData(ctrl.target.value)
        setStatus(false)
    }
    return(
        <div>
            <input type='text' onChange={updateData}></input>
            <button onClick={()=>{setStatus(true)}}>Click Here</button>
            {
            status?
            <h3>{data}</h3>
            :null
            }
        </div>
    )
}