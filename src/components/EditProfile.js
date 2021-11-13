import{ useState, useEffect} from 'react';

const EditProfile = ({user1}) => {
    // const user_id = sessionStorage.getItem('user_id');

    // const [user, setUser] = useState([])

    // useEffect(()=>{
    //     fetch(`https://vbooking.stokoza.co.za/backend/get_user.php?user_id=${user_id}`)
    //     .then(res => res.json())
    //     .then(results =>{
    //         setUser(results)
    //     })
    // },[user_id])

    // const [alert, setAlert] = useState([])

    const update = async () =>{
    //     const formData = new FormData()
    //     const f_name = document.getElementById('f_name').value;
    //     const l_name = document.getElementById('l_name').value;
    //     const module_name = document.getElementById('module_name').value;
    //     const module_code = document.getElementById('module_code').value;
    //     const email = document.getElementById('email').value;
    //     const contacts = document.getElementById('contacts').value;

    //     if (f_name.replace(/\s/g, "").length === 0 || l_name.replace(/\s/g, "").length === 0 || module_name.replace(/\s/g, "").length === 0 || module_code.replace(/\s/g, "").length === 0 || email.replace(/\s/g, "").length === 0 || contacts.replace(/\s/g, "").length === 0) {
    //         setAlert('<div class="alert alert-danger p-1 text-center" role="alert">Cannot save an empty field</div>')
    //         return;
    //     }

    //     if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
    //         setAlert('<div class="alert alert-danger p-1 text-center" role="alert">Invalid email format</div>')
    //         return;
    //     }

    //     if (isNaN(contacts)) {
    //         setAlert('<div class="alert alert-danger p-1 text-center" role="alert">Invalid contact numbers</div>')
    //         return;
    //     }
        
    //     formData.append('f_name', f_name);
    //     formData.append('l_name', l_name);
    //     formData.append('module_name', module_name);
    //     formData.append('module_code', module_code);
    //     formData.append('email', email);
    //     formData.append('contacts', contacts);
    //     formData.append('user_id', user_id);

    //     let res = await fetch('https://vbooking.stokoza.co.za/backend/edit-profile.php',
    //     {
    //         method: 'POST',
    //         body: formData
    //     })

    //     let data = await res.json();
    //     setAlert(data);

    //     setTimeout(()=>{
    //         setAlert('');
    //     }, 3000)
    }
    
    return (
        <div className="be-content">
            <div className="main-content container-fluid">
                <div className="row">
                    <div class="col-md-12">
                        <div className="card card-border-color card-border-color-primary">
                            <div className="card-body">
                                <div class="form-group row">
                                    <label className="col-12 col-sm-3 col-form-label text-sm-right" for="inputText3">First Name</label>
                                    <div class="col-12 col-sm-8 col-lg-6">
                                        <input className="form-control" id="f_name" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label className="col-12 col-sm-3 col-form-label text-sm-right" for="inputPassword3">Last Name</label>
                                    <div class="col-12 col-sm-8 col-lg-6">
                                        <input className="form-control" id="l_name" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label className="col-12 col-sm-3 col-form-label text-sm-right" for="inputPlaceholder3">Module Name</label>
                                    <div class="col-12 col-sm-8 col-lg-6">
                                        <input className="form-control" id="module_name" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Module Code</label>
                                    <div class="col-12 col-sm-8 col-lg-6">
                                        <input className="form-control" id="module_code" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Email</label>
                                    <div class="col-12 col-sm-8 col-lg-6">
                                        <input className="form-control" id="email" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Contacts</label>
                                    <div class="col-12 col-sm-8 col-lg-6">
                                        <input class="form-control" id="contacts" />
                                    </div>
                                </div>
                                <div className="row offset-2">
                                    <div id="alert-msg" dangerouslySetInnerHTML={{__html: alert}} className="col-9">
                            
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text-center">
                                            <button class="btn btn-primary" type="button" onClick={update}>Update</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
