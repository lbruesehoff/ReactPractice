import { useState } from "react";
import './ToDo.css'

const ToDo = () => {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const addTodo = (e) => {
        setItem(e.target.value);
        console.log(item);
        
        
    }

    const display = (e) => {
        e.preventDefault();
        setList([...list, {todo: item}])
        console.log(list);
        setItem('');
        
        
    }


    return (
        <div className="todo">
            <h1>Todo list in react</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Enter Todo..."
                        onChange={addTodo}
                        value={item}
                        ></input>
                    <button type='submit' onClick={display}>Add Todo</button>
                </form>
                {list.map((e) => {
                    return(
                        <h3>{e.todo}</h3>
                )})}
        </div>
    )
}

export default ToDo;