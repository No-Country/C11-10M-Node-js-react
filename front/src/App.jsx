import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import "/src/index.css"
function App() {
 
  return (
    <>
      <div>
        <NavBar/>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        {/* <Route path='/createForm' element={<CreateForm/>}/> */}
      </Routes>
      </div>
    </>
  )
}

export default App
