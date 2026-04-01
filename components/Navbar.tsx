"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser, logoutUser } from "../utils/auth";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [count, setCount] = useState(0);

  const loadUser = () => {
    const u = getUser();
    setUser(u);
  };

  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const total = cart.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0
    );

    setCount(total);
  };

  useEffect(() => {
    // ✅ LOAD USER
    loadUser();

    // ✅ LOAD CART
    updateCart();

    // 🔥 LISTEN USER CHANGES
    window.addEventListener("userUpdated", loadUser);

    // 🔥 LISTEN CART CHANGES
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("userUpdated", loadUser);
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white">
      
      {/* LOGO */}
      <Link href="/" className="text-xl font-bold text-blue-600">
        MyStore
      </Link>

      {/* LINKS */}
      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        {/* CART */}
        <Link href="/cart" className="font-medium">
          🛒 Cart ({count})
        </Link>

        {/* USER */}
        {user ? (
          <div className="flex items-center gap-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full">
              👤 {user.type === "guest" ? "Guest" : user.email}
            </span>

            <button
              onClick={() => {
                logoutUser();
              }}
              className="text-red-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { getUser, logoutUser } from "../utils/auth";

// export default function Navbar() {
//   const [user, setUser] = useState<any>(null);
//   const [count, setCount] = useState(0);
  
//   const loadUser = () => {
//     const u = getUser();
//     setUser(u);
//   };

//  useEffect(() => {
//   const updateCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     const total = cart.reduce(
//       (sum: number, item: any) => sum + item.quantity,
//       0
//     );

//     setCount(total);
//   };

//   updateCart();

//   window.addEventListener("cartUpdated", updateCart);

//   return () =>
//     window.removeEventListener("cartUpdated", updateCart);
// }, []);

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 shadow bg-white">
      
//       {/* LOGO */}
//       <Link href="/" className="text-xl font-bold text-blue-600">
//         MyStore
//       </Link>

//       {/* LINKS */}
//       <div className="flex gap-6 items-center">
//         <Link href="/">Home</Link>
//         <Link href="/products">Products</Link>
//         <Link href="/about">About</Link>
//         <Link href="/contact">Contact</Link>

//         {/* CART */}
//         <Link href="/cart" className="font-medium">
//           🛒 Cart ({count})
//         </Link>

//         {/* USER */}
//         {user ? (
//           <button
//             onClick={() => {
//               logoutUser();
//               window.location.href = "/";
//             }}
//             className="text-red-500"
//           >
//             Logout
//           </button>
//         ) : (
//           <Link href="/login" className="text-blue-600">
//             Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }