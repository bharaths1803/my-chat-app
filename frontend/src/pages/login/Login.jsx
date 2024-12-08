import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login, loading} = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='font-semibold text-3xl text-center text-gray-300'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Username
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='text' placeholder='Enter a username' value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Password
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2' disabled = {loading}>
              {loading? <span className='loading loading-spinner'></span>: "Login"}
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}