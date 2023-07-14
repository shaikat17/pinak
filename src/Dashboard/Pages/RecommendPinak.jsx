import { useState } from "react";
import WelcomeUser from "../components/WelcomeUser";
import { toast } from "react-toastify";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RecommendPinak = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // axios interceptors
  const [axiosSecure] = useAxiosSecure();

  const clearForm = () => {
    // console.log("hello")
    setName("");
    setProfession("");
    setMessage("");
    setSelectedImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !profession || !message) {
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
            profession,
            message,
            photoUrl: res.data.data.display_url,
          };

          axiosSecure
            .post("/api/testimonial", userData)
            .then((res) => {
              toast.success("Data Created Successfully.");
              clearForm()
            })
            .catch((err) => {
              console.log(err);
              toast.error("Opps! Something Went Wrong. Please Try Again.");
            });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="h-screen flex-1 pl-7 ">
      <WelcomeUser />
      <h1 className="font-black text-3xl my-4">Recommend Pinak</h1>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Profession</span>
          </label>
          <input
            type="text"
            name="profession"
            value={profession}
            placeholder="Enter Your Profession"
            onChange={(e) => setProfession(e.target.value)}
            className="input input-bordered w-full max-w-xs border-violet-900"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Chose Your Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Your Message?</span>
          </label>
          <textarea
            type="text"
            name="message"
            value={message}
            placeholder="Enter Your Message"
            onChange={(e) => setMessage(e.target.value)}
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

export default RecommendPinak;
