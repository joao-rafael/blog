import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import Card from '../components/Card';
import Contact from '../components/Contact';
import { getAllPosts } from '../lib/posts';
import styles from '../styles/Home.module.scss';
import type { HomePageProps } from '../types/post';

const Home = ({ latestPost, posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Coding Bits</title>
        <meta name="keywords" content="web development, programming, blog" />
        <meta charSet="utf-8" />
      </Head>
      <section className={styles.container}>
        <section className={styles.heroSection}>
          <Link href={`/${latestPost.slug}`} className={styles.heroCard}>
            <img src={latestPost.coverImage} alt="" className={styles.heroImage} />
            <div className={styles.heroShade} />
            <div className={styles.heroGlass}>
              <span className={styles.heroTag}>Latest post</span>
              <h1>{latestPost.title}</h1>
              <p>{latestPost.description}</p>
              <span className={styles.heroMeta}>{latestPost.date}</span>
            </div>
          </Link>
        </section>

        <section className={styles.postsSection} id="articles">
          <div className={styles.sectionTitle}>
            <span>More Posts</span>
          </div>
          <div className={styles.postlist}>
            {posts.map((file) => (
              <Card
                title={file.title}
                date={file.date}
                description={file.description}
                coverImage={file.coverImage}
                link={`/${file.slug}`}
                key={file.slug}
              />
            ))}
          </div>
        </section>
      </section>
      <div className={styles.contactWrap}>
        <Contact />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const allPosts = getAllPosts();
  const [latestPost, ...posts] = allPosts;

  return {
    props: {
      latestPost,
      posts,
    },
  };
};

export default Home;
