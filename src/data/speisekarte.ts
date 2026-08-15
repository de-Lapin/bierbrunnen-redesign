export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  quantity?: string;
  price: string;
  note?: string;
  allergens?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export type RestaurantMenu = {
  food: MenuCategory[];
  drinks: MenuCategory[];
  isDemo: boolean;
  disclaimer: string;
};

export const speisekarteData: RestaurantMenu = {
  isDemo: true,
  disclaimer:
    'Beispielhafte Menüansicht – die vollständigen Speisen, Getränke und Preise werden nach Abstimmung mit dem Restaurant eingetragen.',
  food: [
    {
      id: 'cat-herzhaft',
      title: 'Herzhafte Flammkuchen',
      items: [
        {
          id: 'food-1',
          name: 'Klassischer Flammkuchen',
          description: 'Mit Sauerrahm, feinen Zwiebeln und knusprigem Speckschnitz (Demo-Eintrag)',
          price: '11,50 €',
          note: 'Beispielansicht',
        },
        {
          id: 'food-2',
          name: 'Münsterkäse-Flammkuchen',
          description: 'Herzhafter Münsterkäse mit Zwiebeln und Rahm (Demo-Eintrag)',
          price: '12,80 €',
          note: 'Beispielansicht',
        },
        {
          id: 'food-3',
          name: 'Vegetarischer Kräuter-Flammkuchen',
          description: 'Frisches Gemüse der Saison mit feinem Kräuter-Rahm (Demo-Eintrag)',
          price: '11,90 €',
          note: 'Beispielansicht',
        },
      ],
    },
    {
      id: 'cat-suess',
      title: 'Süße Flammkuchen',
      items: [
        {
          id: 'food-4',
          name: 'Apfel-Zimt-Flammkuchen',
          description: 'Feine Apfelscheiben mit Calvados geflämmt, Zimt und Mandeln (Demo-Eintrag)',
          price: '8,50 €',
          note: 'Beispielansicht',
        },
        {
          id: 'food-5',
          name: 'Preiselbeer-Flammkuchen',
          description: 'Süßer Rahm mit fruchtigen Preiselbeeren und Krokant (Demo-Eintrag)',
          price: '8,80 €',
          note: 'Beispielansicht',
        },
      ],
    },
    {
      id: 'cat-salate',
      title: 'Hausgemachte Salate',
      items: [
        {
          id: 'food-6',
          name: 'Original Teufelssalat',
          description: 'Pikanter hausgemachter Wurst- & Käsesalat mit feiner Würze (Demo-Eintrag)',
          quantity: 'Portion',
          price: '9,80 €',
          note: 'Spezialität des Hauses',
        },
        {
          id: 'food-7',
          name: 'Bunter Blattsalat der Saison',
          description: 'Frische Blattsalate mit hausgemachtem Kräuterdressing (Demo-Eintrag)',
          quantity: 'Große Schüssel',
          price: '8,20 €',
          note: 'Beispielansicht',
        },
      ],
    },
  ],
  drinks: [
    {
      id: 'cat-fassbier',
      title: 'Fassbiere (8 Sorten frisch gezapft)',
      items: [
        {
          id: 'drink-1',
          name: 'Frisches Pils vom Fass',
          description: 'Frisch gezapftes Pilsner mit feiner Schaumkrone (Demo-Eintrag)',
          quantity: '0,4 l',
          price: '4,20 €',
          note: 'Frisch vom Fass',
        },
        {
          id: 'drink-2',
          name: 'Weizenbier vom Fass',
          description: 'Spritziges Hefe-Weizen vom Fass (Demo-Eintrag)',
          quantity: '0,5 l',
          price: '4,80 €',
          note: 'Frisch vom Fass',
        },
        {
          id: 'drink-3',
          name: 'Dunkles Spezialbier vom Fass',
          description: 'Malzig-süffiges Dunkelbier (Demo-Eintrag)',
          quantity: '0,4 l',
          price: '4,50 €',
          note: 'Frisch vom Fass',
        },
      ],
    },
    {
      id: 'cat-flaschenbier',
      title: 'Flaschenbiere (6 Sorten)',
      items: [
        {
          id: 'drink-4',
          name: 'Alkoholfreies Bier',
          description: 'Erfrischendes alkoholfreies Lagerbier (Demo-Eintrag)',
          quantity: '0,33 l Flasche',
          price: '3,80 €',
          note: 'Beispielansicht',
        },
        {
          id: 'drink-5',
          name: 'Regionales Kellerbier',
          description: 'Unfiltriertes naturtrübes Kellerbier (Demo-Eintrag)',
          quantity: '0,5 l Flasche',
          price: '4,50 €',
          note: 'Beispielansicht',
        },
      ],
    },
    {
      id: 'cat-wein',
      title: 'Kleine Weinauswahl',
      items: [
        {
          id: 'drink-6',
          name: 'Gutedel / Weißwein trocken',
          description: 'Leichter, frischer Schoppenwein aus der Region (Demo-Eintrag)',
          quantity: '0,2 l',
          price: '4,90 €',
          note: 'Beispielansicht',
        },
        {
          id: 'drink-7',
          name: 'Spätburgunder Rotwein',
          description: 'Samtiger Rotwein mit feinem Beerenaroma (Demo-Eintrag)',
          quantity: '0,2 l',
          price: '5,50 €',
          note: 'Beispielansicht',
        },
      ],
    },
    {
      id: 'cat-alkoholfrei',
      title: 'Alkoholfreie Getränke',
      items: [
        {
          id: 'drink-8',
          name: 'Mineralwasser spritzig / still',
          quantity: '0,25 l',
          price: '2,90 €',
          note: 'Beispielansicht',
        },
        {
          id: 'drink-9',
          name: 'Apfelschorle naturtrüb',
          quantity: '0,4 l',
          price: '3,80 €',
          note: 'Beispielansicht',
        },
      ],
    },
  ],
};
