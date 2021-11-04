import React from 'react'
import { useState, useEffect } from 'react'

const MakeBookings = () => {

    const user_id = sessionStorage.getItem('user_id');
    const [item, setItem] = useState([]);
    const [time, setTime] = useState([]);
    const [date] = useState(new Date().toISOString().split('T')[0]);
    const [alert, setAlert] = useState([]);
    
    useEffect( () => {
        fetch(`https://vbooking.stokoza.co.za/backend/get_venues.php`)
        .then(res => res.json())
        .then(result=> {
            setItem(result)
        })
    }, [])

    useEffect( () => {
        fetch(`https://vbooking.stokoza.co.za/backend/get_time.php`)
        .then(res => res.json())
        .then(result=> {
            setTime(result)
        })
    }, [])

    const bookings = async () => {
        const venue = document.querySelector('#venue').value;
        const date = document.querySelector('#date').value;
        const time = document.querySelector('#time').value;

        const venue_error = document.querySelector('#venue_error');
        const date_error = document.querySelector('#date_error');
        const time_error = document.querySelector('#time_error');

        venue_error.innerHTML = "";
        date_error.innerHTML = "";
        time_error.innerHTML = "";

        if (venue === 'choose') {
            venue_error.innerHTML = "Choose venue";
        }

        if (date.length === 0) {
            date_error.innerHTML = "Choose date";
        }

        if (time === 'choose') {
            time_error.innerHTML = "Choose time";
        }

        if (venue !== 'choose' && date.length !== 0 && time !== 'choose') {
            const formdata = new FormData()
            formdata.append('venue', venue)
            formdata.append('date', date)
            formdata.append('time', time)
            formdata.append('user_id', user_id)

            let res = await fetch("https://vbooking.stokoza.co.za/backend/bookings.php",{
                method: "POST",
                body: formdata
            })

            let results = await res.json();

            setAlert(results)
        }
    }
    return (
        <div className="be-content">
            <div className="main-content container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-border-color card-border-color-primary">
                            <div className="card-header card-header-divider">Make Bookings</div>
                            <div className="card-body">
                                <div className="form-group row">
                                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Choose Venue</label>
                                    <div className="col-12 col-sm-8 col-lg-6">
                                        <select id="venue" class="form-control">
                                            <option value="choose" selected hidden>Choose...</option>
                                            {
                                                item.map(item => (
                                                    <option value={item.name}>{item.name} ({item.capacity} seats)</option>
                                                ))
                                            }
                                        </select>
                                        <div id="venue_error" className="invalid-feedback"></div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12 col-sm-3 col-form-label text-sm-right"> Choose Date </label>
                                    <div className="col-12 col-sm-7 col-md-5 col-lg-4 col-xl-3">
                                        <div className="input-group" >
                                            <input className="form-control" size="16" min={date} type="date" id="date" />
                                        </div>
                                        <div id="date_error" className="invalid-feedback"></div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12 col-sm-3 col-form-label text-sm-right">Choose Time</label>
                                    <div className="col-12 col-sm-8 col-lg-6">
                                        <select id="time" class="form-control">
                                            <option value="choose" selected hidden>Choose...</option>
                                            {
                                                time.map(time => (
                                                    <option value={time.time}>{time.time} </option>
                                                ))
                                            }
                                        </select>
                                        <div id="time_error" className="invalid-feedback"></div>
                                    </div>
                                </div>
                                <div className="form-group" dangerouslySetInnerHTML={{__html:alert}}>
                                
                                </div>
                                <div className="form-group">
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary" onClick={bookings}>Book</button>
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

export default MakeBookings
