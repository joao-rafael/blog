import styles from '../styles/Header.module.scss';
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <Link href='/'>
                    <a title="Coding Bits, a web blog by João Rafael">
                        <h1>Coding Bits</h1>
                        <h2>by JoãoRafael</h2>
                    </a>
                </Link>
            </div>
            <Link  href="https://github.com/joao-rafael">
                <a title="GitHub Profile" className={styles.btn}>
                    GitHub
                </a>
            </Link>
        </header>
    )
}

export default Header