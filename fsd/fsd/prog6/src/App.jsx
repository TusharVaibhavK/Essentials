import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')

  const [users,setUsers] = useState({})

  const handleSubmit =(e)=>{
    if(name==='admin'&&email==="admin@gmail.com") {
        alert("the user is an admin!!!")
    }else{
      alert("the user is not an admin!!!")
    }
  } 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
