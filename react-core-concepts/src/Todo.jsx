import React from 'react';

const Todo = ({task,is_Done}) => {
    
    // return (
    //     <div>
    //         <li><strong>Task: </strong>{task} </li>

    //     </div>
    // );



    //conditional rendaring opition-1:
    // if (is_Done==true){
    //     return <li>Finished: {task}</li>
    // }
    // else{
    //     return <li>Work on: {task}</li>
    // }

     //conditional rendaring opition-2:
        // if(is_Done){
        //     return <li>Finished: {task}</li>
        // }
        //     else{
        //         return <li>Work on: {task}</li>
        //     }
    
         //conditional rendaring opition-3:

    //       return (
    //     <div>
    //         <li>{is_Done?'Finished':'work on'}: {task}</li>

    //     </div>
    // );
    

    //if only said truth should visival
    //              return (
    //     <div>
    //         <li> {task} {is_Done && ':Done'} </li>

    //     </div>
    // );
    
    //if only said false shuld visival
    return (
        <div>
            <li> {task} {is_Done || ':Do it '} </li>

        </div>
    );
         
};

export default Todo;