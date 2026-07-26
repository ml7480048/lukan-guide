import type { Locale } from './types';

export { LOCALES, DEFAULT_LOCALE, isLocale } from './types';
export type { Locale } from './types';

export const SITE_URL = 'https://lukan.guide';

export const CONTACT = {
  phoneHuman: '+39 389 966 44 55',
  phoneTel: '+393899664455',
  whatsapp: '393899664455',
  viber: '393899664455',
  email: 'alessandralukan@gmail.com',
} as const;

/**
 * Social links. PLACEHOLDERS — the handles are not yet confirmed. Swap the
 * `href` values for the real profiles; the icons and layout stay. `href: null`
 * renders the button in a "coming soon" state instead of linking anywhere.
 * See README.md.
 */
export const SOCIALS: { kind: 'instagram' | 'facebook' | 'youtube' | 'telegram'; href: string | null }[] = [
  { kind: 'instagram', href: null },
  { kind: 'facebook', href: null },
  { kind: 'youtube', href: null },
  { kind: 'telegram', href: null },
];

/**
 * The main video. PLACEHOLDER — set `youtubeId` to the real video id (the part
 * after `watch?v=`) and the hero plays it. Until then a labelled poster shows.
 */
export const VIDEO = {
  youtubeId: null as string | null,
  poster: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
} as const;

const U = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const PIC = {
  hero: U('1515542622106-78bda8ba0e5b'),
  about: U('1615497994569-db84b0f1dd55'),
  vatican: U('1624347061892-822a65656966'),
  rome: U('1552832230-c0197dd311b5'),
  vienna: U('1567597435927-80055c207c1c'),
  reviews: U('1531572753322-ad063cecc140'),
} as const;

export const SECTIONS = ['vatican', 'rome', 'vienna', 'reviews', 'book', 'glossary'] as const;
export type SectionSlug = (typeof SECTIONS)[number];
export function isSection(v: string): v is SectionSlug {
  return (SECTIONS as readonly string[]).includes(v);
}

export type Tour = {
  title: string;
  duration: string;
  text: string;
  highlights?: string[];
  note?: string;
};

export type Review = {
  name: string;
  from: string;
  text: string;
};

export type Dict = {
  langName: string;
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { about: string; vatican: string; rome: string; vienna: string; reviews: string; glossary: string; book: string };
  ui: {
    bookCta: string;
    menu: string;
    close: string;
    language: string;
    duration: string;
    from: string;
    watchVideo: string;
    videoSoon: string;
    followMe: string;
    socialSoon: string;
    backHome: string;
    readMore: string;
    seeReviews: string;
    seeTours: string;
    askQuestion: string;
    onRequest: string;
    notFound: string;
    notFoundText: string;
  };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    videoCaption: string;
    primary: string;
    secondary: string;
  };
  about: {
    title: string;
    lead: string;
    paragraphs: string[];
    facts: [string, string][];
    quote: string;
  };
  destinations: {
    title: string;
    lead: string;
    cards: { slug: SectionSlug; name: string; tagline: string; meta: string }[];
  };
  book: {
    title: string;
    lead: string;
    steps: string[];
    form: {
      date: string;
      datePh: string;
      place: string;
      placePh: string;
      people: string;
      peoplePh: string;
      name: string;
      namePh: string;
      whatsapp: string;
      viber: string;
      email: string;
      hint: string;
      greeting: string;
      lineDate: string;
      linePlace: string;
      linePeople: string;
      lineName: string;
    };
    contactsTitle: string;
    note: string;
  };
  reviewsBlock: {
    title: string;
    lead: string;
    note: string;
    photoAlt: string;
    items: Review[];
  };
  glossary: {
    title: string;
    lead: string;
    note: string;
    terms: [string, string][];
    faqTitle: string;
    faq: [string, string][];
  };
  pages: Record<'vatican' | 'rome' | 'vienna', {
    title: string;
    lead: string;
    intro: string[];
    highlightsTitle: string;
    highlights: string[];
    toursTitle: string;
    tours: Tour[];
    faq: [string, string][];
    draft?: boolean;
  }>;
  footer: {
    tagline: string;
    made: string;
    imagery: string;
    rooms: string;
  };
};

// ---------------------------------------------------------------- Ukrainian ---

