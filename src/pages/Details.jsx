import React from "react";
import { useEffect, useContext, useState } from "react";
import { ProductId } from "../data/products";
import { useParams } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Cart } from "../components/Cart";

export function Details() {
  const { productId } = useParams();
  const [details, setDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { addCart, cart } = useContext(GeneralContext);

  useEffect(() => {
    setIsLoading(true);
    ProductId(productId).then((result) => {
      setDetails(result);
      setIsLoading(false);
    });
  }, [productId]);

  // console.log(details.rating.rate)
  return (
    <>
    {isLoading ? (
      <Loading/>
    ):(
      cart ?(
        <Cart></Cart>
      ):(
        <div className="md:flex min-h-screen md:items-center relative">
        <Link to={"/products"} className="block bg-red-500 w-10 h-10 rounded-full absolute left-4 top-4 bg-[url('/regresar.png')] bg-cover bg-no-repeat bg-center">
        </Link>
        <div className="h-full md:min-h-72 md:max-h-96 md:h-screen w-full md:flex">
          <figure className="w-full h-full bg-white md:w-1/2">
            <img
              src={details.image}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="bg-indigo-900 md:min-h-96 md:w-1/2 relative">
            <h1 className="text-xl font-bold text-white text-center py-6 md:text-4xl">
              {details.title}
            </h1>
            <div className="flex flex-col py-4 md:h-max md:min-h-96">
              <p className="bg-white border-y-2 font-thin italic px-4 text-center py-6 mb-6 md:mb-0 md:max-h-40 md:overflow-scroll">
                {details.description}
              </p>
              <div className="flex justify-between align-middle px-5 md:py-4 text-white md:justify-between md:w-full">
                <a
                  href="#"
                  className="bg-lime-500 py-4 px-6 rounded-xl text-lg hover:bg-lime-400"
                  onClick={() => addCart(details)}
                >
                  Añadir
                </a>
                <p className="font-semibold text-3xl text-amber-400 flex items-center">
                  ${details.price}
                </p>
                {/* <span className='font-medium border-b-2 text-lg'>Tarifa {details.rating.rate}</span>
                    <span className='font-medium border-b-2 text-lg'>Cantidad {details.rating.count}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      )
      
    )
    
    }
    </>
    // <div classNameName='bg-slate-500' onClick={() => addCart("hola")}>
    //     soy boton
    // </div>
  );
}
