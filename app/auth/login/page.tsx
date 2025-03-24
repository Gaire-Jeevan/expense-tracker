import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="min-w-xs sm:min-w-lg">
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-lg">Sign in to your account to continue</p>
        </div>

        <div className="p-4 sm:p-6 shadow-lg bg-neutral-50 rounded-xl">
          <div className="mb-4">
            <h2 className="font-bold text-2xl ">Sign In</h2>
            <p className="text-gray-700">Sign in to your account to continue</p>
          </div>
          <LoginForm />

          <div className="mt-5 flex items-center justify-center">
            <p>
              Don't have an account?{" "}
              <Link
                href={"/auth/sign-up"}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
