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
      { key: "shop", label: "Shop", href: "/shop" },
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
        key: "akirune",
        label: "Akirune",
        href: "https://akirune.com",
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
