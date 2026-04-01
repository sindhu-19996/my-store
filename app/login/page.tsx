"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { loginUser, loginGuest } from "../../utils/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email) return alert("Enter email");

    loginUser(email);
    router.push("/");
  };

  const handleGuest = () => {
    loginGuest();
    router.push("/");
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center h-[80vh] bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="bg-white p-8 rounded-xl shadow-lg w-80">
          <h1 className="text-2xl font-bold text-center mb-6">
            Welcome Back 👋
          </h1>

          <input
            placeholder="Enter your email"
            className="border p-2 w-full mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white w-full py-2 rounded"
          >
            Login
          </button>

          <p className="text-center my-3">OR</p>

          <button
            onClick={handleGuest}
            className="border w-full py-2 rounded"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}