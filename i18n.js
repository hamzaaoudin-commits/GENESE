/*
  NOVA — moteur i18n
  -------------------
  - Traductions FR/EN dans DICT (clé = attribut data-i18n dans le HTML).
  - Le FR est AUSSI écrit en dur dans le HTML pour le référencement :
    si vous modifiez un texte, modifiez-le AUX DEUX ENDROITS.
  - Langue résolue dans l'ordre : ?lang= dans l'URL > localStorage > FR par défaut.
*/

const DICT = {
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.offer": { fr: "L'offre", en: "The offer" },
  "nav.journey": { fr: "Le parcours", en: "The journey" },
  "nav.method": { fr: "La méthode", en: "The method" },
  "nav.pricing": { fr: "Tarif", en: "Pricing" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.start": { fr: "Commencer", en: "Start" },
  "footer.house": { fr: "Strawberry Production", en: "Strawberry Production" },
  "footer.quote": { fr: "On ne vous livre pas une marque. On la fait naître avec vous.", en: "We don't hand you a brand. We bring it to life with you." },
  "footer.sign": { fr: "Architecture de marque — Paris", en: "Brand Narrative Architecture — Paris" },
  "footer.legal": { fr: "Mentions légales", en: "Legal notice" },
  "footer.terms": { fr: "CGV", en: "Terms of sale" },
  "index.eyebrow": { fr: "Strawberry Production — Application", en: "Strawberry Production — Application" },
  "index.subtitle": { fr: "Cinq étapes pour construire le nom, le positionnement, l'identité, le site et le plan de lancement de votre entreprise.", en: "Five steps to build your company's name, positioning, identity, site and launch plan." },
  "index.manifesto": { fr: "« On ne vous livre pas une marque.<br>On la fait naître avec vous. »", en: "\"We don't hand you a brand.<br>We bring it to life with you.\"" },
  "index.cta.discover": { fr: "Voir ce que vous obtenez", en: "See what you get" },
  "index.cta.start": { fr: "Commencer mon parcours", en: "Start my journey" },
  "index.out.label": { fr: "Ce que vous obtenez", en: "What you get" },
  "index.out.h2": { fr: "À la fin des cinq étapes, vous repartez avec un dossier de marque complet.", en: "At the end of the five steps, you leave with a complete brand dossier." },
  "index.out.lead": { fr: "Pas des notes éparpillées : un document unique, exportable, qui contient tout ce dont vous avez besoin pour lancer.", en: "Not scattered notes: a single, exportable document containing everything you need to launch." },
  "index.out.1.k": { fr: "LIVRABLE 01", en: "OUTPUT 01" },
  "index.out.1.t": { fr: "Votre projet, formulé", en: "Your project, articulated" },
  "index.out.1.p": { fr: "Le problème que vous résolvez, pour qui, et pourquoi maintenant — écrit en une page que vous pouvez montrer à n'importe qui.", en: "The problem you solve, for whom, and why now — written on one page you can show anyone." },
  "index.out.2.k": { fr: "LIVRABLE 02", en: "OUTPUT 02" },
  "index.out.2.t": { fr: "Votre positionnement", en: "Your positioning" },
  "index.out.2.p": { fr: "La phrase que votre marque peut dire et que personne d'autre ne peut reprendre. Celle que vous défendrez pendant des années.", en: "The sentence your brand can say that no one else can take. The one you'll defend for years." },
  "index.out.3.k": { fr: "LIVRABLE 03", en: "OUTPUT 03" },
  "index.out.3.t": { fr: "Votre nom et votre univers", en: "Your name and your world" },
  "index.out.3.p": { fr: "Le nom retenu, le ton de voix, les directions visuelles et verbales — cohérents avec le positionnement que vous venez d'acter.", en: "The chosen name, tone of voice, visual and verbal directions — coherent with the positioning you just settled." },
  "index.out.4.k": { fr: "LIVRABLE 04", en: "OUTPUT 04" },
  "index.out.4.t": { fr: "L'architecture de votre site", en: "Your site architecture" },
  "index.out.4.p": { fr: "Les pages nécessaires, ce que chacune doit dire, dans quel ordre. De quoi briefer un développeur ou construire vous-même.", en: "The pages needed, what each must say, in what order. Enough to brief a developer or build it yourself." },
  "index.out.5.k": { fr: "LIVRABLE 05", en: "OUTPUT 05" },
  "index.out.5.t": { fr: "Votre plan à 90 jours", en: "Your 90-day plan" },
  "index.out.5.p": { fr: "Les actions des trois premiers mois d'existence publique, choisies par vous, à votre portée réelle.", en: "The actions for your first three months in public, chosen by you, within your real reach." },
  "index.how.label": { fr: "Comment ça se passe", en: "How it works" },
  "index.how.h2": { fr: "Cinq étapes. Chacune s'appuie sur la précédente.", en: "Five steps. Each builds on the one before." },
  "index.how.lead": { fr: "L'application pose les questions dans l'ordre où elles se posent vraiment. Vous répondez, elle garde la cohérence d'une étape à l'autre.", en: "The application asks the questions in the order they actually arise. You answer, it keeps coherence from one step to the next." },
  "index.band.statement": { fr: "Vous êtes la seule personne qui <em>sait</em> ce que vous voulez construire.", en: "You are the only person who <em>knows</em> what you want to build." },
  "index.band.p": { fr: "NOVA transforme cette connaissance en fondations utilisables. C'est tout le travail, et c'est le seul qui compte.", en: "NOVA turns that knowledge into usable foundations. That's the whole work, and it's the only one that counts." },
  "index.anchor.label": { fr: "Le point de comparaison", en: "The point of comparison" },
  "index.anchor.h2": { fr: "Ce que coûte la même chose, ailleurs.", en: "What the same thing costs elsewhere." },
  "index.anchor.head.who": { fr: "Option", en: "Option" },
  "index.anchor.head.cost": { fr: "Budget", en: "Budget" },
  "index.anchor.head.what": { fr: "Ce qui se passe", en: "What happens" },
  "index.who.label": { fr: "Qui est derrière", en: "Who's behind it" },
  "index.who.h2": { fr: "Une méthode utilisée avant d'être vendue.", en: "A method used before it was sold." },
  "index.who.cta": { fr: "Voir la méthode et qui l'a construite", en: "See the method and who built it" },
  "index.close.label": { fr: "Pour commencer", en: "To begin" },
  "index.close.quote": { fr: "Une idée claire, cinq étapes, un dossier de marque à la sortie.", en: "A clear idea, five steps, a brand dossier at the end." },
  "index.close.cta1": { fr: "Voir le parcours en détail", en: "See the journey in detail" },
  "index.close.cta2": { fr: "Voir le tarif", en: "See the price" },
  "step.1.t": { fr: "Clarification de l'idée", en: "Clarifying the idea" },
  "step.2.t": { fr: "Validation du positionnement", en: "Validating the positioning" },
  "step.3.t": { fr: "Nom et identité", en: "Name and identity" },
  "step.4.t": { fr: "Le site", en: "The site" },
  "step.5.t": { fr: "Plan de lancement à 90 jours", en: "90-day launch plan" },
  "offer.h1": { fr: "L'<em>offre</em>, en détail", en: "The <em>offer</em>, in detail" },
  "offer.sub": { fr: "Une application en cinq étapes qui produit un dossier de marque complet, construit avec vous.", en: "A five-step application that produces a complete brand dossier, built with you." },
  "offer.what.label": { fr: "Ce que c'est", en: "What it is" },
  "offer.what.h2": { fr: "Un cadre de travail structuré, pas un fichier livré.", en: "A structured working framework, not a delivered file." },
  "offer.what.lead": { fr: "NOVA est la méthode que Strawberry Production applique sur ses propres projets, ouverte et packagée en application. Chaque étape pose les questions dans l'ordre où elles se posent vraiment, garde la mémoire de vos réponses, et s'en sert pour cadrer la suivante. À la fin, tout ce que vous avez écrit se compile en un dossier exportable.", en: "NOVA is the method Strawberry Production applies to its own projects, opened up and packaged as an application. Each step asks the questions in the order they actually arise, remembers your answers, and uses them to frame the next one. At the end, everything you've written compiles into an exportable dossier." },
  "offer.cadence.label": { fr: "Le rythme", en: "The pace" },
  "offer.cadence.h2": { fr: "Comptez trois à quatre semaines.", en: "Plan for three to four weeks." },
  "offer.cadence.lead": { fr: "L'accès est illimité et sans abonnement — mais un parcours qu'on étale ne se termine jamais. Voici la cadence qui fonctionne, à raison de deux sessions d'une heure par semaine.", en: "Access is unlimited and subscription-free — but a journey you spread out never ends. Here's the pace that works, at two one-hour sessions a week." },
  "offer.cadence.w1": { fr: "Semaine 1", en: "Week 1" },
  "offer.cadence.w1.p": { fr: "Étapes 1 et 2. Le plus exigeant : c'est là que le projet devient lisible.", en: "Steps 1 and 2. The most demanding: this is where the project becomes legible." },
  "offer.cadence.w2": { fr: "Semaine 2", en: "Week 2" },
  "offer.cadence.w2.p": { fr: "Étape 3. Laissez décanter deux ou trois jours avant de trancher le nom.", en: "Step 3. Let it settle two or three days before settling on the name." },
  "offer.cadence.w3": { fr: "Semaine 3", en: "Week 3" },
  "offer.cadence.w3.p": { fr: "Étape 4. L'architecture découle presque d'elle-même de ce qui précède.", en: "Step 4. The architecture almost follows on its own from what came before." },
  "offer.cadence.w4": { fr: "Semaine 4", en: "Week 4" },
  "offer.cadence.w4.p": { fr: "Étape 5 et export du dossier. Vous sortez avec un plan daté.", en: "Step 5 and dossier export. You leave with a dated plan." },
  "offer.diff.label": { fr: "Ce qui différencie", en: "What sets it apart" },
  "offer.diff.h2": { fr: "Un seul fil, du premier mot au plan de lancement.", en: "One thread, from the first word to the launch plan." },
  "offer.diff.lead": { fr: "La plupart des offres traitent un maillon : la stratégie, ou le branding, ou le site. Vous récupérez trois livrables qui ne se parlent pas et vous faites la couture vous-même. Ici, l'étape 4 sait ce que vous avez décidé à l'étape 2, et le plan de lancement découle du positionnement que vous avez acté.", en: "Most offers handle one link: strategy, or branding, or the site. You end up with three deliverables that don't talk to each other and you do the stitching yourself. Here, step 4 knows what you decided at step 2, and the launch plan follows from the positioning you settled on." },
  "offer.band.statement": { fr: "Un paiement. Cinq étapes.<br>Un <em>dossier</em> à la sortie.", en: "One payment. Five steps.<br>One <em>dossier</em> at the end." },
  "journey.h1": { fr: "Le <em>parcours</em>", en: "The <em>journey</em>" },
  "journey.sub": { fr: "Cinq étapes dans l'application. Chacune se débloque quand la précédente est complétée.", en: "Five steps in the application. Each unlocks when the previous one is complete." },
  "journey.rings.label": { fr: "La progression", en: "Progress" },
  "journey.rings.h2": { fr: "Cinq anneaux. Un par étape franchie.", en: "Five rings. One per step completed." },
  "journey.rings.lead": { fr: "La progression est visible en permanence dans l'application : chaque étape complétée referme un anneau.", en: "Progress stays visible at all times in the application: each completed step closes a ring." },
  "journey.step.role": { fr: "Votre décision", en: "Your decision" },
  "journey.s1.p": { fr: "Vous formulez le problème que vous résolvez, pour qui, et pourquoi maintenant. L'application structure le questionnement et vous force à écrire ce que vous aviez seulement en tête.", en: "You articulate the problem you solve, for whom, and why now. The application structures the questioning and forces you to write down what you only had in your head." },
  "journey.s1.role": { fr: "Vous seul savez ce qui vous anime. Cette étape le met noir sur blanc — c'est votre matière première pour les quatre suivantes.", en: "Only you know what drives you. This step puts it in writing — it's your raw material for the next four." },
  "journey.s2.p": { fr: "Vous définissez ce que la marque dit, à qui, et pourquoi elle est différente. L'application propose les axes possibles à partir de l'étape 1.", en: "You define what the brand says, to whom, and why it's different. The application lays out the possible angles from step 1." },
  "journey.s2.role": { fr: "Un positionnement est une conviction, pas un arbitrage technique. Vous choisissez celui que vous êtes prêt à tenir pendant des années.", en: "A positioning is a conviction, not a technical trade-off. You pick the one you're ready to hold for years." },
  "journey.s3.p": { fr: "Naming, ton de voix, univers visuel et verbal — cohérents avec le positionnement acté à l'étape précédente. L'application génère des pistes structurées.", en: "Naming, tone of voice, visual and verbal world — coherent with the positioning settled in the previous step. The application generates structured directions." },
  "journey.s3.role": { fr: "Le nom, vous allez le porter partout, le prononcer mille fois. C'est vous qui décidez lequel devient le vôtre.", en: "You'll carry the name everywhere, say it a thousand times. You decide which one becomes yours." },
  "journey.s4.p": { fr: "Les pages nécessaires, ce que chacune doit dire, dans quel ordre. L'architecture découle du positionnement et de l'identité définis en amont.", en: "The pages needed, what each must say, in what order. The architecture follows from the positioning and identity defined upstream." },
  "journey.s4.role": { fr: "Personne ne connaît votre offre mieux que vous. Vous arbitrez ce que le site doit dire en premier.", en: "No one knows your offer better than you. You decide what the site must say first." },
  "journey.s5.p": { fr: "Une feuille de route pour les trois premiers mois d'existence publique. L'application propose une structure d'actions ; vous retenez celles que vous tiendrez.", en: "A roadmap for your first three months in public. The application proposes a structure of actions; you keep the ones you'll hold to." },
  "journey.s5.role": { fr: "Un plan que vous n'exécuterez pas ne vaut rien. Vous choisissez les actions à votre portée réelle, pas les plus impressionnantes.", en: "A plan you won't execute is worth nothing. You choose the actions within your real reach, not the most impressive ones." },
  "journey.close.h2": { fr: "À la sortie : un dossier, pas des notes.", en: "At the end: a dossier, not notes." },
  "journey.close.lead": { fr: "Quand les cinq anneaux sont refermés, tout ce que vous avez écrit se compile en un document unique que vous pouvez exporter, imprimer et transmettre.", en: "When the five rings are closed, everything you've written compiles into a single document you can export, print and hand over." },
  "journey.cta1": { fr: "Voir le tarif", en: "See the price" },
  "journey.cta2": { fr: "Commencer mon parcours", en: "Start my journey" },
  "pricing.h1": { fr: "<em>999 €</em>, une fois.", en: "<em>€999</em>, once." },
  "pricing.sub": { fr: "Un paiement unique. Accès illimité, sans abonnement, sans frais caché.", en: "A single payment. Unlimited access, no subscription, no hidden fees." },
  "pricing.label": { fr: "Le tarif", en: "The price" },
  "pricing.h2": { fr: "Ce que ça remplace, et ce que ça ne remplace pas.", en: "What it replaces, and what it doesn't." },
  "pricing.lead": { fr: "NOVA ne remplace pas une équipe. Il remplace les trois mois que vous passeriez à tourner en rond avant de savoir quoi demander à cette équipe — et il vous donne le document avec lequel la briefer.", en: "NOVA doesn't replace a team. It replaces the three months you'd spend going in circles before knowing what to ask that team — and it gives you the document to brief them with." },
  "pricing.note": { fr: "Paiement unique — pas d'abonnement.", en: "Single payment — no subscription." },
  "pricing.incl.label": { fr: "Ce qui est inclus", en: "What's included" },
  "pricing.incl.h2": { fr: "Les cinq étapes, le dossier exportable, l'accès sans limite de temps.", en: "The five steps, the exportable dossier, access with no time limit." },
  "pricing.incl.1": { fr: "Les cinq étapes de l'application, débloquées dans l'ordre", en: "The five steps of the application, unlocked in order" },
  "pricing.incl.2": { fr: "Le dossier de marque complet, exportable et imprimable", en: "The complete brand dossier, exportable and printable" },
  "pricing.incl.3": { fr: "Un accès illimité dans le temps, sans reconduction", en: "Unlimited access over time, with no renewal" },
  "pricing.incl.4": { fr: "Les mises à jour du parcours, sans surcoût", en: "Journey updates, at no extra cost" },
  "pricing.guarantee.k": { fr: "Garantie", en: "Guarantee" },
  "pricing.guarantee.h3": { fr: "14 jours pour changer d'avis", en: "14 days to change your mind" },
  "pricing.guarantee.p": { fr: "Si le parcours ne correspond pas à ce que vous attendiez, écrivez-nous dans les 14 jours suivant l'achat et vous êtes remboursé intégralement. Sans justification à fournir.", en: "If the journey isn't what you expected, write to us within 14 days of purchase and you're refunded in full. No justification required." },
  "pricing.faq.label": { fr: "Questions fréquentes", en: "Frequent questions" },
  "pricing.faq.h2": { fr: "Ce qu'on nous demande avant d'acheter.", en: "What people ask us before buying." },
  "faq.1.q": { fr: "Est-ce que l'application écrit à ma place ?", en: "Does the application write for me?" },
  "faq.1.a": { fr: "Non. Elle pose les questions, structure vos réponses et maintient la cohérence entre les étapes. Le contenu vient de vous — c'est ce qui fait qu'il vous ressemble et que vous pouvez le défendre.", en: "No. It asks the questions, structures your answers and maintains coherence between steps. The content comes from you — that's what makes it sound like you and lets you defend it." },
  "faq.2.q": { fr: "Combien de temps faut-il compter ?", en: "How much time should I plan for?" },
  "faq.2.a": { fr: "Trois à quatre semaines à raison de deux sessions d'une heure par semaine. L'accès n'a pas de date limite, mais un parcours qu'on étale sur six mois ne se termine généralement pas.", en: "Three to four weeks at two one-hour sessions a week. Access has no deadline, but a journey spread over six months usually doesn't get finished." },
  "faq.3.q": { fr: "Qu'est-ce que j'ai concrètement à la fin ?", en: "What do I concretely have at the end?" },
  "faq.3.a": { fr: "Un dossier de marque unique, exportable et imprimable, qui contient votre projet formulé, votre positionnement, votre nom et votre univers, l'architecture de votre site et votre plan à 90 jours.", en: "A single brand dossier, exportable and printable, containing your articulated project, your positioning, your name and world, your site architecture and your 90-day plan." },
  "faq.4.q": { fr: "Est-ce que vous faites le site ?", en: "Do you build the site?" },
  "faq.4.a": { fr: "Non. NOVA produit l'architecture, les contenus prioritaires et le brief. Vous repartez avec de quoi construire vous-même ou faire chiffrer un développeur sur une base précise, ce qui coûte beaucoup moins cher qu'un brief flou.", en: "No. NOVA produces the architecture, the priority content and the brief. You leave with enough to build it yourself or get a developer to quote on a precise basis, which costs far less than a vague brief." },
  "faq.5.q": { fr: "Et si j'ai déjà un nom ?", en: "What if I already have a name?" },
  "faq.5.a": { fr: "L'étape 3 sert alors à le valider contre le positionnement que vous venez d'acter, et à construire l'univers autour. Beaucoup de fondateurs découvrent à ce moment que leur nom dit autre chose que ce qu'ils croyaient.", en: "Step 3 then serves to validate it against the positioning you just settled, and to build the world around it. Many founders discover at that point that their name says something other than what they thought." },
  "faq.6.q": { fr: "Puis-je être remboursé ?", en: "Can I get a refund?" },
  "faq.6.a": { fr: "Oui, sous 14 jours après l'achat, sans justification. Écrivez-nous et le remboursement est traité.", en: "Yes, within 14 days of purchase, without justification. Write to us and the refund is processed." },
  "pricing.cta1": { fr: "Commencer mon parcours", en: "Start my journey" },
  "pricing.cta2": { fr: "Revoir le parcours", en: "Review the journey" },
  "pricing.close.quote": { fr: "Un paiement. Cinq étapes. Un dossier.", en: "One payment. Five steps. One dossier." },
  "method.h1": { fr: "La <em>méthode</em>", en: "The <em>method</em>" },
  "method.sub": { fr: "D'où vient NOVA, comment elle a été construite, et par qui.", en: "Where NOVA comes from, how it was built, and by whom." },
  "method.who.label": { fr: "Qui est derrière", en: "Who's behind it" },
  "method.origin.label": { fr: "L'origine", en: "The origin" },
  "method.origin.h2": { fr: "Une méthode interne, ouverte au public.", en: "An internal method, opened to the public." },
  "method.origin.lead": { fr: "NOVA n'a pas été conçue comme un produit. C'est le protocole que Strawberry Production suit sur chaque projet de marque : les mêmes cinq questions, dans le même ordre, parce que c'est l'ordre dans lequel elles se posent réellement. Le formaliser en application permet de le rendre accessible à des fondateurs qui n'ont pas le budget d'un accompagnement complet.", en: "NOVA wasn't designed as a product. It's the protocol Strawberry Production follows on every brand project: the same five questions, in the same order, because that's the order they actually arise in. Formalizing it as an application makes it accessible to founders who don't have the budget for full support." },
  "method.why.label": { fr: "Pourquoi cet ordre", en: "Why this order" },
  "method.why.h2": { fr: "Chaque étape rend la suivante possible.", en: "Each step makes the next one possible." },
  "method.why.lead": { fr: "On ne trouve pas un nom avant de savoir ce qu'on défend. On n'écrit pas un site avant de savoir à qui on parle. La plupart des projets échouent parce qu'ils commencent par la fin — le logo, le nom, le site — et découvrent trop tard qu'il n'y a rien dessous.", en: "You don't find a name before knowing what you stand for. You don't write a site before knowing who you're talking to. Most projects fail because they start at the end — the logo, the name, the site — and discover too late that there's nothing underneath." },
  "method.case.label": { fr: "Un cas", en: "A case" },
  "method.case.h2": { fr: "La méthode appliquée, de bout en bout.", en: "The method applied, end to end." },
  "method.cta": { fr: "Commencer mon parcours", en: "Start my journey" },
  "contact.h1": { fr: "Une <em>question</em> avant de commencer ?", en: "A <em>question</em> before you start?" },
  "contact.sub": { fr: "NOVA s'achète et se démarre directement dans l'application. Si vous hésitez, la réponse est probablement ci-dessous.", en: "NOVA is bought and started directly in the application. If you're hesitating, the answer is probably below." },
  "contact.check.label": { fr: "Vérifier que c'est pour vous", en: "Check whether it's for you" },
  "contact.check.h2": { fr: "NOVA convient à certains projets, et pas à d'autres.", en: "NOVA suits some projects, and not others." },
  "contact.yes.tag": { fr: "C'est pour vous si", en: "It's for you if" },
  "contact.no.tag": { fr: "Ce n'est pas pour vous si", en: "It's not for you if" },
  "contact.yes.1": { fr: "Vous avez une idée que vous n'arrivez pas encore à formuler simplement", en: "You have an idea you can't yet put simply" },
  "contact.yes.2": { fr: "Vous voulez comprendre vos choix de marque, pas les sous-traiter", en: "You want to understand your brand choices, not outsource them" },
  "contact.yes.3": { fr: "Vous êtes prêt à écrire vous-même, environ deux heures par semaine", en: "You're ready to write yourself, about two hours a week" },
  "contact.yes.4": { fr: "Vous avez besoin d'un document solide pour briefer un développeur ou un designer", en: "You need a solid document to brief a developer or a designer" },
  "contact.yes.5": { fr: "Vous lancez seul ou à deux, sans direction marketing en interne", en: "You're launching alone or as a pair, with no in-house marketing lead" },
  "contact.no.1": { fr: "Votre entreprise est déjà lancée et votre positionnement est stabilisé", en: "Your company is already launched and your positioning is settled" },
  "contact.no.2": { fr: "Vous cherchez quelqu'un qui fasse le travail à votre place", en: "You're looking for someone to do the work for you" },
  "contact.no.3": { fr: "Vous devez lancer dans moins de deux semaines", en: "You need to launch in less than two weeks" },
  "contact.no.4": { fr: "Vous attendez un logo et une charte graphique finalisés", en: "You expect a finished logo and visual identity" },
  "contact.no.5": { fr: "Vous voulez déléguer la décision plutôt que la prendre", en: "You want to delegate the decision rather than make it" },
  "contact.q.label": { fr: "Une question", en: "A question" },
  "contact.q.h2": { fr: "Posez-la.", en: "Ask it." },
  "contact.q.lead": { fr: "Ce formulaire arrive directement dans notre boîte mail. Réponse sous 48 heures ouvrées.", en: "This form goes straight to our inbox. Reply within 48 business hours." },
  "contact.f.name": { fr: "Nom & prénom", en: "Full name" },
  "contact.f.email": { fr: "Email", en: "Email" },
  "contact.f.question": { fr: "Votre question", en: "Your question" },
  "contact.f.send": { fr: "Envoyer", en: "Send" },
  "contact.direct.label": { fr: "Ou directement", en: "Or directly" },
  "contact.direct.p": { fr: "Vous préférez écrire directement ?", en: "Prefer to write directly?" },
  "contact.check.cta": { fr: "Commencer mon parcours", en: "Start my journey" },
  "contact.status.sending": { fr: "Envoi…", en: "Sending…" },
  "contact.status.ok": { fr: "Message envoyé. Réponse sous 48 heures ouvrées.", en: "Message sent. Reply within 48 business hours." },
  "contact.status.sent": { fr: "Envoyé", en: "Sent" },
  "contact.status.error": { fr: "Erreur d'envoi — écrivez-nous directement à", en: "Sending failed — write to us directly at" },
  "app.pay.label": { fr: "Accès à l'application", en: "Application access" },
  "app.pay.lead": { fr: "Un paiement unique. Accès immédiat aux cinq étapes et au dossier exportable.", en: "A single payment. Immediate access to the five steps and the exportable dossier." },
  "app.pay.btn": { fr: "Payer et commencer", en: "Pay and start" },
  "app.pay.fine": { fr: "Paiement sécurisé par Stripe. Garantie 14 jours.", en: "Secure payment via Stripe. 14-day guarantee." },
  "app.welcome.k": { fr: "Bienvenue", en: "Welcome" },
  "app.welcome.h": { fr: "Vous y êtes.", en: "You're in." },
  "app.welcome.p": { fr: "Les cinq prochaines étapes construisent votre dossier de marque. Comptez trois à quatre semaines, deux sessions d'une heure par semaine. Tout ce que vous écrivez est sauvegardé au fur et à mesure.", en: "The next five steps build your brand dossier. Plan for three to four weeks, two one-hour sessions a week. Everything you write is saved as you go." },
  "app.h1": { fr: "Votre <em>parcours</em>", en: "Your <em>journey</em>" },
  "app.sub": { fr: "Complétez chaque étape pour débloquer la suivante.", en: "Complete each step to unlock the next." },
  "app.progress": { fr: "étapes complétées", en: "steps completed" },
  "app.rings.label": { fr: "étapes", en: "steps" },
  "app.save": { fr: "Sauvegarder l'étape", en: "Save step" },
  "app.saved": { fr: "Sauvegardé", en: "Saved" },
  "app.save.error": { fr: "Échec de la sauvegarde", en: "Save failed" },
  "app.status.done": { fr: "Complété", en: "Completed" },
  "app.status.locked": { fr: "Verrouillé", en: "Locked" },
  "app.status.todo": { fr: "À faire", en: "To do" },
  "app.done.k": { fr: "Parcours terminé", en: "Journey complete" },
  "app.done.h": { fr: "Les cinq anneaux sont refermés.", en: "The five rings are closed." },
  "app.done.p": { fr: "Votre dossier de marque est prêt. Vous pouvez l'ouvrir, l'imprimer ou l'enregistrer en PDF pour le transmettre.", en: "Your brand dossier is ready. You can open it, print it or save it as a PDF to hand over." },
  "app.done.btn": { fr: "Ouvrir mon dossier de marque", en: "Open my brand dossier" },
  "app.dossier.title": { fr: "Dossier de marque", en: "Brand dossier" },
  "app.dossier.print": { fr: "Imprimer / enregistrer en PDF", en: "Print / save as PDF" },
  "app.dossier.back": { fr: "Retour au parcours", en: "Back to the journey" },
  "app.dossier.empty": { fr: "Non renseigné", en: "Not filled in" }
};

function novaGetLang() {
  const p = new URLSearchParams(window.location.search).get('lang');
  if (p === 'fr' || p === 'en') return p;
  const stored = localStorage.getItem('nova_lang');
  if (stored === 'fr' || stored === 'en') return stored;
  return 'fr';
}

function novaApplyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('nova_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!DICT[key] || DICT[key][lang] === undefined) return;
    const value = DICT[key][lang];
    // innerHTML uniquement si la traduction contient du balisage volontaire.
    if (/<(br|em|strong)\b/i.test(value)) el.innerHTML = value;
    else el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (DICT[key] && DICT[key][lang] !== undefined) el.setAttribute('placeholder', DICT[key][lang]);
  });
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
  document.dispatchEvent(new CustomEvent('nova:lang', { detail: { lang } }));
}

function novaInitLang() {
  novaApplyLang(novaGetLang());
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.addEventListener('click', () => novaApplyLang(b.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', novaInitLang);
