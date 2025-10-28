/** @notice Library imports */
import Link from "next/link";
/// Local imports
import NavLinkCom from "./NavLinkCom";

const links = [
  {
    href: "#",
    name: "Analytics",
  },
  {
    href: "/urls",
    name: "Urls",
  },
  {
    href: "/create",
    name: "Create",
  },
];

const NavBarAuthorized = async () => {
  return (
    <nav className="w-full grid grid-cols-3 border-b border-slate-900 py-4 text-slate-500">
      {/* Logo Part */}
      <div className="flex items-center justify-start">
        <Link href={"/"}>
          <div className="text-highlight hover:text-foreground w-fit font-bold rounded-md transition-colors duration-300">
            <h1 className="text-lg">Nh.</h1>
          </div>
        </Link>
      </div>

      {/* Links part */}
      <div className="flex items-center justify-center gap-8">
        {links.map((link, idx) => (
          <NavLinkCom key={idx} {...link} />
        ))}
      </div>

      {/* Profile */}
      <div className="flex items-center justify-end">
        <Link href={"/"} className="hover:underline">
          <div className="font-semibold rounded-md transition-colors duration-300">
            Urls
          </div>
        </Link>

        <Link href={"/"} className="hover:underline">
          <div className="font-semibold rounded-md transition-colors duration-300">
            Create
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBarAuthorized;
