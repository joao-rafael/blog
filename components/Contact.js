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
                        Follow me on social media:
                    </p>

                    <ul className={styles.list}>
                        <li>
                            <Link href="https://www.linkedin.com/in/joao-rafael-silva/">
                                <a title="LinkedIn Profile">
                                    <svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/>
                                        <path d="m.396 7.977h4.976v16.023h-4.976z"/>
                                        <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/>
                                    </svg>
                                </a>
                            </Link>
                        </li>

                        <li className={styles.medium}>
                            <Link href="https://medium.com/@joao_rafael">
                                <a title="Medium Profile">
                                    <svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z"/>
                                    </svg>
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="https://github.com/joao-rafael">
                                <a title="GitHub Profile">
                                    <svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"/>
                                    </svg>
                                </a>
                            </Link>
                        </li>

                    </ul>

                    <p className={styles.text}>
                        Or, Get in touch via e-mail: joaorafael.dev@outlook.com
                    </p>
                </div>
            </section>
        </section>
    )
}

export default Contact