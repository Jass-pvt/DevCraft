import type { SocialLink } from "@/types";

/**
 * Only list platforms where DevCraft actually has an active account.
 * Update the URLs below before launch.
 */
export const socialLinks: SocialLink[] = [
  { id: "linkedin", name: "LinkedIn", url: "https://www.linkedin.com/company/devcraft", icon: "linkedin" },
  { id: "github", name: "GitHub", url: "https://github.com/devcraft-jr", icon: "github" },
  { id: "instagram", name: "Instagram", url: "https://www.instagram.com/devcraft.jr/", icon: "instagram" },
];
