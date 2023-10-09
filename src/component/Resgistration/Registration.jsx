import { Link } from 'react-router-dom';
import banner from '../../assets/bride-groom-celebrate-love-nature-generated-by-ai.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Registration = () => {
    const [inputError , setInputError] = useState();

    const {createUser} = useContext(AuthContext);
    
    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        //console.log(password) 
        if (password.length < 6) {
            setInputError("Password length is valid.");
            toast.error(inputError, {
                position: toast.POSITION.TOP_CENTER
            });
            return
        }
        if (!/[A-Z]/.test(password)) {
            setInputError("Password must be at least one capital letter.");
            toast.error(inputError, {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        if (/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
            setInputError("Password contains at least one special character.");
            toast.error(inputError, {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }         
        createUser(email,password)
            .then(result => {
               updateProfile(result.user, {
                    displayName:name, 
                    photoURL: photo
                })
                toast.success("Register Successful, Please LogIn", {
                    position: toast.POSITION.TOP_CENTER
                });

            }) 
            .catch ((error)=>{
                toast.error(error.message, {
                    position: toast.POSITION.TOP_CENTER
                });
                            
            })
    }   
    return (
        <div className="hero min-h-screen"  style={{ backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-50"></div>
            <div className=" shadow-2xl bg-white">
                <form onSubmit={handleSubmit} className="card-body w-96">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn rounded-full btn-warning bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]">Register</button>
                    </div>
                    <p>Already Register? <Link className="text-blue-500 font-bold" to='/logIn'>Log In</Link></p>
                                    
                </form>

                
            </div>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;