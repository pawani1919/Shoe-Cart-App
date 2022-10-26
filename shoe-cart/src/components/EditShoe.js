import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const EditShoe = () => {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const { id } = useParams();

    const shoeDetails = useSelector((state) => state);
    const currentShoe = shoeDetails.find((shoeDetail) => shoeDetail.id === parseInt(id));

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (currentShoe) {
            setName(currentShoe.name);
            setBrand(currentShoe.brand);
            setPrice(currentShoe.price);
            setSize(currentShoe.size);
        }
    }, [currentShoe]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !brand || !price) {
            return toast.warning("Please fill all the fields!")
        }
        const data = {
            id: parseInt(id),
            name,
            brand,
            price: parseInt(price),
            size: parseInt(size)
        };

        dispatch({ type: "UPDATE_SHOE", payload: data });
        toast.success("Updated Shoe detail Successfully");
        navigate('/');
    };

    return (
        <div style={{ backgroundImage: "url(/bg.jpg)", height: 600 }}>
            <div className="container">
                {currentShoe ?
                    (
                        <>
                            <h1 className="display-3 my-5 text-center"><b>Edit Shoe Detail {id}</b></h1>
                            <div className="row">
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
                                                placeholder="price"
                                                className="form-control"
                                                value={price}
                                                onChange={e => setPrice(e.target.value)} />
                                        </div>
                                        <div className="form-group p-2">
                                            <input
                                                type="number"
                                                placeholder="size"
                                                className="form-control"
                                                value={size}
                                                onChange={e => setSize(e.target.value)} />
                                        </div>
                                        <div className="form-group p-2">
                                            <input type="submit" className="btn btn-success" value="Update Shoe" />
                                            <span style={{ marginLeft: "0.5em" }}>
                                                <Link to="/" className="btn btn-danger ml-3">Cancel</Link></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>) : (
                        <h1 className="display-3 my-5 text-center">Shoe Detail with id {id} not exists</h1>
                    )}
            </div>
        </div>
    );
}

export default EditShoe;
