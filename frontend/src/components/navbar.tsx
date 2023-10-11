import React from "react";
type Props = {
  navbarValue: string;
  setNavbarValue: (value: string) => void;
  setBackdropHanlder: (value: boolean) => void;
  backdropHanlder: boolean;
};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center mx-auto p-4">
        <div className="flex md:order-2">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Side Menu (Backdrop) */}
          {isMenuOpen && (
            <div className="lg:hidden fixed top-[68px] left-0 h-full w-full bg-gray-800 text-white p-4 transform translate-x-0 transition-transform duration-300 ease-in-out">
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => {
                      props.setNavbarValue("home");
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className={`${
                      props.navbarValue === "home"
                        ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      props.setNavbarValue("us");
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className={`${
                      props.navbarValue === "us"
                        ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                    aria-current="page"
                  >
                    U.S News
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      props.setNavbarValue("arts");
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className={`${
                      props.navbarValue === "arts"
                        ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                    aria-current="page"
                  >
                    Arts
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      props.setNavbarValue("science");
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className={`${
                      props.navbarValue === "science"
                        ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                    aria-current="page"
                  >
                    Science
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      props.setNavbarValue("world");
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className={`${
                      props.navbarValue === "world"
                        ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                    aria-current="page"
                  >
                    World
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          className="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                onClick={() => props.setNavbarValue("home")}
                className={`${
                  props.navbarValue === "home"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                aria-current="page"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => props.setNavbarValue("us")}
                className={`${
                  props.navbarValue === "us"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                aria-current="page"
              >
                U.S News
              </button>
            </li>
            <li>
              <button
                onClick={() => props.setNavbarValue("arts")}
                className={`${
                  props.navbarValue === "arts"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                aria-current="page"
              >
                Arts
              </button>
            </li>
            <li>
              <button
                onClick={() => props.setNavbarValue("science")}
                className={`${
                  props.navbarValue === "science"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                aria-current="page"
              >
                Science
              </button>
            </li>
            <li>
              <button
                onClick={() => props.setNavbarValue("world")}
                className={`${
                  props.navbarValue === "world"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                aria-current="page"
              >
                World
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
