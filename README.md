# Akropong School for the Blind — Website

Site web **bilingue (anglais / français)** et **accessible** pour l'école
Akropong School for the Blind (Ghana), avec un **panneau d'administration** qui
permet à l'école de modifier tout le contenu elle-même, sans toucher au code.

- ⚡ Construit avec [Astro](https://astro.build) (site statique, très rapide)
- ♿ Accessibilité renforcée : navigation clavier, lecteurs d'écran, contraste
  élevé, agrandissement du texte, mode sombre
- 🌍 Bilingue EN / FR avec bouton de changement de langue
- ✍️ Panneau d'administration ([Decap CMS](https://decapcms.org)) sur `/admin`
- ☁️ Hébergement sur [Netlify](https://netlify.com)

---

## 🗂️ Ce que l'école peut modifier (sans aide)

Tout le contenu visible est modifiable depuis le panneau d'administration :

- **Paramètres & contact** : nom, e-mail, téléphone, adresse, réseaux sociaux,
  et **coordonnées de dons** (lien en ligne, Mobile Money, compte bancaire)
- **Pages** : Accueil, À propos, Programmes, Faire un don, Contact
- **Actualités** : ajouter, modifier ou supprimer des articles (avec photos)

Chaque texte existe en **deux langues** (EN et FR) côte à côte.

---

## 🚀 Mise en ligne sur Netlify (une seule fois)

1. Aller sur [netlify.com](https://app.netlify.com) et se connecter **avec GitHub**.
2. **Add new site → Import an existing project → GitHub**, puis choisir ce dépôt
   (`akropong-school-for-the-blind-website`).
3. Netlify lit automatiquement le fichier `netlify.toml` :
   - Build command : `npm run build`
   - Publish directory : `dist`
   
   Cliquer sur **Deploy**. Le site est en ligne en 1–2 minutes. 🎉

> 💡 Après le déploiement, modifiez la valeur `site:` dans `astro.config.mjs`
> pour qu'elle corresponde à votre vraie adresse Netlify (pour un bon référencement).

---

## 🔐 Activer le panneau d'administration (`/admin`)

Le panneau utilise **Netlify Identity** + **Git Gateway** pour la connexion.

1. Dans Netlify : **Site configuration → Identity → Enable Identity**.
2. Dans **Identity → Registration**, choisir **Invite only** (recommandé, pour que
   seules les personnes invitées puissent se connecter).
3. Dans **Identity → Services → Git Gateway**, cliquer **Enable Git Gateway**.
4. Dans l'onglet **Identity**, **Invite users** → entrer l'e-mail des personnes de
   l'école qui géreront le site. Elles recevront un e-mail d'invitation.
5. Elles définissent un mot de passe, puis vont sur **`votre-site.netlify.app/admin/`**
   pour se connecter et modifier le contenu.

### Si « Identity » n'est pas disponible sur votre compte Netlify

Netlify ne propose plus toujours « Identity » aux nouveaux comptes. Deux options,
sans rien changer au contenu :

- **Sveltia CMS** (recommandé) : dans `public/admin/index.html`, remplacer la
  balise `<script>` de Decap par celle de Sveltia (indiquée en commentaire dans
  le fichier). Sveltia utilise la même configuration `config.yml` et se connecte
  via GitHub.
- **Pages CMS** : aller sur [pagescms.org](https://pagescms.org), se connecter
  avec GitHub et ouvrir ce dépôt — l'édition se fait en ligne sans configuration
  serveur.

---

## 💬 Formulaire de contact

La page Contact contient un formulaire géré par **Netlify Forms** (aucun serveur
à configurer). Les messages apparaissent dans Netlify sous **Forms**. Pour être
prévenu par e-mail : **Forms → Form notifications → Add notification → Email**.

---

## ✏️ Modifier le contenu

1. Aller sur `votre-site.netlify.app/admin/` et se connecter.
2. Choisir une section (Pages, Actualités, Paramètres…), modifier les champs.
3. Cliquer sur **Publish**. Le site se met à jour automatiquement en ~1 minute.

Les **photos** se téléversent directement dans l'éditeur ; pensez à toujours
remplir la **description de l'image** (importante pour les lecteurs d'écran).

> ⚠️ Le texte de départ est un **exemple** à relire et remplacer par les vraies
> informations de l'école (histoire, chiffres, coordonnées, dons).

---

## 💻 Développement local (pour les développeurs)

```bash
npm install        # installer les dépendances
npm run dev        # lancer le site sur http://localhost:4321
npm run build      # générer le site dans dist/
npm run preview    # prévisualiser la version construite
```

Pour tester le panneau d'administration en local :

```bash
npx decap-server   # dans un terminal
npm run dev        # dans un autre terminal, puis ouvrir /admin/
```

---

## 📁 Où se trouve le contenu

| Contenu                     | Fichier(s)                         |
| --------------------------- | ---------------------------------- |
| Paramètres & contact & dons | `src/data/settings.json`           |
| Pages                       | `src/data/pages/*.json`            |
| Actualités                  | `src/data/news/*.json`             |
| Photos téléversées          | `public/uploads/`                  |
| Textes d'interface (menus)  | `src/i18n/ui.ts`                   |
| Configuration de l'admin    | `public/admin/config.yml`          |
| Styles & couleurs           | `src/styles/global.css`            |

---

## ♿ Accessibilité

- Lien « Aller au contenu », repères ARIA et HTML sémantique
- Focus clavier visible et cibles tactiles d'au moins 44 px
- Barre d'accessibilité : **taille du texte**, **contraste élevé**
- **Mode sombre** automatique selon les préférences du système
- Respect de `prefers-reduced-motion`
- Champs de description d'image obligatoires côté éditeur

---

_Un foyer où chaque enfant peut apprendre, grandir et briller._
