/** @notice Library imports */
import { CalendarClock, Copy, ScanQrCode, Send } from "lucide-react";
/// Local imports
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ShortedUrlRowSingleLoader = () => {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-between">
          {/* Link details */}
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <Skeleton className="w-50 h-10" />
            <Skeleton className="w-50 h-3" />
          </div>

          {/* Link actions */}
          <Button
            size="icon"
            variant="ghost"
            className="hover:text-highlight transition-colors duration-300"
          >
            <Copy />
          </Button>
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
          <Skeleton className="w-50 h-3" />
        </div>
      </CardContent>
    </Card>
  );
};

export const ShortedUrlRowsLoader = ({ count }: { count: number }) => {
  return Array.from({ length: count }).map((_, index) => (
    <ShortedUrlRowSingleLoader key={index} />
  ));
};
