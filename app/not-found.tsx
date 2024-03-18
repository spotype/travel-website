import Errors from "@/public/404error.jpg";
import Image from "next/image";
import Link from "next/link";
export default function notfound() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <Image src={Errors} width={1000} alt="error page image" />
      <Link
        href={"/"}
        className="text-white bg-black text-xl py-4 px-8 rounded-2xl font-bold"
      >
        Go To Home
      </Link>
    </div>
  );
}
