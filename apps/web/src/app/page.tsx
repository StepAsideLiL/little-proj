import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-1 py-10">
      <h1 className="text-2xl font-bold">Hi! 👋 </h1>
      <p>Welcome to Little Proj.</p>

      <div className="h-10"></div>

      <div>
        <h3>Edit The following files to get started:</h3>
        <ul className="list-inside list-disc">
          <li>
            <code className="font-mono text-sm">package.json</code>{" "}
            <span>[name field]</span>
          </li>
          <li>
            <code className="font-mono text-sm">
              apps/web/src/lib/site-config/index.ts
            </code>{" "}
            <span>[name, description, author name and url field]</span>
          </li>
          <li>
            <code className="font-mono text-sm">apps/web/public</code>{" "}
            <span>
              [generate android-chrome-192x192.png, android-chrome-512x512.png,
              apple-touch-icon.png, favicon.ico, favicon-16x16.png,
              favicon-32x32.png, site.webmanifest from{" "}
              <Link href={"https://favicon.io/"} className="underline">
                favicon.io
              </Link>{" "}
              and paste in public folder]
            </span>
          </li>
        </ul>
      </div>
    </main>
  );
}
