import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary py-2">
            <Link to="/" className="navbar-brand ml-5 text-warning"><h4><b>SHOE CART</b></h4></Link>
        </nav>
    );
}

export default Navbar;
