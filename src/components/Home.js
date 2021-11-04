import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from 'react-router-dom';
import Menu from './Menu';
import Venues from './Venues';
import AllBookings from './AllBookings';
import MakeBookings from './MakeBookings';
import MyBookings from './MyBookings';
import Profile from './Profile';
import EditProfile from './EditProfile';
import { useHistory } from "react-router";
import React, {useEffect, useState} from 'react'


const Home = () => {

    let {path} = useRouteMatch()
    let history = useHistory();
    let user_id = sessionStorage.getItem('user_id')

    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch(`https://vbooking.stokoza.co.za/backend/get_user.php?user_id=${user_id}`)
        .then(res => res.json())
        .then(result =>{
            setUser(result)
        })
    },[user_id])

    if (!sessionStorage.getItem('user_id')) {
        return <Redirect to='/' />
    }

    const logout = () => {
        sessionStorage.removeItem('user_id');
        history.push('/home')
    }
    
    return (
        <Router>
        <div className="be-wrapper be-fixed-sidebar">
            <nav className="navbar navbar-expand fixed-top be-top-header">
                <div className="container-fluid">
                <div className="be-navbar-header"></div>
                <div className="be-right-navbar">
                    <ul className="nav navbar-nav float-right be-user-nav">
                        <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle"
                            to="#" data-toggle="dropdown" role="button"
                            aria-expanded="false"><img src="assets/img/avatar.png"
                                alt="Avatar" /><span className="user-name">{user.f_name} {user.l_name}</span></Link>
                            <div className="dropdown-menu" role="menu">
                            <div className="user-info">
                                <div className="user-name">{user.f_name} {user.l_name}</div>
                                <div className="user-position online">Available</div>
                            </div><Link className="dropdown-item" to="/home"><span
                                className="icon mdi mdi-home"></span>Dashboard</Link><Link
                                className="dropdown-item" to="/home/profile"><span className="icon mdi
                                mdi-account"></span>Profile</Link><Link className="dropdown-item"
                                onClick={logout}><span className="icon mdi mdi-power"></span>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            <div className="be-left-sidebar">
                <div className="left-sidebar-wrapper">
                    <div className="left-sidebar-spacer">
                        <div className="left-sidebar-scroll">
                        <div className="left-sidebar-content">
                            <ul className="sidebar-elements">
                                <li className="active">
                                    <Link to="/home">
                                        <i class="icon mdi mdi-home"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="active">
                                    <Link to={`${path}/profile`}>
                                        <i class="icon mdi mdi-account"></i>
                                        <span>Profile</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path={`${path}/`} component={Menu} />
                <Route path={`${path}/venues`} component={Venues} />
                <Route path={`${path}/my-bookings`} component={MyBookings} />
                <Route path={`${path}/all-bookings`} component={AllBookings} />
                <Route path={`${path}/make-bookings`} component={MakeBookings} />
                <Route path={`${path}/profile`} render={()=> <Profile /> } />  
                <Route path={`${path}/editprofile`} render={()=> <EditProfile user={user} /> } />  
            </Switch>
            </div>
        </Router>
       
    )
}

export default Home
