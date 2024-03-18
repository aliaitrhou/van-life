import { useParams } from "react-router-dom";

const VansDetail = () => {
  const param = useParams();
  console.log(param);
  return <h1>{param}</h1>;
};

export default VansDetail;
