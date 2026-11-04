import Link from "next/link";
import Image from "next/image";
import { readingMinutes, type AlternativeArticle } from "@/data/alternatives";
import "./alternatives.css";

export function ArticleBreadcrumb({ title }: { title: string }) {
  const data = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
    {"@type":"ListItem",position:1,name:"Alternatives",item:"/alternatives"},
    {"@type":"ListItem",position:2,name:title,item:"/alternatives/partnerstack-alternatives"},
  ]};
  return <><nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href="/alternatives">Alternatives</Link><span aria-hidden="true">›</span><span aria-current="page">{title}</span></nav><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}} /></>;
}
export function ArticleMetadata({article}:{article:AlternativeArticle}) {
 return <div className="article-metadata">
  {article.author && <div className="article-author">{article.author.photo && <Image src={article.author.photo} alt="" width={40} height={40} />}<span>{article.author.name}{article.author.role && <small>{article.author.role}</small>}</span></div>}
  <span>{readingMinutes(article.wordCount)} min read</span>
  {article.publishedAt && <span>Published <time dateTime={article.publishedAt}>{article.publishedAt}</time></span>}
  {article.updatedAt && <span>Updated <time dateTime={article.updatedAt}>{article.updatedAt}</time></span>}
 </div>;
}
