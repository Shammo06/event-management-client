import { useLoaderData, useParams } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LearnMore = () => {
    const {key} =useParams();
    const data = useLoaderData();
    const target = data.find(data => data.key === parseInt(key));
    
    const handleClick = () =>{
        toast.success("Congratulations, Our Event Management Unit will meet you Soon ", {
            position: toast.POSITION.TOP_CENTER
          });
    }    


    
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={target.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{target.name}</h2>
                <p>{target.description}</p>
                <p className='flex '><BiDollar></BiDollar>{target.price}</p>
                <div className="card-actions">
                <button onClick={handleClick} className="btn btn-primary">Order Now</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default LearnMore;