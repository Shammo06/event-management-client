import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="lg:navbar  mx-auto bg-[#ffc84a]">
            <div className="navbar-start">
                <p>Elegant Celebrations</p>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="grid grid-cols-6 pl-16 gap-6">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/services' >Services</NavLink></li>             
                </ul>
            </div>
            {
            <div className="navbar-end gap-4">
                <Link to='/registration'>Registration</Link>
                <Link to='/signIn'>Sign In</Link>
                
            </div>
            }
            </div>                 
        </div>
    );
};

export default Navbar;