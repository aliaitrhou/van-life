import { Link, NavLink } from "react-router-dom";
import Emoji from "../assets/vanEmogiImg.png";
import Icon from "../assets/userIcon.png";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header className="sticky top-0  bg-orange-100 shadow-md  p-6 sm:py-8 w-full flex justify-center ">
      <div className="max-w-4xl w-full">
        <nav className="flex flex-row items-center">
          <Link to={"/"} className="mr-auto">
            <div className="relative">
              <img
                className="absolute w-7 h-7 rotate-45 -top-3 -right-4"
                src={Emoji}
              />
              <p className="uppercase font-bold text-black text-xl sm:text-2xl hover:underline">
                #vanlife
              </p>
            </div>
          </Link>
          <div className="flex gap-8">
            <NavLink
              to={"/host"}
              className="hover:underline hover:font-bold hover:text-slate-950 transition duration-700 ease-linear "
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Host
            </NavLink>
            <NavLink
              to={"/about"}
              className="hover:underline hover:font-bold hover:text-slate-950 transition duration-700 ease-linear "
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              About
            </NavLink>
            <NavLink
              to={"/vans"}
              className="hover:underline hover:font-bold hover:text-slate-950 transition duration-700 ease-linear "
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Vans
            </NavLink>
            <NavLink
              to={"/login"}
              className="hover:underline hover:font-bold hover:text-slate-950 transition duration-700 ease-linear "
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              <img src={Icon} />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
