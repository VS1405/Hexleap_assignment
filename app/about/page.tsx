import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen w-full p-24">
      <ul className="fixed left-0 z-50 top-0 pt-2 pb-2 flex w-full mt-0 flex-col justify-center border-b border-gray-300 bg-yellow-300 my-5 md:flex-row">
        <li className="p-2 text-center md:w-32 mr-2 font-mono hover:bg-blue-500 hover:text-white lg:p-4 font-bold text-blue-700 border md:border-transparent rounded-full hover:border-gray-800 ">
          <Link href="/" className="text-xl">Home</Link>
        </li>
        <li className="p-2 text-center md:w-32 mr-2 font-mono hover:bg-blue-500 hover:text-white lg:p-4 font-bold text-blue-700 border md:border-transparent rounded-full hover:border-gray-800 ">
          <Link href="/about" className="text-xl">Sport</Link>
        </li>
      </ul>
      <div className="border border-transparent">
        <h3 className="font-bold font-sans underline text-large">Sports</h3>
        <div className="mb-32 grid p-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left ">
          <div className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
              src="/Sports/player8.png"
              alt="Vercel Logo"
              className="dark:invert "
              width={150}
              height={24}
              priority
            />
            <div>
              <h2 className={`mb-3 mt-2 text-sm font-semibold`}>
                Sacramento River Cats
              </h2>
              <div className="flex flex-row justify-around">
                <div>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Total Events
                  </p>
                  <p className={`m-0 max-w-[30ch] text-sm `}>48 Events</p>
                </div>
                <div>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Sport</p>
                  <p className={`m-0 max-w-[30ch] text-sm `}>Baseball</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
              src="/Sports/player2.png"
              alt="Player Logo"
              className="dark:invert "
              width={150}
              height={24}
              priority
            />
            <div>
              <h2 className={`mb-3 mt-2 text-sm font-semibold`}>
                Las Vegas Aviators
              </h2>
              <div className="flex flex-row justify-around">
                <div className="mr-1">
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Total Events
                  </p>
                  <p className={`m-0 max-w-[30ch] text-sm `}>28 Events</p>
                </div>
                <div>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Sport</p>
                  <p className={`m-0 max-w-[30ch] text-sm `}>Baseball</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
              src="/Sports/player5.png"
              alt="Vercel Logo"
              className="dark:invert "
              width={150}
              height={24}
              priority
            />
            <div>
              <h2 className={`mb-3 mt-2 text-sm font-semibold`}>
                Sacramento River Cats
              </h2>
              <div className="flex flex-row justify-around">
                <div>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Total Events
                  </p>
                  <p className={`m-0 max-w-[30ch] text-sm `}>15 Events</p>
                </div>
                <div>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Sport</p>
                  <p className={`m-0 max-w-[30ch] text-sm `}>Baseball</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
              src="/Sports/player1.png"
              alt="Vercel Logo"
              className="dark:invert "
              width={150}
              height={24}
              priority
            />
            <div>
              <h2 className={`mb-3 mt-2 text-sm font-semibold`}>
                new jersey devils
              </h2>
              <div className="flex flex-row justify-around">
                <div className="mr-1">
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Total Events
                  </p>
                  <p className={`m-0 max-w-[30ch] text-sm `}>40 Events</p>
                </div>
                <div>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Sport</p>
                  <p className={`m-0 max-w-[30ch] text-sm `}>Baseball</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="relative">
              <Image
                src="/Sports/unnamed.png"
                alt="Vercel Logo"
                className="dark:invert "
                width={150}
                height={24}
                priority
              />
            <div className="absolute top-0 right-0 bg-black text-white pr-2 pl-2 ">
              Ad
            </div>
            </div>
            <div>
              <h2 className={`mb-3 mt-2 text-sm font-semibold`}>
                Advertisement title
              </h2>
              <div className="flex flex-col md:flex-row justify-around">
                <p className="text-xs font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="p-2 font-sans text-sm text-white bg-blue-400 hover:cursor-pointer">
            Show More
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-16 p-4 ">
        <div className="flex flex-col justify-center items-center text-center ">
          <h1 className="font-bold text-2xl mt-4 font-sans">
            Collection Spotlight
          </h1>
          <p className="text-sm w-[60%] text-center mt-2 justify-normal">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!{" "}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          {/* Left Icon */}
          <div className="mr-2 invisible md:visible hover:cursor-pointer">
            <Image
              src="/HighlightSport/VectorLeft.png"
              alt="Vector left"
              width={20}
              height={10}
            />
          </div>
          <div className="mb-16 flex flex-col md:flex-row justify-around text-center p-4 mt-16 lg:max-w-5xl lg:w-full  lg:text-left">
            <div className="group mb-4 md:mb-0 flex flex-col items-center rounded-lg border border-transparent shadow-lg shadow-gray-500/50  transition-colors bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <Image
                src="/HighlightSport/Ticket_Mockup1.png"
                alt="Vercel Logo"
                className="dark:invert "
                width={200}
                height={24}
                priority
              />
              <span>
                <Image
                  src="/HighlightSport/Line105.png"
                  alt=""
                  width={150}
                  height={10}
                />
              </span>
              <div className="mt-2 flex flex-col justify-center items-center">
                <h2 className={`mb-3 text-sm font-semibold`}>
                  Las Vegas Aviators
                </h2>
                <div className="flex flex-col w-full h-full text-center justify-center items-center">
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 text-black`}
                  >
                    OCT 15 | SUN | 4:30 PM
                  </p>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Las Vegas Ballpark, Las Vegas, Nevada
                  </p>
                  <div className="bg-black w-[80%]  mt-1 mb-3">
                    <p className="text-white p-1 text-sm">
                      Take Flight Collection
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group  mb-4 md:mb-0 flex flex-col items-center rounded-lg border border-transparent shadow-lg shadow-gray-500/50  transition-colors bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <Image
                src="/HighlightSport/Ticket_Mockup2.png"
                alt="Vercel Logo"
                className="dark:invert "
                width={200}
                height={24}
                priority
              />
              <span>
                <Image
                  src="/HighlightSport/Line105.png"
                  alt=""
                  width={150}
                  height={10}
                />
              </span>
              <div className="mt-2 flex flex-col justify-center items-center">
                <h2 className={`mb-3 text-sm font-semibold`}>
                  Sacramento River Cats
                </h2>
                <div className="flex flex-col w-full h-full text-center justify-center items-center">
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 text-black`}
                  >
                    OCT 15 | SUN | 4:30 PM
                  </p>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Sutter Health Park, Sacramento, California
                  </p>
                  <div className="bg-black w-[80%]  mt-1 mb-3">
                    <p className="text-white p-1 text-sm">
                      Take Flight Collection
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group  mb-4 md:mb-0 flex flex-col items-center rounded-lg border border-transparent shadow-lg shadow-gray-500/50  transition-colors bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <Image
                src="/HighlightSport/Ticket_Mockup1.png"
                alt="Vercel Logo"
                className="dark:invert "
                width={200}
                height={24}
                priority
              />
              <span>
                <Image
                  src="/HighlightSport/Line105.png"
                  alt=""
                  width={150}
                  height={10}
                />
              </span>
              <div className="mt-2 flex flex-col justify-center items-center">
                <h2 className={`mb-3 text-sm font-semibold`}>
                  Las Vegas Aviators
                </h2>
                <div className="flex flex-col w-full h-full text-center justify-center items-center">
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 text-black`}
                  >
                    OCT 15 | SUN | 4:30 PM
                  </p>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Las Vegas Ballpark, Las Vegas, Nevada
                  </p>
                  <div className="bg-black w-[80%]  mt-1 mb-3">
                    <p className="text-white p-1 text-sm">
                      Take Flight Collection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-2 invisible md:visible hover:cursor-pointer">
            <Image
              src="/HighlightSport/VectorRight.png"
              alt="Vector left"
              width={20}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
