import TechnologyIcon from '../../assets/icons/asset 6.png';
import CodingIcon from '../../assets/icons/asset 7.png';
import OptionsIcon from '../../assets/icons/asset 8.png';

const BannerCards = () => {
    return (
        <div className="flex justify-center px-28">
            <div className=" bg-white shadow-xl">
  <div className="p-12">
        <img src={TechnologyIcon} alt="" />
    <h2 className="text-xl text-black font-bold my-5">New Technology</h2>
    <p>Bring your website to he ntext level with Infinite. One of the most powerful WordPress Theme on earth!</p>
  </div>
</div>

<div className=" bg-white shadow-xl">
  <div className="p-12">
        <img src={CodingIcon} alt="" />
    <h2 className="text-xl text-black font-bold my-5">High Standard Coding</h2>
    <p>Bring your website to he ntext level with Infinite. One of the most powerful WordPress Theme on earth!</p>
  </div>
</div>

<div className=" bg-white shadow-xl">
  <div className="p-12">
        <img src={OptionsIcon} alt="" />
    <h2 className="text-xl text-black font-bold my-5">Full of Options</h2>
    <p>Bring your website to he ntext level with Infinite. One of the most powerful WordPress Theme on earth!</p>
  </div>
</div>

        </div>
    );
};

export default BannerCards;