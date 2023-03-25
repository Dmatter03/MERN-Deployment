import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'




const DetailsPage = () => {
    const { id } = useParams();

    const [store, setStore] = useState();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(response => {
                setStore(response.data)
                console.log(response.data)
            })
            .catch((err) => console.log(err))
    }, [id])

    return (
        <div>
            <div className='nav' >
                <h2>Store Finder</h2>
                <Link to='/' className='m-2 btn btn-outline-primary'>Home</Link>
            </div>
            {store && store._id && (
                <div>
                    <p><span>Store Name:</span> {store.store}  </p>
                    <p><span>Store Number:</span> {store.number} </p>
                    <p><span>Store Is Open:</span> {store.open} </p>
                </div>
            )}
            <Link to={`/update/${id}`} className='btn btn-lg btn-primary' >Edit Store Details</Link>
        </div>
    );
}




export default DetailsPage