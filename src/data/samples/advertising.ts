import type { Sample } from '../../types/sample';

/**
 * Advertising audio samples — placeholder data.
 *
 * Audio files referenced below DO NOT YET EXIST. They need to be
 * uploaded to `public/audio/advertising/` — see
 * `public/audio/README.md`.
 *
 * Brand names below are illustrative placeholders for layout work
 * only. Replace with cleared, real-client examples before launch.
 */
export const advertisingSamples: Sample[] = [
  {
    id: 'ad-01',
    title: { bg: 'Реклама за автомобилен бранд', en: 'Automotive brand spot' },
    description: { bg: 'Корпоративен тон · 30 sec', en: 'Corporate tone · 30 sec' },
    duration: '0:30',
    audioUrl: '/audio/advertising/sample-01.mp3',
    metadata: { year: 2024, genre: 'Automotive' },
  },
  {
    id: 'ad-02',
    title: { bg: 'Радио кампания — телеком оператор', en: 'Radio campaign — telecom operator' },
    description: { bg: 'Енергичен · 20 sec', en: 'Energetic · 20 sec' },
    duration: '0:20',
    audioUrl: '/audio/advertising/sample-02.mp3',
    metadata: { year: 2024, genre: 'Telecom' },
  },
  {
    id: 'ad-03',
    title: { bg: 'Банкова кампания — пролетна оферта', en: 'Bank campaign — spring offer' },
    description: { bg: 'Доверителен · 45 sec', en: 'Trustworthy · 45 sec' },
    duration: '0:45',
    audioUrl: '/audio/advertising/sample-03.mp3',
    metadata: { year: 2024, genre: 'Banking' },
  },
  {
    id: 'ad-04',
    title: { bg: 'Спот за бира — летен сезон', en: 'Beer spot — summer season' },
    description: { bg: 'Топъл · разговорен · 30 sec', en: 'Warm · conversational · 30 sec' },
    duration: '0:30',
    audioUrl: '/audio/advertising/sample-04.mp3',
    metadata: { year: 2023, genre: 'FMCG' },
  },
  {
    id: 'ad-05',
    title: { bg: 'Jingle — модна верига', en: 'Jingle — fashion retailer' },
    description: { bg: 'Кратък tag · 8 sec', en: 'Short tag · 8 sec' },
    duration: '0:08',
    audioUrl: '/audio/advertising/sample-05.mp3',
    metadata: { year: 2023, genre: 'Retail' },
  },
  {
    id: 'ad-06',
    title: { bg: 'Промо — стрийминг платформа', en: 'Promo — streaming platform' },
    description: { bg: 'Cinematic · 60 sec', en: 'Cinematic · 60 sec' },
    duration: '1:00',
    audioUrl: '/audio/advertising/sample-06.mp3',
    metadata: { year: 2024, genre: 'Entertainment' },
  },
  {
    id: 'ad-07',
    title: { bg: 'Социална кампания — здравна осведоменост', en: 'Social campaign — health awareness' },
    description: { bg: 'Сериозен · 45 sec', en: 'Serious · 45 sec' },
    duration: '0:45',
    audioUrl: '/audio/advertising/sample-07.mp3',
    metadata: { year: 2023, genre: 'PSA' },
  },
  {
    id: 'ad-08',
    title: { bg: 'Online промо — e-commerce', en: 'Online promo — e-commerce' },
    description: { bg: 'Динамичен · pre-roll · 15 sec', en: 'Dynamic · pre-roll · 15 sec' },
    duration: '0:15',
    audioUrl: '/audio/advertising/sample-08.mp3',
    metadata: { year: 2024, genre: 'E-commerce' },
  },
  {
    id: 'ad-09',
    title: { bg: 'Brand tag — кафе верига', en: 'Brand tag — coffee chain' },
    description: { bg: 'Топъл · 10 sec', en: 'Warm · 10 sec' },
    duration: '0:10',
    audioUrl: '/audio/advertising/sample-09.mp3',
    metadata: { year: 2023, genre: 'F&B' },
  },
  {
    id: 'ad-10',
    title: { bg: 'TV кампания — застрахователен бранд', en: 'TV campaign — insurance brand' },
    description: { bg: 'Авторитетен · 30 sec', en: 'Authoritative · 30 sec' },
    duration: '0:30',
    audioUrl: '/audio/advertising/sample-10.mp3',
    metadata: { year: 2024, genre: 'Insurance' },
  },
];
