import './App.css'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { SignUp } from './pages/signup/SignUp'
import {Navigate, Route, Routes} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import { useAuthAtom } from './store/atoms/AuthAtom.js'

function App() {
  const {authUser} = useAuthAtom();

  return (
  <div className='p-4 h-screen flex justify-center items-center'>
    <Routes>
      <Route path='/' element = {authUser ? <Home /> : <Navigate to="/login"/>} />
      <Route path='/login' element = {authUser ? <Navigate to="/"/> : <Login />} />
      <Route path='/signup' element = {authUser ? <Navigate to="/"/> : <SignUp />} />
    </Routes>
    <Toaster />
  </div>
  );
}

export default App