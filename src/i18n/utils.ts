import { ui, defaultLang, languages, type Lang, type UIKey } from './ui';

export { languages, defaultLang, type Lang };

/** Returns a translator function for the given language (UI labels). */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Narrow an arbitrary string to a supported language, falling back to default. */
export function toLang(value: string | undefined): Lang {
  return value === 'en' || value === 'fr' ? value : defaultLang;
}

/**
 * Pick a localized value from a data object that uses the `_en` / `_fr`
 * suffix convention, e.g. loc(data, 'title', 'fr') -> data.title_fr.
 * Falls back to the English value, then to an empty string.
 */
export function loc(
  obj: Record<string, any> | undefined,
  key: string,
  lang: Lang
): string {
  if (!obj) return '';
  const value = obj[`${key}_${lang}`];
  if (value !== undefined && value !== null && value !== '') return value;
  return obj[`${key}_en`] ?? '';
}

/** Build a localized path, e.g. localizedPath('fr', 'about') -> /fr/about/ */
export function localizedPath(lang: Lang, slug = ''): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** Format an ISO date string for display in the given language. */
export function formatDate(iso: string, lang: Lang): string {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
