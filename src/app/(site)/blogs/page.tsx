import { BlogCard, BlogCarosoul } from "@/components";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { ApiPaths } from "@/constants";
import { Blog } from "@/utils/Schemas";

async function getAllBlogs() {
  const res = await fetch(process.env.BASE_URL + ApiPaths.BLOGS);
  if (res) {
    const data = await res.json();
    return data?.blogs;
  } else {
    throw new Error("FETCH FAILED");
  }
}

export default async function Page() {
  const blogsData = (await getAllBlogs()) as Blog[];
  return (
    <CustomPageWrapper heading="Blogs">
      <div className="w-[666px] max-[666px]:w-full mx-auto mb-[65px]">
        <BlogCarosoul blogData={blogsData} />
      </div>
      <div className="w-[1000px] max-[900px]:w-full mx-auto">
        <h2 className="text-black text-2xl not-italic font-bold mb-[34px]">
          Latest Blogs
        </h2>
        <div className="flex flex-col gap-6">
          {blogsData.map((blog, index, arr) => (
            <BlogCard key={index} blogData={blog} arr={arr} index={index} />
          ))}
        </div>
      </div>
    </CustomPageWrapper>
  );
}
