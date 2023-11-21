import { useEffect, useState } from 'react'
import './App.css'
import Country from './Component/Country/Country';
import Calculate from './Component/Country/Calculate/Calculate';

function App() {
  const [countries, setcountries] = useState([]);
  useEffect(()=>{
    const fetching= (async()=>{
      let res = await fetch('https://restcountries.com/v3.1/all')
      let data= await res.json()
      setcountries(data)
    })()
  }, []);

  const [count, setCount] = useState([]);
  const pushMe = (e)=>{
    const CountCountry= [...count, e];
    setCount(CountCountry);
  };
  
  return (
    <>
      <Calculate count={count}></Calculate>
      {countries.map(countryData => <Country pushMe={pushMe} country={countryData}/>)}
    </>
  )
}

export default App
