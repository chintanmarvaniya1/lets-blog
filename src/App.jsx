import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from "./services/auth"
import {login,logout} from './store/userSlice';
import Header from './components/Headers/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> setloading(false))
  },[])

 
  
  return !loading ? (
    <h1 >
      <Header/>
      <main >
        <Outlet />
        </main>
    </h1>
  ) : null
}

export default App