const ua: Dict = {
  langName: 'UA',
  htmlLang: 'uk',
  meta: {
    title: 'Олександра Лукань — приватний гід у Римі, Ватикані та Відні',
    description:
      'Індивідуальні екскурсії українською та російською у Римі, Ватикані й Відні з істориком Олександрою Лукань. Понад 20 років досвіду. Легке бронювання у WhatsApp.',
  },
  nav: {
    about: 'Познайомимося',
    vatican: 'Ватикан',
    rome: 'Рим',
    vienna: 'Відень',
    reviews: 'Відгуки',
    glossary: 'Словник',
    book: 'Забронювати',
  },
  ui: {
    bookCta: 'Забронювати екскурсію',
    menu: 'Меню',
    close: 'Закрити',
    language: 'Мова',
    duration: 'Тривалість',
    from: 'від',
    watchVideo: 'Дивитися відео',
    videoSoon: 'Відео Олександри — скоро тут',
    followMe: 'Я в соцмережах',
    socialSoon: 'скоро',
    backHome: 'На головну',
    readMore: 'Докладніше',
    seeReviews: 'Читати відгуки',
    seeTours: 'Переглянути екскурсії',
    askQuestion: 'Запитати в Олександри',
    onRequest: 'За запитом',
    notFound: 'Сторінку не знайдено',
    notFoundText: 'Можливо, адреса змінилася. Поверніться на головну.',
  },
  hero: {
    kicker: 'Приватний гід-історик · Рим · Ватикан · Відень',
    title: 'Пройдімося Римом разом — вашою мовою',
    lead: 'Я Олександра Лукань, історик і ліцензований гід. Понад 20 років показую Рим, Ватикан і Відень українською та російською — так, щоб місто стало зрозумілим і рідним.',
    videoCaption: 'Одна хвилина — і ви відчуєте, як проходить екскурсія зі мною',
    primary: 'Забронювати екскурсію',
    secondary: 'Познайомитися ближче',
  },
  about: {
    title: 'Познайомимося',
    lead: 'Коротко про мене — і чому зі мною Рим запам’ятовується надовго.',
    paragraphs: [
      'Я історик з університетською освітою і ліцензований гід у Ватикані, Римі та Австрії. У Римі живу і працюю понад двадцять років.',
      'Веду екскурсії українською та російською. Розповідаю не дати, а історії — про людей, які створили це місто, і про те, чому воно й досі живе.',
      'Окрім екскурсій, допоможу з перекладом на італійську, трансфером, шопінгом і фотосесією — щоб ваша поїздка була легкою.',
    ],
    facts: [
      ['Освіта', 'Історик, університетська'],
      ['Досвід', 'Понад 20 років у Римі'],
      ['Ліцензія', 'Ватикан, Рим, Австрія'],
      ['Мови', 'Українська, російська, італійська'],
      ['Формат', 'Індивідуально та малі групи'],
    ],
    quote: 'Подаруйте собі цю зустріч з Римом. А я допоможу зробити її незабутньою.',
  },
  destinations: {
    title: 'Куди підемо',
    lead: 'Три напрями. Оберіть той, що кличе — деталі всередині.',
    cards: [
      { slug: 'vatican', name: 'Ватикан', tagline: 'Музеї, Сикстинська капела і собор Святого Петра', meta: 'Квитки без черги' },
      { slug: 'rome', name: 'Рим', tagline: 'Від Колізею до площ, фонтанів і підземного міста', meta: 'Понад 15 екскурсій' },
      { slug: 'vienna', name: 'Відень', tagline: 'Імперська столиця — палаци, музеї, кав’ярні', meta: 'За запитом' },
    ],
  },
  book: {
    title: 'Забронювати екскурсію',
    lead: 'Це просто. Впишіть кілька слів — і кнопка відкриє WhatsApp із готовим повідомленням мені.',
    steps: [
      'Оберіть дату, напрям і кількість людей.',
      'Натисніть WhatsApp або Viber — відкриється готовий текст.',
      'Я відповім того ж дня і підтверджу деталі.',
    ],
    form: {
      date: 'Дата',
      datePh: 'напр. 14 травня',
      place: 'Напрям',
      placePh: 'Ватикан, Рим або Відень',
      people: 'Скільки людей',
      peoplePh: 'напр. 2 дорослих',
      name: 'Як вас звати',
      namePh: 'ім’я',
      whatsapp: 'Написати у WhatsApp',
      viber: 'Написати у Viber',
      email: 'Написати на email',
      hint: 'Нічого не надсилається автоматично — відкриється застосунок із готовим текстом, який ви можете змінити.',
      greeting: 'Добрий день, Олександро! Хочу забронювати екскурсію.',
      lineDate: 'Дата',
      linePlace: 'Напрям',
      linePeople: 'Людей',
      lineName: 'Ім’я',
    },
    contactsTitle: 'Прямі контакти',
    note: 'Вартість залежить від напряму, тривалості й кількості людей. Напишіть — назву ціну і вільні дати.',
  },
  reviewsBlock: {
    title: 'Відгуки',
    lead: 'Що кажуть туристи після екскурсії.',
    note: 'Це приклади оформлення. Справжні відгуки та фото з туристами буде додано найближчим часом.',
    photoAlt: 'Місце для фото з туристами',
    items: [
      { name: 'Ірина', from: 'Київ', text: 'Ватикан за пів дня — і жодної втоми. Олександра говорить так, що чотири години пролітають як одна.' },
      { name: 'Дмитро та Олена', from: 'Львів', text: 'Були в Римі втретє — і побачили зовсім інше місто. Підземний Рим вразив найбільше.' },
      { name: 'Марина', from: 'Варшава', text: 'Возила батьків. Рідна мова, спокійний темп, усе врахувала. Дуже рекомендую.' },
    ],
  },
  glossary: {
    title: 'Словник туриста',
    lead: 'Короткі пояснення слів, які трапляються при плануванні поїздки до Риму й Ватикану.',
    note: 'Якщо чогось не вистачає — напишіть, додам.',
    terms: [
      ['Індивідуальна екскурсія', 'Екскурсія тільки для вас і ваших супутників, без чужих людей у групі. Час і темп — під вас.'],
      ['Оглядова екскурсія', 'Перше знайомство з містом: головні місця й загальна картина за один вихід.'],
      ['Тематична екскурсія', 'Заглиблення в одну тему — наприклад, античний Рим, Караваджо чи християнські святині.'],
      ['Квитки без черги (skip-the-line)', 'Вхід за заброньованим часом, без стояння у загальній черзі. У Ватикан і Галерею Боргезе бронюються заздалегідь.'],
      ['Ватиканські музеї', 'Комплекс музеїв Ватикану з понад 60 тисячами творів, що завершується Сикстинською капелою.'],
      ['Сикстинська капела', 'Капела з фресками Мікеланджело; місце, де обирають Папу Римського. Фото і розмови всередині заборонені.'],
      ['Собор Святого Петра', 'Головний храм Ватикану. На купол можна піднятися заради панорами Риму.'],
      ['Roma Pass', 'Туристична карта на 48 або 72 години: вхід у музеї та громадський транспорт зі знижками.'],
      ['Трансфер', 'Замовлений автомобіль: аеропорт — готель, порт Чівітавеккья, аутлети чи інші міста.'],
      ['Чівітавеккья', 'Морський порт біля Риму, куди прибувають круїзні лайнери.'],
    ],
    faqTitle: 'Часті запитання',
    faq: [
      ['Якою мовою проходять екскурсії?', 'Українською та російською. Також можливий переклад на/з італійської.'],
      ['Скільки коштує екскурсія?', 'Ціна залежить від напряму, тривалості й кількості людей. Напишіть у WhatsApp — назву точну вартість і вільні дати.'],
      ['Чи потрібно купувати квитки окремо?', 'У Ватикан, Галерею Боргезе та Колізей квитки бронюються заздалегідь і оплачуються окремо. Я допоможу все організувати.'],
      ['Можна з дітьми?', 'Так. Скорочу маршрут і підберу історії за віком дитини.'],
      ['Як забронювати?', 'Найпростіше — через WhatsApp або Viber із головної сторінки. Я відповідаю щодня.'],
    ],
  },
  pages: {
    vatican: {
      title: 'Ватикан',
      lead: 'Найбільша колекція мистецтва у світі — без черг і без хаосу.',
      intro: [
        'Ватиканські музеї — це понад шістдесят тисяч творів і кількакілометровий шлях до Сикстинської капели. Без плану тут легко втомитися й нічого не запам’ятати.',
        'Я веду вас так, щоб лишилися сили на головне: Станци Рафаеля, галереї, капела Мікеланджело і собор Святого Петра — як одна цілісна історія.',
      ],
      highlightsTitle: 'Що побачимо',
      highlights: [
        'Ватиканські музеї: Станци Рафаеля, галереї карт і шпалер',
        'Сикстинська капела — читаємо її як історію, а не набір знаменитих фрагментів',
        'Собор Святого Петра, за бажанням — підйом на купол',
        'Квитки без черги (бронюються заздалегідь)',
      ],
      toursTitle: 'Екскурсії у Ватикані',
      tours: [
        {
          title: 'Ватиканські музеї та Сикстинська капела',
          duration: '3–4 години',
          text: 'Головний маршрут Ватикану: музеї, Станци Рафаеля, Сикстинська капела і собор Святого Петра.',
          highlights: ['Квитки без черги', 'Групи та індивідуально'],
        },
        {
          title: 'Нічний Ватикан',
          duration: '3 години',
          text: 'Сезонна екскурсія (кінець квітня — жовтень): колекції при світлі, коли музеї майже порожні.',
          note: 'Квитки лімітовані, бронюйте заздалегідь',
        },
        {
          title: 'Ватикан + собор і купол',
          duration: '4–5 годин',
          text: 'Розширений маршрут із підйомом на купол Святого Петра заради панорами Риму.',
        },
      ],
      faq: [
        ['Чи можна фотографувати?', 'У музеях — так, у Сикстинській капелі фото і розмови заборонені.'],
        ['Який дрес-код?', 'Прикриті плечі й коліна: це діючий храм. Візьміть легку накидку.'],
        ['Скільки триває?', 'Базовий маршрут — 3–4 години. Можна коротше або з підйомом на купол.'],
      ],
    },
    rome: {
      title: 'Рим',
      lead: 'Від Колізею до тихих площ і підземного міста під вашими ногами.',
      intro: [
        'Рим неможливо оглянути за один раз — і не треба. Оберемо те, що цікаво саме вам: античність, площі й фонтани, християнські святині чи мистецтво.',
        'Я складаю маршрут під вас: перший раз у Римі чи вже вкотре, з дітьми чи без, пішки чи з машиною.',
      ],
      highlightsTitle: 'Напрями екскурсій',
      highlights: [
        'Класичний і античний Рим: Колізей, форуми, Пантеон',
        'Площі і фонтани, Трастевере, вечірній Рим',
        'Християнський Рим і підземна церква Святого Климента',
        'Мистецтво: Галерея Боргезе, Караваджо, Берніні',
        'Околиці: Тіволі, Остія, Римські замки',
      ],
      toursTitle: 'Популярні екскурсії',
      tours: [
        { title: 'Класичний Рим', duration: '3–6 годин', text: 'Оглядова: Колізей, Капітолій, форуми, Пантеон, площа Навона й головні фонтани — щоб місто склалося в єдину картину.' },
        { title: 'Античний Рим', duration: '3 години', text: 'Колізей, Палатин і Римські форуми — від хатинки Ромула і Рема до імперської величі.', note: 'Вхідні квитки — окремо' },
        { title: 'Площі і фонтани', duration: '3 години', text: 'Барокові площі, фонтан Треві й таємниці, які бачать лише ті, хто в Римі не вперше.' },
        { title: 'Церква Святого Климента. Підземний Рим', duration: '3 години', text: 'Чотири поверхи історії під землею: базиліка, перша церква, стародавнє капище й підземна річка.' },
        { title: 'Галерея Боргезе', duration: '2,5–3 години', text: 'Королева приватних колекцій: Рафаель, Канова, Берніні і шість полотен Караваджо.', note: 'Бронювання обов’язкове' },
        { title: 'Вечірній Рим', duration: '2 години', text: 'Романтична вечірня екскурсія на машині: Колізей, замок Ангела й собор Святого Петра в підсвітці.' },
        { title: 'Тіволі, Вілла д’Есте', duration: '4 години', text: 'П’ятсот фонтанів у передгір’ї Апеннін — райський куточок за 30 км від Риму.', note: 'Транспорт — окремо' },
        { title: 'Стародавня Остія', duration: '5 годин', text: 'Місто-музей, що не поступається Помпеї, і прогулянка берегом моря з обідом.', note: 'Із транспортом' },
      ],
      faq: [
        ['Я вперше в Римі — з чого почати?', 'З класичної оглядової екскурсії: вона дає загальну картину, а далі оберемо теми.'],
        ['А якщо я вже був у Римі?', 'Тоді цікаво піде «Площі і фонтани», підземний Рим або мистецькі маршрути.'],
        ['Пішки чи на машині?', 'Як зручно вам. Частину маршрутів (околиці, вечірній Рим) роблю на машині.'],
      ],
    },
    vienna: {
      title: 'Відень',
      lead: 'Імперська столиця — палаци, музеї і кав’ярні. Екскурсії за запитом.',
      draft: true,
      intro: [
        'Я ліцензований гід і в Австрії. Відень показую тим, хто хоче поєднати Рим з імперською Європою або приїхати окремо.',
        'Маршрути складаю індивідуально. Напишіть, коли плануєте, і я запропоную програму та вартість.',
      ],
      highlightsTitle: 'Що можна побачити',
      highlights: [
        'Історичний центр, собор Святого Стефана, Гофбург',
        'Палац Шенбрунн і його сади',
        'Музейний квартал і Бельведер',
        'Віденські кав’ярні й традиції міста',
      ],
      toursTitle: 'Напрями (за запитом)',
      tours: [
        { title: 'Оглядовий Відень', duration: 'за запитом', text: 'Перше знайомство з імперською столицею: центр, головні площі й собор.' },
        { title: 'Шенбрунн і Габсбурги', duration: 'за запитом', text: 'Літня резиденція імператорів, історія династії та сади палацу.' },
        { title: 'Музейний Відень', duration: 'за запитом', text: 'Художньо-історичний музей, Бельведер і мистецтво віденського модерну.' },
      ],
      faq: [
        ['Ви проводите екскурсії у Відні?', 'Так, за попереднім запитом. Напишіть дати — складу програму.'],
        ['Можна поєднати Рим і Відень?', 'Так, це популярний варіант. Допоможу спланувати обидві частини.'],
      ],
    },
  },
  footer: {
    tagline: 'Приватний гід-історик у Римі, Ватикані та Відні',
    made: 'Відповідаю щодня. Якщо не відповіла відразу — я на екскурсії.',
    imagery: 'Фотографії тимчасові, будуть замінені власними знімками Олександри.',
    rooms: 'Розділи',
  },
};

