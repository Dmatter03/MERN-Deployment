import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import StoreForm from '../Components/StoreForm';


const UpdatePage = () => {
    const nav = useNavigate();
    const { id } = useParams();

    const [formErrors, setFormErrors] = useState({});
    const [oneStore, setOneStore] = useState();

    console.log(oneStore)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then((response) => {
                console.log(response.data)
                setOneStore(response.data)
            })
            .catch((error) => console.log(error))
    }, [])

    const updateStore = (storeToUpdate) => {
        axios.put(`http://localhost:8000/api/stores/${id}`, storeToUpdate)
            .then((results) => {
                console.log(results);
                nav(`/details/${id}`)
            })
            .catch((error) => {
                console.log(error.response.data.errors);
                setFormErrors(error.response.data.errors);
            })
    }


    return (
        <div>
            <div className='nav' >
                <h2>Store Finder</h2>
                <Link to='/' className='btn btn-primary'>Home</Link>
            </div>
            <div>
                {oneStore && <StoreForm company={oneStore} formSubmit={updateStore} formErrors={formErrors} />}
            </div>
        </div>
    );
};





export default UpdatePage