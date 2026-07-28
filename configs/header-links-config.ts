export interface HeaderLink {
  key: string;
  label: string;
  href: string;
}

export const headerLinksConfig: HeaderLink[] = [
  {
    key: "sheet-music",
    label: "Sheet Music",
    href: "/sheet-music",
  },
  {
    key: "books",
    label: "Books",
    href: "/books",
  },
  {
    key: "papers",
    label: "Papers",
    href: "/papers",
  },
  {
    key: "about",
    label: "About",
    href: "/about",
  },
  {
    key: "blog",
    label: "Blog",
    href: "/blog",
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
  },
];
