import NavItem from "@components/Nav/navItem";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <div className={styles["container"]}>
      <NavItem name="About" href="/"/>
      <NavItem name="Works" href="/works"/>
      <button>Theme Button</button>
      <NavItem name="Blog" href="/blog"/>
      <NavItem name="Contact" href="/contact"/>
    </div>
  )
}
