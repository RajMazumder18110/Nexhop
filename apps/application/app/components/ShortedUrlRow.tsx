/** @notice Library imports */
import Link from "next/link";
import { CalendarClock, ScanQrCode, Send } from "lucide-react";
/// Local imports
import { Button } from "@/components/ui/button";
import CopyToClip from "@/components/CopyToClip";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="w-full hover:border-highlight/40 hover:scale-105 transition-all duration-300 ease-in-out">
      <Link href={`/urls/${rowId}`}>
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
            <CopyToClip text={shortUrl} />
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-highlight transition-colors duration-300"
            >
              <Send />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-highlight transition-colors duration-300"
            >
              <ScanQrCode />
            </Button>
            <div className="flex items-center gap-3"></div>
          </div>

          <div className="w-full border-t border-slate-900 pt-2 flex items-center justify-start gap-2">
            <CalendarClock className="text-slate-500 size-4" />
            <p className="text-slate-500 text-xs md:text-sm font-medium">
              {createdAt.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
