import { poppins } from "./layout";

export default function Home() {
  return (
    <main className="cover flex items-center justify-center">
      <div className="mx-auto flex w-11/12 items-center justify-center 2xl:w-[1250px]">
        <div>
          <div className="text-center">
            <h1
              className={`${poppins.className} font-bold text-cyan-50 text-5xl shadow-2xl`}
            >
              It's a Big World Out There, Go Explore
            </h1>
            <p className="mt-4 text-gray-300">
              Conveniently customize proactive web services for leveraged
              without continualliery aggregate fricctionle ou welliesrichard.and
              very customize continually.
            </p>

            <div className="flex gap-4 mt-5">
              <button className="font-bold py-3 px-6 bg-yellow-400">
                Get Exploration
              </button>
              <button className="font-bold py-3 px-6 bg-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
