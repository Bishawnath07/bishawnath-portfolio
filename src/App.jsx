import { Route, Routes } from 'react-router-dom'
import './App.css'
import Slideber from './pages/global/Slideber'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <div>
        <Slideber>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/home' element= {<Home/>}/>
                <Route path='/about' element= {<About/>}/>
                <Route path='/portfolio' element= {<Portfolio/>}/>
                <Route path='/contact' element= {<Contact/>}/>
            </Routes>
        </Slideber>
    </div>
  )   
}

export default App
