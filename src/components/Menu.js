import { Link, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Menu = () => {

    const user_id = sessionStorage.getItem('user_id');
    let { url } = useRouteMatch()

    const [venues, setVenues] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [mybookings, setMyBookings] = useState([]);

    useEffect(() => {
        fetch(`https://vbooking.stokoza.co.za/backend/get_venues.php`)
            .then(res => res.json())
            .then(result => {
                setVenues(result.length)
            })
    },[]);

    useEffect(() => {
        fetch(`https://vbooking.stokoza.co.za/backend/all-bookings.php`)
            .then(res => res.json())
            .then(result => {
                setBookings(result.length)
            })
    },[]);

    useEffect(() => {
        fetch(`https://vbooking.stokoza.co.za/backend/my-bookings.php?user_id=${user_id}`)
            .then(res => res.json())
            .then(result => {
                setMyBookings(result.length)
            })
    },[user_id]);
    return (
        <div className="be-content">
            <div className="main-content container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-3">
                        <Link to={`${url}/venues`}>
                            <div className="widget widget-tile">
                                <div className="data-info">
                                    <div className="desc">All Venues</div>
                                    <div class="value"><span class="indicator indicator-equal mdi
                                            mdi-chevron-right"></span><span class="number"
                                            data-toggle="counter" data-end="">{venues}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <Link to={`${url}/all-bookings`}>
                            <div className="widget widget-tile">
                                <div className="data-info">
                                    <div className="desc">All Bookings</div>
                                    <div class="value"><span class="indicator indicator-positive
                                        mdi mdi-chevron-up"></span><span class="number"
                                            data-toggle="counter" data-end="5">{bookings}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <Link to={`${url}/make-bookings`}>
                            <div className="widget widget-tile">
                                <div className="data-info">
                                    <div className="desc">Make Bookings</div>
                                    <div class="value"><span class="indicator indicator-positive
                                        mdi mdi-chevron-up"></span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <Link to={`${url}/my-bookings`}>
                            <div className="widget widget-tile">
                                <div className="data-info">
                                    <div className="desc">My Bookings</div>
                                    <div class="value"><span class="indicator indicator-positive
                                        mdi mdi-chevron-up"></span><span class="number"
                                            data-toggle="counter" data-end="10">{mybookings}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
