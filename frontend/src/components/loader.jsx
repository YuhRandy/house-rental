import React from "react";
import { SyncLoader } from "react-spinners";

const loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SyncLoader color="#15803d" size={15} />
    </div>
  );
};

export default loader;
