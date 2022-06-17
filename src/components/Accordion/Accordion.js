import React, { useState } from 'react';
import { data } from './data';
import './Accordion.css'

const Accordion = () => {

    const [click, setClick] = useState(null)    

    const toggle = (i) => {
        if( click == i ){
            return setClick(null);
        }
        setClick(i);
    };


  return (
    <div className='wrapper'>
    <h1>React Accordion</h1>
        <div className='accordion'>
            {data.map((item, index ) => (
                <div className='item'>
                    <div className='title' onClick={() => toggle(index)}>
                        <h1>{item.question}</h1>
                        <span>{click == index ? '-' : '+'}</span>
                    </div>
                    <div className={click == index ? 'content.show' : 'content'}>
                        <p>{item.answer}</p>
                    </div>
                </div>
            
            ))}
        </div>
    </div>
  )
}

export default Accordion