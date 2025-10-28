/** @notice Library imports */
import { Suspense } from "react";
/// Local imports
import { rootLayoutMeta } from "@/metadata";
import NavBarAuthorized from "../components/NavBarAuthorized";
import BreadcrumbView from "../components/BreadcrumbView";

export const metadata = rootLayoutMeta;

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container pb-4 w-[90%] max-w-6xl min-h-screen mx-auto">
      <NavBarAuthorized />
      <Suspense>
        <BreadcrumbView />
      </Suspense>
      {children}
    </main>
  );
}
