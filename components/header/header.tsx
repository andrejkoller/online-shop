"use client";

import { headerLinksConfig } from "@/configs/header.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-1000 flex flex-col h-(--header-height) items-center justify-between bg-(--color-secondary) after:block after:h-px after:w-full after:content-[''] after:bg-(--color-border)">
      <div className="flex h-full w-full max-w-360 items-center justify-between mx-auto px-8">
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
