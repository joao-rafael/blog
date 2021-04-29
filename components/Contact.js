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
                    <p>I am currently a full time masters student at UFPB</p>
                    <ul>
                        <li>
                            Currently researching about HCI guidelines for accessible software aimed to people in the autism spectrum;
                        </li>
                        <li>
                            Also, in my free time I study about web and mobile development, in order to build cool projects like this blog;
                        </li>
                        <li>
                            Get in touch or Follow me on: 
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default Contact