import Layout from "@components/layout";
import styles from "styles/contact.module.scss";

export default function Contact() {
  return (
    <Layout>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Contact Me</h1>
        <div>
          <form className={styles["form"]}>
            <input name="name" autoComplete="off" maxLength={64} type="text" placeholder="Name"/>
            <input name="email" autoComplete="off" maxLength={64} type="text" placeholder="Email"/>
            <input name="subject" autoComplete="off" maxLength={64} type="text" placeholder="Subject" />
            <textarea name="message" rows={5} autoComplete="off" maxLength={1024} placeholder="Send your suggestions, offer, feedback or etc..." />
            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
    </Layout>
  )
}
