import React from "react";
import "../Css/BlogPosts.css";
import blogImage1 from "../almabetter resoures/blog.png"; // make sure the path to your image is correct
import blogImage2 from "../almabetter resoures/blog2.jpg";
import blogImage3 from "../almabetter resoures/blog3.jpg";
import blogImage4 from "../almabetter resoures/blog4.jpg";

const posts = [
  {
    id: 1,
    title: "MongoDB Knowledge",
    date: "April 9th 2024",
    description:
      "Why you should seriously consider joining Speedup Infotech. Learn & Explore about better carrier opportunities.",
    category: "Program Info",
    blogIcon: blogImage1,
  },
  {
    id: 2,
    title: "Postman New Features -2024",
    date: "March 16th 2024",
    description:
      "Understand and learn about the latest features launched by the postman for testing API's",
    category: "Backend",
    blogIcon: blogImage2,
  },
  {
    id: 3,
    title: "Understanding React.js",
    date: "May 16th 2023",
    description:
      "Learn from the basics of React.js till how to convert figma file into real websites.",
    category: "Frontend",
    blogIcon: blogImage3,
  },
  {
    id: 4,
    title: "MongoDB Knowledge",
    date: "May 15th 2023",
    description:
      "MongoDB is quickly becoming one of the most popular databases in the world.",
    category: "Backend",
    blogIcon: blogImage4,
  },
];

const BlogPosts = () => {
  return (
    <div className="blog-container">
      <div className="banner">
        <h1>Blog's by Speedup Infotech</h1>
        <p>
          Explore useful content around our programs, what's hot in the tech
          ecosystem and building career in tech, we frequently update the reads,
          stay tuned.
        </p>
      </div>

      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.blogIcon} alt="blog" className="post-image" />
            <div className="post-category">{post.category}</div>
            <h4>{post.title}</h4>
            <span className="post-date">{post.date}</span>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
