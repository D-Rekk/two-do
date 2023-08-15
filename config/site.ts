export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "2Do",
  description:
    "Simple to-do app built in Next.js 13, shadcn and TailwindCSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/d-rekk",
    docs: "https://ui.shadcn.com",
  },
}
