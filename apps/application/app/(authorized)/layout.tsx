/** @notice Library imports */
/// Local imports
import { rootLayoutMeta } from "@/metadata";

export const metadata = rootLayoutMeta;

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container w-[90%] max-w-6xl min-h-screen mx-auto">
      Authorized
      {children}
    </main>
  );
}
