import FooterItem from "@components/Footer/footerItem";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles["container"]}>
      <FooterItem
        logo="/assets/icons/github-dark.png"
        name="Github"
        href="https://github.com/illusionman1212"
      />
      <FooterItem
        logo="/assets/icons/gitea.svg"
        name="Gitea"
        href="https://git.illusionman1212.tech"
      />
      <FooterItem
        logo="/assets/icons/discord.png"
        name="Discord"
        href="https://discord.gg/qb3zPFY"
      />
    </div>
  );
}
