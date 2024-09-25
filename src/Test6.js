//react does not handle variables in the components
//to handle data of stored in variables, react use state concept which is similar to variables for storing data
//when state updates, the whole component re-render, and thus any change in value reflect in the whole component
import {useState} from "react"

export function Test6()
{
    const [data,setData]=useState("Vikas")
    function updateData()
    {
        setData("Vikas Kansal"); 
        alert(data);
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}>Click me to update Data</button>
        </div>
    )
}