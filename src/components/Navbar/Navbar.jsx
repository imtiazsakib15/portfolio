const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li href="#projects">
        <a>Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="shadow-md">
      <div className="navbar justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between">
          <div>
            <a className="text-xl font-mono">Imtiaz Ahmed Sakib</a>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
