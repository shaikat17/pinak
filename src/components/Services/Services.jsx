import design from '../../assets/icons/asset11.png';
import tool from '../../assets/icons/asset12.png';
import development from '../../assets/icons/asset13.png';
import inspired from '../../assets/icons/asset14.png';
import creative from '../../assets/icons/asset15.png';
import socialized from '../../assets/icons/asset16.png';

const Services = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-28 gap-14 text-center lg:mt-20 mb-20 lg:mb-32'>
            {/* Service 1 */}
            <div className='grid justify-items-center gap-5'>
                <img src={design} alt="" />
                <h3 className='text-lg font-bold text-[#ff5443]'>Lorem, ipsum dolor.</h3>
                <p className='text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque consectetur, inventore tempore nihil et cupiditate?</p>
            </div>
            {/* Service 2 */}
            <div className='grid justify-items-center gap-5'>
                <img src={tool} alt="" />
                <h3 className='text-lg font-bold text-[#ff5443]'>Lorem, ipsum dolor.</h3>
                <p className='text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque consectetur, inventore tempore nihil et cupiditate?</p>
            </div>
            {/* Service 3 */}
            <div className='grid justify-items-center gap-5'>
                <img src={development} alt="" />
                <h3 className='text-lg font-bold text-[#ff5443]'>Lorem, ipsum dolor.</h3>
                <p className='text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque consectetur, inventore tempore nihil et cupiditate?</p>
            </div>
            {/* Service 4 */}
            <div className='grid justify-items-center gap-5'>
                <img src={inspired} alt="" />
                <h3 className='text-lg font-bold text-[#ff5443]'>Lorem, ipsum dolor.</h3>
                <p className='text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque consectetur, inventore tempore nihil et cupiditate?</p>
            </div>
            {/* Service 5 */}
            <div className='grid justify-items-center gap-5'>
                <img src={creative} alt="" />
                <h3 className='text-lg font-bold text-[#ff5443]'>Lorem, ipsum dolor.</h3>
                <p className='text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque consectetur, inventore tempore nihil et cupiditate?</p>
            </div>
            {/* Service 6 */}
            <div className='grid justify-items-center gap-5'>
                <img src={socialized} alt="" />
                <h3 className='text-lg font-bold text-[#ff5443]'>Lorem, ipsum dolor.</h3>
                <p className='text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque consectetur, inventore tempore nihil et cupiditate?</p>
            </div>
        </div>
    );
};

export default Services;