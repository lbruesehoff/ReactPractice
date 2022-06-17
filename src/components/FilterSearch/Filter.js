import { useState } from "react";
import './filter.css'

const Filter = () => {
    const cars = [
        {
            id: 1,
            make: 'Honda',
        },
        {
            id: 2,
            make: 'Kia',
        },
        {
            id: 3,
            make: 'Toyota',
        },
        {
            id: 4,
            make: 'Nissan',
        },
        {
            id: 5,
            make: 'Tesla',
        },
    ];

    const [filter, setFilter] = useState("");

    // Grabs what you put in the input 
    const filterCar = (event) => {
        setFilter(event.target.value);
        console.log(filter);
    }


    return(
        <div className="filterList">
            <h1 className="filterTitle">Enter Car listed below for it to filter out the rest.</h1>
            <input
                type="text"
                placeholder="Enter Car..."
                onChange={filterCar}     
            />
            {
                cars.filter((car) => {
                    if(filter === ''){
                        return car;
                    } else if(car.make.toLowerCase().includes(filter.toLowerCase())){
                        return car;
                    }
                    
                }).map((car, id) => (
                    <div key={id}>
                        <h3>{car.make}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Filter;