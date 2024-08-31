import React, { useState } from 'react';

const Team = () => {
    const [team,setTeam]=useState(11);

    // style by making an object by javascript
    const teamStyle={
        border:'2px solid purple',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px'
    }
    const addPlayer=()=>{
        const newTeam=team+1;
        setTeam(newTeam)
    }
    const removePlayer=()=>{
        const newTeam=team-1;
        setTeam(newTeam)
    }

    return (
        <div style={teamStyle} >
            <h3>Players:{team} </h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer} >Remove Player</button>
        </div>
    );
};

export default Team;