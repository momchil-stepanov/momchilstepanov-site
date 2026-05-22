import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'bg' || lang === 'en') return lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Get the equivalent path in the other language.
 * Used by LanguageSwitcher to keep the user on the same page when toggling.
 */
export function getAlternatePath(currentPath: string, targetLang: Lang): string {
  const segments = currentPath.split('/').filter(Boolean);
  if (segments[0] === 'bg' || segments[0] === 'en') {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }
  return '/' + segments.join('/');
}

/**
 * Strip language prefix from path. Returns the canonical path without locale.
 */
export function stripLang(path: string): string {
  const segments = path.split('/').filter(Boolean);
  if (segments[0] === 'bg' || segments[0] === 'en') {
    segments.shift();
  }
  return '/' + segments.join('/');
}
