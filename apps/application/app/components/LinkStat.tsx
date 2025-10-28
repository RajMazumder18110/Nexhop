/** @notice Library imports */
import type { JSX } from "react";
/// Local imports
import { Card, CardContent } from "@/components/ui/card";

type LinkStatProps = {
  Icon: JSX.ElementType;
  title: string;
  stat: number;
};

export const LinkStat = ({ Icon, title, stat }: LinkStatProps) => {
  return (
    <Card className="w-full hover:border-highlight/40 hover:scale-105 transition-all duration-300 ease-in-out">
      <CardContent className="flex flex-row items-center justify-start gap-3">
        <Icon className="text-highlight size-7" />
        <div className="flex flex-col items-start justify-center gap-0">
          <h1 className="font-medium text-md">
            {new Intl.NumberFormat("en-US").format(stat)}
          </h1>
          <p className="text-slate-600 text-sm font-bold">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};
