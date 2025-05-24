'use client';

import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Welcome, ${formData.email}!`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-yellow-100 flex items-center justify-center px-6 py-12">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl ring-1 ring-[#ffbd39] p-10 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ffbd39] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

                <h1 className="text-4xl font-extrabold text-[#ffbd39] flex items-center justify-center gap-3 mb-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-[#ffbd39] animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Electrical Engineer Login
                </h1>

                <form onSubmit={handleSubmit} className="space-y-7">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-gray-700 font-semibold tracking-wide"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-[#ffbd39] transition"
                        />
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-gray-700 font-semibold tracking-wide"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-[#ffbd39] transition pr-14"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3.5 top-11 flex justify-center  text-[#ffbd39] hover:text-yellow-700 transition"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                              <EyeOff />
                            ) : (
                                <Eye />
                            )}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#ffbd39] text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition"
                    >
                        Sign In
                    </button>
                </form>

            </div>
        </div>
    );
}
