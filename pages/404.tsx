import Layout from "@components/layout";
import NotFoundMessage from "@components/notFoundMessage";
import styles from "styles/404.module.scss";

export default function NotFound() {
  return (
    <Layout>
      <div className={styles["container"]}>
        <NotFoundMessage/>
      </div>
    </Layout>
  )
}
