"use server";
/** @notice Library imports */
import { Link2, MousePointerClick, QrCode, ScanEye } from "lucide-react";
/// Local imports
import { LinkStat } from "@/app/components";

export const LinksStatsContents = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
      <LinkStat title="Clicks" stat={30_000} Icon={MousePointerClick} />
      <LinkStat title="Unique" stat={15_000} Icon={ScanEye} />

      <LinkStat title="QR" stat={15_000} Icon={QrCode} />
      <LinkStat title="Links" stat={150} Icon={Link2} />
    </section>
  );
};
