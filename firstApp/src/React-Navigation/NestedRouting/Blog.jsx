import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BlogPost from "./SingleBlog";
import BlogList from "./BlogList";

function Blog() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog Section</h1>
      <nav className="mt-4 space-x-4">
        <Link to="" className="text-blue-500 hover:underline">
          Blog List
        </Link>
        <Link to="post" className="text-blue-500 hover:underline">
          Blog Post
        </Link>
      </nav>

      <Routes>
        <Route path="" element={<BlogList />} />
        <Route path="post" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default Blog;
