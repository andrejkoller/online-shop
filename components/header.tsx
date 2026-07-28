"use client";

import { headerLinksConfig } from "@/configs/header-links-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col justify-between items-center z-1000 h-(--header-height) bg-(--color-background) sticky top-0 after:block after:content-[''] after:h-px after:w-full after:bg-(--color-border)">
      <div className="flex justify-between items-center max-w-360 mx-auto w-full h-full px-6">
        <ul className="flex items-center justify-start gap-6">
          {headerLinksConfig.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={`cursor-pointer transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-(--color-primary)"
                    : "text-(--color-muted)"
                } hover:text-(--color-primary)`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
