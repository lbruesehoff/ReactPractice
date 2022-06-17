import {useState} from 'react';
import './Counter.css';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }

    return(
        <div className='counter'>
            <h1>React Counter</h1>
            <h1>{counter}</h1>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
    )
};

export default Counter; 