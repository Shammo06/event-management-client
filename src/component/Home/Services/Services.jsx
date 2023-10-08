import { useEffect, useState } from "react";


const Services = () => {
    const [service, setService ] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setService(data))
    }, [])
    
    console.log(service)
    return (

        <div>
            <div>
                <h1>Our Services</h1>
                <p>Our client is our first priority No matter what. </p>
            </div>

            <div>
            {
                service.map((data) =>(
                <div key={data.key} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.description}</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
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