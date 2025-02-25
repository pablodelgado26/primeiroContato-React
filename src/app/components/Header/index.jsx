import styles from "./header.module.css"
import Link from "next/link";

const Header = ({ nomeDaPagina }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>Header componentizada - {nomeDaPagina}</h1>
            <nav className={styles.menu}>
                <ul className={styles.menuLista}>
                    <li className={styles.menuItem}>
                        <Link className={styles.link} href={"/"}>Home</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link className={styles.link} href={"/sobre"}>Sobre</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link className={styles.link} href={"/nossa"}>Nossa</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;