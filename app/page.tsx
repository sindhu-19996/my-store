"use client";

import Navbar from "../components/Navbar";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-24 text-center">
        <h1 className="text-6xl font-extrabold">Shop Smart 🛍️</h1>
        <p className="mt-4 text-xl">
          Upgrade your lifestyle with the latest gadgets
        </p>

        <a href="/products">
          <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Explore Now →
          </button>
        </a>
      </div>
      <div className="bg-yellow-400 text-black text-center py-3 font-semibold">
  ⚡ Flash Sale: Up to 70% OFF on Electronics!
</div>

      {/* 🔥 CATEGORIES */}
   <div className="p-10">
  <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { name: "Mobiles", icon: "📱", key: "mobiles", color: "from-blue-500 to-indigo-500" },
      { name: "Laptops", icon: "💻", key: "laptops", color: "from-purple-500 to-pink-500" },
      { name: "Accessories", icon: "🎧", key: "accessories", color: "from-green-500 to-teal-500" }
    ].map((cat) => (
      <Link key={cat.key} href={`/products?category=${cat.key}`}>
        <div className={`bg-gradient-to-r ${cat.color} text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer`}>
          
          <div className="text-4xl mb-2">{cat.icon}</div>
          <h3 className="text-xl font-semibold">{cat.name}</h3>
        </div>
      </Link>
    ))}
  </div>
</div>

      {/* ⭐ FEATURED PRODUCTS */}
      <div className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
  🔥 Trending Products
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* 🎯 WHY CHOOSE US */}
     <div className="p-10 bg-gray-50">
  <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      { icon: "🚀", title: "Fast Delivery", desc: "Quick & safe shipping" },
      { icon: "💰", title: "Best Prices", desc: "Affordable deals" },
      { icon: "⭐", title: "Top Quality", desc: "Trusted products" }
    ].map((item, i) => (
      <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center transition">
        <div className="text-4xl">{item.icon}</div>
        <h3 className="font-bold mt-3">{item.title}</h3>
        <p className="text-gray-500">{item.desc}</p>
      </div>
    ))}
  </div>
</div>
      {/* 🎉 OFFER BANNER */}
      <div className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">
          Special Offer 🎉 50% OFF
        </h2>
        <p className="mt-2">Limited time deals on selected products</p>
      </div>
    </div>
  );
}