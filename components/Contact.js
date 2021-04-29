import styles from '../styles/Contact.module.scss';
import Link from 'next/link'

const  Contact = () => {
    return (
        <section className={styles.contact}>
            <header className={styles.header}>
                <h2>About me</h2>
            </header>
            <section className={styles.flex}>
                <div className={styles.photo}>
                    <picture>
                        <img src='./images/profile.png'>
                        </img>
                    </picture>
                </div>
                <div className={styles.info}>
                    <h2>
                        My name is <span>João Rafael</span>
                    </h2>
                </div>
            </section>
        </section>
    )
}

export default Contact