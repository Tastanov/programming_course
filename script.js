// ТЕКСТЫ САЙТА: ru — русский, kk — казахский.
// Для нового текста добавьте одинаковый ключ в оба языка и data-i18n в HTML.
// Для текста с HTML используйте data-i18n-html.

const translations = {
  ru: {
    navCourses: 'Курсы',
    navApproach: 'Обучение',
    navFaq: 'Вопросы',
    navSignup: 'Записаться',
    eyebrow: 'НАБОР НА IT-КУРСЫ · 1–10 КЛАССЫ',
    heroTitle: 'Вместе готовим<br><span class="gradient-text">IT-специалистов</span><br>будущего',
    heroDesc: 'От первой игры на Python до собственного сайта и автоматизации с искусственным интеллектом. Учимся через реальные проекты.',
    start: 'Записаться на курс',
    explore: 'Посмотреть направления',
    statPractice: 'практики',
    statTracks: 'направления',
    statGrades: 'классы',
    codeSuccess: 'Проект успешно запущен',
    strip1: 'ПРОГРАММИРОВАНИЕ',
    strip2: 'РАЗРАБОТКА ИГР',
    coursesKicker: 'ВЫБЕРИ СВОЙ ПУТЬ',
    coursesTitle: 'Четыре направления.<br><span class="gradient-text">Безграничные возможности.</span>',
    coursesDesc: 'Программы адаптированы под возраст. Начинаем с основ и сразу создаём настоящие проекты.',
    grade57: '5–7 КЛАССЫ',
    grade810: '8–10 КЛАССЫ',
    gameTitle: 'Python + создание игр',
    gameDesc: 'Изучаем основы программирования через увлекательные игры, персонажей и собственные проекты.',
    logic: 'Алгоритмы',
    game1: 'Первые программы с нуля',
    game2: 'Игровая логика и управление',
    game3: 'Собственная 2D-игра',
    webTitle: 'Сайты + AI-автоматизация',
    webDesc: 'Создаём сайты, изучаем JavaScript и автоматизируем задачи с помощью современных AI-инструментов.',
    web1: 'Собственный адаптивный сайт',
    web2: 'Интерактивность на JavaScript',
    web3: 'AI и сценарии автоматизации',
    choose: 'Выбрать направление ↗',
    approachKicker: 'НАШ ПОДХОД',
    approachTitle: 'Меньше теории.<br><span class="gradient-text">Больше дела.</span>',
    approachDesc: 'Каждое занятие приближает ученика к готовому проекту, который можно показать друзьям и родителям.',
    feature1Title: 'Практика с первого занятия',
    feature1Desc: 'Не просто смотрим на код — пишем, запускаем, исправляем и создаём.',
    feature2Title: 'Понятно с нуля',
    feature2Desc: 'Сложные темы объясняем простыми словами и на знакомых примерах.',
    feature3Title: 'Реальные проекты',
    feature3Desc: 'Игры, сайты и автоматизации — результаты, которыми можно гордиться.',
    feature4Title: 'Поддержка преподавателя',
    feature4Desc: 'Помогаем разобраться, задавать вопросы и доводить идеи до результата.',
    journeyKicker: 'КАК ПРОХОДИТ ОБУЧЕНИЕ',
    journeyTitle: 'От первой строчки кода<br>до <span class="gradient-text">своего проекта</span>',
    step1Title: 'Знакомство с IT',
    step1Desc: 'Пара вводных уроков о компьютерах, интернете и профессиях.',
    step2Title: 'Выбор направления',
    step2Desc: 'Ученик выбирает то, что ему действительно интересно.',
    step3Title: 'Создание проекта',
    step3Desc: 'Учимся на практике и собираем собственное портфолио.',
    faqTitle: 'Частые вопросы',
    q1: 'Нужны ли знания программирования?',
    a1: 'Нет. Мы начинаем с нуля и постепенно переходим к практике.',
    q2: 'Как выбрать направление?',
    a2: 'Сначала познакомимся с IT и направлениями, затем поможем выбрать программу по возрасту и интересам.',
    q3: 'Что ребёнок создаст на курсе?',
    a3: 'В зависимости от направления — интерактивную историю или игру в Scratch, игру на Python, сайт или проект с AI-автоматизацией.',
    q4: 'Где узнать расписание и стоимость?',
    a4: 'Напишите нам в WhatsApp — расскажем об актуальных группах, расписании и условиях.',
    q5: 'Для каких классов подходят курсы?',
    a5: 'Game Lab Junior — для 1–2 классов, Game Lab Creator — для 3–4 классов, Python и создание игр — для 5–7 классов, сайты и AI-автоматизация — для 8–10 классов.',
    q6: 'Что изучают на направлении Python?',
    a6: 'Ученики знакомятся с основами Python, условиями, циклами и алгоритмами, затем применяют их для создания персонажей, игровой логики и собственной 2D-игры.',
    q7: 'Чему научат на направлении веб-разработки?',
    a7: 'Ученики создают страницы на HTML и CSS, добавляют интерактивность с помощью JavaScript и знакомятся с AI-инструментами и сценариями автоматизации.',
    q8: 'Что делать, если ребёнок пока не определился с направлением?',
    a8: 'Начните со знакомства с IT: первые вводные занятия помогут понять, что интереснее — создание игр или разработка сайтов. Затем можно выбрать направление с учётом возраста и интересов.',
    q9: 'Как записаться на курс?',
    a9: 'Укажите имя, класс ученика и направление в форме ниже. Нажмите «Записаться через WhatsApp» — откроется готовое сообщение. Отправьте его в мессенджере, чтобы обсудить запись.',
    signupKicker: 'НАЧНИ СЕГОДНЯ',
    signupTitle: 'Первый шаг в IT<br><span class="gradient-text">начинается здесь.</span>',
    signupDesc: 'Оставьте информацию — мы подготовим сообщение для WhatsApp. Отправка произойдёт только после вашего подтверждения в мессенджере.',
    labelName: 'Ваше имя',
    namePlaceholder: 'Как к вам обращаться?',
    labelGrade: 'Класс ученика',
    gradePlaceholder: 'Выберите класс',
    labelCourse: 'Направление',
    coursePlaceholder: 'Выберите направление',
    grade12: '1–2 КЛАССЫ',
    grade34: '3–4 КЛАССЫ',
    juniorDesc: 'Первые шаги в мире компьютеров и программирования через игру, творчество и понятные задания.',
    junior1: 'Основы работы с компьютером и логика',
    junior2: 'ScratchJr / Scratch: первые алгоритмы',
    junior3: 'Интерактивные истории и анимация',
    creatorDesc: 'Создаём собственные игры в Scratch: от идеи и персонажей до уровней и презентации проекта.',
    creator1: 'Циклы, условия и система очков',
    creator2: 'Собственные персонажи и уровни',
    creator3: 'Мини-проект и его презентация',
    optionJunior: 'Game Lab Junior · 1–2 классы',
    optionCreator: 'Game Lab Creator · 3–4 классы',
    optionPython: 'Python и создание игр',
    optionWeb: 'Сайты и AI-автоматизация',
    submit: 'Записаться через WhatsApp',
    privacy: 'Данные не сохраняются на сайте. Сообщение откроется в WhatsApp.',
    footer: 'Создаём технологии, а не просто используем их.'
  }
  ,
  kk: {
    navCourses: 'Курстар',
    navApproach: 'Оқу жүйесі',
    navFaq: 'Сұрақтар',
    navSignup: 'Тіркелу',
    eyebrow: 'IT-КУРСТАРҒА ҚАБЫЛДАУ · 1–10 СЫНЫПТАР',
    heroTitle: 'Болашақтың<br><span class="gradient-text">IT маманын</span> бірге<br>дайындаймыз',
    heroDesc: 'Python тіліндегі алғашқы ойыннан бастап жеке сайт жасауға және жасанды интеллект арқылы автоматтандыруға дейін. Нақты жобалар арқылы үйренеміз.',
    start: 'Курсқа тіркелу',
    explore: 'Бағыттарды көру',
    statPractice: 'практика',
    statTracks: 'бағыт',
    statGrades: 'сыныптар',
    codeSuccess: 'Жоба сәтті іске қосылды',
    strip1: 'БАҒДАРЛАМАЛАУ',
    strip2: 'ОЙЫН ЖАСАУ',
    coursesKicker: 'ӨЗ БАҒЫТЫҢДЫ ТАҢДА',
    coursesTitle: 'Төрт бағыт.<br><span class="gradient-text">Шексіз мүмкіндік.</span>',
    coursesDesc: 'Бағдарламалар жас ерекшелігіне бейімделген. Негіздерден бастап, бірден нақты жобалар жасаймыз.',
    grade57: '5–7 СЫНЫПТАР',
    grade810: '8–10 СЫНЫПТАР',
    gameTitle: 'Python + ойын жасау',
    gameDesc: 'Бағдарламалау негіздерін қызықты ойындар, кейіпкерлер және өз жобаларымыз арқылы үйренеміз.',
    logic: 'Алгоритмдер',
    game1: 'Нөлден бастап алғашқы бағдарламалар',
    game2: 'Ойын логикасы және басқару',
    game3: 'Өз 2D ойыныңды жасау',
    webTitle: 'Сайттар + AI автоматтандыру',
    webDesc: 'Сайттар жасаймыз, JavaScript үйренеміз және заманауи AI құралдарымен тапсырмаларды автоматтандырамыз.',
    web1: 'Өз адаптивті сайтыңды жасау',
    web2: 'JavaScript арқылы интерактивтілік',
    web3: 'AI және автоматтандыру сценарийлері',
    choose: 'Бағытты таңдау ↗',
    approachKicker: 'БІЗДІҢ ӘДІС',
    approachTitle: 'Теория аз.<br><span class="gradient-text">Практика көп.</span>',
    approachDesc: 'Әр сабақ оқушыны достары мен ата-анасына көрсете алатын дайын жобаға жақындатады.',
    feature1Title: 'Алғашқы сабақтан бастап практика',
    feature1Desc: 'Кодты тек қарап қоймай, жазамыз, іске қосамыз, қателерді түзетеміз және жасаймыз.',
    feature2Title: 'Нөлден бастап түсінікті',
    feature2Desc: 'Күрделі тақырыптарды қарапайым тілмен, таныс мысалдар арқылы түсіндіреміз.',
    feature3Title: 'Нақты жобалар',
    feature3Desc: 'Ойындар, сайттар және автоматтандыру — мақтан тұтар нәтижелер.',
    feature4Title: 'Оқытушының қолдауы',
    feature4Desc: 'Сұрақтарға жауап беріп, идеяларды соңына дейін жеткізуге көмектесеміз.',
    journeyKicker: 'ОҚУ ҚАЛАЙ ӨТЕДІ',
    journeyTitle: 'Алғашқы код жолынан<br><span class="gradient-text">өз жобаңды жасауға дейін</span>',
    step1Title: 'IT саласымен танысу',
    step1Desc: 'Компьютерлер, интернет және мамандықтар туралы бірнеше кіріспе сабақ.',
    step2Title: 'Бағытты таңдау',
    step2Desc: 'Оқушы өзіне шынымен қызықты бағытты таңдайды.',
    step3Title: 'Жоба жасау',
    step3Desc: 'Практика арқылы үйреніп, жеке портфолио жинаймыз.',
    faqTitle: 'Жиі қойылатын сұрақтар',
    q1: 'Бағдарламалауды алдын ала білу керек пе?',
    a1: 'Жоқ. Нөлден бастап үйретіп, біртіндеп практикаға көшеміз.',
    q2: 'Бағытты қалай таңдаймыз?',
    a2: 'Алдымен IT саласымен танысамыз, содан кейін жасына және қызығушылығына сай бағдарламаны таңдауға көмектесеміз.',
    q3: 'Бала курста не жасайды?',
    a3: 'Бағытына қарай Scratch-та интерактивті әңгіме немесе ойын, Python тілінде ойын, сайт немесе AI автоматтандыру жобасын жасайды.',
    q4: 'Кесте мен бағаны қайдан білуге болады?',
    a4: 'WhatsApp арқылы жазыңыз — топтар, сабақ кестесі және шарттар туралы айтамыз.',
    q5: 'Курстар қай сыныптарға арналған?',
    a5: 'Game Lab Junior — 1–2 сыныптарға, Game Lab Creator — 3–4 сыныптарға, Python және ойын жасау — 5–7 сыныптарға, сайттар мен AI автоматтандыру — 8–10 сыныптарға.',
    q6: 'Python бағытында не үйренеді?',
    a6: 'Оқушылар Python негіздерімен, шарттармен, циклдермен және алгоритмдермен танысады. Кейін оларды кейіпкерлер, ойын логикасы және өз 2D ойынын жасау үшін қолданады.',
    q7: 'Веб-әзірлеу бағытында не үйретеді?',
    a7: 'Оқушылар HTML және CSS арқылы беттер жасайды, JavaScript көмегімен интерактивтілік қосады, AI құралдарымен және автоматтандыру сценарийлерімен танысады.',
    q8: 'Бала әлі бағыт таңдамаса, не істеу керек?',
    a8: 'IT саласымен танысудан бастаңыз: алғашқы кіріспе сабақтар ойын жасау немесе сайт әзірлеудің қайсысы қызығырақ екенін түсінуге көмектеседі. Содан кейін жасына және қызығушылығына сай бағыт таңдауға болады.',
    q9: 'Курсқа қалай тіркелуге болады?',
    a9: 'Төмендегі формада атыңызды, оқушының сыныбын және бағытты көрсетіңіз. «WhatsApp арқылы тіркелу» батырмасын бассаңыз, дайын хабарлама ашылады. Тіркелуді талқылау үшін оны мессенджерде жіберіңіз.',
    signupKicker: 'БҮГІН БАСТА',
    signupTitle: 'IT әлеміне алғашқы қадам<br><span class="gradient-text">осы жерден басталады.</span>',
    signupDesc: 'Ақпаратты толтырыңыз — WhatsApp үшін дайын хабарлама жасаймыз. Хабарлама тек мессенджерде растағаннан кейін жіберіледі.',
    labelName: 'Атыңыз',
    namePlaceholder: 'Сізге қалай жүгінеміз?',
    labelGrade: 'Оқушының сыныбы',
    gradePlaceholder: 'Сыныпты таңдаңыз',
    labelCourse: 'Бағыт',
    coursePlaceholder: 'Бағытты таңдаңыз',
    grade12: '1–2 СЫНЫПТАР',
    grade34: '3–4 СЫНЫПТАР',
    juniorDesc: 'Ойын, шығармашылық және түсінікті тапсырмалар арқылы компьютер мен бағдарламалау әлеміне алғашқы қадамдар.',
    junior1: 'Компьютер негіздері және логика',
    junior2: 'ScratchJr / Scratch: алғашқы алгоритмдер',
    junior3: 'Интерактивті әңгімелер мен анимация',
    creatorDesc: 'Scratch-та өз ойынымызды жасаймыз: идея мен кейіпкерлерден бастап деңгейлер мен жобаны таныстыруға дейін.',
    creator1: 'Циклдер, шарттар және ұпай жүйесі',
    creator2: 'Өз кейіпкерлері мен деңгейлері',
    creator3: 'Шағын жоба және презентация',
    optionJunior: 'Game Lab Junior · 1–2 сыныптар',
    optionCreator: 'Game Lab Creator · 3–4 сыныптар',
    optionPython: 'Python және ойын жасау',
    optionWeb: 'Сайттар және AI автоматтандыру',
    submit: 'WhatsApp арқылы тіркелу',
    privacy: 'Деректер сайтта сақталмайды. Хабарлама WhatsApp-та ашылады.',
    footer: 'Технологияны тек қолданбай, өзіміз жасаймыз.'
  }
}
;
// Текущий язык и обновление текстов на странице.
let current = 'ru';
function setLanguage(lang) {
  current=lang;
  document.documentElement.lang=lang;
  document.title=lang==='kk'?'Бағдарламалау курстары': 'Курсы программирования';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const value=translations[lang][el.dataset.i18n];
    if(value!==undefined)el.textContent=value
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const value=translations[lang][el.dataset.i18nHtml];
    if(value!==undefined)el.innerHTML=value
  });
  document.querySelectorAll('[data-placeholder]').forEach(el=>el.placeholder=translations[lang][el.dataset.placeholder]);
  ['ru',
  'kk'].forEach(id=>{
    const el=document.getElementById(id);
    el.classList.toggle('selected', id===lang);
    el.setAttribute('aria-pressed', String(id===lang))
  });
  try{
    localStorage.setItem('itAcademyLanguage', lang)
  }
  catch(e){
  }
}
document.getElementById('ru').addEventListener('click', ()=>setLanguage('ru'));
document.getElementById('kk').addEventListener('click', ()=>setLanguage('kk'));
try{
  if(localStorage.getItem('itAcademyLanguage')==='kk')setLanguage('kk')
}
catch(e){
}
// Открытие и закрытие меню на телефоне.
const menu=document.getElementById('menu'), nav=document.getElementById('nav');
menu.addEventListener('click', ()=>{
  const opened=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(opened))
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false')
}));
// Форма записи: подготовка сообщения в WhatsApp.
document.getElementById('signupForm').addEventListener('submit',
e=>{
  e.preventDefault();
  const form=e.currentTarget;
  if(!form.reportValidity())return;
  const name=form.elements.parent.value.trim(),
  grade=form.elements.grade.value,
  track=form.elements.track.value;
  if(!name||!grade||!track)return;
  const courseKeys = { junior: 'optionJunior', creator: 'optionCreator', python: 'optionPython', web: 'optionWeb' };
  const course = translations[current][courseKeys[track]];
  if (!course) return;
  const msg=current==='kk'?`Сәлеметсіз бе! IT курстарына жазылғым келеді.\nАтым: ${name}\nОқушының сыныбы: ${grade}\nБағыт: ${course}\nКесте мен бағасы туралы ақпарат бересіз бе?`: `Здравствуйте! Хочу записаться на IT-курсы.\nИмя: ${name}\nКласс ученика: ${grade}\nНаправление: ${course}\nПодскажите расписание и стоимость.`;
  const url='https://wa.me/77766962244?text='+encodeURIComponent(msg);
  const popup=window.open(url,
  '_blank', 'noopener,noreferrer');
  if(!popup)window.location.href=url
});

