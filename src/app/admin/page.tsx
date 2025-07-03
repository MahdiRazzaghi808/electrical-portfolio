'use client';

import { usePostAuthenticate } from "@/api/services/core/Account/Authenticate/post/use-post-authenticate";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({ userName: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const mutation = usePostAuthenticate(
        {
            onSuccess: (data) => {
                localStorage.setItem("token", data.data?.data?.jwToken);
                window.location.href = "/admin/booking";
            },
            onError: (error) => {
                alert(error.message);
            }
        }
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br bg-background flex items-center justify-center px-6 py-12">
            <div className="max-w-md w-full bg-foreground rounded-3xl shadow-2xl ring-1 ring-primary p-10 relative overflow-hidden">
                <>
                    <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#9c1923] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#c22530] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                </>
                <h1 className="text-4xl font-extrabold text-primary flex items-center justify-center gap-3 mb-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-primary animate-pulse"
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
                            htmlFor="userName"
                            className="block mb-2 text-gray-200 font-semibold tracking-wide"
                        >
                            Username
                        </label>
                        <input
                            id="userName"
                            name="userName"
                            type="userName"
                            placeholder=""
                            value={formData.userName}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-primary transition"
                        />
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-gray-200 font-semibold tracking-wide"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-primary transition pr-14"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3.5 top-11 flex justify-center  text-primary hover:text-primary/90 transition"
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
                        className="w-full py-3 bg-primary text-black font-bold rounded-lg shadow-lg hover:bg-primary/90 transition"
                    >
                        Sign In
                    </button>
                </form>

            </div>
        </div>
    );
}
