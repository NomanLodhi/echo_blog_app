import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Userhome from './components/Userhome';

function App() {
  return (
    <>
    <Routes>
      <Route path='signup' element={<SignUp/>}></Route>
      <Route path='signin' element={<SignIn/>}></Route>
      <Route path='user' element={<Userhome/>}></Route>
    </Routes>
    </>
  );
}

export default App;
