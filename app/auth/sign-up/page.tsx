import Link from 'next/link'
import React from 'react'
import SignUpForm from './SignUpForm'

const SignUpPage = () => {
  return (<div className="h-screen flex flex-col items-center justify-center">
    <div className="min-w-xs sm:min-w-lg">
      <div className="flex flex-col items-center justify-center mb-5">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-lg">Sign up to start tracking your expenses</p>
      </div>

      <div className="p-4 sm:p-6 shadow-lg bg-neutral-50 rounded-xl">
        <div className="mb-4">
          <h2 className="font-bold text-2xl ">Sign Up</h2>
          <p className="text-gray-700">Enter your information to create an account</p>
        </div>
        <SignUpForm />

        <div className="mt-5 flex items-center justify-center">
          <p>
            Already have an account?{" "}
            <Link
              href={"/auth/login"}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUpPage