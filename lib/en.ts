import type { Dictionary } from './dict';

export const en: Dictionary = {
  langName: 'English',
  meta: {
    title: 'Oleksandra Lukan — historian and licensed guide in Rome, the Vatican and Vienna',
    description:
      'Private and small-group tours of Rome, the Vatican, the Roman countryside and the museums, led by a university-trained historian with more than 20 years in the city. Tours in Ukrainian and Russian; enquiries welcome in English.',
  },
  ui: {
    room: 'Room',
    skipToContent: 'Skip to content',
    menu: 'Rooms',
    close: 'Close',
    rooms: 'Rooms',
    language: 'Language',
    catalogueNo: 'Cat.',
    duration: 'Duration',
    languages: 'Tour language',
    languagesValue: 'Ukrainian, Russian',
    booking: 'Booking',
    bookingValue: 'by arrangement',
    inPreparation: 'in preparation',
    inPreparationNote: 'This tour is still being written. Write to me and I will tell you when it is ready.',
    all: 'All',
    groups: {
      antiquity: 'Antiquity',
      christian: 'Christian Rome',
      art: 'Art',
      around: 'Beyond Rome',
      museums: 'Museums',
    },
    readMore: 'More',
    less: 'Less',
    write: 'Write',
    call: 'Call',
    backHome: 'Back to Room I',
    notFound: 'No such room',
    notFoundBody:
      'It may not be open yet, or you may have followed an old address. Please go back to the entrance.',
  },
  nav: {
    about: 'About me',
    tours: 'Tours of Rome',
    around: 'Beyond Rome',
    kids: 'With children',
    museums: 'Museums of Rome',
    events: 'Exhibitions and concerts',
    hotels: 'Hotels in Rome',
    nightlife: 'Rome after dark',
    shopping: 'Shopping, outlets, Tax Free',
    info: 'Practical information',
    phrasebook: 'Traveller’s phrasebook',
    figures: 'History through people',
  },
  navGroups: [
    { label: 'Tours', items: ['tours', 'around', 'museums', 'kids'] },
    { label: 'About', items: ['about', 'figures'] },
    { label: 'Reference', items: ['info', 'events', 'hotels', 'shopping', 'nightlife', 'phrasebook'] },
  ],
  home: {
    eyebrow: 'Guided tours · Rome · Vatican · Vienna · in Ukrainian and Russian',
    exhibit: {
      title: 'Rome',
      dates: '753 BC — today',
      materialsLabel: 'Material',
      materials: 'Tufa, travertine, marble, brick, water, myth',
      provenanceLabel: 'On view',
      provenance: 'Permanent. Open air. Admission free',
      guideLabel: 'Led by',
      guide: 'Oleksandra Lukan, historian, licensed guide',
    },
    thesis: 'A label tells you what this is. I tell you why.',
    thesisAttribution: 'More than 20 years in Rome. Licensed in the Vatican, Rome and Austria',
    scroll: 'Continue to Room II',
    rooms: {
      guide: 'Who leads',
      catalogue: 'The catalogue',
      section: 'One section',
      services: 'Beyond the tour',
      reference: 'Reference',
      desk: 'Ticket desk',
    },
    guide: {
      standfirst:
        'A university-trained historian. Twenty years between Trajan’s column and the Sistine Chapel.',
      paragraphs: [
        'Roman history has probably drawn in and enchanted every one of us. If you are reading these lines, then you too have decided on that stirring, beautiful encounter — and set out on one of the roads that soon leads to Rome.',
        'Long ago, as a student on an archaeological dig in Zakarpattia, I was carefully cleaning shards of amphora — the trace left by the army of the emperor Trajan. A sign? Fate? Today I walk past Trajan’s column, which tells the story of his conquest of Dacia in two thousand four hundred carved figures, and almost every day I talk about him, about Julius Caesar and Nero, about the formidable Agrippina and the vestal Rhea Silvia.',
        'The story of a mighty state at its height: in the first century more than a million people lived in Rome. And of its fall: by the fifth century the number of Romans had dropped to thirty thousand, and by some accounts to seventeen. Splendour, greatness, collapse — and some blessing from above that kept helping the city rise from its own ashes.',
      ],
      facts: [
        ['Education', 'Historian, university degree'],
        ['Experience', 'More than 20 years'],
        ['Licence', 'Vatican, Rome, Austria'],
        ['Tour languages', 'Ukrainian, Russian'],
        ['Also', 'Professional translation to and from Italian'],
      ],
      portraitPlaceholder: 'Photograph of Oleksandra goes here',
      pullquote:
        'I am glad when the work comes off and gives pleasure — to you, to me, to first-time travellers, and to the President of the country, for which I received a letter of thanks.',
      more: 'Read on — About me',
    },
    catalogue: {
      standfirst:
        'Twenty-two tours. Private, or as a small group of your own people at your own pace.',
      note:
        'I also build tours to order. If the subject you want is not on the list, write to me and we will invent it.',
      allTours: 'Full catalogue — 22 tours',
    },
    section: {
      standfirst: 'San Clemente: four floors of history, one door, and a staircase going down.',
      intro:
        'The shortest way to show what a historian adds to a walk through Rome is to take one address and go down through it. Every flight of stairs is worth several centuries.',
      layers: [
        {
          depth: '0 m',
          era: '12th century',
          title: 'The basilica',
          text: 'A mosaic tree of life through which the whole of early Christianity can be read. What everyone sees who walks in from the street.',
        },
        {
          depth: '−4 m',
          era: '4th century',
          title: 'The first church',
          text: 'And the tomb of Cyril — yes, that Cyril, who gave the Slavs their alphabet. Plus the story of Pope Clement, who was martyred… in Crimea.',
        },
        {
          depth: '−10 m',
          era: '1st century',
          title: 'The mithraeum',
          text: 'A temple of the religion that competed with Christianity. Mithras, the bull, stone benches for the ritual meal. Europe’s faith was decided in rooms like this one.',
        },
        {
          depth: '−16 m',
          era: 'The Republic',
          title: 'A street and a mint',
          text: 'A paved street, the houses of the wealthy, and somewhere in the dark the sound of an underground river that still runs.',
        },
      ],
      outro: 'Three hours. One address. And the feeling that the city below you is deeper than the city above.',
      cta: 'Book this tour',
    },
    services: {
      standfirst: 'A carefully chosen team of professionals, for when you need more than a tour.',
      items: [
        {
          title: 'Translation to and from Italian',
          text: 'Professional translation: meetings, negotiations, trade fairs, documents. I do this myself.',
        },
        {
          title: 'Shopping companion',
          text: 'From the boutiques on Via dei Condotti to the outlets outside the city — with real knowledge of prices, sizes and Tax Free.',
        },
        {
          title: 'Transfers',
          text: 'Airport — hotel — outlet — the port of Civitavecchia. Around Rome, and from Rome to any city.',
        },
        {
          title: 'Photo session',
          text: 'With a professional photographer, in the city or in the countryside. Times and locations chosen for the light.',
        },
        {
          title: 'Restaurant booking',
          text: 'Free of charge. Tell me what you feel like and I will find a place Romans actually go to.',
        },
      ],
      note: 'Fees for accompaniment and translation are agreed in advance, depending on length and subject.',
    },
    reference: {
      standfirst:
        'What you will need once you are here: museums and free-entry days, Roma Pass, Tax Free, public holidays, emergency numbers.',
      note: 'I keep these pages for my own travellers. Use them even if we never meet.',
    },
    desk: {
      standfirst: 'Fill in the stub and it will write the message I need.',
      intro:
        'To answer you I need four things: a date, the tour, a time and a way to reach you. Put them in here — then it is one button.',
      form: {
        legend: 'Tour enquiry',
        date: 'Date',
        datePlaceholder: 'e.g. 14 May',
        tour: 'Tour',
        tourPlaceholder: 'choose from the list',
        time: 'Time',
        timePlaceholder: 'e.g. 9:30',
        people: 'People',
        peoplePlaceholder: 'e.g. 2 adults',
        contact: 'How to reach you',
        contactPlaceholder: 'email or phone',
        message: 'Message',
        whatsapp: 'Send on WhatsApp',
        email: 'Send by email',
        hint: 'Nothing is sent automatically: your WhatsApp or mail app opens with the text ready.',
        preview: 'What will be sent',
        greeting: 'Good day, Oleksandra!',
        fields: {
          date: 'Date',
          tour: 'Tour',
          time: 'Time',
          people: 'People',
          contact: 'Contact',
        },
        signature: 'Thank you!',
      },
      contacts: [
        { label: 'Phone, Viber, WhatsApp', value: '+39 389 966 44 55', href: 'tel:+393899664455' },
        { label: 'Email', value: 'alessandralukan@gmail.com', href: 'mailto:alessandralukan@gmail.com' },
        { label: 'Languages', value: 'Ukrainian, Russian, Italian' },
      ],
      hours: 'I reply every day. If I do not answer at once, I am on a tour.',
    },
    footer: {
      note: 'Oleksandra Lukan · Historian and licensed guide in Rome, the Vatican and Vienna',
      imagery:
        'The photographs on this site are temporary stock images. They will be replaced with Oleksandra’s own.',
      credit: 'Prices on request: length and route determine the fee.',
    },
  },
  tours: {
    classic: {
      title: 'Classical Rome',
      lede: 'Everything essential in one day — arranged so the city finally makes sense as a whole.',
      body: 'The Colosseum, the Capitoline hill, the imperial fora, the Pantheon, Piazza Navona and the great Roman fountains. This route can be built in several ways, including one that works for people who have been to Rome before. The aim is a single, complete picture of the city and its history.',
      duration: '3–6 hours',
      notes: ['On foot or by car', 'Length set by your stamina'],
    },
    night: {
      title: 'Rome at night',
      lede: 'The Colosseum at dusk looks almost sinister. It is the best thing that happens to it.',
      body: 'A romantic evening drive through Rome at dusk. The sparsely lit Colosseum wrapped in a pink-grey haze; Castel Sant’Angelo pulling you towards it; and St Peter’s, which stops you where you stand — both floodlit and genuinely immense.',
      duration: '2 hours',
      notes: ['By car'],
    },
    antique: {
      title: 'Ancient Rome',
      lede: 'From the hut where Romulus and Remus grew up to the Colosseum. Eight centuries in three hours.',
      body: 'No other city can be compared to Rome for archaeology. Here, on the Palatine, the city was born in 753 BC. You will see the hut of Romulus and Remus, the oldest road, dated 312 BC, the Roman Fora, the Capitoline — and the vast structure of the imperial age. Between 23 April and 9 October you can add a visit to the Colosseum by moonlight: eerie and magnificent at once.',
      duration: '3 hours',
      notes: ['Entry tickets separate', 'Colosseum by moonlight: 23 Apr — 9 Oct, limited tickets'],
    },
    squares: {
      title: 'Squares and fountains of Rome',
      lede: 'For those who are not here for the first time: the same city through completely new eyes.',
      body: 'A fine reading of Rome for a repeat visit. You will see the city differently, hear secrets you have not been told, enjoy the sound of the baroque fountains — and of course throw a coin into the Trevi.',
      duration: '3 hours',
    },
    trastevere: {
      title: 'Medieval Trastevere and the Roman Ghetto',
      lede: 'A quarter that seems frozen in the Middle Ages — and almost physically takes you back there.',
      body: 'The years when green-eyed Lucrezia Borgia, daughter of Pope Alexander VI, lured young men to their deaths, and when a young Raphael lost his head over Margherita Luti. We will visit the oldest pharmacy in Europe and one of the first Christian churches, Santa Maria in Trastevere. This can be combined with the Janiculum hill or end at the Mouth of Truth from Roman Holiday.',
      duration: '3 hours',
    },
    christian: {
      title: 'Christian Rome',
      lede: 'The twenty-eight steps Christ climbed to be judged by Pilate.',
      body: 'A particular feeling comes over everyone who approaches the surviving fragment of the True Cross, climbs the Holy Stairs, or prays before the relic of the manger. A tour of the great papal basilicas and relics of Rome, unhurried, and skipping the queues wherever they can be skipped.',
      duration: '3 hours',
    },
    clement: {
      title: 'San Clemente. Underground Rome',
      lede: 'Four floors down: basilica, first church, mithraeum and an underground river.',
      body: 'An extraordinary tour that takes you into the first century in the most literal sense — onto paved Roman streets and into the houses of the wealthy, all of it below ground — and that also reveals the religion which competed with Christianity for Europe. Ancient shrines, a mithraeum, a mint, an underground river, the tomb of Cyril who gave the Slavs their alphabet, and the story of Pope Clement, martyred in Crimea.',
      duration: '3 hours',
    },
    borghese: {
      title: 'Villa and Galleria Borghese',
      lede: 'The queen of the world’s private collections. And six Caravaggios in one house.',
      body: 'Hidden inside a magnificent park, reached by the street of the sweet life — Via Veneto, where Fellini shot La Dolce Vita — the Galleria Borghese is a jewel box. One of Europe’s most celebrated collections: Raphael, Rubens, Canova, Bernini, and six paintings by Caravaggio.',
      duration: '2.5–3 hours',
      notes: ['Tickets must be booked in advance', 'Entry tickets separate'],
    },
    centuries: {
      title: 'Rome through the centuries',
      lede: 'My own route. From the 8th century BC to the present, with nothing skipped.',
      body: 'Recommended for those who are not in Rome for the first time. Deep, dense and emotional — especially valued by people who love history and want something more than the standard circuit. I built this route myself and it follows no guidebook.',
      duration: '3–5 hours',
      notes: ['Author’s own route'],
    },
    vatican: {
      title: 'The Vatican and St Peter’s',
      lede: '1,400 rooms, 65,000 works — and the Sistine Chapel read as one continuous story rather than a set of famous fragments.',
      body: 'The Vatican Museums are among the most important in the world and sit inside the smallest state on earth. The Pio-Clementino and Chiaramonti museums, the Gallery of Tapestries, the Gallery of Maps, the Sistine Chapel and St Peter’s Basilica. Optional additions: the gardens, the Pinacoteca, the Raphael Rooms, the Vatican grottoes, and the climb to the dome. From 24 April to 30 October the Vatican by night is possible — the collections by candlelight.',
      duration: '3–5 hours',
      notes: ['Tickets booked well in advance', 'Entry tickets separate'],
    },
    tivoli: {
      title: 'Tivoli and Villa d’Este',
      lede: 'Five hundred fountains that run without a single pump — on the force of one river alone.',
      body: 'Tivoli, founded in the 13th century BC and therefore older than Rome, lies in the Apennine foothills on the river Aniene, which feeds four Roman aqueducts — and the 500 fountains of the villa of Cardinal Ippolito d’Este, son of Lucrezia Borgia. Triumph and deep human tragedy, told in a corner of paradise. Villa Adriana, of the 2nd century, and a walk through the old town can be added.',
      duration: '4 hours',
      notes: ['Outside Rome', 'Transport separate'],
    },
    castelli: {
      title: 'The Castelli Romani',
      lede: 'The crater of a sleeping volcano, Italy’s deepest volcanic lake — and a priest who had to kill his predecessor.',
      body: 'A group of small towns along the crater of the sleeping but still active Latin volcano, 30 km from Rome. Lake Albano, 170 metres deep, and enchanting Lake Nemi, once part of the villa of the emperor Caligula. Where the town of Nemi now stands and strawberries grow all year round, there was a temple of Diana Nemorensis, and the lake was her mirror. Her priest could only take office by killing his predecessor and breaking a golden bough in the sacred grove. And Castel Gandolfo, the Pope’s summer residence, built on the site of Alba Longa — the first state on the peninsula.',
      duration: '4 hours',
      notes: ['Outside Rome', 'Transport separate'],
    },
    farnesina: {
      title: 'Villa Farnesina',
      lede: 'A house built for a banker’s “unsuitable” bride. And Michelangelo’s secret autograph on the wall.',
      body: 'A suburban villa designed by Baldassare Peruzzi for the wealthy papal banker Agostino Chigi, as a home for himself and the woman he had chosen. It was to be finished in time for a wedding to which the most powerful nobles of Rome were invited — an invitation they found entirely unacceptable. Why, you will learn at the villa. You will also see Raphael’s Triumph of Galatea, works by Romano, Sebastiano del Piombo and Sodoma, and an autograph Michelangelo left here in secret.',
      duration: '2.5 hours',
      notes: ['Can be combined with Trastevere'],
    },
    massimo: {
      title: 'Palazzo Massimo alle Terme',
      lede: 'Bronze fittings from Caligula’s floating palace, and frescoes two thousand years old.',
      body: 'Works from the National Roman Museum, housed beside the largest baths in the city. The oldest Roman calendars, the unique bronzes that decorated Caligula’s floating palace, two-thousand-year-old frescoes of everyday Roman life, superb marble sculpture, and the numismatic collection.',
      duration: '2 hours',
    },
    capitoline: {
      title: 'The Capitoline Museums',
      lede: 'The oldest museums in the world. And that she-wolf from your school history book.',
      body: 'Many of the works kept here you first saw as a child in a history textbook: the she-wolf feeding Romulus and Remus, the Venus, the remains of the greatest temple of ancient Rome — that of Jupiter. Plus a rich collection of paintings, in three palaces designed by Michelangelo.',
      duration: '2–4 hours',
    },
    giulia: {
      title: 'Villa Giulia',
      lede: 'The Etruscans had writing that has never been deciphered. And they gave Rome the gladiatorial games.',
      body: 'The museum that tells the story of the mysterious Etruscans, who settled the peninsula in the first millennium BC. From them Rome took the organisation of its settlements, its domestic life, its first laws — and the gladiatorial games. Words of their language survive in modern Italian. They had a script, and it has still not been read.',
      duration: '2 hours',
    },
    legends: {
      title: 'Legends and myths of Rome',
      lede: 'Tour in preparation.',
      body: 'I am assembling this route out of what Romans themselves told about their city: from the she-wolf to the Mouth of Truth. Write to me and I will tell you when it is ready.',
      duration: 'to be confirmed',
    },
    caravaggio: {
      title: 'Caravaggio',
      lede: 'Sentenced to death, he died without ever learning that he had been pardoned.',
      body: 'For those who care about a painter of extraordinary gift, difficult character and tragic fate. Born in Milan, he spent his best years in Rome, from 1595 to 1606. We walk the places where he lived, loved, suffered and left his immortal work, in churches and in museums.',
      duration: '3 hours',
      notes: ['With the Galleria Borghese — 5 hours (six of his paintings are there)'],
    },
    bernini: {
      title: 'Bernini and Borromini',
      lede: 'Two geniuses, one city and one woman. From friends to sworn enemies.',
      body: 'Borromini was wildly gifted. He was unlucky in one respect: he arrived in Rome where a man only a year older, just as gifted, the twenty-five-year-old Bernini, already lived and worked. Their first joint commission, the baldachin in St Peter’s, brought honours and a large fee to Bernini alone. Then came the torment of injustice and professional jealousy, joined by jealousy of another kind. And they remain side by side forever, in the churches of Sant’Andrea and San Carlino.',
      duration: '3 hours',
    },
    bracciano: {
      title: 'Lake and castle at Bracciano. Anguillara, Trevignano',
      lede: 'A real 15th-century castle still owned by the same family. Tom Cruise and Brad Pitt were married here.',
      body: 'Lake Bracciano is volcanic, 164 metres deep. On its shores are the classically Italian towns of Bracciano, Anguillara and Trevignano. The Orsini-Odescalchi castle is visible from every shore; its aristocratic descendants allow visitors into a genuine 15th-century fortress with frescoes by the Zuccari brothers and Antoniazzo Romano. Since 1952 it has held a museum of arms, paintings, furniture and ceramics. We also have the rare chance to be received in one of the typical houses of Trevignano.',
      duration: '6 hours',
      notes: ['Transport included', 'Swimming in the lake possible'],
    },
    ostia: {
      title: 'Ostia Antica',
      lede: 'A museum-city that stands comparison with Pompeii. With underfloor heating and public latrines.',
      body: 'The oldest port of ancient Rome, from the 7th century BC, and the city that grew beside it. Warehouses, multi-storey apartment blocks, baths, mosaics, an amphitheatre, temples, bakeries and laundries. The ancient system of heating rooms with hot air — and the famous public latrines. Beyond the archaeological park we will see modern seaside Ostia Lido, walk along the Tyrrhenian shore and eat Roman seafood.',
      duration: '5 hours',
      notes: ['Transport included', 'Lunch by the sea'],
    },
    subiaco: {
      title: 'The monasteries of Subiaco',
      lede: 'The cave where Saint Benedict wrote a Rule that is still in force fifteen centuries later.',
      body: 'Seventy kilometres from Rome, on the river Aniene. This landscape drew a young monk here in the 5th century; he stayed more than thirty years and founded thirteen monasteries. His name was Benedict, founder of the Benedictine order. His twin sister, Saint Scholastica, who founded the first convent in Europe, lived here too. Besides the beautifully preserved monasteries we will see the cave where he lived as a hermit and wrote his Rule.',
      duration: '6 hours',
      notes: ['Transport included'],
    },
  },
  sections: {
    about: {
      title: 'About me',
      standfirst: 'Who is leading you, why a historian, and where this work came from.',
      intro: [
        'Roman history has probably drawn in and enchanted every one of us. If you are reading these lines, then you too have decided on that stirring, beautiful encounter — and set out on one of the roads that soon leads to Rome. And the centuries will start to churn, running through myths, legends, true historical events and sometimes plainly sentimental ones, in the stories I tell.',
        'Very soon you will feel it: the city has caught you and taken you in its arms. So firmly that you will need to come back. Give yourself that encounter. And I, Oleksandra Lukan, will try to help you make it unforgettable.',
      ],
      panels: [
        {
          kind: 'facts',
          heading: 'On paper',
          rows: [
            ['Education', 'Professional historian, university degree'],
            ['Experience', 'More than 20 years guiding in Rome'],
            ['Licence', 'Vatican, Rome, Austria'],
            ['Tour languages', 'Ukrainian, Russian'],
            ['Translation', 'Professional, to and from Italian'],
            ['Format', 'Private and small groups'],
          ],
        },
        {
          kind: 'prose',
          heading: 'How I got here',
          paragraphs: [
            'At some point fate put me on the road that leads to Rome. Long ago, as a student on an archaeological dig in Zakarpattia, I was carefully cleaning shards of amphora — the trace left by the army of the emperor Trajan. A sign? Fate?',
            'Today I walk past Trajan’s column, which recounts his conquest of Dacia — today’s Romania and Moldova and part of Ukraine — in two thousand four hundred carved figures, and almost every day I tell people about him, about Julius Caesar and Nero, about the formidable Agrippina and the vestal Rhea Silvia.',
            'The story of a mighty state at its height: in the first century more than a million people lived in Rome. And of its fall: by the fifth century the number of Romans had dropped to thirty thousand, and by some accounts to seventeen. Splendour, greatness, collapse — and some blessing from above that kept helping the city rise from its ashes, to be beautiful and eternal again after nearly three thousand years.',
          ],
        },
        {
          kind: 'note',
          text: 'I am glad when the work comes off and gives pleasure. To you, to me, to first-time travellers, and to the President of the country, for which I received a letter of thanks and a gift.',
        },
      ],
    },
    tours: {
      title: 'Tours of Rome',
      standfirst: 'The full catalogue: twenty-two tours, each with its length and a short description.',
      intro: [
        'Dear friends, here is the list and a short description of my main tours. Emotional, absorbing, vivid, informative and unforgettable — which is my professional creed and the substance of this work.',
        'I quote the fee in reply to your enquiry: it depends on length, route and the number of people. Entry tickets and transport, where needed, are paid separately.',
      ],
      catalogue: ['antiquity', 'christian', 'art', 'museums', 'around'],
      panels: [
        {
          kind: 'note',
          text: 'Tours can also be designed to your own suggestions. If what you want is not in the catalogue, write to me.',
        },
        {
          kind: 'facts',
          heading: 'Additional services',
          rows: [
            ['Accompaniment', 'by arrangement, hourly'],
            ['Interpreting at meetings, negotiations, trade fairs', 'by arrangement, hourly'],
            ['Restaurant booking', 'free of charge'],
          ],
        },
      ],
    },
    around: {
      title: 'Beyond Rome',
      standfirst: 'Lazio: almost every town here is older than Rome. And Romulus and Remus were born here.',
      intro: [
        'Lazio, one of Italy’s twenty regions and the one whose capital is Rome, invites a closer acquaintance: its own history, an unrepeatable kitchen, its own character, traditions and an extraordinary range of wines.',
        'Almost every town here can claim more than two thousand years of history. These places are the source of Roman history and the cradle of the Latin language.',
      ],
      catalogue: ['around'],
    },
    kids: {
      title: 'With children',
      standfirst: 'This section is being written. In the meantime, addresses that work.',
      draft: true,
      intro: [
        'I am still assembling the programme for children. These places, though, are used by all my travellers with children — the list works without a guide.',
      ],
      panels: [
        {
          kind: 'links',
          heading: 'Where to take children in and near Rome',
          items: [
            { label: 'Rainbow MagicLand', meta: 'Theme park, Valmontone', href: 'https://www.magicland.it' },
            { label: 'Zoomarine', meta: 'Water park and dolphin show', href: 'https://www.zoomarine.it' },
            { label: 'Bioparco', meta: 'Rome’s zoo, inside Villa Borghese', href: 'https://www.bioparco.it' },
            { label: 'Explora', meta: 'Children’s museum in Rome', href: 'https://www.mdbr.it' },
            { label: 'Cinecittà World', meta: 'Film-themed amusement park', href: 'https://www.cinecittaworld.com' },
            { label: 'Fantastico Mondo', meta: 'Fairy-tale park, Sat–Sun', href: 'https://www.fantasticomondo.it' },
          ],
        },
        {
          kind: 'note',
          text: 'For children aged 7 to 14 I can shorten any tour in the catalogue — different pace, different stories. Tell me the child’s age.',
        },
      ],
    },
    museums: {
      title: 'Museums of Rome',
      standfirst: 'Addresses, websites — and above all, when you can walk in free.',
      intro: [
        'Some museums in Rome are always free. More are free on the first Sunday of the month. Planned properly, that is the cheapest way to see a great deal.',
      ],
      panels: [
        {
          kind: 'links',
          heading: 'The main museums',
          items: [
            { label: 'Capitoline Museums', meta: 'Piazza del Campidoglio', href: 'http://www.museicapitolini.org' },
            { label: 'Trajan’s Markets', meta: 'Via Quattro Novembre 94', href: 'https://www.mercatiditraiano.it' },
            { label: 'Museum of Rome', meta: 'Palazzo Braschi, Piazza San Pantaleo', href: 'https://www.museodiroma.it' },
            { label: 'Galleria Borghese', meta: 'Piazzale Scipione Borghese 5 · booking required', href: 'https://galleriaborghese.beniculturali.it' },
            { label: 'Palazzo Massimo alle Terme', meta: 'Largo di Villa Peretti 2', href: 'https://museonazionaleromano.beniculturali.it' },
            { label: 'Villa Giulia — Etruscan museum', meta: 'Piazzale di Villa Giulia 9', href: 'https://villagiulia.beniculturali.it' },
            { label: 'Castel Sant’Angelo', meta: 'Lungotevere Castello 50', href: 'https://castelsantangelo.cultura.gov.it' },
            { label: 'Palazzo Barberini', meta: 'Via delle Quattro Fontane 13', href: 'https://www.barberinicorsini.org' },
            { label: 'Galleria Spada', meta: 'Piazza Capo di Ferro 13', href: 'https://galleriaspada.cultura.gov.it' },
            { label: 'Baths of Diocletian', meta: 'Via Enrico de Nicola 78' },
            { label: 'Nero’s Domus Aurea', meta: 'Via della Domus Aurea 1 · guided visits only' },
            { label: 'Villa Adriana, Tivoli', meta: 'Largo Marguerite Yourcenar 1', href: 'https://villaadrianaevilladeste.it' },
          ],
        },
        {
          kind: 'list',
          heading: 'Free on the first Sunday of the month',
          items: [
            'Colosseum, Roman Forum and Palatine',
            'Galleria Borghese (advance booking still required)',
            'Castel Sant’Angelo',
            'Villa Giulia — National Etruscan Museum',
            'Baths of Diocletian',
            'Palazzo Barberini and Palazzo Corsini',
            'National Gallery of Modern Art',
            'Galleria Spada',
            'The Vittoriano, Piazza Venezia',
            'Museo Boncompagni Ludovisi: decorative arts, costume, fashion',
            'Veii archaeological area — Etruscan sanctuary of Apollo',
            'Museo Hendrik Christian Andersen',
            'Santa Maria Nova and Capo di Bove on the Appian Way',
          ],
        },
        {
          kind: 'list',
          heading: 'Always free',
          items: [
            'Carriage Museum at the Quirinal Palace',
            'Museum of the City Walls',
            'Giovanni Barracco Museum of Ancient Sculpture',
          ],
        },
        {
          kind: 'links',
          heading: 'Official sources',
          note: 'Opening arrangements change — worth checking before you go.',
          items: [
            { label: 'Turismo Roma: free admission', href: 'https://www.turismoroma.it/en/a-roma-free' },
            { label: 'Museums in Comune Roma', href: 'https://www.museiincomuneroma.it' },
            { label: 'Italian Ministry of Culture', href: 'https://cultura.gov.it' },
          ],
        },
      ],
    },
    events: {
      title: 'Exhibitions and concerts',
      standfirst: 'Where to read Rome’s listings so you do not miss the thing that happens once.',
      intro: [
        'Rome’s listings change weekly, so instead of a list of exhibitions here is a list of the places worth watching. These are the sites I check myself.',
      ],
      panels: [
        {
          kind: 'links',
          heading: 'Venues and listings',
          items: [
            { label: 'Auditorium Parco della Musica', meta: 'Concert complex', href: 'https://www.auditorium.com' },
            { label: 'Teatro dell’Opera di Roma', meta: 'Opera house; summer season at the Baths of Caracalla', href: 'https://www.operaroma.it' },
            { label: 'Rome Guide', meta: 'Concert listings, all genres', href: 'http://www.romeguide.it' },
            { label: 'Chiostro del Bramante', meta: 'Bramante’s cloister: major exhibitions', href: 'https://www.chiostrodelbramante.it' },
            { label: 'Museo dell’Ara Pacis', meta: 'The Altar of Peace, plus exhibitions', href: 'https://www.arapacis.it' },
            { label: 'Complesso del Vittoriano', meta: 'Exhibition halls on Piazza Venezia', href: 'https://vive.cultura.gov.it' },
            { label: 'Scuderie del Quirinale', meta: 'Large monographic exhibitions', href: 'https://www.scuderiequirinale.it' },
            { label: 'Palazzo del Quirinale', meta: 'Residence of the President of Italy', href: 'https://palazzo.quirinale.it' },
          ],
        },
        {
          kind: 'prose',
          heading: 'The Quirinal Palace',
          paragraphs: [
            'A papal residence from the 16th century, now the home of the President of Italy. More than 111,000 square metres: the sixth-largest palace in the world, twenty times the size of the White House.',
            'Entry by advance booking only; passes are issued in your name and are valid with identity documents. I can handle the booking.',
          ],
        },
        {
          kind: 'note',
          text: 'A few times a year something happens that is worth a trip of its own: the Colosseum by moonlight (23 Apr — 9 Oct) and the Vatican by candlelight (24 Apr — 30 Oct). Tickets are limited.',
        },
      ],
    },
    hotels: {
      title: 'Hotels in Rome',
      standfirst: 'How an Italian hotel works, and where to look so you are not paying for the address alone.',
      panels: [
        {
          kind: 'facts',
          heading: 'Worth knowing in advance',
          rows: [
            ['Check-in', 'from 12:00'],
            ['Check-out', 'by 10:00 (varies by category)'],
            ['Arriving early', 'reception will gladly keep your luggage'],
            ['Arriving after 18:00', 'tell the hotel in advance'],
            ['Extras', 'settle them the night before and keep the receipts'],
          ],
        },
        {
          kind: 'links',
          heading: 'Where to book',
          items: [
            { label: 'Booking.com', href: 'https://www.booking.com' },
            { label: 'Expedia', href: 'https://www.expedia.com' },
            { label: 'Airbnb — apartments', href: 'https://www.airbnb.com' },
          ],
        },
        {
          kind: 'links',
          heading: 'Where to compare',
          items: [
            { label: 'Tripadvisor', href: 'https://www.tripadvisor.com' },
            { label: 'Trivago', href: 'https://www.trivago.com' },
          ],
        },
        {
          kind: 'note',
          text: 'My own advice: the district matters more than the stars. Tell me which tours you have chosen and I will say which district makes them easiest to reach.',
        },
      ],
    },
    nightlife: {
      title: 'Rome after dark',
      standfirst: 'Rome is a city of the aperitivo, which is why clubs here rarely start before midnight.',
      intro: [
        'Nights out are usually Thursday, Friday and Saturday. Winter venues differ from summer ones: in summer Roman life moves towards the sea. Some places need booking in advance.',
      ],
      panels: [
        {
          kind: 'links',
          heading: 'City centre, book ahead',
          items: [
            { label: 'Gilda', meta: 'Via Mario de’ Fiori 97', href: 'http://www.gildabar.it' },
            { label: 'Jackie O’', meta: 'Via Boncompagni 11', href: 'http://www.jackieoroma.com' },
            { label: 'Piper Club', meta: 'Via Tagliamento 9', href: 'http://www.piperclub.it' },
            { label: 'Art Café', meta: 'Villa Borghese, near Via Veneto', href: 'http://www.art-cafe.it' },
          ],
        },
        {
          kind: 'links',
          heading: 'EUR and Ostiense',
          items: [
            { label: 'Goa Club', meta: 'Via Giuseppe Libetta 13', href: 'http://www.goaclub.com' },
            { label: 'Futurarte', meta: 'Restaurant & Club, EUR' },
          ],
        },
        {
          kind: 'prose',
          heading: 'No booking needed',
          paragraphs: [
            'Testaccio is the quarter of bars and clubs you can simply walk into, with something for every taste, from Latin American dance floors to exclusive rooms. In summer an open-air club opens near the Colosseum.',
            'If you would rather be by the sea, Ostia has Sporting Beach, Wyn Club and the ethno-styled Shilling.',
          ],
        },
        {
          kind: 'links',
          heading: 'Current listings',
          items: [{ label: 'Discoteche a Roma', href: 'http://www.discotechearoma.it' }],
        },
      ],
    },
    shopping: {
      title: 'Shopping, outlets, Tax Free',
      standfirst: 'When the sales run, where the mid-price streets are, and how to reclaim 12–15% VAT.',
      panels: [
        {
          kind: 'facts',
          heading: 'Opening hours and payment',
          rows: [
            ['Usually', '10:00–19:00 (to 20:00 in summer, malls and outlets)'],
            ['City centre', 'mostly stays open through lunch'],
            ['Further out', 'many shops close between 13:00 and 16:00'],
            ['Sunday', 'almost everything open in the centre, little on the outskirts'],
            ['August', 'most shops close for at least two weeks mid-month'],
            ['Cash', 'no more than €999 per receipt'],
            ['Cards', 'accepted almost everywhere; logos on the window'],
          ],
        },
        {
          kind: 'prose',
          heading: 'Saldi — the sales',
          paragraphs: [
            'Winter: from 6–10 January through February. Summer: from early July to mid-August. These are the two windows when prices genuinely fall.',
          ],
        },
        {
          kind: 'list',
          heading: 'Luxury and boutiques',
          items: [
            'Around Piazza di Spagna, above all Via dei Condotti and Via del Babuino',
            'The side streets off Piazza di Spagna',
            'Around the Pantheon',
            'Via Veneto',
          ],
        },
        {
          kind: 'list',
          heading: 'Mid-price streets',
          items: [
            'Via Cola di Rienzo — the Vatican district',
            'Via Nazionale — near Termini station',
            'Via Barberini',
            'Via del Tritone',
          ],
        },
        {
          kind: 'list',
          heading: 'Children’s clothes',
          items: [
            'Via Cola di Rienzo 912',
            'Via Veneto 163–167',
            'Via Frattina 138',
            'Via del Corso 14',
            'Via del Tritone 208/209',
          ],
        },
        {
          kind: 'links',
          heading: 'Department stores',
          items: [
            { label: 'Coin', meta: 'Piazzale Appio 7 · metro San Giovanni' },
            { label: 'La Rinascente', meta: 'Piazza Colonna and Via del Tritone 61' },
            { label: 'Upim', meta: 'Via del Tritone 172 · metro Barberini' },
          ],
        },
        {
          kind: 'links',
          heading: 'Outlets',
          note: 'Shuttle timetables change — check the websites.',
          items: [
            { label: 'Castel Romano Designer Outlet', meta: '25 km from Rome · buses from Termini (Via Marsala) and Piazza Risorgimento', href: 'https://www.mcarthurglen.com/it/outlets/it/designer-outlet-castel-romano/' },
            { label: 'Valmontone Outlet', meta: '50 km · bus from Termini; MagicLand park next door', href: 'https://www.valmontoneoutlet.com' },
            { label: 'Soratte Outlet Village', meta: '60 km from Rome', href: 'https://www.soratteoutlet.it' },
          ],
        },
        {
          kind: 'prose',
          heading: 'Tax Free — reclaiming 12–15% VAT',
          paragraphs: [
            'Available to all travellers resident outside the European Union, including during the sales and at the outlets. Shops that issue Tax Free forms display the sticker on the window or at the door.',
            'The minimum is €155 on a single receipt, and you must ask before paying. You can collect the refund while still in Italy at the operator’s city offices; at the airport you then only need the stamp after you have your boarding pass. To collect in the city, bring the passport and card of the person named on the form. You must leave the EU within three months of the purchase.',
          ],
        },
        {
          kind: 'links',
          heading: 'The three Tax Free operators',
          items: [
            { label: 'Global Blue', meta: 'blue and white envelopes', href: 'https://www.globalblue.com' },
            { label: 'Tax Refund', meta: 'yellow and blue', href: 'https://www.taxrefund.it' },
            { label: 'Planet (Premier Tax Free)', meta: 'orange and blue', href: 'https://www.planetpayment.com' },
          ],
        },
      ],
    },
    info: {
      title: 'Practical information',
      standfirst: 'Climate, public holidays, Roma Pass, emergency numbers and embassies, on one page.',
      panels: [
        {
          kind: 'prose',
          heading: 'When to come',
          paragraphs: [
            'A subtropical Mediterranean climate: warm for most of the year, hot in July and August, with a mild rainy winter at pleasant temperatures. Truly cold days are rare and it seldom drops below zero. They say it snows in Rome once every thirty years; I cannot confirm that, I have seen it more often.',
            'The best time to come is spring and autumn, when it is warm and the days are already long.',
          ],
        },
        {
          kind: 'facts',
          heading: 'Emergency numbers',
          rows: [
            ['Ambulance', '118'],
            ['Police', '113'],
            ['Carabinieri', '112'],
            ['EU single emergency number', '112'],
            ['Lost property, Rome', '+39 06 6769 3214'],
          ],
        },
        {
          kind: 'prose',
          heading: 'Roma Pass',
          paragraphs: [
            'A cultural and travel card, sold for 48 or 72 hours, with a city map and the list of museums and sites where it is valid.',
            'The 72-hour card includes free entry to two museums from the list (the Galleria Borghese still has to be booked ahead), travel on all public transport lines, and reduced admission afterwards. The 48-hour card includes one museum, 48 hours of transport and the same reductions. Current prices are on the official site.',
          ],
        },
        {
          kind: 'links',
          heading: 'Official sites',
          items: [
            { label: 'Roma Pass', href: 'https://www.romapass.it' },
            { label: 'Turismo Roma — the city’s official tourism site', href: 'https://www.turismoroma.it' },
            { label: 'ATAC — Rome public transport', href: 'https://www.atac.roma.it' },
          ],
        },
        {
          kind: 'facts',
          heading: 'Italian public holidays',
          rows: [
            ['1 January', 'New Year'],
            ['6 January', 'Epiphany, known as Befana'],
            ['21 April', 'The founding of Rome'],
            ['25 April', 'Liberation Day'],
            ['1 May', 'Labour Day'],
            ['2 June', 'Republic Day'],
            ['29 June', 'Saints Peter and Paul, patrons of Rome'],
            ['15 August', 'Assumption, “Ferragosto”'],
            ['1 November', 'All Saints'],
            ['8 December', 'Immaculate Conception'],
            ['25 December', 'Christmas, “Natale”'],
            ['26 December', 'Saint Stephen'],
          ],
        },
        {
          kind: 'prose',
          heading: 'Embassy of Ukraine in Italy',
          paragraphs: [
            'Via Guido d’Arezzo 9, Rome 00198. Hotline: +39 06 841 26 30. In case of danger to life: +39 349 051 52 65.',
            'Email: emb_it@mfa.gov.ua · italy.mfa.gov.ua',
          ],
        },
        {
          kind: 'links',
          heading: 'Other embassies in Rome',
          items: [
            { label: 'Republic of Kazakhstan', meta: 'Via Cassia 471 · +39 06 3630 8476', href: 'https://www.gov.kz/memleket/entities/mfa-rome' },
            { label: 'Republic of Belarus', meta: 'Via delle Alpi Apuane 16 · +39 06 8208 1423', href: 'https://italy.mfa.gov.by' },
            { label: 'Russian Federation', meta: 'Via Gaeta 5 · consular section: Via Nomentana 116' },
          ],
        },
        {
          kind: 'note',
          text: 'Check addresses and numbers before you travel: they change, and I do not update this site every day.',
        },
      ],
    },
    phrasebook: {
      title: 'Traveller’s phrasebook',
      standfirst: 'This section is being written. Meanwhile, twenty phrases that will save your day.',
      draft: true,
      panels: [
        {
          kind: 'facts',
          heading: 'The essentials',
          rows: [
            ['Good day', 'Buongiorno'],
            ['Good evening', 'Buonasera'],
            ['Thank you', 'Grazie'],
            ['Please', 'Per favore'],
            ['Excuse me', 'Scusi'],
            ['Yes / no', 'Sì / No'],
            ['How much is it?', 'Quanto costa?'],
            ['The bill, please', 'Il conto, per favore'],
            ['Where is the toilet?', 'Dov’è il bagno?'],
            ['I don’t understand', 'Non capisco'],
            ['Do you speak English?', 'Parla inglese?'],
            ['Help me, please', 'Mi aiuti, per favore'],
            ['Water, please', 'Acqua, per favore'],
            ['One coffee', 'Un caffè'],
            ['Entrance / exit', 'Entrata / Uscita'],
            ['Open / closed', 'Aperto / Chiuso'],
            ['Ticket', 'Biglietto'],
            ['Left / right', 'A sinistra / A destra'],
            ['How long does it take?', 'Quanto dura?'],
            ['Goodbye', 'Arrivederci'],
          ],
        },
        {
          kind: 'note',
          text: 'The full phrasebook — transport, pharmacy, restaurant menus and bargaining at the market — is in progress.',
        },
      ],
    },
    figures: {
      title: 'History through people',
      standfirst: 'This section is being written — but here is who will be in it.',
      draft: true,
      intro: [
        'It is easier for me to tell history through people than through dates. This will hold essays on the figures who appear most often in my tours. For now, short notes.',
      ],
      panels: [
        {
          kind: 'links',
          heading: 'In progress',
          items: [
            { label: 'Trajan', meta: 'A column that recounts the conquest of Dacia in 2,400 figures' },
            { label: 'Agrippina', meta: 'A formidable beauty, Nero’s mother' },
            { label: 'Rhea Silvia', meta: 'The vestal with whom Rome begins' },
            { label: 'Lucrezia Borgia', meta: 'Daughter of Pope Alexander VI' },
            { label: 'Caravaggio', meta: 'Died without learning he had been pardoned' },
            { label: 'Bernini and Borromini', meta: 'From friends to sworn enemies' },
            { label: 'Saint Benedict', meta: 'A Rule written in a cave, in force for fifteen centuries' },
            { label: 'Pope Clement', meta: 'Martyred in Crimea, buried in Rome' },
          ],
        },
        {
          kind: 'note',
          text: 'If you want to hear about someone in particular, write and I will start with them.',
        },
      ],
    },
  },
};
