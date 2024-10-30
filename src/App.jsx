import { createContext, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//!--- Components
import NavBar from './components/NavBar/NavBar'

//!--- Pages 
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Landing from './pages/Landing/Landing'
import Dashboard from './pages/Dashboard/Dashboard'

import JobList from './pages/JobList/JobList';
import JobCreate from './pages/JobCreate/JobCreate';
import JobDetails from './pages/JobDetails/JobDetails';
import JobUpdate from './pages/JobUpdate/JobUpdate'

import HelperList from './pages/HelpersList/HelpersList';
import HelperDetails from './pages/HelperDetails/HelperDetails';
import HelperCreate from './pages/HelperCreate/HelperCreate';
import HelperUpdate from './pages/HelperUpdate/HelperUpdate';

import { getUser, removeToken } from './utils/auth'

const App = () => {
  const [user, setUser] = useState(getUser())

  const navigate = useNavigate()
  
  const handleSignOut = () => {
    removeToken()
    setUser(null)
    navigate('/signin')
  }

  return(
    <>
      <NavBar user={user} handleSignOut={handleSignOut}/>
      <Routes>
        { user 
          ? (
            <>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path='/jobs' element={<JobList/>} />
              <Route path='/jobs/new' element={<JobCreate />} />
              <Route path='/jobs/:jobId' element={<JobDetails />} />
              <Route path='/jobs/:jobId/Updates/:jobId' element={<JobUpdate/>} />
              <Route path="/helpers" element={<HelperList />} />
              <Route path="/helpers/:helperId" element={<HelperDetails user={user} />} />
              <Route path="/helpers/new" element={<HelperCreate />} />
              <Route path="/helpers/:helperId/edit" element={<HelperUpdate />} />
            </>
          
          )
          : (
            <>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<SignUp setUser={setUser} />} />
              <Route path="/signin" element={<SignIn setUser={setUser} />} />
            </>
          )
        }
      </Routes>
    </>
  ) };

export default App;
