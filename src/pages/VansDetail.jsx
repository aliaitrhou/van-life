import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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

  return (
    <>
      <div className="mt-16 ">
        {van ? (
          <div className="overflow-hidden rounded-lg max-w-4xl flex justify-center ">
            <div className="mx-6 mt-2 flex flex-col justify-between gap-4">
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
              <p className="font-light text-orange-800">
                The Modest Explorer is a van designed to get you out of the
                house and into nature. This beauty is equipped with solar
                panels, a composting toilet, a water tank and kitchenette. The
                idea is that you can pack up your home and escape for a weekend
                or even longer!
              </p>
              <Link to={"/"}>
                <button className="bg-orange-400 w-1/2 sm:w-full px-1 py-2 sm:py-4 rounded-lg text-white font-bold text-sm sm:text-lg ">
                  Rent this van
                </button>
              </Link>
            </div>
            <img className="w-1/2 h-1/2 rounded-lg " src={van.imageUrl} />
          </div>
        ) : (
          <h1 className="text-4xl">Loading...</h1>
        )}
      </div>
    </>
  );
};

export default VansDetail;
