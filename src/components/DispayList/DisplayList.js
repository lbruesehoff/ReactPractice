import { useState } from "react";
import './DisplayList.css'


const DisplayList = () => {

    const [list, setList] = useState([
        {
            id: 1,
            fname: 'Logan',
            lname: 'Bruesehoff',
            state: 'Minnesota',
            age: 25,
        },
        {
            id: 2,
            fname: 'Katieann',
            lname: 'Pelto',
            state: 'Minnesota',
            age: 24,
        },
    ])

    return(
        <div className="list">
            <h1>Display a list from data </h1>
            { list.map((data) => (
                <div key={data.id}>
                    <h2>Name: {data.fname} {data.lname}</h2>
                    <h3>Age: {data.age}</h3>
                    <h3>Residency: {data.state}</h3>
                </div>
            ))

            }
        </div>
    )
}

export default DisplayList;