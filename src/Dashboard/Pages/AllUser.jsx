import axios from "axios";
import { useEffect, useState } from "react";
import WelcomeUser from "../components/WelcomeUser";

const AllUser = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/api/user")
      .then((res) => {
        console.log(res.data)
        setAllUser(res.data)
      })
      .catch((err) => console.log(err));
  },[]);
  return (
    <div className="h-screen flex-1 pl-7 overflow-hidden">
      <WelcomeUser />
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
                    <td className={`${user?.status === "Pending" ? "text-red-500" : "text-green-500"}`}>{user?.status}</td>
                    <td className="flex gap-2">
                      <button className="bg-green-400 rounded p-1 text-white">Active</button>
                      <button className="bg-red-400 rounded p-1 text-white">Deactive</button>
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
