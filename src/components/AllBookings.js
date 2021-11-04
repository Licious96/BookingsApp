import React, {useState, useEffect} from 'react'

const AllBookings = () => {

    const [item, setItem] = useState([]);

    useEffect(()=>{
        fetch(`https://vbooking.stokoza.co.za/backend/all-bookings.php`)
        .then(res => res.json())
        .then(result=> {
            setItem(result)
        })
    },[])

    return (
        <div className="be-content">
            <div className="main-content container-fluid">
                <div className="row">

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Venue</th>
                                <th>Booked for</th>
                                <th>Booked by</th>
                                <th>Date & Time</th>
                                <th>Contacts</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                item.map(item => (
                                    <tr>
                                        <td>{item.venue}</td>
                                        <td>{item.module_code}</td>
                                        <td>{item.lecturer_name}</td>
                                        <td>{item.date}<br/>{item.time}</td>
                                        <td>{item.email} <br/> 0{item.lecturer_contacts}</td>
                                    </tr> 
                                ))
                            }
                                               
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}

export default AllBookings
