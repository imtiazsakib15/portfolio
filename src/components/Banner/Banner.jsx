import myPhoto from "../../assets/my-photo.png";
import { FiDownload, FiMail } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative group w-full h-full mx-auto lg:mx-0">
        <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] opacity-20"></div>

        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 to-transparent opacity-30 animate-pulse"></div>

        <div className="relative z-10 p-8 bg-[#002240]/90 backdrop-blur-lg overflow-hidden">
          <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] opacity-20 group-hover:animate-grid-glitch"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 relative">
                <div className="pl-8 border-l-4 border-cyan-400">
                  <p className="text-cyan-400 font-mono text-lg mb-2">
                    Full Stack Developer
                  </p>
                  <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    Md. Imtiaz Ahmed
                    <br />
                    <span className="text-cyan-400">Sakib</span>
                  </h1>
                </div>

                <p className="text-gray-300 text-lg max-w-xl">
                  Crafting full-stack solutions with modern web technologies.
                  Specializing in responsive interfaces and scalable backend
                  systems.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://drive.google.com/file/d/1kRO5PARCuYSiEHVto6Vza1Fne4IHU_Dd/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all font-medium bg-cyan-600 text-white hover:bg-cyan-700"
                  >
                    <FiDownload /> Get Resume
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all font-medium border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600/10"
                  >
                    <FiMail /> Hire Me
                  </a>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/30 hover:border-cyan-400/50 transition-all">
                    <img
                      src={myPhoto}
                      alt="Imtiaz Ahmed Sakib"
                      className="w-full h-full -ml-1 transform scale-[140%] group-hover:scale-[144%] transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
