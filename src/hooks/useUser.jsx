import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context/AppAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const { user, loading } = useGlobalContext();

  // axios interceptors
  const [axiosSecure] = useAxiosSecure()

  const {
    data: singleUser = [],
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleUser"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure("/api/singleUser", {
        params: {
          email: user?.email,
        },
      });
      return res.data;
    },
  });

  return [singleUser, userLoading, refetch];
};

export default useUser;
