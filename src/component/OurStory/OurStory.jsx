import { useEffect, useState } from "react";

const OurStory = () => {
    const [data, setData ] = useState([])

    useEffect(()=>{
        fetch('picture.json')
        .then(res=> res.json())
        .then(data => setData(data))
    }, [])

    return (
        <div className="md:px-20 px-10 py-5"> 
            <div className='text-center py-10'>
              <h1 className=" py-5 font-bold text-5xl text-[#ffc84a]">Our Story</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                {
                    data.map((element) =>(
                    <div key={element.key} className="">
                        <img src={element.image} alt="" />
                    </div> 
                    ))
                }

            </div>
                       
        </div>
    );
};

export default OurStory;