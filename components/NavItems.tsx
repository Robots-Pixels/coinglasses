import { LayoutDashboard, Sun, Table } from "lucide-react";
import { NavItem } from "@/lib/types";
import NavLink from "./NavLink";

export default function NavItems() {
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
    }
  ];

  return (
    <section className="flex flex-col h-full space-y-8">
        {
      navItems.map((item) => {

        const ItemIcon = item.icon;

        return (
          <NavLink key={`${item.icon + item.href}`} item={item}/>
        )

      }

      )}
    </section>
  );
}
