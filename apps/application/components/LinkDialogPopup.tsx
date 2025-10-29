/** @notice Library imports */
import Link from "next/link";
import { Suspense } from "react";
import { Download, X } from "lucide-react";
/// Local imports
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { cn } from "@/lib/utils";
import CopyToClip from "./CopyToClip";
import LinkQRCode from "./LinkQRCode";

type LinkDialogPopupProps = {
  shortUrl: string;
  longUrl: string;
  qrWidth: number;
  qrHeight: number;
};

const LinkDialogPopup = (props: LinkDialogPopupProps) => {
  return (
    <DialogContent className="pb-10" showCloseButton={false}>
      <DialogClose className="absolute top-5 right-5">
        <div
          className={cn(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            "size-7 rounded-full border-foreground"
          )}
        >
          <X />
        </div>
      </DialogClose>
      <DialogHeader className="flex items-center">
        <DialogTitle className="font-medium text-xl md:text-3xl text-highlight">
          <Link
            href={`https://${props.shortUrl}`}
            target="_blank"
            className="hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
          >
            {props.shortUrl}
          </Link>
        </DialogTitle>
        <DialogDescription>{props.longUrl}</DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-4 pt-6 items-center">
        <Suspense>
          <LinkQRCode
            shortUrl={props.shortUrl}
            width={props.qrWidth}
            height={props.qrHeight}
          />
        </Suspense>

        <div className="flex items-center gap-4">
          <Suspense>
            <CopyToClip text={props.shortUrl} iconClassName="size-5" />
          </Suspense>
          <Suspense>
            <Download className="size-5" />
          </Suspense>
        </div>
      </div>
    </DialogContent>
  );
};

export default LinkDialogPopup;
