import Cursor from "@/components/Cursor";
import "./[locale]/globals.css";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Cursor />
      <main className="flex flex-col space-y-10 items-center justify-center my-14 px-8 lg:px-0">
        <Image
          src={"/404-error-page.webp"}
          alt="Not found image"
          width={500}
          height={500}
          className="object-cover"
        />
        <Link href="/">
          <div
            className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-md transition sub-title"
            data-cursor="clickable"
          >
            <Home className="text-lg" />
          </div>
        </Link>
      </main>
    </>
  );
};

export default NotFound;
