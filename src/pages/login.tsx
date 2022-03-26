import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
        <div className="login-form-container">
        <form  id="formSignIn">
            <h3>Sign In</h3>
            <span>User Name</span>
            <input type="email" name="" id="email" className="box" placeholder="Enter your email" />
            <span>Password</span>
            <input type="password" name="" id="password" className="box" placeholder="Enter your password" />
            <div className="checkbox">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
            </div>
            <input type="submit" defaultValue="Sign In" className="btn" />
            <p>Forget password ? <NavLink to="">Click here</NavLink></p>
            <p>Don't have an account ? <a href="sign_up">Create one</a></p>
        </form>
        </div>
    </div>
        

  )
}

export default Login