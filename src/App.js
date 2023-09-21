
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Component/SignUp/SignUp.js';
import SingIn from './Component/SignIn/SingIn.js';
import HomeComponent from './Component/HomeComponent/HomeComponent.js';
import InvalidComponent from './Component/InvalidComponent/InvalidComponent.js';
import LandingComponent from './Component/LandingComponent/LandingComponent.js';
import PrivateComponent from './Component/PrivateComponent/PrivateComponent.js';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <LandingComponent />
        <Routes className="">

          <Route element={<PrivateComponent />}>
            {/* <Route path="/" element={<SingIn />}></Route> */}
            <Route path='home' element={<HomeComponent />}></Route>
            <Route path='invalid' element={<InvalidComponent />}></Route>
          </Route>

          <Route path="signin" element={<SingIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
