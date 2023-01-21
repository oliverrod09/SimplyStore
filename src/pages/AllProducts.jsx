import React from "react";
import { useState, useEffect, useContext } from "react";
import { listProducts } from "../data/products";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { GeneralContext } from "../context/GeneralContext";
import { Cart } from "../components/Cart";

export function AllProducts() {
  const [count, setCount] = useState([]);
  const { cart } = useContext(GeneralContext);

  useEffect(() => {
    listProducts().then((resp) => {
      console.log(resp);
      setCount(resp);
    });
  }, []);

  if (count.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <>
      {cart ? (
        <Cart></Cart>
      ) : (
        <main className="py-6">
          <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
            {count.map((c) => (
              <Card key={c.id} c={c}></Card>
            ))}
          </div>
        </main>
      )}
    </>
  );
}
