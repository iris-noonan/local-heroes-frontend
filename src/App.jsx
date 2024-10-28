import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
// import NavBar from './components/NavBar/NavBar'

// Page Components
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Landing from './pages/Landing/Landing'
import Dashboard from './pages/Dashboard/Dashboard'

const App = () => {
  return(
    <>
      {/* <h1>Hello world!</h1>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
       */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  ) };
export default App;
