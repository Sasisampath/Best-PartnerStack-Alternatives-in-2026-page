import Link from "next/link";
import { readingMinutes, type AlternativeArticle } from "@/data/alternatives";

export function AlternativeArticleCard({ article }: { article: AlternativeArticle }) {
  return (
    <Link className="alternative-card" href={`/alternatives/${article.slug}`}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <span className="alternative-card__meta">
        {readingMinutes(article.wordCount)} min read
        <span className="alternative-card__arrow" aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
