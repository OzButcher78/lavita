export type Language = 'hr' | 'en';

export interface ContentSection {
  title: string;
  body: string[];
}

export interface LocalizedContent {
  nav: {
    home: string;
    about: string;
    gallery: string;
    location: string;
    contact: string;
    book: string;
  };
  hero: {
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string[];
    features: {
      bedroom: string;
      kitchen: string;
      living: string;
      terrace: string;
      privacy: string;
      nature: string;
    }
  };
  location: {
    title: string;
    points: {
      wedding: string;
      castles: string;
      wellness: string;
      golf: string;
      train: string;
    }
  };
  gallery: {
    title: string;
    viewAll: string;
  };
  footer: {
    rights: string;
    slogan: string;
    contact_title: string;
    follow_title: string;
  }
}

export const CONTENT: Record<Language, LocalizedContent> = {
  hr: {
    nav: {
      home: "Početna",
      about: "Apartman",
      gallery: "Galerija",
      location: "Okruženje",
      contact: "Kontakt",
      book: "Rezerviraj",
    },
    hero: {
      subtitle: "Dobrodošli u Apartman La Vita — mjesto gdje se udobnost, priroda i jednostavan život skladno spajaju.",
      cta: "Započnite Odmor",
    },
    about: {
      title: "Vaša oaza mira",
      description: [
        "Smješten u srcu Prigorja Brdovečkog, naš apartman nudi mir i privatnost, a istovremeno se nalazi nadomak brojnih atrakcija.",
        "Apartman se sastoji od spavaće sobe s bračnim krevetom, moderno opremljene kuhinje, udobnog dnevnog boravka te sunčane terase s pogledom na zelenilo — savršen prostor za jutarnju kavu ili večernje opuštanje.",
        "Uz potpuno slobodan pristup apartmanu i zagarantiranu diskreciju, osjećat ćete se kao kod kuće. Idealan izbor za mladence, goste svadbi ili romantične vikende."
      ],
      features: {
        bedroom: "Spavaća soba",
        kitchen: "Moderna kuhinja",
        living: "Dnevni boravak",
        terrace: "Sunčana terasa",
        privacy: "Potpuna privatnost",
        nature: "Pogled na prirodu",
      }
    },
    location: {
      title: "Istražite Okolicu",
      points: {
        wedding: "Wedding Resort Corberon – savršeno za mladence i goste.",
        castles: "Povijesni Dvorac Januševec i Dvorac Jelačićevih.",
        wellness: "Opuštanje u Termama Paradiso i Termama Čatež.",
        golf: "Golf tereni u Zaprešiću za aktivan odmor.",
        train: "Željeznička stanica Savski Marof – brza veza sa Zagrebom.",
      }
    },
    gallery: {
      title: "Galerija Fotografija",
      viewAll: "Prikaži sve fotografije",
    },
    footer: {
      rights: "Sva prava pridržana.",
      slogan: "La Vita – jer život je lijep. 🍁🍂",
      contact_title: "Kontakt",
      follow_title: "Pratite Nas"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "The Apartment",
      gallery: "Gallery",
      location: "Surroundings",
      contact: "Contact",
      book: "Book Now",
    },
    hero: {
      subtitle: "Welcome to Apartment La Vita — a place where comfort, nature, and simple living come together in perfect harmony.",
      cta: "Start Your Stay",
    },
    about: {
      title: "Your Peace of Mind",
      description: [
        "Located in the heart of Prigorje Brdovečko, our apartment offers peace and privacy while being close to numerous attractions.",
        "The apartment features a bedroom with a double bed, a modern fully equipped kitchen, a cozy living room, and a sunny terrace overlooking the greenery — the perfect spot for morning coffee or evening relaxation.",
        "With full private access to the apartment and guaranteed discretion, you will feel right at home. An excellent choice for newlyweds, wedding guests, or romantic weekend getaways."
      ],
      features: {
        bedroom: "Double Bedroom",
        kitchen: "Modern Kitchen",
        living: "Cozy Living Room",
        terrace: "Sunny Terrace",
        privacy: "Full Privacy",
        nature: "Nature Views",
      }
    },
    location: {
      title: "Explore the Surroundings",
      points: {
        wedding: "Wedding Resort Corberon – ideal for newlyweds and guests.",
        castles: "Historic Januševec Castle and Jelačić Castle.",
        wellness: "Relaxation at Terme Paradiso and Terme Čatež.",
        golf: "Golf courses in Zaprešić for an active holiday.",
        train: "Savski Marof train station – fast connection to Zagreb.",
      }
    },
    gallery: {
      title: "Photo Gallery",
      viewAll: "View All Photos",
    },
    footer: {
      rights: "All rights reserved.",
      slogan: "La Vita – because life is beautiful. 🍁🍂",
      contact_title: "Contact",
      follow_title: "Follow Us"
    }
  }
};