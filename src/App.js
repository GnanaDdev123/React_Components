// import logo from './logo.svg';
// import './App.css';

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

import  {ListParentOrderList,ListParentUnOrderList} from "./components/list/listParent";

const App = ()=>{
  return(
   <div>
      <h1>gnana</h1>
    <ListParentOrderList/>
    <ListParentUnOrderList/>
   </div>

  )
}
export default App;

// import { Table } from "./components/tables/table";

// const App = ()=>{
  
//   return(
//     <Table/>
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




