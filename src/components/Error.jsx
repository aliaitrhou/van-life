import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <section
      style={{ height: "77dvh" }}
      className="flex justify-center items-cetner"
    >
      <div>
        <h1 className="text-xl">
          Error! :{" "}
          <span className="font-bold text-lg text-red-700">
            {error.message}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Error;
