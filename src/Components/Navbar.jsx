import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div className="op-1 d-flex align-items-center justify-content-between px-5 container-fluid text-primary bg-dark  p-4 text-center">
            <NavLink className="fs-2 text-decoration-none text-info" to="/">DATA MANAGER</NavLink>
            <NavLink to="/users" className="text-light text-decoration-none fs-4">USERS</NavLink>
        </div>
    )

}

export default Navbar