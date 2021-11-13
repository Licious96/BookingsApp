import { Link, Redirect } from "react-router-dom";
import logo from '../assets/logo.png';
import { useHistory } from "react-router";

const Register = () => {

    let history = useHistory();


    const registerFunc = async () => {
        
// let res = await fetch("http://localhost/react-app/backend/register.php", {
//                             method: "POST",
//                             body: formData
//                         })
//                         const formData = new FormData()
//                         formData.append('f_name', f_name)
//                         formData.append("l_name", l_name)

    

//     if (sessionStorage.getItem('user_id')) {
//         return <Redirect to='/home' />
    }

    return (
        <main className="be-splash-screen">
            <div className="be-wrapper be-login be-signup">
                <div className="be-content">
                    <div className="main-content container-fluid">
                        <div className="splash-container sign-up">
                            <div className="card card-border-color card-border-color-primary">
                                <div className="card-header"><img className="logo-img" src={logo} alt="logo" width="102" height="27" /><span className ="splash-description">Please enter your user information.</span></div>
                                <div className="card-body">
                                    <span className="splash-title pb-4">Sign Up</span>
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="f_name" required="" placeholder="First name" autocomplete="off"/>
                                        <div id="f_name_error" className ="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="l_name" required="" placeholder="Last name" autocomplete="off"/>
                                        <div id="l_name_error" className ="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="tel" id="staff_no" required="" placeholder="Staff number" autocomplete="off"/>
                                        <div id="staff_no_error" className ="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="email" id="email" required="" placeholder="E-mail" autocomplete="off"/>
                                        <div id="email_error" className ="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="tel" id="contacts" required="" placeholder="Contacts" autocomplete="off" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                                        <div id="contacts_error" className ="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="module_name" required="" placeholder="Module Name" autocomplete="off"/>
                                        <div id="module_name_error" className ="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="module_code" required="" placeholder="Module Code" autocomplete="off"/>
                                        <div id="module_code_error" className ="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="password" id="password" required="" placeholder="Password" autocomplete="off"/>
                                        <div id="password_error" className ="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="password" id="re_password" required="" placeholder="Confirm Password" autocomplete="off"/>
                                        <div id="re_password_error" className ="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <div id="result"></div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-block btn-primary btn-xl" onClick={registerFunc} type="submit">Sign Up</button>
                                    </div>
                                    <div className="form-group pt-3 mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" type="checkbox" id="check1" />
                                            <label className ="custom-control-label" for="check1">By creating an account, you agree the <a href="#">terms and conditions</a>.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="splash-footer"><span>Already have an account? <Link to="/">Login</Link></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register
