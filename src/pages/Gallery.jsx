import { Helmet } from "react-helmet-async";

const Gallery = () => {
  // Sample image data with different heights and widths
  const images = [
    "https://img.freepik.com/free-photo/girl-taking-photo-her-friends-group-young-friends-hiking-through-forest-travel-hiking-adventure-concept_613910-18280.jpg?size=626&ext=jpg&ga=GA1.1.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/three-backpackers-forest-view-from-back_23-2147635486.jpg?size=626&ext=jpg&ga=GA1.1.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/young-friends-with-backpacks-enjoying-view-traveling-canyon_176420-4519.jpg?size=626&ext=jpg&ga=GA1.1.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/travel-hiking-adventure-concept-back-view-young-friends-hugging-together-looking-lake-beautiful-autumn-forest_613910-5582.jpg?size=626&ext=jpg&ga=GA1.1.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/countryside-girl-voyage-leisure-road-together_1253-1037.jpg?size=626&ext=jpg&ga=GA1.1.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/girl-taking-photo-her-friends-group-young-friends-hiking-through-forest-travel-hiking-adventure-concept_613910-18677.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/full-shot-people-wearing-backpacks_23-2149026922.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/camera-is-essential-while-touring_329181-8493.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/back-view-couple-traveling-together_23-2150510180.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/photographing-nature_1098-19653.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/man-holding-map-guiding-his-friends-road-trip_23-2147874603.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/group-happy-friends-looking-cellphone_23-2147950643.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/three-friends-walking-through-forest_23-2147635424.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    "https://img.freepik.com/free-photo/adventure-travel-tourism-hike-people-concept-group-smiling-friends-forest_1157-44345.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais"
    // Add more images as needed
  ];

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
      {images.map((image, index) => {
        return (
            <>
            <img src={image} key={index} />
            
            </>
        )
      })}
    </div>
    </div>
    </>
  );
};

export default Gallery;
