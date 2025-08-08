
import {  Link } from "react-router-dom";
import { assets } from "../../assets/admin-icons/assets";

const Navbar = () => {
    const navOptions = <>
        <ul className="lg:flex space-x-4">
            <li><Link to="/" className="hover:text-yellow-300 hover:scale-110 ">Home</Link></li>
            <li><Link to="/menu" className="hover:text-yellow-300 hover:scale-110">Menu</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 hover:scale-110">About us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 hover:scale-110">Contact us</Link>
            </li>
        </ul>
    </>


    return (

        <div className="navbar bg-black text-white shadow-sm">
            <div className="navbar-start bg-black text-white">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-black text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <a><img className="w-[150px]" src={assets?.logo} alt="Logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="md:flex items-center bg-gray-700">
                    <input type="text" placeholder="Search..." className="input input-bordered w-24 bg-gray-700 md:w-auto" />
                    <img className="mx-2" src={assets.search_icon} alt="" />
                </div>
                <img className="mx-2" src={assets.bag_icon} alt="" />
                <a className="btn rounded-3xl mx-2 font-bold hover:bg-gray-600 hover:text-white hover:transition duration-400">Sign in</a>
            </div>
        </div>

    );
};

export default Navbar;