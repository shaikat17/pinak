import { useGlobalContext } from "../../context/AppAuthContext";


const WelcomeUser = () => {
    const { user } = useGlobalContext()
    return (
        <div className="h-20 bg-violet-900 w-full flex justify-between p-2">
            <h1 className="text-gray-50 font-bold p-5">Welcome back, <span className="text-red-500">{user?.displayName ? user?.displayName : "User"}</span></h1>
            <div className="avatar">
          <div className="w-16 rounded-full border-4 cursor-pointer border-red-500">
            <img src="https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?size=626&ext=jpg&ga=GA1.1.1459026864.1687493706&semt=ais" />
          </div>
        </div>
        </div>
    );
};

export default WelcomeUser;