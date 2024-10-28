import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


//!--- Pages and Components
import NavBar from './components/NavBar/NavBar'

//!--- Pages 
import JobIndex from './pages/JobIndex/JobIndex';
import JobForm from './pages/JobForm/JobForm';
import JobShow from './pages/JobIndex/JobIndex';




const App = () => {
  return(
    <>
      <NavBar/>
      <h1>Hello world!</h1>

      <Routes>
        <Route path='/jobs' element={<JobIndex/>} />
        <Route path='/jobs/new' element={<JobForm />} />
        <Route path='/jobs/:_id' element={<JobShow />} />

      </Routes>
    </>
  ) };



export default App;
