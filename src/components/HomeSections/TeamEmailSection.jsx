import bgImage from "../../assets/shapes/asset 45.jpeg"
import SubscriptionSection from "../SubscriptionSection";
import TeamMemberSlider from "../TeamMemberSlider";

const TeamEmailSection = () => {
    console.log(bgImage)
    return (
        <div style={{backgroundImage: `url('${bgImage}')`}} className="bg-cover flex flex-col items-center justify-center bg-no-repeat bg-center overflow-hidden py-10">
            <div className="text-center">
            <p className="my-4 text-lg text-gray-400 font-semibold uppercase">
        Only professional here
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">Meet The Team</h2>
            </div>
            <TeamMemberSlider />
            <SubscriptionSection />
        </div>
    );
};

export default TeamEmailSection;