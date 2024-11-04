import Button from "./UI/Button";
import Logo from "../assets/Logo.png";
import MenuIcon from "../assets/menu.png";

const links = [
  {
    name: "home",
    path: "/#",
  },
  {
    name: "about",
    path: "/#",
  },
  {
    name: "portfolio",
    path: "/#",
  },
  {
    name: "clients",
    path: "/#",
  },
  {
    name: "blog",
    path: "/#",
  },
  {
    name: "contact",
    path: "/#",
  },
];

const Header = () => {
  return (
    <nav className=" static flex justify-between items-center text-center sm:w-[1373px] mx-auto sm:h-[108px] py-[24px] px-[10px]">
      <div className=" flex gap-[60px]">
        <div className=" hidden sm:block">
          <img src={Logo} alt="Header_logo" className="w-[201px] h-[37px]" />
        </div>
        <div className=" hidden sm:flex gap-[40px] items-center">
          {links.map((item, index) => {
            return (
              <li
                key={index}
                className=" text-white cursor-pointer list-none capitalize font-medium"
              >
                {item.name}
              </li>
            );
          })}
        </div>
      </div>
      <div className=" hidden sm:block">
        <Button label="BOOK A TABLE" />
      </div>
      {/* mobile nav */}

      <div className=" w-[390px] h-[77px]  xl:hidden sm:hidden md:hidden">
        <div className="flex justify-between py-[20px] px-[30px] gap-[8px]">
          <div>
            <img src={Logo} alt="logo" className="w-[201px] h-[37px]" />
          </div>
          <div>
            <img src={MenuIcon} className="w-[24px] h-[24px]" alt="menu_icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
