/** @notice Library imports */
import { MousePointerClick, ScanEye, QrCode, Link2 } from "lucide-react";
/// Local imports
import { LinkStatSkeleton } from "@/app/components/loaders";

export const LinkStatsLoader = () => {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
      <LinkStatSkeleton title="Clicks" Icon={MousePointerClick} />
      <LinkStatSkeleton title="Unique" Icon={ScanEye} />

      <LinkStatSkeleton title="QR" Icon={QrCode} />
      <LinkStatSkeleton title="Links" Icon={Link2} />
    </section>
  );
};
