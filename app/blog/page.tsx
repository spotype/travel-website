import getAllPost from "@/lib/getAllPost";
import Link from "next/link";

export default async function page() {
  const post = await getAllPost();
  return (
    <div className="py-28">
      <div className="mx-auto flex flex-col w-11/12 lg:w-[1250px] items-center">
        <h1 className="text-center font-bold text-3xl py-5">My Blogs</h1>
        <div className="grid gap-8 sm:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3">
          {post.products.map(function (res: any) {
            return (
              <Link href={`${res.id}`} key={res.id}>
                <div
                  key={res.id}
                  className="w-72 p-4 bg-white shadow-lg rounded-xl"
                >
                  <img
                    src={`${res.thumbnail}`}
                    className="w-full h-44 object-cover object-center"
                    alt="product image"
                  />
                  <div className="mt-4">
                    <h1 className="font-bold text-xl">{res.title}</h1>
                    <span className="text-red-600 font-bold text-lg">
                      ${res.price}
                    </span>
                    <p>{res.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
