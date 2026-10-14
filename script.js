(() => {
  'use strict';

  const translations = {
    en: {
      nav_about: 'About', nav_focus: 'Expertise', nav_research: 'Research', nav_direction: 'Direction',
      hero_eyebrow: 'INDEPENDENT GAME TECHNOLOGY RESEARCH',
      hero_line_1: 'Beyond the', hero_line_2: 'source.', hero_subline: 'Into the unknown.',
      hero_description: 'We explore what sits beneath the surface of games — from undocumented binary formats and client internals to the tools that make hidden systems understandable.',
      hero_primary: 'Explore our research', hero_secondary: 'Get to know BOVA', scroll: 'SCROLL TO EXPLORE',
      about_overline: 'WHO WE ARE', about_title: 'Curiosity is our starting point.',
      about_p1: 'BOVA is an independent research and development initiative focused on understanding the technology behind games.',
      about_p2: 'We investigate undocumented formats, explore client and asset structures, and turn complex findings into practical knowledge. No unnecessary hype. Just research, experiments, and the drive to understand how things work.',
      about_signature: 'RESEARCH · UNDERSTAND · REBUILD',
      focus_overline: 'OUR FOCUS', focus_title: 'Exploring the unexplored.',
      focus_subtitle: 'Four disciplines, one approach: look closer, question assumptions, and make the unknown understandable.',
      focus_1_title: 'Reverse Engineering', focus_1_text: 'Studying game clients and undocumented systems to understand what happens beneath the interface.',
      focus_2_title: 'Binary Formats', focus_2_text: 'Exploring proprietary file layouts, archives, serialization, and the data that connects them.',
      focus_3_title: 'Game Assets', focus_3_text: 'Investigating geometry, textures, maps, and other building blocks of virtual worlds.',
      focus_4_title: 'Tool Development', focus_4_text: 'Designing focused utilities to inspect, visualize, and work with complex game resources.',
      research_overline: 'SELECTED WORK', research_title: 'Ideas backed by investigation.',
      research_subtitle: 'A look into the research and technical work that shaped BOVA.',
      research_card1_tag: 'FIELD NOTES / REVERSE ENGINEERING', research_card1_kind: 'EARLIER RESEARCH',
      research_card1_title: 'Allods Online Client Research',
      research_card1_desc: 'Our earlier work with client analysis, reverse engineering, and custom development tools.',
      research_card1_link: 'Read the story', research_card2_tag: 'PUBLIC REPOSITORY', research_card2_kind: 'GITHUB / OPEN RESEARCH',
      research_card2_desc: 'A home for research notes, binary format exploration, and technical documentation.', research_card2_link: 'Open repository',
      direction_overline: "WHAT'S NEXT", direction_title: 'Built to keep exploring.',
      direction_desc: "We're exploring ideas for practical, lightweight tools that make game data easier to inspect, understand, and work with. We'll share public work when it's ready.",
      direction_cta: 'Follow on GitHub',
      step_1_title: 'Discover', step_1_desc: 'Find the patterns hidden in unfamiliar data.',
      step_2_title: 'Understand', step_2_desc: 'Document the structure, behavior, and connections.',
      step_3_title: 'Build', step_3_desc: 'Turn knowledge into useful tools and workflows.',
      step_4_title: 'Preserve', step_4_desc: 'Keep valuable technical knowledge accessible.',
      closing_label: "LET'S CONNECT", closing_title: 'The best discoveries start with a question.',
      closing_text: "Researching a strange file format? Working on a related project? We'd love to exchange ideas.",
      closing_cta: 'Find us on GitHub', footer_caption: 'Independent game technology research.'
    },
    ru: {
      nav_about: 'О проекте', nav_focus: 'Направления', nav_research: 'Исследования', nav_direction: 'Планы',
      hero_eyebrow: 'НЕЗАВИСИМЫЕ ИССЛЕДОВАНИЯ ИГРОВЫХ ТЕХНОЛОГИЙ',
      hero_line_1: 'За пределами', hero_line_2: 'исходного кода.', hero_subline: 'Туда, где нет документации.',
      hero_description: 'Исследуем то, что скрыто внутри игр: недокументированные бинарные форматы, устройство клиентов и инструменты, которые помогают разобраться в сложных системах.',
      hero_primary: 'Наши исследования', hero_secondary: 'О проекте BOVA', scroll: 'ЛИСТАЙТЕ НИЖЕ',
      about_overline: 'КТО МЫ', about_title: 'Всё начинается с любопытства.',
      about_p1: 'BOVA — независимый исследовательский проект, посвящённый технологиям, которые лежат в основе игр.',
      about_p2: 'Мы разбираем неизвестные форматы, изучаем устройство клиентов и игровых ресурсов, превращаем сложные находки в полезные знания. Меньше громких слов — больше исследований и экспериментов.',
      about_signature: 'ИССЛЕДОВАТЬ · ПОНЯТЬ · ВОССОЗДАТЬ',
      focus_overline: 'НАШ ФОКУС', focus_title: 'Исследуем неизведанное.',
      focus_subtitle: 'Четыре направления, один подход: смотреть глубже, проверять догадки и объяснять сложное.',
      focus_1_title: 'Реверс-инжиниринг', focus_1_text: 'Изучаем игровые клиенты и недокументированные системы, чтобы понимать их внутреннюю работу.',
      focus_2_title: 'Бинарные форматы', focus_2_text: 'Исследуем структуры файлов, архивы, сериализацию и связи между данными.',
      focus_3_title: 'Игровые ресурсы', focus_3_text: 'Разбираемся с геометрией, текстурами, картами и устройством виртуальных миров.',
      focus_4_title: 'Разработка инструментов', focus_4_text: 'Проектируем небольшие утилиты для анализа, просмотра и обработки игровых ресурсов.',
      research_overline: 'НАШ ОПЫТ', research_title: 'От гипотез — к исследованиям.',
      research_subtitle: 'Материалы и техническая работа, с которых начинался BOVA.',
      research_card1_tag: 'ЗАМЕТКИ / РЕВЕРС-ИНЖИНИРИНГ', research_card1_kind: 'РАННИЕ ИССЛЕДОВАНИЯ',
      research_card1_title: 'Исследование клиента Allods Online',
      research_card1_desc: 'Наш предыдущий опыт анализа клиента, реверс-инжиниринга и разработки собственных инструментов.',
      research_card1_link: 'Читать историю', research_card2_tag: 'ПУБЛИЧНЫЙ РЕПОЗИТОРИЙ', research_card2_kind: 'GITHUB / ИССЛЕДОВАНИЯ',
      research_card2_desc: 'Место для технических заметок, исследований бинарных форматов и документации.', research_card2_link: 'Открыть репозиторий',
      direction_overline: 'ЧТО ДАЛЬШЕ', direction_title: 'Продолжаем исследовать.',
      direction_desc: 'Нас интересуют идеи простых и лёгких инструментов для работы с игровыми данными. Публиковать разработки и документацию будем по мере готовности.',
      direction_cta: 'Следить на GitHub',
      step_1_title: 'Находить', step_1_desc: 'Замечать закономерности в неизвестных данных.',
      step_2_title: 'Разбираться', step_2_desc: 'Изучать структуру, поведение и взаимосвязи.',
      step_3_title: 'Создавать', step_3_desc: 'Превращать знания в полезные инструменты.',
      step_4_title: 'Сохранять', step_4_desc: 'Делать технические знания доступными.',
      closing_label: 'НА СВЯЗИ', closing_title: 'Лучшие открытия начинаются с вопроса.',
      closing_text: 'Исследуете необычный формат или работаете над похожим проектом? Будем рады обменяться опытом и идеями.',
      closing_cta: 'Связаться через GitHub', footer_caption: 'Независимые исследования игровых технологий.'
    }
  };

  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.querySelector('#mobile-nav');
  const langButtons = document.querySelectorAll('.language-button');

  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileNav.hidden = !open;
  }

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) setMenu(false);
  });

  function setLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const translation = dict[node.dataset.i18n];
      if (translation) node.textContent = translation;
    });
    langButtons.forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelector('meta[name="description"]').content = lang === 'ru'
      ? 'BOVA — независимый проект по реверс-инжинирингу, исследованию бинарных форматов, игровых технологий и разработке инструментов.'
      : 'BOVA is an independent initiative exploring reverse engineering, binary formats, game technology and digital preservation.';
    document.title = lang === 'ru' ? 'BOVA — За пределами исходного кода' : 'BOVA — Beyond the Source';
    try { localStorage.setItem('bova-lang', lang); } catch (error) { /* local storage may be blocked */ }
    if (menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
  }

  langButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('bova-lang') || (navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'); }
  catch (error) { savedLanguage = 'en'; }
  setLanguage(translations[savedLanguage] ? savedLanguage : 'en');
  document.querySelector('#year').textContent = String(new Date().getFullYear());
})();
