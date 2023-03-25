import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Store from '../Components/Store';





const Dashboard = () => {
    const [storeList, setStoreList] = useState();



    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
            .then((response) => {
                console.log(response.data);
                setStoreList(response.data);
            })
            .catch((error) => console.log(error))
    }, [])
    const removeFromDom = (storeIdToDelete) => {
        setStoreList(storeList.filter((store) => store._id !== storeIdToDelete))
    };


    return (
        <div>
            <div className='nav' >
                <h2>Store Finder</h2>
            </div>
            <div className='p-4 '>
                <table className="table table-hover table table-bordered  table-secondary">
                    <thead>
                        <tr>
                            <th scope="col">Store</th>
                            <th scope="col">Store Number</th>
                            <th scope="col">Open</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storeList && storeList.map((store, idx) => <Store store={store} removeFromDom={removeFromDom} key={idx} />)
                        }
                    </tbody>
                </table>
                <Link to='/create'  > Add a store</Link>
            </div>
        </div>
    );
};



export default Dashboard