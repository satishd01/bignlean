import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { ApiPaths } from "@/constants";
import { Blog } from "@/utils/Schemas";

async function getAllBlogs() {
  const res = await fetch(process.env.BASE_URL + ApiPaths.BLOGS);
  const data = await res.json();
  return data?.blogs;
}

export default async function page({ params }: { params: { id: string } }) {
  const id = params?.id;
  const blogsData = (await getAllBlogs()) as Blog[];
  const blog = blogsData.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <p>Not a valid blog id</p>;
  }
  return (
    <CustomPageWrapper heading="Blogs">
      <div className="w-[90%] max-[900px]:w-full mx-auto relative rounded-[20px] overflow-hidden mb-[40px]">
        <img
          src={blog?.images[0]}
          alt="blog image"
          className="w-full object-cover bg-center max-h-[500px] object-center max-[550px]:h-[300px]"
        />
        <div className=" text-white   p-2 absolute bottom-10 left-4 w-1/2 max-[521px]:w-full">
          <div className="flex items-center gap-5 mb-4">
            <p className=" text-base not-italic font-medium bg-black p-1 px-2 rounded-[30px]">
              {blog?.category}
            </p>
            <p className=" text-base not-italic font-semibold">
              {blog &&
                new Date(blog?.createdAt).getDate() +
                  "-" +
                  new Date(blog?.createdAt).getMonth() +
                  "-" +
                  new Date(blog?.createdAt).getFullYear()}
            </p>
            <p className=" text-base not-italic font-normal">
              {blog?.duration} mins read
            </p>
          </div>
          <h2 className=" not-italic font-bold text-[40px] max-[550px]:text-2xl">
            {blog?.heading}
          </h2>
        </div>
      </div>
      <p className="text-gray-700 w-[95%] max-lg:w-full mx-auto text-lg not-italic font-normal mb-6">
        {blog?.bodyText}
      </p>
    </CustomPageWrapper>
  );
}
