import matter from 'gray-matter';
import Head from 'next/head'
import Card from '../components/Card';
import Contact from '../components/Contact';
import Link from 'next/link';

// import fs from 'fs';
import path from 'path';
import styles from '../styles/Layout.module.scss'
import fs from 'fs';

export default function Home({ files }) {
  return (
    <div className={styles.home}>
      <Head>
        <title>Coding Bits</title>
        <meta name='keyword' content='web development, programming, blog'>
        </meta>
        <meta charSet='utf-8'></meta>
      </Head>
      <section className={styles.container}>
        <div className={styles.welcome}>
          <div className={styles.content}>
            <h1 className={styles.title}>Coding Bits</h1>
            <h2 className={styles.sub}>Welcome to just another blog about Technology, Programming and life itself.</h2>
          </div>
          <picture className={styles.pic}>
            <img src="./images/bg.png" alt="Background" />
          </picture>
        </div>
        <section className={styles.postlist}>
          {files.map((file)=> {
            return (
              <Card title={file.title} date={file.date} description={file.description} link={`/${file.slug}`} key={file.slug}>
              </Card>
            );
          })}
        </section>
      </section>
      <Contact>
      </Contact>

    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  const markdowns = [];

  files.map(file => {
    const entry = fs.readFileSync(path.join('posts', file)).toString();
    const parsedMarkdown = matter(entry);
    markdowns.push(parsedMarkdown.data);
    markdowns.sort((a,b) => new Date(b.dateiso) - new Date(a.dateiso))
  })

  return {
    props: {
      files: markdowns
    }
  };
};
