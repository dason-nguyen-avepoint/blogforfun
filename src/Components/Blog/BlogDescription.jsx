import React from "react";
import BlogIntroTitle from "./BlogIntroTitle";
import BlogFooterImage from "./BlogFooterImage";
import "./BlogContent.css";

const BlogDescription = () => {
  return (
    <div className="blog-intro">
      <BlogIntroTitle />
      <div className="blog-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="blog-links">
        <div className="divider" />
        <div className="links">
          <a href="#">View Blog Post No. 3</a>
          <a href="#">View Blog Post No. 5</a>
        </div>
      </div>
      <BlogFooterImage />
    </div>
  );
};

export default BlogDescription;
