import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="text-center py-20 flex-grow">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-xl text-gray-600 mt-4">We’d love to hear from you. Please fill out the form below.</p>

        <form className="max-w-lg mx-auto mt-8 space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-left text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-left text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-left text-gray-700 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              rows="6"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-lg">© 2024 Asanaviveka. All rights reserved.</p>
          <div className="flex justify-center space-x-8 mt-4">
            <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
            <a href="/contact" className="hover:text-blue-400">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
