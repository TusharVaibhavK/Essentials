import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter,Routes, Route, Link} from 'react-router-dom'
import Pag1 from './pag1'
import Page2 from './Page2'
import Page3 from './Page3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to='/page2'>page2</Link>
          </li>
          <li>
            <Link to='/page3'>page3</Link>
          </li>
        </ul>
      </nav>

    <Routes>
      <Route path='/' element={<h1>this is the home page</h1>}/>
      <Route path='/page1' element={<Pag1/>}/>
      <Route path='/page2' element={<Page2/>}/>
      <Route path='/page3' element={<Page3/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
