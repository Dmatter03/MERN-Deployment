
import React, { useState } from "react";
import { useParams } from "react-router-dom";





const StoreForm = ({ company, formSubmit, formUnique, formErrors }) => {
    const [store, setStore] = useState(company.store);
    const [number, setNumber] = useState(company.number);
    const [open, setOpen] = useState(company.open);

    const { id } = useParams();
    
        // console.log(store)
        // console.log(store.store)

    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmit({
            store,
            number,
            open,


        });


    }


    return (
        <div className="p-3 mb-4 bg-warning bg-opacity-10 border border-warning border-start-0 rounded-end ">
            <form onSubmit={handleSubmit} className='form'>
                <p>Store Name:</p>
                <input type='text' value={store} className='form-control ' onChange={(e) => setStore(e.target.value)} />
                {formErrors.store &&
                    (<p className="text-danger"> {formErrors.store.message} </p>)}
                <p>Store Number:</p>
                <input type='number' min={0} value={number} className='form-control ' onChange={(e) => setNumber(e.target.value)} />
                {formUnique && <p className="text-danger"> Number must already be taken! </p>}
                {formErrors.number &&
                    (<p className="text-danger"> {formErrors.number.message} </p>)}
                <p>Is This Store Open</p>
                <input type="radio" className="btn-check" value={open} id="optionOne" checked={open === 'True'} onChange={(e) => setOpen('True')}/>
                <label className="btn btn-outline-primary" htmlFor="optionOne">True</label>
                <input type="radio" className="btn-check" value={open} id="optionTwo" checked={open === 'False'} onChange={(e) => setOpen('False')}/>
                <label className="btn btn-outline-danger" htmlFor="optionTwo">False</label>
                <div className="submitButton text-end">
                    <button className="btn btn-outline-secondary" >Submit</button>
                </div>
            </form>
        </div>
    );
};


export default StoreForm