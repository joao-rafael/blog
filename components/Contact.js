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
                    <p>I am currently a full time masters student at UFPB, 
                        Currently researching about HCI guidelines for accessible software aimed to people in the autism spectrum.</p>
                    <p>
                    Also, in my free time I study about web and mobile development, in order to build cool projects like this blog;
                    </p>
                    <p>
                    Get in touch or Follow me on: 
                    </p>
                    <ul>
                        <li>
                            <Link href="https://www.linkedin.com/in/joao-rafael-silva/">
                                <a>
                                    <img src="./icons/linkedin.svg"></img>
                                </a>
                            </Link>
                            
                        </li>
                        <li>
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