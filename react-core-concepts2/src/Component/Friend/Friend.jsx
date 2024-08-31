import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {
    const {userId,title}=friend
    return (
        <div className='boxer'>
            <h4>UserID:{userId} </h4>
            <p>{title}</p>
            
        </div>
    );
};

export default Friend;