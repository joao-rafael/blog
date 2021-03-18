import styles from '../styles/Card.module.scss';
import Link from 'next/link'

const  Card = ({title, date, description, link}) => {
    return (
        <article className={styles.card}>
            <Link href={link}>
                <a>
                    <span className={styles.date}>{date}</span>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <p className={styles.text}>
                        {description}
                    </p>
                </a>
            </Link>

        </article>
    )
}

export default Card