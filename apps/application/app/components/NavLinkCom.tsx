"use client";
/** @notice Library imports */
import Link from "next/link";
import { usePathname } from "next/navigation";
/// Local imports
import { cn } from "@/lib/utils";

type NavLinkComProps = {
  href: string;
  name: string;
};

const NavLinkCom = (props: NavLinkComProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={props.href}
      className={cn(
        "hover:underline hover:text-foreground transition-all duration-300",
        pathname === props.href
          ? "text-foreground underline underline-offset-4"
          : "text-slate-500"
      )}
    >
      <div className="font-medium rounded-md transition-colors duration-300">
        {props.name}
      </div>
    </Link>
  );
};

export default NavLinkCom;
