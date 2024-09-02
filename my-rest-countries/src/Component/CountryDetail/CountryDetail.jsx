import CountryData from "../CountryData/CountryData";

const CountryDetail = ({country,handelVisitedCountry,handelVisitedFlags}) => {
    // const {country,handelVisitedCountry,handelVisitedFlags}=props
    return (
        <div>
            <h4>Country details</h4>
            <hr />
            <CountryData
            
            country={country}
            handelVisitedCountry={handelVisitedCountry}
            handelVisitedFlags={handelVisitedFlags}
            
            
            ></CountryData>
            {/* <CountryData  
            {...props}
            ></CountryData> */}
        </div>
    );
};

export default CountryDetail;