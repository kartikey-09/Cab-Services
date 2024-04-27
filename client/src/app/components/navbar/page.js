"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCarSide } from "react-icons/fa";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsselect] = useState();

  const [profile, setProfile] = useState();

  const menucss =
    "block py-2 px-3 text-gray-800  rounded  md:hover:bg-transparent hover:text-white dark:border-gray-700 hover:bg-yellow-400";
  const menucss1 =
    "block py-2 px-3 text-gray-800 rounded border border-yellow-400  hover:text-white dark:border-gray-700 hover:bg-yellow-400";

  return (
    <div>
      <nav class="bg-white border-gray-200  dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <FaCarSide className=" w-full h-10 text-yellow-400" />

            <span class="self-center text-2xl text-yellow-400 border-[1px] py-1 px-1 rounded-md font-semibold whitespace-nowrap dark:text-white">
              SwiftGO
            </span>
          </a>

          <div
            class="items-center hidden justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-yellow-400 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className={menucss1} aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className={menucss1}>
                  TRip
                </a>
              </li>
              <li>
                <a href="#" className={menucss1}>
                  Booking servive
                </a>
              </li>
              <li>
                <a href="#" className={menucss1}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className={menucss1}>
                  My trip
                </a>
              </li>
            </ul>
          </div>
          <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Open user menu</span>
              <Image
                onClick={() => setProfile(!profile)}
                class="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
                width={50}
                height={50}
              />
            </button>

            {/* <!-- Dropdown menu --> */}

            {profile && (


<div className="w-28 h-48 bg-gray-500"></div>
              // <div
              //   class="text-base   list-none bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              //   id="user-dropdown"
              // >
              //   <div class="px-4 py-3">
              //     <span class="block text-sm text-gray-900 dark:text-white">
              //       Bonnie Green
              //     </span>
              //     <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
              //       name@flowbite.com
              //     </span>
              //   </div>
              //   <ul class="py-2" aria-labelledby="user-menu-button">
              //     <li>
              //       <a
              //         href="#"
              //         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              //       >
              //         Dashboard
              //       </a>
              //     </li>
              //     <li>
              //       <a
              //         href="#"
              //         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              //       >
              //         Settings
              //       </a>
              //     </li>
              //     <li>
              //       <a
              //         href="#"
              //         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              //       >
              //         Earnings
              //       </a>
              //     </li>
              //     <li>
              //       <a
              //         href="#"
              //         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              //       >
              //         Sign out
              //       </a>
              //     </li>
              //   </ul>
              // </div>
            )}

            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              data-collapse-toggle="navbar-user"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              class="items-center justify-between w-full md:flex md:w-auto md:order-1"
              id="navbar-user"
            >
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-yellow-400 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#" className={menucss} aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className={menucss}>
                    TRip
                  </a>
                </li>
                <li>
                  <a href="#" className={menucss}>
                    Booking servive
                  </a>
                </li>
                <li>
                  <a href="#" className={menucss}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className={menucss}>
                    My trip
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="w-full h-[1px] bg-gray-200 mt-3"></div>
    </div>
  );
};

export default page;
