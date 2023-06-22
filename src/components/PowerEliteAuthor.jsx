import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import powerEliteAuthor from '../assets/images/pea.jpg'

const PowerEliteAuthor = () => {
    return (
        <div>
            {/* Incredible Layouts */}
            <div className="hero mt-28">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={powerEliteAuthor} className="" />
                <div className='mr-20'>
                <h4 style={{letterSpacing: '0.2rem'}} className='text-sm font-bold text-slate-300'>Lorem ipsum dolor sit.</h4>
                <h1 className="text-5xl font-bold mt-3 text-[#ff5443]">Lorem, ipsum.</h1>
                <ul>
                    <li className='flex items-center gap-4 mt-8 text-lg'><IoCheckmarkCircleOutline/> Lorem ipsum dolor sit amet.</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Lorem, ipsum.</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Lorem ipsum dolor sit amet.</li>
                    <li className='flex items-center gap-4 mt-4 text-lg'><IoCheckmarkCircleOutline/> Lorem ipsum dolor sit.</li>
                </ul>
                <p className="pt-8 pb-12 text-slate-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ad fugit doloremque! Qui incidunt nobis voluptate non, rem reiciendis. Corrupti eaque error consectetur voluptatum enim nihil inventore deserunt perferendis aspernatur!</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PowerEliteAuthor;