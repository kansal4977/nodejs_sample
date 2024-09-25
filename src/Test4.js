//Nested functional component
function Test4()
{
    function InnerTest4()
    {
        return(
            <div>Inner function component - InnterTest4</div>
        )
    }

    return(     //inner function can only used within its outer function
        <div>
            Example of Inner Componenet
            <InnerTest4 />          
        </div>
    )
}

export default Test4;