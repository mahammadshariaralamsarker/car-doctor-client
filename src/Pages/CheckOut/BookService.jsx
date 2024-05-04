import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const BookService = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);


    const { title, price,img, service_id } = service;
    const handleBookService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerNamer:name,
            email,
            date,
            service:title,
            service_id:service_id,
            price:price,
            img,
        }
        console.log(order)

        fetch("http://localhost:5000/bookings",{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                alert('data add successfully');
            }
        })
    }
    return (
        <form onSubmit={handleBookService}>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="email" defaultValue={user?.displayName} name='name' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" readOnly defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amount </span>
                    </label>
                    <input type="text" defaultValue={price} className="input input-bordered" required />
                </div>
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Order Confirm" className='btn btn-block' />
            </div>
        </form>

    );
};

export default BookService;