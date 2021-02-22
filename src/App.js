import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const name=[
    {name:'avro',job:'student'},
    {name:'riddhi',job:'college-student'},
    {name:'suborno',job:'footballer'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Counter></Counter>
          {
            name.map(product=><Person name={product}></Person>)
          }
        </div>
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount]=useState(0)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>count==0?setCount(0):setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}



function Person(data){
  const {name,job}=data.name

  const personStyle={
    border:'2px solid red',
    margin:'2px',
    width:'300px',
    height:'300px',
    
  }
  return (<div style={personStyle}>
    <h1 style={{color:'red',backgroundColor:'yellow'}}>{name}</h1>
    <h3>{job}</h3>
    <button>Bye Now</button>
  </div>
  )
}

export default App;
