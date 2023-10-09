import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import './Navbar.css'


const Navbar = () => {

    const {user ,logOut}= useContext(AuthContext);

        
   const handleClick=()=>{
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="navbar bg-[#ffc84a]">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/services' >Services</NavLink></li>
                <li><NavLink to='/contact' >Contact</NavLink></li>
                <li><NavLink to='/registration'>Registration</NavLink></li>
                <li><NavLink to='/feedback'>Feedback</NavLink></li>
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Elegant Celebrations</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/services' >Services</NavLink></li>
                <li><NavLink to='/contact' >Contact</NavLink></li>
                <li><NavLink to='/registration'>Registration</NavLink></li>
                <li><NavLink to='/feedback'>Feedback</NavLink></li>
            </ul>
        </div>
                {
                        user ? 
                        <div className='navbar-end gap-4'>
                            <h1>{user.displayName}</h1>
                            <img src={user.photoURL} alt="" />
                            <button onClick={handleClick} className="btn">Log Out</button>            
                        </div>
                        : 
                        <div className="navbar-end">
                        <a className="btn"><Link to='/logIn'>Sign In</Link></a>
                        </div>
                                
                }
        
        </div>
        
    );
};

export default Navbar;





