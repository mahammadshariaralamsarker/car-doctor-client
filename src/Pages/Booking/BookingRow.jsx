

const BookingRow = ({ booking,handleDelete,handleBookingConfirm }) => {

    const { status,customerNamer, email, date, price, service, img, _id } = booking

    
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                img && <img src={img} />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{price}</td>
            <th>
            {
                status ==='confirm'?<span className="font-bold text-primary">Confirmed</span>:
                
                <button onClick={() => handleBookingConfirm(_id)} className="btn  ">Confirm</button>
            }
            </th>
            <th>
            <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default BookingRow;