// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom'

// ! Pages
import HelperList from './pages/HelpersList/HelpersList';
import HelperDetails from './pages/HelperDetails/HelperDetails';
import HelperCreate from './pages/HelperCreate/HelperCreate';
import HelperUpdate from './pages/HelperUpdate/HelperUpdate';

const App = () => {
  return(
    <>
      <h1>Hello world!</h1>

      <Routes>
        <Route path="/helpers" element={<HelperList />} />
        <Route path="/helpers/:helperId" element={<HelperDetails />} />
        <Route path="/helpers/new" element={<HelperCreate />} />
        <Route path="/helpers/:helperId/edit" element={<HelperUpdate />} />
      </Routes>
    </>
  ) };
export default App;
