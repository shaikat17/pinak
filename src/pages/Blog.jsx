import { Helmet } from "react-helmet-async";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime, itaque labore fugit nam debitis...",
      date: "June 17, 2023",
      author: "Jhon Doe",
      postImage:
        "https://img.freepik.com/free-photo/breathtaking-shot-sunset-along-street-middle-modern-city_181624-10919.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime, itaque labore fugit nam debitis...",
      date: "March 17, 2023",
      author: "Allie Grater",
      postImage:
        "https://img.freepik.com/free-photo/businessman-working-laptop_23-2147839979.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime, itaque labore fugit nam debitis...",
      date: "June 17, 2023",
      author: "Jhon Doe",
      postImage:
        "https://img.freepik.com/free-photo/businesspeople-working-laptop-office_1098-1672.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
    },
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime, itaque labore fugit nam debitis...",
        date: "June 17, 2023",
        author: "Jhon Doe",
        postImage:
          "https://img.freepik.com/free-photo/four-friends-have-rest-forest_1157-24370.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
      },
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime, itaque labore fugit nam debitis...",
        date: "july 17, 2022",
        author: "Olive Yew",
        postImage:
          "https://img.freepik.com/free-photo/choosing-right-strategy_1098-1823.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
      },
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime, itaque labore fugit nam debitis...",
        date: "August 17, 2022",
        author: "Teri Dactyl",
        postImage:
          "https://img.freepik.com/free-photo/business-hands-joined-together-teamwork_53876-30575.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais",
      },
  ];
  return (
    <>
    {/* react helmet async package for seo */}
    <Helmet>
        <title>Pinak Idea Private Ltd. || Blog</title>
      </Helmet>
    <div className="flex flex-col py-10 px-10">
      <div className="">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">
          <span className="border-b-2 border-orange-500">Our Blog Posts</span>
        </h2>
        {/* News section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
          {blogPosts.map((blog) => {
            return (
              <>
                <div className="card card-compact bg-base-100 shadow-xl rounded">
                  <figure className="overflow-hidden relative">
                    <img
                      className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50"
                      src={blog.postImage}
                      alt={blog.title}
                    />
                    <p className="absolute bg-orange-500 z-30 left-3 px-4 py-2 rounded bottom-2 text-white font-medium">{blog.author}</p>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p className="text-gray-500 text-base">
                      {blog.content}
                    </p>
                    <p className="flex items-center gap-3 text-orange-500 mt-4 align-middle text-lg">Read More <FaArrowRight /> </p>
                    <p className="text-gray-500 mt-5 pb-10">
                      {blog.date}
                    </p>
                  </div>
                  
                </div>
              </>
            );
          })}
        </div>
        <div className="join grid grid-cols-2 w-80 mx-auto mt-4">
  <button className="join-item btn btn-outline hover:bg-orange-500">Previous</button>
  <button className="join-item btn btn-outline hover:bg-orange-500">Next</button>
</div>
      </div>
    </div>
    </>
  );
};

export default Blog;
