import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country,handelVisitedCountry,handelVisitedFlags}) => {
    const {name,flags,capital,area,population,region,
        languages,cca3}=country;

        const [visited,setVisited]=useState(false);
        const handelVisited=()=>{
            // toggle kora holo ! sign use kore
            setVisited(!visited)
        }
        console.log(handelVisitedCountry)

    return (
        <div className={`countryStyle ${visited && 'visited'}`}>
            <img src={flags.png} alt="" />
            <div>
            <h4 style={{color:visited?'purple':'white'}} >Country Name:  {name.common}  </h4>
            <h5>Country Capital: {capital} </h5>
            <h6>Country region: {region} </h6>
            <p>Country population: {population} </p>
            <p><small>Area: {area} </small></p>
            <p>Nagtive Language: {languages?.eng} </p>
            <p>Code: {cca3} </p>
            {/* for flags */}
            <button onClick={()=>{handelVisitedFlags(country.flags.png)}}>Add Flag</button>
            {/*  btn e permeter pathate hole arrowfunction er moto kore felte hobe*/}
            <button onClick={()=>{handelVisitedCountry(country)}}>Mark vsited</button>
            {/* visited ki na ta check kora hocche same page e */}
            <button onClick={handelVisited} >{visited?'visited':'Not visited'}</button>
           <p> {visited ? 'I have visited this country':'i want to visit'}</p> 
            </div>
            <hr />
            {/* props Drilling */}
            <CountryDetail
             country={country}
             handelVisitedCountry={handelVisitedCountry}
             handelVisitedFlags={handelVisitedFlags}


            ></CountryDetail>
        </div>
    );
};

export default Country;