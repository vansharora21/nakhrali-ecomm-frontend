import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('Sign Up');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#F5F5DC]'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-[#F5F5DC]' />
            </div>
            {currentState === 'Login' ? '' : <input className='w-full px-3 py-2 border border-[#F5F5DC]/20 rounded-md bg-[#252525] text-[#F5F5DC] focus:border-primary outline-none transition-colors' placeholder='Name' required type="text" />}
            <input className='w-full px-3 py-2 border border-[#F5F5DC]/20 rounded-md bg-[#252525] text-[#F5F5DC] focus:border-primary outline-none transition-colors' placeholder='Email' required type="email" />
            <input className='w-full px-3 py-2 border border-[#F5F5DC]/20 rounded-md bg-[#252525] text-[#F5F5DC] focus:border-primary outline-none transition-colors' placeholder='Password' required type="password" />
            <div className='w-full flex justify-between text-sm mt-[-8px] text-[#F5F5DC]/70'>
                <p className='cursor-pointer hover:text-primary transition-colors'>Forgot your password?</p>
                {
                    currentState === 'Login'
                        ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:text-primary transition-colors'>Create account</p>
                        : <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:text-primary transition-colors'>Login Here</p>
                }
            </div>
            <button className='bg-primary text-white font-bold px-8 py-3 mt-4 rounded hover:bg-orange-700 transition-colors rounded-lg'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
        </form>
    )
}

export default Login
