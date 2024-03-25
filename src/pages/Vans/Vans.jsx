import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchPrams, setSearchPrams] = useSearchParams();

  useEffect(() => {
    fetch("/api/vans")
      .then((rep) => rep.json())
      .then((data) => setVans(data.vans));
  }, []);

  const getTypeStyle = (type) => {
    if (type === "simple") {
      return "hover:bg-orange-600 hover:text-slate-200 ";
    } else if (type === "rugged") {
      return "hover:bg-green-600 hover:text-slate-200 ";
    } else {
      return "hover:bg-black hover:text-slate-200 ";
    }
  };
  const cardTypeUi = (type) => {
    if (type === "simple") {
      return "bg-orange-600 text-slate-200 ";
    } else if (type === "rugged") {
      return "bg-green-600 text-slate-200 ";
    } else {
      return "bg-black text-slate-200 ";
    }
  };

  const typeFilter = searchPrams.get("type");
  const displayVans = typeFilter
    ? vans.filter((van) => van.type == typeFilter)
    : vans;

  const handleFiltring = (key, value) => {
    setSearchPrams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  const selectedBtnUi = (type) => {
    if (type === "simple") {
      return "bg-orange-600  ";
    } else if (type === "luxury") {
      return "bg-black ";
    } else {
      return "bg-green-600  ";
    }
  };

  const vanElements = displayVans.map((van) => (
    <div key={van.id} className="border border-orange-300 rounded-lg p-4 h-fit">
      <Link to={van.id} state={{ typeParam: `?${searchPrams.toString()}` }}>
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
              "w-24 text-center text-white mt-2 rounded-lg font-medium p-2 " +
              cardTypeUi(van.type)
            }
          >
            {van.type}
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <section className="mb-4">
      <h1 className="text-4xl font-semibold text-slate-800 ">
        Explore our van options
      </h1>
      <div className="space-x-8 py-4 mt-4">
        <button
          onClick={() => handleFiltring("type", "simple")}
          className={`py-2 px-4  ${typeFilter === "simple" ? null : "bg-orange-100"} rounded text-black  font-medium text-sm ${typeFilter === "simple" ? selectedBtnUi("simple") + " text-slate-200" : getTypeStyle("simple")}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFiltring("type", "luxury")}
          className={`py-2 px-4  ${typeFilter === "luxury" ? null : "bg-orange-100"} rounded text-black font-medium text-sm ${typeFilter === "luxury" ? selectedBtnUi("luxury") + " text-slate-200" : getTypeStyle("luxury")}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFiltring("type", "rugged")}
          className={`py-2 px-4 ${typeFilter === "rugged" ? null : "bg-orange-100"} rounded text-black font-medium text-sm ${typeFilter === "rugged" ? selectedBtnUi("rugged") + " text-slate-200" : getTypeStyle("rugged")}`}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className=" py-2 px-4 bg-white rounded font-medium text-sm text-black border underline"
            onClick={() => handleFiltring("type", null)}
          >
            All
          </button>
        )}
      </div>
      <div
        style={{ minHeight: "63dvh" }}
        className="max-w-4xl py-6  flex flex-wrap justify-center gap-14"
      >
        {vanElements}
      </div>
    </section>
  );
};

export default Vans;
