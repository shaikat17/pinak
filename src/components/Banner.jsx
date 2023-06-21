import bannerImg from '../assets/shapes/asset 5.png';
import bannerBg1 from '../assets/shapes/asset 1.png';
import bannerBg2 from '../assets/shapes/asset 4.png';
import bannerBg3 from '../assets/shapes/asset 3.png';
import videoIcon from '../assets/icons/asset 2.png';
import BannerCards from './BannerCards/BannerCards';

const Banner = () => {
    return (
            <div className='relative bg-white'>
      <img src={bannerBg1} style={{width: '1000px'}} className='absolute left-[-100px] top-8' alt="" />
    <img src={bannerBg2} className='absolute right-[370px] top-40' alt="" />
    <img src={bannerBg3} className='absolute right-[750px] bottom-6' alt="" />
              <div className="hero bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse !min-w-full pl-28 pr-20">
    <img src={bannerImg} className="mt-36" />
    <div className=''>
      <div className='flex gap-2 mb-10'>
      <hr style={{border: '3px solid silver', width: '30px', borderRadius: '3px'}} />
      <hr style={{border: '3px solid silver', width: '180px', borderRadius: '3px'}} />
      </div>
      <h2 className='text-4xl text-red-500 font-serif mb-5'>New Era Of WordPress Theme</h2>
      <h1 className="absolute text-6xl font-semibold font-serif text-black">Introducing Infinite</h1>
      <p className="mt-20 py-6 pr-20">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className='flex gap-10 mt-6'>
      <button className="bg-[#3646a6] text-white font-serif px-10 py-4 rounded-sm">Learn More</button>
      <button className='flex items-center gap-4 text-[#3646a6] font-serif'> <img src={videoIcon} alt="" /> Video Introduction</button>
      </div>
    </div>
  </div>

</div>

{/* Banner bottom cards */}

<div className='relative'>
      <BannerCards/>
</div>
            </div>
    );
};

export default Banner;