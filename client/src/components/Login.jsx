import React, { useContext, useState } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const Login = ({setIsLogin}) => {

  const {setEmail, setPassword, login} = useContext(GeneralContext);
  const [userType, setUserType] = useState('customer'); // default to customer

  const handleLogin = async (e) =>{
    e.preventDefault();
    await login(userType); // pass userType to login
  }
  return (
    <form className="authForm">
        <h2>Login</h2>
        <div className="form-floating mb-3 authFormInputs">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                                                                  onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
        </div>
            <div className="form-floating mb-3 authFormInputs">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                                                                  onChange={(e) => setPassword(e.target.value)} /> 
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 authFormInputs">
            <select
                className="form-select"
                id="userTypeSelect"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
            >
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="flight-operator">Flight Operator</option>
            </select>
            <label htmlFor="userTypeSelect">User Type</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign in</button>

        <p>Not registered? <span onClick={()=> setIsLogin(false)}>Register</span></p>
    </form>
  )
}
export default Login