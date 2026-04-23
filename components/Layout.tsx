import type { ReactNode } from 'react';
import { useRouter } from 'next/router';

import Header from './Header';
import styles from '../styles/Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const isArticlePage = router.pathname === '/[slug]';

  return (
    <div className={`${styles.Layout} ${isArticlePage ? styles.articleLayout : ''}`}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <p className={styles.footerLabel}>Coding Bits</p>
            <h2>notes about front-end, software engineering and life itself.</h2>
          </div>
          <p className={styles.credits}>Built with Next.js, React and TypeScript by João Rafael.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
