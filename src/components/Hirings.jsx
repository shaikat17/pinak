

const Hirings = () => {
    return (
        <div className="mx-8 lg:mx-28 my-10 lg:my-20">
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl lg:text-5xl font-bold">We are hiring!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <h2 className="text-xl lg:text-3xl font-bold mt-10 text-center">Get Your Career Started</h2>
      <div className="card-body">
        <div className="form-control">
          <input type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Phone" className="input input-bordered" />
        </div>
        <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Applied for?</option>
            <option>Front-end</option>
            <option>Back-end</option>
            <option>Full Stack</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
            <option selected>Fresher</option>
            <option>0 year</option>
            <option>1 year</option>
            <option>2 years</option>
            <option>3 years</option>
            <option>More than 3 years</option>
        </select>
        </div>
        <textarea className="textarea textarea-bordered" placeholder="Write Your Message..."></textarea>
        <div className="form-control mt-6">
          <button className="btn bg-[#3646A6] text-white">Submit</button>
        </div>
        <p className="mt-4 text-center">To Apply for a job in Pinak Idea Lab Private Ltd., email us at <a className="text-info underline" href="">hr@pinakidea.com</a> along with your resume.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hirings;