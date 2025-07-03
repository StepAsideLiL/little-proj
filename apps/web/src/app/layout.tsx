import fonts from "@/lib/fonts";
import type { Metadata } from "next";
import "@workspace/design-system/globals.css";
import nextMetadata from "@/lib/next-metadata";

export const metadata: Metadata = nextMetadata("mucha");

export default function Layout({
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
