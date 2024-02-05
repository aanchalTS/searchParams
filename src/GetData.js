import React,{useState} from 'react'

function GetData() {
    const [data,getData]=useState();
    const[print,setPrint]=useState(false);
    const[status,setStatus]= useState(true);
    function getSetData(e){
     getData(e.target.value);
     setPrint(false);
     
    }
    
  return (
    <div>
      <h1>Input value</h1>
      <input type='text' onChange={getSetData}/>
      <h3>The value when we type in input is: {data}</h3>
      <input type='text' onChange={getSetData}/>
      <button type='button' onClick={()=>setPrint(true)}>Enter</button>
     {
        print?
        <h3>{data}</h3>:null
     }
     <button onClick={()=>setStatus(!status)}>Toggle</button>

{
    status?<h1>Hllo Aanchal</h1>:null
}

    </div>
  )
}

export default GetData
