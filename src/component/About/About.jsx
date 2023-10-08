import picture from '../../assets/pexels-edward-eyer-1045541.jpg'

const About = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 py-10">
            <div className="text-center mt-24">
                <h1 className="font-bold text-5xl text-[#ffc84a]">About</h1>
                <p className="text-xl">At Elegant Celebration, we specialize in creating unforgettable events. With a passionate team and a commitment to excellence, we turn your visions into remarkable experiences. From weddings to parties, we bring your dreams to life. Join us in celebrating life's milestones and making memories that last a lifetime.</p>
            </div>
            <img className='h-96' src={picture} alt="" />
            
        </div>
    );
};

export default About;