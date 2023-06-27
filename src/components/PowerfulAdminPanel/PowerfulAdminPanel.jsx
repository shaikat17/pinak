import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import './PowerfulAdminPanel.css'
import pap from '../../assets/images/pap.jpg'

const PowerfulAdminPanel = () => {
    return (
        <div className='lg:relative lg:mb-96'>
            <img src={pap} alt="" />
            <div className="container"></div>
            <div className='lg:absolute top-3/4 lg:flex items-center gap-10 bg-white lg:mx-28 p-10 lg:p-20 shadow-lg'>
            <div className="lg:w-1/2">
            <h4 style={{letterSpacing: '0.2rem'}} className='text-sm font-bold text-slate-300'>Lorem ipsum dolor sit.3</h4>
                <h1 className="text-3xl lg:text-5xl font-bold mt-3">Lorem, ipsum.</h1>
                <p className='text-slate-500 my-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptate perspiciatis recusandae libero molestiae ut blanditiis excepturi aliquid laudantium velit.</p>
                
                <button className="bg-gradient-to-r from-yellow-300 to-orange-500 text-white px-7 py-3 rounded-full uppercase drop-shadow-2xl">learn more</button>
            </div>
            <div className='lg:w-1/2 lg:flex lg:gap-5 mt-20 lg:mt-0'>
                <div className="text-[#ff5443]">
                <ul>
                    <li className='flex items-center gap-4 mt-8 text-lg'><IoCheckmarkCircleOutline/> Lorem ipsum dolor sit amet.</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Lorem, ipsum.</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Lorem ipsum dolor sit.</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Lorem, ipsum dolor.</li>
                </ul>
                </div>
                <div className="text-[#ff5443]">
                <ul>
                    <li className='flex items-center gap-4 mt-8 text-lg'><IoCheckmarkCircleOutline/> Lorem ipsum dolor sit amet.</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Lorem, ipsum.</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Lorem ipsum dolor sit.</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Lorem, ipsum dolor.</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PowerfulAdminPanel;