// ------------------------------------------------------------------ Russian ---

const ru: Dict = {
  langName: 'RU',
  htmlLang: 'ru',
  meta: {
    title: 'Александра Лукань — частный гид в Риме, Ватикане и Вене',
    description:
      'Индивидуальные экскурсии на русском и украинском в Риме, Ватикане и Вене с историком Александрой Лукань. Более 20 лет опыта. Простое бронирование в WhatsApp.',
  },
  nav: {
    about: 'Познакомимся',
    vatican: 'Ватикан',
    rome: 'Рим',
    vienna: 'Вена',
    reviews: 'Отзывы',
    glossary: 'Словарь',
    book: 'Забронировать',
  },
  ui: {
    bookCta: 'Забронировать экскурсию',
    menu: 'Меню',
    close: 'Закрыть',
    language: 'Язык',
    duration: 'Длительность',
    from: 'от',
    watchVideo: 'Смотреть видео',
    videoSoon: 'Видео Александры — скоро здесь',
    followMe: 'Я в соцсетях',
    socialSoon: 'скоро',
    backHome: 'На главную',
    readMore: 'Подробнее',
    seeReviews: 'Читать отзывы',
    seeTours: 'Посмотреть экскурсии',
    askQuestion: 'Спросить у Александры',
    onRequest: 'По запросу',
    notFound: 'Страница не найдена',
    notFoundText: 'Возможно, адрес изменился. Вернитесь на главную.',
  },
  hero: {
    kicker: 'Частный гид-историк · Рим · Ватикан · Вена',
    title: 'Пройдёмся по Риму вместе — на вашем языке',
    lead: 'Я Александра Лукань, историк и лицензированный гид. Более 20 лет показываю Рим, Ватикан и Вену на русском и украинском — так, чтобы город стал понятным и близким.',
    videoCaption: 'Одна минута — и вы почувствуете, как проходит экскурсия со мной',
    primary: 'Забронировать экскурсию',
    secondary: 'Познакомиться ближе',
  },
  about: {
    title: 'Познакомимся',
    lead: 'Коротко обо мне — и почему со мной Рим запоминается надолго.',
    paragraphs: [
      'Я историк с университетским образованием и лицензированный гид в Ватикане, Риме и Австрии. В Риме живу и работаю более двадцати лет.',
      'Веду экскурсии на русском и украинском. Рассказываю не даты, а истории — о людях, создавших этот город, и о том, почему он до сих пор жив.',
      'Кроме экскурсий, помогу с переводом на итальянский, трансфером, шопингом и фотосессией — чтобы поездка была лёгкой.',
    ],
    facts: [
      ['Образование', 'Историк, университетское'],
      ['Опыт', 'Более 20 лет в Риме'],
      ['Лицензия', 'Ватикан, Рим, Австрия'],
      ['Языки', 'Русский, украинский, итальянский'],
      ['Формат', 'Индивидуально и малые группы'],
    ],
    quote: 'Подарите себе эту встречу с Римом. А я помогу сделать её незабываемой.',
  },
  destinations: {
    title: 'Куда пойдём',
    lead: 'Три направления. Выберите то, что зовёт — детали внутри.',
    cards: [
      { slug: 'vatican', name: 'Ватикан', tagline: 'Музеи, Сикстинская капелла и собор Святого Петра', meta: 'Билеты без очереди' },
      { slug: 'rome', name: 'Рим', tagline: 'От Колизея до площадей, фонтанов и подземного города', meta: 'Более 15 экскурсий' },
      { slug: 'vienna', name: 'Вена', tagline: 'Имперская столица — дворцы, музеи, кофейни', meta: 'По запросу' },
    ],
  },
  book: {
    title: 'Забронировать экскурсию',
    lead: 'Это просто. Впишите пару слов — и кнопка откроет WhatsApp с готовым сообщением мне.',
    steps: [
      'Выберите дату, направление и количество людей.',
      'Нажмите WhatsApp или Viber — откроется готовый текст.',
      'Я отвечу в тот же день и подтвержу детали.',
    ],
    form: {
      date: 'Дата',
      datePh: 'напр. 14 мая',
      place: 'Направление',
      placePh: 'Ватикан, Рим или Вена',
      people: 'Сколько человек',
      peoplePh: 'напр. 2 взрослых',
      name: 'Как вас зовут',
      namePh: 'имя',
      whatsapp: 'Написать в WhatsApp',
      viber: 'Написать в Viber',
      email: 'Написать на email',
      hint: 'Ничего не отправляется автоматически — откроется приложение с готовым текстом, который можно изменить.',
      greeting: 'Добрый день, Александра! Хочу забронировать экскурсию.',
      lineDate: 'Дата',
      linePlace: 'Направление',
      linePeople: 'Человек',
      lineName: 'Имя',
    },
    contactsTitle: 'Прямые контакты',
    note: 'Стоимость зависит от направления, длительности и количества людей. Напишите — назову цену и свободные даты.',
  },
  reviewsBlock: {
    title: 'Отзывы',
    lead: 'Что говорят туристы после экскурсии.',
    note: 'Это примеры оформления. Настоящие отзывы и фото с туристами будут добавлены в ближайшее время.',
    photoAlt: 'Место для фото с туристами',
    items: [
      { name: 'Ирина', from: 'Киев', text: 'Ватикан за полдня — и никакой усталости. Александра говорит так, что четыре часа пролетают как один.' },
      { name: 'Дмитрий и Елена', from: 'Львов', text: 'Были в Риме в третий раз — и увидели совсем другой город. Подземный Рим впечатлил больше всего.' },
      { name: 'Марина', from: 'Варшава', text: 'Возила родителей. Родной язык, спокойный темп, всё учла. Очень рекомендую.' },
    ],
  },
  glossary: {
    title: 'Словарь туриста',
    lead: 'Короткие пояснения слов, которые встречаются при планировании поездки в Рим и Ватикан.',
    note: 'Если чего-то не хватает — напишите, добавлю.',
    terms: [
      ['Индивидуальная экскурсия', 'Экскурсия только для вас и ваших спутников, без чужих людей в группе. Время и темп — под вас.'],
      ['Обзорная экскурсия', 'Первое знакомство с городом: главные места и общая картина за один выход.'],
      ['Тематическая экскурсия', 'Погружение в одну тему — например, античный Рим, Караваджо или христианские святыни.'],
      ['Билеты без очереди (skip-the-line)', 'Вход по забронированному времени, без стояния в общей очереди. В Ватикан и Галерею Боргезе бронируются заранее.'],
      ['Ватиканские музеи', 'Комплекс музеев Ватикана с более чем 60 тысячами произведений, завершающийся Сикстинской капеллой.'],
      ['Сикстинская капелла', 'Капелла с фресками Микеланджело; место, где избирают Папу Римского. Фото и разговоры внутри запрещены.'],
      ['Собор Святого Петра', 'Главный храм Ватикана. На купол можно подняться ради панорамы Рима.'],
      ['Roma Pass', 'Туристическая карта на 48 или 72 часа: вход в музеи и общественный транспорт со скидками.'],
      ['Трансфер', 'Заказанный автомобиль: аэропорт — отель, порт Чивитавеккья, аутлеты или другие города.'],
      ['Чивитавеккья', 'Морской порт рядом с Римом, куда прибывают круизные лайнеры.'],
    ],
    faqTitle: 'Частые вопросы',
    faq: [
      ['На каком языке проходят экскурсии?', 'На русском и украинском. Также возможен перевод на/с итальянского.'],
      ['Сколько стоит экскурсия?', 'Цена зависит от направления, длительности и количества людей. Напишите в WhatsApp — назову точную стоимость и свободные даты.'],
      ['Нужно ли покупать билеты отдельно?', 'В Ватикан, Галерею Боргезе и Колизей билеты бронируются заранее и оплачиваются отдельно. Я помогу всё организовать.'],
      ['Можно с детьми?', 'Да. Сокращу маршрут и подберу истории по возрасту ребёнка.'],
      ['Как забронировать?', 'Проще всего — через WhatsApp или Viber с главной страницы. Я отвечаю ежедневно.'],
    ],
  },
  pages: {
    vatican: {
      title: 'Ватикан',
      lead: 'Крупнейшая коллекция искусства в мире — без очередей и без хаоса.',
      intro: [
        'Ватиканские музеи — это более шестидесяти тысяч произведений и несколько километров пути до Сикстинской капеллы. Без плана здесь легко устать и ничего не запомнить.',
        'Я веду вас так, чтобы остались силы на главное: Станцы Рафаэля, галереи, капелла Микеланджело и собор Святого Петра — как одна цельная история.',
      ],
      highlightsTitle: 'Что увидим',
      highlights: [
        'Ватиканские музеи: Станцы Рафаэля, галереи карт и гобеленов',
        'Сикстинская капелла — читаем её как историю, а не набор знаменитых фрагментов',
        'Собор Святого Петра, по желанию — подъём на купол',
        'Билеты без очереди (бронируются заранее)',
      ],
      toursTitle: 'Экскурсии в Ватикане',
      tours: [
        {
          title: 'Ватиканские музеи и Сикстинская капелла',
          duration: '3–4 часа',
          text: 'Главный маршрут Ватикана: музеи, Станцы Рафаэля, Сикстинская капелла и собор Святого Петра.',
          highlights: ['Билеты без очереди', 'Группы и индивидуально'],
        },
        {
          title: 'Ночной Ватикан',
          duration: '3 часа',
          text: 'Сезонная экскурсия (конец апреля — октябрь): коллекции при свете, когда музеи почти пусты.',
          note: 'Билеты лимитированы, бронируйте заранее',
        },
        {
          title: 'Ватикан + собор и купол',
          duration: '4–5 часов',
          text: 'Расширенный маршрут с подъёмом на купол Святого Петра ради панорамы Рима.',
        },
      ],
      faq: [
        ['Можно ли фотографировать?', 'В музеях — да, в Сикстинской капелле фото и разговоры запрещены.'],
        ['Какой дресс-код?', 'Прикрытые плечи и колени: это действующий храм. Возьмите лёгкую накидку.'],
        ['Сколько длится?', 'Базовый маршрут — 3–4 часа. Можно короче или с подъёмом на купол.'],
      ],
    },
    rome: {
      title: 'Рим',
      lead: 'От Колизея до тихих площадей и подземного города под вашими ногами.',
      intro: [
        'Рим невозможно осмотреть за один раз — и не нужно. Выберем то, что интересно именно вам: античность, площади и фонтаны, христианские святыни или искусство.',
        'Я составляю маршрут под вас: первый раз в Риме или уже в который, с детьми или без, пешком или с машиной.',
      ],
      highlightsTitle: 'Направления экскурсий',
      highlights: [
        'Классический и античный Рим: Колизей, форумы, Пантеон',
        'Площади и фонтаны, Трастевере, вечерний Рим',
        'Христианский Рим и подземная церковь Святого Климента',
        'Искусство: Галерея Боргезе, Караваджо, Бернини',
        'Окрестности: Тиволи, Остия, Римские замки',
      ],
      toursTitle: 'Популярные экскурсии',
      tours: [
        { title: 'Классический Рим', duration: '3–6 часов', text: 'Обзорная: Колизей, Капитолий, форумы, Пантеон, площадь Навона и главные фонтаны — чтобы город сложился в единую картину.' },
        { title: 'Античный Рим', duration: '3 часа', text: 'Колизей, Палатин и Римские форумы — от хижины Ромула и Рема до имперского величия.', note: 'Входные билеты — отдельно' },
        { title: 'Площади и фонтаны', duration: '3 часа', text: 'Барочные площади, фонтан Треви и тайны, которые видят лишь те, кто в Риме не впервые.' },
        { title: 'Церковь Святого Климента. Подземный Рим', duration: '3 часа', text: 'Четыре этажа истории под землёй: базилика, первая церковь, древнее святилище и подземная река.' },
        { title: 'Галерея Боргезе', duration: '2,5–3 часа', text: 'Королева частных коллекций: Рафаэль, Канова, Бернини и шесть полотен Караваджо.', note: 'Бронирование обязательно' },
        { title: 'Вечерний Рим', duration: '2 часа', text: 'Романтическая вечерняя экскурсия на машине: Колизей, замок Ангела и собор Святого Петра в подсветке.' },
        { title: 'Тиволи, Вилла д’Эсте', duration: '4 часа', text: 'Пятьсот фонтанов в предгорье Апеннин — райский уголок в 30 км от Рима.', note: 'Транспорт — отдельно' },
        { title: 'Древняя Остия', duration: '5 часов', text: 'Город-музей, не уступающий Помпеям, и прогулка по берегу моря с обедом.', note: 'С транспортом' },
      ],
      faq: [
        ['Я впервые в Риме — с чего начать?', 'С классической обзорной экскурсии: она даёт общую картину, а дальше выберем темы.'],
        ['А если я уже был в Риме?', 'Тогда интересно пойдут «Площади и фонтаны», подземный Рим или художественные маршруты.'],
        ['Пешком или на машине?', 'Как удобно вам. Часть маршрутов (окрестности, вечерний Рим) делаю на машине.'],
      ],
    },
    vienna: {
      title: 'Вена',
      lead: 'Имперская столица — дворцы, музеи и кофейни. Экскурсии по запросу.',
      draft: true,
      intro: [
        'Я лицензированный гид и в Австрии. Вену показываю тем, кто хочет соединить Рим с имперской Европой или приехать отдельно.',
        'Маршруты составляю индивидуально. Напишите, когда планируете, и я предложу программу и стоимость.',
      ],
      highlightsTitle: 'Что можно увидеть',
      highlights: [
        'Исторический центр, собор Святого Стефана, Хофбург',
        'Дворец Шёнбрунн и его сады',
        'Музейный квартал и Бельведер',
        'Венские кофейни и традиции города',
      ],
      toursTitle: 'Направления (по запросу)',
      tours: [
        { title: 'Обзорная Вена', duration: 'по запросу', text: 'Первое знакомство с имперской столицей: центр, главные площади и собор.' },
        { title: 'Шёнбрунн и Габсбурги', duration: 'по запросу', text: 'Летняя резиденция императоров, история династии и сады дворца.' },
        { title: 'Музейная Вена', duration: 'по запросу', text: 'Художественно-исторический музей, Бельведер и искусство венского модерна.' },
      ],
      faq: [
        ['Вы проводите экскурсии в Вене?', 'Да, по предварительному запросу. Напишите даты — составлю программу.'],
        ['Можно совместить Рим и Вену?', 'Да, это популярный вариант. Помогу спланировать обе части.'],
      ],
    },
  },
  footer: {
    tagline: 'Частный гид-историк в Риме, Ватикане и Вене',
    made: 'Отвечаю ежедневно. Если не ответила сразу — я на экскурсии.',
    imagery: 'Фотографии временные, будут заменены собственными снимками Александры.',
    rooms: 'Разделы',
  },
};

