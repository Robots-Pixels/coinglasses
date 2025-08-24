import { LayoutDashboard, Table } from "lucide-react";
import { NavItem } from "@/lib/types";
import NavLink from "./NavLink";

export default function DesktopNavItems() {

  const navItems: NavItem[] = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },

    {
        name: "Categories",
        href: "/dashboard/categories",
        icon: Table
    },

  ];

  return (
    <section className="flex flex-col justify-between items-center w-full h-full space-y-6">
        {
      navItems.map((item) => {
        return (
          <NavLink key={`${item.href}`} item={item}/>
        )
      }
      )}
    </section>
  );
}
