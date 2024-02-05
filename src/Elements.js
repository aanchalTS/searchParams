import React,{useState} from 'react'

function Elements() {
    const data = ['Aanchal', 'Janvi', 'Bhumika'];
    const [status, setStatus] = useState('success');
  return (
    <div>
       {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items to display.</p>
      )}
      {status === 'success' ? (
        <p>Status successfully done!</p>
      ) : (
        <p>Something went wrong. Please try again.</p>
      )}
    </div>
  )
}

export default Elements
