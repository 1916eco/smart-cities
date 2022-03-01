import React from 'react'
import './SignUp.css';
function SignUp() {
  return (
    <div className='container d-flex justify-content-center loginBox'>
        <div className='my-auto'>
    <form className=''>
    <h3>Sign Up</h3>
    <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>
    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>
    <button type="submit" className="btn btn-primary btn-block w-100 mt-2">Sign Up</button>
</form>
</div></div>
  )
}

export default SignUp