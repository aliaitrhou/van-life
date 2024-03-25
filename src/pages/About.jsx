import aboutBg from "../assets/NatureImg2.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <img src={aboutBg} />
      <div className="py-12 px-8 sm:px-0">
        <p className="text-4xl w-3/4 font-semibold text-orange-900">
          Don’t squeeze in a sedan when you could relax in a van.
        </p>
        <p className="mt-12 text-sm sm:text-lg font-light text-orange-900">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>

        <p className="mt-6 text-sm sm:text-lg font-light text-orange-900">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="mt-12 p-8 w-1/2 rounded-lg bg-orange-300 text-2xl font-sans font-bold ">
          <p>Your destination is waiting. Your van is ready.</p>
          <Link to={"/vans"}>
            <button className="bg-slate-900 w-1/2 sm:w-full px-1 py-2 sm:py-4 rounded-lg mt-8 text-white font-bold text-sm sm:text-lg ">
              Explore our vans
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
