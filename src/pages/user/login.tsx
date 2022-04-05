import React from 'react'
import * as yup  from 'yup';
import {yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { signIn } from '../../api/user'
import { UserType } from '../../types/products'
// import { UserTypes } from '../../types/UserType'

type Props = {}
const fromSchema = yup.object().shape({
  email: yup.string()
    .required("Email is required"),
  password: yup.string()
    .required("Password is required")
    .min(6, 'Password length should be at least 4 characters'),

})
const validation = {resolver: yupResolver(fromSchema)}
type FormInputs = {
  email: string,
  password: string | number
}

const Login = (props: Props) => {
  const {register, handleSubmit, formState} = useForm<FormInputs>(validation);
  const { errors } = formState
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = async (data:UserType) => {
    console.log(data);

      try {
        const {data: user} = await signIn(data);
          console.log("data"+data);
          alert("Đăng nhạp thành công");
          localStorage.setItem("user", JSON.stringify(user))
          navigate('/');

      } catch (error) {
        alert("Đăng nhập thất bại");
      }

  }
  return (
    <div>
        <div className="login-form-container">
        <form  id="formSignIn" onSubmit={handleSubmit(onSubmit)}>
            <h3>Sign In</h3>
            <span>User Name</span>
            <input type="email"  {...register('email', {required:true})} id="email" className="box" placeholder="Enter your email" />
            <div className="red">{errors.email?.message}</div>
            <span>Password</span>
            <input type="password" {...register('password', {required:true})} id="password" className="box" placeholder="Enter your password" />
            <div className="red">{errors.password?.message}</div>
            <div className="checkbox">
            <input type="checkbox"  id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
            </div>
            <input type="submit" defaultValue="Sign In" className="btn" />
            <p>Forget password ? <NavLink to="">Click here</NavLink></p>
            <p>Don't have an account ? <NavLink to="/register">Create one</NavLink></p>
        </form>
        </div>
    </div>
        

  )
}

export default Login