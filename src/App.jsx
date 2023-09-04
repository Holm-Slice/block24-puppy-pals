
import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'



function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);

  // function handleClick()
  //   // some logic here

      
  return (
    <>
    <div className="App">
      {puppies.map((puppy) => {
        return (  
          <p 
          onClick = {()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}
          </p>
        );
      })}

      {featPupId && (
        <div className='puppy-info'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li className='bullet'>Age: {featuredPup.age}</li>
            <li className='bullet'>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
 
    </div>
    </>
  )
}


export default App
