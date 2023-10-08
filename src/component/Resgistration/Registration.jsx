import { Link } from 'react-router-dom';
import banner from '../../assets/bride-groom-celebrate-love-nature-generated-by-ai.jpg';

const Registration = () => {
    return (
        <div className="hero min-h-screen"  style = {{ backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-50"></div>
            <div className=" shadow-2xl bg-white">
                <form className="card-body w-96">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>

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
                    <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Already Register? <Link to='/signIn'>Sign In</Link></p>
                
                </form>

                
            </div>
        </div>
    );
};

export default Registration;