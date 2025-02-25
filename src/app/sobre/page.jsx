import Card from '../components/Card';
import Header from '../components/Header';
import styles from './sobre.module.css';

export default function Sobre() {
    const nomePagina = "sobre";
    return (
        <div>
            <Header nomeDaPagina={"Sobre"}/>
            <div className={styles.container}>
                <h1>Página {nomePagina} </h1>
                <Card />
            </div>
        </div>
    );
}