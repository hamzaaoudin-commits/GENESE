# GENÈSE — Application payante pas-à-pas

Site vitrine + application de production statique (HTML/CSS/JS vanilla) présentant et livrant l'offre GENÈSE de Strawberry Production : un accompagnement en 5 étapes, payé une fois, pour transformer une idée en entreprise lancée.

## Structure

```
genese/
├── index.html       → Accueil
├── offre.html       → Détail de l'offre
├── parcours.html     → Les 5 étapes
├── tarifs.html       → Tarif (paiement unique)
├── contact.html      → Contact / questions avant achat
├── app.html          → L'APPLICATION : paywall + wizard 5 étapes (post-paiement)
├── assets/
│   ├── style.css     → Feuille de style partagée
│   ├── config.js     → Prix + lien de paiement Stripe (SEUL endroit à éditer)
│   ├── nav.js         → Menu mobile
│   └── favicon.svg
├── robots.txt
├── sitemap.xml
└── vercel.json        → Config de déploiement Vercel
```

Aucune dépendance, aucun build. Tout fonctionne en ouvrant `index.html` directement dans un navigateur.

## Avant de mettre en ligne — 3 réglages obligatoires

### 1. Prix et paiement Stripe
Ouvre `assets/config.js` :
- `PRICE_DISPLAY` → le prix affiché partout sur le site (un seul endroit à éditer, tout le reste se met à jour automatiquement).
- `STRIPE_PAYMENT_LINK` → crée un Payment Link sur [dashboard.stripe.com](https://dashboard.stripe.com) (mode paiement unique), configure la redirection après paiement vers :
  ```
  https://tondomaine.fr/app.html?unlocked=1
  ```
  Colle ce lien Stripe dans `STRIPE_PAYMENT_LINK`.

**Limite connue du MVP :** le déblocage de l'application se fait côté client (paramètre d'URL + `localStorage`). C'est fonctionnel pour lancer et tester la demande, mais un utilisateur technique pourrait forcer l'accès sans payer en ajoutant `?unlocked=1` manuellement. Pour une vérification serveur robuste, ajoute une fonction Vercel (`/api/verify-payment`) qui vérifie la session Stripe côté serveur avant de poser le flag — recommandé avant un volume de vente significatif.

### 2. Formulaire de contact
`contact.html` pointe vers `https://formspree.io/f/REMPLACE_MOI`. Crée un compte gratuit sur [formspree.io](https://formspree.io), crée un formulaire, remplace `REMPLACE_MOI` par ton ID de formulaire dans l'attribut `action` du `<form>`.

### 3. Domaine
Remplace `REMPLACE-PAR-TON-DOMAINE.fr` dans `robots.txt` et `sitemap.xml` une fois le domaine connecté sur Vercel.

## Déployer sur Vercel

```bash
npm i -g vercel
cd genese
vercel
```
Framework Preset : **Other** (site statique). Vercel détecte automatiquement.

## Personnalisation

- Couleurs & typographies : variables CSS en haut de `assets/style.css` (`:root`)
- Email de contact : `assets/config.js` → `CONTACT_EMAIL`, et dans `contact.html`
