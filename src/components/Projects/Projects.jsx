import medCampHub from "../../assets/med-camp-hub.png";
import nexTechy from "../../assets/nexTechy.png";
import electra from "../../assets/electra.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-12 lg:pt-16"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 border-l-4 border-cyan-600 pl-2 w-max mx-auto">
        Projects
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row md:items-center gap-4 p-4">
        <div className="w-full md:w-1/3">
          <img className="w-full aspect-video" src={medCampHub} alt="" />
        </div>
        <div className="w-full md:w-2/3 md:border-l text-gray-300 p-4 space-y-3">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
            MedCamp Hub{" "}
            <span className="font-normal">
              (Medical Camp Management System)
            </span>
          </h2>
          <div>
            <b>Key Features:</b>
            <ol className="list-decimal pl-10">
              <li>Any user can take chat support from the home page.</li>
              <li>A user can see 6 popular camps on the home page.</li>
              <li>
                A participant can join any camp by registering with necessary
                information.
              </li>
            </ol>
          </div>
          <p>
            <b>Technologies used:</b> JavaScript, React, Tailwind CSS, Express
            JS, Mongoose
          </p>
          <div className="sm:space-x-3 space-y-3 sm:space-y-0 w-max flex flex-col sm:flex-row pt-3">
            <a
              href="https://med-camp-hub.web.app"
              className="px-4 py-2 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white rounded-full font-semibold"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/imtiazsakib15/med-camp-hub-client"
              className="px-4 py-2 border-2 border-cyan-600 bg-cyan-600 text-white hover:bg-transparent hover:text-gray-300 rounded-full font-semibold"
            >
              Client Side Code
            </a>
            <a
              href="https://github.com/imtiazsakib15/med-camp-hub-server"
              className="px-4 py-2 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white rounded-full font-semibold"
            >
              Server Side Code
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row md:items-center gap-4 p-4">
        <div className="w-full md:w-1/3">
          <img className="w-full aspect-video" src={nexTechy} alt="" />
        </div>
        <div className="w-full md:w-2/3 md:border-l text-gray-300 p-4 space-y-3">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
            NexTechy <span className="font-normal">(Blogging Website)</span>
          </h2>
          <div>
            <b>Key Features:</b>
            <ol className="list-decimal pl-10">
              <li>A user can search blogs by title, and category.</li>
              <li>
                A user can add a blog to the wishlist for reading in the future.
              </li>
              <li>A user can comment on every blog.</li>
            </ol>
          </div>
          <p>
            <b>Technologies used:</b> JavaScript, React, Tailwind CSS, React
            Hook Form, Express JS, MongoDB
          </p>
          <div className="sm:space-x-3 space-y-3 sm:space-y-0 w-max flex flex-col sm:flex-row pt-3">
            <a
              href="https://nextechy-97707.web.app"
              className="px-4 py-2 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white rounded-full font-semibold"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/imtiazsakib15/nexTechy-client"
              className="px-4 py-2 border-2 border-cyan-600 bg-cyan-600 text-white hover:bg-transparent hover:text-gray-300 rounded-full font-semibold"
            >
              Client Side Code
            </a>
            <a
              href="https://github.com/imtiazsakib15/nexTechy-server"
              className="px-4 py-2 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white rounded-full font-semibold"
            >
              Server Side Code
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row md:items-center gap-4 p-4">
        <div className="w-full md:w-1/3">
          <img className="w-full aspect-video" src={electra} alt="" />
        </div>
        <div className="w-full md:w-2/3 md:border-l text-gray-300 p-4 space-y-3">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
            Electra{" "}
            <span className="font-normal">
              (Electrical Product Selling Website)
            </span>
          </h2>
          <div>
            <b>Key Features:</b>
            <ol className="list-decimal pl-10">
              <li>A user can search blogs by title, and category.</li>
              <li>
                A user can add a blog to the wishlist for reading in the future.
              </li>
              <li>A user can comment on every blog.</li>
            </ol>
          </div>
          <p>
            <b>Technologies used:</b> JavaScript, React, Tailwind CSS, Express
            JS, MongoDB
          </p>
          <div className="sm:space-x-3 space-y-3 sm:space-y-0 w-max flex flex-col sm:flex-row pt-3">
            <a
              href="https://electra-2351c.web.app"
              className="px-4 py-2 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white rounded-full font-semibold"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/imtiazsakib15/electra-client"
              className="px-4 py-2 border-2 border-cyan-600 bg-cyan-600 text-white hover:bg-transparent hover:text-gray-300 rounded-full font-semibold"
            >
              Client Side Code
            </a>
            <a
              href="https://github.com/imtiazsakib15/electra-server"
              className="px-4 py-2 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white rounded-full font-semibold"
            >
              Server Side Code
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Projects;
