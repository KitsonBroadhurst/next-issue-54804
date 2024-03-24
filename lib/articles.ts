import glob from "fast-glob";

interface Article {
  url: string;
  tag: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

async function importArticle(
  articleFilename: string
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/library/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ""),
    ...article,
  };
}

export async function getArticles() {
  const articleFilenames = await glob("*/page.mdx", {
    cwd: "./app/library",
  });

  const articles = await Promise.all(articleFilenames.map(importArticle));

  return articles;
}
