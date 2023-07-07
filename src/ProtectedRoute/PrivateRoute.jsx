
import { Navigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/AppAuthContext";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = useGlobalContext();
  const location = useLocation();
  

  if (loading) {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <HashLoader color="#36d7b7" />
        </div>
    );
  }
  // console.log(user)

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;