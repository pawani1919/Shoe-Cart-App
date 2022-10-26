import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {

    const shoeDetails = useSelector(state => state);

    const dispatch = useDispatch();

    const deleteShoe = (id) => {
        dispatch({ type: "DELETE_SHOE", payload: id });
        toast.success("Shoe Detail Deleted Successfully!!")
    }

    return (
        <div style={{ backgroundImage: "url(/bg.jpg)", height: 600 }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-3 text-right" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Link to="/add" className="btn btn-outline-dark">
                            <i>Add Shoe Detail</i>
                        </Link>
                    </div>
                    <div className="col-md- mx-auto">
                        <table className="table table-hover table-bordered ">
                            <thead className="text-white bg-dark text-center">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    shoeDetails.map((shoe, id) => (
                                        <tr key={id}>
                                            <td align="center">{id + 1}</td>
                                            <td align="center">{shoe.name}</td>
                                            <td align="center">{shoe.brand}</td>
                                            <td align="center">{shoe.price}</td>
                                            <td align="center">{shoe.size}</td>
                                            <td align="center">
                                                <span style={{ marginLeft: "0.5em" }}>
                                                    <Link to={`/edit/${shoe.id}`} className="btn btn-small btn-primary" style={{ marginLeft: "0.5em" }}>EDIT</Link>
                                                    &nbsp;</span>
                                                <button
                                                    type="button"
                                                    className="btn btn-small btn-dark"
                                                    onClick={() => deleteShoe(shoe.id)}>DELETE</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
