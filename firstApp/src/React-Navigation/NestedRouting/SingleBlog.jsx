import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import PostDetails from "./PostDetails";

function BlogPost() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Blog Post</h2>
      <p className="mt-2">This is a detailed view of a single blog post.</p>

      <Link to="PostDetails" className="text-blue-500 hover:underline">
        BLog post detail
      </Link>

      <Routes>
        <Route path="PostDetails" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default BlogPost;
