# NOVA — Application payante pas-à-pas

Site vitrine + application de production statique (HTML/CSS/JS vanilla) présentant et livrant l'offre NOVA de Strawberry Production : un accompagnement en 5 étapes, payé une fois, pour transformer une idée en entreprise lancée.

## Structure

```
nova/
├── index.html              → Accueil (livrables, anneaux, ancrage de prix, fondateur)
├── offre.html              → L'offre en détail (livrables, cadence, différenciation)
├── parcours.html           → Les 5 étapes + progression en anneaux
├── methode.html            → D'où vient NOVA, qui est derrière, un cas       ← NOUVEAU
├── tarifs.html             → Tarif, ancrage, garantie 14 jours, FAQ
├── contact.html            → Qualification (5+5), FAQ, formulaire
├── app.html                → L'APPLICATION : paywall, 5 étapes, dossier exportable
├── mentions-legales.html   → Squelette à compléter                            ← NOUVEAU
├── cgv.html                → Squelette à compléter                            ← NOUVEAU
├── assets/
│   ├── style.css           → Feuille de style unique
│   ├── config.js           → Prix + lien Stripe (SEUL endroit à éditer)
│   ├── i18n.js             → Moteur + dictionnaire FR/EN (196 clés)
│   ├── app-steps.js        → Contenu des 5 étapes (app.html uniquement)
│   ├── app.js              → Logique de l'application + dossier             ← NOUVEAU
│   ├── rings.js            → Système d'anneaux (marque + progression)       ← NOUVEAU
│   ├── faq.js              → Accordéon FAQ                                  ← NOUVEAU
│   ├── nav.js              → Menu mobile accessible
│   ├── favicon.svg / -32.png / -180.png
│   └── og-image.png        → Image de partage social (1200×630)
├── robots.txt
├── sitemap.xml
└── vercel.json
```

Aucune dépendance, aucun build. Tout fonctionne en ouvrant `index.html` directement dans un navigateur.

## Avant de mettre en ligne — 3 réglages obligatoires

### 1. Domaine
Remplace `REMPLACE-PAR-TON-DOMAINE.fr` partout :
```bash
grep -rl "REMPLACE-PAR-TON-DOMAINE.fr" . | xargs sed -i '' 's|REMPLACE-PAR-TON-DOMAINE.fr|tondomaine.fr|g'
```
Concerne les `canonical`, `hreflang`, `og:url`, `og:image`, le JSON-LD, `robots.txt` et `sitemap.xml`.

### 2. Prix et paiement Stripe
Ouvre `assets/config.js` :
- `PRICE_DISPLAY` → le prix affiché sur le site.
- `STRIPE_PAYMENT_LINK` → ton Payment Link Stripe.

⚠️ Le prix apparaît aussi **en dur** dans le `<title>`, la `meta description`, les balises `og:` de `tarifs.html` et dans le JSON-LD (`index.html`, `tarifs.html`). Ces valeurs ne peuvent pas être injectées par JS sans nuire au SEO : **à mettre à jour manuellement** en cas de changement de prix.

### 3. Formulaire de contact
`contact.html` pointe vers `https://formspree.io/f/REMPLACE_MOI`. Crée un formulaire sur formspree.io et remplace l'ID.


## ⚠️ À COMPLÉTER avant mise en ligne — contenu humain

Les marqueurs `[[À COMPLÉTER]]` et les badges rouges « à compléter » sont visibles directement dans les pages. Je n'ai pas inventé ces contenus : un faux nom, un faux cas client ou un faux chiffre de marché sur un site commercial vous exposent réellement.

| Où | Quoi | Pourquoi c'est bloquant |
|---|---|---|
| `methode.html` | Votre nom, votre photo, 3 paragraphes de parcours | Un produit à 999 € vendu par un domaine inconnu sans visage ne convertit pas |
| `methode.html` | Un cas réel documenté (projet, positionnement retenu, nom, résultat) | C'est votre meilleure preuve, et la seule que rien ne remplace |
| `index.html` | Bloc fondateur (nom, photo, 2-3 phrases) | Idem, en version courte |
| `index.html` + `tarifs.html` | Les deux `[[BUDGET À VÉRIFIER]]` du tableau d'ancrage | **Ne publiez pas de chiffres inventés** : un tarif de marché faux sur une page prix est de la publicité trompeuse. Sourcez-les ou remplacez la colonne par une formulation qualitative |
| `mentions-legales.html` | Tous les champs éditeur, hébergeur, RGPD | Obligation légale |
| `cgv.html` | Tout, en particulier la renonciation au droit de rétractation (art. L221-28) | Sans renonciation expresse recueillie à l'achat, 14 jours de rétractation s'appliquent de plein droit |
| `tarifs.html` | La garantie 14 jours est **annoncée** sur la page | Vous devez pouvoir l'honorer, et la décrire dans les CGV |
| `assets/og-image.png` | Refaire avec la vraie typo Fraunces | La version actuelle utilise une police de repli |

## ⚠️ Limite critique du MVP — à traiter avant toute vente

Le déblocage de l'application se fait **côté client** (`?unlocked=1` + `localStorage`). N'importe qui peut accéder au produit sans payer en ajoutant `?unlocked=1` à l'URL.

De plus, la progression n'est stockée **que** dans le `localStorage` du navigateur : changement d'appareil, de navigateur ou nettoyage du cache = travail perdu, alors que l'interface promet « Rien n'est perdu ».

**À faire avant de vendre :**
- Stripe Checkout (et non Payment Link) → `success_url` avec `session_id`
- Fonction Vercel `/api/verify` : `stripe.checkout.sessions.retrieve()` côté serveur → cookie httpOnly signé
- Comptes utilisateurs (magic link) + persistance serveur (Supabase ou Vercel KV)

## Éditer les textes

Le FR est écrit **en dur dans le HTML** (pour le référencement) **et** présent dans `assets/i18n.js` (pour le basculement FR/EN). **Si vous modifiez un texte, modifiez-le aux deux endroits**, sinon le texte changera en repassant en français.

Le contenu des 5 étapes de l'application est dans `assets/app-steps.js`.

## Le dossier de marque

Quand les 5 étapes sont complétées, un bouton ouvre le dossier compilé. L'export PDF passe par l'impression du navigateur (`window.print()`) avec une feuille `@media print` dédiée : aucune dépendance externe. Testez le rendu sur Chrome et Safari avant lancement.

## Déployer sur Vercel

```bash
npm i -g vercel
cd nova
vercel
```
Framework Preset : **Other** (site statique).

## Personnalisation

- Couleurs & typographies : variables CSS en haut de `assets/style.css` (`:root`)
- Textes : `assets/i18n.js` (`DICT`) — le FR est aussi présent en dur dans le HTML pour le SEO, **penser à modifier les deux**
- Contenu des 5 étapes de l'app : `assets/app-steps.js`
- Email de contact : `assets/config.js` → `CONTACT_EMAIL`, et dans `contact.html`
