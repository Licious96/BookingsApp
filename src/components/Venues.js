import React, {useState, useEffect} from 'react'

const Venues = () => {

    // const [item, setItem] = useState([]);
    // useEffect( () => {
    //     fetch(`https://vbooking.stokoza.co.za/backend/get_venues.php`)
    //     .then(res => res.json())
    //     .then(result=> {
    //         setItem(result)
    //     })
    // }, [])
    return (
        <div className="be-content">
            <div className="main-content container-fluid">
                <div className="row">

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Venue</th>
                            <th>Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {
                        item.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.capacity}</td>
                            </tr>
                            ))
                    } */}
                    </tbody>
                </table>

                </div>
            </div>
        </div>
                    
                    
    )
    
}

export default Venues
