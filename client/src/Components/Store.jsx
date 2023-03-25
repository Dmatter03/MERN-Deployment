import React from "react";
import { Link } from "react-router-dom";


import DeleteButton from "./DeleteButton";



const Store = ({ store, removeFromDom }) => {


    return (
        
        <tr className="align-item-center">
            <td><Link to={`/details/${store._id}`} >{store.store}</Link></td>
            <td>{store.number}</td>
            <td>{store.open}</td>
            <td>
                <DeleteButton store={store} successCallback={() => removeFromDom(store._id)} />
            </td>
        </tr>
    );
};


export default Store