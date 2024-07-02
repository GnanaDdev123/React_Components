import {Component} from "react"
import { ChildeComponent } from "./chiled"

 export class Unmonting extends Component{
    state={
        isChildVisble:true
    
    }
    
    onClick=()=>{
        this.setState({
            isChildVisble:!this.state.isChildVisble
        })
    }
    render(){
       
        return(
            <>
            <h2>Hello world</h2>
            <button onClick={this.onClick}>click me</button>
            {
                this.state.isChildVisble ? <ChildeComponent/> : null
            }
            {/* <ChildeComponent/> */}
            </>
        )
    }
}