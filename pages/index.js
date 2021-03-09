import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head'
import Link from 'next/link'
import path from 'path';
import styles from '../styles/Layout.module.scss'

export default function Home({ posts }) {
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
        <Link href='/hello'>
          <a>
                        Go to hello
          </a>
        </Link>
        <section className={styles.postlist}>
          {
            posts.map(slug => {
              console.log(posts.length);
              const markdown = fs.readFileSync(path.join('posts', slug + '.md')).toString();
              const parsedMarkdown = matter(markdown);
              const data = parsedMarkdown.data;

              return (
                <Link href={slug} key={slug}>
                  <article className={styles.postCard}>
                    <h2>
                      {data.date}
                    </h2>
                    <h2>
                      {data.title}
                    </h2> 
                    <p>
                      {data.description}
                    </p>
                  </article> 
                </Link>
              )
            })
          }
        </section>
      </section>
     

    </div>
  );
}

export const getStaticProps = async () => {
  console.log('executed');
  const files = await fs.readdirSync('posts');
  console.log('files: ' + files);
  return {
    props: {
      posts: files.map(fileName => fileName.replace('.md', ''))
    }
  }
}
