import { useEffect, useState } from "react";
import WelcomeUser from "../components/WelcomeUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import { HashLoader } from "react-spinners";

const AllRecommends = () => {
    const [loading, setLoading] = useState(true);
  const [AllRecommends, setAllRecommends] = useState([]);
  const [axiosSecure] = useAxiosSecure()

  const getAllRecommends = () => {
    axios("https://pinak-server.vercel.app/api/testimonial")
      .then((res) => {
        // console.log(res.data)
        setAllRecommends(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setLoading(true);
    getAllRecommends()
  }, []);


  return (
    <div className="h-screen flex-1 pl-7 overflow-x-hidden">
      <WelcomeUser />
      {loading && (
        <div className="h-full w-full flex items-center justify-center">
          <HashLoader color="#36d7b7" />
        </div>
      )}
      <div className="overflow-x-scroll">
        <table className="table overflow-x-auto">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Profession</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {AllRecommends.map((recommend, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={recommend?.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{recommend?.name}</td>
                  <td>{recommend?.profession}</td>
                  <td>{recommend?.message}</td>
                  <td
                    className={`${
                      recommend?.action === "Approve"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {recommend?.action}
                  </td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleStatus(recommend._id, "Approve")}
                      className={`bg-green-400 rounded p-1 text-white ${recommend?.action === "Approve" ? "bg-gray-400" : ""}`}
                    disabled={recommend?.action === "Approve" ? true : false }>
                      Approve
                    </button>
                    <button
                      onClick={() => handleStatus(recommend._id, "Reject")}
                      className={`bg-red-400 rounded p-1 text-white ${recommend?.action === "Approve" ? "" : "bg-gray-400"}`}
                      disabled={recommend?.action === "Approve" ? false : true } >
                      Reject
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default AllRecommends;
