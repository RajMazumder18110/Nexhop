/** @notice Library imports */
import Link from "next/link";
import { Suspense } from "react";
/// Local imports
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
/// Compartments contents
import { TopLinksContents, LinksStatsContents } from "./compartments";
/// Compartments loader
import { LinkStatsLoader } from "./compartments/loaders";
import { Button } from "@/components/ui/button";
import { ShortedUrlRowsLoader } from "@/app/components/loaders";
import ChartLoader from "@/app/components/loaders/ChartLoader";
import ClicksAnalytics from "@/app/components/ClicksAnalytics";

const AuthorizedHomePage = () => {
  return (
    <section className="py-4 w-full flex flex-col items-start gap-8">
      {/* Greetings */}
      <section className="flex flex-col items-start">
        <h1 className="text-xl">
          <span className="text-highlight font-semibold">Welcome</span>, Raj
        </h1>
        <p className="text-slate-500 text-sm">
          Links are live. See clicks at a glance.
        </p>
      </section>

      <section className="w-full flex flex-col items-start gap-4">
        <h1 className="text-lg md:text-xl font-semibold">Overview</h1>
        <div className="w-full flex flex-col items-start gap-6">
          {/* Monthly Analytics */}
          <Tooltip>
            <TooltipTrigger className="w-full">
              <Suspense fallback={<ChartLoader />}>
                <ClicksAnalytics />
              </Suspense>
            </TooltipTrigger>
            <TooltipContent>Clicks</TooltipContent>
          </Tooltip>

          {/* Full links stats */}
          <Suspense fallback={<LinkStatsLoader />}>
            <LinksStatsContents />
          </Suspense>
        </div>
      </section>

      {/* Top performant urls */}
      <section className="w-full flex flex-col items-start gap-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-semibold">Top Urls</h1>
          <Button variant="link" asChild>
            <Link href="/urls">View all</Link>
          </Button>
        </div>
        <div className="w-full flex flex-col gap-4">
          <Suspense fallback={<ShortedUrlRowsLoader count={5} />}>
            <TopLinksContents />
          </Suspense>
        </div>
      </section>
    </section>
  );
};

export default AuthorizedHomePage;
