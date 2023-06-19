// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
        const NevItem = <>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/dashboard" >Dashboard</Link></li>
        <li><Link to="/contract" >Contract</Link></li>
        </>
    return (
        <div>
            <div className="navbar bg-slate-100 h-20 my-4">
                <hr className="text-secondary" />
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 z-20">
                           {NevItem}
                        </ul>
                    </div>
                    <Link to="/" className="m-12 w-24 normal-case text-xl">
                        <img src={'https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg'} alt="CarDr" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex items-end">
                    <ul className="menu menu-horizontal px-1">
                      {NevItem}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to='/register' className="btn btn-outline btn-secondary mr-12">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;