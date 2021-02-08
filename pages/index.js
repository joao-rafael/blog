import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs';
import styles from '../styles/Layout.module.scss'

export const Home = ({slugs}) => {
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
            <img src="./images/bg.png" alt="Background"/>
          </picture>
        </div>
        <Link href='/hello'>
          <a>
            Go to hello
          </a>
        </Link>
      </section>
      <section className={styles.postlist}>

      </section>
        
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  return {
    props: {
      posts: files.map(fileName => fileName.replace('.md', ''))
    }
  }
}
