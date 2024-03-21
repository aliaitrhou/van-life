import { Outlet, Link } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <div style={{ height: "77dvh" }} className="w-full ">
        <nav className="py-4 flex justify-start gap-16">
          <Link className="hover:underline hover:font-bold" to={"/host"}>
            Dashbord
          </Link>
          <Link className="hover:underline hover:font-bold" to={"/host/income"}>
            Income
          </Link>
          <Link
            className="hover:underline hover:font-bold"
            to={"/host/reviews"}
          >
            Reviews
          </Link>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default HostLayout;
