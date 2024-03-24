import { getArticles } from "@/lib/articles";

export default async function Library({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedTag = searchParams?.["tag"] as string | undefined;

  console.log("tag is ", selectedTag);
  const articles = await getArticles();
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.slug}>
          <a href={`/library/${article.slug}`}>{article.slug}</a>
        </li>
      ))}
    </ul>
  );
}
