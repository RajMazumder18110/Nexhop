/** @notice Library imports */
/// Local imports
import { ShortedUrlRow } from "@/app/components";

export const PaginatedLinksCompartment = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return Array.from({ length: 10 }).map((_, index) => (
    <div key={index}>
      <ShortedUrlRow
        key={index}
        rowId={String((index + 1) * 182)}
        shortUrl="short.sh/xbatyuxf"
        longUrl="https://google.com"
        createdAt={new Date("2025-10-26T19:21:00.000Z")}
      />
    </div>
  ));
};
