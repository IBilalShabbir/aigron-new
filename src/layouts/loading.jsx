import React from "react";
import GridLoader from "react-spinners/GridLoader";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <GridLoader color="#4c51c4" loading={true} size={15} />
      <div style={{ marginTop: "1em" }}>Please wait</div>
    </div>
  );
}
