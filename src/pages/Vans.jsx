import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((rep) => rep.json())
      .then((data) => setVans(data.vans));
  }, []);

  const getTypeStyle = (type) => {
    if (type === "simple") {
      return "bg-orange-600";
    } else if (type === "rugged") {
      return "bg-green-600";
    } else {
      return "bg-black";
    }
  };

  const vanElements = vans.map((van) => (
    <div key={van.id} className="border border-orange-300 rounded-lg p-4">
      <Link to={`/vans/${van.id}`}>
        <img className="w-96 h-96 rounded-lg" src={van.imageUrl} />
        <div className="mt-4">
          <div className="flex flex-row justify-between items-center ">
            <h2 className="text-lg font-bold">{van.name}</h2>
            <p className="text-light font-bold">
              ${van.price}
              <span className="text-xs">/day</span>
            </p>
          </div>
          <div
            className={
              "w-1/3 text-center text-white mt-2 rounded-lg font-semibold p-2 " +
              getTypeStyle(van.type)
            }
          >
            {van.type}
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <main className="mt-6 w-full flex flex-col items-center">
      <div>
        <div className="mb-4">
          <h1 className="text-2xl font-semibold ">Explore our van options</h1>
        </div>
        <div className="max-w-4xl flex flex-wrap justify-center gap-14 ">
          {vanElements}
        </div>
      </div>
    </main>
  );
};

export default Vans;
