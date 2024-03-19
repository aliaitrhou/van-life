import { Link } from "react-router-dom";
import Emoji from "../assets/vanEmogiImg.png";

const Header = () => {
  return (
    <header className="sticky top-0  bg-orange-100 shadow-md  p-6 sm:p-8 w-full flex justify-center ">
      <div className="max-w-4xl w-full">
        <nav className="flex flex-row items-center">
          <Link to={"/"} className="mr-auto">
            <div className="relative">
              <img
                className="absolute w-7 h-7 rotate-45 -top-3 -right-4"
                src={Emoji}
              />
              <p className="uppercase font-extrabold text-black text-xl sm:text-2xl hover:underline">
                #vanlife
              </p>
            </div>
          </Link>
          <div className="flex gap-4">
            <Link
              to={"/host"}
              className="hover:underline font-semibold  text-light "
            >
              Host
            </Link>
            <Link
              to={"/about"}
              className="hover:underline font-semibold  text-light "
            >
              About
            </Link>
            <Link
              to={"/vans"}
              className="hover:underline font-semibold  text-light"
            >
              Vans
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
