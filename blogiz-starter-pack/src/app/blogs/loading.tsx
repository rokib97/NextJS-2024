import LoadingCard from "@/components/ui/LoadingCard";
import { BlogPost } from "@/types";
const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:4000/blogs");
  const blogs = await res.json();

  return (
    <div className="grid grid-cols-3 gap-4">
      {blogs.map((blog: BlogPost) => (
        <LoadingCard key={blog.id} />
      ))}
    </div>
  );
};

export default BlogLoadingPage;
