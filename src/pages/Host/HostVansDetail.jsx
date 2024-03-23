import { useState, useEffect } from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";

const HostVanstDetail = () => {
  const param = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  const getTypeStyle = (type) => {
    if (type === "simple") {
      return "bg-orange-600";
    } else if (type === "rugged") {
      return "bg-green-600";
    } else {
      return "bg-black";
    }
  };

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [param.id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="mt-8" key={currentVan.id}>
      <Link
        to=".."
        relative="path" //relative mean that we want this.
        //the route to be relative to the path not the parent Route
      >
        &#8592;
        <span className="underline text-sm ml-2">Back to all vans</span>
      </Link>
      <div className="bg-orange-100 rounded-md p-8 mt-8 space-y-8">
        <div className="flex flex-row items-center gap-8">
          <img src={currentVan.imageUrl} className="w-44 h-44 rounded-full" />
          <div className="space-y-4 ">
            <p
              className={
                "w-20 text-center text-sm text-white mt-2 rounded-lg font-medium p-2 " +
                getTypeStyle(currentVan.type)
              }
            >
              {currentVan.type}
            </p>
            <h2 className="font-sans text-black text-2xl font-bold">
              {currentVan.name}
            </h2>
            <p className="font-bold text-lg">
              ${currentVan.price}
              <span className="font-light text-sm">/day</span>
            </p>
          </div>
        </div>

        <nav className="space-x-8">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanstDetail;
