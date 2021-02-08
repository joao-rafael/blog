import styles from '../styles/Layout.module.scss';
import Header from './Header';

const Layout = ({children}) => {
    return (
        <div className={styles.Layout}>  
            <Header></Header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <h2>
                    madeby<span>rafael</span>
                </h2>
            </footer>
        </div>
    )
}

export default Layout