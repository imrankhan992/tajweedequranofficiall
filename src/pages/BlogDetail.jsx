import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

import rehypeRaw from 'rehype-raw';
import matter from 'gray-matter';
import './style.css';
import Layout from '@/components/Layout/Layout';

export default function BlogDetail() {
 const { slug } = useParams();
  const [content, setContent] = useState('');
  const [frontMatter, setFrontMatter] = useState({
    title: 'Loading...',
    description: '',
    author: '',
    date: '',
    image: ''
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
        
        // Parse front matter and content using browser-compatible parser
        const parsed = matter(text);
        
        setFrontMatter({
          title: parsed.data.title || 'Untitled',
          description: parsed.data.description || '',
          author: parsed.data.author || 'Anonymous',
          date: parsed.data.date || new Date().toISOString(),
          image: parsed.data.image || ''
        });
        
        setContent(parsed.content);
        setError(null);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Blog post not found');
        setFrontMatter({
          title: 'Blog Not Found',
          description: 'The requested blog post could not be found.'
        });
        setContent('# Blog Not Found\n\nThe requested blog post could not be found.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="loading-container">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }
console.log(frontMatter.image);
  return (
    <Layout>
      <div 
        className="background-tajweed-quran"
        style={frontMatter.image ? { backgroundImage: `url(${frontMatter.image})` } : {}}
      >
        <div className="blog-header-content">
          <h1 className="blog-title">{frontMatter.title}</h1>
          <p className="blog-description">{frontMatter.description}</p>
          <div className="blog-meta">
            <span className="blog-author">By {frontMatter.author}</span>
            <span className="blog-date">
              {new Date(frontMatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>
      
      <article className="markdown-body">
        {error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : (
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({node, ...props}) => (
                <img {...props} style={{maxWidth: '100%', height: 'auto'}} alt={props.alt || ''} />
              ),
              table: ({node, ...props}) => (
                <div className="table-container">
                  <table {...props} />
                </div>
              )
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </article>
    </Layout>
  );
}