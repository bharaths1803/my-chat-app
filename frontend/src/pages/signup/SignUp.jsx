import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

export const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const {signup, loading} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='font-semibold text-3xl text-center text-gray-300'>
          Signup
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Full Name 
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='text' placeholder='Bharath' value={inputs.fullName} onChange={(e) => setInputs({...inputs,fullName: e.target.value})}/>
          </div>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Username
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='text' placeholder='bharath' value={inputs.username} onChange={(e) => setInputs({...inputs,username: e.target.value})}/>
          </div>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Password
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='password' placeholder='Enter Password' value={inputs.password} onChange={(e) => setInputs({...inputs,password: e.target.value})}/>
          </div>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Confirm Password
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='password' placeholder='Confirm Password' value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}/>
          </div>
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender}/>
          <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2' onClick={handleSubmit} disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}
