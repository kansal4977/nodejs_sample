//using props for functional componenets
//props are like arguments to functions


export function Test8(args)
{
    

    return(
        <div style={{background:"skyblue", margin:10, padding:10}}>
            
            <h1>Hello {args.name}</h1>
            <h2>Contact No: {args.address.mobile}</h2>
            <h2>Address: {args.address.city}-{args.address.pin}</h2>

            
        </div>
    )
}