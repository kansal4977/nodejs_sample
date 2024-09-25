//using state concept for class
import React, {Component} from "react";

export class Test7 extends Component
{
    constructor()
    {
        super();
        this.state={
            data:0
        }
    }
    updateData()
    {
        this.setState({data:this.state.data+1})
    }

    render()
    {
        return(
            <div>
                <h1>Counter {this.state.data}</h1>
                <button onClick={()=>this.updateData()}>Click me to update state data</button>
            </div>
        )
    }
}