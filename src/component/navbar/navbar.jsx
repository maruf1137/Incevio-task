import React, { useState } from "react";
import AutoSuggestSearch from "./autoSuggestSearch";
import MblNavbar from "./mblNavbar";

const Navbar = () => {
  const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <header>
        {/* nav top */}
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            {/* Currency selector */}
            <form>
              <div>
                <label htmlFor="desktop-currency" className="sr-only">
                  Currency
                </label>
                <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                  <select
                    id="desktop-currency"
                    name="currency"
                    className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                </div>
              </div>
            </form>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-100">
                Sign in
              </a>
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-100">
                Create an account
              </a>
            </div>
          </div>
        </div>

        {/* nav main */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between lg:gap-8 py-4 sm:py-0">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <a href="#">
                  <img
                    className="block h-8 w-auto"
                    src="/logo.png"
                    alt="Workflow"
                  />
                </a>
              </div>
            </div>
            <div className="w-full max-w-[667px] flex-1 md:px-8 lg:px-0 hidden sm:!block">
              <div className="flex items-center px-6 py-4">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg class="h-5 w-5 text-gray-400">
                        <use xlinkHref="/icons.svg#icon-search"></use>
                      </svg>
                    </div>
                    <AutoSuggestSearch />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4">
              <button
                className="btn text-gray-700 hover:text-red-500 btn-wishlist lg:hidden"
                onClick={handleSidebar}>
                {sidebar ? (
                  <svg class="h-6 w-6 fill-current">
                    <use xlinkHref="/icons.svg#icon-clear"></use>
                  </svg>
                ) : (
                  <svg class="h-6 w-6 fill-current">
                    <use xlinkHref="/icons.svg#icon-bars"></use>
                  </svg>
                )}
              </button>
              <a
                href="#"
                className="btn text-gray-700 hover:text-red-500 btn-wishlist">
                <svg class="h-6 w-6 fill-current">
                  <use xlinkHref="/icons.svg#icon-heart"></use>
                </svg>
              </a>
              <a
                href="#"
                className="btn text-gray-700 hover:text-red-500 btn-cart">
                <svg class="h-6 w-6 fill-current">
                  <use xlinkHref="/icons.svg#icon-shopping-cart"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* nav search for small devices */}
        <div className="bg-gray-100 flex justify-center py-4 sm:hidden">
          <div className="w-full max-w-[467px]">
            <div className="flex items-center">
              <div className="w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg class="h-5 w-5 text-gray-400">
                      <use xlinkHref="/icons.svg#icon-search"></use>
                    </svg>
                  </div>
                  <AutoSuggestSearch />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- header-bottom-area start --> */}
        <div className="header-bottom-area !hidden lg:!block">
          <div className="inner-container max-w-7xl mx-auto">
            <div className="main-menu">
              <nav>
                <ul>
                  <li>
                    <a href="index.html">home</a>
                    <ul>
                      <li>
                        <a href="index.html">home version 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">home version 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">home version 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">about</a>
                  </li>
                  <li>
                    <a href="blog.html">blog</a>
                  </li>
                  <li className="static">
                    <a href="shop.html">shop</a>
                    <div className="mega-menu">
                      <div className="mega-left">
                        <span>
                          <a href="shop.html" className="mega-title">
                            WOMEN CLOTH
                          </a>
                          <a href="shop.html">casual shirt</a>
                          <a href="shop.html">rikke t-shirt</a>
                          <a href="shop.html">mia top </a>
                          <a href="shop.html">muscle tee </a>
                        </span>
                        <span>
                          <a href="shop.html" className="mega-title">
                            MEN CLOTH
                          </a>
                          <a href="shop.html">casual shirt</a>
                          <a href="shop.html">rikke t-shirt</a>
                          <a href="shop.html">mia top </a>
                          <a href="shop.html">muscle tee </a>
                        </span>
                        <span>
                          <a href="shop.html" className="mega-title">
                            WOMEN JEWELRY
                          </a>
                          <a href="shop.html">necklace </a>
                          <a href="shop.html">chunky short striped </a>
                          <a href="shop.html">samhar cuff</a>
                          <a href="shop.html">nail set </a>
                        </span>
                        <span>
                          <a href="shop.html" className="mega-title">
                            WOMEN JEWELRY
                          </a>
                          <a href="shop.html">necklace </a>
                          <a href="shop.html">chunky short striped </a>
                          <a href="shop.html">samhar cuff</a>
                          <a href="shop.html">nail set </a>
                        </span>
                        <span>
                          <a href="shop.html" className="mega-title">
                            WOMEN JEWELRY
                          </a>
                          <a href="shop.html">necklace </a>
                          <a href="shop.html">chunky short striped </a>
                          <a href="shop.html">samhar cuff</a>
                          <a href="shop.html">nail set </a>
                        </span>
                      </div>
                      <div className="mega-right">
                        <span className="mega-menu-img">
                          <a href="shop.html">
                            <img alt="" src="img/1.jpg" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="shop.html">cloth</a>
                    <div className="mega-menu mega-menu-2">
                      <span>
                        <a href="shop.html" className="mega-title">
                          WOMEN CLOTH
                        </a>
                        <a href="shop.html">casual shirt</a>
                        <a href="shop.html">rikke t-shirt</a>
                        <a href="shop.html">mia top </a>
                        <a href="shop.html">muscle tee </a>
                      </span>
                      <span>
                        <a href="shop.html" className="mega-title">
                          MEN CLOTH
                        </a>
                        <a href="shop.html">casual shirt</a>
                        <a href="shop.html">rikke t-shirt</a>
                        <a href="shop.html">mia top </a>
                        <a href="shop.html">muscle tee </a>
                      </span>
                      <span>
                        <a href="shop.html" className="mega-title">
                          WOMEN JEWELRY
                        </a>
                        <a href="shop.html">necklace </a>
                        <a href="shop.html">chunky short striped </a>
                        <a href="shop.html">samhar cuff</a>
                        <a href="shop.html">nail set </a>
                      </span>
                      <span className="mega-menu-img">
                        <a href="shop.html">
                          <img alt="" src="img/1.jpg" />
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <a href="#">pages</a>
                    <ul>
                      <li>
                        <a href="about.html">about</a>
                      </li>
                      <li>
                        <a href="blog.html">blog</a>
                      </li>
                      <li>
                        <a href="blog-2-column.html">blog 2 column</a>
                      </li>
                      <li>
                        <a href="blog-full-width.html">blog full width</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">blog right sidebar</a>
                      </li>
                      <li>
                        <a href="single-blog.html">single blog</a>
                      </li>
                      <li>
                        <a href="single-blog-video.html">single blog video</a>
                      </li>
                      <li>
                        <a href="cart.html">shopping cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">wishlist</a>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                      <li>
                        <a href="login.html">login</a>
                      </li>
                      <li>
                        <a href="shop.html">shop</a>
                      </li>
                      <li>
                        <a href="product-details.html">product details</a>
                      </li>
                      <li>
                        <a href="shop-full-width.html">shop full width</a>
                      </li>
                      <li>
                        <a href="shop-right-sidebar.html">shop right sidebar</a>
                      </li>
                      <li>
                        <a href="404.html">404 error</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- header-bottom-area end --> */}
      </header>
      <MblNavbar sidebar={sidebar} />
    </div>
  );
};

export default Navbar;
