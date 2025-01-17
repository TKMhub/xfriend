import React from "react";
import Link from "next/link";
import { topBarLinks } from "@/app/src/config/links";

const TopBar = () => {
  return (
    <header className="w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      {/* ロゴ */}
      <div className="text-xl font-bold">MyApp</div>
      {/* リンク */}
      <nav>
        <ul className="flex gap-6">
          {topBarLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
