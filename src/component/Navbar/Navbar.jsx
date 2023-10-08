import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="navbar-start text-yellow-400">
                <p>Elegant Celebrations</p>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="flex gap-6 px-1">
                <li><NavLink>Home</NavLink></li>
                <li><NavLink>About</NavLink></li>
                <li><NavLink>Services</NavLink></li>
                <li><NavLink>Contact</NavLink></li>
                </ul>
            </div>
            {
            <div className="navbar-end">
                <a className="btn">Sign In</a>
            </div>
            }
            </div>                 
        </div>
    );
};

export default Navbar;