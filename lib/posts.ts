import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { marked } from 'marked';

import type { PostFrontmatter, PostPageProps, PostSummary } from '../types/post';

const POSTS_DIRECTORY = 'posts';
const DEFAULT_COVER_IMAGE = '/images/bg.png';

const normalizeAssetPath = (assetPath: string) => {
  if (!assetPath) {
    return DEFAULT_COVER_IMAGE;
  }

  if (assetPath.startsWith('http://') || assetPath.startsWith('https://') || assetPath.startsWith('/')) {
    return assetPath;
  }

  return assetPath.replace(/^\.?\//, '/');
};

const extractLeadMedia = (content: string) => {
  const imageMatch = content.match(/!\[[^\]]*\]\(([^)]+)\)/);
  const coverImage = imageMatch ? normalizeAssetPath(imageMatch[1]) : DEFAULT_COVER_IMAGE;
  let contentWithoutLeadImage = imageMatch ? content.replace(imageMatch[0], '').trimStart() : content;
  let coverCreditMarkdown: string | null = null;

  if (imageMatch) {
    const blockquoteMatch = contentWithoutLeadImage.match(/^>\s.*(?:\n>\s.*)*/);

    if (blockquoteMatch) {
      coverCreditMarkdown = blockquoteMatch[0];
      contentWithoutLeadImage = contentWithoutLeadImage.replace(blockquoteMatch[0], '').trimStart();
    }
  }

  return {
    coverImage,
    coverCreditMarkdown,
    contentWithoutLeadImage,
  };
};

const readMarkdownFile = (slug: string) => {
  const raw = fs.readFileSync(path.join(POSTS_DIRECTORY, `${slug}.md`), 'utf8');
  const parsedMarkdown = matter(raw);
  const data = parsedMarkdown.data as PostFrontmatter;
  const { coverImage, coverCreditMarkdown, contentWithoutLeadImage } = extractLeadMedia(parsedMarkdown.content);

  return {
    data,
    coverImage,
    coverCreditMarkdown,
    content: contentWithoutLeadImage.replaceAll('(./images/', '(/images/'),
  };
};

export const getAllPosts = (): PostSummary[] => {
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .map((fileName) => fileName.replace('.md', ''))
    .map((slug) => {
      const { data, coverImage } = readMarkdownFile(slug);

      return {
        ...data,
        coverImage,
      };
    })
    .sort((a, b) => new Date(b.dateiso).getTime() - new Date(a.dateiso).getTime());
};

export const getAllPostSlugs = () => {
  return fs.readdirSync(POSTS_DIRECTORY).map((fileName) => fileName.replace('.md', ''));
};

export const getPostBySlug = async (slug: string): Promise<PostPageProps> => {
  const { data, content, coverImage, coverCreditMarkdown } = readMarkdownFile(slug);
  const [htmlStr, coverCreditHtml] = await Promise.all([
    marked(content),
    coverCreditMarkdown ? marked(coverCreditMarkdown) : Promise.resolve(null),
  ]);

  return {
    data,
    coverImage,
    coverCreditHtml,
    htmlStr,
  };
};
