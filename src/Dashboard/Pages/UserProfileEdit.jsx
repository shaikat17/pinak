import { useState } from "react";
import WelcomeUser from "../components/WelcomeUser";
import { toast } from "react-toastify";
import axios from "axios";

const UserProfileEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [role, setRole] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [selfDetails, setSelfDetails] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instra, setInstra] = useState("");
  const [facebook, setFacebook] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(name,
    //   email,
    //   phoneNo,
    //   address,
    //   joinDate,
    //   role,
    //   birthDate,
    //   selfDetails,
    //   photoUrl,
    //   facebook,
    //   linkedIn,
    //   twitter,
    //   github,
    //   instra,)

    if (
      !name ||
      !email ||
      !phoneNo ||
      !address ||
      !joinDate ||
      !role ||
      !birthDate ||
      !selfDetails ||
      !photoUrl
    ) {
      return toast.warning("Please Enter All Required Information.");
    }

    const userData = {
      name,
      email,
      phone_no: phoneNo,
      address,
      join_date: joinDate,
      role,
      birth_date: birthDate,
      about: selfDetails,
      photoUrl,
      facebook,
      linkedIn,
      twitter,
      github,
      instra,
    };

    axios
      .post("https://pinak-server.vercel.app/api/user", userData)
      .then((res) => {
        console.log(res)
        toast.success("Details Update Successfully.")
      })
      .catch((err) => {
        console.log(err)
        toast.error("Opps! Something Went Wrong. Please Try Again.")
      });
  };

  return (
    <div className="h-screen flex-1 pl-7 ">
      <WelcomeUser />
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
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
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
            defaultValue={email}
            placeholder="Enter Your email"
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your Photo URL?</span>
          </label>
          <input
            type="text"
            name="photoUrl"
            defaultValue={photoUrl}
            placeholder="Enter Your Photo url"
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your Address?</span>
          </label>
          <input
            type="text"
            name="address"
            defaultValue={address}
            onChange={(e) => setAddress(e.target.value)}
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
            defaultValue={phoneNo}
            placeholder="Enter Your Phone No"
            onChange={(e) => setPhoneNo(e.target.value)}
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
            defaultValue={joinDate}
            placeholder="Enter Your Join Date"
            onChange={(e) => setJoinDate(e.target.value)}
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
            defaultValue={role}
            placeholder="Enter Your Role"
            onChange={(e) => setRole(e.target.value)}
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
            defaultValue={birthDate}
            placeholder="Enter Your Birth Date"
            onChange={(e) => setBirthDate(e.target.value)}
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write About Yourself.</span>
          </label>
          <input
            type="text"
            name="selfDetails"
            defaultValue={selfDetails}
            placeholder="Write About Yourself"
            onChange={(e) => setSelfDetails(e.target.value)}
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
            defaultValue={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
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
            defaultValue={twitter}
            onChange={(e) => setTwitter(e.target.value)}
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
            defaultValue={facebook}
            onChange={(e) => setFacebook(e.target.value)}
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
            defaultValue={github}
            onChange={(e) => setGithub(e.target.value)}
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
            defaultValue={instra}
            placeholder="Enter Your Instra Profile URL"
            onChange={(e) => setInstra(e.target.value)}
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
