/** @notice Library imports */
import { Suspense } from "react";
import { CalendarClock, Edit, Rotate3D, Trash } from "lucide-react";
/// Local imports
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import LinkQRCode from "@/components/LinkQRCode";
import CopyToClip from "@/components/CopyToClip";
import { Button } from "@/components/ui/button";
import DeleteLinkButton from "./DeleteLinkButton";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

type SingleLinkCompartmentProps = {
  params: PageProps<"/urls/[id]">["params"];
};

const SingleLinkCompartment = async (props: SingleLinkCompartmentProps) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const url = {
    longUrl: "https://google.com",
    shortUrl: "nexhop.xyz/ncwei",
    createdAt: new Date(),
  };

  return (
    <Dialog>
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
                  <div className="w-full flex items-center justify-between md:justify-start gap-2">
                    <h1 className="text-xl md:text-4xl text-highlight font-semibold">
                      {url.shortUrl}
                    </h1>
                    <div className="flex items-center">
                      <Suspense>
                        <CopyToClip
                          text={url.shortUrl}
                          iconClassName="size-5"
                        />
                      </Suspense>
                      <Suspense>
                        <Button
                          variant={"ghost"}
                          size={"icon-lg"}
                          className="hover:text-highlight transition-colors duration-300"
                        >
                          <Edit className="size-5" />
                        </Button>
                      </Suspense>
                      {/* Delete Button */}
                      <DialogTrigger>
                        <div
                          className={cn(
                            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                            "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                            "size-9"
                          )}
                        >
                          <Trash className="size-5 text-red-500" />
                        </div>
                      </DialogTrigger>
                    </div>
                  </div>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="text-muted-foreground text-sm md:text-lg">
                        {url.longUrl}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>Destination</TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <div className="w-full pt-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CalendarClock className="text-slate-500 size-4" />
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="text-slate-500 text-xs md:text-sm font-medium">
                        {url.createdAt.toLocaleString()}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>Created on</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
            {/* Qr Code part */}
            <div className="hidden md:block">
              <Suspense>
                <LinkQRCode width={150} height={150} shortUrl={url.shortUrl} />
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Delete content */}
      <DeleteLinkButton />
    </Dialog>
  );
};

export default SingleLinkCompartment;
