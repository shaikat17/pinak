
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import useUser from "../../hooks/useUser";

const UserProfile = () => {

  const [singleUser] = useUser()
  return (
    <div className="flex flex-col p-5 border shadow-lg">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={singleUser?.photoUrl} />
        </div>
      </div>
      <h3 className="font-black mb-5">{singleUser?.name}</h3>
      <p className="flex items-center gap-3"><FaBriefcase /> {singleUser?.role}</p>
      <p className="flex items-center gap-3"><FaMapMarkerAlt /> {singleUser?.address}</p>

      <p className="text-gray-500 mt-4">Email Address:-</p>
      <p className="font-semibold">{singleUser?.email}</p>

      <p className="text-gray-500 mt-4">Home Address:-</p>
      <p className="font-semibold">92 Miles Drive, Newark, NJ 07103, California,
United States of America</p>

      <p className="text-gray-500 mt-4">Phone Number:-</p>
      <p className="font-semibold">{singleUser?.phone_no}</p>
    </div>
  );
};

export default UserProfile;
