import { Spin } from "antd";
import React from "react";

function Loader() {
  return (
    <div className="h-screen w-full grid place-content-center">
      <Spin size="large" />
    </div>
  );
}

export default Loader;
