import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Userhome from './components/user/Userhome';
import Editprofile from './components/user/Editprofile';
import Admindashboard from './components/Admin/Admindashboard';
import Adminusers from './components/Admin/Adminusers';
import Adminuseredit from './components/Admin/Adminuseredit';
import Author from './components/Author/Author';
import Authorreq from './components/user/Authorreq';
import Authoredit from './components/Author/Authoredit';
import Adminauthor from './components/Admin/Adminauthor';
import Adminauthoredit from './components/Admin/Adminauthoredit';


function App() {
  return (
    <>
    <Routes>
      <Route path='signup' element={<SignUp/>}></Route>
      <Route path='signin' element={<SignIn/>}></Route>
      <Route path='user' element={<Userhome allowedRole={'reader'}/>}>
      </Route>

      
      <Route path='edit' element={<Editprofile allowedRole={'reader'}/>}></Route>
      <Route path='author-request' element={<Authorreq allowedRole={'reader'}/>}></Route>

    {/* Admin Routes */}
      <Route path='admin' element={<Admindashboard allowedRole={'admin'}/>}>
       <Route path='adminusers' element={<Adminusers/>}></Route>
       <Route path='adminauthors' element={<Adminauthor/>}></Route>
       <Route path='adminusers/:userId' element={<Adminuseredit/>}></Route>
       <Route path='adminauthors/:authorId' element={<Adminauthoredit/>}></Route>
      </Route>

    {/* Author Routes */}
      <Route path='author' element={<Author AllowedRole={'author'}/>}>
      <Route path='authoredit' element={<Authoredit/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
