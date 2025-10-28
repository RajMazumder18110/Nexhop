/** @notice Library imports */
import { Suspense } from "react";
/// Local imports
import { ShortedUrlRowsLoader } from "@/app/components/loaders";
import { PaginatedLinksCompartment } from "./compartments";

const AuthorizedAllUrlsPage = () => {
  return (
    <section className="py-4 w-full flex flex-col items-start gap-8">
      {/* All links */}
      <section className="w-full flex flex-col items-start gap-4">
        <div className="w-full flex flex-col items-start gap-1">
          <h1 className="text-lg md:text-2xl font-semibold">All Urls</h1>
          <p className="text-xs text-slate-300">Total {20} links found.</p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <Suspense fallback={<ShortedUrlRowsLoader count={5} />}>
            <PaginatedLinksCompartment />
          </Suspense>
        </div>
      </section>
    </section>
  );
};

export default AuthorizedAllUrlsPage;
