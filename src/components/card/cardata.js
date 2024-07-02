

export const CarData =()=>{
   const cardata =[
        {
            "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
            "name": "Audi A4",
            "id": "205",
            "Model": "2021",
            "Mileage": "17.4 kmpl",
            "price": "Rs.5200"
        },
        {
            "image": "https://images.91wheels.com/assets/b_images/main/models/profile/profile1660712875.png?width=420&q=60?w=640&q=60",
            "name": "Hyundai Venue",
            "id": "209",
            "Model": "2023",
            "Mileage": "17.5 kmpl",
            "price": "Rs.2900"
        },
        {
            "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/99421/macan-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
            "name": "Porsche Macan",
            "id": "330",
            "Model": "2000",
            "Mileage": "15.2 kmpl",
            "price": "Rs.2509"
        },
        {
            "image": "https://images.91wheels.com/assets/c_images/gallery/bmw/i5/bmw-i5-0-1714124793.jpg?width=420&q=60?w=640&q=60",
            "name": "BMW i5",
            "id": "322",
            "Model": "2024",
            "Mileage": "18.5 kmpl",
            "price": "Rs.2999"
        },
        {
            "image": "https://images.91wheels.com/assets/b_images/main/models/profile/profile1702534124.jpg?width=420&q=60?w=640&q=60",
            "name": "Mercedes-Benz ",
            "id": "372",
            "Model": "2021",
            "Mileage": "15.5 kmpl",
            "price": "Rs.5200/day"
        },
        {
            "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=80",
            "name": "Ford Endeavour",
            "id": "362",
            "Model": "2024",
            "Mileage": "14.5 kmpl",
            "price": "Rs.2600/day"
        },
        {
            "image": "https://cdn.24c.in/prod/new-car-cms/Land-Rover/Range-Rover-Sport/2024/04/01/4c5517c3-5a46-4795-ac78-b2f9bb0985e1-Land-Rover_Range-Rover-Sport_Velocity-Blue.png",
            "name": "Land Rover",
            "id": "3552",
            "Model": "2022",
            "Mileage": "12.5 kmpl",
            "price": "Rs.4600/day"
        },
        {
            "image": "https://imgd.aeplcdn.com/664x374/cw/ec/34457/Honda-CRV-Exterior-137861.jpg?v=20180910155558&wm=1&q=80",
            "name": "MG Hector",
            "id": "312",
            "Model": "2023",
            "Mileage": "15.7 kmpl",
            "price": "Rs.3600/day"
        },
        {
            "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
            "name": "Honda CR-V",
            "id": "352",
            "Model": "2022",
            "Mileage": "18.7 kmpl",
            "price": "Rs.2600/day"
        }]
    return(
        <div>
            {cardata.map((event)=>{
                return(
                <h2>{event.name}</h2>
                )

            })}
        </div>

    )
}