import fonts from "@/lib/fonts";
import type { Metadata } from "next";
import "@workspace/design-system/globals.css";
import siteConfig from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    template: `%s - ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  authors: siteConfig.author,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts.inter.className}`}>{children}</body>
    </html>
  );
}
