import bgImage from "../../assets/shapes/asset 44.jpeg"

const NewsAndSponsor = () => {
    return (
        <div style={{backgroundImage: `url('${bgImage}')`}} className="h-screen bg-cover flex flex-col bg-no-repeat bg-center overflow-hidden py-10 px-10">
            <div className="">
            <p className="my-4 text-lg text-gray-400 font-semibold uppercase tracking-widest">
        Only professional here
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">Recent News</h2>
        <div className="grid grid-cols-1 md: grid-cols-3 gap-3">
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
            </div>
        </div>
    );
};

export default NewsAndSponsor;