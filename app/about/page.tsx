import Navbar from "../../components/Navbar";

export const metadata = {
  title: "About Us | MyStore",
  description: "Learn about MyStore mission, vision and services",
};

export default function About() {
  return (
    <div>
      <Navbar />

      
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">About MyStore 🚀</h1>
        <p className="mt-4 text-lg">
          Redefining online shopping with innovation & trust
        </p>
      </div>

   
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 leading-7">
          MyStore was created with a vision to simplify online shopping. 
          We noticed that customers often struggle to find reliable and affordable 
          electronics in one place. That’s why we built a platform that combines 
          quality, affordability, and convenience.
        </p>
      </div>

      
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
        <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">🎯 Our Mission</h3>
          <p className="text-gray-600">
            To deliver high-quality electronic products at the best prices with 
            seamless shopping experience.
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">🌍 Our Vision</h3>
          <p className="text-gray-600">
            To become the most trusted ecommerce platform globally by focusing 
            on customer satisfaction and innovation.
          </p>
        </div>
      </div>

    
      <div className="bg-gray-100 py-12 mt-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            🚚
            <h3 className="font-bold mt-2">Fast Delivery</h3>
            <p className="text-gray-500">Quick & safe shipping</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            💰
            <h3 className="font-bold mt-2">Best Prices</h3>
            <p className="text-gray-500">Affordable deals everyday</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            ⭐
            <h3 className="font-bold mt-2">Top Quality</h3>
            <p className="text-gray-500">Trusted premium products</p>
          </div>
        </div>
      </div>

      {/* 🔥 STATS SECTION */}
      <div className="bg-white py-12">
        <div className="grid md:grid-cols-4 text-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
            <p>Customers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">500+</h2>
            <p>Products</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">4.8⭐</h2>
            <p>Ratings</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </div>

      {/* 🔥 TESTIMONIALS */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded shadow">
            <p>"Amazing quality products and fast delivery!"</p>
            <h4 className="mt-2 font-bold">— Rahul</h4>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <p>"Best prices compared to other websites."</p>
            <h4 className="mt-2 font-bold">— Chaitu</h4>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <p>"Customer support is very helpful!"</p>
            <h4 className="mt-2 font-bold">— Ankit</h4>
          </div>
        </div>
      </div>

   
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">
          Ready to Explore Our Products?
        </h2>
        <p className="mt-2">Start shopping now and grab the best deals!</p>

        <a
          href="/products"
          className="inline-block mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold"
        >
          Shop Now →
        </a>
      </div>
    </div>
  );
}