import { useState } from "react"
import "./task1.css"
export const FunwithReact=()=>{
    const initialState=[0
        // {
        //     "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/99421/macan-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
        //     "name": "Porsche Macan",
        //     "id": "330",
        //     "Model": "2000",
        //     "Mileage": "15.2 kmpl",
        //     "price": "Rs.2509"
        // },
        ];
        const [Cars,setTode]=useState(initialState)
       const  htmlNewimg=()=>{
       const newCar = {
            "image": "https://miro.medium.com/v2/resize:fit:585/1*aSwy-27kIt6rQRKoLSYp1A.png",
            "name": "Mahindra XUV500",
            "id": "402",
            "Model": "2021",
            "Mileage": "19.7 kmpl",
            "price": "Rs.3000/day"
        }

        const updateCar=[...Cars,newCar]
        setTode(updateCar)

       }
    return(
        <>
        <table style={{border:"1px solid",height:"300px",width:"500px"}}>
            <th className="bor" >
                <button onClick={htmlNewimg}>gnana</button>
                
                {
        Cars.map(each=>{
            return(
                <>
                 <img src={each.image} alt={each.name} style={{display:"block"}}/>
                {/* <h3>{each.src.image}</h3> */}
                </>
            )
        })
    }
            </th>
            <th className="bor">
                {/* <button onClick={cssNewimg}>Hinata</button> */}
            </th>
            <th className="bor">
                <button>Uzumaki</button>
            </th>
            
        </table>
        </>
    )

}