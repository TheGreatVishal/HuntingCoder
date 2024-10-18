import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Image for any blog post images

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className="max-w-3xl mx-auto p-4 ">

            <h1 className="text-4xl font-bold mb-2 justify-center">Title of Page: {slug}</h1>
            <hr className="mb-4" />

            {/* Optional Image for Blog Post */}
            <div className="mb-4">
                <Image
                    src="/image.png" // Replace with your image path
                    alt="Blog Post Image"
                    width={600}
                    height={400}
                    className="rounded-lg"
                />
            </div>

            <div className="text-lg text-gray-700 leading-relaxed">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum provident rerum repellat vero sit aut expedita, repudiandae est amet odit, fugit voluptates. Nemo.
                </p>
                <p className="mt-4">
                    Qui consequatur eius dolorum. Repellat mollitia aspernatur eveniet. Adipisci suscipit, dolorum pariatur doloribus sequi illum sint beatae. Ex amet rem soluta hic, sit necessitatibus, libero totam cumque incidunt quis rerum sapiente. Deleniti!
                </p>
            </div>

            <div className="mt-6">
                <Link href="/blog">
                    ← Back to Blog
                </Link>
            </div>
        </div>
    );
}

export default Slug;
