import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import Contact from '../components/Contact';
import { getAllPostSlugs, getPostBySlug } from '../lib/posts';
import styles from '../styles/Post.module.scss';
import type { PostPageProps } from '../types/post';

const Post = ({ htmlStr, data, coverImage, coverCreditHtml }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.post}>
      <Head>
        <title>{data.title}</title>
      </Head>

      <article className={styles.article}>
        <div className={styles.coverFrame}>
          <img src={coverImage} alt="" className={styles.coverImage} />
          <div className={styles.coverShade} />
          <div className={styles.coverGlass} />
        </div>

        {coverCreditHtml ? (
          <div className={styles.coverCredit} dangerouslySetInnerHTML={{ __html: coverCreditHtml }} />
        ) : null}

        <header>
          <span className={styles.date}>{data.date}</span>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </header>

        <section className={styles.content} dangerouslySetInnerHTML={{ __html: htmlStr }} />

        <Link href="/" className={styles.link}>
          go back
        </Link>
      </article>

      <Contact />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = getAllPostSlugs().map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps, { slug: string }> = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    throw new Error('Missing slug parameter.');
  }

  return {
    props: await getPostBySlug(slug),
  };
};

export default Post;
