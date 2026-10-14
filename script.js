(() => {
  'use strict';
  const dictionary = {
    en: {
      nav_work:'Work',nav_expertise:'Expertise',nav_roadmap:'Roadmap',nav_contact:'Contact',
      hero_label:'GAME TECHNOLOGY / RESEARCH LAB',hero_title:'Beyond<br>the <em>source.</em>',
      hero_lead:'We look beneath the surface of digital worlds.',
      hero_description:'Reverse engineering, binary formats and focused tools. Turning undocumented technology into knowledge that lasts.',
      hero_btn_work:'Explore our work',hero_btn_roadmap:'View roadmap',hero_footer:'Research · Understand · Rebuild',hero_scroll:'SCROLL TO DISCOVER',
      stage_label:'STRUCTURE STUDY',stage_footer:'ILLUSTRATIVE VISUAL / NOT SOFTWARE',
      work_tag:'SELECTED RESEARCH',work_title:'Real questions.<br><em>Real exploration.</em>',
      work_intro:'We prefer to show the work, not just talk about it. A few public starting points from BOVA’s research journey.',
      work_one_tag:'ORIGINAL RESEARCH / ALLODS ONLINE',work_one_type:'BACKGROUND / REVERSE ENGINEERING',
      work_one_title:'Allods Online: Client Research',
      work_one_desc:'Earlier investigation into the client, its internals and custom tools — where this research journey began.',
      work_one_link:'Read the original story',work_two_tag:'PUBLIC REPOSITORY / GITHUB',work_two_type:'OPEN REPOSITORY / DOCUMENTATION',
      work_two_desc:'A public home for notes, format studies and technical documentation as they become ready.',work_two_link:'Open on GitHub',
      expertise_tag:'WHAT WE STUDY',expertise_title:'Curiosity, with<br><em>a technical edge.</em>',
      expertise_intro:'We explore the systems, formats and assets that make digital worlds work.',
      expertise_1_title:'Reverse Engineering',expertise_1_desc:'Understanding undocumented software and internal behavior.',
      expertise_2_title:'Binary Formats',expertise_2_desc:'Studying file headers, archives, serialization and data layouts.',
      expertise_3_title:'3D Game Assets',expertise_3_desc:'Examining mesh geometry, textures, materials and scene data.',
      expertise_4_title:'Tools & Preservation',expertise_4_desc:'Creating focused utilities and documenting hard-won knowledge.',
      roadmap_tag:'THE PATH AHEAD',roadmap_title:'From raw data<br><em>to living worlds.</em>',
      roadmap_intro:'A research-driven direction, not a promise of release dates. Each step builds on what we learn before it.',
      roadmap_current:'Current focus',roadmap_future:'Exploratory plans',phase_now:'NOW',phase_explore:'EXPLORE',phase_plan:'PLANNED',phase_concept:'CONCEPT',phase_longterm:'LONG TERM',
      phase_1_title:'Lay the groundwork.',phase_1_desc:'Collect earlier research, organize technical notes and establish the BOVA knowledge base.',
      phase_2_title:'Decode the formats.',phase_2_desc:'Investigate binary containers, object structures, geometry and texture data. Document findings.',
      phase_3_title:'Make the invisible visible.',phase_3_desc:'Explore a lightweight viewer for decoded 3D assets and textures, once the formats are understood.',
      phase_4_title:'Build with the data.',phase_4_desc:'Prototype map and scene tools for placing and transforming objects, with export compatibility investigated separately.',
      phase_5_title:'Share what we learn.',phase_5_desc:'Publish responsible research, documentation and useful tools when they are ready to share.',
      route_end:'THE NEXT DISCOVERY IS STILL AHEAD',roadmap_note:'This is a proposed direction. Scope and order may change as research progresses; no release dates are implied.',
      ethos_tag:'WHY WE DO IT',ethos_title:'Some things are<br><em>worth figuring out.</em>',
      ethos_p1:'Games are built from years of engineering decisions. A file without documentation is still a piece of that history.',
      ethos_p2:'We approach these systems with patience, curiosity and a preference for sharing knowledge responsibly.',
      contact_tag:'LET’S TALK',contact_title:'Working on something<br><em>worth exploring?</em>',
      contact_desc:'Unusual data structures, archival research or ideas for useful tools? Let’s compare notes.',
      contact_mail:'Get in touch',contact_note:'Research and collaboration · Shared with care',footer_description:'Independent game technology research.'
    },
    ru: {
      nav_work:'Работы',nav_expertise:'Направления',nav_roadmap:'Дорожная карта',nav_contact:'Контакты',
      hero_label:'ИССЛЕДОВАНИЕ ИГРОВЫХ ТЕХНОЛОГИЙ',hero_title:'За гранью<br><em>исходного кода.</em>',
      hero_lead:'Исследуем то, что скрыто внутри цифровых миров.',
      hero_description:'Реверс-инжиниринг, бинарные форматы и собственные инструменты. Превращаем недокументированные технологии в знания, которые не исчезнут.',
      hero_btn_work:'Наши исследования',hero_btn_roadmap:'Дорожная карта',hero_footer:'Исследовать · Понять · Воссоздать',hero_scroll:'ЛИСТАЙТЕ НИЖЕ',
      stage_label:'ИССЛЕДОВАНИЕ СТРУКТУР',stage_footer:'ВИЗУАЛИЗАЦИЯ / НЕ ГОТОВАЯ ПРОГРАММА',
      work_tag:'НАШИ ИССЛЕДОВАНИЯ',work_title:'Меньше обещаний.<br><em>Больше исследований.</em>',
      work_intro:'Лучше показывать работу, а не просто говорить о ней. Вот с чего начиналась история BOVA.',
      work_one_tag:'ИСТОРИЯ ИССЛЕДОВАНИЙ / АЛЛОДЫ ОНЛАЙН',work_one_type:'НАШ ОПЫТ / РЕВЕРС-ИНЖИНИРИНГ',
      work_one_title:'Allods Online: исследование клиента',
      work_one_desc:'Предыдущая работа с устройством клиента, реверс-инжинирингом и собственными инструментами.',
      work_one_link:'Читать оригинальную тему',work_two_tag:'ПУБЛИЧНЫЙ РЕПОЗИТОРИЙ / GITHUB',work_two_type:'ОТКРЫТЫЙ РЕПОЗИТОРИЙ / ДОКУМЕНТАЦИЯ',
      work_two_desc:'Площадка для технических заметок, исследований форматов и документации по мере готовности.',work_two_link:'Перейти на GitHub',
      expertise_tag:'ЧТО МЫ ИССЛЕДУЕМ',expertise_title:'Любопытство<br><em>и инженерный подход.</em>',
      expertise_intro:'Нас интересуют системы, форматы и ресурсы, из которых состоят игровые миры.',
      expertise_1_title:'Реверс-инжиниринг',expertise_1_desc:'Разбираемся в устройстве программ и недокументированных систем.',
      expertise_2_title:'Бинарные форматы',expertise_2_desc:'Исследуем заголовки файлов, архивы, сериализацию и структуры данных.',
      expertise_3_title:'Игровые 3D-ресурсы',expertise_3_desc:'Изучаем геометрию, текстуры, материалы и данные сцен.',
      expertise_4_title:'Инструменты и сохранение',expertise_4_desc:'Разрабатываем специализированные утилиты и сохраняем технические знания.',
      roadmap_tag:'НАШ ПУТЬ',roadmap_title:'От бинарных данных<br><em>к игровым мирам.</em>',
      roadmap_intro:'Направления развития без выдуманных дат релиза. Каждый следующий шаг зависит от результатов исследования.',
      roadmap_current:'Текущий фокус',roadmap_future:'Предварительные планы',phase_now:'СЕЙЧАС',phase_explore:'ИЗУЧЕНИЕ',phase_plan:'В ПЛАНАХ',phase_concept:'КОНЦЕПЦИЯ',phase_longterm:'ПЕРСПЕКТИВА',
      phase_1_title:'Заложить фундамент.',phase_1_desc:'Собрать прошлые исследования, упорядочить технические заметки и сформировать базу знаний BOVA.',
      phase_2_title:'Разобраться с форматами.',phase_2_desc:'Изучать бинарные контейнеры, структуры объектов, геометрию и текстуры. Документировать результаты.',
      phase_3_title:'Увидеть то, что скрыто.',phase_3_desc:'Изучить возможность лёгкого просмотрщика 3D-ресурсов и текстур после разбора форматов.',
      phase_4_title:'Работать с мирами.',phase_4_desc:'Прототип редактора объектов и сцен с перемещением и поворотом. Совместимость экспорта исследовать отдельно.',
      phase_5_title:'Поделиться результатами.',phase_5_desc:'Публиковать исследования, документацию и полезные инструменты, когда они будут готовы к распространению.',
      route_end:'СЛЕДУЮЩЕЕ ОТКРЫТИЕ ЕЩЁ ВПЕРЕДИ',roadmap_note:'Это предварительная дорожная карта. Порядок и объём работ могут измениться; сроки выпуска не обещаются.',
      ethos_tag:'ПОЧЕМУ МЫ ЭТИМ ЗАНИМАЕМСЯ',ethos_title:'Некоторые вещи<br><em>стоит понять.</em>',
      ethos_p1:'За любой игрой стоят годы инженерной работы. Даже файл без документации остаётся частью этой истории.',
      ethos_p2:'Мы подходим к таким системам с терпением, интересом к деталям и желанием ответственно делиться знаниями.',
      contact_tag:'НА СВЯЗИ',contact_title:'Нашли что-то<br><em>интересное?</em>',
      contact_desc:'Необычные форматы, старые архивы или идеи для полезных инструментов? Будем рады обменяться опытом.',
      contact_mail:'Написать нам',contact_note:'Исследования и сотрудничество · Ответственный обмен',footer_description:'Независимые исследования игровых технологий.'
    }
  };

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const menuTrigger = document.querySelector('.menu-trigger');
  const mobileNav = document.querySelector('#mobile-nav');
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('#back-to-top');
  const route = document.querySelector('#route');
  const routeTrack = document.querySelector('.route-track');
  const routeSteps = [...document.querySelectorAll('.route-step')];

  const navLabels = {en:{open:'Open navigation',close:'Close navigation',back:'Back to top'},ru:{open:'Открыть меню',close:'Закрыть меню',back:'Наверх'}};
  function applyLanguage(lang) {
    const language = dictionary[lang] ? lang : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const next = dictionary[language][node.dataset.i18n];
      if (next !== undefined) node.textContent = next;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(node => {
      const next = dictionary[language][node.dataset.i18nHtml];
      if (next !== undefined) node.innerHTML = next; // Static curated translation strings only.
    });
    document.querySelectorAll('.language-option').forEach(btn => {
      const current = btn.dataset.lang === language;
      btn.classList.toggle('is-active',current);
      btn.setAttribute('aria-pressed',String(current));
    });
    menuTrigger.setAttribute('aria-label',navLabels[language][menuTrigger.getAttribute('aria-expanded') === 'true'?'close':'open']);
    backToTop.setAttribute('aria-label',navLabels[language].back);
    try { localStorage.setItem('bova-lang',language); } catch(_) { /* private mode */ }
  }
  let storedLanguage = 'en';
  try { storedLanguage = localStorage.getItem('bova-lang') || 'en'; } catch(_) { /* private mode */ }
  applyLanguage(storedLanguage);
  document.querySelectorAll('.language-option').forEach(button => {
    button.addEventListener('click',() => applyLanguage(button.dataset.lang));
  });

  function toggleMenu(open) {
    menuTrigger.setAttribute('aria-expanded',String(open));
    menuTrigger.setAttribute('aria-label',navLabels[document.documentElement.lang][open?'close':'open']);
    mobileNav.hidden = !open;
  }
  menuTrigger.addEventListener('click',() => toggleMenu(menuTrigger.getAttribute('aria-expanded') !== 'true'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click',() => toggleMenu(false)));
  document.addEventListener('keydown',e => { if(e.key === 'Escape') toggleMenu(false); });
  document.addEventListener('pointerdown',e => { if (!header.contains(e.target) && menuTrigger.getAttribute('aria-expanded') === 'true') toggleMenu(false); });
  window.addEventListener('resize',() => { if(window.innerWidth > 760) toggleMenu(false); });

  if ('IntersectionObserver' in window) {
    const appear = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if(entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          appear.unobserve(entry.target);
        }
      }
    },{rootMargin:'0px 0px -50px 0px',threshold:.08});
    document.querySelectorAll('.reveal').forEach(el => appear.observe(el));

    const navSections = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          document.querySelectorAll('.desktop-nav a').forEach(a => a.classList.toggle('is-current',a.hash === '#'+entry.target.id));
        }
      });
    },{rootMargin:'-25% 0px -65% 0px'});
    document.querySelectorAll('main section[id]').forEach(el => navSections.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  let ticking = false;
  function updateScroll() {
    ticking = false;
    const y = window.scrollY;
    header.classList.toggle('is-scrolled',y > 32);
    backToTop.classList.toggle('is-visible',y > 650);
    if (route && routeTrack) {
      const bounds = routeTrack.getBoundingClientRect();
      const marker = window.innerHeight * .54;
      const progress = Math.min(100,Math.max(0,(marker - bounds.top)/Math.max(1,bounds.height)*100));
      route.style.setProperty('--route-progress',progress.toFixed(2)+'%');
      routeSteps.forEach((step,index) => {
        const node = step.querySelector('.route-node');
        const nodeCenter = node.getBoundingClientRect().top + node.offsetHeight/2;
        step.classList.toggle('is-active',nodeCenter < marker && (index === routeSteps.length-1 || routeSteps[index+1].querySelector('.route-node').getBoundingClientRect().top > marker - 20));
      });
    }
  }
  window.addEventListener('scroll',() => { if (!ticking) { ticking = true; requestAnimationFrame(updateScroll); } },{passive:true});
  window.addEventListener('resize',updateScroll);
  updateScroll();
  backToTop.addEventListener('click',() => window.scrollTo({top:0,behavior:reducedMotion.matches?'auto':'smooth'}));

  const stage = document.querySelector('#hero-stage');
  if (stage && window.matchMedia('(pointer:fine)').matches && !reducedMotion.matches) {
    let frame = 0;
    let localX = .5,localY = .5;
    stage.addEventListener('pointermove',event => {
      const rect = stage.getBoundingClientRect();
      localX = Math.max(0,Math.min(1,(event.clientX-rect.left)/rect.width));
      localY = Math.max(0,Math.min(1,(event.clientY-rect.top)/rect.height));
      if(frame) return;
      frame=requestAnimationFrame(() => {
        stage.style.setProperty('--mx',Math.round(localX*100)+'%');
        stage.style.setProperty('--my',Math.round(localY*100)+'%');
        stage.style.setProperty('--tiltY',((localX-.5)*5).toFixed(2)+'deg');
        stage.style.setProperty('--tiltX',((.5-localY)*5).toFixed(2)+'deg');
        frame=0;
      });
    });
    stage.addEventListener('pointerleave',() => {
      stage.style.setProperty('--tiltX','0deg');stage.style.setProperty('--tiltY','0deg');
      stage.style.setProperty('--mx','50%');stage.style.setProperty('--my','50%');
    });
  }
  document.querySelectorAll('.work-card').forEach(card => {
    if (reducedMotion.matches || !window.matchMedia('(pointer:fine)').matches) return;
    card.addEventListener('pointermove',event => {
      const rect=card.getBoundingClientRect();
      card.style.setProperty('--mx',event.clientX-rect.left+'px');
      card.style.setProperty('--my',event.clientY-rect.top+'px');
    },{passive:true});
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
