import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs';
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
      </section>
      <section className={styles.postlist}>
        {
          posts.map(slug => {
            console.log(slug);
            return (
              <Link href={slug} key={slug}>
                <article>
                  <h3>
                    {slug}
                  </h3> 
                </article> 
              </Link>
            )
          })
        }
      </section>

    </div>
  );
}

export const getStaticProps = async () => {
  const files = await fs.readdirSync('posts');
  return {
    props: {
      posts: files.map(fileName => fileName.replace('.md', ''))
    }
  }
}
