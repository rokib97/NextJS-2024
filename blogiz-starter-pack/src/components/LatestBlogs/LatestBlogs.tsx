import { BlogPost } from "@/types";
import BlogCard from "../ui/BlogCard";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlogs = ({ blogs }: { blogs: BlogPost[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl my-5">
        Latest Blog <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-8 my-6">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-8 my-6">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
