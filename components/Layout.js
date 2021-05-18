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
                    made<span>by</span><span>rafael</span>
                </h2>
                <div className={styles.credits}>
                    <p>
                        Made with React.js and Next.js. <br></br> Developed by João Rafael under MIT License.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout