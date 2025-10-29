/** @notice Library imports */
import Link from "next/link";
import { Suspense } from "react";
import { CalendarClock, Download, ScanQrCode, X } from "lucide-react";
/// Local imports
import CopyToClip from "@/components/CopyToClip";
import { Card, CardContent } from "@/components/ui/card";
import LinkQRCode from "@/components/LinkQRCode";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LinkDialogPopup from "@/components/LinkDialogPopup";

type ShortedUrlRowProps = {
  rowId: string;
  shortUrl: string;
  longUrl: string;
  createdAt: Date;
};

export const ShortedUrlRow = ({
  rowId,
  shortUrl,
  longUrl,
  createdAt,
}: ShortedUrlRowProps) => {
  return (
    <Dialog>
      <Card className="group w-full hover:border-highlight/40 hover:scale-105 transition-all duration-300 ease-in-out">
        <CardContent className="flex flex-col items-start justify-start gap-4">
          <div className="w-full flex items-center justify-between">
            {/* Link details */}
            <div className="w-full flex flex-col items-start justify-center gap-1">
              <h1 className="font-medium text-md md:text-2xl text-highlight">
                {shortUrl}
              </h1>
              <p className="text-slate-500 text-xs md:text-sm font-bold">
                {longUrl}
              </p>
            </div>

            {/* Link actions */}
            <Suspense>
              <CopyToClip text={shortUrl} />
            </Suspense>

            <DialogTrigger>
              <div
                className={cn(
                  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                  "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                  "size-9"
                )}
              >
                <ScanQrCode />
              </div>
            </DialogTrigger>
          </div>

          <div className="w-full border-t border-slate-900 pt-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <CalendarClock className="text-slate-500 size-4" />
              <p className="text-slate-500 text-xs md:text-sm font-medium">
                {createdAt.toLocaleString()}
              </p>
            </div>
            <Link
              href={`/urls/${rowId}`}
              className="hidden text-sm hover:underline group-hover:block"
            >
              View
            </Link>
          </div>
        </CardContent>
        <LinkDialogPopup
          shortUrl={shortUrl}
          longUrl={longUrl}
          qrWidth={200}
          qrHeight={200}
        />
      </Card>
    </Dialog>
  );
};
