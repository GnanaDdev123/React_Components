 import React, {Component} from "react"
import { ImageComponent1 } from "../image/ImageComponent";

class ButtonComponentClass extends Component{
  state={
    text1:"subscribe",
    text2:"subsecibed",
    isSubcibe:true,
  };

subcibeHandler = () => {
  // console.log("gnana")
  this.setState({
    isSubcibe: !this.state.isSubcibe
  })

}

  render() {
    return(
        <React.Fragment>
          <button onClick={this.subcibeHandler}>{ this.state.isSubcibe? this.state.text2:this.state.text1 }</button>



          {
            this.state.isSubcibe?
            <>
            <h1>thanqs</h1>
            <ImageComponent1/>
            </>
            :
            <h1>plese subscribe</h1>
          }
        </React.Fragment>

 ) }
  

}
// export default ButtonComponentClass;