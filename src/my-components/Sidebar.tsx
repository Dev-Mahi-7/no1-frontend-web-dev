"use client";
import { menus } from "@/feat/home/navItems/menus";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sidebar bg-green-800  w-70 h-full overflow-y-auto">
      <div className="flex py-2 flex-col gap-3 text-white text-lg">
        {menus.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <div
              key={idx}
              className={` ${isActive ? "rounded-r-full cursor-pointer font-bold text-black bg-green-400" : ""} hover:text-black hover:bg-green-400 cursor-pointer hover:rounded-r-full  p-2 `}
            >
              <Link
                href={item.href}
                className=" max-w-60 truncate  group-hover:font-bold"
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
