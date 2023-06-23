import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const RecentWorks = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className="mx-8 lg:mx-28">
            <div>
            <h4 style={{letterSpacing: '0.2rem'}} className='text-sm font-bold text-slate-300'>Lorem ipsum dolor sit.3</h4>
                <h1 className="text-3xl lg:text-5xl font-bold mt-3">Recent Works</h1>
            </div>

            {/* Scroll Counters */}
            <ScrollTrigger onEnter={()=>setCounterOn(true)}>
        <div className="flex justify-around my-28 text-center">
        <div className='flex gap-1 md:gap-3 lg:gap-5 items-center'>
                <div>
                    {
                        counterOn &&
                        <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-[#ff5443]'><CountUp start={0} end={99} duration={2} delay={0} />%</h2>
                    }
                    <p className='text-xs md:text-sm lg:text-lg mt-5 text-slate-500'>Lorem, ipsum dolor.</p>
                </div>
                
        </div>
        <div className='flex gap-1 md:gap-3 lg:gap-5 items-center'>
                <div>
                    {
                        counterOn &&
                        <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-[#ff5443]'><CountUp start={0} end={342} duration={2} delay={0} />+</h2>
                    }
                    <p className='text-xs md:text-sm lg:text-lg mt-5 text-slate-500'>Lorem, ipsum dolor.</p>
                </div>
            </div>
            <div className='flex gap-1 md:gap-3 lg:gap-5 items-center'>
                <div>
                    {
                        counterOn &&
                        <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-[#ff5443]'><CountUp start={0} end={24} duration={2} delay={0} />+</h2>
                    }
                    <p className='text-xs md:text-sm lg:text-lg mt-5 text-slate-500'>Lorem, ipsum dolor.</p>
                </div>
            </div>
            <div className='flex gap-1 md:gap-3 lg:gap-5 items-center'>
                <div>
                    {
                        counterOn &&
                        <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-[#ff5443]'><CountUp start={0} end={22} duration={2} delay={0} />+</h2>
                    }
                    <p className='text-xs md:text-sm lg:text-lg mt-5 text-slate-500'>Lorem, ipsum dolor.</p>
                </div>
            </div>
        </div>
      </ScrollTrigger>
        </div>
    );
};

export default RecentWorks;