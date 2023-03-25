import React from "react";
import axios from "axios";





const DeleteButton = ({ store, successCallback }) => {


    const deleteStore = () => {
        axios.delete(`http://localhost:8000/api/stores/${store._id}`)
        .then((response) => {
            console.log(response);
            successCallback();
        })
        .catch((err) => console.log(err));
    };





    return <button className="btn btn-success" onClick={deleteStore}>Delete</button>;
};


export default DeleteButton