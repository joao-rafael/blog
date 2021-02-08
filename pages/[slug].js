import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import path from 'path';

const Post = ({htmlStr, data}) => {
    return (
        <>  
            <Head>
                <title>{data.title}</title>
            </Head>
            <div dangerouslySetInnerHTML={{__html: htmlStr}}>
               
            </div>
        </>
        
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