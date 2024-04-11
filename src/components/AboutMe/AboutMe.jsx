import myPhoto from "../../assets/my-photo2.jpeg";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-12 lg:pt-16"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 border-l-4 border-cyan-600 pl-2 w-max mx-auto">
        About Me
      </h1>
      <div className="flex items-center">
        <div className="w-1/2">
          <img className="mx-auto rounded-full" src={myPhoto} alt="My Photo" />
        </div>
        <div className="w-1/2">
          <p className="text-gray-300">
            Hey there! I&apos;m Imtiaz Ahmed Sakib, a passionate
            frontend-focused MERN stack developer. I have a good knowledge in
            JavaScript, React, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
