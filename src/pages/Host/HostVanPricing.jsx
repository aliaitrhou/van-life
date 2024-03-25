import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="text-xl font-medium">
      <p>
        ${currentVan.price}
        <span className="text-xs font-light">/day</span>
      </p>
    </div>
  );
};

export default HostVanPricing;
