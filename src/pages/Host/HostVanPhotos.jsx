import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="">
      <img className="w-20 h-20 rounded" src={currentVan.imageUrl} />
    </div>
  );
};

export default HostVanPhotos;
