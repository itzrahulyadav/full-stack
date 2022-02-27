import './App.css';
import React, { useEffect } from 'react';

function App() {
  const [data,setData] = React.useState(null);

   useEffect(()=>{
     fetch('/api')
     .then(res => res.json())
     .then(d => {
       setData(d.message);
     })
   },[]);
  return (
    <div className="App">
      <div><h1>{data}</h1></div>
    </div>
  );
}

export default App;
