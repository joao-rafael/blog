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
                    <h2 className={styles.title}>
                        My name is <span>João Rafael</span>
                    </h2>
                    <p className={styles.text}>
                        I am a full-time masters student at UFPB, Currently researching HCI guidelines for accessible software aimed at people on the autism spectrum.
                    </p>
                    <p className={styles.text}>
                        Also, during my free time, I study web and mobile development to build cool projects like this blog and have fun.
                    </p>
                    <p className={styles.text}>
                        Get in touch via e-mail or Follow me on social media:
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <Link href="https://www.linkedin.com/in/joao-rafael-silva/">
                                <a>
                                    <img src="./icons/linkedin.svg"></img>
                                </a>
                            </Link>
                            
                        </li>
                        <li className={styles.medium}>
                            <Link href="https://medium.com/@joao_rafael">
                                <a>
                                    <img src="./icons/medium.svg"></img>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/joao-rafael">
                                <a>
                                    <img src="./icons/github.svg"></img>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default Contact