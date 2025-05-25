import { blogs } from '@/data/blog';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import './style.css';

export default function BlogList() {
  return (
    <Layout>
      {/* Header */}
      <div className="relative w-full h-56 md:h-72 flex items-center justify-center background-tajweed-quran">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center">
         Tajweed e Quran Guides
        </h1>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog.slug}`}
              key={blog.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 hover:text-[#1e88e5] transition">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  By <span className="font-medium">Priya Wallingford</span> ·{' '}
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
                <p className="mt-2 text-gray-700 text-sm line-clamp-3">
                  {blog.description}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-[#1e88e5] hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
