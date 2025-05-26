import { Helmet } from 'react-helmet-async';
import { blogs } from '@/data/blog';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import './style.css';

export default function BlogList() {
  const pageKeywords = [
    "Tajweed rules guide",
    "Quran learning blog",
    "Islamic education articles",
    "How to read Quran properly",
    "Tajweed for beginners",
    "Online Quran resources",
    "Quran pronunciation tips",
    "Best way to learn Tajweed",
    "Quran study materials",
    "Free Tajweed lessons"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogs.map((blog, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "name": blog.title,
        "url": `${window.location.origin}/blog/${blog.slug}`,
        "datePublished": blog.date,
        "description": blog.description,
        "image": blog.image
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Tajweed e Quran Guides - Learn Quran Properly</title>
        <meta name="description" content="Explore our comprehensive collection of Tajweed and Quran learning guides. Perfect for beginners and advanced students alike." />
        <meta name="keywords" content={pageKeywords.join(', ')} />
        <meta property="og:title" content="Tajweed e Quran Guides - Learn Quran Properly" />
        <meta property="og:description" content="Comprehensive Tajweed rules and Quran learning resources" />
        <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <link rel="canonical" href={`${window.location.origin}/blogs`} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <header className="relative w-full h-56 md:h-96 flex items-center justify-center background-tajweed-quran bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Tajweed e Quran Guides & Resources
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Master Quran recitation with our expert-written guides on Tajweed rules, pronunciation, and Quran study techniques.
          </p>
        </div>
      </header>

      {/* Blog Grid */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogs.map((blog) => (
            <article key={blog.slug} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              <Link to={`/blog/${blog.slug}`} className="block h-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 md:h-54 object-cover"
                  loading="lazy"
                />
                <div className="p-5 md:p-6">
                  <h2 className="text-xl font-semibold text-gray-800 hover:text-[#1e88e5] transition">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    By <span className="font-medium">Tajweed e Quran Academy</span> ·{' '}
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="mt-3 text-gray-700 text-sm md:text-base line-clamp-3">
                    {blog.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-[#1e88e5] hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}