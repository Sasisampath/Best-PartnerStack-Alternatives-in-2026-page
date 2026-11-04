import Link from "next/link";
import Image from "next/image";
import {readingMinutes, type AlternativeArticle} from "@/data/alternatives";
export function AlternativeArticleCard({article}:{article:AlternativeArticle}) {
 return <Link className="alternative-card" href={`/alternatives/${article.slug}`}><div className="alternative-card__image"><Image src={article.image} alt="JazzHQ partner platform preview" width={2048} height={1002} /></div><div className="alternative-card__copy"><span className="alternative-card__label">BUYER’S GUIDE · {readingMinutes(article.wordCount)} MIN READ</span><h2>{article.title}</h2><p>{article.description}</p><span className="alternative-card__action">Read comparison <span aria-hidden="true">→</span></span></div></Link>;
}
