import myPhoto from "../../assets/my-photo.png";
const Banner = () => {
  return (
    <div className="bg-banner bg-cover bg-right">
      <div className="max-w-7xl sm:flex sm:justify-between sm:items-center mx-auto px-4 sm:px-6 lg:px-10 py-14">
        <div className="text-center sm:text-left sm:w-7/12">
          <p className="font-semibold text-gray-300">Hi, I am</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-1 text-cyan-300">
            Imtiaz Ahmed Sakib
          </h2>
          <h4 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mt-2">
            Frontend Web Developer
          </h4>
          <button className="text-white font-bold border border-cyan-300 hover:bg-cyan-700 px-6 py-2 mt-6">
            Download Resume
          </button>
        </div>
        <div className="hidden sm:block sm:w-5/12">
          <img className="-mb-14" src={myPhoto} alt="My Photo" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
