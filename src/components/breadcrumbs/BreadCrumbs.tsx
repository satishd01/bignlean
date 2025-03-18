"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

export default function BreadCrumbs({}: Props) {
  const pathname = usePathname();

  const paths = pathname.split("/");

  function createCrumbs(paths: string[]) {
    const crumbs: string[] = [];
    let path = "";
    paths.forEach((_path, index) => {
      path += index === 0 ? `${_path}` : `/${_path}`;
      crumbs.push(path);
    });

    return crumbs;
  }

  const breads = createCrumbs(paths);

  const myBreads = breads.splice(0, paths.length - 1);
  if (breads[0] === "/") return;
  return (
    <div className="w-full  max-w-[1300px] max-xl:px-3 mx-auto py-2 text-center flex gap-1 justify-start items-center">
      {myBreads.map((path, index) => (
        <>
          <Link
            key={index}
            href={path || "/"}
            className="capitalize text-sm text-[#001942] font-light max-sm:text-[10px]"
          >
            {path === ""
              ? "Home"
              : path
                  .split("/")
                  [path.split("/").length - 1].split("-")
                  .join(" ")}
          </Link>
          {index < breads.length - 1 ? "" : ">"}
        </>
      ))}
      <span className="capitalize text-sm max-sm:text-[10px]  text-[#E70F0F] line-clamp-1 text-start  cursor-pointer">
        {decodeURIComponent(
          breads[breads.length - 1]
            .split("/")
            [breads[breads.length - 1].split("/").length - 1].split("-")
            .join(" ")
        )}
      </span>
    </div>
  );
}
