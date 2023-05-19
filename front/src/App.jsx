import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';

function App() {
 
  return (
    <>
      <div className="App">
      {/* <NavBar/> */}
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
