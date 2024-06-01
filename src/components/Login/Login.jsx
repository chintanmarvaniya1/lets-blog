import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../store/userSlice'
import Button from '../Button'
import Input from '../Input'
import { useDispatch } from 'react-redux'
import authService from '../../services/auth'
import { useForm } from 'react-hook-form'

export function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const userLogin = async (data) => {
        setError('')        
        try {
            const session = await authService.userLogin(data)
            if (session) {
                const userData = await authService.getCurrentUser()                
                if (userData) {
                    dispatch(login(userData))
                }
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='bg-custom-primary-dark'>
            <div className="flex justify-center items-center h-screen ">
                <div className=" flex flex-col bg-white shadow-md rounded-md p-6">
                    <h2 className='text-center text-custom-secondary-dark text-3xl font-bold leading-tight'>
                        Sign in to your account
                    </h2>

                    {
                        error && <p className='text-red-500 text-center'>{error}</p>
                    }
                    <form onSubmit={handleSubmit(userLogin)} className='mt-8'>
                        <div className='space-y-5'>
                            <Input
                                placeholder='Enter Email Address'
                                type='email'
                                {...register('email', {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(value) || "Enter Valid Email Address"
                                    }
                                })}
                            />
                            <Input
                                placeholder="Enter the Password"
                                type="password"
                                {...register('password', {
                                    required: true
                                })} />
                            <Button>Sign in</Button>
                            <p className='mt-2 text-center text-2xl text-base text-black/60'>
                                Don&apos;t have any account?&nbsp;
                                <Link
                                    to='/signup'
                                    className='font-medium text-primary transition-all duration-200 hover:underline'>
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

