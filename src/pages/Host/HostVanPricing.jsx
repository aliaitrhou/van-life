import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const HostVanPricing = () => {
  let externalImg;

  useEffect(() => {
    fetch(
      "https://images.unsplash.com/photo-1533745894801-062ca8abd594?q=80&w=3426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    )
      .then((res) => res.json())
      .then((data) => (externalImg = data));
  }, []);

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
