import React from 'react';
import {useSearchParams} from 'react-router-dom'

function Filter() {
    const[searchParams,setSearchParams]=useSearchParams();
    const age= searchParams.get('age');
    const city= searchParams.get('city');
  return (
    <div style={{textAlign:'center'}}>
        
      <h1>Filter page</h1>
      <h3>Age is : {age}</h3>
      <h3>city is: {city}</h3>
      <button onClick={()=>setSearchParams({age:30,city:"Noida"})}>convert</button>
     
    </div>
  )
}

export default Filter
