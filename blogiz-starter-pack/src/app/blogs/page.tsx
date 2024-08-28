"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { BlogPost } from "@/types";

const AllBlogsPage = () => {
  // const res = await fetch("http://localhost:4000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();
  // console.log(blogs);

  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");
  console.log(blogs);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl my-5">
        All Blogs <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-8 my-6">
        {blogs?.map((blog: BlogPost) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
