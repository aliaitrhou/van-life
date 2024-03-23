import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="space-y-3 font-light text-orange-950">
      <p>
        <span className="font-bold text-md capitalize text-black mr-2">
          name:
        </span>
        {currentVan.name}
      </p>
      <p>
        <span className="font-bold text-md capitalize text-black mr-2">
          type:
        </span>
        {currentVan.type}
      </p>
      <p>
        <span className="font-bold text-md capitalize text-black mr-2">
          description:
        </span>
        {currentVan.description}
      </p>
      <p>
        <span className="font-bold text-md capitalize text-black mr-2">
          visibility:
        </span>
        Public
      </p>
    </div>
  );
};

export default HostVanInfo;
