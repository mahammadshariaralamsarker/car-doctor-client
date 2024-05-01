import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const service = useLoaderData();
    const {title,price,service_id} = service;
    console.log(service)
    return (
        <div>
            book service = {title}
        </div>
    );
};

export default CheckOut;