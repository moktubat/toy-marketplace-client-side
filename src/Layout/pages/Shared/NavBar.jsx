import logo from "../../../assets/logo2.png";

const NavBar = () => {
  return (
    <div className="bg-[#faba01]">
      <div className="navbar container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
      <div className="flex-1">
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex justify-center space-x-3 lg:justify-start"
        >
          <div className="flex items-center justify-center w-20 h-20">
            <img src={logo} alt="" />
          </div>
          <span className="self-center text-2xl font-semibold">LegoVilla</span>
        </a>
      </div>
      <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-5">
            <a className={({ isActive }) => (isActive ? 'active' : 'default')} >Home</a>
          </li>
          <li className="mr-5">
            <a className={({ isActive }) => (isActive ? 'active' : 'default')} >All Toys</a>
          </li>
          <li className="mr-5">
            <a className={({ isActive }) => (isActive ? 'active' : 'default')} >Blogs</a>
          </li>
          <li className="mr-5">
            <a className={({ isActive }) => (isActive ? 'active' : 'default')} >Login</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
    
  );
};

export default NavBar;
