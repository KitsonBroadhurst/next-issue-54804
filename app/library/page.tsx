import { getArticles } from "@/lib/articles";

export default async function Library() {
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
