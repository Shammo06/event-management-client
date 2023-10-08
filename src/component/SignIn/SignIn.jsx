import banner from '../../assets/bride-groom-celebrate-love-nature-generated-by-ai.jpg';
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    return (
        <div>
            <div className="hero min-h-screen"  style = {{ backgroundImage: `url(${banner})`}}>
            <div className="hero-overlay bg-opacity-50"></div>
                <div className=" shadow-2xl bg-white">
                    <form className="card-body w-96">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">SignIn</button>
                        </div>
                        
                    </form>
                    <div className="form-control mb-6 px-9 ">
                        <button className="h-12 border rounded-full bg-gray-200">
                            <h1 className=" flex gap-4 text-xl pl-12 font-semibold"><FcGoogle className="text-3xl"></FcGoogle> Sign In with Google</h1>
                        </button>
                    </div>
                    

                    
                </div>
            </div>
            
        </div>
    );
};

export default SignIn;