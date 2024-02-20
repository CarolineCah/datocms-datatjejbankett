import { ActiveLink } from "./ActiveLink";

function MenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  // Mobile-friendly padding and touch target size adjustments
  return (
    <ActiveLink
      className="p-4 text-sm sm:text-base decoration-accent decoration-2 underline-offset-4 hover:underline hover:decoration-accent/25"
      activeClassName="underline hover:decoration-accent"
      href={href}
    >
      {children}
    </ActiveLink>
  );
}
export function NavigationMenu() {
  return (
    <>
      <div className="h-16 sm:h-32 hidden xl:block" />{" "}
      <nav className="fixed z-10 flex items-center left-0 px-2 top-0 w-full uppercase font-bold text-black bg-white shadow-md sm:px-4 sm:top-0">
        {" "}
        <MenuItem href="/">Banquet</MenuItem>
        <MenuItem href="/about">Icebreakers</MenuItem>
        <MenuItem href="/contact">Contact</MenuItem>
      </nav>
    </>
  );
}
