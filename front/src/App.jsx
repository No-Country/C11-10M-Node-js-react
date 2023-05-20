import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import BuildingForm from './components/BuildingForm/BuildingForm';
import WorkerForm from './components/WorkerForm/WorkerForm';
import WageForm from './components/WageForm/WageForm';
import Downloads from './components/Downloads/Downloads';

function App() {
 
  return (
    <>
      <div>
        <NavBar/>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/logIn' element={<LogIn/>}/>
        <Route path='/buildingForm' element={<BuildingForm/>}/>
        <Route path='/workerForm' element={<WorkerForm/>}/>
        <Route path='/wageForm' element={<WageForm/>}/>
        <Route path='/downloads' element={<Downloads/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
