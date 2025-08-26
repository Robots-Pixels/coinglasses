import { LayoutDashboard, Table, User } from "lucide-react";
import { NavItem } from "@/lib/types";
import NavLink from "./NavLink";

export default function MobileNavItems() {

  const navItems: NavItem[] = [
    {
      name: "Categories",
      href: "/dashboard/categories",
      icon: Table
    },

    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
  
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: User
  }
  ];

  return (
    <section className="flex w-full flex-row justify-between items-center md:flex-col h-full md:space-y-8">
        {
      navItems.map((item) => {
        return (
          <NavLink key={`${item.icon + item.href}`} item={item}/>
        )
      }
      )}
    </section>
  );
}
