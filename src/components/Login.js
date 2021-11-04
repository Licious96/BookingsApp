import { Link, Redirect } from "react-router-dom";
import logo from '../assets/logo.png';
import { useHistory } from "react-router";
import { useState } from "react";


const Login = () => {

    let history = useHistory();
    let [alert, setAlert] = useState([])

    const loginFunc = async () => {
        const formData = new FormData()
    
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
    
        formData.append("username", username)
        formData.append("password", password)
    
        let res = await fetch('https://vbooking.stokoza.co.za/backend/login.php', 
        {
          method: 'POST',
          body: formData
        })
          
        let data = await res.json();
          
        if (!isNaN(data)){
          sessionStorage.setItem('user_id', data)
          history.push('/home')
        }else if(data === 'Your username is not not registered') {
          setAlert(data)
        }else if (data === 'wrong password'){
          setAlert('Wrong password')
        }
    }

    if (sessionStorage.getItem('user_id')) {
        return <Redirect to='/home' />
    }

    return (
        <main className="be-splash-screen">
            <div className="be-wrapper be-login">
                <div className="be-content">
                <div className="main-content container-fluid">
                    <div className="splash-container">
                    <div className="card card-border-color card-border-color-primary">
                        <div className="card-header"><img className="logo-img" src={logo} alt="logo" width="102" height="27" /><span className="splash-description">Please enter your user information.</span></div>
                        <div className="card-body">
                            <div className="form-group text-center">
                                <div dangerouslySetInnerHTML={{__html: alert}} className="invalid-feedback"></div>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="username" type="text" placeholder="Staff number or email" defaultValue="202012345" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="password" type="password" placeholder="Password" defaultValue="12345" />
                            </div>
                            <div className="form-group row login-tools">
                                <div className="col-6 login-remember">
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" type="checkbox" id="checkbox1" />
                                    <label className="custom-control-label" htmlFor="checkbox1">Remember Me</label>
                                </div>
                                </div>
                                <div className="col-6 login-forgot-password"><a href="forgot-password.html">Forgot Password?</a></div>
                            </div>
                            <div className="form-group login-submit"><button className="btn btn-primary btn-xl" onClick={loginFunc}>Sign me in</button></div>
                        </div>
                        </div>
                    <div className="splash-footer"><span>Don't have an account? <Link to='/register'>Sign Up</Link></span></div>
                    </div>
                </div>
                </div>
            </div>
            </main>
    )
}

export default Login
