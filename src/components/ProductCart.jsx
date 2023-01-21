import React from "react";
import { Link } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";
import { useContext } from "react";

export function ProductCart({ p }) {
  const {setCart} = useContext(GeneralContext)
  return (
    <>
      <Link to={"/products/details/"+p.id} onClick={()=>(
        setCart(false)
      )}>
        <div className="max-w-md w-full h-14 flex rounded-xl overflow-hidden md:max-w-lg mx-auto md:h-32 xl:max-w-2xl">
          <figure className="w-36 h-full bg-white">
            <img
              src={p.image}
              alt=""
              className="h-full w-full object-contain"
            />
          </figure>
          <div className="w-full h-full bg-indigo-900">
            <h2 className="text-white font-semibold h-6 overflow-hidden ml-2">
              {p.title}
            </h2>
            <p className="h-6 overflow-hidden ml-2 font-light italic md:h-24">
              {p.description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
