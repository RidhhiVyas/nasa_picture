import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const App = () => {

  const [apod, setApod] = useState({});

  useEffect(() => {
    
    axios.get('https://api.nasa.gov/planetary/apod?api_key=2CdSP0Zjs8cdbWQX6ucwX3eqYfjzJMOuVibjkne2')
      .then(response => {
        console.log(response.data)
        setApod(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (

    <div className="App">
    <h1>Astronomy Picture of the Day</h1>
    <h2>{apod.title}</h2>
    <h2>{apod.date}</h2>
    <img src={apod.url} alt={apod.title} />
    <p>{apod.explanation}</p>
  </div>
    
    















  )
}

export default App