
const CountryData = ({country,handelVisitedCountry,handelVisitedFlags}) => {
    return (
        <div>
            <p><small>Country Data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;