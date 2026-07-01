/*
  GENÈSE — Configuration centrale
  ---------------------------------
  Modifie ces deux valeurs pour ajuster le prix et le paiement partout sur le site.
  Un seul endroit à toucher — rien à chercher/remplacer dans les fichiers HTML.
*/

const GENESE_CONFIG = {
  // Prix affiché (texte libre, ex: "1 900 €")
  PRICE_DISPLAY: "1 900 €",

  // Lien de paiement Stripe (Payment Link, PAS de clé API dans ce fichier).
  // Crée-le sur dashboard.stripe.com > Payment Links > Paiement unique.
  // Dans "After payment", configure une redirection vers :
  //   https://tondomaine.fr/app.html?unlocked=1
  // TODO: remplacer par ton vrai lien avant mise en ligne.
  STRIPE_PAYMENT_LINK: "https://buy.stripe.com/REMPLACE_MOI",

  // Email de contact
  CONTACT_EMAIL: "contact@strawberryproduction.fr"
};
