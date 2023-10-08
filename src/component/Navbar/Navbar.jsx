import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="navbar-start text-yellow-400">
                <p>Elegant Celebrations</p>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="flex gap-6 px-1">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/services' >Services</NavLink></li>
                <li><NavLink to='/contact'>Contact Us</NavLink></li>
                <li><NavLink to='/registration'>Registration</NavLink></li>
                </ul>
            </div>
            {
            <div className="navbar-end">
                <Link to='/signIn'>Sign In</Link>
            </div>
            }
            </div>                 
        </div>
    );
};

export default Navbar;