// Interface labels (navigation, buttons, etc.) in English and French.
// Content text (page copy, news, programs) lives in the editable JSON data
// files under src/data/ and is managed through the /admin panel.

export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.admissions': 'Admissions',
    'nav.news': 'News',
    'nav.donate': 'Donate',
    'nav.contact': 'Contact',

    'a11y.skip': 'Skip to main content',
    'a11y.toolbar': 'Accessibility options',
    'a11y.textSize': 'Text size',
    'a11y.textNormal': 'Normal text size',
    'a11y.textLarge': 'Large text',
    'a11y.textXLarge': 'Extra large text',
    'a11y.contrast': 'High contrast',
    'a11y.contrastOn': 'Turn on high contrast',
    'a11y.contrastOff': 'Turn off high contrast',
    'a11y.openMenu': 'Open menu',
    'a11y.closeMenu': 'Close menu',
    'a11y.language': 'Choose language',

    'btn.donateNow': 'Donate now',
    'btn.readMore': 'Read more',
    'btn.learnMore': 'Learn more',
    'btn.allNews': 'All news',
    'btn.getInvolved': 'Get involved',
    'btn.backToNews': 'Back to all news',

    'home.latestNews': 'Latest news',
    'home.noNews': 'News will appear here soon.',
    'news.title': 'News & Stories',
    'news.empty': 'No articles have been published yet.',
    'news.published': 'Published',
    'programs.title': 'Our Programs',
    'contact.title': 'Contact us',
    'contact.reach': 'How to reach us',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.follow': 'Follow us',
    'donate.give': 'Ways to give',
    'donate.online': 'Give online',
    'donate.mobileMoney': 'Mobile Money',
    'donate.bank': 'Bank transfer',
    'donate.bankName': 'Bank',
    'donate.accountNumber': 'Account number',

    'footer.quickLinks': 'Quick links',
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'A home for every child to learn, grow and shine.',

    'notFound.title': 'Page not found',
    'notFound.text': 'Sorry, we could not find that page.',
    'notFound.home': 'Go to homepage',

    'lang.choose': 'Choose your language',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.programs': 'Programmes',
    'nav.admissions': 'Inscriptions',
    'nav.news': 'Actualités',
    'nav.donate': 'Faire un don',
    'nav.contact': 'Contact',

    'a11y.skip': 'Aller au contenu principal',
    'a11y.toolbar': "Options d'accessibilité",
    'a11y.textSize': 'Taille du texte',
    'a11y.textNormal': 'Taille normale',
    'a11y.textLarge': 'Grand texte',
    'a11y.textXLarge': 'Très grand texte',
    'a11y.contrast': 'Contraste élevé',
    'a11y.contrastOn': 'Activer le contraste élevé',
    'a11y.contrastOff': 'Désactiver le contraste élevé',
    'a11y.openMenu': 'Ouvrir le menu',
    'a11y.closeMenu': 'Fermer le menu',
    'a11y.language': 'Choisir la langue',

    'btn.donateNow': 'Faire un don',
    'btn.readMore': 'Lire la suite',
    'btn.learnMore': 'En savoir plus',
    'btn.allNews': 'Toutes les actualités',
    'btn.getInvolved': "S'impliquer",
    'btn.backToNews': 'Retour aux actualités',

    'home.latestNews': 'Dernières actualités',
    'home.noNews': 'Les actualités apparaîtront ici bientôt.',
    'news.title': 'Actualités & Témoignages',
    'news.empty': "Aucun article n'a encore été publié.",
    'news.published': 'Publié le',
    'programs.title': 'Nos programmes',
    'contact.title': 'Nous contacter',
    'contact.reach': 'Comment nous joindre',
    'contact.email': 'E-mail',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',
    'contact.follow': 'Suivez-nous',
    'donate.give': 'Comment donner',
    'donate.online': 'Donner en ligne',
    'donate.mobileMoney': 'Mobile Money',
    'donate.bank': 'Virement bancaire',
    'donate.bankName': 'Banque',
    'donate.accountNumber': 'Numéro de compte',

    'footer.quickLinks': 'Liens rapides',
    'footer.rights': 'Tous droits réservés.',
    'footer.builtWith': 'Un foyer où chaque enfant peut apprendre, grandir et briller.',

    'notFound.title': 'Page introuvable',
    'notFound.text': "Désolé, nous n'avons pas trouvé cette page.",
    'notFound.home': "Aller à l'accueil",

    'lang.choose': 'Choisissez votre langue',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
