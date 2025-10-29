"use client";
/** @notice Library imports */
import { Area, AreaChart, XAxis } from "recharts";
/// Local imports
import {
  ChartTooltip,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type AnalyticsContentProps = {
  data: {
    date: string;
    records: Record<string, number>;
  }[];
  removeBorder?: boolean;
};

const AreaAnalyticsContent = ({
  data: chartData,
  removeBorder,
}: AnalyticsContentProps) => {
  // Extract all unique browser names from the data
  const allBrowsers = Array.from(
    new Set(chartData.flatMap((item) => Object.keys(item.records)))
  );

  // Transform data to include all browsers with default value of 0
  const transformedData = chartData.map((item) => {
    const browserData: Record<string, number> = {};
    allBrowsers.forEach((browser) => {
      browserData[browser] = item.records[browser] || 0;
    });

    return {
      date: item.date,
      ...browserData,
    };
  });

  const filteredData = transformedData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  // Create chart config for each browser using the same highlight color
  const chartConfig = allBrowsers.reduce(
    (config, browser) => {
      config[browser] = {
        label: browser.charAt(0).toUpperCase() + browser.slice(1),
        color: "var(--color-highlight)",
      };
      return config;
    },
    {} as Record<string, { label: string; color: string }>
  );

  return (
    <Card className={cn("w-full", removeBorder ? "border-none" : "")}>
      <CardContent
        className={cn("w-full h-[250px] px-4", removeBorder ? "px-0" : "")}
      >
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-full w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              {allBrowsers.map((browser, index) => {
                const browserConfig = chartConfig[browser];
                if (!browserConfig) return null;

                return (
                  <linearGradient
                    key={browser}
                    id={`fill${browser}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={browserConfig.color}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={browserConfig.color}
                      stopOpacity={0}
                    />
                  </linearGradient>
                );
              })}
            </defs>
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                  indicator="dashed"
                />
              }
            />
            {allBrowsers.map((browser) => {
              const browserConfig = chartConfig[browser];
              if (!browserConfig) return null;

              return (
                <Area
                  key={browser}
                  dataKey={browser}
                  type="natural"
                  fill={`url(#fill${browser})`}
                  stroke={browserConfig.color}
                  stackId="a"
                />
              );
            })}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default AreaAnalyticsContent;
