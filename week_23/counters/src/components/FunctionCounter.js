import React, { useState } from 'react';



export default function FunctionCounter() {
   
    
    const [borderColor, setBorderColor] = useState('#9fdbfa');
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
        setBorderColor('green');
        setTimeout(() => {
        setBorderColor('#9fdbfa');
        }, 500);  
    }

    function handleDecrement() {
        setCount(count - 1);
        setBorderColor('red');
        setTimeout(() => {
            setBorderColor('#9fdbfa');
        }, 500);
    }
    function reset(){
        setCount(count-count);
    }
    return (
    <div className="Holder" style={{border: `1px solid ${borderColor}`}}>
        <h1>COUNTER</h1>
        <p className="count">{count}</p>
        <div className="con">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <div>
            <button onClick={reset} style={{backgroundColor:"white",color:"black",fontSize:"15px",border:"1px dashed #9fdbfa"}}>Reset</button>
            </div>
        </div>
    </div>
    );
};