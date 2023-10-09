import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-20">
        <div className="text-center ">
            <h1 className="font-bold text-6xl py-6">Opps Nothing Left</h1> 
            <h1 className="font-bold text-6xl py-6">Go Back to Home</h1> 
            <button className="btn btn-warning bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]" onClick={() => navigate('/')}>Go Home</button>           
        </div>
        
        </div>
    );
};

export default Error;