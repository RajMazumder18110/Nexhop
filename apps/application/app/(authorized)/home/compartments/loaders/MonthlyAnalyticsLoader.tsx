/** @notice Local imports */
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export const MonthlyAnalyticsLoader = () => {
  return (
    <Card className="border-none">
      <CardContent className="w-full h-[250px] flex flex-col justify-evenly gap-2">
        <div className="w-full h-[80%] flex items-center justify-center">
          <Skeleton className="w-full h-full bg-slate-900/40" />
        </div>
        <div className="flex items-center justify-between">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-2 w-[50px] rounded-full bg-slate-900"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
