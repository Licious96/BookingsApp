import React, { useState, useEffect } from 'react';

const MyBookings = () => {

    // const user_id = sessionStorage.getItem('user_id');
    // const [mybookings, setMyBookings] = useState([]);

    // useEffect(() => {
    //     fetch(`https://vbooking.stokoza.co.za/backend/my-bookings.php?user_id=${user_id}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             setMyBookings(result)
    //         })
    // },[user_id])

    // const removeBooking = id => () => {
    //     fetch(`https://vbooking.stokoza.co.za/backend/delete_booking.php?id=${id}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             fetch(`https://vbooking.stokoza.co.za/backend/my-bookings.php?user_id=${user_id}`)
    //                 .then(res1 => res1.json())
    //                 .then(result1 => {
    //                     setMyBookings(result1)
    //                 })
    //         })
        
    // }
    return (
        <div class="be-content">
            <div class="main-content container-fluid">
                <div class="row">

                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Venue</th>
                                <th>Booked for</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th class="actions"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                mybookings.map( items => (
                                    <tr>
                                        <td>{items.venue}</td>
                                        <td>{items.module_code}</td>
                                        <td>{items.date}</td>
                                        <td>{items.time}</td>
                                        <td className="actions" onClick={removeBooking(items.id)}><i className="icon mdi mdi-delete"></i></td>
                                    </tr>
                                ))
                            } */}
                        </tbody>
                        
                    </table>

                    <div id="success"></div>
                </div>
            </div>
        </div>
    )
}

export default MyBookings
