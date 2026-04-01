import Navbar from "../../components/Navbar";


export const metadata = {
  title: "Contact Us | MyStore",
  description: "Reach out to MyStore for support or queries",
};

export default function ContactPage() {
  return (
    <div>
      <Navbar />


      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Get in Touch 💬</h1>
        <p className="mt-3 text-lg">
          We’re here to help — 24/7 customer support
        </p>
      </div>

    
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">


        <div className="space-y-6">

          <h2 className="text-3xl font-bold">Contact Information</h2>
          <p className="text-gray-600">
            Have questions about products, orders, or anything else?
            Our team is ready to assist you anytime.
          </p>

          {/* CARDS */}
          <div className="space-y-4">

            <div className="flex items-center gap-4 bg-white shadow p-4 rounded-xl">
              📍
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-500">Hyderabad, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white shadow p-4 rounded-xl">
              📞
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-500">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white shadow p-4 rounded-xl">
              📧
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-500">support@mystore.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white shadow p-4 rounded-xl">
              ⏰
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-gray-500">Mon–Sat: 9AM–8PM</p>
              </div>
            </div>

          </div>

        
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="font-bold">⚡ Quick Support</h3>
            <p className="text-gray-600">
              For faster response, use live chat or email us directly.
            </p>
          </div>

        </div>

     
       
      </div>

  
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          FAQs ❓
        </h2>

        <div className="max-w-4xl mx-auto space-y-4 px-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">
              How fast is delivery?
            </h4>
            <p className="text-gray-600">
              Delivery takes 2–5 business days.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">
              Can I return items?
            </h4>
            <p className="text-gray-600">
              Yes, 7-day return policy available.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">
              Do you provide support?
            </h4>
            <p className="text-gray-600">
              Yes, 24/7 support available.
            </p>
          </div>
        </div>
      </div>

   
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-12">
        <h2 className="text-3xl font-bold">
          Still Need Help?
        </h2>
        <p className="mt-2">We’re just a message away 🚀</p>
      </div>
    </div>
  );
}