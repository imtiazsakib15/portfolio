const Footer = () => {
  return (
    <>
      <p className="text-center text-gray-300 font-medium text-sm sm:text-base py-6 sm:py-8">
        &copy; {new Date().getFullYear()}{" "}
        <span className="underline">Imtiaz Ahmed Sakib</span>. All Rights
        Reserved.
      </p>
    </>
  );
};

export default Footer;
