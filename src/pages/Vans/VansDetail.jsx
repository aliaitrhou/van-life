import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VansDetail = () => {
  const [van, setVan] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((rep) => rep.json())
      .then((data) => setVan(data.vans));
  }, [param.id]);

  const getTypeStyle = (type) => {
    if (type === "simple") {
      return "bg-orange-600";
    } else if (type === "rugged") {
      return "bg-green-600";
    } else {
      return "bg-black";
    }
  };
  const location = useLocation();
  const search = location.state?.typeParam || "";
  const type = search.split("type=")[2];
  return (
    <section style={{ height: "90dvh" }} className="mt-8">
      <Link
        to={`..?${search}`}
        relative="path" //relative mean that we want this.
        //the route to be relative to the path not the parent Route
      >
        &#8592;
        <span className="underline text-sm ml-2">
          Back to {type ? type : "all"} vans
        </span>
      </Link>
      <div className="mt-8  p-4 rounded-xl ">
        {van ? (
          <div className="overflow-hidden rounded-lg max-w-4xl  flex flex-col justify-center gap-4 ">
            <div className="order-2 space-y-4  flex flex-col justify-between gap-2">
              <div
                className={
                  "w-1/4 text-center text-white rounded-lg font-light p-2 " +
                  getTypeStyle(van.type)
                }
              >
                {van.type}
              </div>

              <h3 className="text-orange-950 font-semibold text-xl">
                {van.name}
              </h3>
              <div className="font-bold">
                ${van.price}
                <span className="text-xs font-light">/day</span>
              </div>
              <p className="font-light text-orange-800">{van.description}</p>
              <Link to={"/"}>
                <button className="bg-orange-400 w-1/2 sm:w-full px-1 py-2 sm:py-4 rounded-lg text-white font-bold text-sm sm:text-lg ">
                  Rent this van
                </button>
              </Link>
            </div>
            <img className="w-2/3 h-96 rounded-lg " src={van.imageUrl} />
          </div>
        ) : (
          <h1 className="text-4xl">Loading...</h1>
        )}
      </div>
    </section>
  );
};

export default VansDetail;
