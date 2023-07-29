import Link from "next/link";

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
        <p className="text-2xl text-gray-600 mb-8">We couldn't find the page you were looking for.</p>
        <Link href="/">
          <p className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition duration-300">Go back home</p>
        </Link>
      </div>
    );
}

export default Error;