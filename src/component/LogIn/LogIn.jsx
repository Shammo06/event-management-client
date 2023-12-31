import { Link, useLocation, useNavigate } from 'react-router-dom';
import banner from '../../assets/bride-groom-celebrate-love-nature-generated-by-ai.jpg';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {
    
    const {signIn} = useContext(AuthContext)
    const provider= new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();        
        const email = e.target.email.value
        const password = e.target.password.value
        signIn(email,password)
            .then(result => {
                console.log(result)
                navigate(location.state? location.state : '/')                
            }) 
            .catch ((error)=>{
                toast.error(error.message, {
                    position: toast.POSITION.TOP_CENTER
                });
                            
            })
        }
    const handleClick = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user)
            navigate('/')                
        }) 
        .catch (error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <div className="hero md:min-h-screen"  style = {{ backgroundImage: `url(${banner})`}}>
            <div className="hero-overlay bg-opacity-50"></div>
                <div className=" shadow-2xl bg-white">
                    <form  onSubmit={handleSubmit} className="card-body w-80 md:w-96">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-warning rounded-full bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]">Log In</button>
                        </div>
                        
                    </form>
                   
                    <div onClick={handleClick} className="form-control mb-6 px-9 ">
                        <button className="h-12 border rounded-full btn-warning bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]">
                            <h1 className=" flex gap-4 text-xl pl-12 font-semibold"><FcGoogle className="text-3xl"></FcGoogle> Sign In with Google</h1>
                        </button>
                    </div>
                    <div className="mb-6 px-9">
                        <p>Donot register? <Link className="text-blue-500 font-bold" to='/registration'>Go Register</Link></p> 
                    </div>                           

                    
                </div>
            </div>
            <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default LogIn;