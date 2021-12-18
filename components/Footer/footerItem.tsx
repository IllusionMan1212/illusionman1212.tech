import styles from "./footerItem.module.scss";

interface FooterItemProps {
  logo: string;
  name: string;
  href: string;
}

export default function FooterItem(props: FooterItemProps) {
  return (
    <a className={styles["container"]} href={props.href}>
      <img src={props.logo} width="30" height="30"/>
      <p>{props.name}</p>
    </a>
  )
}
