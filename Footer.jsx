import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-0">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-lg">© 2024 Asanaviveka. All rights reserved.</p>
        <div className="flex justify-center space-x-8 mt-4">
          <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
          <a href="/contact" className="hover:text-blue-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
