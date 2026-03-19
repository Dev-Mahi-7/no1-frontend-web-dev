import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  href: string;
}

const menu: Props[] = [
  {
    name: "Closures",
    href: "/closures",
  },
  {
    name: "Promises",
    href: "/promises",
  },
  {
    name: "Color Advisor AI",
    href: "/color-theory",
  },
];

const HomeContainer = () => {
  return (
    <div className="h-screen ">
      <div className="max-w-300 grid gap-3 grid-cols-4 bg-amber-100 h-full mx-auto p-3">
        {menu.map((item, idx) => (
          <div
            key={idx}
            className="h-30 border border-amber-50 rounded-md bg-amber-50 group flex active:scale-95 cursor-pointer items-center justify-center"
          >
            <Link href={item.href} className="text-3xl max-w-60 truncate  group-hover:font-bold">
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
