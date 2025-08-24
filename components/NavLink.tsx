import { NavItem } from "@/lib/types";
import React from "react";
import Link from "next/link";

export default function NavLink({item}: {item: NavItem}) {
    const ItemIcon = item.icon;

  return (
    <Link className="bg-darker p-2 min-h-[50px] grow rounded-xl flex items-center gap-2 text-xl" href={`${item.href}`}>
      <ItemIcon className="w-5" />
      <p>{item.name}</p>
    </Link>
  );
}
