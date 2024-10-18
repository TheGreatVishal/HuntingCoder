import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mx-3 mt-3 text-6xl font-bold">Hunting Coder</h1>
          <Image
            src="/image.png"
            width={237}
            height={158}
            alt="Hunting Coder"
            className="mt-8 mb-5 rounded-lg"
          />
          <p className="text-lg mt-4">A Blog for Hunting Coders by a Hunting Coder</p>
        </div>

        <div className="blogs flex flex-col items-center justify-center space-y-6 p-6 bg-slate-700">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Popular Blogs</h2>
          {/** Example Blog Item */}
          {[1, 2, 3,4,5].map((item) => (
            <div key={item} className="blogItem bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
              <h3 className="text-2xl font-bold text-black mb-2">How to learn JS in 2024?</h3>
              <p className="text-gray-600">JS is the language to design logic for the web.</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
