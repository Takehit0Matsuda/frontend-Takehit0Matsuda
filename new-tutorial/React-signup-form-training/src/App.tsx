import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"
import { validationSchema } from './utils/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({mode: "onChange", resolver: zodResolver(validationSchema)})

  const onSubmit = (data: SignupForm) => {
    console.log(data);
  }

  return (
  <div className="form-container">
    <h1>Signup</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Username">Username</label>
      <input id="name" type="text" {...register("name")}/>
      <p>{errors.name?.message as React.ReactNode}</p>
      
      <label htmlFor="Email">Email</label>
      <input id="email" type="email" {...register("email")}/>
      <p>{errors.email?.message as React.ReactNode}</p>
      <label htmlFor="Password">Password</label>
      <input id="password" type="password" {...register("password")}/>
      <p>{errors.password?.message as React.ReactNode}</p>


      <button type='submit'>Submit</button>
    </form>
  </div>
  )
}

export default App
