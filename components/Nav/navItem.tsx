import Link from "next/link";

interface NavItemProps {
  name: string;
  href: string;
}

export default function NavItem(props: NavItemProps) {
  return (
    <div>
      <Link href={props.href}>
        <a href={props.href}>{props.name}</a>
      </Link>
    </div>
  )
}
