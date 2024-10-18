import "@/styles/globals.css";
import Link from "next/link"; // Import Link for navigation

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="mainnav">
        <ul className="flex justify-center mx-0 my-2">
          <Link href="/">
            <li className="mx-3 font-bold">Home</li>
          </Link>
          <Link href="/about">
            <li className="mx-3 font-bold">About</li>
          </Link>
          <Link href="/blog">
            <li className="mx-3 font-bold">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="mx-3 font-bold">Contact</li>
          </Link>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
