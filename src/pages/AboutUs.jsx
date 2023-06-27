import { Helmet } from "react-helmet-async";
import mission from "../assets/images/mission.png";
import story from "../assets/images/story.svg";

const AboutUs = () => {
  return (
    <div className="px-10">
      {/* react helmet async package for seo */}
      <Helmet>
        <title>Pinak Idea Private Ltd. || About Us</title>
      </Helmet>
      {/* Modal */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="border-b border-orange-500">
            <img
              src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Founder"
            />
            <h1 className="font-medium text-xl mt-3">John Doe</h1>
            <p>Founder - XYZ Private Limited</p>
          </div>
          {/* <hr className="text-orange-500" /> */}
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nobis nam possimus animi praesentium blanditiis beatae,
            exercitationem odit hic cum pariatur dolorum at excepturi
            accusantium mollitia optio aliquid nulla repellendus cumque magnam
            aut, quod repudiandae ea laboriosam. Nobis, esse voluptatum.
          </p>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            laboriosam et labore blanditiis magni atque nihil, rerum sed
            reprehenderit esse.
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsam asperiores reprehenderit officia recusandae at? Recusandae
            voluptatum porro inventore! Eos hic ab dolorum mollitia delectus
            corrupti, unde deserunt voluptatum consequatur cum molestias optio
            nihil voluptates aperiam obcaecati repudiandae ea, sapiente
            voluptate aut ratione praesentium culpa dolor, commodi esse!
            Sapiente, dolorem.
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, non itaque modi esse repellat mollitia, ut molestias
            ipsam eius nisi eum perferendis accusamus magni ad quaerat nostrum
            officiis necessitatibus deserunt!
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
            quas!
          </p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
      {/* our mission */}
      <div className="flex items-center gap-10 flex-col sm:flex-row mb-10">
        <div className="w-full sm:w-2/5">
          <img src={mission} alt="mission" />
        </div>
        <div className="w-full sm:w-3/5">
          <h1 className="font-black text-5xl mb-4">Our Mission</h1>
          <p className="text-justify text-gray-400 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            delectus sequi repellat debitis culpa excepturi asperiores illo
            aspernatur perferendis, quas, suscipit quod explicabo quo! Dicta
            voluptas commodi qui optio provident, culpa ad sint ipsam, debitis
            nisi voluptate? Tenetur, quod optio, soluta totam perferendis
            corporis dolore molestias aperiam placeat consequatur quae.
          </p>
        </div>
      </div>
      {/* our story */}
      <div className="flex items-center gap-10 flex-col-reverse sm:flex-row mb-10">
        <div className="w-full sm:w-3/5">
          <h1 className="font-black text-5xl mb-4">Founding Story</h1>
          <p className="text-justify text-gray-400 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam
            ipsam, asperiores sapiente voluptatum, dolorem omnis necessitatibus
            sunt commodi accusamus harum reprehenderit nemo facilis praesentium
            illo nobis, beatae voluptas! Culpa?
          </p>
          <p className="text-justify text-gray-400 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            harum fugit cumque ea aperiam atque blanditiis odit, delectus esse
            ipsum.
          </p>
          <p className="text-justify text-gray-400 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            necessitatibus numquam ex fugiat animi amet, quas ratione possimus
            nam similique soluta quibusdam aut vero magnam consectetur aliquid,
            tenetur temporibus unde voluptas placeat! Debitis, temporibus nemo.
            Natus, cupiditate minus? Nisi, optio.
          </p>
          <p className="text-justify text-gray-400 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quis,
            repellat temporibus laborum quibusdam, sapiente eos eligendi harum,
            inventore excepturi omnis tempora dolor. Eos ea porro deserunt fugit
            illum necessitatibus?
          </p>
        </div>
        <div className="w-full sm:w-2/5">
          <img src={story} alt="mission" />
        </div>
      </div>
      {/* letter from founder */}
      <div className="flex items-center gap-10 flex-col sm:flex-row mb-10">
        <div className="w-full sm:w-2/5">
          <img
            src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="mission"
          />
        </div>
        <div className="w-full sm:w-3/5">
          <h1 className="font-black text-5xl mb-4">
            A letter from our Founder
          </h1>
          <p className="text-justify text-gray-400 text-xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          {/* The button to open modal */}
          <label
            htmlFor="my_modal_6"
            className="bg-orange-500 mt-10 p-2 rounded text-white"
          >
            Read Founder&apos;s Letter
          </label>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
