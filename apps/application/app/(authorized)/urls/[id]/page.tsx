/** @notice Library imports */
import { Suspense } from "react";
import { CalendarClock, Copy, Rotate3D } from "lucide-react";
/// Local Imports
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import ChartLoader from "@/app/components/loaders/ChartLoader";
import SingleLinkCompartment from "../compartments/SingleLinkCompartment";
import BrowsersAnalytics from "@/app/components/BrowsersAnalytics";
import DeviceAnalytics from "@/app/components/DevicesAnalytics";
import CountriesAnalytics from "@/app/components/CountriesAnalytics";
import OSAnalytics from "@/app/components/OSAnalytics";
import ClicksAnalytics from "@/app/components/ClicksAnalytics";

const AuthorizedSingleUrlsPage = async (props: PageProps<"/urls/[id]">) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Suspense
        fallback={
          <section className="w-full flex flex-col gap-8">
            <Card className="w-full">
              <CardContent className="flex items-center justify-between">
                {/* Url Details part */}
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex items-center gap-4">
                    <div className="border rounded-full border-slate-800/60 p-2">
                      <Rotate3D className="size-12" />
                    </div>
                    <div className="w-full flex flex-col items-start gap-0 md:gap-1">
                      <div className="w-full flex items-center justify-between md:justify-start gap-4">
                        <Skeleton className="w-88 h-8" />
                        <Copy />
                      </div>
                      <Tooltip>
                        <TooltipTrigger>
                          <Skeleton className="w-48 h-4" />
                        </TooltipTrigger>
                        <TooltipContent>Destination</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <div className="w-full pt-2 flex items-center justify-start gap-2"></div>
                  <div className="w-full pt-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <CalendarClock className="text-slate-500 size-4" />
                      <Skeleton className="w-48 h-3" />
                    </div>
                  </div>
                </div>
                {/* Qr Code part */}
                <div className="hidden md:block">
                  <Skeleton className="w-[150px] h-[150px]" />
                </div>
              </CardContent>
            </Card>

            <div className="">
              <div className="flex flex-col items-start">
                <h1 className="text-lg md:text-2xl font-semibold">Clicks</h1>
                <p className="text-muted-foreground text-xs">
                  Number of clicks this month.
                </p>
              </div>
              <ChartLoader />
            </div>
          </section>
        }
      >
        <SingleLinkCompartment params={props.params} />
      </Suspense>

      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start">
          <h1 className="text-lg md:text-2xl font-semibold">Clicks</h1>
          <p className="text-muted-foreground text-xs">
            Number of clicks during this month.
          </p>
        </div>
        <Suspense fallback={<ChartLoader />}>
          <ClicksAnalytics />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Browser analytics */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start">
            <h1 className="text-lg md:text-2xl font-semibold">Browsers</h1>
            <p className="text-muted-foreground text-xs">
              Different types of browser activity.
            </p>
          </div>
          <Suspense fallback={<ChartLoader />}>
            <BrowsersAnalytics />
          </Suspense>
        </div>

        {/* Devices analytics */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start">
            <h1 className="text-lg md:text-2xl font-semibold">Devices</h1>
            <p className="text-muted-foreground text-xs">
              Different types of devices activity.
            </p>
          </div>
          <Suspense fallback={<ChartLoader />}>
            <DeviceAnalytics />
          </Suspense>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Countries analytics */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start">
            <h1 className="text-lg md:text-2xl font-semibold">Countries</h1>
            <p className="text-muted-foreground text-xs">
              Different countries activity.
            </p>
          </div>
          <Suspense fallback={<ChartLoader />}>
            <CountriesAnalytics />
          </Suspense>
        </div>

        {/* Devices analytics */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start">
            <h1 className="text-lg md:text-2xl font-semibold">
              Operating Systems
            </h1>
            <p className="text-muted-foreground text-xs">
              Different types of OS activity.
            </p>
          </div>
          <Suspense fallback={<ChartLoader />}>
            <OSAnalytics />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AuthorizedSingleUrlsPage;
