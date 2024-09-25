//functional component with Event
//variables are also used in this example. on changinh the value of variables, component do not re-render
//component re-render only when state of the component changes.
export function Test50()        //first methods
{
    function onClickEvent()
    {
        alert("Hello from Click Event-1st Method");
    }    
    return(
        <div>
            <h1>Function Component with Nested Function on Button Event-1st Method</h1>
            <button onClick={onClickEvent}>Click Me through Nested Function</button> 
            
        </div>
    );  ///dont use () with function call in onClick event as shown above
}

export function Test51()        //second methods
{
    let data="Vikas Kansal";
    function onClickEvent()
    {
        alert(data + "-Hello from Click Event-2nd Method");
    }    
    return(
        <div>
            <h1>({data}) Function Component with Nested Function on Button Event-2nd Method</h1>
            <button onClick={()=>onClickEvent()}>Click Me through Nested Function</button>
        </div>
    );  //we can aslo call the function with () in onClickEvent using callback function
}
export function Test52()        //third methods
{
    return(
        <div>
            <h1>Function Component with Callback function on Button Event</h1>
            <button onClick={()=>{alert("Hello from call back function-3rd Method");}}>Click Me through Call Back</button>
        </div>
    );
}