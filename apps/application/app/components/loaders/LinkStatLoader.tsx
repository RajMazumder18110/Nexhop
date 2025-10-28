/** @notice Library imports */
import type { JSX } from "react";
/// Local imports
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

type LinkStatLoaderProps = {
  Icon: JSX.ElementType;
  title: string;
};

export const LinkStatSkeleton = ({ Icon, title }: LinkStatLoaderProps) => {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-row items-center justify-start gap-3">
        <Icon className="text-highlight size-7" />
        <div className="flex flex-col items-start justify-center gap-2">
          <Skeleton className="w-15 h-4" />
          <p className="text-slate-600 text-sm font-bold">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};
