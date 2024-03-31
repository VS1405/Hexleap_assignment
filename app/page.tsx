
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="fixed left-0 top-0 pt-2 pb-2 flex w-full mt-0 flex-col justify-center border-b border-gray-300 bg-yellow-300 my-5 md:flex-row">
        <li className="p-2 text-center md:w-32 mr-2 font-mono hover:bg-blue-500 hover:text-white lg:p-4 font-bold text-blue-700 border md:border-transparent rounded-full hover:border-gray-800 ">
          <Link href="/" className="text-xl">
            Home
          </Link>
        </li>
        <li className="p-2 text-center md:w-32 mr-2 font-mono hover:bg-blue-500 hover:text-white lg:p-4 font-bold text-blue-700 border md:border-transparent rounded-full hover:border-gray-800 ">
          <Link href="/about" className="text-xl">
            Sport
          </Link>
        </li>
      </ul>

      <div className="mb-32 text-center mt-16 lg:max-w-5xl lg:w-full lg:mb-0 justify-center ">
        <h1 className="font-bold text-2xl">Welcome Here !!!</h1>
      </div>
    </main>
  );
}
