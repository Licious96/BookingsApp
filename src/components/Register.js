import { Link, Redirect } from "react-router-dom";
import logo from '../assets/logo.png';
import { useHistory } from "react-router";

const Register = () => {

    let history = useHistory();

    const registerFunc = async () => {
        const f_name = document.querySelector('#f_name').value;
        const l_name = document.querySelector('#l_name').value;
        const email = document.querySelector('#email').value;
        const staff_no = document.querySelector('#staff_no').value;
        const contacts = document.querySelector('#contacts').value;
        const module_name = document.querySelector('#module_name').value;
        const module_code = document.querySelector('#module_code').value;
        const password = document.querySelector('#password').value;
        const re_password = document.querySelector('#re_password').value;
        const checkbox = document.querySelector('#check1');

        const f_name_error = document.querySelector('#f_name_error');
        const l_name_error = document.querySelector('#l_name_error');
        const staff_no_error = document.querySelector('#staff_no_error');
        const email_error = document.querySelector('#email_error');
        const contacts_error = document.querySelector('#contacts_error');
        const module_code_error = document.querySelector('#module_code_error');
        const module_name_error = document.querySelector('#module_name_error');
        const password_error = document.querySelector('#password_error');
        const re_password_error = document.querySelector('#re_password_error');

        f_name_error.innerHTML = "";
        l_name_error.innerHTML = "";
        email_error.innerHTML = "";
        staff_no_error.innerHTML = "";
        contacts_error.innerHTML = "";
        module_code_error.innerHTML = "";
        module_name_error.innerHTML = "";
        password_error.innerHTML = "";
        re_password_error.innerHTML = "";

        if (f_name.replace(/\s/g, "").length === 0) {
            f_name_error.innerHTML = "Enter your first name";
        }
        if (l_name.replace(/\s/g, "").length === 0) {
            l_name_error.innerHTML = "Enter your last name";
        }
        if (staff_no.replace(/\s/g, "").length === 0) {
            staff_no_error.innerHTML = "Enter your staff number";
        }

        if (isNaN(staff_no)) {
            staff_no_error.innerHTML = "Staff number is invalid";
        }

        if (email.replace(/\s/g, "").length === 0) {
            email_error.innerHTML = "Enter your email address";
        }

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            
        }else {
            email_error.innerHTML = "Please enter a valid email address";
        }

        if (contacts.replace(/\s/g, "").length === 0) {
            contacts_error.innerHTML = "Enter your contacts";
        }

        if (isNaN(contacts)) {
            contacts_error.innerHTML = "Contact number is invalid";
        }

        if (module_name.replace(/\s/g, "").length === 0) {
            module_name_error.innerHTML = "Enter your module name";
        }

        if (module_code.replace(/\s/g, "").length === 0) {
            module_code_error.innerHTML = "Enter your module code";
        }
        if (password.replace(/\s/g, "").length === 0) {
            password_error.innerHTML = "Create a password";
        }
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,20}$/;

        if(f_name.replace(/\s/g, "") && l_name.replace(/\s/g, "") && email.replace(/\s/g, "") && staff_no.replace(/\s/g, "") && module_code.replace(/\s/g, "") && module_name.replace(/\s/g, "") && password.replace(/\s/g, "") && contacts.replace(/\s/g, "")){
            if (password.match(passw)) {
                if (password === re_password) {
                    if (checkbox.checked) {
                        const formData = new FormData()
                        formData.append('f_name', f_name)
                        formData.append("l_name", l_name)
                        formData.append("email", email)
                        formData.append("contacts", contacts)
                        formData.append("staff_no", staff_no)
                        formData.append("module_name", module_name)
                        formData.append("module_code", module_code)
                        formData.append("password", password)

                        let res = await fetch("http://localhost/react-app/backend/register.php", {
                            method: "POST",
                            body: formData
                        })

                        let data = await res.json()

                        if(!isNaN(data)) {
                            console.log(data)
                            sessionStorage.setItem("user_id", data)
                            history.push('/home')
                        }else{
                            document.querySelector("#result").innerHTML = data
                        }
                        
                    } else {
                        document.querySelector("#result").innerHTML = '<div class="alert alert-primary p-3" role="alert">Please accept the terms and conditions below!</div>';
                    }
                } else {
                    re_password_error.innerHTML = "Passwords do not match";
                    return;
                }
            }else{
                password_error.innerHTML = "Password should contain at least one uppercase, one character and one number";
                return;
            }
        }
        
    }

    if (sessionStorage.getItem('user_id')) {
        return <Redirect to='/home' />
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
