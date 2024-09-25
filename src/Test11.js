import {useState} from "react";
import { Button } from 'react-bootstrap';
export function Test11()
{
    const [name,setName]=useState("")
    const [lang,setLang]=useState("")
    const [tnc,setTnc1]=useState(false)

    function getFormData(e)
    {
        console.log(name,lang,tnc);
        e.preventDefault();
    }
    return(
        <div>
            <h1>Form Example</h1>
            <ShowData />
            <form onSubmit={getFormData}>
                <input type='text' placeholder="Enter Your Name: " onChange={(e)=>setName(e.target.value)}></input><br /><br />
                <select onChange={(e)=>setLang(e.target.value)}>
                    <option>Select your Option</option>
                    <option>C Programming</option>
                    <option>C++ Programming</option>
                    <option>Java Programming</option>
                    <option>Full Stack Programming</option>
                </select><br /><br />
                <input type='checkbox' onChange={(e)=>setTnc1(e.target.checked)}></input>Agreed with Terms and Conditions<br /><br />
                <Button>Submit Data</Button>
                <Button variant="success">Danger</Button>{' '}
                <Button variant="outline-warning">Warning</Button>{' '}
            </form>
           
        </div>
    )

function ShowData()
{
        return(
            <div>
                <h1>{name} - {lang} - {tnc}</h1>
            </div>
        )
}
}


    