import { Outlet, Link } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="mt-12 border border-red-300 w-1/2 flex justify-start gap-16">
        <Link to={"/host"}>Dashbord</Link>
        <Link to={"/host/income"}>Income</Link>
        <Link to={"/host/reviews"}>Reviews</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default HostLayout;
