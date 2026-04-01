
import products from "../../../data/products.json";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title: "Product Details | MyStore",
  description: "View product details and price",
};

export default function Detail({ params }: { params: { id: string } }) {
  const id = params.id;

  const p = products.find((x: any) => x.id === Number(id));

  if (!p) return <div>Not found</div>;

  return (
    <div>
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{p.name}</h1>

        <img
          src={p.image}
          alt={p.name}
          className="h-60 w-full object-cover rounded-lg"
        />

        <p className="mt-4 text-gray-600">
          {p.description || "High quality product with best performance."}
        </p>

        <p className="text-green-600 text-xl mt-2 font-semibold">
          ₹{p.price}
        </p>
      </div>
    </div>
  );
}