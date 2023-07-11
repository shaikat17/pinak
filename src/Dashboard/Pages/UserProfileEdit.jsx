import { useEffect, useState } from "react";
import WelcomeUser from "../components/WelcomeUser";
import { toast } from "react-toastify";
import axios from "axios";
import { useGlobalContext } from "../../context/AppAuthContext";
import { HashLoader } from "react-spinners";
import useUser from "../../hooks/useUser";

const UserProfileEdit = () => {
  const { user, loading } = useGlobalContext();
  const [selectedImage, setSelectedImage] = useState(null);

  // react query
  const [singleUser, userLoading, refetch] = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phoneNo = e.target.phoneNo.value;
    const address = e.target.address.value;
    const joinDate = e.target.joinDate.value;
    const role = e.target.role.value;
    const birthDate = e.target.birthDate.value;
    const selfDetails = e.target.selfDetails.value;
    const facebook = e.target.facebook.value;
    const linkedIn = e.target.linkedin.value;
    const twitter = e.target.twitter.value;
    const github = e.target.github.value;
    const instra = e.target.instra.value;

    if (
      !name ||
      !email ||
      !phoneNo ||
      !address ||
      !joinDate ||
      !role ||
      !birthDate ||
      !selfDetails
    ) {
      return toast.warning("Please Enter All Required Information.");
    }

    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_imgbb_key
          }`,
          formData
        )
        .then((res) => {
          const userData = {
            name,
            email,
            phone_no: phoneNo,
            address,
            join_date: joinDate,
            role,
            birth_date: birthDate,
            about: selfDetails,
            photoUrl: res.data.data.display_url,
            facebook,
            linkedin: linkedIn,
            twitter,
            github,
            instra,
          };

          axios
            .patch("/api/user", userData, {
              params: {
                email: email,
              },
            })
            .then((res) => {
              // console.log(res)
              refetch();
              toast.success("Details Update Successfully.");
            })
            .catch((err) => {
              console.log(err);
              toast.error("Opps! Something Went Wrong. Please Try Again.");
            });
        })
        .catch((err) => console.log(err));
    } else {
      const userData = {
        name,
        email,
        phone_no: phoneNo,
        address,
        join_date: joinDate,
        role,
        birth_date: birthDate,
        about: selfDetails,
        facebook,
        linkedin: linkedIn,
        twitter,
        github,
        instra,
      };
  
      axios
        .patch("/api/user", userData, {
          params: {
            email: email,
          },
        })
        .then((res) => {
          // console.log(res)
          refetch();
          toast.success("Details Update Successfully.");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Opps! Something Went Wrong. Please Try Again.");
        });
    }
  } 

  if (loading || userLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <HashLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="h-screen flex-1 pl-7 ">
      <WelcomeUser />
      <h1 className="font-black text-3xl my-4">Update User Information</h1>
      <form
        className="grid grid-cols-1 md:grid-cols-2 border p-2 gap-2"
        onSubmit={handleSubmit}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            defaultValue={singleUser?.name}
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your email?</span>
          </label>
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="Enter Your email"
            className="input input-bordered w-full max-w-xs border-violet-900"
            readOnly
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select Your Profile</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your Address?</span>
          </label>
          <input
            type="text"
            name="address"
            defaultValue={singleUser?.address}
            placeholder="Enter Your Address"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your Phone No?</span>
          </label>
          <input
            type="text"
            name="phoneNo"
            defaultValue={singleUser?.phone_no}
            placeholder="Enter Your Phone No"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is Your Join Date?</span>
          </label>
          <input
            type="text"
            name="joinDate"
            defaultValue={singleUser?.join_date}
            placeholder="Enter Your Join Date"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your Role?</span>
          </label>
          <input
            type="text"
            name="role"
            defaultValue={singleUser?.role}
            placeholder="Enter Your Role"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is Your Birth Date?</span>
          </label>
          <input
            type="text"
            name="birthDate"
            defaultValue={singleUser?.birth_date}
            placeholder="Enter Your Birth Date"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write About Yourself.</span>
          </label>
          <textarea
            type="text"
            name="selfDetails"
            defaultValue={singleUser?.about}
            placeholder="Write About Yourself"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is Linked IN Profile URL?</span>
          </label>
          <input
            type="text"
            name="linkedin"
            defaultValue={singleUser?.linkedin}
            placeholder="Enter Your Linked In Profile URL"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is Twitter Profile URL?</span>
          </label>
          <input
            type="text"
            name="twitter"
            defaultValue={singleUser?.twitter}
            placeholder="Enter Your Twitter Profile URL"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is Facebook Profile URL?</span>
          </label>
          <input
            type="text"
            name="facebook"
            defaultValue={singleUser?.facebook}
            placeholder="Enter Your Facebook Profile URL"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is Github Profile URL?</span>
          </label>
          <input
            type="text"
            name="github"
            defaultValue={singleUser?.github}
            placeholder="Enter Your Github Profile URL"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is Instra Profile URL?</span>
          </label>
          <input
            type="text"
            name="instra"
            defaultValue={singleUser?.instra}
            placeholder="Enter Your Instra Profile URL"
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <button className="bg-violet-900 p-2 text-white mt-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserProfileEdit;
