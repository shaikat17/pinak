import { Helmet } from "react-helmet-async";
import useGalleryImage from "../hooks/useGalleryImage";

const Gallery = () => {
  const [allImage] = useGalleryImage()

  return (
    <>
    {/* react helmet async package for seo */}
    <Helmet>
    <title>Pinak Idea Private Ltd. || Photo Gallery</title>
  </Helmet>
    <div className=" mx-8 lg:mx-28 my-10 lg:my-20">
        <h1 className="text-center text-4xl font-black">Our Memories</h1>
        <p className="mt-4 tracking-widest mb-10 text-center text-lg">Without memory, there is no healing. ...</p>
        <div className="photos">
      {allImage.map((image) => {
        return (
            <>
            <img key={image._id} src={image.ImageURL} />
            
            </>
        )
      })}
    </div>
    </div>
    </>
  );
};

export default Gallery;
