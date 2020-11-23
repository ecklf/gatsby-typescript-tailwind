import React, { ReactElement, useState } from "react"

interface Props {}

function Index(_props: Props): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div>
        <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
          <div className="flex items-center flex-shrink-0 mr-6 text-white">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-xl font-semibold tracking-tight">
              Gatsby TypeScript Tailwind CSS
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => {
                setMenuOpen((isMenuOpen) => !isMenuOpen)
              }}
              className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white"
            >
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full ${
              isMenuOpen ? "block" : "hidden"
            } lg:block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              >
                Blog
              </a>
            </div>
            <div>
              <a
                href="/"
                className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
              >
                Download
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="container max-w-md mx-auto mt-10">
        <div className="overflow-hidden rounded shadow-lg">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #photography
            </span>
            <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #travel
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #winter
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
