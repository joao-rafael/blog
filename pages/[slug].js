import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import styles from '../styles/Post.module.scss'
import Contact from '../components/Contact'


const Post = ({htmlStr, data}) => {
    return (
        <div className={styles.post}>  
            <Head>
                <title>{data.title}</title>
            </Head>

            <article className={styles.article}>
                <header>
                    <h1>
                        {data.title}
                    </h1>
                    <p>
                        {data.description}
                    </p>
                    <span>
                        {data.date}
                    </span>
                </header>
                
                <section dangerouslySetInnerHTML={{__html: htmlStr}}>
                
                </section>

                <Link href='/'>
                    <a  className={styles.link}>
                        go back
                    </a>
                </Link>
            </article>

            <Contact>
            </Contact>
        </div>
        
    )
}

export const getStaticPaths = async () => {

    const files = fs.readdirSync('posts');
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {slug}}) => {

    const markdown = fs.readFileSync(path.join('posts', slug + '.md')).toString();
    const parsedMarkdown = matter(markdown);
    const htmlStr = marked(parsedMarkdown.content);

    return {
        props: {
            htmlStr,
            data: parsedMarkdown.data
        }
    }
}

export default Post