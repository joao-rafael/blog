import Link from 'next/link';

import styles from '../styles/Card.module.scss';

type CardProps = {
  title: string;
  date: string;
  description: string;
  link: string;
  coverImage: string;
};

const Card = ({ title, date, description, link, coverImage }: CardProps) => {
  return (
    <article className={styles.card}>
      <Link href={link} className={styles.clink} title={`Link to ${title} article`}>
        <div className={styles.media}>
          <img src={coverImage} alt="" />
          <div className={styles.mediaGlow} />
        </div>

        <div className={styles.content}>
          <div className={styles.copy}>
            <span className={styles.date}>{date}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{description}</p>
          </div>

          <span className={styles.arrow} aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M13.97 5.97a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L17.94 12l-3.97-3.97a.75.75 0 0 1 0-1.06Z" />
              <path d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default Card;
