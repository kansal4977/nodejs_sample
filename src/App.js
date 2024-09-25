
import './App.css';
import {useState} from 'react';
import Test1 from './Test1'; //importing functional component
import { Test21 } from './Test2'; //importing multi-functional component
import { Test22 } from './Test2'; //importing multi-functional component
import Test3 from "./Test3";    //importing class components
import Test4 from "./Test4";     //importing functional component with inner functional component
import {Test50} from "./Test5";     //importing functional component  with button event-1st method
import {Test51} from "./Test5";     //importing functional component with button event-2nd method
import {Test52} from "./Test5";     //importing functional component with button event-3rd method
import {Test6} from "./Test6";     //importing functional component with state variable
import {Test7} from "./Test7";     //importing class component with state variable
import {Test8} from "./Test8";     //using props in functional components and update state values
function App() {
  
  const [name1,setName1]=useState("Vikas");
  const [city1,setCity1]=useState("Sunam");
  const [pin1,setPin1]=useState("148028");
  const [mobile1,setMobile1]=useState("9501010979");

  function updateProps()
  {
    setName1("Vikas Kansal")
    setCity1("Mohali")
    setPin1("140307")
    setMobile1("7625895010")
  }

  return (
    <div className="App">
      <h1 align="left">Functional Components</h1>
      <Test1 />
      <Test21 />
      <Test22 />
      <h1 align="left">Class Component</h1>
      <Test3 />
      <h1 align="left">Inner functional Component</h1>
      <Test4 />
      <h1 align="left">Functions with Events</h1>
      <Test50 />
      <Test51 />
      <Test52 />
      <h1 align="left">Functions with State Vairable</h1>
      <Test6 />
      <h1 align="left">Class with State Vairable</h1>
      <Test7 />
      <h1 align="left">Props with functional components</h1>
      
      <Test8 name={name1} address={{city:city1, pin:pin1, mobile:mobile1}}/>
      <button onClick={()=>updateProps()}>Click Me to Update</button>
      <hr></hr>
      <Test8 name="Meghna Kansal" address={{city:"Mohali", pin:"140306", mobile:"7696134167"}}/>

    </div>
  );
}

export default App;
