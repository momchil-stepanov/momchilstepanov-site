export const languages = {
  bg: 'Български',
  en: 'English',
} as const;

export const defaultLang = 'bg' as const;

export type Lang = keyof typeof languages;

export const ui = {
  bg: {
    'site.title': 'Момчил Степанов',
    'site.tagline': 'Voice talent, наратор, продуцент на аудиокниги',
    'site.description':
      'Момчил Степанов — voice talent, наратор и продуцент на аудиокниги. Над 200 аудиокниги, 5000+ документални продукции, дублаж на филми и сериали.',

    'nav.home': 'Начало',
    'nav.services': 'Услуги',
    'nav.services.voiceOver': 'Voice Over',
    'nav.services.audiobooks': 'Аудиокниги',
    'nav.services.dubbing': 'Дублаж',
    'nav.music': 'Музика',
    'nav.about': 'За мен',
    'nav.contact': 'Контакт',

    'cta.contact': 'Свържете се',
    'cta.learnMore': 'Научете повече',
    'cta.viewServices': 'Към услугите',
    'cta.allAudiobooks': 'Пълен каталог в Storytel',
    'cta.youtube': 'YouTube канал',

    'footer.profiles': 'Профили',
    'footer.navigation': 'Навигация',
    'footer.rights': 'Всички права запазени.',

    'lang.switch': 'EN',
    'lang.switchLabel': 'Switch to English',

    'form.title': 'Запитване',
    'form.intro':
      'Попълнете формата с основна информация за проекта. Цените се определят индивидуално според обхвата и правата.',
    'form.name': 'Име',
    'form.email': 'Имейл',
    'form.company': 'Компания / Издателство',
    'form.projectType': 'Вид проект',
    'form.projectType.options': 'Voice Over | Аудиокнига | Дублаж | Друго',
    'form.volume': 'Обем (минути / страници / епизоди)',
    'form.deadline': 'Срок',
    'form.rights': 'Права (територия, медии, срок)',
    'form.endClient': 'Краен клиент',
    'form.message': 'Допълнителна информация',
    'form.submit': 'Изпрати запитване',
    'form.note':
      'Формата е placeholder — backend ще бъде свързан в по-късна фаза.',
  },
  en: {
    'site.title': 'Momchil Stepanov',
    'site.tagline': 'Voice talent, narrator, audiobook producer',
    'site.description':
      'Momchil Stepanov — voice talent, narrator and audiobook producer. Over 200 audiobooks, 5000+ documentary productions, dubbing for film and television.',

    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.services.voiceOver': 'Voice Over',
    'nav.services.audiobooks': 'Audiobooks',
    'nav.services.dubbing': 'Dubbing',
    'nav.music': 'Music',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'cta.contact': 'Get in touch',
    'cta.learnMore': 'Learn more',
    'cta.viewServices': 'View services',
    'cta.allAudiobooks': 'Full catalogue on Storytel',
    'cta.youtube': 'YouTube channel',

    'footer.profiles': 'Profiles',
    'footer.navigation': 'Navigation',
    'footer.rights': 'All rights reserved.',

    'lang.switch': 'BG',
    'lang.switchLabel': 'Превключи на български',

    'form.title': 'Inquiry',
    'form.intro':
      'Submit the form below with basic project information. Pricing is provided on an individual basis according to scope and rights.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.company': 'Company / Publisher',
    'form.projectType': 'Project type',
    'form.projectType.options': 'Voice Over | Audiobook | Dubbing | Other',
    'form.volume': 'Volume (minutes / pages / episodes)',
    'form.deadline': 'Deadline',
    'form.rights': 'Rights (territory, media, term)',
    'form.endClient': 'End client',
    'form.message': 'Additional information',
    'form.submit': 'Send inquiry',
    'form.note':
      'Form is a placeholder — backend will be connected in a later phase.',
  },
} as const;

export type UIKey = keyof (typeof ui)['bg'];
