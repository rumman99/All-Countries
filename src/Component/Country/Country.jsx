

const Country = (props) => {
    const border={border: '3px solid white', padding: '10px', margin: '15px'}
    const country= props.country;
    const pushMe= props.pushMe;
    return (
        <div style={border}>
            <img src={country.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population}</p>
            <p>Area: {country.area}</p>
            <button onClick={()=>pushMe(props.country)}>Push Me</button>
        </div>
    );
};

export default Country;