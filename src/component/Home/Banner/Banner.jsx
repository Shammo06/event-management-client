import banner from '../../../assets/bride-groom-celebrate-love-nature-generated-by-ai.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen"style={{ backgroundImage: `url(${banner})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="">
                <h1 className="mb-5 text-5xl font-bold">Best Social Event<br/> Management Service<br/> In the Town</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;