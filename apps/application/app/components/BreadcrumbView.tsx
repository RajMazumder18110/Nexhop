"use client";
/** @notice Library imports */
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
/// Local imports
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * Breadcrumb: derives labels and links from the current pathname.
 * - No props. Always shows Home.
 * - Normalizes duplicate/trailing slashes.
 * - Title-cases segments, decodes URI components.
 * - Preserves query string on the last crumb.
 */
const BreadcrumbView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Normalize: remove duplicate slashes and trailing slash (except root)
  const normalized =
    pathname === "/"
      ? "/"
      : pathname.replace(/\/{2,}/g, "/").replace(/\/$/, "");

  const segments = normalized.split("/").filter(Boolean);
  const isRoot = normalized === "/home";

  // Build crumbs
  const crumbs = (() => {
    let acc = "";
    return segments.map((seg, idx) => {
      acc += `/${seg}`;
      const isLast = idx === segments.length - 1;

      const label = decodeURIComponent(seg)
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()); // Title case

      const q =
        isLast && searchParams?.toString() ? `?${searchParams.toString()}` : "";
      const href = `${acc}${q}`;

      return { href, label, isLast };
    });
  })();

  return (
    <Breadcrumb className="py-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          {isRoot ? (
            <BreadcrumbPage>
              <span className="inline-flex items-center gap-1.5">Home</span>
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link href="/home" className="inline-flex items-center gap-1.5">
                Home
              </Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>

        {!isRoot && <BreadcrumbSeparator />}

        {!isRoot &&
          crumbs.map((crumb, idx) => {
            const needsSep = idx < crumbs.length - 1;
            return (
              <span
                key={crumb.href}
                className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word sm:gap-2.5"
              >
                <BreadcrumbItem key={crumb.href}>
                  {crumb.isLast ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={crumb.href}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {needsSep && <BreadcrumbSeparator key={`sep-${idx * 10}`} />}
              </span>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbView;
