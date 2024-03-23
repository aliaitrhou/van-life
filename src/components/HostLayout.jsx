import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <div style={{ height: "77dvh" }} className="w-full">
        <nav className="py-4 flex justify-start gap-16">
          <NavLink
            to={"/host"}
            end // we use end keyword end={true} to say that we dont want to match this route we the other route is active
            className=" hover:underline hover:font-bold"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Dashbord
          </NavLink>
          <NavLink
            to={"/host/income"}
            className="hover:underline hover:font-bold"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Income
          </NavLink>
          <NavLink
            to={"/host/vans"}
            className="hover:underline hover:font-bold"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Vans
          </NavLink>
          <NavLink
            to={"/host/reviews"}
            className="hover:underline hover:font-bold"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Reviews
          </NavLink>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default HostLayout;
