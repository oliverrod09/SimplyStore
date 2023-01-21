import React from "react";
import { GeneralContext } from "../context/GeneralContext";
import { useContext, useState } from "react";
import { ProductCart } from "../components/ProductCart";
import { Link } from "react-router-dom";

export function Cart() {
  const { ProductC, cart, setCart, Vaciar } = useContext(GeneralContext);
  const [compra, setCompra] = useState(false);
  return (
    <>
      <div className="min-h-screen w-full relative">
        <a
          className="block bg-red-500 w-10 h-10 rounded-full absolute left-4 top-4 cursor-pointer bg-[url('/regresar.png')] bg-cover bg-no-repeat bg-center"
          onClick={() => (cart ? setCart(false) : setCart(true))}
        ></a>
        <h1 className="h1 text-4xl py-4 w-max mx-auto">
          Carrito{" "}
          <i className="inline-block w-12 h-8 bg-[url('/comercio.png')] bg-contain bg-no-repeat bg-center"></i>
        </h1>
        <div className="w-full grid justify-center gap-y-5 py-6 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
          {ProductC.map((p, key) => (
            <ProductCart key={key} p={p}></ProductCart>
          ))}
        </div>
        <div className="w-full flex justify-center">
          {ProductC.length > 0 ? (
            <a
              href="#"
              className="bg-lime-500 py-4 px-6 rounded-xl text-lg hover:bg-lime-400"
              onClick={() => (Vaciar(), setCompra(true))}
            >
              Realizar compra
            </a>
          ) : (
            <p className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:text-5xl">Aun no hay productos en su carrito</p>
          )}
        </div>
        {compra ? (
          <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-70">
            <div className="relative bg-white w-full h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 md:max-w-xl md:rounded-xl">
              <a href="#" className="block bg-red-500 w-10 h-10 rounded-full absolute left-4 top-4 cursor-pointer bg-[url('/regresar.png')] bg-cover bg-no-repeat bg-center" onClick={()=>(setCompra(false))}></a>
              <figure className="w-full h-60">
                <img src="/ready.png" alt="" className="h-full w-full object-contain" />
              </figure>
              <p className="text-center text-xl">Compra Realizada</p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}
