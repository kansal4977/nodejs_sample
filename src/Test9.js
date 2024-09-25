//props with class
import React from 'react'

export class Test9 extends React.Component {
    
    render() {
        return(
            <div>
               <h1>{this.props.name}</h1>
            </div>
        )
    }
}