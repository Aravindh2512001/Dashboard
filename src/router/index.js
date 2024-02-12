import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";



const App = () => {

    const [shouldRenderRoutes, setShouldRenderRoutes] = useState(true);
    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        setShouldRenderRoutes(screenWidth >= 900);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <Router>
    {shouldRenderRoutes ? (
      <Routes />
    ) : (
      <div>
        <div className="flex h-screen flex-col justify-center items-center overflow-y-hidden">
          <p className="text-base text-center pt-8 px-5 font-bold">
            Please note that this website is best viewed on a desktop or
            laptop for an optimal experience. Kindly continue with a desktop
            or laptop
          </p>
          <img
            src={`https://img.freepik.com/free-photo/flat-lay-desk-concept-with-copyspace_23-2148111363.jpg?w=1060&t=st=1707716827~exp=1707717427~hmac=2d8cd658a1ae945008e34071e4c258c2f56597c380443b180cc7bc3510cb2d3b`}
            alt="Only Desktop View "
            className="w-full mix-blend-multiply"
          />
        </div>
      </div>
    )}
  </Router>
  )
}

export default App
