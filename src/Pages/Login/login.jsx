import React from 'react'
import './logIn.css';
import { Google } from 'react-bootstrap-icons';
import 'firebase/firestore'
import 'firebase/auth'
import GoogleButton from "react-google-button"
import { Link } from 'react-router-dom';
function login() {
    function signInWithGoogle(){
        const signInWithGoogle = () =>{
            //const provider = new firebase;
        }
    }
  return (
    <div className='container d-flex justify-content-center loginBox'>
        <div className='my-auto'>
    <form className=''>
    <h3>Sign In</h3>
    <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>
    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>
    <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div>
    <button type="submit" className="btn btn-primary btn-block w-100">Submit</button>
    <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
    </p>
</form>
{/* <button className="btn btn-primary btn-block w-100 mt-2" onClick={signInWithGoogle}><Google className='m-1'/>Sign in With Google</button> */}
<GoogleButton className="g-btn mt-3" type="dark"/>
<div className="mt-2"><Link to="/SignUp" className='btn btn-primary w-100'>Sign Up</Link></div>

</div></div>
  )
}

export default login