// АНИМАЦИИ: появление блоков, подсветка карточек и прогресс прокрутки.
(() => {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealTargets = document.querySelectorAll(
    '.hero-copy, .hero-art, .section-top, .course-card, .feature, .steps-box, .faq-list details, .signup-copy, .signup-form'
  );
  let revealObserver;

  function configureReveal() {
    revealObserver?.disconnect();

    if (motionPreference.matches || !('IntersectionObserver' in window)) {
      revealTargets.forEach(element => element.classList.remove('reveal'));
      return;
    }

    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    revealTargets.forEach(element => {
      // Лёгкая задержка для соседних карточек, без долгого ожидания.
      const siblings = Array.from(element.parentElement.children);
      element.style.setProperty('--reveal-delay', `${(siblings.indexOf(element) % 3) * 70}ms`);
      element.classList.add('reveal');
      revealObserver.observe(element);
    });
  }

  configureReveal();
  motionPreference.addEventListener('change', configureReveal);

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.course-card, .feature').forEach(card => {
      let glowFrame = 0;
      card.addEventListener('pointermove', event => {
        if (motionPreference.matches) return;
        cancelAnimationFrame(glowFrame);
        const x = event.clientX;
        const y = event.clientY;
        glowFrame = requestAnimationFrame(() => {
          const bounds = card.getBoundingClientRect();
          card.style.setProperty('--glow-x', `${x - bounds.left}px`);
          card.style.setProperty('--glow-y', `${y - bounds.top}px`);
        });
      });
      card.addEventListener('pointerleave', () => cancelAnimationFrame(glowFrame));
    });
  }

  const header = document.querySelector('.header');
  if (!header) return;
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  header.append(progress);

  let scrollFrame = 0;
  function updateProgress() {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = available > 0 ? window.scrollY / available : 0;
    progress.style.transform = `scaleX(${Math.max(0, Math.min(1, ratio))})`;
    scrollFrame = 0;
  }

  function scheduleProgress() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress);
  }

  window.addEventListener('scroll', scheduleProgress, { passive: true });
  window.addEventListener('resize', scheduleProgress);
  if ('ResizeObserver' in window) {
    new ResizeObserver(scheduleProgress).observe(document.body);
  }
  updateProgress();
})();
// Выбор Game Lab в карточке автоматически заполняет направление в форме.
document.querySelectorAll('[data-track]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('track').value = link.dataset.track;
  });
});
