"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Sparkles, FolderCode } from "lucide-react";
import {
  InsightCategory,
  InsightArticle,
  insightCategories,
} from "@/data/insightsData";

interface InsightsFeedProps {
  articles: InsightArticle[];
}

export default function InsightsFeed({ articles }: InsightsFeedProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories: string[] = ["All", ...insightCategories.map((c) => c.name)];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const featuredArticle = articles.find((a) => a.isFeatured) || articles[0];

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 shrink-0 ${
                isActive
                  ? "bg-snl-accent text-white shadow-lg shadow-snl-accent/25 scale-[1.02]"
                  : "bg-[#0D0F12] border border-snl-border text-snl-muted hover:text-snl-text hover:border-snl-border-light"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Featured Article Banner (Only on 'All' or when featured category matches) */}
      {featuredArticle &&
        (selectedCategory === "All" ||
          selectedCategory === featuredArticle.category) && (
          <div className="relative group overflow-hidden bg-gradient-to-b from-[#111318] to-[#0D0F12] border border-snl-border hover:border-snl-accent/50 rounded-2xl p-6 sm:p-10 transition-all duration-300">
            <div className="absolute top-0 right-0 w-96 h-96 bg-snl-accent/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-snl-accent/15 border border-snl-accent/30 text-snl-accent rounded-full text-xs font-mono font-medium">
                    <Sparkles className="w-3 h-3" />
                    Featured Insight
                  </span>
                  <span className="text-xs font-mono text-snl-subtle uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                </div>

                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="block group/link"
                >
                  <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-snl-text group-hover/link:text-snl-accent transition-colors leading-[1.15]">
                    {featuredArticle.title}
                  </h2>
                </Link>

                <p className="text-snl-muted text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredArticle.lead}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-snl-subtle pt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-snl-accent/20 text-snl-accent flex items-center justify-center font-bold text-[10px]">
                      {featuredArticle.author.initials}
                    </span>
                    <span className="text-snl-text">{featuredArticle.author.name}</span>
                  </div>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredArticle.displayDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 shadow-lg shadow-snl-accent/20 group-hover:scale-105"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        )}

      {/* Grid of All Filtered Articles */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-snl-border pb-4">
          <h3 className="font-heading font-bold text-lg text-snl-text flex items-center gap-2">
            <FolderCode className="w-4 h-4 text-snl-accent" />
            <span>
              {selectedCategory === "All"
                ? "All Articles"
                : `${selectedCategory} Articles`}
            </span>
          </h3>
          <span className="text-xs font-mono text-snl-subtle">
            {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-[#0D0F12] border border-snl-border hover:border-snl-accent/40 rounded-xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-snl-accent/5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold text-snl-accent uppercase tracking-wider bg-snl-accent/10 px-2.5 py-0.5 rounded-md border border-snl-accent/20">
                    {article.category}
                  </span>
                  <span className="text-xs font-mono text-snl-subtle flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <Link href={`/insights/${article.slug}`} className="block">
                  <h4 className="font-heading text-xl font-bold tracking-tight text-snl-text group-hover:text-snl-accent transition-colors leading-snug">
                    {article.title}
                  </h4>
                </Link>

                <p className="text-snl-muted text-sm leading-relaxed line-clamp-3">
                  {article.lead}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-snl-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-snl-subtle">
                  <span className="w-5 h-5 rounded-full bg-snl-border text-snl-text flex items-center justify-center font-mono font-bold text-[9px]">
                    {article.author.initials}
                  </span>
                  <span>{article.author.name}</span>
                </div>

                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-snl-accent group-hover:underline"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