// ------------------------------------------------------------------ English ---

const en: Dict = {
  langName: 'EN',
  htmlLang: 'en',
  meta: {
    title: 'Oleksandra Lukan — private guide in Rome, the Vatican and Vienna',
    description:
      'Private tours in Ukrainian and Russian in Rome, the Vatican and Vienna with historian Oleksandra Lukan. 20+ years of experience. Easy booking on WhatsApp.',
  },
  nav: {
    about: 'About me',
    vatican: 'Vatican',
    rome: 'Rome',
    vienna: 'Vienna',
    reviews: 'Reviews',
    glossary: 'Glossary',
    book: 'Book a tour',
  },
  ui: {
    bookCta: 'Book a tour',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    duration: 'Duration',
    from: 'from',
    watchVideo: 'Watch the video',
    videoSoon: 'Oleksandra’s video — coming soon',
    followMe: 'Find me online',
    socialSoon: 'soon',
    backHome: 'Home',
    readMore: 'Read more',
    seeReviews: 'Read reviews',
    seeTours: 'See the tours',
    askQuestion: 'Ask Oleksandra',
    onRequest: 'On request',
    notFound: 'Page not found',
    notFoundText: 'The address may have changed. Please go back home.',
  },
  hero: {
    kicker: 'Private guide & historian · Rome · Vatican · Vienna',
    title: 'Let’s walk through Rome together',
    lead: 'I’m Oleksandra Lukan, a historian and licensed guide. For over 20 years I’ve shown Rome, the Vatican and Vienna in Ukrainian and Russian — so the city becomes clear and personal.',
    videoCaption: 'One minute, and you’ll feel what a tour with me is like',
    primary: 'Book a tour',
    secondary: 'Get to know me',
  },
  about: {
    title: 'About me',
    lead: 'A few words about me — and why Rome stays with you after a tour with me.',
    paragraphs: [
      'I’m a university-trained historian and a licensed guide in the Vatican, Rome and Austria. I’ve lived and worked in Rome for more than twenty years.',
      'I lead tours in Ukrainian and Russian. I don’t recite dates — I tell stories about the people who built this city and why it is still alive.',
      'Beyond tours, I can help with Italian translation, transfers, shopping and a photo session, so your trip is easy.',
    ],
    facts: [
      ['Education', 'Historian, university degree'],
      ['Experience', '20+ years in Rome'],
      ['Licence', 'Vatican, Rome, Austria'],
      ['Languages', 'Ukrainian, Russian, Italian'],
      ['Format', 'Private and small groups'],
    ],
    quote: 'Give yourself this meeting with Rome. I’ll help make it unforgettable.',
  },
  destinations: {
    title: 'Where we’ll go',
    lead: 'Three directions. Pick the one that calls to you — details inside.',
    cards: [
      { slug: 'vatican', name: 'Vatican', tagline: 'Museums, the Sistine Chapel and St Peter’s Basilica', meta: 'Skip-the-line tickets' },
      { slug: 'rome', name: 'Rome', tagline: 'From the Colosseum to squares, fountains and the city below', meta: '15+ tours' },
      { slug: 'vienna', name: 'Vienna', tagline: 'The imperial capital — palaces, museums, cafés', meta: 'On request' },
    ],
  },
  book: {
    title: 'Book a tour',
    lead: 'It’s simple. Add a few words and the button opens WhatsApp with a message ready for me.',
    steps: [
      'Choose a date, a destination and how many people.',
      'Tap WhatsApp or Viber — the text is ready.',
      'I reply the same day and confirm the details.',
    ],
    form: {
      date: 'Date',
      datePh: 'e.g. 14 May',
      place: 'Destination',
      placePh: 'Vatican, Rome or Vienna',
      people: 'How many people',
      peoplePh: 'e.g. 2 adults',
      name: 'Your name',
      namePh: 'name',
      whatsapp: 'Message on WhatsApp',
      viber: 'Message on Viber',
      email: 'Send an email',
      hint: 'Nothing is sent automatically — your app opens with a ready message you can edit.',
      greeting: 'Hello Oleksandra! I’d like to book a tour.',
      lineDate: 'Date',
      linePlace: 'Destination',
      linePeople: 'People',
      lineName: 'Name',
    },
    contactsTitle: 'Direct contacts',
    note: 'The price depends on the destination, length and group size. Write to me and I’ll share the price and free dates.',
  },
  reviewsBlock: {
    title: 'Reviews',
    lead: 'What travellers say after a tour.',
    note: 'These are sample layouts. Real reviews and photos with travellers will be added soon.',
    photoAlt: 'Space for a photo with travellers',
    items: [
      { name: 'Iryna', from: 'Kyiv', text: 'The Vatican in half a day — and no fatigue. Oleksandra speaks in a way that makes four hours feel like one.' },
      { name: 'Dmytro & Olena', from: 'Lviv', text: 'It was our third time in Rome, and we saw a completely different city. Underground Rome amazed us the most.' },
      { name: 'Maryna', from: 'Warsaw', text: 'I brought my parents. Native language, calm pace, everything considered. Highly recommend.' },
    ],
  },
  glossary: {
    title: 'Traveller’s glossary',
    lead: 'Short explanations of terms you meet when planning a trip to Rome and the Vatican.',
    note: 'If something is missing, write to me and I’ll add it.',
    terms: [
      ['Private tour', 'A tour just for you and your companions, with no strangers in the group. Time and pace are yours.'],
      ['Overview tour', 'A first meeting with the city: the main sights and the big picture in one outing.'],
      ['Themed tour', 'A deep dive into one subject — ancient Rome, Caravaggio, or Christian sites.'],
      ['Skip-the-line tickets', 'Timed entry without standing in the general queue. The Vatican and Galleria Borghese are booked in advance.'],
      ['Vatican Museums', 'The Vatican’s museum complex with over 60,000 works, ending at the Sistine Chapel.'],
      ['Sistine Chapel', 'The chapel with Michelangelo’s frescoes, where the Pope is elected. Photos and talking inside are not allowed.'],
      ['St Peter’s Basilica', 'The main church of the Vatican. You can climb the dome for a panorama of Rome.'],
      ['Roma Pass', 'A tourist card for 48 or 72 hours: museum entry and public transport with discounts.'],
      ['Transfer', 'A booked car: airport to hotel, the port of Civitavecchia, outlets or other cities.'],
      ['Civitavecchia', 'The sea port near Rome where cruise ships arrive.'],
    ],
    faqTitle: 'Frequently asked',
    faq: [
      ['What languages are the tours in?', 'Ukrainian and Russian. Italian translation is also available.'],
      ['How much does a tour cost?', 'It depends on the destination, length and group size. Message me on WhatsApp for the exact price and free dates.'],
      ['Do I buy tickets separately?', 'The Vatican, Galleria Borghese and Colosseum are booked in advance and paid separately. I help arrange everything.'],
      ['Can I come with children?', 'Yes. I shorten the route and choose stories for the child’s age.'],
      ['How do I book?', 'The easiest way is WhatsApp or Viber from the home page. I reply every day.'],
    ],
  },
  pages: {
    vatican: {
      title: 'Vatican',
      lead: 'The largest art collection in the world — without queues or chaos.',
      intro: [
        'The Vatican Museums hold more than sixty thousand works and a walk of several kilometres to the Sistine Chapel. Without a plan it’s easy to tire and remember nothing.',
        'I guide you so you keep energy for what matters: the Raphael Rooms, the galleries, Michelangelo’s chapel and St Peter’s — as one continuous story.',
      ],
      highlightsTitle: 'What we’ll see',
      highlights: [
        'Vatican Museums: the Raphael Rooms, the galleries of maps and tapestries',
        'The Sistine Chapel — read as a story, not a set of famous fragments',
        'St Peter’s Basilica, and optionally the climb to the dome',
        'Skip-the-line tickets (booked in advance)',
      ],
      toursTitle: 'Tours in the Vatican',
      tours: [
        {
          title: 'Vatican Museums & Sistine Chapel',
          duration: '3–4 hours',
          text: 'The main Vatican route: the museums, the Raphael Rooms, the Sistine Chapel and St Peter’s Basilica.',
          highlights: ['Skip-the-line tickets', 'Groups and private'],
        },
        {
          title: 'Vatican by night',
          duration: '3 hours',
          text: 'A seasonal tour (late April–October): the collections by light when the museums are almost empty.',
          note: 'Limited tickets, book ahead',
        },
        {
          title: 'Vatican + basilica & dome',
          duration: '4–5 hours',
          text: 'An extended route with the climb to the dome of St Peter’s for a panorama of Rome.',
        },
      ],
      faq: [
        ['Can I take photos?', 'In the museums, yes; in the Sistine Chapel photos and talking are not allowed.'],
        ['What’s the dress code?', 'Shoulders and knees covered — it’s an active church. Bring a light shawl.'],
        ['How long is it?', 'The base route is 3–4 hours. It can be shorter, or include the dome.'],
      ],
    },
    rome: {
      title: 'Rome',
      lead: 'From the Colosseum to quiet squares and the city beneath your feet.',
      intro: [
        'Rome can’t be seen in one go — and it shouldn’t be. We’ll choose what interests you: antiquity, squares and fountains, Christian sites or art.',
        'I build the route around you: first time in Rome or your fifth, with children or without, on foot or by car.',
      ],
      highlightsTitle: 'Tour directions',
      highlights: [
        'Classical and ancient Rome: the Colosseum, the fora, the Pantheon',
        'Squares and fountains, Trastevere, Rome at night',
        'Christian Rome and the underground church of San Clemente',
        'Art: Galleria Borghese, Caravaggio, Bernini',
        'Beyond the city: Tivoli, Ostia, the Castelli Romani',
      ],
      toursTitle: 'Popular tours',
      tours: [
        { title: 'Classical Rome', duration: '3–6 hours', text: 'The overview: Colosseum, Capitoline, the fora, the Pantheon, Piazza Navona and the great fountains — so the city makes sense as a whole.' },
        { title: 'Ancient Rome', duration: '3 hours', text: 'The Colosseum, Palatine and Roman Forum — from the hut of Romulus and Remus to imperial grandeur.', note: 'Entry tickets separate' },
        { title: 'Squares & fountains', duration: '3 hours', text: 'Baroque squares, the Trevi Fountain and secrets only repeat visitors get to see.' },
        { title: 'San Clemente. Underground Rome', duration: '3 hours', text: 'Four floors of history below ground: a basilica, the first church, an ancient temple and an underground river.' },
        { title: 'Galleria Borghese', duration: '2.5–3 hours', text: 'The queen of private collections: Raphael, Canova, Bernini and six paintings by Caravaggio.', note: 'Booking required' },
        { title: 'Rome at night', duration: '2 hours', text: 'A romantic evening drive: the Colosseum, Castel Sant’Angelo and a floodlit St Peter’s.' },
        { title: 'Tivoli, Villa d’Este', duration: '4 hours', text: 'Five hundred fountains in the Apennine foothills — a corner of paradise 30 km from Rome.', note: 'Transport separate' },
        { title: 'Ostia Antica', duration: '5 hours', text: 'A museum-city that rivals Pompeii, plus a walk along the sea with lunch.', note: 'Transport included' },
      ],
      faq: [
        ['First time in Rome — where to start?', 'With the classical overview: it gives the big picture, then we choose themes.'],
        ['What if I’ve been before?', 'Then “Squares & fountains”, underground Rome or the art routes work beautifully.'],
        ['On foot or by car?', 'Whatever suits you. Some routes (beyond the city, Rome at night) are by car.'],
      ],
    },
    vienna: {
      title: 'Vienna',
      lead: 'The imperial capital — palaces, museums and cafés. Tours on request.',
      draft: true,
      intro: [
        'I’m a licensed guide in Austria too. I show Vienna to those who want to pair Rome with imperial Europe, or come separately.',
        'Routes are built individually. Tell me your dates and I’ll suggest a programme and price.',
      ],
      highlightsTitle: 'What you can see',
      highlights: [
        'The historic centre, St Stephen’s Cathedral, the Hofburg',
        'Schönbrunn Palace and its gardens',
        'The Museum Quarter and the Belvedere',
        'Viennese coffee houses and the city’s traditions',
      ],
      toursTitle: 'Directions (on request)',
      tours: [
        { title: 'Vienna overview', duration: 'on request', text: 'A first meeting with the imperial capital: the centre, the main squares and the cathedral.' },
        { title: 'Schönbrunn & the Habsburgs', duration: 'on request', text: 'The emperors’ summer residence, the dynasty’s story and the palace gardens.' },
        { title: 'Vienna’s museums', duration: 'on request', text: 'The Kunsthistorisches Museum, the Belvedere and Viennese modernism.' },
      ],
      faq: [
        ['Do you give tours in Vienna?', 'Yes, by prior request. Send your dates and I’ll build a programme.'],
        ['Can I combine Rome and Vienna?', 'Yes, it’s a popular option. I’ll help plan both parts.'],
      ],
    },
  },
  footer: {
    tagline: 'Private guide & historian in Rome, the Vatican and Vienna',
    made: 'I reply every day. If I don’t answer at once, I’m on a tour.',
    imagery: 'Photos are temporary and will be replaced with Oleksandra’s own.',
    rooms: 'Sections',
  },
};

export const DICTS: Record<Locale, Dict> = { ua, ru, en };

export function dict(locale: Locale): Dict {
  return DICTS[locale] ?? DICTS.ua;
}
