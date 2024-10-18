import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Blog = () => {
  // Declare state to hold blog data
  const [blogs, setBlogs] = useState([]);

  // Fetch blog data from the API when the component is first rendered
  useEffect(() => {
    console.log("useEffect is running");

    // Fetching data from the local API
    // fetch('http://localhost:3000/api/blogs')
    fetch('https://hunting-coder-omega.vercel.app//api/blogs')
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        console.log(data); // Log the fetched data on console...
        setBlogs(data); // Set the blogs state with the fetched data
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="blogs flex flex-col items-center justify-center space-y-6 p-6 bg-slate-700">
     
     
      {/* Map through the blogs array and dynamically render each blog post */}
     
      {blogs.map((blog) => (
        <div key={blog.title} className="blogItem bg-white p-6 rounded-lg shadow-lg max-w-md text-center">

          <Link href={`/blogpost/${blog.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <h3 className="text-2xl font-bold text-black mb-2">{blog.title}</h3>
          </Link>
        
          <p className="text-gray-600">
            {blog.content.substring(0, 100)}...
          </p>
        
        
        </div>
      ))}
    
    
    </div>
  );
};

export default Blog;
