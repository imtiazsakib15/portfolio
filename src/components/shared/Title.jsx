// eslint-disable-next-line react/prop-types
const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
        <span className="relative before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:w-3/4 before:h-1 before:bg-cyan-400">
          {title}
        </span>
      </h2>
      <p className="text-cyan-100 max-w-2xl mx-auto text-lg mt-1.5">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
