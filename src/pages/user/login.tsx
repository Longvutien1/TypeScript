import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { signIn } from '../../api/user'
import { UserTypes } from '../../types/UserType'

type Props = {}

type FormInputs = {
  email: string,
  password: string
}

const Login = (props: Props) => {
  const {register, handleSubmit, formState} = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = async (user:UserTypes) => {
    console.log(user);

      try {
        const {data} = await signIn(user);
          console.log("data"+data);
          alert("Đăng nhạp thành công");
          localStorage.setItem("user", JSON.stringify(data))
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
            <span>Password</span>
            <input type="password" {...register('password', {required:true})} id="password" className="box" placeholder="Enter your password" />
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