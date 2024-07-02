
import { Component } from "react";

 export class ChildeComponent extends Component{
    componentWillUnmount(){
        alert("child removed")
    }
    render(){
        return(
            <h2>chiled</h2>
        )
    }
}