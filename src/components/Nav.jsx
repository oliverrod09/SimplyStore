import React from "react";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

export function Nav() {
  const { ProductC, setCart, cart } = useContext(GeneralContext);
  const showCount = ProductC.length > 0;

  return (
    <nav className="flex justify-between px-4 bg-indigo-900 text-white py-2 tracking-widest">
      <div className="flex justify-center align-middle items-center">
        <a href="/" className="font-bold w-44 block ">
          SimplyStore
        </a>
        <i className="bg-[url('/store.png')] bg-contain bg-no-repeat bg-center inline-block h-full w-full"></i>
      </div>
        
        
      <ul className="flex gap-4">
        <li>
          <a href="#" className="min-w-10 flex items-center" onClick={()=>{
            cart ? (
              setCart(false)
            ):(
              setCart(true)
            )
            
          }}>
            <span className="hidden md:inline">Carrito</span>
            <i className="block w-12 h-8 bg-[url('/comercio.png')] bg-contain bg-no-repeat bg-center relative">
              {showCount && (
                <span className="block absolute bottom-4 right-0 h-6 w-6 text-center bg-blue-500 rounded-full">
                  {ProductC.length}
                </span>
              )}
            </i>
          </a>
        </li>
      </ul>
    </nav>
    // <nav className='flex justify-between px-4 bg-emerald-900 text-white py-2 tracking-widest'>
    //   <a href="/" className='font-bold'>Store</a>
    //     <ul className='flex gap-4'>
    //         <li className=''><a href="#" className='min-w-10'><span className='bg-white inline-block relative'><span className='min-w-5'></span></span><span className='hidden md:inline'>Buscar</span></a></li>
    //         <li className=''><a href="#" className='min-w-10'><span className='bg-white inline-block relative'><span className='min-w-5'></span></span><span className='hidden md:inline'>Carrito</span></a></li>
    //     </ul>
    // </nav>
  );
}
