import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Services = () => {
    const [service, setService ] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setService(data))
    }, [])

    const navigate = useNavigate();
        
   
    return (

        <div>
            <div className='text-center py-10'>
                <h1>Our Services</h1>
                <p>Our client is our first priority No matter what. </p>
            </div>

            <div className='grid lg:grid-cols-2  gap-5 px-20'>
            {
                service.map((data) =>(
                <div key={data.key} className="card shadow-xl">
                    <h2 className="card-title card-body text-center items-center rounded-xl">{data.name}</h2>
                <figure className="">
                    <img src={data.image} className="rounded-xl w-full h-96 " />
                </figure>
                <div className="card-body items-center text-center">
                    
                    <p>{data.shortDescription}</p>
                    <div className="card-actions">
                    <button onClick={()=>navigate(`/learnMore/${data.key}`)} className="btn btn-primary  border-lime-200 text-amber-400">Learn more</button>
                    </div>
                </div>
                </div>
                ))
            }
            </div>  
                 
        </div>
    );
};

export default Services;