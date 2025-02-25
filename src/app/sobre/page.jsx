import Header from '../components/Header';
import styles from './sobre.module.css';
import Link from 'next/link';

export default function Sobre() {
    const nomePagina = "sobre";
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1>Página {nomePagina} </h1>
                <Link href={"/"}>Ir para a página Home</Link>
            </div>
        </div>
    );
}