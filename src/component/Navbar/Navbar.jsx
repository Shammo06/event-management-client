import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Navbar = () => {

    const {user ,logOut}= useContext(AuthContext);

    console.log(user)

    
   const handleClick=()=>{
        logOut()
            .then()
            .catch()
    }
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
                user ? 
                <div className='navbar-end gap-4'>
                    <h1>{user.displayName}</h1>
                    <img src={user.photoURL} alt="" />
                    <button onClick={handleClick} className="btn">Log Out</button>            
                </div>
                : 
                <div className="navbar-end gap-4">
                    <Link to='/registration'>Registration</Link>
                    <Link to='/logIn'>Sign In</Link>                
                </div>           
            }
            </div>                 
        </div>
    );
};

export default Navbar;