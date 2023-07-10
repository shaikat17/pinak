import axios from "axios";
import { useEffect, useState } from "react";
import WelcomeUser from "../components/WelcomeUser";
import { HashLoader } from "react-spinners";

const AllUser = () => {
  const [loading, setLoading] = useState(true);
  const [allUser, setAllUser] = useState([]);

  const getAllUser = () => {
    axios("http://localhost:5000/api/user")
      .then((res) => {
        // console.log(res.data)
        setAllUser(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setLoading(true);
    getAllUser()
  }, []);

  const handleStatus = (id, status) => {
    axios
      .patch(
        `http://localhost:5000/api/user-status`,
        { status },
        {
          params: {
            id: id,
          },
        }
      )
      .then((res) => {
        getAllUser()
        // console.log(res)
      })
      .catch((err) => console.log(err));
  };

  //   if (loading) {
  //     return (
  //         <div className="flex items-center justify-center w-screen h-screen">
  //             <HashLoader color="#36d7b7" />
  //         </div>
  //     );
  //   }

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
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((user, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td
                    className={`${
                      user?.status === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {user?.status}
                  </td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleStatus(user._id, "Active")}
                      className={`bg-green-400 rounded p-1 text-white ${user?.status === "Active" ? "bg-gray-400" : ""}`}
                    disabled={user?.status === "Active" ? true : false }>
                      Active
                    </button>
                    <button
                      onClick={() => handleStatus(user._id, "Deactive")}
                      className={`bg-red-400 rounded p-1 text-white ${user?.status === "Active" ? "" : "bg-gray-400"}`}
                      disabled={user?.status === "Active" ? false : true } >
                      Deactive
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

export default AllUser;
