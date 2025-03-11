import React from "react";
import BlogTitleSection from "./BlogTitleSection";
import "./BlogContent.css";
import BlogImage from "./BlogImage";
import BlogDescription from "./BlogDescription";
const BlogContent = () => {
  return (
    <section className="blog-section">
      <BlogTitleSection />
      <BlogImage />
      <BlogDescription />
    </section>
  );
};

export default BlogContent;
