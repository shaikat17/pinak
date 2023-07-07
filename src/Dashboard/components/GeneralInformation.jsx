import useUser from "../../hooks/useUser";

const GeneralInformation = () => {

  const [singleUser] = useUser()
  return (
    <div className="flex flex-col border shadow-lg p-2">
      <h1 className="font-black text-xl mb-3">General Information</h1>
      <div>
        <h1 className="font-bold my-3">About Me</h1>
        <p>
          {singleUser?.about}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="text-gray-500 mt-4">Education:-</p>
          <p className="font-medium">Thomas Jeff High School, Stanford University</p>
        </div>
        <div>
          <p className="text-gray-500 mt-4">Work History:-</p>
          <p className="font-medium">Twitch, Google, Apple</p>
        </div>
        <div>
          <p className="text-gray-500 mt-4">Join Date:-</p>
          <p className="font-medium">{singleUser?.join_date}</p>
        </div>
        <div>
          <p className="text-gray-500 mt-4">Languages:-</p>
          <p className="font-medium">English, German, Italian, Spanish</p>
        </div>
        <div>
          <p className="text-gray-500 mt-4">Organization:-</p>
          <p className="font-medium">Themesberg LLC</p>
        </div>
        <div>
          <p className="text-gray-500 mt-4">Role:-</p>
          <p className="font-medium">Graphic Designer</p>
        </div>
        <div>
          <p className="text-gray-500 mt-4">Department:-</p>
          <p className="font-medium">Marketing</p>
        </div>
        <div>
          <p className="text-gray-500 mt-4">Birthday:-</p>
          <p className="font-medium">{singleUser?.birth_date}</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
