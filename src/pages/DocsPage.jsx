import React, { useState, useMemo } from 'react';
import { DOCS_CATEGORIES } from '../data/docs';
import { Search, ChevronRight, BookOpen, FileText, Menu, X } from 'lucide-react';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState(DOCS_CATEGORIES[0].articles[0].slug);
  const [mobileDocsNavOpen, setMobileDocsNavOpen] = useState(false);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return DOCS_CATEGORIES;
    const query = searchQuery.toLowerCase();
    return DOCS_CATEGORIES.map(cat => ({
      ...cat,
      articles: cat.articles.filter(
        art => art.title.toLowerCase().includes(query) || art.summary.toLowerCase().includes(query) || art.content.toLowerCase().includes(query)
      )
    })).filter(cat => cat.articles.length > 0);
  }, [searchQuery]);

  const currentArticle = useMemo(() => {
    for (const cat of DOCS_CATEGORIES) {
      const found = cat.articles.find(a => a.slug === selectedArticleSlug);
      if (found) return found;
    }
    return DOCS_CATEGORIES[0].articles[0];
  }, [selectedArticleSlug]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <div className="border-b-2 border-[#1F2937] pb-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#111827] border border-[#0EA5E9] text-[11px] font-bold text-[#0EA5E9] uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>DOCUMENTATION PORTAL</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Nomony AI User Docs
            </h1>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111827] border-2 border-[#1F2937] focus:border-[#0EA5E9] text-white text-xs pl-9 pr-4 py-2.5 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMobileDocsNavOpen(!mobileDocsNavOpen)}
          className="w-full flex items-center justify-between bg-[#111827] border-2 border-[#1F2937] p-3 text-xs font-bold text-white uppercase"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#0EA5E9]" />
            <span>Navigation & Topics</span>
          </span>
          {mobileDocsNavOpen ? <X className="w-4 h-4 text-[#0EA5E9]" /> : <Menu className="w-4 h-4 text-[#0EA5E9]" />}
        </button>

        {mobileDocsNavOpen && (
          <div className="mt-2 bg-[#111827] border-2 border-[#1F2937] p-4 space-y-6">
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="space-y-2">
                <div className="text-[11px] font-extrabold text-[#0EA5E9] uppercase tracking-wider border-b border-[#1F2937] pb-1">
                  {cat.title}
                </div>
                <div className="space-y-1 pl-2">
                  {cat.articles.map((art) => (
                    <button
                      key={art.slug}
                      onClick={() => {
                        setSelectedArticleSlug(art.slug);
                        setMobileDocsNavOpen(false);
                      }}
                      className={`block w-full text-left py-1 text-xs transition-colors ${
                        selectedArticleSlug === art.slug
                          ? 'text-[#0EA5E9] font-bold'
                          : 'text-[#9CA3AF] hover:text-white'
                      }`}
                    >
                      • {art.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="hidden lg:block lg:col-span-1 space-y-6 border-r-2 border-[#1F2937] pr-6">
          {filteredCategories.length === 0 ? (
            <div className="text-xs text-[#9CA3AF]">No matching categories found.</div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.id} className="space-y-2">
                <h3 className="text-[11px] font-extrabold text-[#0EA5E9] uppercase tracking-wider border-b border-[#1F2937] pb-1 truncate">
                  {cat.title}
                </h3>
                <ul className="space-y-1">
                  {cat.articles.map((art) => (
                    <li key={art.slug}>
                      <button
                        onClick={() => setSelectedArticleSlug(art.slug)}
                        className={`w-full text-left text-xs py-1.5 px-2 transition-colors rounded-none flex items-center justify-between group ${
                          selectedArticleSlug === art.slug
                            ? 'bg-[#111827] text-[#0EA5E9] font-bold border-l-2 border-[#0EA5E9]'
                            : 'text-[#9CA3AF] hover:text-white hover:bg-[#111827]/50'
                        }`}
                      >
                        <span className="truncate">{art.title}</span>
                        {selectedArticleSlug === art.slug && (
                          <ChevronRight className="w-3 h-3 text-[#0EA5E9] shrink-0" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </aside>

        <main className="lg:col-span-3">
          {currentArticle ? (
            <div className="bg-[#111827] border-2 border-[#1F2937] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#1F2937] space-y-6">
              <div className="border-b-2 border-[#1F2937] pb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0EA5E9] uppercase mb-1">
                  <FileText className="w-4 h-4" />
                  <span>DOCUMENTATION ARTICLE</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {currentArticle.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 italic">
                  {currentArticle.summary}
                </p>
              </div>

              <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-mono">
                {currentArticle.content}
              </div>
            </div>
          ) : (
            <div className="bg-[#111827] border-2 border-[#1F2937] p-8 text-center text-xs text-[#9CA3AF]">
              Select an article from the navigation menu to view documentation.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
