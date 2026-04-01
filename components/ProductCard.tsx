"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { addToCart, getCart, updateQuantity } from "../utils/cart";

export default function ProductCard({ product }: any) {
  const [qty, setQty] = useState(0);

  // 🔥 load quantity from cart
  const loadQty = () => {
    const cart = getCart();
    const item = cart.find((i: any) => i.id === product.id);
    setQty(item ? item.quantity : 0);
  };

  useEffect(() => {
    loadQty();

    // 🔥 listen updates
    window.addEventListener("cartUpdated", loadQty);

    return () =>
      window.removeEventListener("cartUpdated", loadQty);
  }, []);

  // ADD
  const handleAdd = () => {
    addToCart(product);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // INCREASE / DECREASE
  const handleChange = (change: number) => {
    updateQuantity(product.id, change);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
      <img
        src={product.image}
        className="h-40 w-full object-cover rounded-md"
      />

      <h2 className="font-semibold mt-2">{product.name}</h2>
      <p className="text-green-600 font-bold">₹{product.price}</p>

      <div className="flex justify-between items-center mt-3">
        <Link
          href={`/products/${product.id}`}
          className="text-blue-600 text-sm"
        >
          View Details
        </Link>

        {/* 🔥 MAIN LOGIC */}
        {qty === 0 ? (
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-3 py-1 rounded-full"
          >
            + Add
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleChange(-1)}
              className="bg-red-500 text-white px-2 rounded"
            >
              -
            </button>

            <span className="font-bold">{qty}</span>

            <button
              onClick={() => handleChange(1)}
              className="bg-green-500 text-white px-2 rounded"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}