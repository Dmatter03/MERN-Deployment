import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import StoreForm from "../Components/StoreForm";

const CreatePage = () => {
    const nav = useNavigate();
    const { id } = useParams();

    const [formErrors, setFormErrors] = useState({});
    const [formUnique, setFormUnique] = useState(false);


    const formSubmit = (newStore) => {
        axios.post('http://localhost:8000/api/stores', newStore)
        .then((response) => {
                console.log(response.data._id);
                nav(`/details/${response.data._id}`);
            })
            .catch((error) => {
                console.log(error.response);
                console.log(error.response.data.errors);
                if (error.response.data.hasOwnProperty('keyValue')) {
                    setFormUnique(true);
                } else {
                    setFormUnique(false)
                }
                if (error.response.data.hasOwnProperty('errors')) {
                    setFormErrors(error.response.data.errors);
                } else {
                    setFormErrors({});
                }
            })
    }

    return (
        <div>
            <div className='nav' >
                <h2>Store Finder</h2>
                <Link to='/' className='m-2 btn btn-outline-primary'>Home</Link>
            </div>
            <p>Add a new store!</p>
            {formErrors && <StoreForm company={{ store: '', number: 1, open: '' }} formSubmit={formSubmit} formErrors={formErrors} formUnique={formUnique} />}
        </div>
    );
};







export default CreatePage




