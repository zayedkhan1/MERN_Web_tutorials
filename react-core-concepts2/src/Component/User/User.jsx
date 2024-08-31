import React from 'react';

const User = ({user}) => {
    const {name,email,}=user;
    const userStyle={
        border:'2px solid purple',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px'
    }
    return (
        <div style={userStyle} >
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
        </div>
    );
};

export default User;