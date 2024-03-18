import bgImg from "../assets/NatureImg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <img className="bg-cover bg-center" src={bgImg} />
      <div className="relative font-sans px-4 sm:px-4 md:px-0 ">
        <p className="absolute left-4 sm:left-8 -top-36 sm:-top-48 text-white sm:text-4xl text-2xl font-bold">
          You got the travel plans, we{" "}
          <span className="block"> got the travel vans. </span>
        </p>
        <p className="mt-16 text-sm sm:text-lg font-light text-orange-900">
          It&apos;s time to add adventure to your life. Rent the perfect van to
          make your perfect road trip.
        </p>
        <p className="mt-4 text-sm sm:text-lg font-light text-orange-900">
          Elevate your life&apos;s journey by embracing the exhilarating
          #VanLife movement! Experience the freedom of the open road as you
          embark on an unforgettable adventure. Picture yourself behind the
          wheel of a meticulously crafted van, your ticket to endless
          exploration and boundless possibilities.
        </p>

        <Link to={"/about"}>
          <button className="bg-orange-400 w-1/2 sm:w-full px-1 py-2 sm:py-4 rounded-lg mt-8 sm:mt-16 text-black font-bold text-sm sm:text-lg ">
            Find your van
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
