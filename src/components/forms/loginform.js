import { Table } from "../tables/table"

export const Form=()=>{
    return(
        <form>
            <Lable/>
            <Input/>
            {/* <Lable/>
            <Input/> */}
        </form>
    )
}

const Input=()=>{
    return(
        <form>
            <Lable/>
            <input></input>
            
        </form>
    )
}

const Lable=()=>{
    return(
       <form>
         <label>Name : </label>
       </form>
    )
}