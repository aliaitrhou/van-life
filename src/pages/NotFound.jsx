import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className=" mb-4 w-full flex justify-center items-center"
      style={{ height: "75dvh" }}
    >
      <div className="space-y-8">
        <h1 className="text-center text-transparent bg-clip-text mb-4 text-8xl font-extrabold bg-gradient-to-r from-orange-500 via-orange-200 to-orange-50">
          Oops!
        </h1>
        <div className="text-center flex flex-col gap-3">
          <p className="text-center uppercase text-orange-950 font-bold  ">
            404 - page not found
          </p>
          <p className="text-center w-2/3 text-orange-950 text-sm m-auto ">
            The page you are looking for might have been removed had it's name
            changed or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="bg-black text-white mx-auto rounded-full py-3 px-6 uppercase font-semibold text-xs"
          >
            go to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
