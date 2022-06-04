import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Register from "./components/Register";
import Activate from "./components/Activate";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import CheckYourEmail from "./components/CheckYourEmail";
import CheckForPassword from './components/CheckForPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/check' exact element={<CheckYourEmail />} />
          <Route path='/user/activate/:activationToken' exact element={<Activate />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/forgotpassword' exact element={<ForgotPassword />} />
          <Route path='/checkforpassword' exact element={<CheckForPassword />} />
          <Route path='/user/reset/:accesstoken' exact element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
