// Loads all news articles from src/data/news/*.json at build time.

export interface NewsData {
  date: string;
  image?: string;
  imageAlt_en?: string;
  imageAlt_fr?: string;
  title_en: string;
  title_fr: string;
  summary_en?: string;
  summary_fr?: string;
  body_en?: string;
  body_fr?: string;
  [key: string]: any;
}

export interface NewsEntry {
  slug: string;
  data: NewsData;
}

const modules = import.meta.glob<{ default: NewsData }>('../data/news/*.json', {
  eager: true,
});

export function getAllNews(): NewsEntry[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split('/').pop()!.replace(/\.json$/, '');
      const data = (mod as any).default ?? (mod as any);
      return { slug, data: data as NewsData };
    })
    .sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
}

export function getNews(slug: string): NewsEntry | undefined {
  return getAllNews().find((n) => n.slug === slug);
}
