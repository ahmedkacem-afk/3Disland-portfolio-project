
import {Route , BrowserRouter as Router,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home , About , Projects , Contact} from './pages'
import CTA from './components/CTA'
const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
        <Router>
            <Navbar/>
            <Routes>
            {/* render the element  Home which is a page */}
                <Route path='/' element={<Home/>}/> 
                {/* render the element  About which is a page */}
                <Route path='/about' element={<About/>}/>
                    {/* same with the Projects page */}
                <Route path='/projects' element={<Projects/>}/>
                     {/* same with contacts page */}
                <Route path='/contact' element={<Contact/>}/>
                

            </Routes>
        </Router>

    </main>
  )
}

export default App