
const Feedback = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Give Your Feedback</h1>
            <p className="py-6">Your feedback is valuable to us. We will always try to improve ourself. Thank you for staying with us</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <div className="form-control">
                <label className="label font-semibold text-2xl">
                    <span className="label-text">Write Your Feed back</span>
                </label>
                <input type="text" placeholder="" className="input input-bordered h-96" required />
                </div>
                              
                <div className="form-control mt-6">
                <button className="btn btn-warning  bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]">Submit</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Feedback;