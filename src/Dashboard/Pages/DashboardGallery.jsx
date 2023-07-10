import { useEffect, useState } from "react";
import WelcomeUser from "../components/WelcomeUser";
import { toast } from "react-toastify";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import useGalleryImage from "../../hooks/useGalleryImage";

const DashboardGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [singleImage, setSingleImage] = useState(null)

  // getting all images
  const [allImage, , refetch] = useGalleryImage();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(selectedImage.name.split(".")[0])

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
          // console.log(res)
          const userData = {
            ImageURL: res.data.data.display_url,
            ImageID: res.data.data.id,
            ImageName: selectedImage.name.split(".")[0],
          };

          axios
            .post("https://pinak-server.vercel.app/api/gallery", userData)
            .then((res) => {
              toast.success("Image Upload Successfully.");
              refetch();
            })
            .catch((err) => {
              console.log(err);
              toast.error("Opps! Something Went Wrong. Please Try Again.");
            });
        })
        .catch((err) => console.log(err));

      e.target.imageFile.value = null;
    } else {
      toast.error("Please Select An Image");
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://api.imgbb.com/1/image/${id}?key=${
          import.meta.env.VITE_imgbb_key
        }`
      )
      .then((response) => {
        console.log(response.data);
        // Handle successful deletion
        toast.success("Image Deleted Successfully.");
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  };

  return (
    <div className="h-screen flex-1 pl-7 overflow-x-hidden">
      {/* Modal section to view image */}
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <img src={singleImage} alt="Single Image" />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* Modal section end */}
      <WelcomeUser />
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="font-black text-3xl my-4">Gallery</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload an image</span>
            </label>
            <input
              type="file"
              name="imageFile"
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </div>
          <button className="bg-violet-900 text-white p-2 font-bold m-2">
            Upload
          </button>
        </form>
      </div>
      <h5 className="bg-violet-900 text-white py-2 px-1 rounded font-bold text-2xl mb-4">
        All Images
      </h5>
      {/* All Image Table */}
      <div className="overflow-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allImage.map((image) => {
              return (
                <tr key={image._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={image.ImageURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{image.ImageName}</td>
                  <td>
                    <button
                      className="flex items-center bg-red-500 p-1 rounded text-white font-semibold gap-2"
                      onClick={() => {
                        window.my_modal_2.showModal()
                        setSingleImage(image.ImageURL)
                      }}
                    >
                      View Image
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

export default DashboardGallery;
