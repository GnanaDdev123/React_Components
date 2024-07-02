import React,{Component} from "react";
export class MountingPhers extends Component{
    constructor(){
        console.log("constucter executing...");
        super();
        this.state = {
            count : 10,
            favretcolor: "yellow"
        };
    };

    componentDidMount(){
        console.log( "componentDidmount executing....")
    };
    // static getDerivedStateFromProps(props,states){
    //     return{favretcolor:props.favColor}

    // }
    render(){
        console.log("render executing...")
        return(
            <div>
                my favColor{this.state.favretcolor}
            </div>
        )
    }
}