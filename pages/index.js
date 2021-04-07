import matter from 'gray-matter';
import Head from 'next/head'
import Card from '../components/Card';
import Link from 'next/link';
// import fs from 'fs';
import path from 'path';
import styles from '../styles/Layout.module.scss'
import fs from 'fs';

export default function Home({ files }) {
  return (
    <div>
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
            <h2 className={styles.sub}>Insights about Technology, Programming and life itself.</h2>
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
     

    </div>
  );
}

export const getAllPosts = async () => {

}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  const markdowns = [];

  files.map(file => {
    const entry = fs.readFileSync(path.join('posts', file)).toString();
    const parsedMarkdown = matter(entry);
    markdowns.push(parsedMarkdown.data);
  })

  return {
    props: {
      files: markdowns
    }
  };
};
