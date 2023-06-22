import './IncredibleLayout.css'

const IncredibleLayout = () => {
    return (
        <div className="inc-container bg-white">
            <div className='flex justify-center mt-24'>
            <div className='w-[4px] h-8 rounded-lg bg-slate-300'></div>
            </div>
            <div className='text-center mt-8'>
                <h4 className='text-sm font-bold tracking-widest text-red-500'>THE MOST POWERFUL THEME ON EARTH</h4>
                <h2 className='text-2xl mt-10 leading-10'>Far far away, behind the word mountains, far from the countries Vokalia and<br/>Consonantia, there live the blind texts. Separated they live in Bookmarksgrove<br/>right at the coast.</h2>
                <p className='text-slate-400 mt-8'>We provide complete solutions to our clients so they can focus their core business</p>
            </div>
        </div>
    );
};

export default IncredibleLayout;