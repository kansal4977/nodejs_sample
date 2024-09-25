
import './App.css';
import './style.css';
import style from './custom.module.css'

import {useState} from "react"
//------------------
import {Test9} from "./Test9";     //props with class component
import {Test10} from "./Test10";     //getting value from textbox
import {Test11} from "./Test11";     //getting form data


function App1() {
  //for class props
  const [name, setName]=useState("Vikas");
  function updateClassProp()
  {
    setName("Vikas Kansal");
    alert(name);
  }
  //end of function for class props
  return (
    <div className="App">
         
      {/*New code added on dated 24-09-2024*/}
      <h1 style={{backgroundColor:'green', color:'yellow'}} align="left">Props using class Component</h1>
      <Test9 name={name} />
      <button onClick={()=>updateClassProp()}>Click Me to Update Class Props</button>
      
      <h1 className={style.heading} align="left">Getting value from TextBox</h1>
      <Test10 />

      <h1 className='primary' align="left">Getting From Data</h1>  {/*styling using style.css */}
      <Test11 />
      
    </div>
  );
}

export default App1;
