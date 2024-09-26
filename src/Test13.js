//component fro getting data from its parent componet (also known as lifting state up)
export function Test13(props)       //child componenet
{
    const name="Vikas Kansal"
    return(
        <>
        <h1>Hello {name}</h1>
        <button onClick={()=>props.getdata(name)}>Click me to update Child Component</button>
        </>
    )
}

//export default Test13;