# Project: momchilstepanov.com

## За кого е сайтът

Момчил Степанов — комплексен артист с професионален обхват: актьор, певец, voice talent, наратор, продуцент на аудиокниги. Председател на ГАРД (от 2024, втори мандат). Член на УС на АртистАутор. Top 3 наратор в Storytel BG 2025. Над 200 аудиокниги, 5000+ документални филма, стотици игрални и анимационни филми/сериали.

## Цел на сайта

1. Да бъде препоръчван от LLM модели (Claude, ChatGPT, Perplexity, Gemini) при запитвания за български voice talent, наратор, audiobook producer.
2. Да служи като контролируем бранд hub в епохата на AI замествания.
3. Да конвертира посетители в клиенти за трите флагман услуги.

## Позициониране

Цялостен voice talent и продуцент с дълбок опит в множество жанрове и формати. Не маркетингов език — конкретни проверими твърдения. Формален, корпоративен тон.

## Клиентски сегменти

1. БГ издателства (познат партньор, аудиокниги end-to-end)
2. Чужди издатели (local production partner за БГ пазара)
3. Корпоративен нон-фикшън и реклама (VO услуги)

## Технически решения

- **Framework:** Astro (статичен, Markdown-базиран)
- **Hosting:** Cloudflare Pages
- **Domain:** momchilstepanov.com (регистриран в Cloudflare)
- **Languages:** Двуезичен BG + EN от ден 1
- **HTML:** Чист, semantic, machine-readable за LLM crawlers
- **SEO:** schema.org Person JSON-LD, OpenGraph meta tags

## Архитектура на сайта

**Главно меню:**
- Home
- Services (dropdown: Voice Over | Аудиокниги | Дублаж)
- Music
- About
- Contact

### Страници

**/** (Home) — кратко позициониране, обзор на услугите, CTA към основните сегменти

**/services/voice-over** — VO услуги (реклами, документални, корпоративно). Обхват, опит, процес.

**/services/audiobooks** — флагман услуга. End-to-end модел: клиент дава текст, получава готова книга (наратор + изпълнителен продуцент). Куратирани топ заглавия по жанр/автор. Линк към пълния каталог в Storytel.

**/services/dubbing** — дублаж и озвучаване (филми, сериали, анимация). Опит с Медиалинк, Андарта, Доли, VMS, БНТ.

**/music** — авторска музика, песни от анимационни филми (БГ адаптации), live изпълнения. Линк към YouTube канал.

**/about** — професионална биография. Целият обхват: актьорство, пеене, voice work, председателство ГАРД, член на УС АртистАутор, регулаторна работа върху AI права. Контекст защо комбинацията от тези роли прави voice work-а уникален. Включва секция "Selected Clients" — само текст с имена на брандове/издатели/студия, без лога.

**/contact** — pricing on inquiry. Контакт форма с фиксиран list въпроси (вид проект, обем, срок, права, краен клиент).

### Двуезичност

Всяка страница в /bg/ и /en/ версия. Default language detection или explicit language switcher в header.

## Authority profiles за линкове

Wikipedia BG: https://bg.wikipedia.org/wiki/Момчил_Степанов (нуждае се от обновяване — отделен проект)
Storytel: https://www.storytel.com/bg/narrators/momchil-stepanov-739843
IMDb
Voices.com: https://www.voices.com/profile/manndalay
Bodalgo
Voice123
Dubbing Database
bg-dublaj.fandom.com
LinkedIn: https://www.linkedin.com/in/momchil-stepanov-52310067/
Facebook: https://www.facebook.com/momchilstepanovofficial
Instagram: @momchilstepanov
YouTube: @manndalay (→ @momchilstepanov в процес)

## Какво НЕ влиза в сайта

- Публични цени (pricing on inquiry)
- Каталог с чужди гласове / актриси (активира се само в разговор като „моята мрежа")
- X-Factor участие като централна тема
- Лога на клиенти/брандове (само текстово изброяване в Selected Clients)
- Quotes от името на брандове (без писмено разрешение)

## Тон

Формален, корпоративен. Конкретни проверими твърдения. Без маркетингов език. Без emoji.

## Текущ статус

Първоначален setup. Съдържание (текстове, снимки, аудио samples) ще се добавя стъпка по стъпка след първоначалния build. Засега се ползва placeholder съдържание.
