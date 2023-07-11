import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context/AppAuthContext";

const useUser = () => {
  const { user, loading } = useGlobalContext();

  const {
    data: singleUser = [],
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleUser"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios("/api/singleuser", {
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
