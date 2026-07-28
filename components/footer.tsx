import { footerLinksConfig } from "@/configs/footer-links-config";
import Link from "next/link";
import { ThemeSwitcher } from "./theme/theme-switcher";

export const Footer = () => {
  return (
    <footer className="bg-(--color-secondary) before:block before:content-[''] before:h-px before:w-full before:bg-(--color-border)">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-300 mx-auto w-full px-6 pt-9">
        {footerLinksConfig.map((section) => (
          <div key={section.title} className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-(--color-primary) tracking-wide">
              {section.title}
            </span>
            <ul className="flex flex-col gap-2.5">
              {section.links.map((link) =>
                link.isExternal ? (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-(--color-muted) hover:text-(--color-primary) transition-colors duration-200"
                      title={`${link.label} (opens in a new tab)`}
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-sm text-(--color-muted) hover:text-(--color-primary) transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center max-w-300 mx-auto w-full px-6 pb-9 mt-12">
        <p className="text-sm text-(--color-muted)">
          © {new Date().getFullYear()} Andrej Koller. All rights reserved.
        </p>
        <ThemeSwitcher />
      </div>
    </footer>
  );
};
