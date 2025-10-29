/** @notice Local imports */
import AnalyticsContent from "./AreaAnalyticsContent";

const chartData = [
  {
    date: "2024-04-01",
    records: {
      windows: 342,
      macOS: 189,
      iOS: 276,
      android: 234,
      linux: 87,
      ubuntu: 45,
    },
  },
  {
    date: "2024-04-02",
    records: {
      windows: 389,
      macOS: 156,
      iOS: 298,
      android: 267,
      linux: 98,
      ubuntu: 34,
    },
  },
  {
    date: "2024-04-03",
    records: {
      windows: 267,
      macOS: 234,
      iOS: 323,
      android: 156,
      linux: 134,
      ubuntu: 56,
    },
  },
  {
    date: "2024-04-04",
    records: {
      windows: 456,
      macOS: 178,
      iOS: 289,
      android: 198,
      linux: 89,
      ubuntu: 45,
    },
  },
  {
    date: "2024-04-05",
    records: {
      windows: 298,
      macOS: 267,
      iOS: 334,
      android: 189,
      linux: 156,
      ubuntu: 67,
    },
  },
  {
    date: "2024-04-06",
    records: {
      windows: 378,
      macOS: 198,
      iOS: 256,
      android: 234,
      linux: 145,
      ubuntu: 78,
    },
  },
  {
    date: "2024-04-07",
    records: {
      windows: 234,
      macOS: 289,
      iOS: 389,
      android: 167,
      linux: 87,
      ubuntu: 34,
    },
  },
  {
    date: "2024-04-08",
    records: {
      windows: 445,
      macOS: 134,
      iOS: 298,
      android: 123,
      linux: 198,
      ubuntu: 56,
    },
  },
  {
    date: "2024-04-09",
    records: {
      windows: 189,
      macOS: 356,
      iOS: 276,
      android: 289,
      linux: 76,
      ubuntu: 87,
    },
  },
  {
    date: "2024-04-10",
    records: {
      windows: 356,
      macOS: 167,
      iOS: 345,
      android: 178,
      linux: 145,
      ubuntu: 45,
    },
  },
  {
    date: "2024-04-11",
    records: {
      windows: 289,
      macOS: 298,
      iOS: 189,
      android: 234,
      linux: 189,
      ubuntu: 78,
    },
  },
  {
    date: "2024-04-12",
    records: {
      windows: 423,
      macOS: 145,
      iOS: 367,
      android: 156,
      linux: 167,
      ubuntu: 34,
    },
  },
  {
    date: "2024-04-13",
    records: {
      windows: 178,
      macOS: 389,
      iOS: 323,
      android: 267,
      linux: 123,
      ubuntu: 89,
    },
  },
  {
    date: "2024-04-14",
    records: {
      windows: 334,
      macOS: 189,
      iOS: 298,
      android: 134,
      linux: 198,
      ubuntu: 56,
    },
  },
  {
    date: "2024-04-15",
    records: {
      windows: 267,
      macOS: 234,
      iOS: 387,
      android: 198,
      linux: 87,
      ubuntu: 67,
    },
  },
  {
    date: "2024-04-16",
    records: {
      windows: 398,
      macOS: 178,
      iOS: 289,
      android: 189,
      linux: 156,
      ubuntu: 45,
    },
  },
  {
    date: "2024-04-17",
    records: {
      windows: 456,
      macOS: 267,
      iOS: 334,
      android: 234,
      linux: 134,
      ubuntu: 78,
    },
  },
  {
    date: "2024-04-18",
    records: {
      windows: 234,
      macOS: 198,
      iOS: 378,
      android: 167,
      linux: 178,
      ubuntu: 34,
    },
  },
  {
    date: "2024-04-19",
    records: {
      windows: 378,
      macOS: 289,
      iOS: 298,
      android: 198,
      linux: 98,
      ubuntu: 87,
    },
  },
  {
    date: "2024-04-20",
    records: {
      windows: 189,
      macOS: 134,
      iOS: 434,
      android: 123,
      linux: 234,
      ubuntu: 56,
    },
  },
  {
    date: "2024-04-21",
    records: {
      windows: 345,
      macOS: 356,
      iOS: 287,
      android: 289,
      linux: 87,
      ubuntu: 67,
    },
  },
  {
    date: "2024-04-22",
    records: {
      windows: 298,
      macOS: 167,
      iOS: 367,
      android: 178,
      linux: 167,
      ubuntu: 45,
    },
  },
  {
    date: "2024-04-23",
    records: {
      windows: 423,
      macOS: 298,
      iOS: 323,
      android: 234,
      linux: 123,
      ubuntu: 78,
    },
  },
  {
    date: "2024-04-24",
    records: {
      windows: 267,
      macOS: 145,
      iOS: 398,
      android: 156,
      linux: 198,
      ubuntu: 34,
    },
  },
  {
    date: "2024-04-25",
    records: {
      windows: 389,
      macOS: 389,
      iOS: 334,
      android: 267,
      linux: 134,
      ubuntu: 89,
    },
  },
  {
    date: "2024-04-26",
    records: {
      windows: 156,
      macOS: 189,
      iOS: 389,
      android: 134,
      linux: 189,
      ubuntu: 56,
    },
  },
  {
    date: "2024-04-27",
    records: {
      windows: 445,
      macOS: 234,
      iOS: 298,
      android: 198,
      linux: 98,
      ubuntu: 67,
    },
  },
  {
    date: "2024-04-28",
    records: {
      windows: 234,
      macOS: 178,
      iOS: 356,
      android: 189,
      linux: 156,
      ubuntu: 45,
    },
  },
  {
    date: "2024-04-29",
    records: {
      windows: 378,
      macOS: 267,
      iOS: 345,
      android: 234,
      linux: 145,
      ubuntu: 78,
    },
  },
  {
    date: "2024-04-30",
    records: {
      windows: 298,
      macOS: 198,
      iOS: 378,
      android: 167,
      linux: 178,
      ubuntu: 34,
    },
  },
];

const OSAnalytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <AnalyticsContent data={chartData} />;
};
export default OSAnalytics;
