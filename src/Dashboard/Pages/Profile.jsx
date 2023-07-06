import GeneralInformation from "../components/GeneralInformation";
import UserProfile from "../components/UserProfile";
import WelcomeUser from "../components/WelcomeUser";


const Profile = () => {
    return (
        <div className="h-screen flex-1 pl-7">
        <WelcomeUser />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="grid grid-cols-1">
        <UserProfile />
        </div>
        <div className="grid grid-cols-1">
            <GeneralInformation />
        </div>
      </div>
      </div>
    );
};

export default Profile;