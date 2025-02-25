import Header from "../components/Header";
import styles from "./nossa.module.css";
import Link from "next/link";

export default function nossa() {
  return (
    <div>
      <Header />

        <div className={styles.container}>
            <h1>Página Nossa</h1>
            <p>Texto da página Nossa</p>
            <Link href={"/sobre"}>Ir para página sobre</Link>
            <Link href={"/"}>Ir para página Home</Link>
            </div>
    </div>
  );
}