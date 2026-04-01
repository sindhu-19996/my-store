"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getCart, updateQuantity } from "../../utils/cart";

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);

  const loadCart = () => {
    setCart(getCart());
  };

  useEffect(() => {
    loadCart();

  
    window.addEventListener("cartUpdated", loadCart);

    return () =>
      window.removeEventListener("cartUpdated", loadCart);
  }, []);

  const handleChange = (id: number, change: number) => {
    updateQuantity(id, change);

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow p-4 rounded-lg mb-4"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-green-600 font-bold">
                    ₹{item.price}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleChange(item.id, -1)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  -
                </button>

                <span className="font-bold text-lg">
                  {item.quantity}
                </span>

                <button
                  onClick={() => handleChange(item.id, 1)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}

        {/* TOTAL */}
        <div className="text-right mt-6 text-xl font-bold">
          Total: ₹{total}
        </div>
      </div>
    </div>
  );
}