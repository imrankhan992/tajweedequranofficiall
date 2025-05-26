import { Buffer } from 'buffer';
window.Buffer = Buffer;

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import matter from 'gray-matter';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout/Layout';
import './style.css';

export default function BlogDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [frontMatter, setFrontMatter] = useState({
    title: 'Loading...',
    description: '',
    author: 'Tajweed e Quran Academy',
    date: '',
    image: '',
    keywords: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        // Dynamically import the markdown file
        const post = await import(`../Blogs/${slug}.md`);
        const response = await fetch(post.default);
        const text = await response.text();
        
        const parsed = matter(text);
        
        setFrontMatter({
          title: parsed.data.title || 'Untitled',
          description: parsed.data.description || '',
          author: parsed.data.author || 'Tajweed e Quran Academy',
          date: parsed.data.date || new Date().toISOString(),
          image: parsed.data.image || '/default-blog-image.jpg',
          keywords: parsed.data.keywords || ['Tajweed', 'Quran learning', 'Islamic education']
        });
        
        setContent(parsed.content);
        setError(null);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Blog post not found');
        setFrontMatter({
          title: 'Blog Not Found',
          description: 'The requested blog post could not be found.',
          author: 'Tajweed e Quran Academy'
        });
        setContent('# Blog Not Found\n\nThe requested blog post could not be found.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  const generateStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": frontMatter.title,
    "description": frontMatter.description,
    "author": {
      "@type": "Organization",
      "name": frontMatter.author,
      "url": window.location.origin
    },
    "datePublished": frontMatter.date,
    "image": frontMatter.image,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  });

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#014B5E]"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{frontMatter.title} | Tajweed e Quran Academy</title>
        <meta name="description" content={frontMatter.description} />
        <meta name="keywords" content={frontMatter.keywords.join(', ')} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
        <meta property="og:image" content={frontMatter.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="article:published_time" content={frontMatter.date} />
        <meta name="article:author" content={frontMatter.author} />
          <link rel="canonical" href={`${window.location.origin}/blogs/${slug}`} />

        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      <header 
        className="relative bg-cover bg-center  md:h-96 flex items-end pb-10"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${frontMatter.image})` }}
      >
        <div className="container mx-auto px-4 text-white flex flex-col items-center justify-center p-6 rounded-lg shadow-lg">
          <div className="max-w-3xl  ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{frontMatter.title}</h1>
            <p className="text-lg md:text-xl mb-6">{frontMatter.description}</p>
            <div className="flex items-center space-x-4">
              <span className="text-sm md:text-base">By {frontMatter.author}</span>
              <span className="text-sm md:text-base">
                {new Date(frontMatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          {error ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
              <p className="text-gray-700">{error}</p>
            </div>
          ) : (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({node, ...props}) => (
                  <img 
                    {...props} 
                    className="rounded-lg shadow-md my-4 mx-auto" 
                    alt={props.alt || frontMatter.title} 
                    loading="lazy"
                  />
                ),
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto">
                    <table {...props} className="w-full my-4" />
                  </div>
                ),
                a: ({node, ...props}) => (
                  <a {...props} className="text-[#014B5E] hover:underline" />
                ),
                h2: ({node, ...props}) => (
                  <h2 {...props} className="text-2xl font-bold mt-8 mb-4 text-[#023847]" />
                ),
                h3: ({node, ...props}) => (
                  <h3 {...props} className="text-xl font-bold mt-6 mb-3 text-[#023847]" />
                )
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </article>

        <div className="mt-16 border-t pt-8">
          <h3 className="text-xl font-bold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            {/* Add social sharing buttons here */}
          </div>
        </div>
      </main>
    </Layout>
  );
}