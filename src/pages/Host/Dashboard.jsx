import { useState, useEffect } from "react";

const Dashboard = () => {
  const [vansList, setVansList] = useState();

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansList(data.vans));
  }, []);

  if (!vansList) {
    return <h1>Loading...</h1>;
  }
  const imgUrlList = vansList.map((van) => van.imageUrl);

  return (
    <section className="mt-6">
      <div className="bg-orange-100 p-8 space-y-4">
        <h2 className="font-bold text-3xl text-black">Welcome!</h2>
        <div className="text-sm font-light flex justify-between">
          <p>
            Income last{" "}
            <span className="underline text-black font-medium">30 days</span>
          </p>
          <p>Details</p>
        </div>
        <p className="font-bold text-4xl text-black">$2,260</p>
      </div>
      <div className="text-sm font-light bg-orange-200 p-8 flex justify-between">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl mr-4">Review score</p>{" "}
          <span className="text-orange-400">
            <svg
              className="fill-current mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z" />
            </svg>
          </span>
          <p className="font-bold text-lg">5.0</p>
          <span className="font-light">/5</span>
        </div>
        <p>Details</p>
      </div>
      <div className="bg-orange-300 p-8 space-y-4">
        <div className="flex justify-between">
          <p className="font-semibold text-xl mr-4">Your listed vans</p>
          <p>View all</p>
        </div>
        <div className="space-y-4">
          <div className="p-3 bg-orange-50 rounded flex justify-between items-center">
            <div className="flex flex-row gap-4 items-center">
              <img
                className="w-10 h-10 bg-blue-200"
                src={imgUrlList[Math.floor(Math.random() * 2)]}
              />
              <div>
                <p>Modest Explorer</p>
                <p>
                  $60<span className="font-light text-sm">/day</span>
                </p>
              </div>
            </div>
            <p>Edit</p>
          </div>
          <div className="p-3 bg-orange-50 rounded flex justify-between items-center">
            <div className="flex flex-row gap-4 items-center">
              <img
                className="w-10 h-10 bg-blue-200"
                src={imgUrlList[Math.floor(Math.random() * 3)]}
              />
              <div>
                <p>Beach Bum</p>
                <p>
                  $80<span className="font-light text-sm">/day</span>
                </p>
              </div>
            </div>
            <p>Edit</p>
          </div>
          <div className="p-3 bg-orange-50 rounded flex justify-between items-center">
            <div className="flex flex-row gap-4 items-center">
              <img
                className="w-10 h-10 bg-blue-200"
                src={imgUrlList[Math.floor(Math.random() * 2) + 1]}
              />
              <div>
                <p>Green Wonder</p>
                <p>
                  $70<span className="font-light text-sm">/day</span>
                </p>
              </div>
            </div>
            <p>Edit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
