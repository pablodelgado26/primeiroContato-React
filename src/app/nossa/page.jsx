import Header from "../components/Header";
import styles from "./nossa.module.css";

export default function nossa() {
  return (
    <div>
      <Header nomeDaPagina={"Nossa"} />

        <div className={styles.container}>
            <h1>Página Nossa</h1>
            </div>
    </div>
  );
}