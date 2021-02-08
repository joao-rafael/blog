import styles from '../styles/Header.module.scss';
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <Link href='/'>
                    <a>
                        <h1>Coding Bits</h1>
                        <h2>by JoãoRafael</h2>
                    </a>
                </Link>
            </div>
            <button className={styles.btn}>
                Contact-me
            </button>
        </header>
    )
}

export default Header