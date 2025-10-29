/** @notice Local imports */
import AnalyticsContent from "./AreaAnalyticsContent";

const chartData = [
  {
    date: "2024-04-01",
    records: {
      iPhone: 298,
      Android: 342,
      Desktop: 189,
      iPad: 87,
      Tablet: 45,
      MacBook: 67,
    },
  },
  {
    date: "2024-04-02",
    records: {
      iPhone: 234,
      Android: 389,
      Desktop: 267,
      iPad: 123,
      Tablet: 78,
      MacBook: 34,
    },
  },
  {
    date: "2024-04-03",
    records: {
      iPhone: 356,
      Android: 198,
      Desktop: 234,
      iPad: 98,
      Tablet: 56,
      MacBook: 89,
    },
  },
  {
    date: "2024-04-04",
    records: {
      iPhone: 189,
      Android: 445,
      Desktop: 178,
      iPad: 134,
      Tablet: 67,
      MacBook: 78,
    },
  },
  {
    date: "2024-04-05",
    records: {
      iPhone: 423,
      Android: 234,
      Desktop: 298,
      iPad: 76,
      Tablet: 45,
      MacBook: 56,
    },
  },
  {
    date: "2024-04-06",
    records: {
      iPhone: 267,
      Android: 378,
      Desktop: 189,
      iPad: 156,
      Tablet: 89,
      MacBook: 67,
    },
  },
  {
    date: "2024-04-07",
    records: {
      iPhone: 334,
      Android: 267,
      Desktop: 356,
      iPad: 87,
      Tablet: 34,
      MacBook: 78,
    },
  },
  {
    date: "2024-04-08",
    records: {
      iPhone: 178,
      Android: 456,
      Desktop: 234,
      iPad: 198,
      Tablet: 78,
      MacBook: 45,
    },
  },
  {
    date: "2024-04-09",
    records: {
      iPhone: 289,
      Android: 189,
      Desktop: 298,
      iPad: 123,
      Tablet: 56,
      MacBook: 89,
    },
  },
  {
    date: "2024-04-10",
    records: {
      iPhone: 398,
      Android: 334,
      Desktop: 167,
      iPad: 89,
      Tablet: 67,
      MacBook: 34,
    },
  },
  {
    date: "2024-04-11",
    records: {
      iPhone: 156,
      Android: 298,
      Desktop: 389,
      iPad: 156,
      Tablet: 45,
      MacBook: 78,
    },
  },
  {
    date: "2024-04-12",
    records: {
      iPhone: 445,
      Android: 178,
      Desktop: 234,
      iPad: 134,
      Tablet: 89,
      MacBook: 56,
    },
  },
  {
    date: "2024-04-13",
    records: {
      iPhone: 234,
      Android: 423,
      Desktop: 267,
      iPad: 98,
      Tablet: 34,
      MacBook: 67,
    },
  },
  {
    date: "2024-04-14",
    records: {
      iPhone: 378,
      Android: 189,
      Desktop: 334,
      iPad: 167,
      Tablet: 78,
      MacBook: 89,
    },
  },
  {
    date: "2024-04-15",
    records: {
      iPhone: 267,
      Android: 356,
      Desktop: 198,
      iPad: 87,
      Tablet: 56,
      MacBook: 45,
    },
  },
  {
    date: "2024-04-16",
    records: {
      iPhone: 189,
      Android: 234,
      Desktop: 445,
      iPad: 198,
      Tablet: 67,
      MacBook: 78,
    },
  },
  {
    date: "2024-04-17",
    records: {
      iPhone: 423,
      Android: 389,
      Desktop: 178,
      iPad: 123,
      Tablet: 34,
      MacBook: 34,
    },
  },
  {
    date: "2024-04-18",
    records: {
      iPhone: 298,
      Android: 267,
      Desktop: 356,
      iPad: 156,
      Tablet: 89,
      MacBook: 89,
    },
  },
  {
    date: "2024-04-19",
    records: {
      iPhone: 334,
      Android: 198,
      Desktop: 234,
      iPad: 89,
      Tablet: 45,
      MacBook: 56,
    },
  },
  {
    date: "2024-04-20",
    records: {
      iPhone: 178,
      Android: 445,
      Desktop: 298,
      iPad: 134,
      Tablet: 78,
      MacBook: 67,
    },
  },
  {
    date: "2024-04-21",
    records: {
      iPhone: 389,
      Android: 156,
      Desktop: 189,
      iPad: 167,
      Tablet: 56,
      MacBook: 78,
    },
  },
  {
    date: "2024-04-22",
    records: {
      iPhone: 234,
      Android: 334,
      Desktop: 267,
      iPad: 98,
      Tablet: 67,
      MacBook: 45,
    },
  },
  {
    date: "2024-04-23",
    records: {
      iPhone: 456,
      Android: 178,
      Desktop: 423,
      iPad: 87,
      Tablet: 34,
      MacBook: 89,
    },
  },
  {
    date: "2024-04-24",
    records: {
      iPhone: 189,
      Android: 398,
      Desktop: 234,
      iPad: 198,
      Tablet: 89,
      MacBook: 34,
    },
  },
  {
    date: "2024-04-25",
    records: {
      iPhone: 367,
      Android: 234,
      Desktop: 189,
      iPad: 123,
      Tablet: 45,
      MacBook: 78,
    },
  },
  {
    date: "2024-04-26",
    records: {
      iPhone: 234,
      Android: 356,
      Desktop: 298,
      iPad: 156,
      Tablet: 78,
      MacBook: 56,
    },
  },
  {
    date: "2024-04-27",
    records: {
      iPhone: 445,
      Android: 189,
      Desktop: 367,
      iPad: 89,
      Tablet: 56,
      MacBook: 67,
    },
  },
  {
    date: "2024-04-28",
    records: {
      iPhone: 178,
      Android: 423,
      Desktop: 234,
      iPad: 134,
      Tablet: 67,
      MacBook: 89,
    },
  },
  {
    date: "2024-04-29",
    records: {
      iPhone: 298,
      Android: 267,
      Desktop: 445,
      iPad: 167,
      Tablet: 34,
      MacBook: 45,
    },
  },
  {
    date: "2024-04-30",
    records: {
      iPhone: 389,
      Android: 334,
      Desktop: 178,
      iPad: 198,
      Tablet: 89,
      MacBook: 78,
    },
  },
];

const DeviceAnalytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <AnalyticsContent data={chartData} />;
};
export default DeviceAnalytics;
