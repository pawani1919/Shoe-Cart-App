import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const AddShoe = () => {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");

    const shoeDetail = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !brand || !price) {
            return toast.warning("Please fill all the fields!")
        }
        const data = {
            id: shoeDetail[shoeDetail.length - 1].id + 1,
            name,
            brand,
            price,
            size
        };

        dispatch({ type: "ADD_SHOE", payload: data });
        toast.success("Added Shoe detail Successfully");
        navigate('/');
    };

    return (
        <div style={{ backgroundImage: "url(/bg.jpg)", height: 600 }}>
            <div className="container">
                <div className="row">
                    <h1 className="display-3 my-5 text-center"><b>Add Shoe Detail</b></h1>
                    <div className="col-md-6 shadow mx-auto p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group p-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="form-control"
                                    value={name}
                                    onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group p-2">
                                <input
                                    type="text"
                                    placeholder="Brand"
                                    className="form-control"
                                    value={brand}
                                    onChange={e => setBrand(e.target.value)} />
                            </div>
                            <div className="form-group p-2">
                                <input
                                    type="number"
                                    placeholder="Price"
                                    className="form-control"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)} />
                            </div>
                            <div className="form-group p-2">
                                <input
                                    type="number"
                                    placeholder="Size"
                                    className="form-control"
                                    value={size}
                                    onChange={e => setSize(e.target.value)} />
                            </div>
                            <div className="form-group p-2">
                                <input type="submit" className="btn btn-block btn-dark" value="Add Shoe Detail" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddShoe;
