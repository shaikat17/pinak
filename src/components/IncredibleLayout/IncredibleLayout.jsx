import './IncredibleLayout.css'
import incLayout from '../../assets/images/inc-layout.jpg'
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const IncredibleLayout = () => {
    return (
        <div className="inc-container bg-white">
            {/* The top of Incredible Layouts */}
            <div className='flex justify-center mt-24'>
            <div className='w-[4px] h-8 rounded-lg bg-slate-300'></div>
            </div>
            <div className='text-center mt-8'>
                <h4 className='text-sm font-bold text-red-500'>THE MOST POWERFUL THEME ON EARTH</h4>
                <h2 className='text-2xl mt-10 leading-10'>Far far away, behind the word mountains, far from the countries Vokalia and<br/>Consonantia, there live the blind texts. Separated they live in Bookmarksgrove<br/>right at the coast.</h2>
                <p className='text-slate-400 mt-8'>We provide complete solutions to our clients so they can focus their core business</p>
            </div>
            {/* Incredible Layouts */}
            <div className="hero mt-28">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={incLayout} className="" />
                <div className='mr-20'>
                <h4 style={{letterSpacing: '0.2rem'}} className='text-sm font-bold text-slate-300'>LIMITLESS POSSIBILITIES CREATE</h4>
                <h1 className="text-5xl font-bold mt-3 text-blue-900">Incredible Layouts</h1>
                <ul>
                    <li className='flex items-center gap-4 mt-8 text-lg'><IoCheckmarkCircleOutline/> Full wrapper and sidebar wrapper</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Column wrappers</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> More than 40 element items</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Many pre-built templates</li>
                </ul>
                <p className="pt-8 pb-12 text-slate-400">Bring your website to he ntext level with Infinite. One of the most powerful WordPress Theme on earth!</p>
                <button className="bg-[#ff5443] text-white px-7 py-3 rounded-full uppercase drop-shadow-2xl">learn more</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default IncredibleLayout;