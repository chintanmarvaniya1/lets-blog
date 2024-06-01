import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../services/auth';
import { useNavigate } from "react-router-dom";
import { logout } from '../../store/userSlice';

function LogoutBtn() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler=()=>{
        authService.userLogout().then(()=>{
            dispatch(logout())
            navigate('/')
        })
    }
  return (
    <button onClick={logoutHandler}className='font-quicksand inline-block px-6 py-2 font-bold text-xl duration-200 text-custom-primary-dark hover:text-custom-secondary-dark  rounded-md'>
        Logout
    </button>
  )
}

export default LogoutBtn