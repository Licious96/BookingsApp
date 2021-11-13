import { Link } from "react-router-dom";
import CoverPhoto from '../assets/img/user-profile-display.png'
import Avatar from '../assets/img/avatar-150.png'
import { useState, useEffect } from "react";

const Profile = () => {

    // const user_id = sessionStorage.getItem('user_id')
    // const [user, setUser] = useState([])

    // useEffect(()=>{
    //     fetch(`https://vbooking.stokoza.co.za/backend/get_user.php?user_id=${user_id}`)
    //     .then(res => res.json())
    //     .then(results =>{
    //         setUser(results)
    //     })
    // },[user_id])

    return (
        <div class="be-content">
            <div class="main-content container-fluid">
                <div class="user-profile">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="user-display">
                                <div class="user-display-bg"><img src={CoverPhoto} alt="Profile Background" /></div>
                                <div class="user-display-bottom">
                                    <div class="user-display-avatar"><img src={Avatar} alt="Avatar" /></div>
                                    <div class="user-display-info">
                                        <div class="name"><Link to="/home/editprofile"><span class="icon mdi mdi-edit edit_pen"></span></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div class="user-info-list card">
                                <div class="card-body">
                                    <table class="no-border no-strip skills">
                                        <tbody class="no-border-x no-border-y">
                                            <tr>
                                                <td class="icon"><span class="mdi mdi-bookmark"></span></td>
                                                <td class="item">Module Name<span class="icon s7-portfolio"></span></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td class="icon"><span class="mdi mdi-bookmark-outline"></span></td>
                                                <td class="item">Module Code<span class="icon s7-gift"></span></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td class="icon"><span class="mdi mdi-email"></span></td>
                                                <td class="item">Email<span class="icon s7-gift"></span></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td class="icon"><span class="mdi mdi-account"></span></td>
                                                <td class="item">Staff No.<span class="icon s7-gift"></span></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td class="icon"><span class="mdi mdi-smartphone-android"></span></td>
                                                <td class="item">Contacts<span class="icon s7-phone"></span></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       
    )
}

export default Profile
