import React from 'react';
import Footer from './Footer';

export default function Signin() {
    return (
      <>
        <div className="relative flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/trainbg.jpg)' }}
          ></div>
  
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
  
          {/* Form Content */}
          <div className="relative sm:mx-auto sm:w-full sm:max-w-sm bg-white bg-opacity-50 rounded-lg p-8 z-10">
            <img
              alt="Your Company"
              src="./images/trainlogo1.png"
              className="mx-auto h-40 w-auto"
            />
            <h1 className="mt-1 text-center text-2xl font-bold tracking-tight text-indigo-500">
              Asanaviveka
            </h1>
            <h2 className="mt-1 text-center text-xl font-bold tracking-tight text-gray-900">
              Sign in
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm z-10">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-gray-800 text-white border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"

                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-white">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-gray-800 text-white border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"

                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-white">
              Don't have an account?{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
       <div>
        <Footer/>
       </div>
      </>
    );
  }
  