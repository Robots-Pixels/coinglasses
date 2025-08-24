
import { NavItem } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({item}: {item: NavItem}) {
    const ItemIcon = item.icon;
    const pathname = usePathname();
    console.log(pathname);
    console.log(pathname === item.href)

    return (
      <Link 
      href={`${item.href}`}
      className={`${pathname === item.href ? "bg-active" : "bg-darker"} hover:bg-active p-2 w-full md:w-auto md:shadow-xl rounded-none md:rounded-xl flex items-center justify-center space-x-2 text-xl`}>
        <ItemIcon className="w-5" />
        <p className="hidden md:block">{item.name}</p>
      </Link>
    );
}
