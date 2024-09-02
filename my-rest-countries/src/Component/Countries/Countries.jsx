import  { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries,setCountries] =useState([])
// declared state for selected country
    const [visitedCountries,setVisitedCountries]=useState([])
//for flag
const [visitedFlages,setVisitedFlages]=useState([])


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    console.log(countries)

// declared btn-functio for visited cou 
    const handelVisitedCountry=(country)=>{
        console.log('add this to yur visited country')
        // new element addd korte hole push,pop use kora jabe na,,aibhab new aray create kore korte hobe
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    }
    
//for flags
const handelVisitedFlags=(flag)=>{
    const newVisitedFlags=[...visitedFlages,flag]
    setVisitedFlages(newVisitedFlags)
}
// remove item from an array in a state:
// use filter to select all the elements except the one you want to remove

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Welcome to countries:{countries.length} </h2>
            <div>
            <h4>Visited Countries: {visitedCountries.length} </h4>
            {
                visitedCountries.map(country=><li key={country.cca3}>
                    {country.name.common}
                </li>)
            }

            </div>
            {/* for flags */}
            <div className='flag_container'>
                <p>This si for my flags</p>
                {
                    visitedFlages.map((flag,idx)=><img 
                    key={idx}
                    src={flag} ></img>)
                }

            </div>
               <div className='country_container'>
            {
             countries.map(country=><Country
             key={country.cca3}
            //  function patacchi
            handelVisitedCountry={handelVisitedCountry}
            handelVisitedFlags={handelVisitedFlags}
             country={country}
             ></Country>)
            }
        </div>
        </div>
       
    );
};

export default Countries;