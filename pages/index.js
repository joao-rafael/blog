import matter from 'gray-matter';
import Head from 'next/head'
import Card from '../components/Card';
// import fs from 'fs';
import path from 'path';
import styles from '../styles/Layout.module.scss'
import fs from 'fs';

export default function Home({ postProps}) {
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
          {
            postProps.map(post => {
              console.log(post);
            })
          }
          <Card title='Hello World!' date='March 12, 2021' description='this is my first blog post!' link='/hello'>
          </Card>
          <Card title='Making Computer Graphics Experiments' date='March 12, 2021' description='One good description' link='/hello'>
          </Card>
          <Card title='Making Computer Graphics Experiments' date='March 12, 2021' description='One good description' link='/hello'>
          </Card>
          <Card title='Making Computer Graphics Experiments' date='March 12, 2021' description='One good description' link='/hello'>
          </Card>
        </section>
      </section>
     

    </div>
  );
}

export const getStaticPaths = async () => {

  const files = fs.readdirSync('posts');
  const paths = files.map(filename => ({
      params: {
          slug: filename.toString()
      }
  }));
  console.log(paths);
  return {
      paths,
      fallback: false
  }
}

export const getStaticProps = async (paths) => {
  
  const postList = Object.entries(paths.params.slug);
  console.log(postList);

  const postProps = postList.map(post => {
    const markdown =  fs.readFileSync(path.join('posts', post)).toString();
    const parsedMarkdown = matter(markdown);
    
    return {
      data: parsedMarkdown.data
    }
  })


  return {
    props: postProps
  }
}

/*
 {

  export const getStaticProps = async () => {
  console.log('executed');
  const files = await fs.readdirSync('posts');
  const data = []; 
  files.map(file => {
    const markdown = fs.readFileSync(file.toString());
  })
  const parsedMarkdown = matter(markdown);
  const data = parsedMarkdown.data;
  console.log('files: ' + files);
  return {
    props: {
      postData: files.map(fileName => fileName.replace('.md', ''))
    }
  }
            posts.map(slug => {
              console.log(posts.length);
             

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
*/
