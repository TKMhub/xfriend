import React from "react";
import Link from "next/link";
import { sideBarLinks } from "@/app/src/config/links";

const SideBar = () => {
  return (
    <aside className="w-64 bg-gray-700 text-white h-screen flex flex-col justify-between">
      {/* 上部リンク */}
      <div>
        <ul className="mt-4">
          {sideBarLinks.map((link) => (
            <li key={link.name} className="px-4 py-2 hover:bg-gray-600">
              <Link href={link.path} className="flex items-center gap-2">
                {/* 仮のアイコン */}
                <span className="material-icons">{link.icon}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* 下部ユーザー情報 */}
      <div className="p-4 border-t border-gray-600">
        <p className="text-sm">Logged in as:</p>
        <p className="font-semibold">John Doe</p>
      </div>
    </aside>
  );
};

export default SideBar;
