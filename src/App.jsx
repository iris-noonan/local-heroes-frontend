import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import styles from './App.module.scss'

//!--- Components
import SiteHeader from './components/SiteHeader/SiteHeader';


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

import NotFound from './pages/NotFound/NotFound'

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
    <main>
      <SiteHeader user={user} handleSignOut={handleSignOut}/>
      <div className={styles.contents}>
        <Routes>
          { user 
            ? (
              <>
                <Route path="/" element={<Dashboard user={user} />} />
                <Route path="/jobs" element={<JobList/>} />
                <Route path="/jobs/new" element={<JobCreate />} />
                <Route path="/jobs/:jobId" element={<JobDetails user={user} />} />
                <Route path="/jobs/:jobId/edit" element={<JobUpdate/>} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  ) };

export default App;
