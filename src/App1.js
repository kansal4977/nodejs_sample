
import './App.css';
import './style.css';
import style from './custom.module.css'

import {useState} from "react"
//------------------
import {Test9} from "./Test9";     //props with class component
import {Test10} from "./Test10";     //getting value from textbox
import {Test11} from "./Test11";     //getting form data
import {Test13} from "./Test13";     //passing data from parent to child component


function App1() {
  //for class props
  const [name, setName]=useState("Vikas");
  function updateClassProp()
  {
    setName("Vikas Kansal");
    alert(name);
  }

  function getDataFromChild(args)
  {
    alert(args)
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
      
      {/*Calling child compoent and passing a function ot it to get data from child*/}
      <h1 className='primary' align="left">Lifting State Up (Getting data from child)</h1>  {/*styling using style.css */}
      <Test13 getdata={getDataFromChild}/>
    </div>
  );
}

export default App1;
