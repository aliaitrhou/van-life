import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  if (!vans) {
    return <h1>Loading...</h1>;
  }

  const vansElements = vans.map((van) => (
    <Link key={van.id} to={`/host/vans/${van.id}`}>
      <div className="bg-orange-100 border p-4 rounded-lg space-x-8 flex flex-row items-center">
        <img className="w-36 h-36 rounded-lg" src={van.imageUrl} />
        <div className="space-y-4">
          <h2 className="font-sans text-black text-2xl font-bold">
            {van.name}
          </h2>
          <p className="font-bold text-lg">
            ${van.price}
            <span className="font-light text-sm">/day</span>
          </p>
        </div>
      </div>
    </Link>
  ));

  return <section className="mt-8 flex flex-col gap-4">{vansElements}</section>;
};

export default HostVans;
