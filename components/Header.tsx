import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '../styles/Header.module.scss';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('coding-bits-theme');
    const nextIsDark = storedTheme ? storedTheme === 'dark' : true;

    setIsDark(nextIsDark);
    document.documentElement.dataset.theme = nextIsDark ? 'dark' : 'light';
  }, []);

  const handleToggleTheme = () => {
    setIsDark((current) => {
      const nextIsDark = !current;
      document.documentElement.dataset.theme = nextIsDark ? 'dark' : 'light';
      window.localStorage.setItem('coding-bits-theme', nextIsDark ? 'dark' : 'light');
      return nextIsDark;
    });
  };

  return (
    <header className={styles.header}>
      <Link href="/" title="Coding Bits, a web blog by João Rafael" className={styles.brand}>
        <div>
          <span className={styles.eyebrow}>Personal notes on code and craft</span>
          <div>
            <h1>Coding Bits</h1>
          </div>
        </div>
      </Link>

      <div className={styles.actions}>
        <nav className={styles.nav} aria-label="Primary">
          <a href="/">Home</a>
          <a href="/#about">About</a>
        </nav>
        <ThemeToggle isDark={isDark} onToggle={handleToggleTheme} />
      </div>
    </header>
  );
};

export default Header;
