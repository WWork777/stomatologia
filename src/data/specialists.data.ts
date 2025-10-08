interface Specialists {
  id: string;
  name: string;
  description: string;
  pageDescription?: string;
  stage?: string;
  waLink?: string;
  Link?: string;
  imageLink: string;
  services?: string[];
}

export const specialistsData: Record<string, Specialists> = {
  "marina-sergeevna-ivanova": {
    id: "marina-sergeevna-ivanova",
    name: "Иванова Мария Сергеевна",
    description: "Главный врач, врач-стоматолог терапевт",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Ивановой Марии Сергеевне",
    stage: "17 лет",
    services: [
      "detskaya-stomatologiya",
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
    ],
    imageLink: "/specialists/ivanova.jpg",
  },
  "stanislav-sergeevich-bondarev": {
    id: "stanislav-sergeevich-bondarev",
    name: "Бондарев Станислав Сергеевич",
    description: "Врач стоматолог ортопед",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Бондареву Станиславу Сергеевичу",
    stage: "16 лет",
    services: ["protezirovanie-zubov", "protezirovanie-zubov-na-implantah"],
    imageLink: "/specialists/bondarev-1.jpg",
  },
  "yuliya-sergeevna-vasileva": {
    id: "yuliya-sergeevna-vasileva",
    name: "Васильева Юлия Сергеевна",
    description: "Врач-стоматолог терепевт",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Васильевой Юлии Сергеевне",
    stage: "12 лет",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
    ],
    imageLink: "/specialists/vasileva-1.jpg",
  },
  "ekaterina-dmitrievna-markelova": {
    id: "ekaterina-dmitrievna-markelova",
    name: "Маркелова Екатерина Дмитриева",
    description:
      "Врач-стоматолог хирург имплантолог, врач-стоматолог ортопед, врач-стоматолог тератевт",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Маркеловой Екатерине Дмитриевне",
    stage: "12 лет",
    services: [
      "implantatsiya-zubov",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
      "udalenie-zubov",
      "ambulatornye-hirurgicheskie-operacii",
    ],
    imageLink: "/specialists/markelova-1.jpg",
  },
  "tamara-sergeevna-klyunk": {
    id: "tamara-sergeevna-klyunk",
    name: "Клюнк Тамара Сергеевна",
    description: "Врач-стоматолог детский, врач-стоматолог терапевт",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Клюнк Тамаре Сергеевне",
    stage: "23 года",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "detskaya-stomatologiya",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
    ],
    imageLink: "/specialists/klyunk-1.jpg",
  },
  "dmitrij-valerevich-ivchenko": {
    id: "dmitrij-valerevich-ivchenko",
    name: "Ивченко Дмитрий Валерьвич",
    description: "Врач-стоматолог общей практики",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Ивченко Дмитрию Валерьвичу",
    stage: "4 года",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
      "ambulatornye-hirurgicheskie-operacii",
    ],
    imageLink: "/specialists/ivchenko-dv-1.jpg",
  },
  "maksim-sergeevich-chernov": {
    id: "maksim-sergeevich-chernov",
    name: "Чернов Максим Сергеевич",
    description: "Врач-стоматолог ортодонт",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Чернову Максиму Сергеевичу",
    stage: "22 года",
    services: ["ispravlenie-prikusa"],
    imageLink: "/specialists/chernov-1.jpg",
  },
  "lobanczov-ilya-maksimovich": {
    id: "lobanczov-ilya-maksimovich",
    name: "Лобанцов Илья Максимович",
    description: "Врач-стоматолог ортодонт",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Лобанцову Илье Максимовичу",
    stage: "3 года",
    services: ["ispravlenie-prikusa"],
    imageLink: "/specialists/lobanczov-1.jpg",
  },
  "elena-gennadevna-lobanova": {
    id: "elena-gennadevna-lobanova",
    name: "Лобанова Елена Генадьевна",
    description: "Врач стоматолог-терапевт",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Лобановой Елене Генадьевне",
    stage: "31 года",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
    ],
    imageLink: "/specialists/lobanova-1.jpg",
  },
  "anastasiya-aleksandrovna-terskih": {
    id: "anastasiya-aleksandrovna-terskih",
    name: "Терских Анастасия Александровна",
    description: "Врач-стоматолог общей практики",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Терских Анастасии Александровне",
    stage: "4 года",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
      "protezirovanie-zubov",
    ],
    imageLink: "/specialists/terskih-1.jpg",
  },
  "anna-evgenevna-terehina": {
    id: "anna-evgenevna-terehina",
    name: "Терехина Анна Евгеньевна",
    description: "Врач-стоматолог общей практики",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Терехиной Анне Евгеньевне",
    stage: "2 года",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "lechenie-zubov",
    ],
    imageLink: "/specialists/terehina-1.jpg",
  },
  "kazymbekova-meerim-muktarbekovna": {
    id: "kazymbekova-meerim-muktarbekovna",
    name: "Казамбекова Мээрим Муктарбековна",
    description: "Врач-стоматолог общей практики",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Казамбековой Мээрим Муктарбековне",
    stage: "7 лет",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
    ],
    imageLink: "/specialists/kazymbekova-1.jpg",
  },
  "vasilij-vasilevich-pogodin": {
    id: "vasilij-vasilevich-pogodin",
    name: "Погодин Василий Васильевич",
    description: "Врач-стоматолог ортопед",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Погодину Василию Васильевичу",
    stage: "33 года",
    services: ["protezirovanie-zubov", "protezirovanie-zubov-na-implantah"],
    imageLink: "/specialists/pogodin.jpg",
  },
  "anastasiya-konstantinovna-potrebnikova": {
    id: "anastasiya-konstantinovna-potrebnikova",
    name: "Потребникова Анастасия Константиновна",
    description: "Врач-стоматолог общей практики",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Потребниковой Анастасии Константиновне",
    stage: "3 года",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "detskaya-stomatologiya",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
    ],
    imageLink: "/specialists/potrebnikova-2.jpg",
  },
  "burilova-mariya-dmitrievna": {
    id: "burilova-mariya-dmitrievna",
    name: "Бурилова Мария Дмитриевна",
    description: "Врач-стоматолог-терапевт",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Буриловой Марии Дмитриевне",
    stage: "8 лет",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "detskaya-stomatologiya",
      "lechenie-zubov",
      "esteticheskoe-vosstanovlenie-zubov",
    ],
    imageLink: "/specialists/burilova-1.jpg",
  },
  "evseenko-yana-igorevna": {
    id: "evseenko-yana-igorevna",
    name: "Евсеенко Яна Игоревна",
    description: "Врач-стоматолог общей практики",
    waLink:
      "https://wa.me/79029830005?text=Здравствуйте хочу записаться к сепциалисту Евсеенко Яне Игоревне",
    stage: "4 лет",
    services: [
      "professionalnaya-gigiena",
      "otbelivanie-zubov",
      "lechenie-zubov",
      "detskaya-stomatologiya",
      "esteticheskoe-vosstanovlenie-zubov",
      "ambulatornye-hirurgicheskie-operacii",
    ],
    imageLink: "/specialists/evseenko-1.jpg",
  },
  "shtadelman-varvara-petrovna": {
    id: "shtadelman-varvara-petrovna",
    name: "Штадельман Варвара Петровна",
    description: "Страшая медицинская сестра",
    stage: "",
    imageLink: "/specialists/shtadelman-1.jpg",
  },
  "inna-andreevna-panova": {
    id: "inna-andreevna-panova",
    name: "Панова Инна Андреевна",
    description: "Ассистент врача-стоматолога",
    stage: "",
    imageLink: "/specialists/panova-1.jpg",
  },
  "nikita-konstantinovich-shkurat": {
    id: "nikita-konstantinovich-shkurat",
    name: "Шкурат Никита Константинович",
    description: "Ассистент врача-стоматолога, рентгенолаборант",
    stage: "",
    imageLink: "/specialists/shkurat-1.jpg",
  },
  "aleksandra-aleksandrovna-kaslina": {
    id: "aleksandra-aleksandrovna-kaslina",
    name: "Каслина Александра Александровна",
    description: "Ассистент врача-стоматолога",
    stage: "",
    imageLink: "/specialists/kaslina-1.jpg",
  },
  "anzhelika-vitalevna-amelchenko": {
    id: "anzhelika-vitalevna-amelchenko",
    name: "Амельченко Анжелика Витальевна",
    description: "Ассистент врача-стоматолога",
    stage: "",
    imageLink: "/specialists/amelchenko-1.jpg",
  },
  "smirnova-kristina-maksimovna": {
    id: "smirnova-kristina-maksimovna",
    name: "Смирнова Кристина Максимовна",
    description: "Ассистент врача-стоматолога",
    stage: "",
    imageLink: "/specialists/smirnova-1.jpg",
  },
  "klimova-marina-olegovna": {
    id: "klimova-marina-olegovna",
    name: "Климова Марина Олеговна",
    description: "Ассистент врача-стоматолога",
    stage: "",
    imageLink: "/specialists/klimova-1.jpg",
  },
  "pogodin-petr-vasilevich": {
    id: "pogodin-petr-vasilevich",
    name: "Погодин Петр Васильевич",
    description: "Ассистент врача-стоматолога",
    stage: "",
    imageLink: "/specialists/pogodin (1).jpg",
  },
  "gerasimov-vladislav-vyacheslavovich": {
    id: "gerasimov-vladislav-vyacheslavovich",
    name: "Герасимов Владислав Вячеславович",
    description: "Ассистент врача-стоматолога",
    stage: "",
    imageLink: "/specialists/gerasimov-1.jpg",
  },
  "pantyuhina-darya-vladimirovna": {
    id: "pantyuhina-darya-vladimirovna",
    name: "Пантюхина Дарья Владимировна",
    description: "Администратор координатор",
    stage: "",
    imageLink: "/specialists/pantyuhina-1.jpg",
  },
  "balashova-alina-alekseevna": {
    id: "balashova-alina-alekseevna",
    name: "Балашова Алина Алексеевна",
    description: "Администратор координатор",
    stage: "",
    imageLink: "/specialists/balashova-1.jpg",
  },
  "shumkova-vera-alekseevna": {
    id: "shumkova-vera-alekseevna",
    name: "Шумкова Вера Алексеевна",
    description: "Администратор",
    stage: "",
    imageLink: "/specialists/shumkova-1.jpg",
  },
  "ivchenko-valerij-nikolaevich": {
    id: "ivchenko-valerij-nikolaevich",
    name: "Ивченко Валерий Николаевич",
    description: "Директор",
    stage: "",
    imageLink: "/specialists/ivchenko.jpg",
  },
  "tatyana-evgenevna-zolotuhina": {
    id: "tatyana-evgenevna-zolotuhina",
    name: "Золотухина Татьяна Евгеньевна",
    description: "Заместитель директора",
    stage: "",
    imageLink: "/specialists/img_01001.jpg",
  },
};
