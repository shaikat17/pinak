import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGalleryImage = () => {

  const {
    data: allImage = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allImage"],
    queryFn: async () => {
      const res = await axios("/api/gallery");
      return res.data;
    },
  });

  return [allImage, loading, refetch];
};

export default useGalleryImage;
