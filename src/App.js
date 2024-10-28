import './App.css';
import LoginPage from './components/LoginPage.js';
import SigninPage from './components/SigninPage.js';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth.js';
import PageNotFound from './components/PageNotFound.js';
import ServerDown from './components/ServerDown.js';
import Home from './components/Home.js';




function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/serverdown' element={<ServerDown />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/*' element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
