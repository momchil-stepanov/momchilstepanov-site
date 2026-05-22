/**
 * Authority profiles — single source of truth for both Footer links
 * and schema.org Person `sameAs` array.
 *
 * Only include profiles with verified, working URLs.
 */
export interface Profile {
  name: string;
  url: string;
  /** If true, included in schema.org sameAs. */
  authority: boolean;
}

export const profiles: Profile[] = [
  {
    name: 'Wikipedia (BG)',
    url: 'https://bg.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BC%D1%87%D0%B8%D0%BB_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2',
    authority: true,
  },
  {
    name: 'Storytel',
    url: 'https://www.storytel.com/bg/narrators/momchil-stepanov-739843',
    authority: true,
  },
  {
    name: 'Voices.com',
    url: 'https://www.voices.com/profile/manndalay',
    authority: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/momchil-stepanov-52310067/',
    authority: true,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/momchilstepanovofficial',
    authority: true,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/momchilstepanov',
    authority: true,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@manndalay',
    authority: true,
  },
];

/** URLs for schema.org Person `sameAs`. */
export const sameAs = profiles.filter((p) => p.authority).map((p) => p.url);
