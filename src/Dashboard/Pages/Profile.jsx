import useUser from "../../hooks/useUser";
import GeneralInformation from "../components/GeneralInformation";
import UserProfile from "../components/UserProfile";
import WelcomeUser from "../components/WelcomeUser";
import { HashLoader } from "react-spinners";


const Profile = () => {
    const [ , userLoading] = useUser()
    return (
        <div className="h-screen flex-1 pl-7">
        <WelcomeUser />
        {userLoading && <div className="h-full w-full flex items-center justify-center">
        <HashLoader color="#36d7b7" />
      </div> }
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