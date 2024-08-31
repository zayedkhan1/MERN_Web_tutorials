import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
   const AddNumber=()=>{
    const newCount=count+1;
    setCount(newCount)
   }
   const ReduceNumber=()=>{
    const newCount=count-1;
    setCount(newCount)
   }
    return (
        // direct style
        <div style={{border:'2px solid yellow'}}>
            <h3>This is my counter: {count} </h3>
            <button onClick={AddNumber}>Add</button>
            <button onClick={ReduceNumber}>Reduce</button>

        </div>
    );
};

export default Counter;