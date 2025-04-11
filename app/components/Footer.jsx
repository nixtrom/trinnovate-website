import SparklesPreview from "./SparklesPreview";

export default function Footer() {
  return (
    <footer className=" bg-white dark:bg-black text-white py-10 px-5 md:px-20  border-t border-gray-500/20">
      <SparklesPreview />
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and Copyright */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/images/trinnovate-logo-white.png"
                alt="Trinnovate"
                className="w-50 dark:block hidden"
              />
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/images/trinnovate-logo-black.png"
                alt="Trinnovate"
                className="w-50 dark:hidden block"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © copyright Trinnovate 2025. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6 md:mt-0">
            <div>
              <h4 className="text-red-600 dark:text-gray-300 font-semibold">
                Pages
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-neutral-900"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Studio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-red-600 dark:text-gray-300 font-semibold">
                Socials
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-red-600 dark:text-gray-300 font-semibold">
                Legal
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-red-600 dark:text-gray-300 font-semibold">
                Register
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-900 dark:text-gray-400 hover:text-white"
                  >
                    Forgot Password
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Watermark Text */}
        <div
          className="flex justify-center mt-10 text-4xl  md:text-[8vh] lg:text-[20vh]  font-bold text-transparent bg-clip-text 
bg-gradient-to-b from-neutral-100/40  to-red-900/40 dark:from-gray-700/20 dark:via-gray-500/10 dark:to-gray-300/10 opacity-90"
        >
          TRINNOVATE
        </div>
      </div>
    </footer>
  );
}
