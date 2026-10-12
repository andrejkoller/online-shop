import { footerLinksConfig } from "@/configs/footer.config";
import Link from "next/link";
import { ThemeSwitcher } from "../theme/theme-switcher";

export const Footer = () => {
  return (
    <footer className="bg-(--color-background) before:block before:h-px before:w-full before:content-[''] before:bg-(--color-border)">
      <div className="w-full max-w-360 mx-auto px-8 py-9">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-center">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {footerLinksConfig.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 text-sm font-medium text-(--color-primary)">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.key} className="mb-3">
                      <Link
                        href={link.href}
                        {...(link.isExternal && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="text-sm font-medium text-(--color-muted) transition-colors duration-200 hover:text-(--color-primary)"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-12">
          <p className="text-sm font-medium text-(--color-muted)">
            &copy; {new Date().getFullYear()} Andrej Koller
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};
