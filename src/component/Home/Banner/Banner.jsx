import banner from '../../../assets/bride-groom-celebrate-love-nature-generated-by-ai.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen"style={{ backgroundImage: `url(${banner})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="">
                <h1 className="mb-5 text-5xl font-bold text-[#fafcff]">Best Social Event Management<br/> Service In the Town</h1>
                <p className="mb-5 text-[#d5dae1]">We bring your events to life! From weddings to parties and special occasions,<br>
                </br> we turn your dreams into unforgettable moments.</p>
                <button className="btn btn-warning bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;