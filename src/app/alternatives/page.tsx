import type { Metadata } from "next";
import {Header} from "@/components/layout/header";
import {Footer} from "@/components/layout/footer";
import {GridBackground} from "@/components/layout/grid-background";
import {AlternativeArticleCard} from "@/components/alternatives/alternative-article-card";
import {alternativeArticles} from "@/data/alternatives";
import "@/components/alternatives/alternatives.css";
export const metadata:Metadata={title:"Software Alternatives | JazzHQ",description:"Explore software comparison guides to understand features, pricing and which platform fits your needs.",alternates:{canonical:"/alternatives"}};
export default function AlternativesGallery() {
  return (
    <GridBackground>
      <Header />
      <main className="alternatives-gallery">
        <div className="alternatives-gallery__intro">
          <h1>Software Alternatives</h1>
          <p>Explore software comparison guides to understand features, pricing and which platform fits your needs.</p>
        </div>
        <div className="alternatives-gallery__list">
          {alternativeArticles.map((article) => <AlternativeArticleCard key={article.slug} article={article} />)}
        </div>
      </main>
      <Footer />
    </GridBackground>
  );
}
