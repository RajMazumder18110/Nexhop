/** @notice Library imports */
/// Local imports
import { rootLayoutMeta } from "@/metadata";

export const metadata = rootLayoutMeta;

export default function UnauthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container w-[90%] max-w-6xl min-h-screen mx-auto">
      Unauthorized
      {children}
    </main>
  );
}
