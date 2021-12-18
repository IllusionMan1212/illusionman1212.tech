import styles from "./notFoundMessage.module.scss";

export default function NotFoundMessage() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["red"]}>404</h1>
      <p>Page not found on this server</p>
    </div>
  )
}
