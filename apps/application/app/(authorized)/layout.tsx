/** @notice Library imports */
import { Suspense } from "react";
/// Local imports
import { rootLayoutMeta } from "@/metadata";
import { Skeleton } from "@/components/ui/skeleton";
import BreadcrumbView from "../components/BreadcrumbView";
import NavBarAuthorized from "../components/NavBarAuthorized";

export const metadata = rootLayoutMeta;

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container pb-4 w-[90%] max-w-6xl min-h-screen mx-auto">
      <NavBarAuthorized />
      <Suspense
        fallback={
          <div className="py-4.5 flex items-start gap-4">
            <Skeleton className="w-15 h-4" />
            <Skeleton className="w-15 h-4" />
          </div>
        }
      >
        <BreadcrumbView />
      </Suspense>
      {children}
    </main>
  );
}
