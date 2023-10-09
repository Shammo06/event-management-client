import picture from '../../assets/pexels-edward-eyer-1045541.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        toast.success('Thank you for stay with Us. We will reach you soon', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${picture})`}}>
            <div className="hero-overlay bg-opacity-50"></div>

            <div className="lg:flex gap-5">
            <div className="pt-20">
                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-[#fafcff]">YOU JUST BRING THE GUEST</h1>
                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-[#fafcff]">LET US DO THE REST</h1>
            </div>     
            <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Whats Your Event</span>
                    </label>
                    <input type="Text" placeholder="Your Event Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">When You need</span>
                    </label>
                    <input type="date" placeholder="Write Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Where You Live</span>
                    </label>
                    <input type="Text" placeholder="Write Your Place" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-warning bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]">Order</button>
                    </div>
                </form>
            </div>                        
            <ToastContainer></ToastContainer>  
        </div>
            
           
            
       
    
    );
};

export default Contact;