export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  dateiso: string;
  slug: string;
};

export type PostSummary = PostFrontmatter & {
  coverImage: string;
};

export type PostPageProps = {
  data: PostFrontmatter;
  coverImage: string;
  coverCreditHtml: string | null;
  htmlStr: string;
};

export type HomePageProps = {
  latestPost: PostSummary;
  posts: PostSummary[];
};
