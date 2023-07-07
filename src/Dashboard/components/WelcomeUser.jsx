import { useEffect } from "react";
import { useGlobalContext } from "../../context/AppAuthContext";
import useUser from "../../hooks/useUser";


const WelcomeUser = () => {
    const { user } = useGlobalContext()
    const [singleUser] = useUser()

    return (
        <div className="h-32 bg-violet-900 w-full flex items-center justify-between p-2">
            <h1 className="text-gray-50 font-bold p-5">Welcome back, <span className="text-red-500">{singleUser?.name ? singleUser?.name : "User"}</span></h1>
            <div className="avatar">
          <div className="w-16 rounded-full border-4 cursor-pointer border-red-500">
            <img src={singleUser?.photoUrl} />
          </div>
        </div>
        </div>
    );
};

export default WelcomeUser;