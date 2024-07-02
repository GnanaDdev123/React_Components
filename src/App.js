// import logo from './logo.svg';
// import './App.css';

// import { CircleComponent } from "./components/circle/circleTask";

// import { FirstComponet } from "./components/bootstrap/firstComponent"
// import CustomAccodion from "./components/accodion/accodion";
// import { CardComponent } from "./components/card/card";
// import { CarData } from "./components/card/cardata";
// import { animi } from "./components/tasks/animicim";
// import { ImageComponent,ImageComponentData } from "./components/image/ImageComponent";
// import ButtonComponentClass from "./components/class-componets/buttonComponent";


// import { ImageComponent,ImageComponent1 } from "./components/image/ImageComponent"

// import { Fruits } from "./components/list/listParent"

// import { ImageComponent } from "./components/image/ImageComponent"

// import { ListParentOrderList } from "./components/list/listParent"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> hello gnana.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import  {ListParentOrderList,ListParentUnOrderList} from "./components/list/listParent";

// const App = ()=>{
//   return(
//    <div>
//       <h1>gnana</h1>
//     <ListParentOrderList/>
//     <ListParentUnOrderList/>
//    </div>

//   )
// }
// export default App;

// import { Table } from "./components/tables/table";
// import { ListParentOrderList,ListParentUnOrderList} from "./components/list/listParent"

// const App = ()=>{
  
//   return(
//     <div>
//     <Table/>
//     <ListParentOrderList/>
//     <ListParentUnOrderList/>
//     </div>
//   )
  
// }
// export default App;


//  import { Form } from "./components/forms/loginform";

//  let App=()=>{
//   return(
//     <Form/>
//   )
//  }
//  export default App;

// import {Button} from "./components/button/button"

// const App=()=>{
//   return <Button />
// }
// export default App;

// // Conditionol rendering 
// // 3 types
// // 1.if/else 
// import { ImageComponent,ImageComponent1 } from "./components/image/ImageComponent";

// const isMyFirstCrus = true;
// const isMySecondCrus = false;
// const App=()=>{
 

//   if(isMyFirstCrus){
//     return(
//       <>
//       <h2>she is myfirst crus</h2>
//       {<ImageComponent/>}
//       </>
//     );
//   }
//     else{
//       return(
//         <>
//         <h2>she is my secound crus</h2>
//         {<ImageComponent1/>}
        
//         </>
//       )
//     }

//   }
//   export default App;

// // 2.tarnarry method
// import { ImageComponent,ImageComponent1 } from "./components/image/ImageComponent";
// import Button from "./components/button/button";

// const crus = true;

// const App=()=>{
//   // return(
//   //   <div>
//   //     {
//   //       crus ?(
//   //       <>
//   //       <h2>she is my firstcrus</h2>
//   //       <ImageComponent/>
//   //       </>
//   //       ) : (
//   //         <>
//   //         <h2>she is mysecondcrus</h2>
//   //         <ImageComponent1/>
//   //         </>
//   //       )
//   //     }
//   //   </div>   
//   // )
  
//   return (
//     <div>
//       {crus && 
//       <>
//       <h2>she is my firstcrus</h2>
//       <ImageComponent/>
//       <Button/>
//       </>
//       }
//     </div>
//   )

// }
// export default App;



// import { ListParentOrderList } from "./components/list/listParent";
// const App=()=>{
//   return(
//     <ListParentOrderList/>
//   )
// }
// export default App;

// import Button from "./components/button/button";
// import { ListItems2 } from "./components/list/listParent";
// import { Obj } from "./components/practiswork/13jun";

// const App=()=>{
//   return(
//     <>
//     <Obj/>
//     </>
//   )
// }
// export default App;

// const App=()=>{
//  const a=true
//  if(a){
//   return(
//     <div>
//       <ImageComponent/>
//     </div>
//   )
//  }
//  else{
//   return(
//     <div>
//       <ImageComponent1/>
//     </div>
//   )
//  }

// return(
//   <div>
//     {
//       a ?(
//         <>
//         <ImageComponent/>
//         </>
//       ) :(
//       <>
//       <ImageComponent1/>
//       </>
//       )
//     }
//   </div>
// )

// return(
//   <>
//      {
//         a && 
//         <>
//         <h2>muskaan</h2>
//         <ImageComponent1/>
//         </>
      
//       }
//   </>
// )

// }
// export default App;

// const App=()=>{
//   return(
//     <div>
//       {
//         animi.map((eachcar)=>{
//           return(
//             <>
//             <h3>{eachcar.name}</h3>
//             <h2>{eachcar.id}</h2> 
//             <ImageComponentData src={eachcar.image} width={250} height={160} alternateText={eachcar.id}/> 
//             </>
//           )
          
//         })
//       }
     
//     </div>
//   )
// }
// export default App;


// import { Gnana } from "./components/Material ui/materia_ui";
// import { MountingPhers } from "./components/class-componets/mounting/mounting";
// import { CircleCreator } from "./components/class-componets/mounting/tasl";
// import { ButtonComponentClass } from "./components/class-componets/buttonComponent";
// import { Button1, ButtonComponentClass1 } from "./components/class-componets/task";
// import { Unmonting } from "./components/class-componets/unMounting/unMonting";
// import { UseStateExample } from "./components/functionalHooks/useState";
// import { Todo } from "./components/functionalHooks/todo";
// import { FunwithReact } from "./components/tables/task";
// import Button from "./components/button/button";
// import { Forms } from "./components/forms1/form";
// import { Table } from "./components/tables/table";
// import { Form } from "./components/forms2/loginform";
// import { Forms } from "./components/forms1/form";
// import { FunwithReact } from "./components/tables/task";
import { Button2 } from "./components/new/props";

const App=()=>{
  return(
 <>
 {/* <Table/> */}
 {/* <Forms/> */}
 {/* <Input/>
 <Form/> 
 <Forms/> */}
 {/* <FunwithReact/> */}
 <Button2/>
 
 </>
  )
}
export default App;



