import React from "react";
import { Link } from "react-router-dom";

export function Card({ c }) {
  return (
    <Link to={"/products/details/"+c.id}>
    <div className="w-11/12 mx-auto rounded-2xl overflow-hidden relative max-w-xs hover:shadow-2xl">
      <figure className="w-full h-48 bg-white">
        <img src={c.image} alt="" className="w-full h-full object-contain"/>
      </figure>
      <div className="bg-indigo-900 py-4 md:h-full">
        <h3 className="text-white text-center font-semibold px-4">{c.title}</h3>
        <p className="text-xs text-center uppercase text-amber-400">{c.category}</p>
        <p className="bg-amber-400 px-6 w-32 text-center absolute top-6 right-0 text-white text-xl">${c.price}</p>
        {/* <a href="#" className="absolute bottom-1 right-1 text-white px-4 py-2 z-10 bg-cyan-500 rounded-2xl">Ver más</a> */}
      </div>
    </div>
    </Link>
    
  );
}

// {c.images.map((image) => {
//     console.log(image);
//     return(
//         <figure>
//         <img src={image} alt="" />
//     </figure>
//     )
//   })}
