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

        <div className="">
            <div className='text-center py-10'>
                <h1 className=" py-5 font-bold text-5xl text-[#ffc84a]">Our Services</h1>
                <p className="text-xl">Our client is our first priority. No matter what. </p>
            </div>

            <div className='grid lg:grid-cols-2  gap-5 px-20'>
            {
                service.map((data) =>(
                <div key={data.key} className="card shadow-xl">
                    <h2 className="card-title card-body text-center items-center rounded-t-lg text-3xl text-[#42484b] bg-[#ffc84a]">{data.name}</h2>
                <figure className="">
                    <img src={data.image} className="rounded-b-lg w-full h-96 " />
                </figure>
                <div className="card-body items-center text-center">
                    
                    <p>{data.shortDescription}</p>
                    <div className="card-actions">
                    <button onClick={()=>navigate(`/learnMore/${data.key}`)} className="btn btn-warning bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]">Learn more & Order</button>
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