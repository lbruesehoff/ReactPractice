import { useState } from 'react';
import Axios from 'axios';
import './RestAPI.css'

const RestAPI = () => {

    const [cat, setCat] = useState('');

    const getData = () => {
        Axios.get('https://meowfacts.herokuapp.com/')
        .then((response) => {
        let catFact = response.data.data[0]
        console.log(catFact);
        setCat(catFact)
        
    })
    }

    return (
        <div className='catFacts'>
            <button onClick={getData}>Click for cat information</button>
            
            <h2>{cat}</h2>
        </div>
    )
}

export default RestAPI;