import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  return (
    <div className="loader" >
      <PuffLoader color="red" />
    </div>
  );
};

export default Loader;
