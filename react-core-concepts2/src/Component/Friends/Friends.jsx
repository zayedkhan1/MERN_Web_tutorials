import React, { useEffect, useState } from 'react';
import './Friends.css'
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setFriends]=useState([])
    useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res=>res.json())
     .then(data=>setFriends(data))
    },[])
    return (
        <div className='box' >
            <h3>Hellow friends:{friends.length} </h3>
            {
                friends.map(friend=><Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;
// useState to hold data
// useEffect with dependency array
// use fetch to load data