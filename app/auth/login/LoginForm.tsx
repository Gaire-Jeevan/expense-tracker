"use client";

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const loginHandler = async (data: LoginFormData) => {
    console.log(data);

    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:8081/api/users/login", data);
      // console.log("Login success: ", response.data);

      router.push("/")
      reset();
    } catch (error: any) {
      console.error("Login Failed", error);
      alert(error.response.data?.message || "Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // setIsSubmitting(false);

    // reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(loginHandler)}>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium text-lg">
          Email
        </label>
        <div className="border border-gray-300 p-1 rounded-md focus-within:border-2 focus-within:border-blue-500 mt-1">
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/,
                message: "Invalid email format",
              },
            })}
            placeholder="name@example.com"
            className="focus:outline-none w-full"
          />
        </div>
        {errors.email ? (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between">
          <label htmlFor="password" className="font-medium text-lg">
            Password
          </label>
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => alert("Currently this feature is not available!😢")}
          >
            Forget Password?
          </span>
        </div>
        <div className="border border-gray-300 p-1 rounded-md focus-within:border-2 focus-within:border-blue-500 mt-1 flex">
          <input
            id="password"
            type={showPassword ? "password" : "text"}
            {...register("password", {
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 24,
                message: "Password must be at most 24 characters",
              },
            })}
            className="focus:outline-none w-full"
            placeholder="********"
          />
          <span
            className="cursor-pointer hover:bg-gray-200 w-5 p-1 rounded-md"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
          </span>
        </div>
        {errors.password ? (
          <p className="text-red-600 text-sm">{errors.password.message}</p>
        ) : (
          ""
        )}
      </div>

      <div className="p-2 bg-blue-500 rounded-lg flex justify-center items-center cursor-pointer hover:bg-blue-400 transform hover:scale-105 duration-300">
        <button
          className="font-bold text-white w-full h-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
