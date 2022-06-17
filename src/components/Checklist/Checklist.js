import { useState } from "react";
import './Checklist.css'


const Checklist = () => {
    let [checked, setChecked] = useState([
        {
            over21: false,
            isCitizen: false
        }
    ])
    
    const check = (e) => {
        setChecked({[e.target.name]: e.target.checked})
    }

    return (
        <div className="checkList">
            <h1>React Checklist</h1>
            <h2>Over 21 checked: {checked.over21 ? "Yes" : "No"} </h2>
            <h2>Over 21: 
                <input 
                    checked={checked.over21} 
                    name='over21' 
                    onChange={check} 
                    type='checkbox'
                />
            </h2>

            <h2>U.S Citizen checked: {checked.isCitizen ? "Yes" : "No"} </h2>
            <h2>U.S Citizen:
                <input 
                    checked={checked.isCitizen} 
                    name='isCitizen' 
                    onChange={check} 
                    type='checkbox'
                />
            </h2>
            
        </div>
    )
}

export default Checklist;