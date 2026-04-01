"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import products from "../../data/products.json";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";

export const dynamic = "force-dynamic";

export default function Products() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [search, setSearch] = useState("");

  let filtered = products;

  
  if (category) {
    filtered = filtered.filter(
      (p) => p.category === category
    );
  }


  filtered = filtered.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl font-bold">
          {category ? category.toUpperCase() : "Products"}
        </h1>

        <input
          placeholder="Search products..."
          className="border p-2 mt-3 w-full rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        <p className="mt-2 text-gray-500">
          Showing {filtered.length} results
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}