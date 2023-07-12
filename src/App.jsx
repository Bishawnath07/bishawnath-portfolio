import { Route, Routes } from 'react-router-dom'
import './App.css'
import Slideber from './pages/global/Slideber'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import ProjectDetailsOne from './components/Projects/ProjectDetails/ProjectDetailsOne'
import ProjectDetailsSecond from './components/Projects/ProjectDetails/ProjectDetailsSecond'
import ProjectDetailsThird from './components/Projects/ProjectDetails/ProjectDetailsThird'
import { useEffect, useState } from 'react'
import Loader from './Loader/Loader'

function App() {
  const [isLoading , setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    } , 2500)
  })
  return (
    <div>
        {isLoading ? <Loader></Loader> : <Slideber>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/home' element= {<Home/>}/>
                <Route path='/about' element= {<About/>}/>
                <Route path='/portfolio' element= {<Portfolio/>}/>
                <Route path='/contact' element= {<Contact/>}/>
                <Route path='/ProjectDetailsOne' element= {<ProjectDetailsOne/>}/>
                <Route path='/ProjectDetailsSecond' element= {<ProjectDetailsSecond/>}/>
                <Route path='/ProjectDetailsThird' element= {<ProjectDetailsThird/>}/>
            </Routes>
        </Slideber>}
    </div>
  )   
}

export default App
