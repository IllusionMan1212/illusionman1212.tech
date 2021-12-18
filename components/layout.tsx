import Footer from "@components/Footer/footer";
import Nav from "@components/Nav/nav";
import styles from "./layout.module.scss";

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="min-h-screen">
        <nav>
          <Nav/>
        </nav>
        <main className={styles["main"]}>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}
