export interface FooterLink {
  key: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerLinksConfig: FooterSection[] = [
  {
    title: "Pages",
    links: [
      { key: "sheet-music", label: "Sheet Music", href: "/sheet-music" },
      { key: "books", label: "Books", href: "/books" },
      { key: "papers", label: "Papers", href: "/papers" },
      { key: "about", label: "About", href: "/about" },
      { key: "blog", label: "Blog", href: "/blog" },
      { key: "contact", label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        key: "athanasa",
        label: "Athanasa",
        href: "https://athanasa.com",
        isExternal: true,
      },
      {
        key: "fading-hell",
        label: "Fading Hell",
        href: "https://fadinghell.com",
        isExternal: true,
      },
      {
        key: "eternal-bravery",
        label: "Eternal Bravery",
        href: "https://eternalbravery.com",
        isExternal: true,
      },
      {
        key: "qalamis",
        label: "Qalamis",
        href: "https://qalamis.com",
        isExternal: true,
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        key: "github",
        label: "GitHub",
        href: "https://github.com/andrejkoller",
        isExternal: true,
      },
      {
        key: "linkedin",
        label: "LinkedIn",
        href: "https://linkedin.com/in/andrejkoller",
        isExternal: true,
      },
      {
        key: "x",
        label: "X",
        href: "https://x.com/andrejkoller",
        isExternal: true,
      },
      {
        key: "instagram",
        label: "Instagram",
        href: "https://instagram.com/andrejkollerofficial",
        isExternal: true,
      },
      {
        key: "youtube",
        label: "YouTube",
        href: "https://youtube.com/@andrejkoller",
        isExternal: true,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        key: "privacy-policy",
        label: "Privacy Policy",
        href: "/legal/privacy-policy",
      },
      {
        key: "terms-of-service",
        label: "Terms of Service",
        href: "/legal/terms-of-service",
      },
      {
        key: "cookie-preferences",
        label: "Cookie Preferences",
        href: "/legal/cookie-preferences",
      },
      { key: "imprint", label: "Imprint", href: "/legal/imprint" },
    ],
  },
];
