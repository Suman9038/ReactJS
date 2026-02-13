import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/NotFound.css";

const NotFound = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!overlayRef.current) return;
      
      const { clientX: x, clientY: y } = e;
      const mask = `radial-gradient(circle 120px at ${x}px ${y}px, transparent 0%, black 150px)`;
      
      overlayRef.current.style.maskImage = mask;
      overlayRef.current.style.webkitMaskImage = mask;
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Cleanup listener when the component is destroyed
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

    let navigate = useNavigate()

  return (
    <div className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
      {/* Content behind the darkness */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* <h1 className="text-9xl font-bold mb-4">404</h1> */}
        <p className="text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <button
          onClick={()=>{
            navigate("/")
          }}
          to="/"
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer active:scale-95"
        >
          Go Home
        </button>
      </div>

      {/* The Flashlight Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-20 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)'
        }}
      ></div>
    </div>
  );
};

export default NotFound;