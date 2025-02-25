import Header from './components/Header';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  const nome = "Pablo Delgado";
  return (
    <div className={styles.main}>

      <Header />

      <div className={styles.container}>
        <p className={styles.textoMaior}>Olá, {nome}!  </p>
        <Link href={"/sobre"}>
          Ir para a página Sobre
        </Link>
        <Link href={"/nossa"}>
          Ir para a página Nossa
        </Link>
      </div>
    </div>
  );
}
