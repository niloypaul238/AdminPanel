import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate()
    const [show,setShow] = useState('')
    const [loginUser,setLoginUser] = useState({
        username:"",
        password:""
    })
    const [typeCheck,setTypeCheck] = useState('password')
    const eyeSHowHide = () => {
        typeCheck == "password" ? setTypeCheck('text') : setTypeCheck('password')
    }
    const changeAble = (e) =>{
        const copy = {...loginUser}
        const targe = e.target.name;
        const val = e.target.value;
        copy[targe] = val;
        setLoginUser(copy)
    } 

    const submited = () => {
        setShow('')
        if(loginUser.username === "stremDoing123" && loginUser.password === "1234"){
            navigate('/Dashbord')
        }else if(loginUser.username == "" || loginUser.password == ""){
            setShow('Fill up all input Filed !')
        }else{
            setShow('incorrect information !')
            
        }
    }
    return (
        <div>
            <div class="bg-gray-50">
                <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <div class="max-w-120 w-full">
                        <div class="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <div className='flex justify-center items-center'>
                                <img src="Rectangle 432.png"  alt="" />
                            </div>
                            <h1 class="text-slate-900 text-center text-3xl font-semibold">Sign in</h1>
                            <form  class="mt-12 space-y-6">
                                <p className='text-red-600 text-center'>{show}</p>
                                <div>
                                    <label class="text-slate-900 text-sm font-medium mb-2 block">User name</label>
                                    <div class="relative flex items-center">
                                        <input name="username" onChange={changeAble} value={loginUser.username} type="text" required class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter user name" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label class="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                                    <div class="relative flex items-center">
                                        <input name="password" onChange={changeAble} type={typeCheck} value={loginUser.password} required class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
                                        {
                                            typeCheck == "password" ? <Eye onClick={eyeSHowHide} class="w-4 h-4 absolute right-4 cursor-pointer" /> : <EyeOff onClick={eyeSHowHide} class="w-4 h-4 absolute right-4 cursor-pointer" />
                                        }
                                    </div>
                                </div>
                                <div class="flex flex-wrap items-center justify-between gap-4">
                                    <div class="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                                        <label for="remember-me" class="ml-3 block text-sm text-slate-900">
                                            Remember me
                                        </label>
                                    </div>
                                    <div class="text-sm">
                                        <a href="jajvascript:void(0);" class="text-blue-600 hover:underline font-semibold">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div class="mt-12!">
                                    <button onClick={submited} type="button" class="w-full  text-[15px] font-medium tracking-wide rounded-md text-white bg-linear-to-r from-indigo-500/90 to-pink-400 px-12 py-2 cursor-pointer">
                                        Sign in
                                    </button>
                                </div>
                                <p class="text-slate-900 text-sm mt-6! text-center">Don't have an account? <a href="javascript:void(0);" class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;