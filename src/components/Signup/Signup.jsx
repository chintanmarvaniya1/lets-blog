import React, { useState } from 'react'
import authService from '../../services/auth.js'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../store/userSlice'
import Button from '../Button'
import Input from '../Input'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

export function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const createUser = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
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
                        Sign up to create account
                    </h2>
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                    <form onSubmit={handleSubmit(createUser)} className='mt-8'>
                        <div className='space-y-5'>
                            <Input
                                placeholder="Enter Full Name"
                                {...register("name", {
                                    required: true,
                                })}
                            />
                            <Input
                                placeholder="Enter Email Address"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            "Email address must be a valid address",
                                    }
                                })}
                            />
                            <Input
                                type="password"
                                placeholder="Enter Password"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                            <p className="mt-2 text-center text-base text-black/60">
                                Already have an account?&nbsp;
                                <Link
                                    to="/login"
                                    className="font-medium text-primary transition-all duration-200 hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        // <div className="flex items-center justify-center">
        //     <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        //         <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        //         <p className="mt-2 text-center text-base text-black/60">
        //             Already have an account?&nbsp;
        //             <Link
        //                 to="/login"
        //                 className="font-medium text-primary transition-all duration-200 hover:underline"
        //             >
        //                 Sign In
        //             </Link>
        //         </p>
        //         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        //         <form onSubmit={handleSubmit(createUser)}>
        //             <div className='space-y-5'>
        //                 <Input
        //                     label="Full Name: "
        //                     placeholder="Enter your full name"
        //                     {...register("name", {
        //                         required: true,
        //                     })}
        //                 />
        //                 <Input
        //                 label="Email: "
        //                 placeholder="Enter your email"
        //                 type="email"
        //                 {...register("email", {
        //                     required: true,
        //                     validate: {
        //                         matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        //                         "Email address must be a valid address",
        //                     }
        //                 })}
        //                 />
        //                 <Input
        //                     label="Password: "
        //                     type="password"
        //                     placeholder="Enter your password"
        //                     {...register("password", {
        //                         required: true,
        //                     })}
        //                 />
        //                 <Button type="submit" className="w-full">
        //                     Create Account
        //                 </Button>
        //             </div>

        //         </form>
        //     </div>
        // </div>
    )

}
