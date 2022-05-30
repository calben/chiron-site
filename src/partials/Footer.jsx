import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Center</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">iGotcha Media</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="https://igotchamedia.com/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>
              </li>
              <li className="mb-2">
                <a href="https://igotchamedia.com/agency/who-we-are/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Who We Are</a>
              </li>
              <li className="mb-2">
                <a href="https://igotchamedia.com/agency/contact-us/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Legal</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Terms and Conditions</Link>
              </li>
              <li className="mb-2">
                <a href="https://igotchamedia.com/privacy-policy/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Big thanks to <a className="text-blue-600 hover:underline" href="https://cruip.com/">Cruip</a> for the website template.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
