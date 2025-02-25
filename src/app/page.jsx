import Card from './components/Card';
import Header from './components/Header';
import styles from './page.module.css';

export default function Home() {
  const nome = "Pablo Delgado";
  return (
    <div className={styles.main}>

      <Header nomeDaPagina={"Home"} />

      <div className={styles.container}>
        <h1 className={styles.textoMaior}>Olá, {nome}!  </h1>
        <Card />

      </div>
    </div>
  );
}
