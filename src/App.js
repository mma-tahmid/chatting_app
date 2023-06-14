
import './App.css';
import Login from './Pages/Login';

import Registration from './Pages/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (

    <>

      {/* <Registration> </Registration>
      <Login> </Login> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/home" element={<Home />}> </Route>

        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
