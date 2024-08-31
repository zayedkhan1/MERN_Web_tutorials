import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(data=>setUsers(data))
    },[])
    console.log(users)

    return (
        <div>
           <h3>Total users: {users.length}</h3>
           {
            users.map(user=><User
            key={user.id}
            user={user}
            ></User> )
           }
        </div>
    );
};

export default Users;

// 1.declare a state to hold the data
// 2.useEffect with callback and dependency\
// 3.use fetch for json data