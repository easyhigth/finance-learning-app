// French translations for vocab.js fiches, keyed by vocab id.
// Only { term, simple, example, remember } are translatable — aliases
// already carry French search synonyms in vocab.js itself.
// Missing ids fall back to English via localizeVocabItem().
export const vocabFr = {
  "v-tvm": {
    "term": "Valeur temps de l'argent",
    "simple": "Un euro aujourd'hui vaut plus qu'un euro demain, car l'argent en main aujourd'hui peut fructifier.",
    "example": "100 € investis à 5 % deviennent 105 € en un an — donc 100 € maintenant valent plus que 100 € l'année prochaine.",
    "remember": "« Un euro aujourd'hui vaut plus qu'un euro demain. » L'argent présent peut travailler ; l'argent futur non."
  },
  "v-compound": {
    "term": "Intérêts composés",
    "simple": "Vous gagnez des intérêts sur vos intérêts, si bien que la croissance s'accélère un peu plus chaque année.",
    "example": "1 000 € à 10 % pendant 40 ans → 45 000 €, alors que vous n'avez versé que 1 000 €. Les gains génèrent leurs propres gains.",
    "remember": "BOULE DE NEIGE : la boule grossit en roulant, et plus elle est grosse, plus elle grossit vite."
  },
  "v-inflation": {
    "term": "Inflation",
    "simple": "Les prix montent avec le temps, donc la même somme d'argent achète de moins en moins chaque année — un impôt silencieux sur le cash.",
    "example": "Un café qui coûtait 2 € il y a dix ans peut en coûter 2,60 € aujourd'hui. Vos 2 € n'ont pas changé, mais ils achètent moins.",
    "remember": "IMPÔT INVISIBLE sur celui qui garde du cash : le chiffre ne bouge pas, mais le pouvoir d'achat fond."
  },
  "v-oppcost": {
    "term": "Coût d'opportunité",
    "simple": "Le vrai coût d'un choix, c'est la meilleure chose à laquelle on renonce pour le faire.",
    "example": "Dépenser 5 000 € pour une voiture plus haut de gamme, c'est aussi renoncer aux 5 000 € qui auraient pu être investis — cette croissance perdue fait partie du vrai coût de la voiture.",
    "remember": "LE VRAI PRIX = ce que tu paies + ce que l'argent aurait rapporté ailleurs."
  },
  "v-sunkcost": {
    "term": "Coût irrécupérable",
    "simple": "L'argent déjà perdu ne devrait pas influencer votre prochaine décision — seul l'avenir compte.",
    "example": "Garder une action perdante « en attendant qu'elle remonte » relève du biais du coût irrécupérable : la perte a déjà eu lieu ; posez-vous seulement la question « l'achèterais-je maintenant ? »",
    "remember": "LE PASSÉ EST PRIX PAYÉ : décide avec l'avenir, jamais avec ce que tu as déjà dépensé."
  },
  "v-rule72": {
    "term": "Règle de 72",
    "simple": "Divisez 72 par le taux pour estimer en combien d'années votre argent double.",
    "example": "À 6 %, l'argent double en 72 ÷ 6 = 12 ans. À 9 %, en 8 ans.",
    "remember": "72 ÷ taux = années pour doubler. Réflexe de poche pour estimer un rendement."
  },
  "v-riskreturn": {
    "term": "Risque et rendement",
    "simple": "Plus le rendement potentiel est élevé, plus le risque de perte est élevé — les deux vont toujours de pair.",
    "example": "Le cash rapporte environ 2 % et ne baisse jamais ; les actions rapportent environ 9 % mais peuvent chuter de 40 %. Le rendement supplémentaire est le prix à payer pour accepter la peur supplémentaire.",
    "remember": "PAS DE REPAS GRATUIT : rendement élevé « garanti » cache toujours un risque quelque part."
  },
  "v-diversification": {
    "term": "Diversification",
    "simple": "Répartir son argent sur de nombreux actifs sans lien entre eux, pour qu'un seul échec ne puisse pas tout couler.",
    "example": "Détenir 30 actions dans des secteurs différents fait moins mal que d'en détenir une seule — si l'une s'effondre, les autres peuvent tenir.",
    "remember": "NE METS PAS TES ŒUFS DANS LE MÊME PANIER — et 30 banques ne diversifient pas (elles bougent ensemble)."
  },
  "v-dca": {
    "term": "Investissement programmé (DCA)",
    "simple": "Investir un montant fixe à intervalles réguliers, pour acheter plus quand les prix sont bas et moins quand ils sont hauts.",
    "example": "300 € chaque mois, quel que soit le prix. Vous récupérez automatiquement plus de parts lors des mois où c'est bon marché.",
    "remember": "L'HORAIRE DÉCIDE, PAS L'HUMEUR. La discipline remplace le timing de marché (impossible)."
  },
  "v-etf": {
    "term": "ETF",
    "simple": "Un fonds qui réplique un indice entier et se négocie comme une action, pour des frais dérisoires.",
    "example": "Un seul ETF peut contenir des milliers d'entreprises pour environ 0,1 % par an — et bat la plupart des professionnels dans la durée.",
    "remember": "ACHETER TOUT LE MARCHÉ EN UN CLIC, POUR QUELQUES EUROS — les frais sont le seul prédicteur fiable du rendement long."
  },
  "v-dividend": {
    "term": "Dividende",
    "simple": "De l'argent qu'une entreprise vous verse régulièrement simplement parce que vous détenez son action — une part de son profit.",
    "example": "Une action à 100 € versant 3 €/an offre un rendement de 3 % : vous touchez du cash sans vendre la moindre part.",
    "remember": "DE L'ARGENT POUR NE RIEN VENDRE — mais le cours baisse souvent du montant du dividende le jour du détachement."
  },
  "v-alpha": {
    "term": "Alpha",
    "simple": "Le rendement au-delà de ce que le risque justifie — le talent réel du gérant, ou de la chance.",
    "example": "Si un fonds rapporte 12 % alors que son risque « méritait » 9 %, les 3 % supplémentaires sont de l'alpha. Un alpha durable après frais est rare.",
    "remember": "ALPHA = le « bonus » du gérant. Un alpha persistant nets de frais est si rare qu'il faut s'en méfier."
  },
  "v-beta": {
    "term": "Bêta",
    "simple": "À quel point un actif suit les mouvements du marché — un bêta de 2 signifie deux fois les mouvements du marché.",
    "example": "Une action de bêta 1,5 monte d'environ 15 % quand le marché monte de 10 %, et baisse d'environ 15 % quand il baisse de 10 %.",
    "remember": "BÊTA = l'amplificateur. > 1 ça agite, < 1 ça calme. Tu es payé pour le bêta de marché, pas pour le bruit idiosyncratique."
  },
  "v-pe": {
    "term": "Ratio cours/bénéfice (PER)",
    "simple": "Combien d'années de profit actuel vous payez par action — un indicateur rapide pour juger si c'est cher ou pas.",
    "example": "Une action à 100 € qui gagne 5 €/an a un PER de 20 : vous payez 20 ans de bénéfice. Un PER bas peut signifier bon marché — ou des ennuis à venir.",
    "remember": "P/E = années de bénéfice achetées. Mais le E est une opinion comptable — vérifie sa qualité avant de juger."
  },
  "v-rebalance": {
    "term": "Rééquilibrage",
    "simple": "Vendre périodiquement les gagnants et acheter les perdants pour revenir à sa répartition cible.",
    "example": "Si les actions atteignent 80 % de votre cible de 70 %, vendez-en une partie et rachetez des obligations pour revenir à 70/30.",
    "remember": "RÉÉQUILIBRER = acheter bas, vendre haut, automatiquement. La discipline imposée par avance, dans le calme."
  },
  "v-marketcap": {
    "term": "Capitalisation boursière",
    "simple": "L'étiquette de prix totale que le marché attribue à une entreprise : cours de l'action × nombre d'actions.",
    "example": "Une action à 200 € avec 50 M d'actions = une entreprise de 10 Mds €. Une action à 20 € avec 500 M d'actions vaut aussi 10 Mds € — le prix seul ne dit rien.",
    "remember": "TAILLE = prix × nombre d'actions. Un titre « pas cher » peut être une énorme entreprise ; un titre cher une petite."
  },
  "v-liquidity": {
    "term": "Liquidité",
    "simple": "La rapidité avec laquelle vous pouvez transformer un actif en cash sans subir de perte.",
    "example": "Le cash est parfaitement liquide ; une action est très liquide ; une maison prend des mois à vendre et peut nécessiter une baisse de prix.",
    "remember": "LA LIQUIDITÉ N'EST LÀ QUE QUAND ON N'EN A PAS BESOIN — elle s'évapore en pleine crise."
  },
  "v-spread": {
    "term": "Fourchette achat-vente",
    "simple": "L'écart entre le meilleur prix d'achat et le meilleur prix de vente — une taxe cachée sur chaque transaction.",
    "example": "Meilleure offre d'achat 99,98 €, meilleure offre de vente 100,02 € → fourchette de 0,04 €. Acheter immédiatement paie le prix vendeur ; les 0,04 € sont le coût de l'immédiateté.",
    "remember": "FOUCHETTE = taxe invisible. Marché liquide = spread fin ; marché serré ou risqué = spread large."
  },
  "v-bullbear": {
    "term": "Marché haussier et baissier",
    "simple": "Haussier = prix en hausse et optimisme ; baissier = une chute durable, généralement de 20 % ou plus depuis le sommet.",
    "example": "Une chute de 50 % en marché baissier nécessite un gain de 100 % rien que pour revenir à l'équilibre — les pertes sont asymétriques.",
    "remember": "TAUREAU charge vers le HAUT, OURS frappe vers le BAS. Rester investi dans les deux batte le timing du marché."
  },
  "v-short": {
    "term": "Vente à découvert",
    "simple": "Vendre des actions empruntées en espérant que le prix baisse, pour les racheter moins cher et empocher la différence.",
    "example": "Vendez à découvert à 50 €, rachetez à 40 € → 10 € de profit par action. Mais si le cours monte à 70 €, vous perdez 20 € — sans limite à la perte.",
    "remember": "GAIN PLAFONNÉ, PERTE ILLIMITÉE. Le short est un pari à l'envers, asymétrique et dangereux."
  },
  "v-arbitrage": {
    "term": "Arbitrage",
    "simple": "Acheter bon marché et vendre cher le même actif au même instant — un profit sans risque qui force les prix à converger.",
    "example": "Une action à 100 € à Francfort et 100,40 € à Paris → on achète l'une, on vend l'autre, on empoche 0,40 € sans risque.",
    "remember": "ACHETER POUR REVENDRE AU MÊME INSTANT, sans risque. L'arbitrage referme les écarts — c'est lui qui rend les marchés efficients."
  },
  "v-ipo": {
    "term": "Introduction en bourse",
    "simple": "La première vente au public des actions d'une entreprise privée — le jour où elle rejoint le marché.",
    "example": "L'entreprise vend 10 millions d'actions à 40 €, lève 400 M €, et l'action commence à s'échanger en bourse.",
    "remember": "PREMIÈRE VENTE AU PUBLIC. Le « pop » du 1er jour récompense les privilégiés ; sur le long terme les IPO sous-performent souvent."
  },
  "v-emergency": {
    "term": "Fonds d'urgence",
    "simple": "3 à 6 mois de dépenses en cash sécurisé, pour qu'une crise reste un désagrément plutôt qu'un désastre.",
    "example": "Une réparation de voiture à 1 200 € payée avec le fonds plutôt qu'avec une carte de crédit à 18 % — pas de dette, pas d'investissements revendus.",
    "remember": "PAS INVESTI, JUSTE LÀ. Son boulot n'est pas le rendement, c'est la fiabilité le jour J."
  },
  "v-budget": {
    "term": "La règle des 50/30/20",
    "simple": "Répartissez votre revenu après impôts : 50 % besoins, 30 % envies, 20 % pour l'avenir (épargne, investissement, dette).",
    "example": "Sur 2 500 €/mois : 1 250 € besoins, 750 € envies, 500 € avenir. Ces 500 € investis construisent une vraie richesse sur des décennies.",
    "remember": "BESOINS / PLAISIRS / AVENIR. Le 20 % est le cœur non négociable — automatise-le le jour de paie."
  },
  "v-creditscore": {
    "term": "Score de crédit",
    "simple": "Un chiffre qui prédit votre probabilité de remboursement — il détermine ce que vous payez pour emprunter.",
    "example": "Un score excellent plutôt que moyen peut faire économiser environ 70 000 € d'intérêts sur un prêt immobilier de 30 ans.",
    "remember": "PAYER À L'HEURE = facteur n°1. Mesure ton comportement de crédit, pas ta richesse."
  },
  "v-networth": {
    "term": "Patrimoine net",
    "simple": "Tout ce que vous possédez moins tout ce que vous devez — le chiffre unique qui résume vos finances.",
    "example": "200 000 € d'actifs (logement, épargne, investissements) − 80 000 € de dettes (crédit immobilier, prêts) = 120 000 € de patrimoine net.",
    "remember": "AVOIR − DETTES = PATRIMOINE. Suis-le sur la durée, pas mois par mois."
  },
  "v-leverage": {
    "term": "Effet de levier",
    "simple": "Utiliser de l'argent emprunté pour amplifier les résultats — les gains comme les pertes s'en trouvent agrandis.",
    "example": "50 € de fonds propres + 50 € empruntés pour acheter 100 € d'actions : une hausse de 10 % = +10 € = 20 % sur vos fonds propres ; une baisse de 10 % = −20 %.",
    "remember": "LE LEVIER AMPLIFIE DANS LES DEUX SENS. La façon la plus courante de se ruiner en étant « raisonnable »."
  },
  "v-workingcapital": {
    "term": "Besoin en fonds de roulement",
    "simple": "L'argent à court terme immobilisé dans le fonctionnement de l'entreprise : actifs courants moins passifs courants.",
    "example": "60 000 € de stock + cash + créances − 25 000 € dus prochainement = 35 000 € de besoin en fonds de roulement. Une entreprise rentable peut quand même faire faillite si la trésorerie reste bloquée.",
    "remember": "BÉNÉFICE ≠ TRÉSORERIE. Une boîte rentable meurt si l'argent reste bloqué dans le stock ou les créances."
  },
  "v-lbo": {
    "term": "LBO (rachat à effet de levier)",
    "simple": "Racheter une entreprise principalement avec de la dette, puis faire rembourser cette dette par l'entreprise elle-même grâce à sa trésorerie.",
    "example": "Racheter une entreprise à 1 Md € avec 300 M € de fonds propres + 700 M € de dette ; rembourser la dette avec les flux de trésorerie de l'entreprise, puis revendre avec profit.",
    "remember": "ACHETER AVEC L'ARGENT DES AUTRES — et faire rembourser le prêt par la boîte elle-même. Génial si le cash tient, mortel sinon."
  },
  "v-interestrate": {
    "term": "Taux d'intérêt",
    "simple": "Le prix de l'emprunt d'argent, exprimé en pourcentage annuel — la gravité qui fait bouger tous les actifs.",
    "example": "Emprunter 1 000 € à 6 % → payer 60 € d'intérêts sur l'année. Quand les taux montent, emprunter coûte plus cher et les prix des actifs baissent.",
    "remember": "LE TAUX EST LA GRAVITATION : il monte → tout coûte plus cher à emprunter et tous les actifs baissent ; il baisse → l'inverse."
  },
  "v-bond": {
    "term": "Obligation",
    "simple": "Une reconnaissance de dette négociable : vous prêtez de l'argent, touchez des intérêts réguliers (le coupon), et récupérez le capital à l'échéance.",
    "example": "Prêtez 1 000 € à un État à 4 % pendant 10 ans : vous touchez 40 €/an et récupérez vos 1 000 € à la fin.",
    "remember": "OBLIGATION = IOU NÉGOCIABLE. Le prix monte quand les taux baissent (et inversement) ; plus la durée est longue, plus ça bouge."
  },
  "v-coupon": {
    "term": "Coupon",
    "simple": "Le paiement d'intérêt régulier versé par une obligation — autrefois, on détachait un coupon papier pour le toucher.",
    "example": "Une obligation de 1 000 € payant 4 % vous verse 40 € par an, généralement en deux versements de 20 €.",
    "remember": "COUPON = le « loyer » de l'obligation. Le nom vient du coupon papier qu'on découpait pour toucher l'intérêt."
  },
  "v-yield": {
    "term": "Rendement",
    "simple": "Le revenu généré par un investissement, exprimé en pourcentage annuel.",
    "example": "Une obligation de 100 € payant 4 €/an a un rendement de 4 %. Si son prix chute à 80 €, le rendement monte à 5 % — même flux, prix moins cher.",
    "remember": "RENDEMENT = revenu ÷ prix. Rendement monte quand le prix baisse : deux faces de la même pièce."
  },
  "v-duration": {
    "term": "Duration",
    "simple": "La sensibilité d'une obligation aux variations de taux, exprimée en années — plus la duration est longue, plus les variations de prix sont importantes.",
    "example": "Une obligation de duration 10 ans perd environ 10 % quand les taux montent de 1 %. Une obligation de duration 2 ans ne perd qu'environ 2 %.",
    "remember": "DURATION = volatilité aux taux. Une obligation longue peut être plus risquée qu'une action en choc de taux."
  },
  "v-amortization": {
    "term": "Amortissement",
    "simple": "Étaler un prêt en versements égaux où la part d'intérêts diminue et la part de capital augmente avec le temps.",
    "example": "Les premiers versements d'un crédit immobilier sont surtout des intérêts ; les derniers sont surtout du capital. Rembourser du capital en plus tôt permet donc d'économiser une fortune.",
    "remember": "DÉBUT = beaucoup d'intérêts, peu de capital. Rembourser tôt écrase des années d'intérêts futurs."
  },
  "v-repo": {
    "term": "Pension livrée (repo)",
    "simple": "Un prêt à court terme garanti par des titres : on vend une obligation aujourd'hui, en s'engageant à la racheter demain à un prix légèrement supérieur.",
    "example": "Vendre 100 M € d'obligations contre du cash, les racheter le lendemain à 100 M € + intérêts. L'obligation sert de garantie ; l'écart est l'intérêt.",
    "remember": "PRÊT GARANTI SUR UNE NUIT. Le « robinet » overnight de Wall Street — la plomberie de la finance."
  },
  "v-securitization": {
    "term": "Titrisation",
    "simple": "Regrouper de nombreux prêts en obligations vendues à des investisseurs — transformer des prêts illiquides en titres négociables.",
    "example": "Un millier de crédits immobiliers regroupés en obligations ; les investisseurs achètent des tranches, la banque libère du capital pour prêter à nouveau.",
    "remember": "EMBALLER DES PRÊTS EN OBLIGATIONS. Sain si les prêts sont sains ; c'est le mécanisme derrière 2008 quand ils ne l'étaient pas."
  },
  "v-gdp": {
    "term": "PIB",
    "simple": "La valeur totale de tout ce qu'un pays produit en un an — l'indicateur phare de la taille de l'économie.",
    "example": "PIB = consommation + investissement + dépenses publiques + (exportations − importations). Deux trimestres consécutifs de baisse du PIB réel = récession.",
    "remember": "LE THERMOMÈTRE DE L'ÉCONOMIE — mais il mesure l'activité, pas le bien-être ; ce qui compte, c'est le PIB réel par habitant."
  },
  "v-monetary": {
    "term": "Politique monétaire",
    "simple": "La banque centrale pilote l'économie en ajustant les taux d'intérêt et la masse monétaire.",
    "example": "Inflation trop élevée ? On relève les taux pour rendre l'emprunt plus coûteux, freiner les dépenses et faire baisser les prix.",
    "remember": "BANQUE CENTRALE = la pédale d'accélérateur/frein. Hausse des taux refroidit ; baisse relance."
  },
  "v-fiscal": {
    "term": "Politique budgétaire",
    "simple": "L'État qui utilise l'impôt et la dépense publique pour piloter l'économie — le pendant de la politique monétaire.",
    "example": "Baisser les impôts ou augmenter les dépenses pour relancer en période de crise ; faire l'inverse pour calmer une économie en surchauffe.",
    "remember": "ÉTAT = impôts + dépenses. La politique budgétaire, c'est l'autre levier, côté gouvernement (la monétaire, c'est côté banque centrale)."
  },
  "v-qe": {
    "term": "Assouplissement quantitatif",
    "simple": "Quand les taux touchent zéro, la banque centrale achète des obligations pour injecter de l'argent neuf dans le système.",
    "example": "La Fed achète des milliers de milliards d'obligations, poussant du cash vers les banques pour qu'elles prêtent — de la « planche à billets » version sophistiquée.",
    "remember": "QUAND LES TAUX NE PEUVENT PLUS BAISSER, on achète des actifs. Ça sauve des dépressions, mais ça gonfle les prix des actifs."
  },
  "v-fiat": {
    "term": "Monnaie fiduciaire",
    "simple": "Une monnaie qui a de la valeur parce que l'État le décrète — non adossée à l'or, seulement à la confiance.",
    "example": "Un billet de 10 € coûte quelques centimes à imprimer mais achète 10 € de biens, parce que tout le monde fait confiance à l'État derrière.",
    "remember": "VALEUR PAR DÉCRET, PAS PAR L'OR. Toute monnaie moderne est fiduciaire ; sa valeur tient tant que la confiance tient."
  },
  "v-supplydemand": {
    "term": "Offre et demande",
    "simple": "Les prix se fixent là où la quantité que les acheteurs veulent égale la quantité que les vendeurs proposent.",
    "example": "Un gel détruit une partie de la récolte de café → moins de café disponible → le prix grimpe jusqu'à ce que les acheteurs ne veuillent plus que la quantité restante.",
    "remember": "LE PRIX = RENCONTRE de l'offre et de la demande. Tout changement de prix raconte laquelle des deux a bougé."
  },
  "v-hedging": {
    "term": "Couverture",
    "simple": "Prendre une position compensatoire pour qu'une perte sur ce qu'on détient soit annulée par un gain ailleurs.",
    "example": "Tu détiens des actions américaines mais crains un euro plus fort ? Vends des dollars à terme — si le dollar baisse, le gain sur le forward compense la perte sur l'action, en euros.",
    "remember": "PARIER POUR NE PAS ÊTRE RUINÉ, pas pour avoir raison. La couverture sélectionne les risques, elle ne les supprime pas."
  },
  "v-margincall": {
    "term": "Appel de marge",
    "simple": "Une exigence d'ajouter du cash quand les pertes font tomber ta garantie sous le niveau requis — sinon, vente forcée.",
    "example": "Tu empruntes pour acheter une action ; elle baisse, ton capital fond, le courtier exige du cash. Pas de cash ? Il liquide ta position au pire moment.",
    "remember": "L'APPEL DE MARGE transforme un repli temporaire en perte définitive — le courtier vend quand tu ne peux pas payer."
  },
  "v-tailrisk": {
    "term": "Risque de queue",
    "simple": "Un événement à faible probabilité mais fort impact, situé dans la queue extrême des scénarios possibles — la raison d'être de l'assurance et de la couverture.",
    "example": "Un portefeuille sûr à 99 % garde 1 % de chances d'une perte ruineuse ; ce 1 %, c'est la queue, et elle domine les résultats sur le long terme.",
    "remember": "LA QUEUE DOMINE LE LONG TERME. Ce qui n'arrive « presque jamais » arrive quand même, et ça suffit à tout ruiner."
  },
  "v-lossaversion": {
    "term": "Aversion à la perte",
    "simple": "Une perte fait environ deux fois plus mal qu'un gain équivalent ne fait plaisir.",
    "example": "Perdre 100 € fait aussi mal que gagner 200 € fait plaisir — du coup on vend les gagnants trop tôt et on garde les perdants trop longtemps.",
    "remember": "PERDRE = 2× PLUS MAL QUE GAGNER. Ça pousse à couper les gagnants et garder les perdants — l'inverse de ce qu'il faut faire."
  },
  "v-volatility": {
    "term": "Volatilité",
    "simple": "L'ampleur des variations du prix d'un actif autour de sa moyenne — le proxy habituel du risque.",
    "example": "Une action qui bouge de ±2 % par jour est plus volatile qu'une autre qui bouge de ±0,3 % — des écarts plus larges, à la hausse comme à la baisse.",
    "remember": "TAILLE DES VAGUES, pas danger réel. Le vrai risque, c'est la perte permanente, pas l'oscillation."
  },
  "v-broker": {
    "term": "Courtier",
    "simple": "Un intermédiaire agréé qui exécute tes ordres d'achat et de vente sur le marché, contre commission.",
    "example": "Tu ne peux pas débarquer en bourse et acheter des actions toi-même ; ton courtier route l'ordre et gère le règlement, en prenant 5 € par transaction.",
    "remember": "LE PASSEUR entre toi et la bourse. « Zéro commission » cache souvent le coût dans le spread (paiement pour flux d'ordres)."
  },
  "v-depositary": {
    "term": "Dépositaire / Conservateur",
    "simple": "L'institution qui conserve tes actifs en sécurité, séparément du courtier — pour qu'ils survivent à une faillite de celui-ci.",
    "example": "Ton courtier négocie ; le dépositaire conserve les titres à ton nom. Si le courtier fait faillite, tes actifs restent les tiens.",
    "remember": "LE COFFRE-FORT. Le courtier fait le *commerce*, le dépositaire fait la *garde*. Séparation = sécurité."
  },
  "v-centralbank": {
    "term": "Banque centrale",
    "simple": "La « banque des banques » qui pilote la monnaie, les taux et l'inflation d'un pays — la BCE, la Fed.",
    "example": "Inflation à 8 % ? La banque centrale relève son taux, emprunter coûte plus cher, la dépense ralentit, l'inflation retombe.",
    "remember": "LA SEULE ENTITÉ QUI CRÉE LA MONNAIE DE BASE. Prêteur en dernier ressort ; indépendante du politique pour éviter l'inflation."
  },
  "v-clearing": {
    "term": "Chambre de compensation",
    "simple": "L'intermédiaire qui garantit chaque transaction, en devenant acheteur pour chaque vendeur et vendeur pour chaque acheteur.",
    "example": "Tu achètes à quelqu'un que tu ne rencontreras jamais ; la chambre de compensation s'interpose, donc s'il fait défaut, tu es quand même payé.",
    "remember": "ELLE SE FAIT CONTREPARTIE DES DEUX CÔTÉS. Elle supprime le risque de défaut grâce à la marge et à la compensation (netting)."
  },
  "v-counterparty": {
    "term": "Contrepartie",
    "simple": "L'autre côté de ta transaction — l'entité dont la promesse rend ton gain réel.",
    "example": "Tu conclus un swap de 10 M€ avec une banque ; si elle fait défaut, ton gain de 600 k€ risque de ne jamais être payé. Elle est ta contrepartie.",
    "remember": "TON GAIN NE VAUT QUE SA PROMESSE. Le risque de contrepartie, c'est la chance que l'autre ne paie pas."
  },
  "v-fund": {
    "term": "Fonds",
    "simple": "Une mise en commun de l'argent de nombreux investisseurs pour acheter un seul portefeuille diversifié — chacun en détient une part.",
    "example": "1 000 € de 10 000 investisseurs = 10 M€, de quoi financer un portefeuille mondialement diversifié ; chacun détient une part proportionnelle (la VL).",
    "remember": "METTRE EN COMMUN pour diversifier. La VL (valeur liquidative) = la part de chacun dans le panier."
  },
  "v-hedgefund": {
    "term": "Hedge fund",
    "simple": "Un fonds privé, peu régulé, qui peut vendre à découvert, s'endetter et parier sur tout — réservé aux fortunés.",
    "example": "Facture « 2 et 20 » : 2 % des actifs par an + 20 % des profits. La plupart peinent à battre de simples fonds indiciels, frais déduits.",
    "remember": "FLEXIBLE, PEU RÉGULÉ, FRAIS ÉLEVÉS. Le nom évoque la « couverture » ; la réalité tient souvent de la spéculation."
  },
  "v-privateequity": {
    "term": "Capital-investissement",
    "simple": "Racheter des entreprises non cotées pour les améliorer sur plusieurs années puis les revendre avec profit — ton argent est bloqué.",
    "example": "Racheter une entreprise essentiellement à crédit (LBO), réduire les coûts et la faire croître pendant 5 ans, puis la revendre ou l'introduire en bourse — capital bloqué 7 à 10 ans.",
    "remember": "ACHETER, AMÉLIORER, REVENDRE — avec effet de levier. Illiquidité + opacité + frais ; la qualité dépend du gérant."
  },
  "v-vc": {
    "term": "Capital-risque",
    "simple": "Financer de jeunes start-up à forte croissance contre des parts au capital — la plupart des paris échouent, un rare gagnant rembourse tout le fonds.",
    "example": "Un fonds fait 30 paris ; 25 échouent, 4 rentrent dans leurs frais, 1 fait ×100 et rembourse tout, plus du profit. Une logique de loi de puissance.",
    "remember": "LOI DE PUISSANCE : un seul gagnant rembourse tout. Le vrai risque n'est pas de financer un échec, c'est de rater le gagnant."
  },
  "v-marketmaker": {
    "term": "Teneur de marché",
    "simple": "Une firme toujours prête à acheter et à vendre, qui gagne sur le spread — la source de la liquidité instantanée.",
    "example": "Il cote 99,98 € à l'achat / 100,02 € à la vente. Tu achètes au prix demandé ; il empoche les 0,04 € de spread, multipliés par des volumes énormes.",
    "remember": "TOUJOURS PRÊT À TRADER. Il gagne des centimes sur des millions de lots — et porte le risque de stock."
  },
  "v-client": {
    "term": "Le client",
    "simple": "Le propriétaire final de l'argent — tous les autres (courtier, dépositaire, gérant) sont engagés pour le servir.",
    "example": "Tu investis 50 000 € ; le courtier exécute, le dépositaire conserve, le gérant choisit — mais c'est ton argent et ton risque.",
    "remember": "C'EST TON ARGENT. Le client est le mandant ; les autres sont des agents — le devoir fiduciaire les oblige à te servir."
  },
  "v-fiduciary": {
    "term": "Devoir fiduciaire",
    "simple": "Une obligation légale d'agir dans l'intérêt du client, pas dans celui de la firme — plus exigeant que simplement « adapté ».",
    "example": "Un conseiller fiduciaire doit recommander le fonds adapté le moins cher ; un non-fiduciaire peut pousser un produit maison plus cher qui lui rapporte davantage.",
    "remember": "« MEILLEUR INTÉRÊT DU CLIENT » par la loi, pas par gentillesse. Préfère un conseil payé en honoraires fixes, pas en commission."
  },
  "v-swap": {
    "term": "Swap",
    "simple": "Deux parties échangent des flux de trésorerie — le plus souvent un taux fixe contre un taux variable — sur un montant notionnel.",
    "example": "Une entreprise avec un emprunt à taux variable bascule vers un taux fixe via un swap : elle paie 3 % fixe, reçoit l'Euribor, et son coût net devient fixe à 3 %.",
    "remember": "ÉCHANGER DES FLUX, PAS LE CAPITAL. Le notionnel n'est qu'un chiffre de référence — on n'échange que les différences."
  },
  "v-future": {
    "term": "Future",
    "simple": "Un contrat standardisé, coté en bourse, pour acheter ou vendre à un prix fixé à une date future, avec appels de marge quotidiens.",
    "example": "Un boulanger bloque le prix du blé à 200 €/tonne pour une livraison dans 3 mois ; quel que soit le prix à l'échéance, son coût est garanti.",
    "remember": "PRIX BLOQUÉ POUR PLUS TARD, en bourse. Appels de marge quotidiens : pas de défaut, mais le levier peut te sortir du jeu."
  },
  "v-forward": {
    "term": "Forward",
    "simple": "Un contrat privé et sur mesure pour acheter ou vendre à un prix fixé à une date future, réglé en une seule fois à l'échéance.",
    "example": "Un exportateur bloque le taux €→$ pour un paiement dû dans 90 jours, supprimant le risque de change sur une créance connue.",
    "remember": "LE COUSIN PRIVÉ DU FUTURE. Sur mesure, de gré à gré, réglé une seule fois — donc risque de contrepartie bien réel."
  },
  "v-option": {
    "term": "Option",
    "simple": "Le droit (pas l'obligation) d'acheter ou de vendre à un prix fixé avant une date donnée — contre une prime payée d'avance.",
    "example": "Achète un put au strike 90 € pour 3 € : si l'action chute à 70 €, tu vends à 90 € et économises 17 €. Sinon, tu ne perds que les 3 € de prime.",
    "remember": "UN DROIT, PAS UNE OBLIGATION. Acheteur = perte maximale = la prime ; vendeur = peut perdre bien plus."
  },
  "v-callput": {
    "term": "Call vs. Put",
    "simple": "Call = droit d'acheter (pari à la hausse) ; Put = droit de vendre (pari à la baisse, ou assurance).",
    "example": "Achète un call pour profiter d'une hausse de l'action ; achète un put comme assurance en cas de baisse. Vends-les pour encaisser la prime.",
    "remember": "CALL = acheter (ça monte) ; PUT = vendre (ça baisse). La prime, c'est le prix de cette option."
  },
  "v-margin": {
    "term": "Marge",
    "simple": "La garantie que tu déposes pour couvrir une position à effet de levier ou un dérivé.",
    "example": "Tu déposes 5 000 € pour contrôler 10 000 € d'actions (marge de 50 %) — tes 5 000 € de capital garantissent les 5 000 € empruntés.",
    "remember": "LA CAUTION du levier. Marge trop basse = appel de marge = liquidation forcée au pire prix."
  },
  "v-notional": {
    "term": "Notionnel",
    "simple": "Le montant de référence utilisé pour calculer les paiements d'un dérivé — il n'est jamais réellement échangé.",
    "example": "Un swap de taux de 10 M€ verse des intérêts calculés sur 10 M€, mais aucun de ces 10 M€ ne change jamais de main — seule la différence de taux est payée.",
    "remember": "CHIFFRE DE RÉFÉRENCE, PAS D'ARGENT RÉEL. Les montants notionnels vertigineux des dérivés surestiment l'exposition réelle."
  },
  "v-cds": {
    "term": "Credit Default Swap",
    "simple": "Une assurance sur une obligation : tu paies des primes, le vendeur te paie si l'emprunteur désigné fait défaut.",
    "example": "Achète un CDS sur les obligations d'une entreprise ; si elle fait défaut, le vendeur couvre ta perte. C'est une assurance défaut, déguisée en swap.",
    "remember": "ASSURANCE DÉFAUT DÉGUISÉE EN SWAP. Tu paies une prime ; le vendeur paie si l'emprunteur fait faillite."
  },
  "v-balancesheet": {
    "term": "Bilan",
    "simple": "Une photographie de ce qu'une entreprise possède (actif) et doit (passif) à un instant donné ; la différence, c'est les capitaux propres.",
    "example": "35 k€ d'actif − 23 k€ de passif = 12 k€ de capitaux propres. Si tout était vendu et toutes les dettes payées, il resterait 12 k€ pour les propriétaires.",
    "remember": "LA PHOTO FINANCIÈRE. Actif = Passif + Capitaux propres — toujours équilibré (partie double)."
  },
  "v-incomestatement": {
    "term": "Compte de résultat",
    "simple": "Les revenus moins les coûts sur une période, aboutissant à un profit — le film de la performance de l'entreprise.",
    "example": "1 M€ de revenus − 400 k€ de coût des ventes − 300 k€ de charges d'exploitation − 50 k€ d'intérêts − 75 k€ d'impôts = 175 k€ de résultat net.",
    "remember": "LE FILM DE LA PERF : revenus moins coûts = profit. Bénéfice ≠ cash (comptabilité d'engagement)."
  },
  "v-ebitda": {
    "term": "EBITDA",
    "simple": "Le résultat avant intérêts, impôts, dépréciations et amortissements — un proxy approximatif du flux de trésorerie d'exploitation.",
    "example": "Une approximation de « ce que gagne le cœur de métier », en ignorant le financement et l'usure des actifs — pratique pour comparer, contesté car il ignore des coûts bien réels.",
    "remember": "RÉSULTAT OPÉRATIONNEL « BRUT ». Adoré pour la comparabilité, suspect car il ignore le capital et l'usure."
  },
  "v-cashflow": {
    "term": "Flux de trésorerie disponible",
    "simple": "Le cash qui reste après avoir financé l'exploitation et les investissements — ce qui est vraiment disponible pour la dette et les actionnaires.",
    "example": "Une entreprise affiche un gros bénéfice mais un flux de trésorerie disponible négatif — l'argent est coincé dans les créances ou les stocks, pas en banque.",
    "remember": "LE CASH EST RÉEL, LE BÉNÉFICE EST UNE OPINION. Le FCF est le chiffre sur lequel fonder vraiment la valorisation."
  },
  "v-depreciation": {
    "term": "Amortissement",
    "simple": "Étaler le coût d'un actif durable sur sa durée de vie utile — une charge sans sortie de cash.",
    "example": "Une machine à 100 k€ utilisée sur 10 ans → 10 k€/an d'amortissement, ce qui réduit le bénéfice affiché sans dépenser de cash.",
    "remember": "ÉTALER LE COÛT D'UN ACTIF SUR SA VIE. Une charge sans cash — c'est pourquoi le bénéfice peut dépasser le cash."
  },
  "v-crypto": {
    "term": "Cryptomonnaie",
    "simple": "Une monnaie numérique sur un registre partagé, sécurisée par la cryptographie, sans émetteur central.",
    "example": "Le bitcoin a une offre plafonnée à 21 M de pièces et pas de banque centrale — son prix repose sur ce que les acheteurs sont prêts à payer, sans flux de trésorerie pour l'ancrer.",
    "remember": "ARGENT NUMÉRIQUE SANS BANQUE. Sans flux de trésorerie, sa valeur = consensus (croyance), pas flux actualisés."
  },
  "v-blockchain": {
    "term": "Blockchain",
    "simple": "Un registre partagé, où l'on ne fait qu'ajouter, répliqué sur de nombreux ordinateurs — un consensus sans autorité centrale.",
    "example": "Alice envoie 1 bitcoin ; le réseau valide et l'enregistre de manière immuable. Aucune banque n'a approuvé — c'est la cryptographie qui l'a fait.",
    "remember": "GRAND LIVRE PARTAGÉ, SANS PATRON. Ajout seul + cryptographie = historique infalsifiable."
  },
  "v-stablecoin": {
    "term": "Stablecoin",
    "simple": "Une cryptomonnaie indexée sur un actif stable, généralement le dollar.",
    "example": "1 stablecoin vise à toujours valoir 1 $ — un pont entre la volatilité de la crypto et la valeur du quotidien.",
    "remember": "CRYPTO INDEXÉ SUR LE DOLLAR. Sa crédibilité tient entièrement à la qualité de ses réserves."
  },
  "v-defi": {
    "term": "Finance décentralisée",
    "simple": "Prêter, échanger et faire fructifier son argent via du code auto-exécutable, sans passer par les banques.",
    "example": "Prête tes cryptos à un contrat intelligent et touche des intérêts — pas de banque, pas de paperasse, mais un bug dans le code peut tout vider.",
    "remember": "LA FINANCE PAR LE CODE, PAS PAR LES INTERMÉDIAIRES. Ouverte et rapide — mais un bug de contrat reste un bug de contrat."
  }
};
