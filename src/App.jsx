import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import data from './data'
import {Card,CardBody} from 'reactstrap'
function App() {
  const [people, setpeople] = useState(data)
  const clearAll = () =>{
    setpeople([])
  }
  return (
    
      <div>
        <h1>Birthday List</h1> 
<main>
          <section className='container'>
            <h2>BirthDay 5 person</h2>
            <List people = {people}/>
            <button onClick={clearAll}>Clear All</button>
          </section>
        </main>
      </div>
    
  )
}

export default App
