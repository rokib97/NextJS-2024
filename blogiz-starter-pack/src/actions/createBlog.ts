"use server";

import { BlogPost } from "@/types";

export const createBlog = async (data: BlogPost) => {
  const res = fetch("http://localhost:4000/blogs", {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const blogInfo = (await res).json();
  return blogInfo;
};
