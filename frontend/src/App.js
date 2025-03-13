import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Userhome from './components/user/Userhome';
import Editprofile from './components/user/Editprofile';
import Admindashboard from './components/Admin/Admindashboard';
import Adminhome from './components/Admin/Adminhome';


function App() {
  return (
    <>
    <Routes>
      <Route path='signup' element={<SignUp/>}></Route>
      <Route path='signin' element={<SignIn/>}></Route>
      <Route path='user' element={<Userhome allowedRole={'reader'}/>}>
      </Route>

      <Route path='edit' element={<Editprofile/>}></Route>
      <Route path='admin' element={<Admindashboard allowedRole={'admin'}/>}>
       <Route path='admindashboard' element={<Adminhome/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
