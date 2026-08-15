export interface WochenmenuItem {
  id: string;
  title: string;
  description?: string;
  price?: string;
  note?: string;
}

export interface WochenmenuData {
  validityPeriod: string;
  disclaimer: string;
  items: WochenmenuItem[];
}

export const wochenmenuData: WochenmenuData = {
  validityPeriod: 'Aktuelle Wochenempfehlungen (Beispielansicht)',
  disclaimer:
    'Beispielhafte Darstellung – die aktuellen Wochenangebote werden nach Abstimmung mit dem Restaurant eingetragen.',
  items: [
    {
      id: 'wm-1',
      title: 'Klassischer Flammkuchen mit Rahm, Zwiebeln & Speck',
      description: 'Knusprig frisch aus dem Ofen serviert (Demo-Beispiel)',
      price: '11,50 €',
      note: 'Mo – Fr ab 16:00 Uhr',
    },
    {
      id: 'wm-2',
      title: 'Hausgemachter Teufelssalat mit frischem Landbrot',
      description: 'Pikanter Wurst- & Käsesalat nach Tradition (Demo-Beispiel)',
      price: '9,80 €',
      note: 'Täglich frisch',
    },
    {
      id: 'wm-3',
      title: 'Süßer Apfel-Flammkuchen mit Zimt & Mandeln',
      description: 'Feines Dessert aus der Backstube (Demo-Beispiel)',
      price: '8,50 €',
      note: 'Empfehlung des Hauses',
    },
  ],
};
