import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Image for any blog post images

const Slug = () => {
  const [blog, setBlog] = useState(null); // Initialize blog state as null
  const router = useRouter(); // useRouter outside useEffect to access route

  useEffect(() => {
    if (!router.isReady) return; // Wait until the router is ready

    const { slug } = router.query;

    // Fetch the blog data based on the slug
    // fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    fetch(`https://hunting-coder-omega.vercel.app//api/getblog?slug=${slug}`)
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        console.log(data); // Log the fetched data to the console
        setBlog(data); // Set the blog state with the fetched data
      })
      .catch((error) => console.error('Error fetching blog data:', error)); // Handle errors
  }, [router.isReady]); // Re-run the effect when the router is ready

  // If blog data is not yet available, show a loading state
  if (!blog) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-2 text-center">Title of Page: {blog.title}</h1>
      <hr className="mb-4" />

      {/* Optional Image for Blog Post */}
      <div className="mb-4">
        <Image
          src={blog.image || '/image.png'} // Replace with the actual image path from blog data
          alt="Blog Post Image"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="text-lg text-gray-400 leading-relaxed">
        <p>{blog.content}</p>
      </div>

      <div className="mt-6">
        <Link href="/blog">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default Slug;
