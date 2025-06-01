import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState] =useState('Sign Up');
  const onSubmitHandler=async(event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10' >
        <p className='prata-regular text-3xl'>{currentState} </p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState==='Login'?'':<input className='border px-3 py-1 rounded-[2px]  border-gray-600' type="text" placeholder='Name'  required/>}
      <input className='border px-3 py-1 rounded-[2px]  border-gray-600' type="email" placeholder='Email' required />
      <input className='border px-3 py-1 rounded-[2px]  border-gray-600' type="text" placeholder='Password' required />
      <div className='text-sm flex w-full justify-between mt-[-8px] '>
        <p className='cursor-pointer'>Forget your password?</p>
        {
          currentState==='Login'?
          <p onClick={()=>setCurrentState('Sign Up') } className='cursor-pointer' >Create Account</p>
          :<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black font-light text-white px-8 py-2 mt-4 rounded-[3px] text-sm'>{currentState==='Login'?'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login
