import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow.jsx';

const Booking = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data)
            })
    }, [url])


    const handleDelete = (id) => {
        const procced = confirm("Are You sure you want to delete this ")
        if (procced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert("deleted successfull")
                        const remaining = bookings.filter(booking => booking._id!==id)
                        setBookings(remaining)
                    }
                })
        }
    }
    const handleBookingConfirm = (id) => {
        const procced = confirm("Are You sure you want to Confirm this! ")
        if (procced) {

            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'PATCH',
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify({status:"confirm"})
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data)
                if(data.modifiedCount>0){
                    const remaining = bookings.filter(booking => booking._id!==id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm';
                    const newBookings = [updated,...remaining]
                    setBookings(newBookings)
                }
            })
        }
    }
    return (
        <div>
            Your  booking :{bookings.length}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                checkbox
                            </th>
                            <th>Image</th>
                            <th>Service Name </th>
                            <th>Price</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;