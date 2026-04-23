import styles from '../styles/Header.module.scss';

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={styles.themeToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className={styles.themeIcon} aria-hidden="true">
        {isDark ? (
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M12 17.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Zm0-15.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 2Zm0 17a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 19Zm10-7.75a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5H22Zm-17 0a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5H5Zm13.01-6.26a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06-1.06l1.06-1.06Zm-12.02 12.02a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06Zm13.08 2.12a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06ZM6.05 7.11a.75.75 0 1 1-1.06-1.06L6.05 5a.75.75 0 0 1 1.06 1.06L6.05 7.11Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M21.64 13.01a.75.75 0 0 0-.9-.44a8.23 8.23 0 0 1-2 .25a8.5 8.5 0 0 1-8.5-8.5c0-.69.08-1.37.25-2.02a.75.75 0 0 0-1.02-.87A10.25 10.25 0 1 0 22.5 14a.75.75 0 0 0-.86-.99Z" />
          </svg>
        )}
      </span>
      <span className={styles.themeLabel}>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
};

export default ThemeToggle;
