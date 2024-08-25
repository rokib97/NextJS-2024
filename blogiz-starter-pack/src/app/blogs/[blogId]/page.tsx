import BlogDetails from "@/components/ui/BlogDetails";
import { Blog, BlogPost } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:4000/blogs`);
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: BlogPost) => ({
    blogId: blog.id,
  }));
};

const BlogDetailsPage = async ({ params }: Blog) => {
  const res = await fetch(`http://localhost:4000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  console.log(blog);
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
