import styles from "./card.module.css";

const Card = () => {
    return (
        <div className={styles.card}>
        <h2>Título</h2>
        <p>conteúdo</p>
        </div>
    )
}

export default Card;