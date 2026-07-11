// French translations for concepts.js content, keyed by concept id, plus
// category names/blurbs keyed by category id. Only translatable fields are
// listed here — localizeConcept()/localizeCategory() in concepts.js merge
// these over the English base object. Anything missing here simply falls
// back to English, so the app degrades gracefully while translations are
// filled in incrementally.
export const categoriesFr = {
  foundations: { name: 'Fondamentaux', blurb: 'Les idées dont toute personne financièrement éclairée a besoin en premier.' },
  investing: { name: 'Investissement', blurb: "Comment l'argent fructifie quand on le met au travail." },
  markets: { name: 'Marchés', blurb: 'Comment se forment les prix et qui les échange.' },
  personal: { name: 'Finances personnelles', blurb: 'Budget, crédit, épargne — votre propre argent.' },
  corporate: { name: 'Finance d\'entreprise', blurb: 'Comment les entreprises se financent et se gèrent.' },
  banking: { name: 'Banque & Crédit', blurb: 'Intérêts, prêts, et fonctionnement des banques.' },
  economics: { name: 'Économie', blurb: 'Les grandes forces derrière les prix et la croissance.' },
  risk: { name: 'Risque & Comportement', blurb: "Comment nous gérons mal l'incertitude." },
  institutions: { name: 'Institutions financières', blurb: 'Les architectes et gardiens du système financier.' },
  derivatives: { name: 'Produits dérivés & Trading', blurb: 'Outils avancés de couverture, spéculation et découverte des prix.' },
  accounting: { name: 'Comptabilité', blurb: "Le langage des affaires — comment les entreprises enregistrent et rapportent l'argent." },
  fintech: { name: 'Crypto & Fintech', blurb: 'Monnaie numérique, registres, et la technologie qui transforme la finance.' },
};

export const conceptsFr = {
  "time-value-of-money": {
    "title": "Valeur temps de l'argent",
    "hook": "Un euro aujourd'hui vaut plus qu'un euro demain — l'idée fondatrice sur laquelle repose toute la finance.",
    "tldr": "L'argent disponible maintenant vaut plus que la même somme plus tard, car l'argent disponible aujourd'hui peut générer un rendement entre-temps.",
    "definition": [
      "La valeur temps de l'argent (VTA) affirme qu'une somme d'argent aujourd'hui a une valeur plus élevée que la même somme dans le futur. La raison est l'opportunité : l'argent que vous détenez maintenant peut être investi et croître, donc renoncer à cet argent pendant un an signifie renoncer aux rendements qu'il aurait générés.",
      "C'est pourquoi les prêteurs facturent des intérêts, pourquoi les investisseurs exigent un rendement, et pourquoi « payer plus tard » coûte toujours quelque chose à quelqu'un. Chaque prêt, obligation, valorisation d'action et calcul de retraite repose sur les mathématiques de la VTA."
    ],
    "keyPoints": [
      "La valeur actuelle (VA) actualise un montant futur à aujourd'hui grâce à un taux.",
      "La valeur future (VF) capitalise un montant présent vers le futur grâce à un taux.",
      "Plus le taux est élevé ou la période longue, plus l'écart entre VA et VF est grand.",
      "L'inflation aggrave encore la VTA : l'argent futur achète moins ET a perdu sa chance de croître."
    ],
    "formula": {
      "expression": "VF = VA × (1 + r)ⁿ",
      "legend": "VF = valeur future · VA = valeur actuelle · r = taux périodique · n = nombre de périodes",
      "note": "Inversez pour actualiser : VA = VF ÷ (1 + r)ⁿ."
    },
    "example": {
      "scenario": "Préférez-vous 1 000 € aujourd'hui ou 1 050 € dans un an, si vous pouvez investir à 6 % ?",
      "steps": [
        "VF de 1 000 € à 6 % sur 1 an = 1000 × 1,06 = 1 060 €",
        "1 060 € (l'argent d'aujourd'hui ayant fructifié) dépasse 1 050 € (le montant futur proposé)",
        "Donc 1 000 € aujourd'hui valent plus — prenez-les maintenant."
      ],
      "result": "Prendre 1 000 € aujourd'hui et les investir bat l'attente de 1 050 €. Le « tiens vaut mieux que tu l'auras » a un avantage réel et calculable."
    },
    "deepDive": [
      "La VTA impose une seule question à chaque décision financière : « que pourrait faire cet argent à la place ? » Ce rendement alternatif est le « taux d'actualisation ». Une entreprise qui évalue un projet actualise les flux de trésorerie futurs à son coût du capital ; si la valeur actuelle des entrées dépasse le coût, le projet vaut la peine d'être entrepris.",
      "Deux corollaires piègent souvent les gens. Premièrement, la capitalisation fonctionne dans les deux sens : la dette se capitalise contre vous tout comme l'investissement se capitalise pour vous. Deuxièmement, le taux choisi change tout — actualiser un flux futur à 3 % rend un paiement lointain acceptable ; l'actualiser à 9 % le fait quasiment disparaître. Petits changements de taux, grands changements de valeur, longs horizons."
    ],
    "glossary": [
      {
        "term": "Taux d'actualisation",
        "def": "Le rendement utilisé pour ramener un flux futur à sa valeur d'aujourd'hui."
      },
      {
        "term": "Capitalisation",
        "def": "Gagner des rendements sur les rendements précédents, accélérant la croissance dans le temps."
      },
      {
        "term": "Coût d'opportunité",
        "def": "Le rendement auquel vous renoncez en choisissant une option plutôt qu'une autre."
      }
    ]
  },
  "compound-interest": {
    "title": "Intérêts composés",
    "hook": "Einstein l'aurait appelée la huitième merveille du monde — des rendements qui génèrent leurs propres rendements.",
    "tldr": "Les intérêts composés consistent à gagner un rendement à la fois sur votre capital initial et sur les intérêts déjà accumulés, si bien que la croissance s'accélère avec le temps.",
    "definition": [
      "Avec des intérêts simples, vous ne gagnez un rendement que sur votre montant de départ. Avec des intérêts composés, vous gagnez un rendement sur le montant de départ ET sur tous les intérêts accumulés jusqu'ici. À chaque période, la base sur laquelle vous gagnez s'agrandit, si bien que la courbe de croissance s'incurve vers le haut au lieu de suivre une ligne droite.",
      "L'effet est modeste au début et spectaculaire ensuite. Plus l'argent se capitalise longtemps, plus les gains proviennent des gains passés plutôt que de nouveaux dépôts. C'est pourquoi commencer tôt bat le fait d'investir davantage plus tard."
    ],
    "keyPoints": [
      "La fréquence de capitalisation compte : mensuelle bat annuelle pour un même taux nominal.",
      "Le temps est le multiplicateur — les dernières années contribuent le plus.",
      "Cela joue contre vous sur la dette (cartes de crédit, prêts) tout comme cela joue pour vous sur l'épargne.",
      "La « règle des 72 » estime le temps de doublement : 72 ÷ taux ≈ nombre d'années pour doubler."
    ],
    "formula": {
      "expression": "A = P × (1 + r/n)^(n·t)",
      "legend": "A = montant final · P = capital initial · r = taux annuel · n = nombre de capitalisations par an · t = nombre d'années",
      "note": "Règle des 72 : années pour doubler ≈ 72 ÷ r (r comme un nombre, ex. 6)."
    },
    "example": {
      "scenario": "Investissez 200 €/mois à 8 % capitalisés mensuellement pendant 30 ans. Combien obtenez-vous à la fin ?",
      "steps": [
        "Taux mensuel r/n = 0,08/12 ≈ 0,00667",
        "Nombre de périodes n·t = 12 × 30 = 360",
        "VF de la rente = 200 × [((1,00667)^360 − 1) / 0,00667]",
        "(1,00667)^360 ≈ 11,02 → facteur ≈ 1503",
        "VF ≈ 200 × 1503 ≈ 300 600 €"
      ],
      "result": "Vous avez versé 72 000 € au total (200 € × 360). La capitalisation transforme cela en ~300 600 € — plus de 4 fois vos versements."
    },
    "deepDive": [
      "Le cœur psychologique de la capitalisation est qu'elle récompense la patience de façon invisible. En année 1, les gains semblent triviaux ; en année 25, ils écrasent les dépôts. Ceux qui abandonnent tôt ne voient jamais l'inflexion de la courbe, qui est précisément là où l'argent se fait.",
      "La fréquence de capitalisation a un coût discret : un taux « annuel de 6 % » capitalisé mensuellement est en réalité de 6,17 % effectif. Les prêteurs annoncent le chiffre nominal le plus bas ; le taux annuel effectif (TAE) est ce que vous payez ou gagnez réellement. Comparez toujours TAE à TAE."
    ],
    "glossary": [
      {
        "term": "Capital",
        "def": "Le montant initial que vous investissez ou empruntez."
      },
      {
        "term": "TAE",
        "def": "Taux annuel effectif — le véritable taux annuel après capitalisation."
      },
      {
        "term": "Règle des 72",
        "def": "Raccourci : divisez 72 par le taux pour estimer le temps de doublement."
      }
    ]
  },
  "inflation": {
    "title": "Inflation",
    "hook": "La taxe silencieuse sur quiconque détient des liquidités — le même argent achète moins chaque année.",
    "tldr": "L'inflation est la hausse générale des prix dans le temps, ce qui signifie que chaque unité de monnaie achète moins qu'avant.",
    "definition": [
      "L'inflation est une hausse durable du niveau moyen des prix des biens et services. Quand l'inflation est de 3 %, ce que 100 € achètent aujourd'hui coûte 103 € un an plus tard — votre argent a perdu 3 % de son pouvoir d'achat même si le chiffre est resté le même.",
      "Une inflation faible et prévisible (autour de 2 %) est considérée comme saine : elle huile l'économie et décourage la thésaurisation de liquidités. Une inflation élevée ou volatile érode l'épargne, fausse la planification et pénalise quiconque a un revenu fixe."
    ],
    "keyPoints": [
      "Rendement réel = rendement nominal − inflation. Un rendement de 5 % avec 3 % d'inflation donne un rendement réel de 2 %.",
      "Les liquidités rapportent ~0 %, donc l'inflation en fait un perdant garanti en termes réels.",
      "La croissance des salaires doit dépasser l'inflation, sinon votre niveau de vie baisse.",
      "La déflation (baisse des prix) est un problème en soi — elle récompense le fait de ne pas dépenser, ce qui bloque les économies."
    ],
    "formula": {
      "expression": "Rendement réel = (1 + nominal) ÷ (1 + inflation) − 1",
      "legend": "nominal = rendement affiché · inflation = taux d'inflation (en décimales)",
      "note": "Pour de petits taux, le raccourci réel ≈ nominal − inflation est suffisamment précis."
    },
    "example": {
      "scenario": "Un compte épargne rapporte 2 %. L'inflation est de 4 %. Quel est votre rendement réel ?",
      "steps": [
        "Rendement nominal = 0,02, inflation = 0,04",
        "Rendement réel = (1,02 ÷ 1,04) − 1 = 0,9808 − 1 ≈ −0,0192",
        "Rendement réel ≈ −1,9 %"
      ],
      "result": "Votre compte affiche plus d'euros, mais chaque euro achète moins. Vous êtes 1,9 % plus pauvre en termes réels malgré des « intérêts gagnés »."
    },
    "deepDive": [
      "L'inflation est mesurée par des indices de prix (IPC pour les consommateurs, PCE aux États-Unis). Ceux-ci suivent un panier de biens, qui ne correspond jamais exactement aux dépenses d'une personne — votre inflation personnelle peut être très différente du chiffre officiel, surtout si vous dépensez beaucoup en logement ou en énergie.",
      "Les actifs se protègent différemment de l'inflation. Les actions augmentent leurs prix avec leurs coûts ; les actifs réels (immobilier, matières premières) conservent leur valeur réelle ; les obligations longues sont écrasées par l'inflation car leurs paiements fixes achètent moins. Le travail de l'investisseur est de posséder des actifs dont les flux de trésorerie croissent plus vite que les prix."
    ],
    "glossary": [
      {
        "term": "IPC",
        "def": "Indice des prix à la consommation — mesure le coût d'un panier type de biens."
      },
      {
        "term": "Rendement réel",
        "def": "Rendement après déduction de l'inflation."
      },
      {
        "term": "Déflation",
        "def": "Baisse des prix — l'opposé de l'inflation."
      }
    ]
  },
  "risk-vs-return": {
    "title": "Risque et rendement",
    "hook": "Pas de rendement supplémentaire sans risque supplémentaire — le marché au cœur de tout investissement.",
    "tldr": "Des rendements potentiels plus élevés s'accompagnent toujours d'un risque plus élevé de perdre de l'argent. On ne peut pas séparer les deux.",
    "definition": [
      "Le risque et le rendement sont indissociables. Les actifs qui ont le plus rapporté dans le temps (les actions) ont aussi le plus fluctué en prix ; les actifs qui bougent à peine (liquidités, obligations courtes) rapportent peu. Le rendement supplémentaire est la récompense pour accepter l'incertitude supplémentaire.",
      "Il n'y a pas de repas gratuit : tout investissement offrant un rendement « garanti » élevé cache le risque quelque part — liquidité, fraude, ou un risque que vous ne voyez pas. La question n'est jamais « rendement élevé ou faible ? » mais « suis-je suffisamment payé pour le risque que je prends ? »"
    ],
    "keyPoints": [
      "Le risque se mesure généralement par la volatilité (écart-type des rendements).",
      "La diversification réduit le risque sans sacrifier beaucoup de rendement — le rare repas gratuit.",
      "Votre tolérance au risque dépend de votre horizon temporel et de vos besoins, pas seulement de votre tempérament.",
      "« Sans risque » signifie généralement dette publique à court terme ; tout le reste ajoute une prime de risque."
    ],
    "formula": {
      "expression": "Rendement attendu = Taux sans risque + Prime de risque",
      "legend": "Taux sans risque = rendement de la dette publique sûre · Prime de risque = rémunération supplémentaire pour le risque pris",
      "note": "Une action pourrait être : 4 % sans risque + 5 % de prime action = ~9 % attendu."
    },
    "example": {
      "scenario": "Les liquidités rapportent ~2 %, les obligations d'État ~4 %, les actions ~9 % sur le long terme. Pourquoi ne pas détenir uniquement des actions ?",
      "steps": [
        "Le ~5 % supplémentaire des actions par rapport aux obligations est la prime de risque action — le prix à payer pour traverser les krachs.",
        "Les actions peuvent chuter de 40 % ou plus en un an ; les liquidités non.",
        "Si vous avez besoin de l'argent dans 1 an, le risque des actions est inacceptable.",
        "Si vous en avez besoin dans 30 ans, le risque de NE PAS détenir d'actions (l'érosion par l'inflation) est pire."
      ],
      "result": "Même actif, décision différente — le risque dépend de votre horizon, pas seulement de l'actif."
    },
    "deepDive": [
      "Une erreur courante est de traiter la volatilité et le « risque réel » comme identiques. Pour un investisseur à long horizon, une baisse de 30 % n'est pas une perte — c'est une occasion d'acheter moins cher. Le vrai risque est la perte définitive de capital (une entreprise qui tombe à zéro) ou le fait d'être contraint de vendre au plus bas. La volatilité n'est que le prix d'entrée.",
      "La capacité de risque (pouvez-vous vous permettre la perte ?) devrait davantage guider l'allocation d'actifs que la tolérance au risque (combien de perte pouvez-vous encaisser psychologiquement ?). Les personnes ayant une capacité élevée mais une tolérance faible finissent souvent trop prudentes et manquent d'argent en termes réels ; celles ayant une capacité faible mais une tolérance élevée se ruinent. Adaptez le plan à la capacité, puis augmentez progressivement la tolérance par l'éducation."
    ],
    "glossary": [
      {
        "term": "Volatilité",
        "def": "À quel point le prix d'un actif fluctue — le proxy habituel du risque."
      },
      {
        "term": "Prime de risque action",
        "def": "Le rendement supplémentaire que les actions offrent par rapport à la dette sans risque."
      },
      {
        "term": "Baisse maximale (drawdown)",
        "def": "La chute d'un sommet à un creux dans la valeur d'un investissement."
      }
    ]
  },
  "opportunity-cost": {
    "title": "Coût d'opportunité",
    "hook": "Le véritable coût de toute chose est la meilleure chose à laquelle vous avez renoncé pour l'obtenir.",
    "tldr": "Le coût d'opportunité est la valeur de la meilleure alternative à laquelle vous renoncez en faisant un choix.",
    "definition": [
      "Chaque choix utilise de l'argent ou du temps limités, donc choisir une chose signifie ne pas en choisir une autre. Le coût d'opportunité est la valeur de la meilleure alternative à laquelle vous avez renoncé. Dépenser 5 000 € pour améliorer une voiture, c'est aussi ne pas investir ces 5 000 € — la croissance manquée fait partie du coût réel de la voiture.",
      "La plupart des gens ne chiffrent que le coût visible (l'étiquette de prix) et ignorent le coût invisible (ce que l'argent aurait fait à la place). Prendre en compte le coût d'opportunité rend beaucoup de choses « bon marché » chères, et beaucoup de choses « chères » raisonnables."
    ],
    "keyPoints": [
      "Seule la meilleure alternative suivante compte, pas toutes les alternatives combinées.",
      "Les coûts irrécupérables sont sans importance — ils sont perdus quoi que vous fassiez maintenant.",
      "Le temps a aussi un coût d'opportunité : les heures ont un équivalent financier.",
      "Comparer des options sans leurs coûts d'opportunité mène systématiquement à de mauvais choix."
    ],
    "formula": {
      "expression": "Coût réel = Coût direct + Rendement renoncé",
      "legend": "Coût direct = ce que vous payez · Rendement renoncé = ce que l'argent aurait rapporté",
      "note": "Sur 30 ans à 7 %, 1 € dépensé représente en réalité 7,61 € de richesse future perdue."
    },
    "example": {
      "scenario": "Acheter une télévision à 3 000 € à crédit à 18 %, ou payer comptant depuis un fonds rapportant 7 % ? Sur un horizon de 10 ans.",
      "steps": [
        "Financement : 3 000 € à 18 % sur 10 ans (si non remboursé) ≈ 15 700 € dus.",
        "Paiement comptant : perte de 10 ans de croissance sur 3 000 € à 7 % ≈ 5 900 € manqués.",
        "Dans les deux cas, la « télé à 3 000 € » coûte bien plus que 3 000 €.",
        "Meilleure voie : épargner d'abord, acheter comptant, garder les 2 900 € de différence investis."
      ],
      "result": "La télé n'a jamais coûté 3 000 €. Compté honnêtement, elle a coûté des années de capitalisation — le coût d'opportunité est l'étiquette de prix cachée."
    },
    "deepDive": [
      "Le coût d'opportunité recadre l'idée d'« économiser de l'argent ». Passer deux heures pour économiser 10 € n'a de sens que si la meilleure utilisation alternative de votre temps vaut moins de 5 €/heure. La même logique révèle pourquoi « je l'ai eu en solde » est souvent une rationalisation : la question est de savoir si la chose valait son coût total, pas si la réduction était importante.",
      "Les entreprises utilisent constamment ce principe — le choix des investissements classe les projets selon le rendement du meilleur projet écarté, pas selon le profit absolu. Dire oui à un projet médiocre revient silencieusement à dire non à un meilleur. Le talent n'est pas de trouver de bonnes options ; c'est de refuser les bonnes options qui bloquent les excellentes."
    ],
    "glossary": [
      {
        "term": "Coût irrécupérable",
        "def": "Argent déjà dépensé qui ne devrait pas influencer les décisions futures."
      },
      {
        "term": "Choix des investissements",
        "def": "Sélection des projets qu'une entreprise finance, selon leur rendement."
      },
      {
        "term": "Taux de rentabilité minimum",
        "def": "Le rendement minimum qu'un projet doit atteindre pour valoir la peine."
      }
    ]
  },
  "diversification": {
    "title": "Diversification",
    "hook": "N'essayez pas de repérer le gagnant — possédez tout le terrain pour ne jamais le manquer.",
    "tldr": "Répartir son argent entre de nombreux actifs peu corrélés pour qu'un seul échec ne puisse pas vous couler, tout en conservant le rendement global.",
    "definition": [
      "La diversification consiste à détenir de nombreux actifs dont les risques n'évoluent pas ensemble. Si un secteur s'effondre, d'autres peuvent tenir bon, lissant le parcours sans sacrifier beaucoup de rendement attendu. La magie réside dans la faible corrélation : combiner des actifs instables qui ne tremblent pas en même temps produit un portefeuille étonnamment stable.",
      "C'est ce qui se rapproche le plus d'un repas gratuit en finance — vous réduisez fortement le risque tout en rognant à peine le rendement. La limite est qu'une fois tout diversifié, il reste le risque propre au marché, qui ne peut être diversifié."
    ],
    "keyPoints": [
      "Le risque baisse rapidement à mesure qu'on ajoute des actifs non corrélés, puis se stabilise — 20 à 30 titres captent l'essentiel du bénéfice.",
      "Diversifiez entre classes d'actifs (actions, obligations, immobilier), zones géographiques et secteurs.",
      "C'est la corrélation, pas le nombre, qui compte — 30 banques ne sont pas diversifiées.",
      "La sur-diversification (« diworsification ») ajoute des coûts et de la complexité sans sécurité supplémentaire."
    ],
    "formula": {
      "expression": "Variance du portefeuille = Σ wᵢ²·σᵢ² + ΣΣ wᵢ·wⱼ·σᵢ·σⱼ·ρᵢⱼ",
      "legend": "w = poids · σ = volatilité · ρ = corrélation entre les actifs",
      "note": "Un ρ faible réduit les termes croisés, c'est de là que vient la réduction du risque."
    },
    "example": {
      "scenario": "Deux actions, chacune à 50/50, même volatilité de 20 %. Comparez ρ = 1,0 (mouvements identiques) et ρ = 0.",
      "steps": [
        "ρ = 1,0 : volatilité du portefeuille = 20 % (aucun bénéfice, elles bougent comme une seule)",
        "ρ = 0 : volatilité du portefeuille = √(0,5²·20² + 0,5²·20²) ≈ 14,1 %",
        "Risque réduit d'environ 30 % pour le même rendement attendu, simplement en associant des actions non corrélées.",
        "Les rendements se moyennent ; l'inconvénient non."
      ],
      "result": "Même rendement attendu, environ 30 % de risque en moins — le repas gratuit, payé en renonçant à la chance de ne détenir que le gagnant."
    },
    "deepDive": [
      "La diversification échoue précisément quand vous en avez le plus besoin : en cas de krach, les corrélations bondissent vers 1 car « tout s'effondre ensemble ». Détenir des obligations, des liquidités ou de l'or aide car leur corrélation avec les actions reste souvent (pas toujours) faible en période de panique. La vraie diversification consiste à posséder ce qui vous protège quand les actions ne le font pas, pas à posséder de nombreuses actions.",
      "Les fonds indiciels et les ETF offrent une diversification à faible coût. Un seul ETF actions mondiales peut détenir des milliers d'actions pour ~0,1 % par an — bien mieux que de sélectionner une douzaine de titres à la main. L'ennemi de la diversification est la conviction dans un seul pari ; l'ami est l'humilité d'admettre que l'on ne peut pas savoir quelle ligne gagnera."
    ],
    "glossary": [
      {
        "term": "Corrélation",
        "def": "À quel point les rendements de deux actifs évoluent ensemble (−1 à +1)."
      },
      {
        "term": "Risque systématique",
        "def": "Le risque global du marché que la diversification ne peut éliminer."
      },
      {
        "term": "Diworsification",
        "def": "Sur-diversification au point d'ajouter des coûts sans bénéfice."
      }
    ]
  },
  "dollar-cost-averaging": {
    "title": "Investissement programmé (moyenne des coûts)",
    "hook": "Achetez un peu chaque mois selon un calendrier — et arrêtez d'essayer de synchroniser le marché.",
    "tldr": "Investir un montant fixe à intervalles réguliers, de sorte que vous achetiez plus de titres quand les prix sont bas et moins quand ils sont élevés.",
    "definition": [
      "L'investissement programmé (dollar-cost averaging, DCA) consiste à investir la même somme selon un calendrier fixe, quel que soit le prix. Comme le montant est fixe, vous achetez automatiquement plus d'unités quand les prix baissent et moins quand ils montent. Cela fait baisser votre prix d'achat moyen et vous évite la tâche impossible de repérer le meilleur moment.",
      "Sa véritable force est comportementale : cela transforme l'investissement en habitude et supprime l'angoisse du « est-ce le bon moment ? ». Vous n'obtenez jamais le meilleur prix unique, mais vous ne misez jamais tout juste avant un krach non plus."
    ],
    "keyPoints": [
      "Argent fixe + prix variable = plus de titres quand c'est bon marché, moins quand c'est cher.",
      "Supprime l'émotion : c'est le calendrier qui décide, pas votre humeur.",
      "L'investissement en une fois bat en moyenne le DCA (les marchés montent dans le temps), mais le DCA réduit le regret et le risque de mauvais timing.",
      "Fonctionne mieux avec des actifs volatils que vous voulez conserver à long terme, comme des fonds actions larges."
    ],
    "formula": {
      "expression": "Prix moyen = Total investi ÷ Total des titres achetés",
      "legend": "Total investi = somme des versements fixes · Total des titres = Σ (versement ÷ prix du jour)",
      "note": "C'est la moyenne harmonique des prix — toujours ≤ à la moyenne simple."
    },
    "example": {
      "scenario": "Investissez 300 €/mois pendant 4 mois. Prix : 10 €, 6 €, 8 €, 12 €. Comparez à un achat unique de 1 200 € au prix moyen.",
      "steps": [
        "Titres : 30 + 50 + 37,5 + 25 = 142,5 titres",
        "Total investi = 1 200 € → prix moyen = 1200 ÷ 142,5 ≈ 8,42 €",
        "Prix moyen simple = (10+6+8+12) ÷ 4 = 9,00 €",
        "Le DCA a acheté moins cher (8,42 € < 9,00 €) en chargeant à 6 €."
      ],
      "result": "En achetant plus au prix bas, le DCA a fait baisser votre coût sous la moyenne simple — un petit avantage réel, répété pendant des décennies."
    },
    "deepDive": [
      "L'avantage du DCA vient de l'arithmétique : la moyenne harmonique est toujours inférieure à la moyenne arithmétique quand les prix varient. Mais c'est une curiosité mathématique, pas une garantie de profit — si les prix ne font que monter, vous auriez mieux fait d'investir tout immédiatement (l'investissement en une fois gagne environ deux fois sur trois dans les marchés haussiers). L'argument honnête en faveur du DCA est le risque et le comportement, pas le rendement.",
      "Le danger du DCA est de l'arrêter pendant les krachs — précisément quand il achète le moins cher. Les investisseurs qui font une pause « jusqu'à ce que les choses se calment » perdent tout l'intérêt de la méthode. La discipline est la stratégie ; sans elle, le DCA n'est qu'un investissement en une fois ralenti avec de moins bons résultats."
    ],
    "glossary": [
      {
        "term": "Investissement en une fois",
        "def": "Investir tout d'un coup — l'alternative au DCA."
      },
      {
        "term": "Moyenne harmonique",
        "def": "La « moyenne des taux » que le DCA produit naturellement."
      },
      {
        "term": "Synchronisation du marché",
        "def": "Essayer d'acheter bas et de vendre haut en prédisant les mouvements — fonctionne rarement."
      }
    ]
  },
  "etf": {
    "title": "ETF et fonds indiciels",
    "hook": "Achetez tout le marché en un clic, pour quelques centimes — et battez la plupart des professionnels dans le temps.",
    "tldr": "Un fonds qui détient un panier d'actifs répliquant un indice, coté comme une action, avec des frais très faibles.",
    "definition": [
      "Un fonds indiciel réplique un panier (un indice comme le S&P 500 ou le MSCI World), donc vous détenez une part de centaines ou de milliers d'entreprises en un seul achat. Un ETF est un fonds qui se négocie en bourse comme une action, donc vous pouvez l'acheter et le vendre à tout moment ; la plupart des fonds indiciels sont désormais des ETF.",
      "Comme ils ne paient pas de gestionnaires pour sélectionner des actions, les fonds indiciels facturent des frais minimes (souvent moins de 0,2 % par an). Après coûts et impôts, les fonds indiciels à bas coût battent la grande majorité des fonds gérés activement sur de longues périodes — un résultat si constant qu'il est aujourd'hui traité comme une quasi-loi."
    ],
    "keyPoints": [
      "Les frais (TER) comptent énormément : 1 % contre 0,1 % sur 30 ans ≈ un écart de richesse de 25 %.",
      "Un indice large = diversification instantanée entre secteurs et pays.",
      "Vous obtenez le rendement du marché — ni plus, ni moins. Cela bat ~90 % des professionnels sur 15 ans ou plus.",
      "Fiscalement efficace et simple : un seul fonds peut constituer tout votre portefeuille."
    ],
    "formula": {
      "expression": "Votre rendement ≈ Rendement du marché − Frais − Frottement fiscal",
      "legend": "Rendement du marché = performance de l'indice · Frais = ratio de frais total · Frottement fiscal = fuite fiscale annuelle",
      "note": "Les frais se capitalisent contre vous tout comme les rendements se capitalisent pour vous."
    },
    "example": {
      "scenario": "100 000 € investis pendant 30 ans à 7 % de rendement du marché. Comparez un fonds à 1,0 % de frais et un ETF à 0,1 % de frais.",
      "steps": [
        "Frais de 1,0 % : net 6,0 % → 100 000 × 1,06³⁰ ≈ 574 000 €",
        "Frais de 0,1 % : net 6,9 % → 100 000 × 1,069³⁰ ≈ 738 000 €",
        "Même marché, même stratégie, écart de frais de 0,9 %/an.",
        "Écart ≈ 164 000 € — plus que votre investissement initial."
      ],
      "result": "Une différence de frais de 0,9 % a englouti 164 000 € en 30 ans. Le fonds le moins cher est généralement le meilleur fonds."
    },
    "deepDive": [
      "Pourquoi les fonds actifs perdent-ils généralement ? Les marchés sont compétitifs et les prix reflètent déjà l'information disponible, donc battre la moyenne nécessite de trouver des erreurs que d'autres manquent — et la moyenne est difficile à battre après coûts. Les rares qui y parviennent sont difficiles à identifier à l'avance et répètent rarement leur performance. L'indexation abandonne le jeu ingagnable de la sélection d'actions pour gagner le jeu gagnable des coûts et de la discipline.",
      "Tous les ETF ne sont pas des fonds indiciels, et tous les fonds indiciels ne sont pas bons. Certains ETF suivent des thèmes de niche avec des frais élevés et une faible diversification ; certains fonds « smart beta » ajoutent de la complexité et des coûts pour un bénéfice incertain. Le choix par défaut pour la plupart des gens est un petit nombre de fonds larges, bon marché, pondérés par capitalisation, couvrant les actions et obligations mondiales — ennuyeux et efficace."
    ],
    "glossary": [
      {
        "term": "TER / Ratio de frais",
        "def": "Les frais annuels facturés par un fonds, en % des actifs."
      },
      {
        "term": "Pondération par capitalisation",
        "def": "Détenir des entreprises proportionnellement à leur taille — la méthode indicielle par défaut."
      },
      {
        "term": "Gestion active",
        "def": "Un gestionnaire sélectionne des actions en essayant de battre l'indice — échoue généralement après frais."
      }
    ]
  },
  "dividends": {
    "title": "Dividendes",
    "hook": "L'argent qu'une entreprise vous verse simplement pour détenir son action — un profit que vous n'avez pas eu besoin de vendre pour obtenir.",
    "tldr": "Un dividende est une part du profit d'une entreprise versée aux actionnaires, généralement trimestriellement, en espèces.",
    "definition": [
      "Lorsqu'une entreprise réalise un profit, elle peut réinvestir l'argent pour croître, racheter ses actions, ou en reverser une partie aux actionnaires sous forme de dividende. Un dividende est ce versement en espèces, typiquement quelques centimes ou euros par action, payé selon un calendrier régulier. Les entreprises matures et rentables (services publics, banques, biens de consommation) ont tendance à en verser ; les entreprises à forte croissance réinvestissent plutôt.",
      "Le rendement du dividende est le dividende annuel divisé par le prix de l'action — une mesure du rendement en espèces. Une action à 100 € versant 3 €/an a un rendement de 3 %. Les dividendes réinvestis représentent une part énorme des rendements à long terme, car ils se capitalisent lorsqu'on les utilise pour acheter plus d'actions."
    ],
    "keyPoints": [
      "Rendement = dividende annuel ÷ prix de l'action. Un rendement élevé peut signifier un risque élevé, pas une bonne affaire.",
      "La croissance du dividende compte plus que le rendement actuel — un versement croissant bat un versement statique généreux.",
      "Les dividendes ne sont pas de l'argent gratuit : le prix baisse généralement du montant du dividende à la date ex-dividende.",
      "Imposés comme revenu dans de nombreux pays, souvent moins favorablement que les plus-values."
    ],
    "formula": {
      "expression": "Rendement du dividende = Dividende annuel ÷ Prix de l'action",
      "legend": "Dividende annuel = versement en espèces par action et par an · Prix de l'action = prix actuel du marché",
      "note": "Taux de distribution = dividende ÷ bénéfices ; au-delà de ~75 %, c'est souvent insoutenable."
    },
    "example": {
      "scenario": "Une action coûte 50 €, verse 2 €/an (rendement de 4 %), et augmente le dividende de 7 %/an. Vous réinvestissez. Après 20 ans ?",
      "steps": [
        "Rendement de départ 4 %, croissant de 7 %/an → rendement sur coût après 20 ans ≈ 4 % × 1,07²⁰ ≈ 15,4 %",
        "Le dividende seul croît jusqu'à 2 € × 1,07²⁰ ≈ 7,73 €/action par an.",
        "Avec réinvestissement, rendement total ≈ croissance du prix + capitalisation des dividendes.",
        "La majeure partie du revenu final provient des dividendes sur dividendes, pas du montant initial."
      ],
      "result": "Un rendement de départ de 4 %, réinvesti et cultivé, devient un flux de trésorerie important — le moteur discret de la capitalisation à long terme."
    },
    "deepDive": [
      "Un « aristocrate du dividende » est une entreprise qui a augmenté son dividende pendant 25 ans ou plus — un signal de profits durables et croissants. Les investisseurs les apprécient pour leur revenu stable et leur protection contre l'inflation, puisque les versements augmentent dans le temps. Mais l'obsession du dividende a un piège : rechercher les rendements les plus élevés mène souvent à des entreprises en difficulté dont le rendement élevé est un avertissement (le prix a chuté, le versement peut être réduit).",
      "Dividendes contre rachats d'actions est un débat de longue date. Les deux reversent de l'argent aux actionnaires ; les rachats sont plus efficaces fiscalement et plus flexibles, les dividendes sont plus visibles et « collants » (les entreprises détestent les réduire). Économiquement, ils sont similaires ; la différence réside dans le traitement fiscal et le signal envoyé. Une entreprise qui rachète des actions bon marché est avisée ; une qui rachète des actions surévaluées détruit de la valeur."
    ],
    "glossary": [
      {
        "term": "Date ex-dividende",
        "def": "La date limite : possédez l'action avant cette date pour recevoir le prochain dividende."
      },
      {
        "term": "Taux de distribution",
        "def": "Part des bénéfices versée en dividendes — indicateur de soutenabilité."
      },
      {
        "term": "DRIP",
        "def": "Plan de réinvestissement des dividendes — rachète automatiquement des actions avec les dividendes."
      }
    ]
  },
  "market-cap": {
    "title": "Capitalisation boursière",
    "hook": "Comment le marché met une étiquette de prix sur une entreprise entière — prix de l'action multiplié par le nombre d'actions.",
    "tldr": "La capitalisation boursière est la valeur totale d'une entreprise = prix de l'action × nombre d'actions en circulation.",
    "definition": [
      "La capitalisation boursière est la valorisation par le marché boursier d'une entreprise entière : le prix d'une action multiplié par le nombre d'actions existantes. Une action à 100 € avec 10 millions d'actions a une capitalisation d'1 milliard d'euros. C'est la réponse la plus simple à « combien vaut cette entreprise, selon le marché ? »",
      "Les catégories de taille comptent : les grandes capitalisations (>10 Md$) sont stables et liquides ; les moyennes capitalisations sont en croissance ; les petites capitalisations sont plus risquées avec un potentiel plus élevé. Les indices pondérés par capitalisation donnent plus d'influence aux grandes entreprises, donc quelques géants peuvent dominer un indice."
    ],
    "keyPoints": [
      "Capitalisation boursière = prix × actions en circulation. C'est l'opinion du marché, pas un fait.",
      "Grande capitalisation = stabilité ; petite capitalisation = potentiel de croissance + risque.",
      "La capitalisation flottante ne compte que les actions disponibles au public, pas celles détenues par les initiés.",
      "La pondération par capitalisation signifie que les plus grandes entreprises dirigent les rendements de l'indice."
    ],
    "formula": {
      "expression": "Capitalisation boursière = Prix de l'action × Actions en circulation",
      "legend": "Prix de l'action = prix de négociation actuel · Actions en circulation = total des actions existantes",
      "note": "La valeur d'entreprise ajoute la dette et soustrait les liquidités pour une valorisation plus complète."
    },
    "example": {
      "scenario": "Entreprise A : action à 200 €, 50M d'actions → capitalisation de 10 Md€. Entreprise B : action à 20 €, 500M d'actions → capitalisation de 10 Md€. Laquelle est la plus grande ?",
      "steps": [
        "A : 200 × 50 000 000 = 10 000 000 000 €",
        "B : 20 × 500 000 000 = 10 000 000 000 €",
        "Même valeur de marché — le prix de l'action seul ne dit rien sur la taille.",
        "Une action « bon marché » à 20 € peut appartenir à une entreprise plus grande qu'une action à 200 €."
      ],
      "result": "Le prix de l'action n'a aucun sens pour comparer la taille. La capitalisation boursière est le véritable étalon."
    },
    "deepDive": [
      "La capitalisation boursière n'est pas la même chose que la valeur. Une entreprise peut avoir une capitalisation de 10 Md€ avec 2 Md€ de dette et pas de liquidités, ou une capitalisation de 10 Md€ sans dette et 3 Md€ de liquidités. La valeur d'entreprise (VE = capitalisation + dette − liquidités) est ce qu'un acquéreur paierait réellement, et des ratios comme VE/EBITDA sont souvent plus significatifs que le cours/bénéfice. La capitalisation reflète l'humeur du marché ; la VE reflète le prix sous-jacent de l'entreprise.",
      "Dans les indices pondérés par capitalisation, les plus grandes entreprises obtiennent le plus grand poids. Quand un géant progresse, son poids augmente, donc l'indice se concentre sur les gagnants — parfois une seule entreprise peut représenter 7 % d'un indice. C'est généralement sans problème (cela reflète où se trouve la valeur), mais cela signifie que les acheteurs d'indices suivent implicitement la tendance, en détenant toujours plus de ce qui a déjà monté."
    ],
    "glossary": [
      {
        "term": "Flottant",
        "def": "Les actions que le public peut réellement échanger, hors actions bloquées détenues par les initiés."
      },
      {
        "term": "Valeur d'entreprise (VE)",
        "def": "Capitalisation + dette − liquidités — le prix complet pour acheter l'entreprise."
      },
      {
        "term": "Ajustement du flottant",
        "def": "Pondération de l'indice selon le flottant, et non le total des actions."
      }
    ]
  },
  "liquidity": {
    "title": "Liquidité",
    "hook": "À quelle vitesse pouvez-vous transformer un actif en espèces sans sacrifier le prix — la sécurité qu'on ne remarque que lorsqu'elle disparaît.",
    "tldr": "La liquidité est la facilité et le faible coût avec lesquels vous pouvez vendre un actif contre des espèces à un prix équitable.",
    "definition": [
      "La liquidité est la capacité de convertir un actif en espèces rapidement sans subir de perte. Les espèces sont parfaitement liquides ; une action largement négociée est très liquide ; l'immobilier ou le capital-investissement sont illiquides — la vente prend des mois et nécessite souvent une baisse de prix. La liquidité a deux volets : la vitesse (à quelle vitesse pouvez-vous vendre) et le coût (quelle concession de prix devez-vous accepter).",
      "Sur les marchés, la liquidité se manifeste par l'écart entre l'offre et la demande (bid-ask) et la profondeur : une action liquide a un écart serré et beaucoup d'actions disponibles à chaque prix ; une action illiquide a un écart large et des ordres peu nombreux, donc les grosses transactions font bouger le prix contre vous. La liquidité est confiance — elle s'évapore dans les paniques précisément quand les gens en ont le plus besoin."
    ],
    "keyPoints": [
      "Liquidités et équivalents = liquidité élevée ; immobilier, capital-investissement, art = faible.",
      "L'écart offre-demande et la profondeur mesurent la liquidité du marché ; serré + profond = bon.",
      "Les actifs illiquides versent souvent une « prime de liquidité » — un rendement supplémentaire pour le blocage.",
      "La liquidité se tarit en crise : « elle n'est là que quand on n'en a pas besoin. »"
    ],
    "formula": {
      "expression": "Coût de liquidation ≈ (Écart ÷ 2) × Taille de la transaction",
      "legend": "Écart = écart entre offre et demande · Taille de la transaction = nombre d'actions vendues",
      "note": "Pire pour les grosses transactions sur des marchés peu profonds — l'« impact de marché » pousse le prix contre vous."
    },
    "example": {
      "scenario": "Vous devez vendre 100 000 € de deux actions rapidement. Action X : écart de 0,02 € sur un prix de 50 €. Action Y : écart de 0,80 € sur un prix de 50 €.",
      "steps": [
        "X : coût du demi-écart = (0,02÷2) × 2000 actions = 20 €",
        "Y : coût du demi-écart = (0,80÷2) × 2000 actions = 800 €",
        "Même transaction, même prix — Y coûte 780 € de plus à sortir instantanément.",
        "Et le prix de Y glisserait encore plus au fur et à mesure de la vente (impact de marché)."
      ],
      "result": "La liquidité a un prix. Dans la précipitation, l'action illiquide vous taxe discrètement de 780 € — le coût caché de posséder des marchés peu profonds."
    },
    "deepDive": [
      "La prime de liquidité explique pourquoi les actifs illiquides (capital-investissement, infrastructures, obligations longues) offrent des rendements attendus plus élevés : les investisseurs exigent une rémunération pour immobiliser leur argent. Mais la prime ne vaut la peine que si vous n'avez véritablement pas besoin de l'argent bientôt — si vous êtes contraint de vendre un actif illiquide, vous perdez la prime ET subissez une décote. La planification de la liquidité (détenir assez de liquidités ou équivalents) est ce qui vous permet réellement de capter la prime.",
      "Le risque de liquidité est systémique, pas seulement personnel. En 2008 et lors de plusieurs événements éclair sur le marché obligataire, la liquidité a disparu sur tout le marché à la fois : les écarts ont explosé, les acheteurs ont disparu, et des actifs « sûrs » sont devenus impossibles à négocier à un prix raisonnable. Des fonds qui promettaient une liquidité quotidienne mais détenaient des actifs illiquides se sont effondrés. La leçon : la liquidité d'un actif en marché calme n'en dit que peu sur sa liquidité en crise."
    ],
    "glossary": [
      {
        "term": "Écart offre-demande",
        "def": "L'écart entre les meilleurs prix d'achat et de vente — une taxe sur la liquidité."
      },
      {
        "term": "Impact de marché",
        "def": "À quel point votre propre transaction fait bouger le prix contre vous."
      },
      {
        "term": "Prime de liquidité",
        "def": "Le rendement supplémentaire exigé par les investisseurs pour immobiliser leur argent."
      }
    ]
  },
  "bull-bear-market": {
    "title": "Marchés haussiers et baissiers",
    "hook": "Les taureaux chargent vers le haut, les ours frappent vers le bas — deux noms pour les humeurs qui font bouger chaque prix.",
    "tldr": "Un marché haussier est une hausse durable des prix ; un marché baissier est une baisse durable, généralement de 20 % ou plus depuis le sommet.",
    "definition": [
      "Un marché haussier est une période prolongée de hausse des prix et d'optimisme ; un marché baissier est une chute prolongée, conventionnellement une baisse de 20 % ou plus depuis un sommet récent, accompagnée de pessimisme et souvent de récession. Les noms viennent de la façon dont chaque animal attaque : un taureau lève ses cornes vers le haut, un ours abat ses pattes vers le bas.",
      "Les marchés passent la majeure partie de l'histoire en territoire haussier, ce qui explique pourquoi « le temps passé sur le marché bat le fait de synchroniser le marché ». Mais les marchés baissiers sont l'épreuve de tout investisseur — ils paraissent longs, effraient les gens qui vendent au plus bas, et récompensent ceux qui tiennent bon ou achètent pendant cette période. La plupart des rendements à long terme sont obtenus en restant investi à travers les deux."
    ],
    "keyPoints": [
      "Baissier = −20 % depuis le sommet (règle empirique) ; correction = −10 %.",
      "Les marchés haussiers durent des années ; les baissiers sont plus courts mais plus violents, et paraissent pires.",
      "Les rebonds en marché baissier trompent les gens — de grosses journées de hausse surviennent souvent au sein de tendances baissières.",
      "Les plus grandes journées de hausse se regroupent dans les pires périodes de baisse — les manquer ruine les rendements."
    ],
    "formula": {
      "expression": "Gain de récupération nécessaire = 1 ÷ (1 − perte) − 1",
      "legend": "perte = fraction perdue depuis le sommet (en décimale)",
      "note": "Perdre 50 % → nécessite +100 % juste pour revenir à l'équilibre. Les pertes sont asymétriques."
    },
    "example": {
      "scenario": "Votre portefeuille chute de 50 % dans un marché baissier. De combien doit-il gagner pour récupérer ?",
      "steps": [
        "Perte = 50 %, donc valeur restante = 50 % du montant initial.",
        "Gain de récupération = 1 ÷ (1 − 0,5) − 1 = 1 ÷ 0,5 − 1 = 100 %",
        "Une perte de 50 % nécessite un gain de 100 % pour revenir à l'équilibre.",
        "Une perte de 20 % nécessite seulement +25 % ; une perte de 80 % nécessite +400 %."
      ],
      "result": "Les pertes sont asymétriques — plus le trou est profond, plus la remontée est disproportionnellement difficile. C'est pourquoi éviter une perte catastrophique compte plus que maximiser les gains."
    },
    "deepDive": [
      "Les marchés baissiers se définissent par le prix, mais sont causés par des fondamentaux : récessions, chocs de taux, crises de crédit ou bulles éclatées. Certains sont courts et en forme de V (2020), d'autres longs et pénibles (2000-2002, 2007-2009). Essayer d'en sortir avant et d'y revenir après est systématiquement destructeur — les investisseurs qui passent aux liquidités manquent la reprise, et les reprises commencent souvent sur les pires nouvelles.",
      "Le piège comportemental est que les marchés baissiers semblent permanents pendant qu'on les vit, et les marchés haussiers semblent fragiles. Les données disent le contraire : la tendance à long terme est haussière, et le marché baissier moyen se termine en moins d'un an. La discipline — une allocation que vous pouvez tenir à travers une chute de 40 % sans flancher — est le facteur déterminant numéro un pour capter le rendement à long terme du marché."
    ],
    "glossary": [
      {
        "term": "Correction",
        "def": "Une chute d'environ 10 % depuis un sommet — plus petite qu'un marché baissier."
      },
      {
        "term": "Rebond du chat mort",
        "def": "Un bref rebond au sein d'un marché en baisse — un piège pour les acheteurs précoces."
      },
      {
        "term": "Baisse maximale (drawdown)",
        "def": "La chute d'un sommet passé au creux suivant."
      }
    ]
  },
  "budgeting-50-30-20": {
    "title": "Le budget 50/30/20",
    "hook": "Un budget en une ligne qui fonctionne vraiment : besoins, envies, futur — divisez votre salaire en trois.",
    "tldr": "Une règle de budget simple : 50 % du revenu pour les besoins, 30 % pour les envies, 20 % pour l'épargne et le remboursement de dettes.",
    "definition": [
      "La règle 50/30/20 divise le revenu après impôts en trois catégories : 50 % pour les besoins (loyer, nourriture, factures, paiements minimums de dettes — les choses que vous devez payer), 30 % pour les envies (restaurants, loisirs, voyages — les choses que vous choisissez), et 20 % pour le futur (épargne, investissement, remboursement supplémentaire de dettes). C'est une ligne directrice, pas une loi : dans les villes chères, la part des « besoins » dépasse souvent 50 %, donc la règle s'adapte.",
      "Sa force réside dans la simplicité. Au lieu de suivre 30 catégories, vous classez chaque dépense dans l'une des trois. Les 20 % pour le futur sont le noyau non négociable — c'est l'argent qui achète votre liberté. Si vous ne pouvez pas encore atteindre 20 %, vous orientez tout le budget pour lui faire de la place."
    ],
    "keyPoints": [
      "Besoins = survie + obligations ; Envies = tout ce qui est facultatif ; Futur = épargne + remboursement de dettes.",
      "Les 20 % pour le futur sont l'objectif qui achète la liberté à long terme.",
      "Les zones à loyer élevé peuvent pousser les besoins au-delà de 50 % — ajustez d'abord les envies, pas l'épargne.",
      "Payez-vous d'abord : automatisez les 20 % le jour de paie, pas « ce qu'il reste »."
    ],
    "formula": {
      "expression": "Salaire net × {0,5 besoins · 0,3 envies · 0,2 futur}",
      "legend": "Salaire net = revenu après impôts · futur = épargne + investissement + remboursement supplémentaire de dettes",
      "note": "Automatisez les 20 % le jour où vous êtes payé — ne comptez jamais sur les restes."
    },
    "example": {
      "scenario": "Vous touchez 2 500 €/mois net. Appliquez la règle 50/30/20.",
      "steps": [
        "Besoins : 1 250 € (loyer, courses, factures, dettes minimales)",
        "Envies : 750 € (restaurants, abonnements, loisirs)",
        "Futur : 500 € (fonds d'urgence, investissement, dettes supplémentaires)",
        "Investir 500 €/mois à 7 % pendant 30 ans → ≈ 610 000 €"
      ],
      "result": "Juste la part « futur » d'un salaire ordinaire, investie régulièrement, construit une richesse sérieuse — sans épargne draconienne."
    },
    "deepDive": [
      "La règle fonctionne parce qu'elle est tolérante et tournée vers l'avenir. Les budgets base zéro stricts (chaque euro affecté) sont précis mais épuisants ; le 50/30/20 conserve un tiers du revenu pour le plaisir, ce qui le rend soutenable. L'échec courant est de confondre envies et besoins — un forfait téléphonique trop cher, le « bon » quartier, un prêt auto plus important que nécessaire — qui grignote silencieusement la part des 20 % pour le futur.",
      "Les 20 % sont mieux déployés dans un ordre de priorité : d'abord, un petit fonds d'urgence (pour stopper l'hémorragie des surprises) ; ensuite, rembourser les dettes toxiques à taux élevé (un « rendement » garanti de 18 %) ; puis, constituer un fonds d'urgence de 3 à 6 mois ; enfin, investir dans des fonds à bas coût. Chaque étape supprime une source de stress financier futur avant que la suivante ne commence."
    ],
    "glossary": [
      {
        "term": "Besoins",
        "def": "Dépenses essentielles, non facultatives, et paiements minimums de dettes."
      },
      {
        "term": "Envies",
        "def": "Dépenses facultatives qui améliorent la vie mais peuvent être réduites."
      },
      {
        "term": "Se payer en premier",
        "def": "Épargner/investir le jour de paie avant toute dépense discrétionnaire."
      }
    ]
  },
  "emergency-fund": {
    "title": "Fonds d'urgence",
    "hook": "Le coussin de trésorerie qui transforme une crise en simple désagrément — et vous empêche de vendre vos investissements au pire moment.",
    "tldr": "Une réserve de 3 à 6 mois de dépenses conservée en espèces sûres et accessibles, pour couvrir les imprévus sans s'endetter.",
    "definition": [
      "Un fonds d'urgence est de l'argent mis de côté pour des dépenses essentielles imprévues : perte d'emploi, facture médicale, réparation de voiture, chaudière en panne. Il se trouve sur un compte sûr et immédiatement accessible (épargne à haut rendement, marché monétaire) — non investi, car son rôle est d'être là, inchangé, le jour où vous en avez besoin. La cible standard est de 3 à 6 mois de dépenses essentielles ; un revenu moins stable pousse cela vers 9 à 12 mois.",
      "Son véritable but est une assurance comportementale. Sans lui, une surprise vous force à utiliser une carte de crédit (dette toxique) ou à vendre des investissements — souvent au plus bas du marché. Avec lui, la même surprise n'est qu'un désagrément. Vous payez cette sécurité en renonçant aux rendements d'investissement sur cet argent — un petit coût délibéré pour une tranquillité d'esprit énorme."
    ],
    "keyPoints": [
      "Objectif : 3 à 6 mois de dépenses essentielles (loyer, nourriture, factures, dettes minimales).",
      "Gardez-le liquide et sûr — un compte épargne, pas la bourse.",
      "Revenu irrégulier ou salaire unique → privilégiez 9 à 12 mois.",
      "Reconstituez-le après utilisation ; ce n'est pas une caisse noire pour les envies."
    ],
    "formula": {
      "expression": "Objectif du fonds = Dépenses essentielles mensuelles × Mois de couverture",
      "legend": "Dépenses essentielles = besoins uniquement, pas envies · Mois = 3 à 6 (plus si le revenu est instable)",
      "note": "Utilisez les « besoins » de votre budget 50/30/20 — le plancher, pas vos dépenses totales."
    },
    "example": {
      "scenario": "Dépenses mensuelles essentielles = 1 800 €. Constituez un fonds de 6 mois. Où placer les 10 800 € ?",
      "steps": [
        "Objectif = 1 800 × 6 = 10 800 €",
        "Placez-le sur un compte épargne à haut rendement rapportant ~3 %",
        "Pour une réparation de voiture imprévue de 1 200 €, vous payez comptant — pas de carte, pas d'actions vendues.",
        "Reconstituez les 1 200 € sur quelques mois grâce à la part « futur » du budget."
      ],
      "result": "Une urgence de 1 200 € devient un léger désagrément au lieu d'un solde de carte de crédit de 1 200 € à 18 %."
    },
    "deepDive": [
      "Les gens débattent de savoir s'il faut investir le fonds d'urgence. La réponse est non — son rôle n'est pas le rendement, c'est la fiabilité. Un fonds investi en actions pourrait chuter de 30 % précisément quand vous perdez votre emploi. Le « coût » des liquidités est le rendement auquel on renonce, et ce coût est le prix de l'assurance. Certains adoptent une structure à paliers : 1 mois en compte courant, le reste dans une épargne à haut rendement ou un fonds obligataire ultra-court pour un peu de rendement supplémentaire avec un risque minimal.",
      "Le fonds change le reste de votre vie financière. Une fois qu'il existe, vous pouvez investir le reste de votre argent à long terme sans vous inquiéter des baisses à court terme, car vous ne serez pas contraint de vendre. C'est le fondement qui rend l'investissement à long terme possible — sans lui, chaque baisse du marché est une menace personnelle."
    ],
    "glossary": [
      {
        "term": "Épargne à haut rendement",
        "def": "Un compte épargne offrant un intérêt compétitif, tout en restant garanti et liquide."
      },
      {
        "term": "Liquidité",
        "def": "La rapidité d'accès à l'argent sans perte — maximale pour un fonds d'urgence."
      },
      {
        "term": "Dépenses essentielles",
        "def": "Le coût mensuel minimum pour vivre et respecter ses obligations."
      }
    ]
  },
  "credit-score": {
    "title": "Score de crédit",
    "hook": "Un nombre à trois chiffres qui décide de ce que vous payez pour emprunter — et qui est largement entre vos mains.",
    "tldr": "Un chiffre résumant votre historique de crédit, utilisé par les prêteurs pour juger de votre capacité à rembourser.",
    "definition": [
      "Un score de crédit est un nombre (généralement entre 300 et 850) qui prédit la probabilité que vous remboursiez à temps l'argent emprunté. Il est construit à partir de votre historique de crédit : historique des paiements, montants dus, ancienneté des comptes, diversité du crédit et demandes récentes. Les prêteurs l'utilisent pour approuver les prêts et fixer les taux d'intérêt — un score plus élevé signifie un emprunt moins cher, ce qui peut représenter des dizaines de milliers d'euros économisés sur un prêt immobilier.",
      "Le score récompense un historique long et propre et pénalise les paiements manqués et les soldes élevés. Il mesure surtout un comportement de crédit, pas une richesse ou un revenu — une personne aux revenus modestes qui paie à temps peut obtenir un meilleur score qu'une personne aisée qui rate ses paiements. Vous pouvez le construire délibérément dans le temps, et le facteur le plus important — payer à temps — est entièrement sous votre contrôle."
    ],
    "keyPoints": [
      "L'historique de paiement (~35 %) est le facteur le plus important — ne manquez jamais un paiement.",
      "Le taux d'utilisation du crédit (~30 %) : gardez les soldes en dessous de 30 % des limites, moins c'est mieux.",
      "Les comptes anciens aident — gardez votre plus vieille carte ouverte même si elle n'est pas utilisée.",
      "Les nouvelles demandes causent de petites baisses temporaires — évitez de multiplier les demandes avant un crédit immobilier."
    ],
    "formula": {
      "expression": "Utilisation = Solde ÷ Limite de crédit",
      "legend": "Solde = montant actuellement dû · Limite de crédit = total disponible sur l'ensemble des cartes",
      "note": "Remboursez vos cartes avant la clôture du relevé — l'utilisation est déclarée à ce moment-là, pas seulement en fin de mois."
    },
    "example": {
      "scenario": "Limite de carte : 5 000 €. Vous portez un solde de 2 000 €. Comment cela se présente-t-il, et comment l'améliorer à moindre coût ?",
      "steps": [
        "Utilisation = 2000 ÷ 5000 = 40 % — au-dessus du seuil « correct » de 30 %.",
        "Ramenez-le à 1 000 € → 20 % d'utilisation → amélioration du score.",
        "Ou demandez une augmentation de limite à 8 000 € (même solde de 2 000 € = 25 %).",
        "Idéal : payer intégralement chaque mois → utilisation proche de 0 %, aucun intérêt."
      ],
      "result": "Mêmes dépenses, utilisation déclarée plus faible, score plus élevé — et payer intégralement ne coûte rien en intérêts."
    },
    "deepDive": [
      "Un score solide rapporte surtout sur les gros emprunts. Sur un crédit immobilier de 250 000 € sur 30 ans, l'écart entre le meilleur taux et un taux intermédiaire peut être d'environ 1,5 point de pourcentage — soit plus de 70 000 € d'intérêts sur la durée du prêt. Le score mérite donc d'être soigné des mois avant tout emprunt important : réduire les soldes, éviter les nouvelles demandes, et corriger les erreurs sur votre rapport de crédit (fréquentes et gratuites à contester).",
      "Le score a de vraies limites. Il ne mesure ni l'épargne, ni le revenu, ni le patrimoine — quelqu'un avec un excellent score peut quand même être à une perte d'emploi du désastre s'il n'a pas de fonds d'urgence. Considérez-le comme un optimiseur de coût d'emprunt, pas comme une mesure de santé financière. Les personnes vraiment « invisibles au crédit » (sans historique) peuvent utiliser des cartes garanties ou des prêts constructeurs de crédit pour démarrer un dossier à partir de zéro."
    ],
    "glossary": [
      {
        "term": "Utilisation",
        "def": "Solde ÷ limite — la part du crédit disponible que vous utilisez."
      },
      {
        "term": "Demande formelle",
        "def": "Une vérification de crédit issue d'une demande — impact faible et temporaire sur le score."
      },
      {
        "term": "Carte garantie",
        "def": "Une carte adossée à un dépôt en espèces — un moyen de construire un crédit sans historique."
      }
    ]
  },
  "leverage": {
    "title": "Effet de levier",
    "hook": "L'argent emprunté amplifie les résultats — les gains grossissent, les pertes grossissent, exactement de la même façon.",
    "tldr": "L'effet de levier consiste à utiliser de l'argent emprunté pour augmenter les rendements — il amplifie également les gains et les pertes.",
    "definition": [
      "L'effet de levier consiste à utiliser du capital emprunté pour réaliser un investissement, afin de contrôler plus d'actifs que ce que votre propre argent permettrait. Si vous investissez 10 € des vôtres et empruntez 90 € pour acheter 100 € d'actions, vous avez un levier de 10× : une hausse de 10 % double vos capitaux propres, et une baisse de 10 % vous ruine. L'argent emprunté est une loupe dans les deux sens.",
      "Les entreprises utilisent l'effet de levier (la dette) pour amplifier le rendement des capitaux propres et bénéficier de la déductibilité fiscale des intérêts. Les investisseurs utilisent des prêts sur marge. Tous deux font face à la même vérité : le levier transforme une perte supportable en une perte fatale. C'est la manière la plus courante par laquelle des personnes compétentes font faillite — non pas parce qu'elles avaient tort, mais parce qu'elles n'ont pas pu rester solvables assez longtemps pour avoir raison."
    ],
    "keyPoints": [
      "Le levier multiplie les rendements — à la hausse ET à la baisse — selon le ratio de levier.",
      "L'intérêt est un coût fixe : il doit être payé quelle que soit la performance de l'actif.",
      "Les appels de marge peuvent vous forcer à vendre au pire moment possible.",
      "La déductibilité fiscale des intérêts rend la dette subtilement attrayante — et subtilement risquée."
    ],
    "formula": {
      "expression": "Rendement des capitaux propres = Rendement des actifs × (Actifs ÷ Capitaux propres)",
      "legend": "Actifs ÷ Capitaux propres = ratio de levier (par ex. 3× signifie 3 € d'actifs pour 1 € de capitaux propres)",
      "note": "Les pertes suivent la même formule — un rendement d'actif de −5 % à 3× donne −15 % sur les capitaux propres."
    },
    "example": {
      "scenario": "Vous achetez 100 € d'actions avec 50 € de fonds propres + 50 € empruntés à 5 % d'intérêt. L'action monte de 10 %. Quel est le rendement des capitaux propres ?",
      "steps": [
        "Gain sur l'actif = 10 €. Intérêt = 5 % × 50 € = 2,50 €.",
        "Gain net = 10 € − 2,50 € = 7,50 € sur 50 € de capitaux propres = 15 %.",
        "L'actif a rapporté 10 % ; vos capitaux propres ont rapporté 15 % — le levier a aidé.",
        "Si l'action avait baissé de 10 % : −10 € − 2,50 € = −12,50 € → −25 % de rendement des capitaux propres. Le levier a fait plus mal."
      ],
      "result": "Un mouvement de 10 % est devenu +15 % ou −25 %. L'amplificateur fonctionne dans les deux sens ; le coût de la dette est payé dans les deux cas."
    },
    "deepDive": [
      "La caractéristique dangereuse du levier est l'asymétrie avec la solvabilité. Un investisseur non endetté qui est « trop tôt » attend simplement ; un investisseur endetté qui est trop tôt reçoit un appel de marge et est forcé de vendre avant que le marché ne lui donne raison. Le levier supprime l'option d'attendre — il transforme « finalement dans le vrai » en « dans l'erreur ». C'est pourquoi le levier est fatal même pour des convictions correctes : il faut à la fois avoir raison sur la direction et être capable de survivre au chemin parcouru.",
      "Les entreprises arbitrent entre le levier et un bouclier fiscal (les intérêts sont déductibles, pas les dividendes) et un coût de faillite (trop de dette augmente le risque de défaut). La « structure de capital optimale » arbitre entre ces deux forces. Pour les particuliers, la leçon est plus brutale : utilisez le levier rarement, uniquement sur des actifs à long terme que vous pouvez conserver, et jamais dans des montants qu'un appel de marge pourrait vous forcer à liquider. Survivre est le préalable à toute autre stratégie."
    ],
    "glossary": [
      {
        "term": "Appel de marge",
        "def": "Une demande d'ajouter des liquidités ou de vendre des actifs lorsque la valeur des garanties empruntées baisse."
      },
      {
        "term": "Structure de capital",
        "def": "La combinaison de financement par dette et par capitaux propres d'une entreprise."
      },
      {
        "term": "Bouclier fiscal",
        "def": "L'économie d'impôt réalisée grâce à la déduction des paiements d'intérêts."
      }
    ]
  },
  "working-capital": {
    "title": "Fonds de roulement",
    "hook": "L'argent dont une entreprise a besoin juste pour faire tourner le moteur quotidien — le nerf de la guerre que la plupart des investisseurs ignorent.",
    "tldr": "Le fonds de roulement est l'argent à court terme immobilisé dans le fonctionnement de l'entreprise : actifs courants moins passifs courants.",
    "definition": [
      "Fonds de roulement = actifs courants (trésorerie, stocks, créances) − passifs courants (dettes fournisseurs, dette à court terme). C'est l'argent nécessaire pour financer les opérations quotidiennes : acheter des stocks, attendre que les clients paient, et couvrir les factures avant que le revenu n'arrive. Un fonds de roulement positif signifie que l'entreprise peut s'autofinancer à court terme ; un fonds de roulement négatif ou serré signifie qu'une crise de liquidité n'est jamais loin.",
      "Une entreprise peut être rentable sur le papier et pourtant faire faillite si elle manque de fonds de roulement — car le profit n'est pas de la trésorerie. Si elle vend beaucoup mais que les clients paient lentement pendant que les fournisseurs exigent du comptant, le profit apparaît mais le compte en banque se vide. Gérer le « cycle de conversion de trésorerie » (jours de stock + jours de créances − jours de dettes fournisseurs) est la façon dont les entreprises saines évitent que l'argent ne reste bloqué."
    ],
    "keyPoints": [
      "Fonds de roulement = actifs courants − passifs courants.",
      "Profit ≠ trésorerie : une entreprise rentable peut échouer si la trésorerie est immobilisée.",
      "Cycle de conversion de trésorerie = jours de stock + jours de créances − jours de dettes fournisseurs (plus bas est mieux).",
      "Un fonds de roulement négatif peut être un superpouvoir (par ex. les commerçants payés avant de stocker) ou un signal d'alerte."
    ],
    "formula": {
      "expression": "Fonds de roulement = Actifs courants − Passifs courants",
      "legend": "Actifs courants = trésorerie + stocks + créances (échéance < 1 an) · Passifs courants = dettes fournisseurs + dette à court terme (échéance < 1 an)",
      "note": "Cycle de conversion de trésorerie = Jours de stock + Jours de créances − Jours de dettes fournisseurs."
    },
    "example": {
      "scenario": "Un magasin : 30 k€ de stocks, 20 k€ dus par les clients, 10 k€ de trésorerie. Doit 25 k€ à des fournisseurs, exigibles bientôt. Est-ce sain ?",
      "steps": [
        "Actifs courants = 30 + 20 + 10 = 60 k€",
        "Passifs courants = 25 k€",
        "Fonds de roulement = 60 − 25 = 35 k€ (positif, confortable)",
        "Mais si les clients paient avec 60 jours de retard, la créance de 20 k€ est de la trésorerie lente — surveillez le cycle."
      ],
      "result": "Sur le papier, le magasin dispose de 35 k€ de fonds de roulement. Le risque n'est pas le total, mais le fait de savoir si les créances se transformeront en trésorerie avant l'échéance des dettes fournisseurs."
    },
    "deepDive": [
      "Certaines des meilleures entreprises fonctionnent avec un fonds de roulement négatif — elles encaissent l'argent des clients avant de payer leurs fournisseurs. Les supermarchés et les assureurs font cela : vous payez à la caisse / pour la police maintenant, ils paient leurs fournisseurs / les sinistres plus tard. C'est essentiellement un financement gratuit, un avantage structurel que les concurrents ne peuvent pas copier facilement. Cela se traduit par un solde de trésorerie important et croissant, financé par les opérations, pas seulement par les profits.",
      "Pour les investisseurs, la qualité du fonds de roulement sépare les bons résultats des mirages. La « qualité des bénéfices » vérifie si le profit se convertit en trésorerie : si le résultat net augmente mais que la trésorerie opérationnelle traîne, l'argent reste bloqué dans les créances ou les stocks — un signal d'alerte indiquant que les ventes sont peut-être à crédit et ne seront pas recouvrées, ou que les stocks ne se vendront pas. Surveiller la tendance du fonds de roulement par rapport aux ventes est un moyen discret mais puissant de détecter les problèmes tôt."
    ],
    "glossary": [
      {
        "term": "Actifs/passifs courants",
        "def": "Éléments censés se convertir en/depuis de la trésorerie dans un délai d'un an."
      },
      {
        "term": "Cycle de conversion de trésorerie",
        "def": "Combien de temps un euro reste immobilisé entre l'achat de stocks et l'encaissement de trésorerie."
      },
      {
        "term": "Qualité des bénéfices",
        "def": "La fiabilité avec laquelle le profit comptable se transforme en trésorerie réelle."
      }
    ]
  },
  "interest-rate": {
    "title": "Taux d'intérêt",
    "hook": "Un seul chiffre qui fixe le prix de chaque prêt, chaque obligation et chaque action sur Terre.",
    "tldr": "Le taux d'intérêt est le prix de l'emprunt d'argent — payé par l'emprunteur au prêteur, généralement sous forme de pourcentage annuel.",
    "definition": [
      "Un taux d'intérêt est le coût de l'emprunt d'argent, exprimé en pourcentage annuel du montant emprunté. Empruntez 1 000 € à 6 % pendant un an et vous payez 60 € d'intérêts. Le même taux est le rendement que le prêteur gagne en renonçant à l'usage de son argent. Les taux sont fixés par les banques centrales (le « taux directeur ») puis se répercutent, via les marchés, sur les prêts immobiliers, l'épargne, les obligations et les cartes de crédit.",
      "Les taux sont la gravité de la finance : quand ils montent, emprunter coûte plus cher, les dépenses et l'investissement ralentissent, les prix des actifs (surtout les obligations et les actions de croissance) baissent, et l'épargne rapporte plus. Quand ils baissent, c'est l'inverse. Chaque actif est valorisé par rapport au taux sans risque, donc un changement de taux se répercute d'un coup sur tout le système financier."
    ],
    "keyPoints": [
      "Taux nominal = le % affiché ; taux réel = nominal − inflation (le coût/gain véritable).",
      "Les banques centrales bougent les taux courts pour piloter l'économie ; les marchés fixent les taux longs.",
      "Taux plus élevés → épargner devient plus rentable, emprunter plus cher, prix des actifs plus bas.",
      "Le TAEG inclut les frais ; le rendement annuel effectif inclut la capitalisation — comparez ce qui est comparable."
    ],
    "formula": {
      "expression": "Intérêt = Capital × Taux × Durée",
      "legend": "Capital = montant emprunté · Taux = taux annuel (décimal) · Durée = en années",
      "note": "Taux réel ≈ taux nominal − inflation. TAEG ≠ rendement annuel effectif : le TAEG ignore la capitalisation, le rendement annuel effectif l'inclut."
    },
    "example": {
      "scenario": "Deux prêts, tous deux « à 10 % » : une carte de crédit à capitalisation quotidienne contre un prêt personnel à intérêt simple. Quel est le coût réel ?",
      "steps": [
        "Carte à 10 % capitalisée quotidiennement → rendement annuel effectif ≈ 10,52 %",
        "Prêt simple à 10 % → rendement annuel effectif = 10,00 %",
        "Sur un solde de 5 000 € pendant un an, la carte coûte environ 26 € de plus pour le même « 10 % ».",
        "Comparez toujours le rendement annuel effectif au rendement annuel effectif — le « même taux » cache un écart de capitalisation."
      ],
      "result": "Deux prêts « à 10 % » ne sont pas identiques. La méthode de capitalisation change le coût réel — lisez le rendement annuel effectif, pas le taux affiché."
    },
    "deepDive": [
      "C'est le taux d'intérêt réel, et non le nominal, qui pilote le comportement. Si un crédit immobilier est à 6 % et l'inflation à 4 %, le coût réel n'est que d'environ 2 % — historiquement bas. Les emprunteurs et les entreprises regardent au-delà de l'inflation vers le taux réel pour décider si un prêt est « cher ». C'est pourquoi une forte inflation peut coexister avec un emprunt en plein essor : les taux nominaux semblent élevés mais les taux réels sont bas, voire négatifs.",
      "Les variations de taux font bouger les prix des obligations dans le sens inverse, et plus l'échéance de l'obligation est longue, plus l'amplitude est grande (la duration). Une obligation longue peut perdre plus de 20 % lors d'une flambée des taux. C'est pourquoi les obligations longues, réputées « sûres », peuvent être parmi les actifs les plus risqués en cas de choc de taux, tandis que les liquidités et les obligations courtes tiennent bon. Faire correspondre la duration de vos actifs au moment où vous aurez besoin de l'argent est la façon dont les investisseurs avisés gèrent le risque de taux."
    ],
    "glossary": [
      {
        "term": "TAEG",
        "def": "Taux annuel effectif global — coût annuel de l'emprunt, frais inclus, capitalisation souvent exclue."
      },
      {
        "term": "Rendement annuel effectif",
        "def": "Rendement/croissance annuel incluant la capitalisation."
      },
      {
        "term": "Duration",
        "def": "La sensibilité du prix d'une obligation aux variations de taux ; les obligations longues ont une duration plus élevée."
      }
    ]
  },
  "amortization": {
    "title": "Amortissement",
    "hook": "Pourquoi votre mensualité de crédit immobilier reste stable alors que la part d'intérêts diminue année après année.",
    "tldr": "L'amortissement consiste à étaler le remboursement d'un prêt en versements fixes où la part d'intérêts diminue et la part de capital augmente avec le temps.",
    "definition": [
      "L'amortissement est la façon dont un prêt est remboursé en versements égaux dans le temps. Chaque versement fixe se répartit entre intérêts (sur le solde restant) et capital (remboursement de la dette). Au début, presque tout le versement correspond à des intérêts car le solde est élevé ; à mesure que le solde diminue, les intérêts baissent et une plus grande part de chaque versement attaque le capital. À la fin, presque tout le versement correspond à du capital.",
      "Le résultat contre-intuitif : après des années à « payer votre crédit immobilier », vous n'avez peut-être réduit le solde que très légèrement, car la majeure partie de l'argent est allée aux intérêts au début. C'est pourquoi les remboursements anticipés précoces sont si puissants — un seul remboursement de capital supplémentaire en première année peut éliminer des dizaines de versements ultérieurs, car il se capitalise sous forme d'intérêts évités sur toute la durée restante."
    ],
    "keyPoints": [
      "Versement fixe = intérêts + capital, mais la répartition évolue dans le temps.",
      "Les premiers versements sont surtout des intérêts ; les derniers sont surtout du capital.",
      "Un remboursement de capital supplémentaire au début élimine bien plus d'intérêts totaux que le même montant plus tard.",
      "Les prêts plus longs = mensualité plus faible mais intérêts totaux bien plus élevés."
    ],
    "formula": {
      "expression": "Versement = P × [ r(1+r)ⁿ ÷ ((1+r)ⁿ − 1) ]",
      "legend": "P = capital du prêt · r = taux mensuel · n = nombre de versements",
      "note": "La formule maintient le versement constant ; intérêts et capital se rééquilibrent à l'intérieur."
    },
    "example": {
      "scenario": "Crédit immobilier de 200 000 €, 30 ans, taux de 4 %. Mensualité ? Quelle part est intérêts vs capital au mois 1 vs année 25 ?",
      "steps": [
        "r = 0,04/12 = 0,00333, n = 360 → versement ≈ 954,83 €",
        "Intérêts du mois 1 = 200 000 × 0,00333 = 666,67 € → capital = 288,16 €",
        "Intérêts totaux sur 30 ans ≈ 143 700 € — vous payez la maison 1,7 fois son prix.",
        "Ajoutez 100 €/mois de capital supplémentaire → remboursement anticipé d'environ 4,5 ans, environ 31 000 € d'intérêts en moins."
      ],
      "result": "Au mois 1, 70 % de votre versement est constitué d'intérêts. Un supplément de 100 €/mois économise 31 000 € et près de 5 ans — la magie d'attaquer le capital tôt."
    },
    "deepDive": [
      "La structure de l'amortissement explique pourquoi les premières années d'un crédit immobilier donnent l'impression de payer pour rien. Sur un prêt de 30 ans à 4 %, après 5 ans vous avez payé environ 57 000 € en espèces mais réduit le solde de seulement environ 18 000 € — les 39 000 € restants étaient des intérêts. Ce n'est pas une arnaque ; c'est le coût d'emprunter une grosse somme sur une longue période. Le remède, si vous en avez les moyens, est le crédit sur 15 ans ou le capital supplémentaire : une durée plus courte augmente modérément le versement mais réduit approximativement de moitié les intérêts totaux.",
      "Le refinancement remet le compteur de l'amortissement à zéro. Baisser votre taux mais redémarrer un prêt sur 30 ans peut réduire le versement tout en augmentant en réalité les intérêts sur la durée de vie si vous restez jusqu'au terme complet. La comparaison honnête porte sur les intérêts totaux, pas sur le versement mensuel — et le gain vient du maintien de l'ancien calendrier de remboursement (plus court) après le refinancement, en payant la différence en capital supplémentaire."
    ],
    "glossary": [
      {
        "term": "Capital",
        "def": "Le solde du prêt que vous devez réellement et que vous remboursez au fil du temps."
      },
      {
        "term": "Versement",
        "def": "Un paiement périodique fixe couvrant les intérêts et une partie du capital."
      },
      {
        "term": "Refinancement",
        "def": "Remplacer un ancien prêt par un nouveau, souvent pour obtenir un taux plus bas."
      }
    ]
  },
  "supply-demand": {
    "title": "Offre et demande",
    "hook": "Toute l'économie en deux lignes : les prix évoluent vers le point où ce que les gens veulent rencontre ce que les gens produisent.",
    "tldr": "Les prix sont fixés là où la quantité que les acheteurs veulent égale la quantité que les vendeurs fourniront — le point d'équilibre.",
    "definition": [
      "L'offre et la demande sont le modèle au cœur de toute fixation des prix sur les marchés. La demande est la quantité qu'un bien que les acheteurs veulent à chaque prix ; l'offre est la quantité que les vendeurs fourniront à chaque prix. La courbe de demande est décroissante (moins cher → plus d'acheteurs le veulent) ; la courbe d'offre est croissante (plus cher → plus de vendeurs le produisent). Là où elles se croisent, la quantité que les acheteurs veulent égale la quantité que les vendeurs offrent, et cette intersection fixe le prix de marché — l'équilibre.",
      "Tout ce qui déplace la demande (revenu, goûts, substituts) ou l'offre (coûts, technologie, météo) déplace le prix et la quantité d'équilibre. Le modèle est puissant car il prédit une direction : un gel réduit l'offre de café → le prix monte ; une récession réduit la demande de voitures → le prix baisse. Presque chaque changement de prix, des actions aux produits alimentaires, est au fond une histoire d'offre et de demande."
    ],
    "keyPoints": [
      "Prix d'équilibre = là où la quantité demandée = la quantité offerte.",
      "Demande en hausse (ou offre en baisse) → prix en hausse ; demande en baisse (ou offre en hausse) → prix en baisse.",
      "Élasticité = à quel point la quantité réagit au prix (les biens essentiels sont inélastiques).",
      "Les contrôles de prix (plafonds/planchers) créent des pénuries ou des excédents en luttant contre l'équilibre."
    ],
    "formula": {
      "expression": "Équilibre : Qd(P) = Qo(P)",
      "legend": "Qd = quantité demandée au prix P · Qo = quantité offerte au prix P",
      "note": "Élasticité-prix = variation en % de la quantité ÷ variation en % du prix."
    },
    "example": {
      "scenario": "Un gel réduit l'offre de grains de café. Que se passe-t-il pour le prix d'une tasse de café ?",
      "steps": [
        "L'offre se déplace vers la gauche (moins de disponibilité à chaque prix).",
        "Au prix ancien, la demande dépasse l'offre → pénurie.",
        "Le prix monte jusqu'à ce que les acheteurs veuillent exactement la nouvelle offre, plus faible.",
        "La demande de café est inélastique (les gens continuent d'acheter) → le prix bondit fortement, la quantité baisse peu."
      ],
      "result": "Une réduction d'offre sur un bien inélastique produit une forte flambée des prix et une petite baisse de quantité — pourquoi les prix du café et de l'essence réagissent violemment à de petits chocs d'offre."
    },
    "deepDive": [
      "L'élasticité est le raffinement qui rend le modèle pratique. Les biens inélastiques (insuline, carburant, produits addictifs) absorbent les variations de prix avec peu de changement de quantité, donc les chocs frappent durement le prix — et il en va de même pour les taxes qui les visent (c'est pourquoi les gouvernements taxent les cigarettes et le carburant). Les biens élastiques (produits de luxe, marques avec substituts) voient la quantité bouger fortement pour de petites variations de prix. Les investisseurs s'y intéressent parce que la demande inélastique est la source du pouvoir de fixation des prix : une entreprise qui vend quelque chose que les gens doivent acheter peut augmenter ses prix sans perdre de clients, ce qui est à la racine des profits durables.",
      "Le modèle explique aussi pourquoi interférer avec lui se retourne contre soi. Un plafond de prix en dessous de l'équilibre (contrôle des loyers) maintient le prix affiché bas mais crée une pénurie — files d'attente, listes d'attente, qualité réduite, ou marchés parallèles. Un plancher de prix au-dessus de l'équilibre (salaire minimum sur certains marchés) crée un excédent — le chômage. Le signal-prix est de l'information ; le supprimer ne fait pas disparaître la rareté, cela déplace simplement l'endroit où elle se manifeste."
    ],
    "glossary": [
      {
        "term": "Équilibre",
        "def": "Le prix/la quantité où l'offre et la demande s'équilibrent."
      },
      {
        "term": "Élasticité",
        "def": "À quel point la quantité réagit à une variation de prix."
      },
      {
        "term": "Plafond/plancher de prix",
        "def": "Des limites légales sur le prix qui créent des pénuries ou des excédents."
      }
    ]
  },
  "gdp": {
    "title": "PIB",
    "hook": "Le chiffre unique que nous utilisons pour mesurer toute une économie — et les nombreuses choses qu'il ignore silencieusement.",
    "tldr": "Le PIB est la valeur monétaire totale de tous les biens et services produits par un pays en un an.",
    "definition": [
      "Le Produit intérieur brut (PIB) mesure la valeur totale de tout ce qui est produit dans un pays sur une période. Il est généralement mesuré comme la somme de la consommation (C) + l'investissement (I) + les dépenses publiques (G) + les exportations nettes (exportations − importations). Une hausse du PIB réel (ajusté de l'inflation et de la population) signifie que l'économie croît ; une baisse du PIB réel sur deux trimestres est la définition courante de la récession.",
      "Le PIB est le chiffre phare de la santé économique, mais c'est un flux (production par an), pas un stock (richesse). Il comptabilise le travail rémunéré mais pas le travail de soin non rémunéré ; il compte la reconstruction après une catastrophe comme de la croissance tout en ignorant la destruction ; il ne dit rien sur qui reçoit le revenu. Il mesure la taille de l'économie, pas la qualité de vie qu'elle procure."
    ],
    "keyPoints": [
      "PIB = C + I + G + (X − M) — consommation, investissement, dépenses publiques, exportations nettes.",
      "Le PIB réel ajuste l'inflation ; le PIB par habitant ajuste la population.",
      "Récession ≈ deux trimestres consécutifs de baisse du PIB réel.",
      "Le PIB mesure l'activité, pas le bien-être — plus n'est pas toujours mieux."
    ],
    "formula": {
      "expression": "PIB = C + I + G + (X − M)",
      "legend": "C = consommation · I = investissement · G = dépenses publiques · X − M = exportations − importations",
      "note": "Croissance du PIB réel ≈ croissance du PIB nominal − inflation."
    },
    "example": {
      "scenario": "Une économie : consommation 1 000 Md€, investissement 300 Md€, dépenses publiques 400 Md€, exportations 200 Md€, importations 250 Md€. Quel est le PIB ?",
      "steps": [
        "Exportations nettes = 200 − 250 = −50 Md€ (un déficit commercial)",
        "PIB = 1000 + 300 + 400 + (−50) = 1 650 Md€",
        "Si l'inflation est de 3 % et que le PIB nominal a crû de 5 %, la croissance réelle ≈ 2 %.",
        "PIB par habitant = PIB ÷ population — le chiffre du niveau de vie."
      ],
      "result": "PIB = 1 650 Md€. Le déficit commercial a été soustrait ; la croissance « réelle » retire les 3 % qui n'étaient que des hausses de prix, pas plus de production."
    },
    "deepDive": [
      "Le plus grand mésusage du PIB est de le traiter comme un tableau de bord de la réussite nationale. Un pays peut augmenter son PIB en abattant des forêts, en construisant des prisons, ou en nettoyant une pollution qui n'aurait pas dû être créée — tout cela compte comme de l'activité. Deux économies au PIB identique peuvent avoir des niveaux de vie très différents selon l'inégalité, la santé, les loisirs et la qualité environnementale. C'est pourquoi les économistes associent de plus en plus le PIB à des indicateurs complémentaires (inégalité, espérance de vie, loisirs, durabilité).",
      "La croissance du PIB entretient aussi une relation délicate avec la dette et la finance. Une grande partie de la « croissance » dans les économies financiarisées est la production propre du secteur financier, qui peut se contracter en cas de crise et réduire l'économie réelle. Et la croissance du PIB tirée par la dette (consommation financée par l'emprunt) est identique, dans le chiffre affiché, à la croissance tirée par le revenu, mais l'une est durable et l'autre non. Bien lire le PIB, c'est lire quel type de croissance il représente, pas seulement à quelle vitesse elle se produit."
    ],
    "glossary": [
      {
        "term": "PIB réel",
        "def": "Le PIB ajusté pour retirer l'effet de l'inflation."
      },
      {
        "term": "PIB par habitant",
        "def": "Le PIB divisé par la population — un indicateur du niveau de vie."
      },
      {
        "term": "Récession",
        "def": "Un ralentissement prolongé, généralement deux trimestres consécutifs de baisse du PIB réel."
      }
    ]
  },
  "risk-management": {
    "title": "Gestion des risques",
    "hook": "Vous ne pouvez pas éliminer le risque — vous choisissez quels risques garder, transférer, éviter ou réduire.",
    "tldr": "La gestion des risques consiste à identifier, mesurer et gérer délibérément les risques auxquels vous êtes confronté, plutôt que de les subir.",
    "definition": [
      "La gestion des risques est le processus délibéré de traitement de l'incertitude : identifier ce qui pourrait mal tourner, estimer la probabilité et la gravité, puis décider quoi faire. Les quatre réponses classiques sont : éviter (ne pas prendre le risque), réduire (l'atténuer), transférer (s'assurer contre lui), et accepter (le garder, parce que la récompense en vaut la peine ou que le coût de l'évitement est trop élevé). Une bonne gestion des risques ne consiste pas à éliminer le risque — c'est impossible — mais à s'assurer qu'aucun risque isolé ne puisse vous ruiner.",
      "En finances personnelles, cela se traduit par la diversification (réduire), les fonds d'urgence et l'assurance (transférer/accepter les bons risques), et l'évitement des paris ruineux (éviter). Le principe directeur est « éviter la ruine » : gérer de sorte que le pire résultat plausible reste supportable. Vous n'avez pas besoin que chaque résultat soit bon — vous avez besoin qu'aucun résultat ne soit catastrophique."
    ],
    "keyPoints": [
      "Quatre réponses : éviter, réduire, transférer (assurer), accepter.",
      "L'objectif n'est pas le risque zéro mais l'absence de risque ruineux — survivre à tous les scénarios plausibles.",
      "Assurez les risques catastrophiques et rares (incendie de maison, invalidité) ; auto-assurez les petits risques fréquents.",
      "La diversification et les liquidités sont des outils de gestion des risques, pas seulement des outils de rendement."
    ],
    "formula": {
      "expression": "Perte attendue = Probabilité × Impact",
      "legend": "Probabilité = probabilité de l'événement défavorable · Impact = coût si l'événement se produit",
      "note": "Assurez-vous quand l'impact est insupportable, quelle que soit la faible probabilité."
    },
    "example": {
      "scenario": "Assurer une maison de 300 k€ contre l'incendie : prime de 400 €/an, probabilité d'incendie d'environ 0,2 %/an. Est-ce rentable ?",
      "steps": [
        "Perte attendue = 0,002 × 300 000 = 600 €/an (plus que la prime de 400 €).",
        "Mais la vraie question est l'impact : une perte de 300 k€ est ruineuse ; 400 €/an est négligeable.",
        "Même si la perte attendue était de 100 €, vous devriez quand même vous assurer — vous ne pouvez pas vous permettre l'événement extrême.",
        "Assurez le catastrophique ; passez sur la garantie d'écran de téléphone à 50 € (abordable, fréquent)."
      ],
      "result": "On ne s'assure pas pour optimiser une espérance mathématique — on s'assure pour plafonner la perte potentielle. Assurez ce que vous ne pouvez pas vous permettre de perdre ; auto-assurez ce que vous pouvez."
    },
    "deepDive": [
      "La distinction entre risque et incertitude compte. Le risque est quantifiable (vous pouvez estimer les probabilités d'incendie à partir de données) ; l'incertitude (dite « knightienne ») ne l'est pas — vous ne pouvez pas mettre de probabilités sur des événements véritablement inédits comme une nouvelle pandémie ou un choc géopolitique. Beaucoup des pires pertes proviennent d'une incertitude traitée comme si c'était un simple risque, en utilisant des modèles qui supposent que le futur ressemble au passé. Le remède est la robustesse plutôt que l'optimisation : détenir plus de liquidités, plus de diversification et plus d'optionnalité que ne le justifierait un pur calcul d'espérance mathématique.",
      "Une hiérarchie pratique : d'abord se protéger contre la ruine (fonds d'urgence, assurance, pas de dette toxique, diversification) ; ensuite se protéger contre l'inflation (posséder des actifs réels et des actions) ; enfin optimiser le rendement. La plupart des gens inversent cet ordre — ils courent d'abord après le rendement et laissent la ruine non protégée. L'ordre compte parce que les deux premiers sont bon marché et fiables ; le troisième est coûteux et incertain. Obtenez d'abord les gains bon marché et certains avant de parier sur le gain coûteux et incertain."
    ],
    "glossary": [
      {
        "term": "Risque vs incertitude",
        "def": "Le risque est quantifiable ; l'incertitude ne peut pas être fiablement chiffrée."
      },
      {
        "term": "Risque extrême",
        "def": "Des événements de faible probabilité mais à fort impact — ce pour quoi l'assurance existe."
      },
      {
        "term": "Auto-assurance",
        "def": "Couvrir les petits risques grâce à sa propre épargne plutôt qu'en payant des primes."
      }
    ]
  },
  "behavioral-finance": {
    "title": "Finance comportementale",
    "hook": "Nous ne sommes pas les calculateurs rationnels que suppose l'économie — et nos erreurs prévisibles nous coûtent de l'argent réel.",
    "tldr": "La finance comportementale étudie comment les gens s'écartent systématiquement des décisions financières rationnelles, et comment s'en prémunir.",
    "definition": [
      "La finance classique suppose des acteurs rationnels qui pèsent parfaitement les coûts et les bénéfices. La finance comportementale montre que les gens sont irrationnels de manière prévisible : nous craignons les pertes plus que nous ne valorisons les gains, nous suivons la foule, nous nous ancrons à des chiffres non pertinents, et nous traitons le même argent différemment selon sa provenance. Ces biais ne sont pas aléatoires — ils sont systématiques, ce qui signifie qu'ils sont identifiables et, avec de la discipline, évitables.",
      "La leçon pratique est que le plus grand risque pour votre patrimoine, c'est généralement vous-même. La plupart des sous-performances ne viennent pas des marchés mais des investisseurs qui vendent bas par peur, achètent haut par peur de rater quelque chose (FOMO), et tradent trop souvent. Connaître les biais nommés vous permet de construire des défenses : règles, automatisation, et pauses qui empêchent l'émotion de dicter les décisions."
    ],
    "keyPoints": [
      "Aversion aux pertes : une perte fait ressentir une douleur environ 2 fois plus forte qu'un gain équivalent procure de plaisir.",
      "Biais de récence et biais grégaire : nous extrapolons le passé récent et copions la foule.",
      "Ancrage : nous nous accrochons à des prix de référence non pertinents (ce que nous avons payé, l'ancien sommet).",
      "Comptabilité mentale : nous traitons « l'argent trouvé » ou « l'argent de la maison » différemment — une illusion coûteuse."
    ],
    "formula": {
      "expression": "Valeur ressentie d'une perte ≈ −2,25 × un gain de même ampleur",
      "legend": "Issu de la théorie des perspectives — les pertes font environ deux fois plus mal que les gains ne font plaisir",
      "note": "Cette asymétrie explique pourquoi nous gardons les perdants trop longtemps et vendons les gagnants trop tôt."
    },
    "example": {
      "scenario": "Une action achetée à 100 € tombe à 70 €. La vendez-vous ? Comparez avec le fait de trouver 70 € en liquide et de choisir de les investir dans la même action.",
      "steps": [
        "Garder l'action « en attendant qu'elle remonte » revient à s'ancrer aux 100 € payés — un coût irrécupérable.",
        "La vraie question : achèteriez-vous cette action aujourd'hui à 70 € ? Si non, vendez maintenant.",
        "L'aversion aux pertes fait ressentir la vente comme « matérialiser » la douleur — donc les gens se figent.",
        "Reformuler la question comme une nouvelle décision à propos de 70 € supprime l'ancrage et le blocage."
      ],
      "result": "La question « dois-je vendre ? » est en réalité « l'achèterais-je maintenant ? » Poser cette question élimine l'ancrage sur le coût irrécupérable qu'utilise l'aversion aux pertes pour vous piéger."
    },
    "deepDive": [
      "Quelques biais causent la majeure partie des dégâts. L'aversion aux pertes nous pousse à vendre les gagnants trop tôt (« sécuriser le gain ») et à garder les perdants trop longtemps (« attendre le seuil de rentabilité ») — exactement l'inverse de « coupez vos pertes, laissez courir vos gains ». Le biais de récence nous pousse à supposer que la tendance actuelle va continuer, donc nous nous ruons sur ce qui vient de monter et fuyons ce qui vient de baisser — achetant haut, vendant bas. Le biais de confirmation nous pousse à rechercher les informations qui confirment notre position et à ignorer celles qui la contredisent.",
      "Les défenses sont mécaniques, pas psychologiques. Automatisez l'investissement (achats programmés) pour que l'émotion ne décide jamais. Utilisez des règles écrites (« rééquilibrer quand les actions dépassent 70 % ») pour que la décision soit prise à l'avance, au calme. Tenez un journal de décisions pour vous tenir responsable de vos raisonnements passés. Et ralentissez : les décisions les plus coûteuses sont les décisions rapides prises dans la panique ou l'excitation. La discipline bat la prédiction, parce que la prédiction est ce que nous faisons le moins bien."
    ],
    "glossary": [
      {
        "term": "Aversion aux pertes",
        "def": "Les pertes font environ 2 fois plus mal que les gains équivalents ne font plaisir — issu de la théorie des perspectives."
      },
      {
        "term": "Sophisme du coût irrécupérable",
        "def": "Continuer à cause des dépenses passées, au lieu de la valeur future."
      },
      {
        "term": "Biais de récence",
        "def": "Surpondérer les événements récents pour juger de l'avenir."
      }
    ]
  },
  "broker": {
    "title": "Courtier",
    "hook": "L'intermédiaire des marchés — celui qui transforme votre « je veux acheter » en transaction réelle.",
    "tldr": "Un agent qui exécute les ordres d'achat et de vente pour un investisseur en échange d'une commission ou de frais.",
    "definition": [
      "Un courtier est un professionnel ou une société agréée qui agit comme intermédiaire entre un acheteur et un vendeur. Sur le marché boursier, vous ne pouvez pas simplement vous rendre à la Bourse de New York et acheter des actions ; vous avez besoin d'un courtier pour accéder à la bourse et exécuter la transaction en votre nom.",
      "Les courtiers vont des sociétés de services complets (fournissant recherche et conseil) aux courtiers à escompte (fournissant uniquement une plateforme d'exécution). À l'ère moderne, les « néo-courtiers » (applications) ont démocratisé l'accès en proposant des transactions à commission nulle, déplaçant leur modèle de profit vers le paiement pour flux d'ordres (PFOF)."
    ],
    "keyPoints": [
      "Fait le lien entre les investisseurs individuels et les bourses complexes.",
      "Gagne de l'argent via des commissions, des écarts de cours (spreads) ou des frais mensuels.",
      "Devoir fiduciaire : certains courtiers sont légalement tenus d'agir dans l'intérêt supérieur du client.",
      "Qualité d'exécution : la capacité du courtier à obtenir le meilleur prix possible est essentielle."
    ],
    "formula": {
      "expression": "Coût total de la transaction = Prix de l'actif + Commission",
      "legend": "Prix de l'actif = prix de marché · Commission = frais du courtier par transaction",
      "note": "Avec les applications à commission nulle, le « coût » est souvent caché dans l'écart entre le cours acheteur et le cours vendeur."
    },
    "example": {
      "scenario": "Vous voulez acheter 10 actions Apple à 150 €. Votre courtier facture des frais fixes de 5 € par transaction.",
      "steps": [
        "Valeur de la transaction = 10 × 150 = 1 500 €",
        "Coût total = 1 500 + 5 = 1 505 €",
        "Votre prix de seuil de rentabilité est légèrement supérieur au prix de marché en raison des frais."
      ],
      "result": "Le courtier a géré l'acheminement de l'ordre, la communication avec la bourse et le règlement, en prenant 5 € pour le service."
    },
    "deepDive": [
      "L'évolution du courtage a déplacé le pouvoir du « conseiller » vers « l'algorithme ». Les courtiers de services complets détenaient autrefois le monopole de l'information ; aujourd'hui, les particuliers ont accès aux mêmes données que les professionnels, mais manquent souvent de discipline. Ce basculement a conduit à la montée de la « gamification » dans les applications de trading, qui augmente le volume (et le profit du courtier) mais peut accroître le risque pour l'utilisateur.",
      "Une distinction essentielle est celle entre un « courtier-négociant ». Un courtier agit comme un agent (il vous met en relation avec quelqu'un d'autre), tandis qu'un négociant agit comme un principal (il vous vend quelque chose de son propre stock). Quand un négociant vous vend, il prend le risque que l'actif baisse ; quand un courtier vous met en relation, il ne prend aucun risque, seulement des frais."
    ],
    "glossary": [
      {
        "term": "PFOF",
        "def": "Paiement pour flux d'ordres — quand les courtiers vendent les données de vos transactions à des teneurs de marché."
      },
      {
        "term": "Fiduciaire",
        "def": "Une obligation légale d'agir dans l'intérêt supérieur du client."
      },
      {
        "term": "Courtier à escompte",
        "def": "Un prestataire à bas coût qui offre l'exécution sans conseil personnalisé."
      }
    ]
  },
  "depositary": {
    "title": "Dépositaire / Conservateur",
    "hook": "Le coffre-fort du monde financier — il garde vos actifs en sécurité pour que vous n'ayez pas à les cacher sous un matelas.",
    "tldr": "Une institution financière qui détient et protège les actifs d'un client, en s'assurant qu'ils ne soient ni volés ni perdus.",
    "definition": [
      "Un dépositaire (ou conservateur) est une entité spécialisée qui détient des titres pour les garder en sécurité. Alors que votre courtier gère la *négociation*, le dépositaire gère la *conservation*. Ils s'assurent que les actions que vous « possédez » existent réellement et sont enregistrées à votre nom ou à votre bénéfice.",
      "Cette séparation est cruciale pour la sécurité. Si un courtier fait faillite, vous ne voulez pas que vos actifs fassent partie de la masse de faillite du courtier. Parce que le dépositaire les détient séparément, les actifs restent la propriété du client, et non de la société."
    ],
    "keyPoints": [
      "Prévient la fraude et le vol en séparant la fonction de négociation de la fonction de stockage.",
      "Gère les opérations sur titres : encaisse les dividendes et traite les fractionnements d'actions automatiquement.",
      "Crucial pour les investisseurs institutionnels (fonds de pension, assurance) qui détiennent des milliards d'actifs.",
      "Fortement réglementé pour garantir que les actifs sont réellement « ségrégués » de l'argent propre de la société."
    ],
    "formula": {
      "expression": "Frais de conservation = Actifs sous gestion × Taux de frais",
      "legend": "Actifs sous gestion = valeur totale des actifs gérés · Taux de frais = pourcentage annuel pour la garde",
      "note": "Généralement un très faible pourcentage, mais significatif pour de gros portefeuilles."
    },
    "example": {
      "scenario": "Un fonds de pension investit 1 Md€ dans des actions mondiales. Il utilise une banque dépositaire mondiale.",
      "steps": [
        "Le gérant de fonds décide quoi acheter (décision d'investissement).",
        "Le courtier exécute la transaction (exécution).",
        "La banque dépositaire reçoit les actions et les enregistre dans le compte du fonds (conservation).",
        "Quand des dividendes sont versés, le dépositaire les collecte et les renvoie au fonds."
      ],
      "result": "Le gérant de fonds ne « touche » jamais réellement les actions ; elles sont enfermées dans un coffre numérique par sécurité."
    },
    "deepDive": [
      "À l'ère numérique, la plupart des actions sont « dématérialisées » (détenues sous forme d'écritures électroniques). Cela crée une chaîne de propriété. Vous voyez vos actions dans une application, mais cette application consulte un enregistrement provenant d'un courtier, qui lui-même consulte un enregistrement provenant d'un dépositaire central (comme Euroclear ou Clearstream). Cette chaîne est l'épine dorsale de la finance mondiale.",
      "Le « risque de conservation » survient si le dépositaire lui-même fait faillite ou commet une fraude (par ex. les effondrements de MF Global ou FTX). C'est pourquoi les particuliers fortunés et les institutions utilisent des dépositaires « de premier rang » — des banques mondiales avec des réserves de capital massives et une surveillance stricte."
    ],
    "glossary": [
      {
        "term": "Compte ségrégué",
        "def": "Un compte où les actifs des clients sont conservés séparément des actifs propres de la société."
      },
      {
        "term": "Dématérialisation",
        "def": "Le processus de remplacement des certificats papier physiques par des enregistrements électroniques."
      },
      {
        "term": "Opérations sur titres",
        "def": "Des événements comme les dividendes ou les fusions qui exigent que le dépositaire mette à jour ses enregistrements."
      }
    ]
  },
  "central-bank": {
    "title": "Banque centrale",
    "hook": "La « banque des banques » — la seule entité capable littéralement d'imprimer de l'argent pour sauver le système.",
    "tldr": "Une institution nationale qui gère la monnaie, la masse monétaire et les taux d'intérêt d'un pays afin d'assurer la stabilité économique.",
    "definition": [
      "La banque centrale (comme la BCE en Europe ou la Fed aux États-Unis) est l'autorité ultime sur la monnaie d'une nation. Contrairement aux banques commerciales, elle ne recherche pas le profit ; son objectif est la « stabilité des prix » (maintenir une inflation faible) et la « stabilité financière » (prévenir les crises).",
      "Elle dispose de deux outils principaux : le taux d'intérêt (le coût de l'argent) et la masse monétaire (la quantité de monnaie en circulation). En augmentant les taux, elle refroidit une économie en surchauffe ; en les baissant, elle encourage les dépenses et l'investissement pour lutter contre la récession."
    ],
    "keyPoints": [
      "Prêteur en dernier ressort : fournit des prêts d'urgence aux banques pour prévenir un effondrement systémique.",
      "Politique monétaire : ajuste les taux d'intérêt pour contrôler l'inflation et la croissance.",
      "Gestion de la monnaie : gère la valeur de la monnaie nationale par rapport aux autres.",
      "Indépendance : opère idéalement indépendamment de la politique pour éviter d'« imprimer de l'argent » pour une popularité à court terme."
    ],
    "formula": {
      "expression": "Taux réel = Taux nominal − Inflation",
      "legend": "Taux nominal = le taux fixé par la banque centrale · Inflation = taux de hausse des prix",
      "note": "Si la banque centrale maintient les taux à 2 % mais que l'inflation est à 5 %, le taux réel est de −3 % (ce qui revient effectivement à payer les gens pour qu'ils empruntent)."
    },
    "example": {
      "scenario": "L'inflation atteint 8 %, et l'économie surchauffe. Que fait la banque centrale ?",
      "steps": [
        "La banque relève son taux directeur (par ex. de 0 % à 4 %).",
        "Les banques commerciales relèvent leurs taux sur les prêts et crédits immobiliers pour maintenir leurs marges.",
        "Emprunter devient coûteux → les entreprises investissent moins, les consommateurs dépensent moins.",
        "La demande baisse → les prix cessent de monter aussi vite → l'inflation baisse."
      ],
      "result": "La banque centrale a utilisé le « levier du taux d'intérêt » pour ralentir l'économie et juguler l'inflation."
    },
    "deepDive": [
      "L'outil le plus controversé de l'ère moderne est l'« assouplissement quantitatif » (AQ). Lorsque les taux d'intérêt atteignent zéro mais que l'économie a encore besoin d'aide, la banque centrale achète simplement des obligations sur le marché, injectant des milliers de milliards d'euros/de dollars nouveaux dans le système. C'est de « l'impression monétaire » sous une forme sophistiquée. Bien que cela évite les dépressions, les critiques soutiennent que cela crée des « bulles d'actifs » en rendant les actions et l'immobilier artificiellement chers.",
      "L'indépendance de la banque centrale est le « saint Graal » de la macrofinance. Si un gouvernement peut ordonner à une banque d'imprimer de l'argent pour payer ses dettes, on obtient une hyperinflation (comme au Zimbabwe ou dans l'Allemagne de Weimar). En séparant la « planche à billets » des « politiciens », les pays maintiennent la confiance dans leur monnaie."
    ],
    "glossary": [
      {
        "term": "Prêteur en dernier ressort",
        "def": "Le rôle de la banque centrale consistant à fournir des liquidités aux banques pendant une panique."
      },
      {
        "term": "Politique monétaire",
        "def": "Les actions entreprises par la banque centrale pour gérer la masse monétaire et les taux d'intérêt."
      },
      {
        "term": "AQ (assouplissement quantitatif)",
        "def": "Acheter des actifs pour injecter des liquidités dans le système financier."
      }
    ]
  },
  "clearing-house": {
    "title": "Chambre de compensation",
    "hook": "La colle invisible des marchés — elle garantit que « je paie, tu livres » se produit réellement.",
    "tldr": "Un intermédiaire qui garantit l'exécution complète d'une transaction, agissant comme acheteur pour chaque vendeur et comme vendeur pour chaque acheteur.",
    "definition": [
      "Sur un marché en mouvement rapide, vous ne savez pas si la personne de l'autre côté de votre transaction paiera réellement. La chambre de compensation (ou contrepartie centrale — CCP) résout ce problème. Une fois qu'une transaction est conclue, la chambre de compensation intervient et devient la contrepartie des deux côtés.",
      "Elle valide la transaction, s'assure que les deux parties disposent de l'argent/des actifs, et gère le processus de règlement. Ce faisant, elle élimine le « risque de contrepartie » de l'équation. Si une partie fait faillite, la chambre de compensation utilise ses propres réserves pour s'assurer que l'autre partie soit quand même payée."
    ],
    "keyPoints": [
      "Agit comme un tampon contre la défaillance systémique : l'effondrement d'une banque ne déclenche pas d'effet domino.",
      "Exige une « marge » (garantie) de la part des traders pour couvrir les pertes potentielles.",
      "Compensation (netting) : au lieu de 1 000 petites transactions, elle calcule le montant « net » que chaque partie doit à la fin de la journée.",
      "Essentielle pour les produits dérivés (swaps, contrats à terme) dont les contrats peuvent durer des années."
    ],
    "formula": {
      "expression": "Position nette = Total des achats − Total des ventes",
      "legend": "Position nette = le montant final qu'un trader doit régler avec la chambre de compensation",
      "note": "La compensation réduit la quantité de liquidités devant circuler dans le système, augmentant l'efficacité."
    },
    "example": {
      "scenario": "La banque A vend 1 M€ d'or à la banque B. La banque B vend 800 k€ d'or à la banque C. La banque C vend 600 k€ à la banque A.",
      "steps": [
        "Sans chambre de compensation : 3 paiements séparés de 1 M, 800 k et 600 k.",
        "Avec une chambre de compensation : elle compense (net) les positions.",
        "Banque A : +1 M (de B) − 600 k (vers C) = +400 k",
        "Banque B : −1 M (vers A) + 800 k (de C) = −200 k",
        "Banque C : −800 k (vers B) + 600 k (de A) = −200 k"
      ],
      "result": "Au lieu de 2,4 M€ en mouvement, seuls 600 k€ au total bougent. Le système est plus sûr et plus rapide."
    },
    "deepDive": [
      "L'« appel de marge » est l'arme principale de la chambre de compensation. Pour se protéger, la CCP exige une « marge initiale » (dépôt) et une « marge de variation » (paiement quotidien pour les mouvements de prix). Si le marché évolue contre vous, la CCP exige immédiatement plus de liquidités. Si vous ne pouvez pas payer, elle liquide instantanément votre position pour éviter sa propre perte.",
      "La crise de 2008 a mis en lumière le danger des transactions « de gré à gré » (OTC) — des transactions réalisées en privé, sans chambre de compensation. Quand Lehman Brothers a fait faillite, personne ne savait qui devait quoi à qui, car il n'existait aucun enregistrement central. Depuis, les réglementations mondiales ont forcé la plupart des produits dérivés à passer par des chambres de compensation pour rendre le système transparent et robuste."
    ],
    "glossary": [
      {
        "term": "CCP",
        "def": "Contrepartie centrale — le nom technique d'une chambre de compensation."
      },
      {
        "term": "Marge",
        "def": "Une garantie déposée pour assurer l'exécution d'un contrat."
      },
      {
        "term": "Compensation (netting)",
        "def": "Combiner plusieurs transactions en un seul paiement net."
      }
    ]
  },
  "counterparty": {
    "title": "Contrepartie",
    "hook": "L'autre côté de votre transaction — l'entité dont la promesse donne sa valeur à votre contrat.",
    "tldr": "Une contrepartie est l'autre partie dans une transaction financière — celle qui doit livrer ce que vous avez acheté, ou payer ce qui vous est dû.",
    "definition": [
      "Chaque transaction a deux côtés : quand vous achetez, quelqu'un vous vend, et ce quelqu'un est votre contrepartie. Dans une transaction boursière simple, la contrepartie est anonyme et le risque est proche de zéro car la chambre de compensation le garantit. Mais dans de nombreux contrats — un swap, un forward, un prêt privé, un produit dérivé de gré à gré — la contrepartie est une entité précise dont le défaut vous laisserait impayé. Votre gain ne vaut que ce que vaut leur promesse.",
      "Le risque de contrepartie (ou risque de défaut) est la probabilité que l'autre partie ne respecte pas le contrat. C'est le risque central de toute négociation de gré à gré (OTC), où aucune bourse ne s'interpose entre vous et l'autre partie. Le gérer est toute une industrie : collatéral, accords de compensation (contrats-cadres ISDA), marge, et la migration des dérivés vers les chambres de compensation."
    ],
    "keyPoints": [
      "Votre contrepartie est quiconque vous doit une exécution au titre d'un contrat.",
      "Risque de contrepartie = la probabilité qu'elle fasse défaut avant de vous payer.",
      "Les transactions compensées remplacent l'autre partie par une chambre de compensation (risque quasi nul).",
      "Les transactions OTC conservent la contrepartie d'origine — le collatéral et la compensation en atténuent le risque."
    ],
    "formula": {
      "expression": "Exposition = Max(0, Valeur du contrat − Collatéral déposé)",
      "legend": "Valeur du contrat = valorisation au marché de l'opération · Collatéral = liquidités/actifs déposés en garantie",
      "note": "Les banques suivent l'« exposition potentielle future » — la valeur que pourrait atteindre le contrat si les marchés évoluent défavorablement pour la contrepartie."
    },
    "example": {
      "scenario": "Vous concluez un swap de taux d'intérêt de 10 M€ avec une banque. Les taux évoluent en votre faveur ; le swap vaut désormais 600 k€ pour vous. La banque est votre contrepartie — que se passe-t-il si elle fait faillite ?",
      "steps": [
        "Valeur au marché pour vous = +600 k€ (la banque vous doit cette somme).",
        "Si la banque fait défaut maintenant, vous perdez 600 k€ et devez en plus remplacer le swap aux taux actuels.",
        "Pour réduire ce risque, l'accord ISDA exige que la banque dépose du collatéral au fur et à mesure que le swap prend de la valeur.",
        "Si 500 k€ de collatéral sont déposés, votre exposition nette = 600 − 500 = 100 k€."
      ],
      "result": "Le collatéral transforme une perte de défaut de 600 k€ en une perte de 100 k€. La gestion du risque de contrepartie consiste surtout à ne jamais être créancier d'un montant supérieur à ce qui est garanti."
    },
    "deepDive": [
      "La crise de 2008 fut un événement de risque de contrepartie. Lehman était contrepartie de milliers de transactions dérivées ; sa faillite a laissé tous ses créanciers se démener pour remplacer leurs contrats à des prix moins favorables, et tous ses débiteurs se sont soudain retrouvés redevables envers sa masse en faillite. Le chaos ne venait pas seulement des pertes, mais du fait que personne ne savait qui devait quoi à qui. C'est pourquoi les régulateurs ont ensuite imposé la compensation centrale pour les swaps standards : une chambre de compensation devient la contrepartie de tous, et un seul défaut ne se propage plus en cascade.",
      "Un point subtil : le risque de contrepartie est bilatéral et asymétrique. Votre banque est votre contrepartie sur le swap où vous êtes gagnant — mais vous êtes sa contrepartie sur le swap où c'est elle qui est gagnante. Le « wrong-way risk » (risque de corrélation défavorable) est le cas pervers où la qualité de crédit de la contrepartie est corrélée à votre exposition : par exemple, acheter une protection auprès d'une banque sur la dette de cette même banque signifie que la protection devient sans valeur exactement au moment où vous en avez besoin."
    ],
    "glossary": [
      {
        "term": "OTC",
        "def": "Over-the-counter (gré à gré) — transactions négociées directement entre deux parties, hors bourse."
      },
      {
        "term": "ISDA",
        "def": "Le cadre de contrat-cadre régissant la plupart des transactions dérivées de gré à gré."
      },
      {
        "term": "Compensation (netting)",
        "def": "Compenser ce que vous devez à une contrepartie avec ce qu'elle vous doit, en ne payant que la différence."
      }
    ]
  },
  "fund": {
    "title": "Fonds d'investissement",
    "hook": "Mutualiser l'argent de milliers d'investisseurs pour que même 100 € puissent posséder une part d'un portefeuille d'un milliard d'euros.",
    "tldr": "Un fonds mutualise l'argent de nombreux investisseurs et l'investit collectivement, avec un gérant professionnel, de sorte que chaque investisseur détient une part d'un portefeuille diversifié.",
    "definition": [
      "Un fonds d'investissement est un véhicule collectif : les investisseurs y placent de l'argent, le fonds achète un portefeuille d'actifs, et chaque investisseur détient une part proportionnelle (parts ou actions) de l'ensemble. L'idée est la mutualisation : 1 000 € de chacun des 10 000 investisseurs deviennent 10 M€ — assez pour construire un portefeuille diversifié mondialement qu'aucun individu ne pourrait assembler seul, tout en gardant la part de chacun liquide.",
      "Les fonds existent sous différentes formes juridiques : fonds communs de placement (ouverts, valorisés une fois par jour), ETF (négociés en bourse, valorisés en continu), fonds spéculatifs (privés, peu réglementés, stratégies flexibles) et fonds de pension (long terme, dédiés à la retraite). Ce qui les unit, c'est la séparation fiduciaire : l'investisseur possède l'argent ; le gérant du fonds le gère, contre rémunération, selon un mandat."
    ],
    "keyPoints": [
      "La mutualisation offre une diversification et un accès que de petites sommes ne permettraient pas.",
      "Valeur liquidative (VL) = valeur totale du portefeuille ÷ nombre de parts en circulation.",
      "Les fonds ouverts créent/rachètent des parts à la demande ; les fonds fermés ont un nombre fixe de parts.",
      "Le gérant perçoit des frais (TER) et a un devoir fiduciaire envers les investisseurs."
    ],
    "formula": {
      "expression": "VL par part = (Actifs − Passifs) ÷ Parts en circulation",
      "legend": "Actifs = valeur de marché du portefeuille · Passifs = dettes du fonds · Parts = unités émises",
      "note": "La VL est calculée une fois par jour pour les fonds communs, en continu pour les ETF via la négociation en bourse."
    },
    "example": {
      "scenario": "Un fonds détient 100 M€ d'actions et 5 M€ de liquidités, doit 2 M€ de frais/financement, et compte 10 M de parts. Combien vaut une part ?",
      "steps": [
        "Actifs = 100 M + 5 M = 105 M€",
        "Actif net = 105 M − 2 M = 103 M€",
        "VL par part = 103 M ÷ 10 M = 10,30 €",
        "Un investisseur détenant 1 000 unités possède 10 300 € du portefeuille, diversifiés sur l'ensemble de ses positions."
      ],
      "result": "1 000 € ont acheté une participation dans un portefeuille diversifié de 100 M€. La mutualisation a transformé une petite somme en diversification de niveau institutionnel."
    },
    "deepDive": [
      "La structure ouverte est une petite merveille d'ingénierie : quand les investisseurs veulent entrer, le fonds crée de nouvelles parts et achète davantage d'actifs ; quand ils veulent sortir, il rachète des parts et vend des actifs (ou paie en liquidités). Le piège, c'est que des ventes forcées en période de panique cristallisent les pertes pour les investisseurs restants, ce qui explique pourquoi certains fonds (hedge funds, private equity) imposent des « gates » ou des périodes de blocage pour éviter une ruée vers la sortie. La transformation de liquidité — offrir des rachats quotidiens tout en détenant des actifs illiquides — est une faille classique.",
      "Les frais sont la variable silencieuse qui détermine les résultats à long terme. Des frais de gestion de 1,5 % plus une commission de performance de 20 % (le modèle « 2 et 20 » des hedge funds) doivent être compensés avant que l'investisseur ne voie le moindre centime, et les fonds à frais élevés battent rarement un indice bon marché après coûts. L'avantage de l'investisseur n'est pas de choisir le meilleur gérant (quasiment impossible à l'avance) mais de payer les frais les plus bas pour une exposition large — c'est pourquoi les ETF indiciels ont capté l'essentiel de la croissance du secteur."
    ],
    "glossary": [
      {
        "term": "VL",
        "def": "Valeur liquidative — la valeur par part du portefeuille d'un fonds."
      },
      {
        "term": "Fonds ouvert",
        "def": "Un fonds qui émet et rachète des parts à la demande, maintenant le prix ≈ VL."
      },
      {
        "term": "Hedge fund",
        "def": "Un fonds privé peu réglementé utilisant des stratégies flexibles, souvent à effet de levier."
      }
    ]
  },
  "client": {
    "title": "Le client / investisseur",
    "hook": "La personne à qui appartient réellement l'argent — et celle que tous les autres acteurs de la chaîne sont, en théorie, censés servir.",
    "tldr": "Un client est le propriétaire final de l'argent — l'investisseur pour le compte duquel un courtier, un dépositaire et un gérant agissent.",
    "definition": [
      "Dans la chaîne financière, le client (ou investisseur) est le mandant : la personne ou l'institution dont les actifs sont en jeu. Tous les autres — le courtier qui exécute les transactions, le dépositaire qui les conserve, le gérant de fonds qui les choisit, le conseiller qui les recommande — sont des mandataires agissant pour le compte du client. Toute l'architecture de la réglementation, du devoir fiduciaire et de la ségrégation des dépôts existe pour protéger cette seule partie, car c'est le client qui supporte les pertes.",
      "Les clients vont du particulier (personnes investissant leur épargne) au client fortuné (banque privée) jusqu'à l'institutionnel (fonds de pension, assureurs, fonds souverains gérant des milliards). La relation diffère selon le niveau : le particulier reçoit des produits standardisés sous forte protection du consommateur ; les institutions négocient directement des conditions, une conservation et des mandats sur mesure. Mais dans tous les cas, la caractéristique fondamentale est la même — c'est leur argent, et l'entreprise est mandatée pour le servir."
    ],
    "keyPoints": [
      "Le client est le mandant ; courtiers, dépositaires et gérants sont des mandataires.",
      "Le devoir fiduciaire exige légalement d'agir dans l'intérêt du client — pas celui de l'entreprise.",
      "Les actifs des clients doivent être séparés de ceux de l'entreprise (le principe de ségrégation).",
      "Adéquation vs. fiduciaire : « non inadapté » est une norme plus faible que « meilleur intérêt »."
    ],
    "formula": {
      "expression": "Rendement client = Rendement brut − Frais − Impôts − Perte comportementale",
      "legend": "Rendement brut = résultat du marché/de la stratégie · Frais = tous les coûts d'intermédiation · Perte comportementale = pertes auto-infligées de mauvais timing",
      "note": "Le client supporte chaque couche de coûts ; le but d'un bon conseil est de minimiser les couches qui n'apportent rien."
    },
    "example": {
      "scenario": "Un client particulier investit 50 k€ via un courtier, dans un fonds géré par un gérant, conservé par un dépositaire. Qui fait quoi, et que paie le client ?",
      "steps": [
        "Le dépositaire conserve les 50 k€ d'actifs en toute sécurité, séparés des livres du courtier.",
        "Le courtier exécute les ordres d'achat/vente et peut facturer une commission ou un spread.",
        "Le gérant du fonds choisit le portefeuille et facture le TER (~0,1 %–1,5 %).",
        "Le client paie tout cela — et conserve le rendement restant après coûts."
      ],
      "result": "Quatre parties, un seul propriétaire. Le client est le seul à porter le risque ; les autres perçoivent des frais pour faciliter, conserver et décider."
    },
    "deepDive": [
      "La tension centrale en finance est le conflit principal-agent : l'entreprise veut des frais, le client veut du rendement, et ces intérêts divergent chaque fois qu'un produit rentable pour l'entreprise est médiocre pour le client. Un courtier motivé par les commissions peut sur-négocier ; un gérant rémunéré sur les encours peut résister à rendre des liquidités ; un conseiller payé pour vendre des produits maison peut orienter le client vers ceux-ci. Le devoir fiduciaire et la rémunération à honoraires fixes sont les correctifs structurels — payer les conseillers avec des honoraires forfaitaires plutôt qu'une commission sur produit les aligne avec le client et est le meilleur prédicteur de la qualité du conseil.",
      "L'avantage le plus puissant et le plus ignoré du client est son horizon temporel. Les institutions doivent rendre compte trimestriellement et font face à des pressions de retrait ; les particuliers épargnant pour la retraite ont une vision à 40 ans et aucun vendeur forcé. Cet horizon long, combiné à la discipline de ne pas paniquer, est un avantage que les institutions ne peuvent littéralement pas exploiter. La tragédie de l'investissement particulier est que la plupart des clients abandonnent cet avantage en négociant, en paniquant, et en payant pour des conseils qui sous-performent un fonds indiciel bon marché qu'ils auraient pu détenir gratuitement."
    ],
    "glossary": [
      {
        "term": "Mandant vs mandataire",
        "def": "Le mandant possède l'argent ; le mandataire agit pour son compte — le cœur des relations clients."
      },
      {
        "term": "Devoir fiduciaire",
        "def": "Obligation légale de faire passer l'intérêt du client avant celui de l'entreprise."
      },
      {
        "term": "Ségrégation",
        "def": "Séparer les actifs des clients de ceux de l'entreprise pour qu'ils survivent à la faillite de celle-ci."
      }
    ]
  },
  "market-maker": {
    "title": "Teneur de marché",
    "hook": "Le trader toujours prêt à traiter — prêt à acheter quand personne n'en veut et à vendre quand personne ne le fera.",
    "tldr": "Un teneur de marché cote en continu un prix d'achat et un prix de vente, tirant profit de l'écart, et fournit la liquidité qui permet aux autres de trader instantanément.",
    "definition": [
      "Un teneur de marché (market maker) est une entreprise prête à acheter et vendre un actif donné à des prix cotés publiquement, toute la journée, tous les jours. Elle cote un prix acheteur (bid, le prix qu'elle paiera) et un prix vendeur (ask, le prix auquel elle vendra) ; l'écart entre les deux est le spread, sa rémunération pour le risque de portage qu'elle assume. Comme elle traitera avec n'importe qui à tout moment, elle est la source de la liquidité instantanée qui rend les marchés fluides — vous pouvez toujours vendre, car le teneur de marché achètera toujours (à son prix).",
      "Son activité consiste à multiplier une petite marge par un volume énorme, moins les pertes liées à la détention du mauvais inventaire quand les prix bougent. Elle gagne des centimes par action sur des millions d'actions. Le risque est d'accumuler une position juste avant que le marché ne se retourne contre elle — d'où l'importance d'être rapide, couvert et impitoyable sur la gestion de l'inventaire. De nombreux courtiers « sans commission » n'exécutent pas eux-mêmes votre ordre ; ils vendent votre flux d'ordres à un teneur de marché, qui capte le spread. La commission a changé de forme ; elle n'a pas disparu."
    ],
    "keyPoints": [
      "Cote un prix acheteur et un prix vendeur ; le profit est le spread, gagné sur le volume.",
      "Fournit l'immédiateté — la capacité de trader maintenant, sans attendre une contrepartie naturelle.",
      "Porte le risque d'inventaire : une position qui évolue défavorablement fait perdre de l'argent.",
      "Les teneurs de marché désignés sur les bourses stabilisent aussi les prix en période de tension."
    ],
    "formula": {
      "expression": "Profit du spread = (Ask − Bid) × Volume − Perte d'inventaire",
      "legend": "Ask − Bid = spread coté · Volume = actions traitées · Perte d'inventaire = mouvement de prix défavorable au stock détenu",
      "note": "Des spreads serrés signalent concurrence et profondeur ; des spreads larges signalent risque ou illiquidité."
    },
    "example": {
      "scenario": "Un teneur de marché cote une action à 99,98 € (bid) / 100,02 € (ask). Vous achetez 1 000 actions à l'ask. Cinq minutes plus tard, le prix est inchangé et il vend ces actions à un autre investisseur à l'ask.",
      "steps": [
        "Il vous a vendu à 100,02 € → il a reçu 100 020 €.",
        "Il vous a (en pratique) acheté à 99,98 € → il a payé 99 980 €.",
        "Spread gagné = 1 000 × (100,02 − 99,98) = 40 € sur un infime mouvement de prix.",
        "Répétez cela sur des millions d'actions par jour — le modèle est fait de centimes multipliés par un volume énorme."
      ],
      "result": "Vous avez obtenu une exécution instantanée ; le teneur de marché a gagné 40 € pour l'avoir fournie. Le spread est le prix de l'immédiateté."
    },
    "deepDive": [
      "Le pire ennemi du teneur de marché est la « sélection adverse » — traiter avec quelqu'un qui en sait plus. Si un hedge fund achète agressivement parce qu'il sait qu'une bonne nouvelle arrive, le teneur de marché continue de vendre, construit une position short, et se fait laminer quand la nouvelle tombe. Les teneurs de marché perdent de l'argent face aux flux informés et en gagnent avec les flux « bruit » (non informés) ; tout l'art consiste à distinguer les deux, rapidement, et à élargir le spread quand un flux informé apparaît. C'est pourquoi les spreads explosent avant les annonces : le teneur de marché craint de traiter avec quelqu'un qui connaît déjà le résultat.",
      "La tenue de marché à haute fréquence en est la forme moderne : des algorithmes cotent et annulent des milliers de prix par seconde, détiennent l'inventaire quelques secondes ou moins, et captent de minuscules spreads avec un risque quasi nul. Les critiques y voient une « liquidité fantôme » — elle disparaît en cas de krach, précisément quand on en a le plus besoin, car les algos se coupent plutôt que d'attraper un couteau qui tombe. Les défenseurs soulignent que les spreads se sont effondrés et que les coûts de transaction ne sont qu'une fraction de ce qu'ils étaient. Les deux sont vrais : la liquidité est réelle en marché calme et conditionnelle dans le chaos, exactement au moment où la liquidité compte le plus."
    ],
    "glossary": [
      {
        "term": "Spread bid-ask",
        "def": "L'écart entre les meilleurs prix d'achat et de vente cotés — la marge du teneur de marché."
      },
      {
        "term": "Risque d'inventaire",
        "def": "Le risque de détenir une position qui perd de la valeur avant de pouvoir être écoulée."
      },
      {
        "term": "Sélection adverse",
        "def": "Traiter avec des contreparties mieux informées qui vous prennent de vitesse."
      }
    ]
  },
  "prime-broker": {
    "title": "Prime broker",
    "hook": "La banque derrière un hedge fund — lui prêtant de l'argent, compensant ses transactions, et détenant son collatéral.",
    "tldr": "Un prime broker est une grande banque d'investissement qui fournit aux hedge funds financement, compensation, conservation et prêt de titres dans un service groupé.",
    "definition": [
      "Un prime broker est l'épine dorsale opérationnelle et financière des hedge funds et autres grands traders institutionnels. Plutôt que de traiter avec une douzaine de prestataires distincts, un fonds signe avec un prime broker unique qui regroupe : la conservation de ses actifs, la compensation et le règlement de ses transactions, le financement sur marge (prêt pour lever un effet de levier), le prêt de titres (pour vendre à découvert) et le reporting. En retour, le prime broker gagne des intérêts sur les prêts, des frais de financement, et un droit sur les actifs du fonds en garantie — une relation très rentable et fidélisante.",
      "Comme le prime broker détient les actifs du fonds en garantie de ses prêts, il est aussi sa plus grande contrepartie. Cette concentration est efficace mais dangereuse : si un prime broker fait faillite (Bear Stearns, Lehman), les fonds qui lui sont liés peuvent perdre l'accès à leurs propres actifs et faire face à des mois de recouvrement judiciaire. Les grands fonds se répartissent donc entre deux prime brokers ou plus pour éviter la dépendance à une seule contrepartie — une leçon écrite en 2008."
    ],
    "keyPoints": [
      "Guichet unique : conservation + compensation + financement + prêt de titres pour les hedge funds.",
      "Gagne sur les prêts sur marge, les spreads de financement et les frais de prêt de titres.",
      "Détient les actifs du fonds en garantie — ce qui en fait la contrepartie clé du fonds.",
      "Risque de concentration : la faillite d'un prime broker bloque ses fonds, d'où les dispositifs multi-primes."
    ],
    "formula": {
      "expression": "Prêt sur marge = Valeur du portefeuille × (1 − Décote)",
      "legend": "Valeur du portefeuille = actifs du fonds détenus chez le prime broker · Décote = % que le prime broker exige comme coussin en fonds propres",
      "note": "Une décote de 20 % sur un portefeuille de 1 Md€ finance 800 M€ de levier ; des décotes plus faibles signifient plus de levier et plus de risque pour le prime broker."
    },
    "example": {
      "scenario": "Un hedge fund a 500 M€ d'actifs et veut une exposition de 2×. Son prime broker applique une décote de 25 %. Combien peut-il emprunter et contrôler ?",
      "steps": [
        "Emprunt maximal = 500 M × (1 − 0,25) = 375 M€ de prêt sur marge.",
        "Actifs totaux contrôlés = 500 M + 375 M = 875 M€ (levier de 1,75×).",
        "Pour atteindre 2× (1 Md€), le fonds ajoute 125 M€ de fonds propres supplémentaires ou trouve un prime broker à décote plus faible.",
        "Le prime broker détient les 500 M€ en garantie et facture des intérêts de financement sur les 375 M€."
      ],
      "result": "Le prime broker a transformé les fonds propres du fonds en pouvoir d'achat à effet de levier, tout en conservant les actifs et en percevant un revenu de financement en retour."
    },
    "deepDive": [
      "L'activité de prime brokerage est un cercle vertueux d'effets de réseau : plus un prime broker sert de fonds, plus il en sait sur les flux et mieux il peut faire correspondre les titres à prêter (pour les shorts) et tarifer le financement. Les quelques leaders du secteur le dominent, ce qui fait du prime brokerage une activité concentrée et systémique — une raison pour laquelle les régulateurs la surveillent de près. Les conditions de marge (décotes, limites de concentration) qu'un prime broker fixe constituent en réalité un frein privé au levier des hedge funds.",
      "Quand un fonds rencontre des difficultés, c'est le prime broker qui décide de son sort. Un appel de marge, s'il n'est pas satisfait, permet au prime broker de liquider le collatéral — souvent dans un marché en chute, aggravant les pertes du fonds et parfois celles du marché (la faillite d'Archegos en 2021 a résulté de prime brokers liquidant simultanément d'énormes positions concentrées). La leçon pour le système est que plusieurs prime brokers détenant le même collatéral sans le savoir créent un levier caché ; la leçon pour un fonds est que son prime broker peut être son ami dans le calme et son bourreau dans la tempête."
    ],
    "glossary": [
      {
        "term": "Décote (haircut)",
        "def": "Le % de la valeur d'un actif que le prime broker refuse de financer — le coussin en fonds propres exigé."
      },
      {
        "term": "Prêt de titres",
        "def": "Prêter des actions pour qu'un client puisse les vendre à découvert ; le prime broker perçoit des frais et prend du collatéral."
      },
      {
        "term": "Financement sur marge",
        "def": "Des prêts permettant à un fonds d'acheter plus d'actifs que ses fonds propres ne le permettraient."
      }
    ]
  },
  "asset-manager": {
    "title": "Gestionnaire d'actifs",
    "hook": "Le professionnel engagé pour faire fructifier l'argent des autres — jugé non pas sur des rendements absolus mais sur sa capacité à battre un indice de référence.",
    "tldr": "Un gestionnaire d'actifs gère des portefeuilles d'investissement pour le compte de clients, facturant des frais et visant un rendement qui les justifie face à un indice de référence.",
    "definition": [
      "Un gestionnaire d'actifs (BlackRock, Vanguard, Fidelity, ou une boutique spécialisée) est une entreprise qui investit de l'argent mutualisé pour le compte de clients — particuliers via des fonds, institutions via des mandats — contre rémunération. L'accord de base : les clients confient un capital et un mandat (croissance, revenu, adossement au passif), le gérant construit et rééquilibre des portefeuilles pour le respecter, et facture un pourcentage des actifs (TER) et parfois une commission de performance. Le gérant ne possède pas l'argent ; il est payé pour en être un bon mandataire.",
      "Les gérants se répartissent en actifs (essayant de battre un indice de référence en sélectionnant des titres) et passifs/indiciels (répliquant un indice à coût minimal). Le secteur a massivement basculé vers le passif car, frais déduits, la plupart des gérants actifs échouent à battre leur indice de référence sur de longues périodes — un résultat si constant que des milliers de milliards se sont déplacés des sélectionneurs de titres vers des fonds indiciels bon marché. Les gérants actifs qui survivent ont soit un avantage réel et scalable, soit servent des niches (marchés privés, revenu fixe, stratégies spécialisées) où l'indexation ne fonctionne pas encore bien."
    ],
    "keyPoints": [
      "Gère l'argent des clients selon un mandat, contre rémunération (TER et/ou performance).",
      "Le gérant actif tente de battre un indice ; le gérant passif en réplique un à faible coût.",
      "Jugé sur le rendement ajusté du risque vs. l'indice de référence, net de frais, après impôts.",
      "L'échelle compte : plus d'encours répartit les coûts fixes, réduit les frais et attire plus d'encours."
    ],
    "formula": {
      "expression": "Rendement actif = Rendement du gérant − Rendement de l'indice de référence",
      "legend": "Rendement du gérant = résultat du portefeuille · Rendement de l'indice = comparaison passive",
      "note": "L'« alpha » positif après frais est toute la justification du gérant actif ; un alpha persistant est extrêmement rare."
    },
    "example": {
      "scenario": "Un gérant actif gère 1 Md€ face à l'indice MSCI World. L'indice rapporte 8 %, le gérant rapporte 9 % brut mais facture 1,2 %. Alpha net ?",
      "steps": [
        "Surperformance brute (alpha) = 9 % − 8 % = +1,0 %",
        "Frais = 1,2 % → rendement net = 9 % − 1,2 % = 7,8 %",
        "Alpha net vs. indice = 7,8 % − 8 % = −0,2 % (sous-performance)",
        "Un fonds indiciel à 0,1 % net 7,9 % — bat le gérant « star » après frais."
      ],
      "result": "Surperformer l'indice avant frais ne vous sauve pas ; après frais, le fonds passif bon marché l'emporte. Les frais sont le seul prédicteur fiable des rendements à long terme."
    },
    "deepDive": [
      "Pourquoi l'alpha persistant est-il si rare ? Parce que les marchés sont concurrentiels et que les prix reflètent déjà l'information disponible (l'hypothèse d'efficience des marchés, globalement vraie). Pour battre la moyenne, il faut trouver une erreur que les autres manquent — mais la moyenne est fixée par tous ceux qui essaient la même chose, et après coûts de transaction et frais, le dollar actif moyen doit par définition sous-performer le dollar passif (le calcul est brutal et inévitable). Les rares gérants ayant un réel avantage tendent à être limités en capacité : leur stratégie cesse de fonctionner si trop d'argent y afflue, ce qui explique pourquoi les plus grands gagnants ferment souvent leurs fonds aux nouveaux capitaux.",
      "Le conflit plus profond du gestionnaire d'actifs est « collecter des actifs » vs. « générer des rendements ». Comme les frais sont proportionnels aux encours, l'entreprise est récompensée pour sa taille même quand celle-ci dilue la performance (contrainte de capacité). Un gérant qui ferme son fonds pour protéger les rendements renonce à des frais — une décision rare et principielle. Le correctif structurel pour les clients est de privilégier les gérants dont les intérêts sont alignés avec les leurs (commissions de performance avec plus-haut historique, actionnariat salarié, discipline de capacité) et de se rappeler que le gérant est un prestataire de services à évaluer sans relâche, non un gourou à qui faire confiance."
    ],
    "glossary": [
      {
        "term": "Alpha",
        "def": "Rendement supérieur à l'indice de référence — la valeur ajoutée (ou non) du gérant actif."
      },
      {
        "term": "Indice de référence",
        "def": "L'indice passif auquel un gérant actif est comparé."
      },
      {
        "term": "Plus-haut historique (high watermark)",
        "def": "Structure de frais qui ne verse des commissions de performance que sur de nouveaux profits, pas sur le rattrapage de pertes."
      }
    ]
  },
  "swap": {
    "title": "Swaps",
    "hook": "Deux parties qui échangent leurs flux de trésorerie respectifs — le produit dérivé le plus utilisé dont vous n'avez jamais entendu parler.",
    "tldr": "Un swap est un produit dérivé où deux parties échangent des séquences de flux de trésorerie — le plus souvent un taux fixe contre un taux variable — sur une période définie.",
    "definition": [
      "Un swap est un accord entre deux contreparties visant à échanger des flux de trésorerie à des dates fixées, pour une durée déterminée. La forme canonique est le swap de taux d'intérêt : la partie A paie un taux fixe à B, et B paie un taux variable (comme le SOFR/Euribor) à A, sur le même montant « notionnel ». Aucun capital ne change de mains — le notionnel n'est que le chiffre servant de base au calcul des intérêts. Le résultat net est un seul paiement à chaque période, de celui qui doit le plus à celui à qui l'on doit.",
      "Les swaps existent parce que différentes parties ont des besoins et des vues différents. Une entreprise avec un prêt à taux variable qui craint une hausse des taux fait un swap vers du fixe ; une banque avec des dépôts à taux fixe fait un swap vers du variable. Au-delà des taux, il existe des swaps de devises (échange de capital et d'intérêts en deux devises), des swaps de défaut de crédit (assurance contre le défaut d'un emprunteur), des swaps de matières premières et des swaps sur actions. Les swaps sont surtout de gré à gré — sur mesure, bilatéraux, et désormais largement compensés via des contreparties centrales depuis 2008."
    ],
    "keyPoints": [
      "Échange de flux de trésorerie, pas de capital — le notionnel n'est qu'un montant de référence.",
      "Les swaps de taux d'intérêt constituent le plus grand marché de dérivés en notionnel.",
      "Utilisés pour convertir une exposition variable en fixe (ou inversement) — pour couvrir, pas seulement spéculer.",
      "Bilatéral/OTC → le risque de contrepartie est central ; la compensation l'atténue."
    ],
    "formula": {
      "expression": "Paiement net = (Taux variable − Taux fixe) × Notionnel × Fraction de période",
      "legend": "Notionnel = montant de référence · taux en valeurs décimales · Fraction de période = période/360 ou /365",
      "note": "Seule la différence nette est payée, à chaque période — c'est ce que signifie la « compensation » en pratique."
    },
    "example": {
      "scenario": "Une entreprise a un prêt à taux variable de 10 M€ (Euribor) et craint une hausse des taux. Elle conclut un swap de 5 ans : paie 3 % fixe, reçoit l'Euribor.",
      "steps": [
        "Si l'Euribor est à 2 % : l'entreprise paie 3 % − reçoit 2 % = paiement net 1 % × 10 M€ = 100 k€/an.",
        "Sur le prêt, elle paie 2 % d'Euribor ; le swap donne au net : 2 % + (3 %−2 %) = 3 % tout compris = fixe.",
        "Si l'Euribor grimpe à 5 % : le swap donne au net réception 5 %−3 % = +2 % × 10 M€ = +200 k€.",
        "Le prêt coûte 5 %, le swap rapporte 200 k€ → coût net 3 %. Le swap a verrouillé un taux fixe de 3 %."
      ],
      "result": "Quoi que fasse l'Euribor, le coût net de l'entreprise est de 3 %. Le swap a converti un prêt à taux variable en un prêt à taux fixe effectif, sans refinancement."
    },
    "deepDive": [
      "Les swaps sont puissants précisément parce qu'ils séparent l'actif de son risque. L'entreprise ci-dessus a gardé son prêt (bon marché, flexible, basé sur une relation) mais a modifié synthétiquement son exposition au taux d'intérêt. Cette transformation « synthétique » est la vertu générale des produits dérivés : vous pouvez acquérir ou céder n'importe quelle exposition sans acheter ni vendre le sous-jacent — moins cher, plus rapide, et sans perturber l'activité réelle. Le risque est que ce même effet de levier et cette même flexibilité permettent de prendre des expositions que l'on ne peut réellement pas se permettre, raison pour laquelle les swaps sont désormais compensés et marginés de manière centrale.",
      "Les montants notionnels des swaps semblent terrifiants (des centaines de milliers de milliards à l'échelle mondiale) mais sont trompeurs : ils font référence à un capital qui ne bouge jamais. L'exposition économique réelle — la valeur au marché de tous les swaps en cours — est bien plus faible, de l'ordre de quelques milliers de milliards. Cette valeur reste néanmoins réelle et bilatérale ; la poussée post-2008 vers la compensation des swaps standards via des contreparties centrales transforme ces expositions bilatérales en expositions marginées et garanties, échangeant le risque de contrepartie contre le risque systémique d'une défaillance de la chambre de compensation (un danger plus petit mais plus concentré)."
    ],
    "glossary": [
      {
        "term": "Notionnel",
        "def": "Le montant de référence utilisé pour calculer les paiements d'un swap — non réellement échangé."
      },
      {
        "term": "Swap de taux d'intérêt",
        "def": "Échange d'un taux fixe contre un taux variable sur un notionnel — le swap de référence."
      },
      {
        "term": "CDS",
        "def": "Credit default swap — un swap qui verse en cas de défaut d'un emprunteur désigné (assurance contre le défaut)."
      }
    ]
  },
  "futures": {
    "title": "Contrats à terme (futures)",
    "hook": "Un contrat contraignant pour acheter ou vendre quelque chose plus tard à un prix fixé aujourd'hui — négocié en bourse, marginé quotidiennement.",
    "tldr": "Un future est un contrat standardisé, négocié en bourse, pour acheter ou vendre un actif à un prix fixe à une date future, réglé quotidiennement via une chambre de compensation.",
    "definition": [
      "Un contrat à terme (future) vous engage à acheter (position longue) ou vendre (position courte) une quantité fixée d'un actif à un prix convenu maintenant, pour livraison à une date future fixe. Contrairement à un forward privé, un future est standardisé (quantité, qualité, date, tout est fixé par la bourse) et négocié en bourse, ce qui change deux choses : la chambre de compensation devient votre contrepartie (aucun risque de défaut), et vous devez déposer une marge et régler gains et pertes chaque jour (« valorisation au marché »).",
      "Le règlement quotidien est le mécanisme définissant ce produit. Chaque jour, la bourse crédite ou débite votre compte selon le mouvement de prix de la journée. Si votre marge tombe sous un niveau de maintien, vous recevez un appel de marge et devez la reconstituer immédiatement, sous peine de liquidation. Cela rend les futures auto-garantis et supprime le risque de crédit — mais cela signifie aussi qu'une position peut être clôturée par des appels de marge avant l'échéance du contrat, ce qu'un forward privé ne peut pas faire. Les futures sont utilisés par des couvreurs (un agriculteur verrouillant le prix d'une récolte, une compagnie aérienne verrouillant ses coûts de carburant) et des spéculateurs qui ne veulent jamais du sous-jacent."
    ],
    "keyPoints": [
      "Standardisé et négocié en bourse → liquide, transparent, garanti par la chambre de compensation.",
      "La valorisation quotidienne au marché et les appels de marge suppriment le risque de contrepartie mais imposent une gestion de trésorerie.",
      "Règlement physique = livraison de l'actif ; règlement en espèces = paiement de la différence de prix.",
      "Utilisé pour couvrir un risque de prix ou spéculer avec effet de levier (une petite marge contrôle une exposition totale)."
    ],
    "formula": {
      "expression": "P&L = (Prix de règlement − Prix d'entrée) × Taille du contrat × Nombre de contrats",
      "legend": "Prix de règlement = clôture quotidienne · Taille du contrat = unités par contrat · Nombre = contrats détenus",
      "note": "Le signe s'inverse pour les positions courtes : elles gagnent quand le prix baisse. La marge doit couvrir les variations quotidiennes."
    },
    "example": {
      "scenario": "Un boulanger veut verrouiller le prix du blé à 200 €/tonne pour livraison dans 3 mois. Un contrat à terme = 50 tonnes. Il achète 10 contrats.",
      "steps": [
        "Exposition = 10 × 50 tonnes = 500 tonnes, verrouillées à 200 €.",
        "Si le blé monte à 250 € à l'échéance : gain = (250−200) × 500 = 25 000 € en crédits de marge.",
        "Il prend livraison à 200 € (ou règle en espèces +25 000 € et achète au comptant à 250 € — même résultat).",
        "Si le blé tombe à 150 € : −25 000 €, mais il achète quand même son blé bon marché sur le marché — il s'est couvert."
      ],
      "result": "Le boulanger a verrouillé son coût d'intrant à 200 €/tonne, quels que soient les mouvements de prix. Les futures ont transformé un coût imprévisible en un coût connu."
    },
    "deepDive": [
      "Le prix d'un future n'est pas seulement le prix au comptant d'aujourd'hui ; il intègre le « coût de portage » — le financement, le stockage et (pour les matières premières) la commodité de détenir l'actif physique. Un future se négocie souvent avec une prime (contango) quand le portage est positif, ou une décote (backwardation) quand le physique est rare et urgemment nécessaire. La forme de la courbe — les prix sur les différents mois d'échéance — est elle-même une information : la backwardation signale une tension actuelle ; le contango signale une abondance (ou un excédent stocké pour plus tard).",
      "Les futures sont à effet de levier : une petite marge (souvent 5 à 10 %) contrôle la valeur totale du contrat, si bien qu'un mouvement de prix de 5 % peut doubler ou anéantir votre marge. Cet effet de levier est l'attrait pour les spéculateurs et le danger pour les imprudents — une position que vous ne pouvez pas vous permettre de conserver à travers des fluctuations normales sera liquidée au pire moment. Les couvreurs tolèrent cela car ils ont une exposition physique compensatoire ; les spéculateurs parient qu'ils pourront gérer les appels de marge. La plupart des ruines chez les particuliers en futures ne viennent pas d'une mauvaise anticipation de la direction, mais d'avoir eu raison trop tôt et manqué de marge avant d'être prouvé juste."
    ],
    "glossary": [
      {
        "term": "Appel de marge",
        "def": "Une demande d'ajout de fonds quand des pertes quotidiennes font tomber votre marge sous le niveau de maintien."
      },
      {
        "term": "Contango / backwardation",
        "def": "Future au-dessus du comptant (contango) vs. future en dessous du comptant (backwardation) — la forme de la courbe."
      },
      {
        "term": "Valorisation au marché",
        "def": "Réévaluer une position au prix de marché actuel chaque jour, en réglant la différence en espèces."
      }
    ]
  },
  "forward": {
    "title": "Contrats forward",
    "hook": "Le cousin plus ancien et plus privé du contrat à terme — sur mesure, bilatéral, et réglé seulement à la fin.",
    "tldr": "Un forward est un contrat privé et personnalisé pour acheter ou vendre un actif à un prix fixé à une date future, réglé une seule fois à l'échéance.",
    "definition": [
      "Un contrat forward est le produit dérivé le plus simple : deux parties conviennent aujourd'hui d'un prix pour un actif à livrer à une date future. Contrairement à un future, il est privé (de gré à gré), entièrement personnalisé (n'importe quelle taille, date, qualité voulue par les deux parties) et réglé une seule fois à l'échéance plutôt que quotidiennement. Cette simplicité est sa force — un forward de change peut verrouiller exactement le montant et la date dont une entreprise a besoin pour une facture — et sa faiblesse : la contrepartie est l'autre partie, avec tout le risque de défaut que cela implique, et il n'y a pas de marge quotidienne pour détecter les problèmes tôt.",
      "Les forwards sont surtout courants sur le marché des changes (un forward €/USD permet à un exportateur de verrouiller le taux auquel il convertira ses futures ventes en dollars), des matières premières et des taux d'intérêt (FRA). Comme ils sont bilatéraux et sur mesure, ils sont illiquides — vous ne pouvez pas facilement revendre un forward à quelqu'un d'autre ; vous le compensez généralement en concluant un forward inverse avec la même contrepartie ou une autre, laissant deux contrats qui s'annulent économiquement mais portent tous deux un risque de crédit jusqu'à leur échéance."
    ],
    "keyPoints": [
      "Privé, personnalisé, réglé une seule fois à l'échéance — l'alternative flexible aux futures.",
      "Le risque de contrepartie est réel et bilatéral — pas de chambre de compensation, pas de marge quotidienne.",
      "Les forwards de change sont le principal cas d'usage (verrouiller de futurs taux de change).",
      "Illiquide : difficile à transférer ; généralement compensé par un forward inverse."
    ],
    "formula": {
      "expression": "Prix forward = Comptant × (1 + r·t)  (actif sans coût de portage)",
      "legend": "Comptant = prix d'aujourd'hui · r = taux de financement · t = temps jusqu'à l'échéance en années",
      "note": "Avec dividendes, stockage ou rendement, ajustez : Forward = Comptant × (1 + (r − rendement)·t) + coûts de stockage."
    },
    "example": {
      "scenario": "Un exportateur américain recevra 1 M€ dans 90 jours et veut verrouiller le taux €→$. Le comptant est à 1,10 $/€ ; le taux dollar à 90 jours est de 5 %. Forward ?",
      "steps": [
        "t = 90/360 = 0,25 an ; coût de financement = 5 % × 0,25 = 1,25 %",
        "Forward = 1,10 × (1 + 0,0125) = 1,11375 $/€",
        "Dans 90 jours, 1 M€ se convertit à 1,11375 = 1 113 750 $, quel que soit le comptant à ce moment-là.",
        "Si l'euro s'est effondré à 1,00 d'ici là, l'exportateur est ravi — le forward lui a fait économiser 113 750 $."
      ],
      "result": "L'exportateur a éliminé le risque de change d'une créance future connue. Le prix forward reflète le coût de portage de la position, pas un pari sur le marché."
    },
    "deepDive": [
      "La différence entre un forward et un future est surtout institutionnelle mais lourde de conséquences. La marge quotidienne du future fait disparaître le risque de crédit mais impose une gestion active de trésorerie ; le règlement unique du forward laisse la trésorerie inactive jusqu'à l'échéance mais laisse le risque de crédit s'accumuler invisiblement — on n'apprend que l'autre partie est en difficulté que lorsqu'elle ne paie pas à la fin. C'est pourquoi les banques qui émettent des forwards exigent du collatéral et pourquoi les régulateurs ont poussé les forwards standards vers la compensation. La leçon de 2008 fut que le risque de crédit invisible et bilatéral se concentre puis détone.",
      "La « juste valeur » d'un forward à tout moment avant l'échéance est la différence entre le prix verrouillé et le prix forward de marché actuel, actualisée. C'est exactement ainsi que les banques valorisent au marché leurs livres de forwards quotidiennement à des fins de risque et de comptabilité, même si le contrat lui-même ne se règle qu'à la fin. Une entreprise détenant un forward très gagnant face à une contrepartie en difficulté détient un actif qui peut ne rien valoir — la valorisation affiche un profit que l'équipe crédit sait peut-être jamais recouvrable."
    ],
    "glossary": [
      {
        "term": "OTC",
        "def": "Over-the-counter (gré à gré) — négocié en privé, hors bourse ; le terrain de jeu du forward."
      },
      {
        "term": "FRA",
        "def": "Forward Rate Agreement — un forward sur un futur taux d'intérêt."
      },
      {
        "term": "NDF",
        "def": "Non-deliverable forward — un forward réglé en espèces (la différence), utilisé pour les devises restreintes."
      }
    ]
  },
  "options": {
    "title": "Options",
    "hook": "Le droit, pas l'obligation — payer une prime aujourd'hui pour décider plus tard si une transaction en vaut la peine.",
    "tldr": "Une option donne à l'acheteur le droit (pas l'obligation) d'acheter (call) ou de vendre (put) un actif à un prix fixé avant une date fixée, contre une prime payée d'avance.",
    "definition": [
      "Une option est asymétrique par conception. L'acheteur paie une prime et obtient un droit ; le vendeur encaisse la prime et prend une obligation. Un call donne le droit d'acheter au prix d'exercice ; un put donne le droit de vendre au prix d'exercice. Comme l'acheteur peut se retirer, il ne perd jamais plus que la prime — tandis que le vendeur peut perdre bien davantage (la perte du vendeur d'un call est, en principe, illimitée). Cette asymétrie est tout l'intérêt : les options permettent de plafonner votre risque tout en conservant votre potentiel de gain, pour le prix de la prime.",
      "La valeur d'une option comporte deux parties. La valeur intrinsèque est ce que vaut l'option si elle est exercée maintenant (un call de prix d'exercice 50 € alors que l'action est à 60 € vaut 10 € en intrinsèque). La valeur temps est le supplément payé pour la chance que l'action continue de bouger avant l'échéance — déterminée par le temps restant et la volatilité. Une volatilité plus élevée, plus de temps, des taux plus bas augmentent tous les primes. La célèbre formule de Black-Scholes tarife une option européenne à partir de ces variables ; la vérité plus profonde qu'elle encode est que la volatilité est le principal déterminant de la valeur d'une option."
    ],
    "keyPoints": [
      "L'acheteur a un droit (perte maximale = la prime) ; le vendeur a une obligation (peut perdre bien plus).",
      "Call = droit d'acheter ; Put = droit de vendre ; Prix d'exercice = le prix verrouillé ; Échéance = la date limite.",
      "Valeur = intrinsèque + valeur temps ; la valeur temps augmente avec la volatilité et le temps.",
      "Utilisées pour couvrir (acheter des puts comme assurance) ou pour spéculer/générer un revenu (vendre des calls couverts)."
    ],
    "formula": {
      "expression": "Valeur du call = Intrinsèque + Valeur temps,  Intrinsèque = Max(0, Comptant − Prix d'exercice)",
      "legend": "Comptant = prix actuel · Prix d'exercice = prix d'exercice de l'option · Valeur temps ≈ f(volatilité, temps, taux)",
      "note": "Black-Scholes : C = S·N(d1) − K·e^(−rt)·N(d2) — la formule fermée pour tarifer les calls européens."
    },
    "example": {
      "scenario": "Vous détenez une action à 100 € et craignez un krach. Vous achetez un put de 3 mois avec un prix d'exercice de 90 € pour 3 € (prime). Que se passe-t-il ?",
      "steps": [
        "Coût = 3 €/action — le maximum que vous pouvez perdre (la « prime d'assurance »).",
        "Si l'action reste à 100 € : le put expire sans valeur, vous perdez les 3 € — assurance non utilisée.",
        "Si l'action chute à 70 € : le put vous permet de vendre à 90 € → vous obtenez 90 € et non 70 €, économisant 20 € − 3 € = 17 €.",
        "Votre plancher effectif est 90 € − 3 € = 87 € ; votre potentiel de hausse au-dessus de 100 € reste inchangé."
      ],
      "result": "Pour 3 €, vous avez acheté un plancher sous votre position. Le put est une assurance de portefeuille — un petit coût certain pour plafonner une perte catastrophique."
    },
    "deepDive": [
      "Les options sont le pari le plus pur sur la volatilité. Un acheteur de straddle (un call et un put au même prix d'exercice) gagne si l'action bouge beaucoup dans une direction ou l'autre et perd si elle reste immobile — il a acheté de la volatilité. Le vendeur gagne si elle reste immobile et perd si elle explose — il a vendu de la volatilité. C'est pourquoi les traders d'options pensent en « vol », pas en direction : la question est de savoir si la volatilité réalisée dépassera la volatilité implicite déjà intégrée dans la prime. L'indice de volatilité (VIX) est littéralement la volatilité implicite des options sur le S&P 500 — l'anticipation par le marché des futurs mouvements, négociable comme un actif à part entière.",
      "Le danger silencieux des options est l'érosion temporelle (« theta ») : une option perd un peu de valeur chaque jour où elle ne bouge pas dans la monnaie, s'accélérant à l'approche de l'échéance. Les acheteurs d'options luttent à la fois contre la direction et contre l'horloge ; les vendeurs d'options encaissent le theta mais assument un risque extrême qu'ils peuvent ne pas voir venir pendant des années. La plupart des acheteurs particuliers d'options perdent de l'argent non pas parce que la direction est difficile à prévoir (elle l'est) mais parce qu'ils surpaient systématiquement la valeur temps et la laissent s'éroder — ils sont la contrepartie qui finance le revenu de prime de vendeurs plus disciplinés. Les options sont des outils, pas des billets de loterie ; la différence tient à ce qu'on ait une vue sur la volatilité, pas seulement sur la direction."
    ],
    "glossary": [
      {
        "term": "Prime",
        "def": "Le prix payé pour une option — la perte maximale de l'acheteur."
      },
      {
        "term": "Volatilité implicite",
        "def": "La volatilité future intégrée dans le prix de marché d'une option — ce que vous négociez réellement."
      },
      {
        "term": "Theta",
        "def": "L'érosion temporelle — la valeur qu'une option perd chaque jour où elle ne bouge pas dans la monnaie."
      }
    ]
  },
  "hedging": {
    "title": "Couverture (hedging)",
    "hook": "Non pas un pari sur le fait d'avoir raison — un pari sur le fait de ne pas être ruiné. L'art de compenser un risque par un autre.",
    "tldr": "La couverture (hedging) consiste à prendre une position compensatoire dont les gains annulent les pertes d'un risque déjà détenu, de sorte que l'exposition nette soit ce que vous voulez, pas ce que le hasard vous impose.",
    "definition": [
      "Se couvrir, c'est réduire ou éliminer une exposition indésirable en prenant une position qui évolue en sens inverse. Un agriculteur qui vendra du blé se couvre en vendant des futures sur blé : si le prix baisse, la récolte vaut moins mais les futures compensent par un gain ; si le prix monte, les futures perdent mais la récolte vaut plus. Dans les deux cas, le résultat net est à peu près le prix verrouillé. La couverture ne consiste pas à gagner de l'argent — elle consiste à rendre un résultat certain afin que l'activité réelle (agriculture, fabrication, importation) puisse être planifiée.",
      "Une « couverture parfaite » ne laisse aucune exposition, mais en pratique les couvertures sont imparfaites : l'instrument de couverture correspond rarement exactement au sous-jacent (risque de base), le calendrier peut différer, et se couvrir coûte de l'argent (primes, spreads, marge). L'art consiste à couvrir à bas coût les risques importants et ruineux, et à accepter les petits risques supportables. La surcouverture — se couvrir tellement qu'on spécule par accident — est une erreur courante : une entreprise qui couvre 130 % de ses besoins en carburant est désormais short sur le carburant, pariant sur les prix, même si elle appelle cela une couverture."
    ],
    "keyPoints": [
      "Compenser un risque existant pour que l'exposition nette soit le résultat planifié, pas le résultat aléatoire.",
      "Les couvertures parfaites sont rares — le « risque de base » est l'écart entre la couverture et le sous-jacent.",
      "Se couvrir coûte de l'argent (primes, spreads, marge) ; ce coût est le prix de la certitude.",
      "La surcouverture transforme une couverture en pari spéculatif — dimensionnez selon l'exposition réelle."
    ],
    "formula": {
      "expression": "Ratio de couverture = Valeur de la position de couverture ÷ Valeur de l'exposition",
      "legend": "Position de couverture = instrument compensatoire · Exposition = risque couvert",
      "note": "Un ratio de 1,0 est une couverture totale ; le ratio optimal dépend aussi de la façon dont la couverture évolue par rapport à l'exposition (beta)."
    },
    "example": {
      "scenario": "Un fonds européen détient 10 M$ d'actions américaines et craint un renforcement de l'euro face au dollar avant de publier ses résultats dans 3 mois. Comment couvre-t-il le risque de change ?",
      "steps": [
        "Risque : si $/€ baisse, les 10 M$ valent moins d'euros une fois rapatriés.",
        "Couverture : vendre 10 M$ à terme (ou acheter des puts sur le dollar) pour une échéance de 3 mois.",
        "Si $/€ baisse de 5 % : les actions américaines valent 5 % de moins en euros, mais le forward gagne 5 % → cela s'annule.",
        "Le fonds a verrouillé la valeur en euros de ses positions américaines, éliminant le pari sur la devise qu'il n'avait jamais voulu prendre."
      ],
      "result": "Le fonds était long actions américaines ET long le dollar par accident ; la couverture a supprimé le pari accidentel sur la devise, ne laissant que le pari sur les actions qu'il voulait réellement prendre."
    },
    "deepDive": [
      "Le point le plus profond sur la couverture est qu'elle porte sur la sélection du risque, pas son élimination. Chaque portefeuille est un ensemble de risques — marché, devise, taux, matières premières, crédit — et la plupart des investisseurs en détiennent beaucoup qu'ils n'ont jamais choisis (un portefeuille d'actions est implicitement long croissance, short volatilité, long le dollar, etc.). La couverture permet de retirer les risques sur lesquels vous n'avez pas d'avantage et que vous ne souhaitez pas porter, en ne gardant que ceux pour lesquels vous voulez réellement être rémunéré. Le fonds ci-dessus voulait être payé pour sa sélection d'actions, pas pour la devise ; la couverture a rendu cela net. Bien faite, la couverture affine une position ; mal faite, elle ne fait qu'ajouter coût et complexité.",
      "Couverture et assurance sont la même idée vue sous des angles différents. Acheter un put, c'est acheter une assurance sur votre action ; acheter un CDS, c'est acheter une assurance sur une obligation ; acheter une assurance incendie, c'est acheter un put sur votre maison. Le principe est universel : payer une petite prime certaine pour éviter une perte insupportable, quand la perte est insupportable et que la prime est supportable. L'erreur consiste à assurer ce que l'on peut se permettre d'auto-assurer (garanties de téléphone) et à s'auto-assurer contre ce que l'on ne peut pas (rester non assuré contre une catastrophe). La couverture n'est que l'assurance appliquée aux expositions financières — même logique économique, même discipline."
    ],
    "glossary": [
      {
        "term": "Risque de base",
        "def": "Le risque que la couverture ne suive pas parfaitement l'exposition — l'écart résiduel."
      },
      {
        "term": "Ratio de couverture",
        "def": "La quantité de couverture à détenir par unité d'exposition ; 1,0 compense entièrement."
      },
      {
        "term": "Couverture naturelle",
        "def": "Une exposition qui se compense elle-même (revenus et coûts dans la même devise) — aucun instrument nécessaire."
      }
    ]
  },
  "short-selling": {
    "title": "Vente à découvert",
    "hook": "Parier qu'une chose va baisser — en vendant des actions empruntées que vous ne possédez pas, dans l'espoir de les racheter moins cher.",
    "tldr": "La vente à découvert consiste à vendre un actif emprunté en espérant que son prix baisse, afin de le racheter moins cher, de le restituer, et de garder la différence.",
    "definition": [
      "La vente à découvert inverse l'ordre habituel : on vend d'abord, on achète ensuite. Pour vendre une action à découvert, vous empruntez des actions à un courtier (qui les prête depuis son propre inventaire ou les avoirs d'autres clients), les vendez sur le marché, et recevez du cash. Plus tard, vous devez racheter le même nombre d'actions pour les restituer. Si le prix a baissé, vous rachetez moins cher que vous n'avez vendu — vous gardez la différence. S'il a monté, vous rachetez plus cher que vous n'avez vendu — vous perdez. Votre gain est plafonné au prix initial (l'action ne peut tomber qu'à zéro) mais votre perte est, en principe, illimitée (l'action peut monter sans limite).",
      "Vendre à découvert nécessite un emprunt de titres, qui a son propre coût (des « frais d'emprunt ») et le risque que le prêteur rappelle les actions, vous forçant à racheter à un mauvais prix. Cela nécessite aussi de la marge, car vos pertes peuvent excéder le produit de la vente. Et cela comporte un risque de « short squeeze » : si de nombreux vendeurs à découvert sont pris au piège et que l'action monte, ils se précipitent tous pour racheter en même temps, poussant le prix encore plus haut et en piégeant davantage — une boucle de rétroaction pouvant multiplier les pertes en quelques jours. Vendre à découvert est rationnel et utile (cela améliore la découverte des prix et permet d'exprimer une vue négative), mais c'est dangereusement asymétrique et pas fait pour qui n'est pas couvert."
    ],
    "keyPoints": [
      "Vendre des actions empruntées haut, racheter bas, les restituer, garder l'écart.",
      "Gain plafonné au prix initial ; perte théoriquement illimitée.",
      "Coûte des frais d'emprunt et de la marge ; le prêteur peut rappeler les actions.",
      "Short squeeze : une hausse de prix force les vendeurs à découvert à racheter, poussant le prix encore plus haut."
    ],
    "formula": {
      "expression": "P&L short = (Prix de vente − Prix de rachat) × Actions − Frais d'emprunt − Dividendes versés",
      "legend": "Prix de vente = produit de la vente à découvert · Rachat = coût de clôture · Dividendes versés = le vendeur à découvert doit tout dividende au prêteur",
      "note": "Un vendeur à découvert doit au prêteur tout dividende versé pendant la position — et doit couvrir un rappel à tout moment."
    },
    "example": {
      "scenario": "Vous vendez à découvert 100 actions à 50 €. L'action ne verse pas de dividende et l'emprunt est gratuit. Elle tombe à 40 €. Vous clôturez.",
      "steps": [
        "Vente : 100 × 50 € = 5 000 € reçus (détenus comme garantie, pas encore à vous).",
        "Rachat : 100 × 40 € = 4 000 € payés.",
        "Profit = 5 000 − 4 000 = 1 000 € (un gain de 20 % sur le notionnel de 5 000 €).",
        "Si elle était montée à 70 € : rachat = 7 000 € → perte de 2 000 € (28 % du notionnel) — et en hausse."
      ],
      "result": "Une baisse de 10 € a rapporté 1 000 € ; une hausse de 20 € a fait perdre 2 000 €. Cette asymétrie — gain plafonné, perte ouverte — explique pourquoi vendre à découvert est plus risqué qu'être acheteur."
    },
    "deepDive": [
      "La vente à découvert est le paratonnerre moral des marchés : quand une entreprise s'effondre, les vendeurs à découvert sont blâmés pour l'avoir causé, alors qu'ils n'ont fait qu'en profiter pour l'avoir détecté en premier. Économiquement, les vendeurs à découvert sont essentiels — ils sont la seule force qui repousse vers la vérité les actions surévaluées ou frauduleuses, car les acheteurs n'ont aucune incitation à jamais dire « vendez ». Un marché sans vendeurs à découvert est un marché où les mauvaises entreprises restent surévaluées et les fraudes durent plus longtemps (la recherche montre que l'intérêt vendeur améliore l'efficience des prix et dissuade la manipulation). Interdire la vente à découvert, comme l'ont fait plusieurs pays en 2008, retire une force stabilisatrice et rend les prix moins précis, pas plus sûrs.",
      "La vraie compétence du vendeur à découvert professionnel est la gestion du risque, pas le repérage de perdants. Une thèse de vente à découvert peut être 100 % juste et vous ruiner quand même : les fraudes peuvent mettre des années à se dénouer, et une action peut doubler avant de baisser de moitié. De célèbres positions courtes ont perdu de l'argent pendant des années avant d'être justifiées, exigeant du capital et des nerfs que peu possèdent. C'est pourquoi les vendeurs à découvert disciplinés dimensionnent petit, se couvrent avec des positions longues (« long/short » neutre au marché), et utilisent des options (acheter des puts — perte plafonnée) plutôt que des ventes à découvert nues quand l'asymétrie est insupportable. La plupart des ventes à découvert de particuliers explosent non pas parce qu'ils avaient tort sur l'entreprise mais parce qu'ils n'ont pas pu survivre au chemin menant à avoir raison."
    ],
    "glossary": [
      {
        "term": "Frais d'emprunt",
        "def": "Le coût d'emprunt d'actions pour les vendre à découvert — élevé pour les actions « difficiles à emprunter »."
      },
      {
        "term": "Short squeeze",
        "def": "Une boucle de rétroaction où la hausse des prix force les vendeurs à découvert à racheter, poussant les prix encore plus haut."
      },
      {
        "term": "Vente à découvert nue",
        "def": "Vendre à découvert sans avoir organisé l'emprunt des titres — interdit ou restreint sur la plupart des marchés."
      }
    ]
  },
  "margin-trading": {
    "title": "Trading sur marge",
    "hook": "Trader avec de l'argent emprunté — des positions plus grandes, des fluctuations plus fortes, et un courtier qui peut vous liquider sans demander.",
    "tldr": "Le trading sur marge consiste à acheter des actifs en partie avec de l'argent emprunté à votre courtier, amplifiant à la fois les gains et les pertes et vous exposant aux appels de marge.",
    "definition": [
      "Le trading sur marge signifie emprunter des liquidités à votre courtier pour acheter plus de titres que votre propre argent ne le permettrait. Vous apportez une partie (« marge initiale ») et le courtier prête le reste, en détenant les actifs achetés en garantie. Si les actifs montent, vos gains sont amplifiés ; s'ils baissent, vos pertes sont amplifiées de la même façon, et une fois que vos fonds propres tombent sous une « marge de maintien », le courtier émet un appel de marge — ajoutez du cash ou nous vendons vos positions, au marché, sans votre consentement.",
      "La caractéristique déterminante est l'appel de marge. Il transforme une baisse de prix temporaire en une perte permanente, car vous êtes forcé de vendre au plus bas pour honorer le prêt. C'est le danger fondamental de l'effet de levier : il vous retire l'option d'attendre. Un investisseur non endetté qui est « trop tôt » attend simplement ; un investisseur endetté qui est trop tôt est liquidé par son courtier avant que le marché ne se retourne. Le trading sur marge est à la fois le moteur de la spéculation particulière amplifiée et des explosions catastrophiques qui mettent fin à des carrières de trader — le calcul est correct, l'humain derrière ne l'est généralement pas."
    ],
    "keyPoints": [
      "L'argent emprunté au courtier amplifie également les gains et les pertes.",
      "Appel de marge : si les fonds propres tombent sous le seuil de maintien, ajoutez du cash ou soyez liquidé automatiquement.",
      "La vente forcée à de mauvais prix transforme des baisses temporaires en pertes permanentes.",
      "Le courtier détient vos actifs en garantie et peut les vendre sans demander."
    ],
    "formula": {
      "expression": "Fonds propres = Valeur de la position − Montant emprunté",
      "legend": "Valeur de la position = titres détenus · Emprunté = prêt sur marge du courtier · Fonds propres = votre mise",
      "note": "L'appel de marge se déclenche quand Fonds propres ÷ Valeur de la position tombe sous le % de marge de maintien."
    },
    "example": {
      "scenario": "Vous avez 5 000 € et achetez 10 000 € d'actions avec une marge de 50 % (5 000 € empruntés). L'action chute de 25 %. Que se passe-t-il ?",
      "steps": [
        "Position = 10 000 × 0,75 = 7 500 €. Prêt toujours à 5 000 €. Fonds propres = 7 500 − 5 000 = 2 500 €.",
        "Vos fonds propres sont passés de 5 000 € à 2 500 € — une perte de 50 % pour une baisse de prix de 25 % (levier de 2×).",
        "Si la marge de maintien est de 25 % : 2 500 ÷ 7 500 = 33 % — encore au-dessus, pas d'appel pour l'instant.",
        "Une nouvelle baisse de 10 % (à 6 750 €) : fonds propres = 1 750 € → 1 750/6 750 = 26 % — appel imminent ; le moindre nouveau glissement déclenche la liquidation."
      ],
      "result": "Une baisse de 25 % vous a coûté la moitié de votre argent. Avec l'effet de levier, « tenir et attendre » peut vous être retiré par un appel de marge — c'est le courtier, pas vous, qui décide quand vendre."
    },
    "deepDive": [
      "La marge est là où l'effet de levier des particuliers et celui des institutions se rejoignent dans la même physique. Un hedge fund à 5× de levier sur un portefeuille qui chute de 20 % perd 100 % de ses fonds propres et est liquidé — exactement comme le trader particulier à 2× qui reçoit un appel de marge sur une baisse de 25 %. Le mécanisme est à l'échelle : argent emprunté + vente forcée = la formule universelle pour transformer une mauvaise journée en compte anéanti. Les conditions de marge des courtiers (% initial, % de maintien, vitesse de liquidation) sont le frein privé, et les décotes des prime brokers en sont la version institutionnelle du même mécanisme.",
      "Le piège comportemental est que la marge semble sûre car les chiffres bougent lentement au début. Une baisse de 5 % entame à peine vos fonds propres, donc vous tenez ; une baisse de 15 % commence à faire mal mais vous « savez » que ça va rebondir ; à 25 %, l'appel de marge arrive et vous êtes vendu au plus bas dont vous étiez sûr qu'il était temporaire. L'effet de levier ne change pas la distribution des résultats de l'actif — il change votre survie face à celle-ci. La règle unificatrice à travers toute la finance est que l'effet de levier n'est supportable qu'avec un horizon assez long et un capital assez profond pour honorer n'importe quel appel de marge plausible ; sans les deux, c'est un pari sur le chemin, pas sur la destination, et le chemin est ce que personne ne peut prédire."
    ],
    "glossary": [
      {
        "term": "Marge initiale",
        "def": "Le montant minimal de cash que vous devez apporter pour ouvrir une position à effet de levier."
      },
      {
        "term": "Marge de maintien",
        "def": "Les fonds propres minimaux que vous devez continuer de détenir ; en dessous, un appel de marge se déclenche."
      },
      {
        "term": "Liquidation automatique",
        "def": "Le courtier vendant votre garantie pour rembourser le prêt quand vous ne répondez pas à un appel."
      }
    ]
  },
  "bond": {
    "title": "Obligations",
    "hook": "Une reconnaissance de dette négociable — vous prêtez de l'argent, vous encaissez des intérêts et (en théorie) vous êtes remboursé à l'échéance.",
    "tldr": "Une obligation est un prêt qu'un investisseur consent à un emprunteur (État ou entreprise), qui verse des intérêts réguliers et rembourse le capital à une date d'échéance fixée.",
    "definition": [
      "Une obligation est une reconnaissance de dette négociable. L'emprunteur (l'émetteur) promet de verser au prêteur (le porteur de l'obligation) des intérêts réguliers (le « coupon ») et de rembourser le montant initial (la « valeur nominale » ou « principal ») à une date d'échéance fixe. Les États empruntent via des obligations souveraines (les plus sûres, dites « sans risque ») ; les entreprises empruntent via des obligations d'entreprise (plus risquées, rendement plus élevé). Comme les versements sont fixés à l'avance, le comportement d'une obligation est inverse à celui des taux d'intérêt : quand les taux montent, les obligations existantes qui versent l'ancien coupon (plus faible) deviennent moins attractives, donc leur prix baisse ; quand les taux baissent, leur prix monte.",
      "Deux risques dominent les obligations. Le risque de crédit est la probabilité que l'émetteur fasse défaut (ne verse pas le coupon ou ne rembourse pas le capital) — plus élevé pour les entreprises, plus faible pour les États, et capturé par les notations de crédit (de AAA jusqu'à la catégorie spéculative). Le risque de taux est la probabilité que les taux montent et que votre obligation à coupon fixe perde de la valeur de marché — plus important pour les obligations à longue échéance (la « duration »). Une obligation d'État à court terme est proche du cash ; une obligation spéculative à 30 ans peut osciller comme une action."
    ],
    "keyPoints": [
      "Obligation = prêt négociable : coupon fixe, échéance fixe, remboursement du capital.",
      "Le prix évolue à l'inverse des taux ; plus l'échéance est longue, plus les variations sont fortes (duration).",
      "Rendement = retour total si conservée jusqu'à l'échéance ; il augmente quand le prix baisse.",
      "Le risque de crédit (défaut) et le risque de taux (variations de prix) sont les deux principaux risques."
    ],
    "formula": {
      "expression": "Prix = Σ [ Coupon ÷ (1+r)^t ] + Nominal ÷ (1+r)^n",
      "legend": "Coupon = intérêt périodique · Nominal = capital · r = taux d'actualisation (rendement) · t = chaque période · n = échéance",
      "note": "Le rendement à l'échéance (YTM) est le taux r qui égalise le prix et la valeur actuelle de tous les flux de trésorerie."
    },
    "example": {
      "scenario": "Vous achetez une obligation à 10 ans de 1 000 € versant un coupon de 4 % quand les rendements du marché sont à 4 %. Un an plus tard, les rendements montent à 5 %. Que devient le prix ?",
      "steps": [
        "À l'émission, coupon = rendement de marché → prix = valeur nominale = 1 000 € (au pair).",
        "Les taux montent à 5 % : votre coupon de 4 % est désormais en dessous du marché, donc le prix doit baisser pour offrir 5 % au total.",
        "Nouveau prix ≈ valeur actuelle des coupons restants + capital actualisés à 5 % ≈ 930 €.",
        "Conservez-la jusqu'à l'échéance et vous récupérez quand même 1 000 € — la perte est temporaire si vous ne vendez pas."
      ],
      "result": "Une hausse de taux de 1 % a fait passer l'obligation de 1 000 € à ~930 €. Elle continue de payer comme prévu ; seul son prix de marché a bougé. Conservez-la jusqu'à l'échéance et la perte s'efface."
    },
    "deepDive": [
      "Le « rendement » que vous lisez n'est pas le retour que vous obtiendrez réellement. Le rendement à l'échéance suppose que vous réinvestissez chaque coupon au même taux et conservez l'obligation jusqu'au bout — ni l'un ni l'autre n'est garanti. Et un fonds obligataire (qui ne conserve jamais jusqu'à l'échéance, roulant constamment son portefeuille) délivre le rendement de roulement, pas le YTM d'une obligation donnée. C'est pourquoi les fonds obligataires peuvent perdre de l'argent même quand « les rendements sont positifs » : si les taux montent plus vite que les coupons ne s'accumulent, les pertes en capital dépassent les revenus. Le modèle mental le plus clair : une obligation unique conservée jusqu'à l'échéance est un instrument à flux fixes ; un fonds obligataire est un pari perpétuel sur la trajectoire des taux.",
      "Les obligations sont au fondement de tout le système car le rendement de l'obligation d'État sans risque est le taux d'actualisation de tout autre actif — actions, immobilier, capital-investissement sont tous valorisés en actualisant leurs flux de trésorerie à un taux construit sur le rendement de l'obligation d'État plus une prime de risque. Donc quand les rendements obligataires bougent, tout se reprix — c'est pourquoi les chocs de taux sont les événements financiers les plus systémiques. Le marché obligataire, et non le marché actions, est le véritable système nerveux de la finance ; les actions ne sont que le bruit par-dessus."
    ],
    "glossary": [
      {
        "term": "Coupon",
        "def": "Le versement d'intérêt régulier qu'une obligation effectue (souvent fixe)."
      },
      {
        "term": "Duration",
        "def": "La sensibilité du prix d'une obligation aux variations de taux, exprimée en années — plus elle est longue, plus le risque de taux est élevé."
      },
      {
        "term": "YTM",
        "def": "Rendement à l'échéance — le retour annualisé total si l'obligation est conservée jusqu'au bout et les coupons réinvestis."
      }
    ]
  },
  "repo": {
    "title": "Marché des pensions livrées (repo)",
    "hook": "La plomberie de Wall Street — emprunter du cash pour une journée en mettant une obligation en garantie.",
    "tldr": "Une pension livrée (repo) est un prêt à court terme où une partie vend un titre et s'engage à le racheter plus tard à un prix légèrement supérieur — un prêt garanti par collatéral.",
    "definition": [
      "Une pension livrée est un prêt à court terme garanti par collatéral, généralement au jour le jour. La partie A « vend » un titre (souvent une obligation d'État) à la partie B contre du cash aujourd'hui, et s'engage simultanément à le racheter demain à un prix plus élevé — la différence constitue l'intérêt, le « taux repo ». Économiquement, c'est un prêt : l'obligation est le collatéral, le cash est le prêt, la prime de rachat est l'intérêt. Les repos sont le moyen par lequel banques, fonds et intermédiaires financent leur activité au quotidien ; le marché repo est l'endroit où des milliers de milliards se déplacent chaque nuit et où se fixe le véritable coût marginal de l'argent à court terme.",
      "Parce qu'ils sont garantis par des titres sûrs et s'auto-liquident en une journée, les repos sont normalement le coin le plus sûr et le plus ennuyeux de la finance. Mais ils constituent aussi la plomberie du système : quand le marché repo se grippe, les institutions qui se financent au jour le jour ne peuvent plus renouveler leurs emprunts et doivent vendre des actifs sur un marché en baisse — un amplificateur de crise classique. La « crise du repo » de septembre 2019 (les taux ont grimpé jusqu'à 10 %) et le gel de 2008 ont tous deux montré que même le marché garanti le plus sûr peut se bloquer quand tout le monde veut du cash en même temps."
    ],
    "keyPoints": [
      "Vendre un titre aujourd'hui, s'engager à le racheter demain à un prix plus élevé = un prêt garanti au jour le jour.",
      "Le taux repo est le coût à court terme de l'argent, garanti par des obligations sûres.",
      "La plomberie du système : des milliers de milliards circulent chaque nuit pour financer banques, fonds et intermédiaires.",
      "Normalement ultra-sûr ; peut se bloquer en cas de panique quand tout le monde veut du cash, pas des obligations."
    ],
    "formula": {
      "expression": "Intérêt repo = Valeur du collatéral × Taux repo × (Jours ÷ 360)",
      "legend": "Valeur du collatéral = obligation mise en garantie · Taux repo = taux au jour le jour annualisé · Jours = durée du repo",
      "note": "Une « décote » (haircut) réduit le cash prêté par rapport à la valeur du collatéral, laissant une marge de sécurité en cas de baisse de l'obligation."
    },
    "example": {
      "scenario": "Une banque intermédiaire a besoin de 100 M€ au jour le jour. Elle met en garantie 102 M€ d'obligations d'État (une décote de 2 %) et convient d'un taux repo de 3 %. Quel est le coût ?",
      "steps": [
        "Cash reçu = 100 M€ (98 % des 102 M€ de collatéral, la décote protégeant le prêteur).",
        "Intérêt = 100 M × 3 % × (1/360) ≈ 8 333 € pour une nuit.",
        "Le lendemain, elle rembourse 100 008 333 € et récupère ses obligations.",
        "Elle peut renouveler le repo chaque nuit — finançant son stock d'obligations à faible coût et à court terme."
      ],
      "result": "Pour 8 333 €, la banque a financé 100 M€ au jour le jour contre un collatéral sûr. Les repos permettent aux institutions de financer d'énormes bilans à des coûts nocturnes dérisoires — jusqu'à ce que le marché se grippe."
    },
    "deepDive": [
      "Les repos sont le moyen par lequel se construit l'effet de levier au niveau institutionnel. Un fonds spéculatif achète une obligation, la met en repo pour obtenir du cash, achète une autre obligation, la met aussi en repo — chaque tour ajoute un levier financé par le marché au jour le jour. Tant que le repo se renouvelle, la position est financée à bon compte ; dès qu'il cesse de se renouveler (les contreparties refusent de prêter, ou exigent une décote plus importante), le fonds doit vendre l'obligation sur un marché où tout le monde vend aussi. C'est la spirale effet de levier-financement au cœur des crises de 1998 (LTCM), 2008 (Lehman) et 2020 (tensions sur les fonds obligataires liées au COVID) — collatéral sûr, levier dangereux, même physique.",
      "La banque centrale est elle-même un participant géant du marché repo. Via sa facilité de repo, elle prête du cash contre collatéral pour maintenir le taux au jour le jour à sa cible, faisant du marché repo le canal de transmission littéral de la politique monétaire vers le système financier. Quand la Fed ou la BCE effectue une opération repo, elle injecte ou draine des réserves à l'extrémité la plus courte de la courbe — la même plomberie que celle utilisée par le marché privé, avec la banque centrale comme contrepartie de dernier recours. Comprendre le repo, c'est comprendre où la politique monétaire rencontre le marché : chaque décision de taux devient un coût réel au jour le jour sur ce marché avant d'atteindre le crédit immobilier de quiconque."
    ],
    "glossary": [
      {
        "term": "Taux repo",
        "def": "Le taux d'intérêt d'une pension livrée — le coût de l'argent au jour le jour garanti par collatéral."
      },
      {
        "term": "Décote (haircut)",
        "def": "La réduction par rapport à la valeur du collatéral que le prêteur exige comme marge de sécurité contre les variations de prix."
      },
      {
        "term": "Reverse repo (pension inversée)",
        "def": "Le côté du prêteur — remettre du cash pour recevoir du collatéral (le miroir d'un repo)."
      }
    ]
  },
  "valuation": {
    "title": "Valorisation",
    "hook": "Mettre un chiffre sur « combien ça vaut ? » — mi-mathématiques, mi-jugement, et la question derrière chaque achat ou vente.",
    "tldr": "La valorisation consiste à estimer ce que vaut un actif ou une entreprise, en actualisant ses flux de trésorerie futurs ou en le comparant à des actifs similaires.",
    "definition": [
      "La valorisation est l'art de mettre un prix sur la « valeur intrinsèque » plutôt que de simplement citer le prix de marché. La méthode la plus nette est l'actualisation des flux de trésorerie (DCF) : estimer chaque flux futur qu'un actif produira, les actualiser à aujourd'hui à un taux reflétant leur risque, puis les additionner — cette somme est ce que l'actif « vaut » aujourd'hui. Si cette valeur intrinsèque dépasse le prix de marché, l'actif est bon marché ; si elle est inférieure, il est cher. Le prix de marché est une opinion ; la valorisation est votre propre estimation indépendante, pour trader contre elle.",
      "En pratique, la valorisation combine trois approches. L'approche intrinsèque (DCF) actualise les flux de trésorerie futurs. L'approche relative (multiples) compare à des sociétés comparables — cours/bénéfice, VE/EBITDA, cours/valeur comptable — posant la question « cette entreprise est-elle moins chère ou plus chère que des sociétés similaires ? » L'approche par les actifs additionne ce que valent les composants s'ils étaient vendus séparément. Aucune n'est « la bonne » ; chacune a une faiblesse (le DCF est extrêmement sensible au taux d'actualisation et aux hypothèses de croissance ; les multiples supposent que les comparables sont correctement valorisées ; l'approche par les actifs ignore la continuité d'exploitation). Une valorisation sérieuse triangule les trois et reste humble quant à la réponse."
    ],
    "keyPoints": [
      "Valeur intrinsèque = valeur actuelle de tous les flux de trésorerie futurs, actualisés pour le risque et le temps.",
      "Le DCF paraît précis mais est dominé par le taux d'actualisation et les hypothèses de croissance.",
      "Les multiples (P/E, VE/EBITDA) comparent à des sociétés similaires — rapides mais supposent que celles-ci sont correctement valorisées.",
      "Le prix de marché est une opinion ; la valorisation est votre vérification indépendante pour trader contre lui."
    ],
    "formula": {
      "expression": "Valeur = Σ [ FT_t ÷ (1 + r)^t ]  (DCF)",
      "legend": "FT_t = flux de trésorerie de l'année t · r = taux d'actualisation (ajusté du risque) · somme sur toute la durée de vie de l'actif",
      "note": "Une version perpétuelle : Valeur = FT_suivant ÷ (r − g), où g est le taux de croissance à long terme."
    },
    "example": {
      "scenario": "Une entreprise générera 10 M€/an, en croissance de 3 %, à perpétuité. Un acheteur exige un rendement de 9 %. Que vaut-elle ?",
      "steps": [
        "Utiliser la formule perpétuelle : Valeur = FT_suivant ÷ (r − g) = 10 × 1,03 ÷ (0,09 − 0,03).",
        "Numérateur = 10,3 M€ (le flux de trésorerie de l'année prochaine, majoré de 3 %).",
        "Dénominateur = 6 % (l'écart entre le rendement exigé et la croissance).",
        "Valeur = 10,3 ÷ 0,06 ≈ 172 M€. Si la capitalisation boursière est de 130 M€, l'action paraît bon marché ; si elle est de 250 M€, elle paraît chère."
      ],
      "result": "De petits changements d'hypothèses font énormément varier la valeur : à g = 4 % (1 % de croissance en plus), la valeur bondit à 206 M€ ; à r = 10 %, elle tombe à 147 M€. La valorisation est une fourchette, pas un chiffre."
    },
    "deepDive": [
      "La réputation de fausse précision du DCF est bien méritée. Actualiser un flux de trésorerie lointain à 8 % change tout ; l'actualiser à 12 % le fait presque disparaître — et le « bon » taux d'actualisation est lui-même un jugement sur le risque, pas un fait mesuré. La croissance est pire encore : un DCF qui suppose une croissance perpétuelle de 3 % et un autre qui suppose 5 % produisent des valeurs radicalement différentes, et personne ne peut connaître le taux de croissance futur d'une entreprise à dix ans. C'est pourquoi la valorisation est toujours une fourchette construite à partir d'hypothèses, et pourquoi la sortie honnête est « c'est bon marché si vous croyez X, cher si vous croyez Y » plutôt que « cela vaut exactement 172 M€ ».",
      "La valeur la plus profonde de la valorisation est la discipline, pas la précision. Se forcer à écrire les flux de trésorerie, la croissance et le taux d'actualisation révèle ce sur quoi vous pariez vraiment — généralement un petit nombre d'hypothèses héroïques cachées dans un tableur. L'investisseur qui « fait le DCF » et découvre que toute la valeur repose sur un taux de croissance à 5 ans qu'il a inventé a appris quelque chose de plus utile qu'un chiffre : il a appris quelle incertitude compte vraiment, et que le prix de marché est peut-être la partie en laquelle il peut le plus faire confiance. La valorisation est moins une calculatrice qu'une machine à humilité — elle vous montre ce que vous ne savez pas, ce qui est la chose la plus précieuse à savoir."
    ],
    "glossary": [
      {
        "term": "DCF",
        "def": "Discounted Cash Flow (flux de trésorerie actualisés) — valoriser un actif comme la valeur actuelle de ses flux de trésorerie futurs."
      },
      {
        "term": "Multiple (P/E, VE/EBITDA)",
        "def": "Ratios de valorisation relative comparant une entreprise à ses comparables ou à sa propre histoire."
      },
      {
        "term": "Marge de sécurité",
        "def": "Acheter bien en dessous de la valeur intrinsèque, pour qu'une erreur d'hypothèse ne vous fasse pas perdre d'argent."
      }
    ]
  },
  "order-book": {
    "title": "Carnet d'ordres",
    "hook": "La liste en temps réel de qui veut acheter, qui veut vendre, et à quel prix — le système nerveux du marché mis à nu.",
    "tldr": "Un carnet d'ordres est la liste en temps réel de tous les ordres d'achat et de vente en attente pour un actif, organisée par prix, d'où émergent les prix.",
    "definition": [
      "Le carnet d'ordres est la file d'attente des intentions. D'un côté se trouvent les offres d'achat (bids) : des ordres d'achat, chacun avec une quantité à un prix. De l'autre se trouvent les offres de vente (asks) : des ordres de vente, chacun avec une quantité à un prix. La meilleure offre d'achat est le prix le plus élevé que quelqu'un est prêt à payer ; la meilleure offre de vente est le prix le plus bas que quelqu'un accepte. L'écart entre les deux est le spread, et une transaction n'a lieu que lorsque quelqu'un le franchit — un acheteur enlève l'offre de vente, ou un vendeur touche l'offre d'achat. Jusque-là, les ordres attendent simplement, et le carnet d'ordres montre exactement à quoi ressemblent l'offre et la demande à chaque prix.",
      "Le carnet révèle la liquidité et la conviction. Un carnet « profond » a de grandes quantités en attente à de nombreux prix, donc un gros ordre peut être absorbé avec peu de mouvement de prix ; un carnet « mince » a peu de quantités en attente, donc un ordre modeste fait bouger fortement le prix. Les ordres à cours limité (avec un prix, en attente) fournissent de la liquidité et sont dits « faiseurs » de marché ; les ordres au marché (exécutés immédiatement, quel que soit le prix) consomment la liquidité et la « prennent ». Observer le carnet permet de voir où se trouvent réellement le support et la résistance — pas à des nombres ronds magiques, mais là où de gros ordres sont réellement stationnés."
    ],
    "keyPoints": [
      "Offres d'achat (bids) d'un côté, offres de vente (asks) de l'autre, chacune par prix.",
      "Spread = meilleure offre de vente − meilleure offre d'achat ; une transaction survient quand quelqu'un le franchit.",
      "La profondeur à chaque prix montre quel volume peut être échangé sans faire bouger le prix.",
      "Les ordres à cours limité fournissent la liquidité ; les ordres au marché la consomment."
    ],
    "formula": {
      "expression": "Impact de marché ≈ Taille de l'ordre ÷ Profondeur disponible",
      "legend": "Taille de l'ordre = actions dans votre ordre · Profondeur disponible = actions en attente au prix le plus proche",
      "note": "Un gros ordre traverse plusieurs niveaux de prix, donc son prix d'exécution moyen est pire que la meilleure cotation — le coût de la taille."
    },
    "example": {
      "scenario": "Le carnet montre une meilleure offre d'achat à 99,90 € (500 actions) et une meilleure offre de vente à 100,05 € (300 actions). Vous placez un ordre d'achat au marché de 1 000 actions. Que se passe-t-il ?",
      "steps": [
        "Vous prenez d'abord les 300 actions à 100,05 € (remplissant la meilleure offre de vente).",
        "Les 700 actions restantes consomment les niveaux suivants : 200 à 100,10 €, 500 à 100,20 €.",
        "Prix d'exécution moyen ≈ (300×100,05 + 200×100,10 + 500×100,20) ÷ 1000 = 100,135 €.",
        "Vous avez fait bouger le prix contre vous-même d'environ 0,085 €/action — votre propre impact de marché."
      ],
      "result": "Une cotation à « 100,05 € » n'était valable que pour 300 actions. Votre ordre de 1 000 actions a coûté 100,135 € en moyenne — le glissement de prix lié à la consommation de plus de profondeur qu'il n'en existait."
    },
    "deepDive": [
      "Le carnet d'ordres est l'endroit où se joue réellement la découverte des prix — pas dans une « vraie valeur » magique, mais dans la rencontre mécanique des ordres en attente. Quand une nouvelle tombe, les ordres sont retirés et remplacés en quelques millisecondes, le spread s'élargit, et le nouveau prix d'équilibre est trouvé par celui qui est assez courageux (ou automatisé) pour se positionner le premier. Dans les marchés liquides, cela est invisible et continu ; dans les marchés sous tension, on peut voir le carnet s'amincir et le spread exploser à mesure que humains et algorithmes se retirent, laissant un marché fragile et nerveux — la signature visible d'une liquidité qui s'évapore.",
      "La majeure partie du trading moderne est incitée par le modèle « maker-taker » : les bourses versent des rabais à ceux qui postent des ordres à cours limité (les faiseurs) et facturent des frais à ceux qui les prennent (les preneurs), car les faiseurs fournissent la liquidité dont tout le monde dépend. Cela façonne les comportements : les institutions découpent les gros ordres en de nombreux petits ordres à cours limité pour gagner des rabais et éviter l'impact de marché, tandis que les ordres au marché des particuliers subventionnent en fait les faiseurs. Le carnet d'ordres n'est donc pas un miroir neutre de l'offre et de la demande — c'est un marché structuré dont les règles (frais, rabais, pas de cotation) déterminent qui trade comment, et donc quels prix vous voyez."
    ],
    "glossary": [
      {
        "term": "Ordre à cours limité",
        "def": "Un ordre à exécuter uniquement à un prix spécifié ou meilleur — il reste dans le carnet."
      },
      {
        "term": "Ordre au marché",
        "def": "Un ordre à exécuter immédiatement au meilleur prix disponible — il franchit le spread."
      },
      {
        "term": "Glissement de prix (slippage)",
        "def": "L'écart entre le prix coté et le prix réellement obtenu, dû à l'impact de marché."
      }
    ]
  },
  "dark-pool": {
    "title": "Dark pools (bassins d'opacité)",
    "hook": "Des plateformes de trading privées où les gros ordres se cachent du carnet public — pour ne pas trahir le marché avant d'avoir fini.",
    "tldr": "Un dark pool est une plateforme de trading privée qui n'affiche pas les ordres publiquement, permettant aux institutions d'échanger de gros blocs sans faire bouger le prix visible.",
    "definition": [
      "Un dark pool est un système de trading alternatif qui rapproche les ordres sans les publier dans le carnet d'ordres public. Les plateformes « lit » (éclairées) affichent chaque offre d'achat et de vente ; les dark pools n'affichent rien jusqu'à ce qu'une transaction soit conclue, puis la déclarent après coup. Le but est de permettre à une institution d'échanger un gros bloc d'actions sans dévoiler son intention — car un énorme ordre d'achat visible ferait monter l'offre de vente, augmenterait le prix contre l'acheteur, et permettrait à d'autres de le devancer. En traitant dans l'ombre, l'institution espère exécuter l'ordre au point médian du spread public, sans impact sur le prix et sans donner d'indice.",
      "Les dark pools traitent aujourd'hui une part significative du volume actions. Ils sont « opaques » car les prix ne sont pas affichés — l'appariement se fait généralement au point médian entre la meilleure offre d'achat et de vente du marché éclairé, de sorte que les deux parties économisent la moitié du spread. Le hic est qu'on ne peut pas voir la liquidité avec laquelle on pourrait interagir, et le pool peut être exploité par des participants plus rapides qui détectent de gros ordres en attente et tradent contre eux avantageusement. Les régulateurs surveillent les dark pools précisément pour ces problèmes de « fuite d'information » et de devancement."
    ],
    "keyPoints": [
      "Plateformes privées qui n'affichent pas les ordres — les transactions ne sont déclarées qu'après exécution.",
      "Permettent aux institutions de déplacer de gros blocs sans trahir ou faire bouger le marché public.",
      "S'exécutent généralement au point médian du spread du marché éclairé.",
      "Risque : fuite d'information et se faire devancer par des participants plus rapides."
    ],
    "formula": {
      "expression": "Prix d'exécution en dark pool ≈ (Meilleure offre d'achat + Meilleure offre de vente) ÷ 2",
      "legend": "Meilleure offre d'achat/de vente = les meilleurs prix du carnet du marché éclairé au moment de l'exécution",
      "note": "Les deux parties se partagent effectivement le spread qu'elles auraient payé sur une bourse éclairée — le principal attrait du dark pool."
    },
    "example": {
      "scenario": "Un fonds de pension veut acheter 200 000 actions sans faire monter le prix. Le carnet éclairé montre une offre d'achat à 99,95 € / offre de vente à 100,05 € (spread de 0,10 €). Il route vers un dark pool.",
      "steps": [
        "Un ordre d'achat visible de 200 000 actions sur le marché éclairé consommerait plusieurs niveaux de vente et ferait monter le prix de plusieurs centimes.",
        "Dans le dark pool, si un vendeur correspondant est trouvé, les deux tradent au point médian = 100,00 €.",
        "L'acheteur paie 100,00 € (contre 100,05 € d'offre de vente) ; le vendeur reçoit 100,00 € (contre 99,95 € d'offre d'achat) — les deux économisent 0,05 €.",
        "Aucun ordre public n'a été affiché, donc personne n'a devancé l'intention du fonds."
      ],
      "result": "Les deux parties ont économisé 0,05 €/action (10 000 € sur 200 000 actions) et le prix public n'a jamais bougé. La transaction cachée a évité l'impact de marché même que le fonds redoutait."
    },
    "deepDive": [
      "Le nom « dark pool » paraît sinistre, mais la motivation est bénigne, voire favorable à l'investisseur : les gros ordres institutionnels sont systématiquement exploités sur les marchés éclairés parce que leur intention est visible, donc une plateforme qui cache l'intention jusqu'à l'exécution les protège de cette fuite. La tension est que « l'opacité » cache aussi l'activité au public, fragmentant le marché et réduisant l'informativité des prix éclairés. Les régulateurs équilibrent cela avec des règles de type « trade-at » forçant les ordres vers les marchés éclairés quand leurs prix sont meilleurs, et en exigeant la déclaration des transactions en dark pool pour que le marché apprenne ce qui s'est passé, sinon ce qui va se passer.",
      "La véritable complexité est la fragmentation : l'ordre d'une institution peut être découpé simultanément sur une douzaine de dark pools et plusieurs bourses éclairées par un routeur d'ordres intelligent traquant la meilleure exécution. Chaque plateforme a des règles, des vitesses et des contreparties différentes, et certains dark pools ont été surpris à favoriser certains clients ou à laisser fuiter des informations vers des traders pour compte propre (les grandes banques ont payé de lourdes amendes pour de tels abus vers 2014). La leçon est que le choix de la plateforme est lui-même une source d'avantage et de risque : où vous tradez affecte le prix que vous obtenez aussi sûrement que ce que vous tradez, c'est pourquoi la qualité d'exécution — pas seulement la commission — est le véritable coût que gère l'investisseur averti."
    ],
    "glossary": [
      {
        "term": "Éclairé vs opaque (lit vs dark)",
        "def": "Les plateformes éclairées affichent les ordres publiquement ; les plateformes opaques les apparient sans les afficher."
      },
      {
        "term": "Transaction de bloc",
        "def": "Une grande transaction négociée en privé, souvent réalisée dans un dark pool pour éviter l'impact de marché."
      },
      {
        "term": "Tarification au point médian",
        "def": "Exécuter à la moyenne entre la meilleure offre d'achat et de vente du marché éclairé — l'exécution standard en dark pool."
      }
    ]
  },
  "portfolio-theory": {
    "title": "Théorie moderne du portefeuille",
    "hook": "Ne choisissez pas le meilleur actif — construisez le meilleur mélange. L'intuition qui a transformé l'investissement, du choix d'actions à l'ingénierie de portefeuille.",
    "tldr": "La théorie moderne du portefeuille (MPT) montre comment combiner des actifs en un portefeuille qui maximise le rendement pour un niveau de risque donné, grâce à la diversification et à la corrélation.",
    "definition": [
      "L'intuition de Harry Markowitz en 1952 était que le risque et le rendement d'un actif ne peuvent pas être jugés isolément — seule sa contribution à l'ensemble du portefeuille compte. Un actif qui oscille fortement à lui seul peut en réalité réduire le risque d'un portefeuille s'il a tendance à monter quand le reste baisse (corrélation faible ou négative). La MPT a formalisé cela : pour tout niveau de risque cible, il existe un « meilleur » mélange d'actifs qu'aucune autre combinaison ne peut surpasser, et l'ensemble de tous ces meilleurs mélanges forme la « frontière efficiente ».",
      "La conséquence pratique est que l'objectif n'est pas le meilleur actif individuel, mais la meilleure combinaison. Ajouter un actif risqué mais non corrélé peut améliorer un portefeuille — la magie de la diversification est un résultat mathématique, pas une sagesse populaire. La MPT a lancé toute l'industrie de l'allocation d'actifs, des fonds indiciels et de la budgétisation du risque ; son affirmation centrale — que le risque se mesure au niveau du portefeuille et que la diversification est ce qui se rapproche le plus d'un repas gratuit — a mieux résisté au temps que ses formules précises."
    ],
    "keyPoints": [
      "Jugez un actif par son effet sur l'ensemble du portefeuille, pas isolément.",
      "Une faible corrélation entre actifs est ce qui permet à la diversification de réellement réduire le risque.",
      "La frontière efficiente = l'ensemble des portefeuilles offrant le rendement maximal pour chaque niveau de risque.",
      "L'ensemble « actif sans risque + portefeuille tangent » donne le mélange optimal pour tout investisseur (la ligne de marché des capitaux)."
    ],
    "formula": {
      "expression": "σ du portefeuille = √(Σ wᵢ²σᵢ² + ΣΣ wᵢwⱼσᵢσⱼρᵢⱼ)",
      "legend": "w = pondérations · σ = volatilité · ρ = corrélation entre les actifs i et j",
      "note": "Les termes croisés (avec ρ) sont là où vit la diversification — une faible corrélation les réduit, diminuant le risque du portefeuille."
    },
    "example": {
      "scenario": "Deux actifs, chacun avec un rendement de 10 % et une volatilité de 20 %. Comparez un mélange 50/50 à ρ = 1,0 (mouvements identiques) contre ρ = 0 (indépendants).",
      "steps": [
        "ρ = 1,0 : volatilité du portefeuille = 20 % (le mélange n'est pas plus sûr que l'un ou l'autre actif seul).",
        "ρ = 0 : volatilité du portefeuille = √(0,5²·20² + 0,5²·20²) ≈ 14,1 %",
        "Même rendement attendu de 10 %, risque réduit d'environ 30 % simplement en associant des actifs non corrélés.",
        "À ρ = −1, on pourrait atteindre un risque nul — la limite théorique de la diversification."
      ],
      "result": "Mêmes actifs, même rendement attendu, 30 % de risque en moins. Le repas gratuit est réel, et il vient entièrement de la corrélation, pas du choix de meilleures actions."
    },
    "deepDive": [
      "L'élégance de la MPT cache des hypothèses inconfortables. Elle assimile le risque à la volatilité (l'écart-type), supposant que les rendements suivent à peu près une courbe en cloche — mais les rendements réels ont des queues épaisses, donc un portefeuille « à faible volatilité » peut quand même exploser. Elle suppose aussi que les corrélations sont stables, alors qu'elles grimpent à 1 précisément lors des krachs où la diversification serait la plus nécessaire. Ces failles expliquent pourquoi la théorie est enseignée comme un fondement et utilisée avec humilité, pas comme un plan à suivre littéralement.",
      "L'héritage le plus profond est le changement de mentalité : passer de « quelle action est la meilleure ? » à « quel mélange est le meilleur ? » Une fois qu'on pense en portefeuilles, on cesse de courir après le seul gagnant et on commence à gérer l'arbitrage entre risque et rendement à l'échelle de l'ensemble. Ce seul déplacement mental — diversifier par conception, pas par accident — est le véritable cadeau de la MPT, et il survit même là où son optimisation précise échoue."
    ],
    "glossary": [
      {
        "term": "Frontière efficiente",
        "def": "La courbe des portefeuilles optimaux — le rendement le plus élevé pour chaque niveau de risque."
      },
      {
        "term": "Corrélation",
        "def": "La manière dont deux actifs évoluent ensemble (de −1 à +1) — le moteur de la diversification."
      },
      {
        "term": "Ligne de marché des capitaux",
        "def": "La ligne risque/rendement allant de l'actif sans risque au portefeuille tangent (le portefeuille de marché)."
      }
    ]
  },
  "sharpe-ratio": {
    "title": "Ratio de Sharpe",
    "hook": "Le rendement par unité de risque — le seul chiffre qui permette de comparer équitablement un hedge fund à un fonds obligataire.",
    "tldr": "Le ratio de Sharpe mesure le rendement ajusté du risque : le rendement excédentaire (au-dessus du taux sans risque) divisé par la volatilité. Plus il est élevé, mieux c'est.",
    "definition": [
      "Un rendement de 15 % n'est pas automatiquement meilleur qu'un rendement de 10 % — les 15 % pourraient s'accompagner d'une volatilité triple et d'un vrai risque de ruine. Le ratio de Sharpe corrige cela en divisant le rendement « supplémentaire » qu'un investissement génère par rapport à un actif sans risque par l'ampleur des variations de sa valeur. Le résultat est le rendement par unité de risque : un Sharpe élevé signifie que vous êtes bien rémunéré pour l'incertitude que vous acceptez ; un Sharpe faible signifie que vous subissez des secousses pour une compensation maigre.",
      "C'est l'étalon standard pour comparer équitablement des investissements, des fonds et des stratégies. Un fonds indiciel passif affiche souvent un Sharpe d'environ 0,5 ; un portefeuille diversifié bien géré, environ 0,7 ; la rare stratégie constamment rentable au-dessus de 1,0 est considérée comme excellente. Le ratio transforme « combien avez-vous gagné ? » en « combien avez-vous gagné par unité de sommeil perdu ? » — la question qui compte réellement."
    ],
    "keyPoints": [
      "Sharpe = (rendement − taux sans risque) ÷ volatilité — le rendement par unité de risque.",
      "Permet de comparer équitablement une stratégie volatile à une stratégie calme.",
      "Au-dessus d'environ 1,0, c'est bon ; au-dessus d'environ 2,0, c'est exceptionnel (ou trop beau pour être vrai).",
      "Pénalise aussi la volatilité à la hausse, ce que certains considèrent comme un défaut (voir Sortino)."
    ],
    "formula": {
      "expression": "Sharpe = (R − Rf) ÷ σ",
      "legend": "R = rendement de l'investissement · Rf = taux sans risque · σ = écart-type des rendements",
      "note": "Le ratio de Sortino n'utilise que la volatilité à la baisse — il ne pénalise pas les « bonnes » variations, une mesure plus juste pour les rendements asymétriques."
    },
    "example": {
      "scenario": "Le fonds A rapporte 12 % avec 18 % de volatilité. Le fonds B rapporte 9 % avec 8 % de volatilité. Le taux sans risque est de 3 %. Lequel est meilleur en termes ajustés du risque ?",
      "steps": [
        "A : (12 % − 3 %) ÷ 18 % = 0,50",
        "B : (9 % − 3 %) ÷ 8 % = 0,75",
        "B a le rendement brut le plus faible mais le Sharpe le plus élevé — davantage de rendement par unité de risque.",
        "De nombreux investisseurs préféreraient B : une capitalisation plus régulière, moins de risque de chute ruineuse."
      ],
      "result": "Le leader du rendement affiché a perdu sur la mesure qui compte. B rémunère plus efficacement son capital — l'objectif de l'ajustement au risque est d'arrêter de récompenser la prise de risque supplémentaire."
    },
    "deepDive": [
      "La plus grande faiblesse du ratio de Sharpe est son aveuglement à l'asymétrie et au risque de queue. Une stratégie qui vend des options gagne des primes régulières et faibles avec de rares pertes catastrophiques peut afficher un magnifique Sharpe jusqu'au jour où elle explose — la volatilité paraît faible parce que le désastre ne s'est pas encore produit. Long-Term Capital Management affichait un Sharpe enviable avant de perdre des milliards en quelques semaines. Un Sharpe élevé issu d'un book d'options vendues est un avertissement, pas un gage de qualité.",
      "Un problème plus subtil : le Sharpe est rétrospectif et suppose que l'avenir ressemblera à l'échantillon. Une stratégie affichant un Sharpe de 2,0 sur trois années calmes peut afficher un Sharpe de 0,3 sur la crise suivante. Utilisez-le comme un élément parmi d'autres — aux côtés du drawdown maximal, des mesures de queue et des tests de résistance — jamais comme le chiffre unique qui décide d'une allocation. Le ratio est une lentille, pas un verdict ; il clarifie l'arbitrage risque/rendement mais ne peut prédire si le pari survivra à un changement de régime."
    ],
    "glossary": [
      {
        "term": "Taux sans risque",
        "def": "Le rendement de l'actif le plus sûr — soustrait pour obtenir le rendement « excédentaire » pour lequel vous êtes réellement rémunéré."
      },
      {
        "term": "Ratio de Sortino",
        "def": "Une variante du Sharpe n'utilisant que la volatilité à la baisse — ne pénalise pas les bonnes variations."
      },
      {
        "term": "Volatilité (σ)",
        "def": "L'écart-type des rendements — le dénominateur qui convertit le rendement brut en rendement par unité de risque."
      }
    ]
  },
  "beta": {
    "title": "Bêta",
    "hook": "Dans quelle mesure un actif évolue avec le marché — la lettre grecque qui fixe le prix du risque de marché que vous achetez réellement.",
    "tldr": "Le bêta mesure la sensibilité d'un actif aux mouvements du marché : un bêta de 1 suit le marché, 2 l'amplifie, 0,5 l'atténue.",
    "definition": [
      "Le bêta indique dans quelle mesure un actif a tendance à osciller quand le marché oscille. Un bêta de 1 signifie qu'il évolue au même rythme que l'indice ; 2 signifie qu'il évolue deux fois plus (à la hausse comme à la baisse) ; 0,5 signifie moitié moins. Le bêta est mesuré à partir de l'historique — on régresse les rendements de l'actif sur ceux du marché et on lit la pente — il décrit donc un co-mouvement typique, pas une garantie. Le marché lui-même a un bêta de 1 par définition.",
      "Le bêta est l'outil de base de la décomposition du risque. Il scinde le risque total en risque de marché (le bêta, qu'on ne peut pas diversifier et pour lequel on est rémunéré par une prime) et en risque idiosyncrasique (que la diversification élimine et qui ne rapporte rien). C'est pourquoi une action à bêta élevé devrait offrir un rendement attendu plus élevé — vous supportez un risque de marché qui ne peut être diversifié, donc vous exigez une compensation. Le bêta est aussi l'intrant du CAPM, le modèle le plus simple de la tarification du risque."
    ],
    "keyPoints": [
      "Bêta 1 = comportement de marché ; >1 = plus volatil que le marché ; <1 = plus calme ; négatif = évolue à l'inverse.",
      "Mesuré à partir du co-mouvement historique avec le marché (pente de régression).",
      "Sépare le risque de marché (rémunéré) du risque diversifiable (non rémunéré).",
      "L'intrant clé du CAPM : rendement attendu = taux sans risque + bêta × prime de marché."
    ],
    "formula": {
      "expression": "Bêta = Cov(actif, marché) ÷ Var(marché)",
      "legend": "Cov = comment l'actif et le marché évoluent ensemble · Var = la volatilité propre du marché",
      "note": "Équivalent à la pente de la régression des rendements de l'actif sur les rendements du marché."
    },
    "example": {
      "scenario": "Une action a un bêta de 1,5. Le marché monte de 10 %. Le taux sans risque est de 3 % et la prime de marché est de 5 %. Quel est le rendement attendu ?",
      "steps": [
        "CAPM : rendement attendu = 3 % + 1,5 × 5 % = 10,5 %.",
        "Si le marché monte de 10 %, l'action devrait monter d'environ 1,5 × 10 % = 15 % (dans un mouvement typique).",
        "Dans une baisse de marché de −10 %, on peut attendre environ −15 % — un bêta élevé amplifie les deux directions.",
        "Les investisseurs exigent le rendement attendu plus élevé de 10,5 % car le bêta de 1,5 signifie des variations plus fortes."
      ],
      "result": "Un bêta élevé signifie une sensibilité élevée et un rendement exigé plus élevé. L'action n'est pas « meilleure » pour son potentiel de hausse de 15 % — elle porte aussi 1,5 fois la douleur du marché à la baisse."
    },
    "deepDive": [
      "La limite du bêta est qu'il s'agit d'une moyenne de co-mouvement passé, et les moyennes mentent dans les extrêmes. Une action bancaire peut afficher un bêta modeste de 1,1 en années calmes mais bondir à 2,5 ou plus en crise, quand les corrélations s'effondrent vers 1 — précisément quand on ne peut plus compter sur l'ancien chiffre. Le « bêta de queue » — comment un actif se comporte lors des pires journées de marché — est la version qui compte réellement pour le risque, et il est systématiquement plus élevé que le bêta affiché pour les valeurs financières et autres secteurs à fort levier.",
      "Un point philosophique plus profond : le bêta mesure l'exposition au risque de marché, pas la qualité d'une entreprise. Une excellente entreprise peut avoir un bêta faible (et donc un rendement exigé par le CAPM faible) tandis qu'une entreprise médiocre a un bêta élevé. Les investisseurs qui confondent bêta et qualité surpaient les actions calmes et sous-paient les actions volatiles. Le bêta est une pondération de risque, pas un jugement de valeur — il indique combien de marché vous achetez, pas si l'entreprise sous-jacente est bonne. Les deux questions sont indépendantes, et les confondre est une erreur classique."
    ],
    "glossary": [
      {
        "term": "Alpha",
        "def": "Le rendement au-delà de ce que prédit le bêta — la compétence du gérant, ou la chance, au-dessus du risque de marché."
      },
      {
        "term": "Prime de risque de marché",
        "def": "Le rendement supplémentaire que le marché offre au-delà du taux sans risque."
      },
      {
        "term": "Bêta négatif",
        "def": "Un actif qui a tendance à évoluer à l'inverse du marché — rare et prisé (l'or, parfois)."
      }
    ]
  },
  "capm": {
    "title": "CAPM",
    "hook": "La théorie la plus simple de la tarification du risque — une seule équation reliant rendement attendu et risque de marché.",
    "tldr": "Le modèle d'évaluation des actifs financiers (CAPM) affirme que le rendement attendu d'un actif est égal au taux sans risque plus le bêta multiplié par la prime de risque de marché.",
    "definition": [
      "Le CAPM est le pont entre la théorie du portefeuille de Markowitz et une recette pratique pour les rendements exigés. Son affirmation : seul le risque de marché (le bêta) rapporte une prime, car le reste peut être diversifié gratuitement. Donc le rendement attendu d'un actif devrait être le taux sans risque plus une prime proportionnelle à son bêta. Une action deux fois plus sensible au marché que la moyenne devrait offrir deux fois le rendement excédentaire du marché — ni plus, ni moins. La formule tient en une ligne ; les hypothèses derrière elle constituent toute une vision du monde.",
      "En finance d'entreprise, le CAPM est le moyen par défaut d'estimer le coût des capitaux propres d'une entreprise, qui alimente le coût moyen pondéré du capital (WACC) utilisé pour valoriser des projets. En investissement, il fixe le repère qu'un gérant actif doit battre : le rendement « juste » pour un bêta donné. Si vous battez le CAPM, vous avez de l'alpha ; sinon, vous avez simplement été rémunéré pour un risque que vous avez pris, pas pour une compétence que vous avez déployée. Le modèle est enseigné partout précisément parce qu'il est assez simple pour être utilisé et qu'il capture une véritable idée centrale — seul le risque qui ne peut être diversifié rapporte."
    ],
    "keyPoints": [
      "Rendement attendu = taux sans risque + bêta × prime de risque de marché.",
      "Seul le risque systématique (de marché) rapporte une prime ; le risque diversifiable non.",
      "La méthode standard pour estimer le coût des capitaux propres d'une entreprise en valorisation.",
      "Construit sur des hypothèses fortes : investisseurs rationnels, vues identiques, une seule période, absence de frictions."
    ],
    "formula": {
      "expression": "E(R) = Rf + β × (E(Rm) − Rf)",
      "legend": "Rf = taux sans risque · β = bêta de l'actif · E(Rm) = rendement de marché attendu · (E(Rm)−Rf) = prime de marché",
      "note": "Un bêta de 1,2 avec Rf=3% et prime=5% → E(R)=3%+1,2×5%=9%."
    },
    "example": {
      "scenario": "Une entreprise a un bêta de 1,2. Taux sans risque 3 %, rendement de marché attendu 8 %. Quel rendement les investisseurs devraient-ils exiger sur les actions ?",
      "steps": [
        "Prime de marché = 8 % − 3 % = 5 %.",
        "Rendement exigé sur les capitaux propres = 3 % + 1,2 × 5 % = 9 %.",
        "Ces 9 % sont le coût des capitaux propres — utilisé pour actualiser les flux de trésorerie attendus de l'entreprise.",
        "Un projet rapportant 11 % franchit le seuil de 9 % et crée de la valeur ; un projet rapportant 7 % en détruit."
      ],
      "result": "Le CAPM transforme une mesure de risque (le bêta) en rendement exigé (9 %). Chaque décision de valorisation et de projet en découle — sa puissance et son danger."
    },
    "deepDive": [
      "Le bilan empirique du CAPM est médiocre. Les rendements attendus réels ne sont pas nettement proportionnels au bêta — les actions à faible bêta ont souvent surperformé ce que le modèle prédit, et les actions à bêta élevé ont sous-performé (l'« anomalie de faible volatilité »). D'autres facteurs (taille, valeur, momentum) expliquent mieux les rendements que le bêta seul, ce qui explique pourquoi les universitaires se sont tournés vers des modèles multifactoriels comme Fama-French. Le modèle survit parce qu'il constitue une valeur par défaut claire et défendable, pas parce qu'il est exact.",
      "La manière honnête d'utiliser le CAPM est comme une estimation de départ, pas une vérité. Faites varier les intrants — le taux sans risque, la prime de marché (elle-même vivement débattue, 4 % ? 6 % ?), le bêta (instable) — et observez de combien la réponse bouge. Si la valeur d'un projet change de signe sous des variations d'intrants raisonnables, la décision est menée par les hypothèses, pas par l'économie. Le CAPM est surtout utile comme discipline : il vous oblige à expliciter vos hypothèses de risque et vous montre lesquelles comptent. C'est sa véritable contribution, davantage que le chiffre précis qu'il produit."
    ],
    "glossary": [
      {
        "term": "Coût des capitaux propres",
        "def": "Le rendement exigé par les actionnaires — la sortie du CAPM, utilisée comme taux d'actualisation."
      },
      {
        "term": "WACC",
        "def": "Coût moyen pondéré du capital — combinant le coût des capitaux propres et le coût de la dette après impôt."
      },
      {
        "term": "Prime de risque de marché",
        "def": "E(Rm) − Rf — le rendement supplémentaire que le marché offre par rapport au taux sans risque."
      }
    ]
  },
  "efficient-market": {
    "title": "Hypothèse d'efficience des marchés",
    "hook": "Vous ne pouvez pas battre le marché car le prix sait déjà ce que vous savez — l'affirmation controversée qui explique pourquoi les fonds indiciels gagnent.",
    "tldr": "L'hypothèse d'efficience des marchés (HEM) soutient que les prix reflètent déjà toute l'information disponible, donc vous ne pouvez pas gagner de manière constante un rendement supérieur à la moyenne ajustée du risque.",
    "definition": [
      "La HEM affirme que les prix sont « justes » dans un sens précis : ils intègrent déjà tout ce qui est connu, donc aucune analyse de l'information publique ne peut systématiquement battre le marché. Les nouvelles informations sont intégrées rapidement dans les prix, et les mouvements résiduels sont imprévisibles — une marche aléatoire autour de la juste valeur. Trois formes existent : faible (les prix passés n'aident pas), semi-forte (l'information publique n'aide pas), et forte (même l'information privée est intégrée dans les prix, une position extrême défendue par peu). La forme semi-forte est l'affirmation pratique : étudier les fondamentaux, lire des rapports et chronométrer le marché ne permet pas de surperformer durablement un fonds indiciel à faible coût.",
      "Les preuves penchent globalement en faveur de la HEM. Après frais, la grande majorité des gérants actifs ne parviennent pas à battre leur indice de référence sur de longues périodes, et les rares qui y parviennent sont difficiles à identifier à l'avance et répètent rarement leur performance. C'est pourquoi des milliers de milliards ont migré vers les fonds indiciels — si les prix sont efficients, le choix rationnel est de posséder l'ensemble du marché à coût minimal plutôt que de payer pour une compétence de sélection d'actions qui n'existe probablement pas. La HEM n'affirme pas que les prix sont toujours « corrects », seulement que les erreurs ne sont pas exploitables de manière fiable."
    ],
    "keyPoints": [
      "Les prix reflètent déjà l'information disponible — vous ne pouvez pas battre systématiquement le marché.",
      "Trois formes : faible (prix passés), semi-forte (information publique), forte (toute l'information).",
      "Explique pourquoi les fonds indiciels à faible coût battent la plupart des gérants actifs après frais.",
      "« Juste en moyenne » — les prix peuvent être faux, mais pas de manière prévisible à exploiter."
    ],
    "formula": {
      "expression": "Prix d'aujourd'hui = meilleure estimation de la juste valeur (compte tenu de toute l'information)",
      "legend": "Juste valeur = flux de trésorerie futurs attendus actualisés, compte tenu de l'information actuelle",
      "note": "Les variations de prix futures sont alors imprévisibles autour de cette estimation — une « marche aléatoire »."
    },
    "example": {
      "scenario": "Une entreprise publie des résultats supérieurs aux prévisions. L'action bondit de 8 % dans la première minute. Que dit la HEM de votre chance d'en profiter ?",
      "steps": [
        "La bonne nouvelle est intégrée presque instantanément dans le prix.",
        "Le temps que vous lisiez le titre et achetiez, les 8 % sont déjà dans le prix.",
        "Tout mouvement ultérieur est imprévisible — vous n'avez aucun avantage, seulement du risque.",
        "Acheter « parce que les résultats étaient excellents » après le mouvement, c'est payer la juste valeur, pas une bonne affaire."
      ],
      "result": "L'information publique n'est pas un avantage — le marché a déjà agi dessus. Le seul avantage fiable est l'information privée (généralement illégale à exploiter) ou un avantage structurel (vitesse, échelle) que la plupart n'ont pas."
    },
    "deepDive": [
      "Les critiques de la HEM disposent de munitions réelles. Les bulles, les krachs et les erreurs de valorisation évidentes (la bulle technologique de 2000, les « meme stocks ») montrent que les prix peuvent être largement faux — l'hypothèse affirme seulement qu'ils ne sont pas exploitables de manière fiable, ce qui est un maigre réconfort quand on les observe. La finance comportementale documente des biais systématiques qui peuvent éloigner les prix de la juste valeur pendant de longues périodes. La synthèse que retiennent la plupart des professionnels : les marchés sont suffisamment efficients pour que les battre après coûts soit très difficile, mais pas au point que les prix soient toujours sensés — il existe des poches d'inefficience, surtout dans des recoins peu surveillés, et les exploiter est bien plus difficile que de les repérer.",
      "La leçon pratique de la HEM est l'humilité quant à votre avantage. La question n'est jamais « le marché a-t-il tort ? » (c'est souvent le cas) mais « ai-je un avantage véritable et durable pour exploiter cette erreur précise, après coûts, après impôts, contre des concurrents qui font la même chose ? » Pour presque tout le monde, la réponse honnête est non — c'est pourquoi le choix par défaut rationnel est constitué de fonds indiciels larges et peu coûteux, et pourquoi les rares qui battent le marché sont l'exception qui prouve combien la règle est difficile. La HEM se lit mieux non comme une affirmation sur les prix, mais comme une mise en garde contre l'excès de confiance : le marché est plus difficile à battre qu'il n'y paraît."
    ],
    "glossary": [
      {
        "term": "Marche aléatoire",
        "def": "L'idée que les variations de prix futures sont imprévisibles — aucun schéma à exploiter."
      },
      {
        "term": "Faible / semi-forte / forte",
        "def": "Les trois formes de la HEM, selon la quantité d'information déjà intégrée dans les prix."
      },
      {
        "term": "Anomalie",
        "def": "Un schéma (taille, valeur, momentum) qui semble battre le marché — un défi pour la HEM stricte."
      }
    ]
  },
  "pe-ratio": {
    "title": "Ratio cours/bénéfice (P/E)",
    "hook": "Combien d'années de profit vous payez par action — le premier chiffre que tout le monde vérifie, et le plus souvent mal interprété.",
    "tldr": "Le ratio cours/bénéfice (P/E) est le cours de l'action divisé par le bénéfice par action — combien vous payez pour 1 € de profit annuel. Un indicateur rapide de « bon marché ou cher ? »",
    "definition": [
      "Le ratio cours/bénéfice indique combien d'euros vous payez pour un euro de bénéfice annuel d'une entreprise. Une action à 100 € gagnant 5 €/action a un P/E de 20 — vous payez 20 années de profit actuel. Un P/E faible suggère qu'une action est bon marché (ou que le marché anticipe des difficultés) ; un P/E élevé suggère qu'elle est chère (ou que le marché anticipe une croissance rapide). Le chiffre seul est ambigu : le même P/E peut être une bonne affaire dans une entreprise stable et en croissance, ou un piège dans une entreprise dont les bénéfices sont sur le point de s'effondrer.",
      "Deux versions comptent. Le P/E historique (trailing) utilise les bénéfices de l'année écoulée (un fait, mais tourné vers le passé) ; le P/E prévisionnel (forward) utilise les bénéfices prévus (tourné vers l'avenir, mais une estimation). Les P/E prévisionnels sont généralement plus faibles quand une croissance est attendue, ce qui explique qu'ils paraissent attractifs — ils intègrent un optimisme qui pourrait ne pas se réaliser. Comparer le P/E d'une entreprise à sa propre histoire, à ses comparables et au marché, tout en vérifiant si les bénéfices sont réels et répétables, est ce qui rend le ratio utile plutôt que trompeur."
    ],
    "keyPoints": [
      "P/E = cours ÷ bénéfice par action — années de profit payées par action.",
      "Un P/E faible peut signifier bon marché ou un avertissement ; un P/E élevé peut signifier cher ou croissance attendue.",
      "Le P/E historique utilise les bénéfices passés (un fait) ; le P/E prévisionnel utilise des prévisions (de l'optimisme).",
      "Comparez à l'historique, aux comparables et au marché — n'utilisez jamais le chiffre isolément."
    ],
    "formula": {
      "expression": "P/E = Cours de l'action ÷ Bénéfice par action",
      "legend": "Cours de l'action = prix de marché actuel · BPA = résultat net ÷ nombre d'actions",
      "note": "Rendement des bénéfices = 1 ÷ P/E — le profit par euro de prix, comparable au rendement d'une obligation."
    },
    "example": {
      "scenario": "Action A : 100 €, BPA 5 € → P/E 20. Action B : 50 €, BPA 1 € → P/E 50. Laquelle est la moins chère ?",
      "steps": [
        "A coûte 20 années de bénéfices ; B coûte 50 années — A paraît moins chère sur le ratio.",
        "Mais si les bénéfices de A sont stables et ceux de B croissent de 30 %/an, B pourrait être la bonne affaire.",
        "P/E prévisionnel : si le BPA de B passe à 2 € l'an prochain, son P/E prévisionnel tombe à 25.",
        "Le P/E est une question de départ, pas une réponse — la qualité des bénéfices et la croissance achèvent l'analyse."
      ],
      "result": "Le P/E le moins élevé n'est pas toujours l'action la moins chère. Le 20 de A est juste pour une absence de croissance ; le 50 de B peut être bon marché pour une croissance rapide — le ratio a besoin d'une histoire pour être interprété."
    },
    "deepDive": [
      "Le plus grand angle mort du P/E, ce sont les bénéfices eux-mêmes. Les bénéfices déclarés dépendent de choix comptables (amortissement, éléments exceptionnels, reconnaissance des revenus) et peuvent être manipulés — deux entreprises identiques peuvent déclarer des BPA différents. La « qualité des bénéfices » (la fiabilité avec laquelle le profit se convertit en cash) compte davantage que le dénominateur du P/E. Une entreprise affichant un beau P/E sur des bénéfices comptables qui ne se transforment pas en cash est un piège ; une entreprise au P/E laid sur des bénéfices temporairement déprimés peut être une bonne affaire. Demandez-vous toujours si le E est réel avant de faire confiance au ratio.",
      "Un danger connexe est l'extrapolation de bénéfices cycliques. Au sommet d'un cycle de matières premières, les bénéfices d'un mineur sont au plus haut, donc son P/E paraît bon marché — mais ces bénéfices baisseront avec le cycle, et l'action « bon marché » est sur le point de devenir plus chère en réalité. Au creux du cycle, le P/E d'un mineur paraît élevé sur des bénéfices effondrés, alors que c'est souvent le meilleur moment pour acheter. Le P/E fonctionne mieux pour les entreprises stables et non cycliques ; pour les cycliques, utilisez des bénéfices normalisés moyennés sur un cycle, ou les ratios cours/valeur comptable ou cours/ventes qui se déforment moins aux extrêmes. Le P/E est un bon outil, mais seulement associé à un jugement sur le type de bénéfices que vous divisez."
    ],
    "glossary": [
      {
        "term": "P/E historique vs prévisionnel",
        "def": "Bénéfices de l'année écoulée (un fait) contre bénéfices prévus (une estimation) — le P/E prévisionnel est généralement plus flatteur."
      },
      {
        "term": "Rendement des bénéfices",
        "def": "1 ÷ P/E — profit par euro de prix, comparable au rendement d'une obligation."
      },
      {
        "term": "Ratio PEG",
        "def": "P/E ÷ taux de croissance — ajuste le multiple selon la vitesse de croissance des bénéfices."
      }
    ]
  },
  "arbitrage": {
    "title": "Arbitrage",
    "hook": "Acheter bas et vendre haut sur deux marchés à la fois — le profit sans risque qui ne devrait pas exister, et la force qui aligne les prix.",
    "tldr": "L'arbitrage consiste à profiter d'un écart de prix pour le même actif (ou un actif équivalent) sur deux marchés, avec peu ou pas de risque — le mécanisme qui maintient les prix alignés.",
    "definition": [
      "L'arbitrage pur est le rare profit sans risque : le même actif se traite à deux prix, donc vous achetez le moins cher et vendez le plus cher simultanément, empochant l'écart. Si une action vaut 100 € à New York et 101 € à Londres, vous achetez à NY et vendez à Londres pour un gain garanti de 1 €, sans avoir d'opinion sur la direction future du prix. La transaction s'auto-liquide et est sans risque — c'est la définition. En pratique, la plupart des « arbitrages » comportent un certain risque (timing, exécution, le fait que les deux jambes ne soient pas vraiment identiques), c'est pourquoi les arbitragistes sont rémunérés pour le porter.",
      "L'arbitrage est plus qu'une stratégie — c'est le mécanisme qui rend les marchés efficients. Quand un écart de prix s'ouvre, les arbitragistes se précipitent pour le combler, et leurs achats/ventes rapprochent les prix. Sans arbitrage, des actifs identiques pourraient se traiter à des prix radicalement différents ; avec lui, les prix restent alignés entre marchés. L'existence d'opportunités d'arbitrage est un signe d'inefficience ; leur disparition rapide est le signe d'un marché qui fonctionne. Plus un arbitrage est difficile à exécuter, plus l'écart peut être important et durable."
    ],
    "keyPoints": [
      "Acheter bon marché, vendre cher le même actif simultanément — un profit sans risque.",
      "Le mécanisme qui maintient les prix alignés entre marchés.",
      "L'arbitrage pur est rare ; la plupart des « arbitrages » réels comportent un risque (exécution, base, timing).",
      "Les écarts qui persistent sont trop risqués, coûteux ou restreints pour que les arbitragistes les comblent."
    ],
    "formula": {
      "expression": "Profit d'arbitrage = Prix de vente − Prix d'achat − Coûts",
      "legend": "Prix de vente = marché cher · Prix d'achat = marché bon marché · Coûts = frais, spread, financement",
      "note": "Profit uniquement s'il est positif après tous les coûts — de nombreux « arbitrages » disparaissent une fois les coûts pris en compte."
    },
    "example": {
      "scenario": "Une action se traite à 100 € à Francfort et 100,40 € à Paris, avec 0,05 € de coûts de transaction totaux. Un arbitragiste achète à Francfort, vend à Paris.",
      "steps": [
        "Achat à 100 €, vente simultanée à 100,40 € → gain brut de 0,40 € par action.",
        "Coûts de 0,05 € → gain net sans risque de 0,35 € par action.",
        "Sur 10 000 actions, cela représente 3 500 € de profit sans risque de marché.",
        "À mesure que les arbitragistes font cela, les achats font monter le prix à Francfort et les ventes le font baisser à Paris — l'écart se referme."
      ],
      "result": "Un gain sans risque de 3 500 € pour avoir été plus rapide et moins cher que l'arbitragiste suivant — et l'acte même de le capturer élimine l'écart qui l'avait créé."
    },
    "deepDive": [
      "L'arbitrage intéressant n'est jamais celui des manuels. L'« arbitrage statistique » parie que deux actions historiquement liées reviendront à un écart normal — rentable en moyenne, mais peut exploser quand la relation se rompt (Long-Term Capital Management). L'« arbitrage de fusion » achète une cible après l'annonce d'une OPA, pariant que l'opération se conclura ; il perd si l'opération échoue. L'« arbitrage convertible » achète une obligation convertible et vend à découvert l'action sous-jacente. Aucun n'est véritablement sans risque ; chacun est rémunéré pour porter un risque spécifique que la plupart des gens ne peuvent pas ou ne veulent pas prendre. L'étiquette « sans risque » est aspirationnelle ; la réalité est un spectre.",
      "Le rôle le plus profond de l'arbitrage est la « loi du prix unique » — le principe selon lequel des actifs identiques devraient se traiter au même prix, appliqué par quiconque est prêt à effectuer la transaction. Quand elle échoue de façon catastrophique (les prix des CDO ont divergé de ceux de leurs obligations sous-jacentes en 2008), le marché est cassé, pas simplement inefficient — et cette rupture signale que les arbitragistes qui l'appliquent normalement sont eux-mêmes contraints (à court de capital, de nerfs ou de liquidité). Observer où l'arbitrage échoue est une façon de détecter le stress : des erreurs de valorisation persistantes, importantes et « évidentes » ne sont généralement pas de l'argent gratuit mais un avertissement que quelque chose empêche la transaction. Le marché vous signale le risque que vous ne voyez pas."
    ],
    "glossary": [
      {
        "term": "Loi du prix unique",
        "def": "Des actifs identiques devraient se traiter au même prix — appliquée par l'arbitrage."
      },
      {
        "term": "Arbitrage statistique",
        "def": "Parier que des relations historiques reviennent à la normale — risqué, pas sans risque."
      },
      {
        "term": "Arbitrage de fusion",
        "def": "Parier qu'une OPA annoncée se conclura — perd si l'opération échoue."
      }
    ]
  },
  "ipo": {
    "title": "Introduction en bourse (IPO)",
    "hook": "Le jour où une entreprise privée vend des actions au public pour la première fois — le moment où elle rejoint le marché.",
    "tldr": "Une introduction en bourse (IPO) est la première vente d'actions au public par une entreprise privée, levant des capitaux et transformant l'entreprise en une action cotée et négociable.",
    "definition": [
      "Une IPO est la transition du privé au public. L'entreprise travaille avec des banques d'investissement (les preneurs fermes, ou underwriters) qui fixent le prix des actions, les commercialisent auprès des investisseurs, et garantissent la levée du capital — moyennant des frais de plusieurs pourcents. Le jour de la cotation, les actions commencent à se négocier sur une bourse, n'importe qui peut les acheter, et l'entreprise accède à un vaste bassin de capitaux et à une monnaie liquide (ses actions) qu'elle peut utiliser pour financer sa croissance, acquérir des entreprises, ou permettre aux fondateurs et premiers investisseurs de se désengager. Le prix de l'IPO est fixé la veille, en fonction de la demande recueillie pendant un « roadshow ».",
      "Les IPO sont réputées à double tranchant pour les acheteurs. La « hausse » du premier jour (le prix bondissant au-dessus du prix d'IPO) est courante car les preneurs fermes fixent le prix légèrement bas pour garantir un lancement réussi et récompenser les clients privilégiés. Mais à moyen terme, les IPO en tant que groupe ont historiquement sous-performé le marché — l'entreprise vend quand elle peut obtenir le meilleur prix, et le capital frais associé au nouvel examen public coïncide souvent avec la fin de la croissance la plus rapide. La période de blocage (lock-up) empêche les initiés de vendre pendant environ 6 mois ; à son expiration, l'action vacille souvent car les initiés se désengagent enfin."
    ],
    "keyPoints": [
      "Première vente d'actions au public — transformant une entreprise privée en action cotée.",
      "Les preneurs fermes fixent le prix, commercialisent et garantissent la levée de fonds, moyennant des frais (~3–7 %).",
      "Une hausse du premier jour est courante (sous-évaluation délibérée) ; les rendements des IPO à long terme sont souvent faibles.",
      "La période de blocage (~6 mois) empêche les initiés de vendre tôt ; son expiration peut peser sur l'action."
    ],
    "formula": {
      "expression": "Produit de l'IPO = Actions offertes × Prix de l'IPO × (1 − Frais de prise ferme)",
      "legend": "Actions offertes = nouvelles + actions existantes vendues · Prix de l'IPO = fixé la veille · Frais = décote de prise ferme",
      "note": "Les actions primaires lèvent du cash pour l'entreprise ; les actions secondaires permettent aux détenteurs existants de vendre et de se désengager."
    },
    "example": {
      "scenario": "Une entreprise offre 10 millions de nouvelles actions à 40 € lors de son IPO, avec des frais de prise ferme de 5 %. Que reçoit l'entreprise, et que se passe-t-il si l'action clôture à 48 € ?",
      "steps": [
        "Produit brut = 10 M × 40 € = 400 M€ levés auprès des investisseurs.",
        "Frais de prise ferme = 5 % × 400 M€ = 20 M€ → l'entreprise touche net 380 M€ pour sa croissance.",
        "Clôture du premier jour à 48 € → une hausse de 20 % ; les investisseurs ayant obtenu des actions à 40 € gagnent 8 €/action.",
        "L'entreprise ne reçoit pas les 8 € — ils reviennent aux acheteurs de l'IPO, pas à l'émetteur."
      ],
      "result": "L'entreprise a levé 380 M€ pour son avenir ; les preneurs fermes ont gagné 20 M€ ; les acheteurs privilégiés ont reçu un « merci » de 8 €/action. Tout le monde, sauf les particuliers courant après la hausse, tend à gagner le premier jour."
    },
    "deepDive": [
      "L'IPO est chronométrée par le vendeur, pas par l'acheteur — et ce timing est la source de sa sous-performance à long terme. Les entreprises entrent en bourse quand les conditions sont optimales : quand les bénéfices sont solides, le sentiment est élevé et les valorisations sont généreuses. Les acheteurs de l'IPO obtiennent l'entreprise au moment où ses promoteurs pensent qu'elle a le plus de valeur. Ajoutez les coûts de l'entrée en bourse (frais, publication d'informations, pression trimestrielle pour atteindre des objectifs) et la dilution liée à la rémunération en actions, et l'IPO moyenne a une barre élevée à franchir. Les exceptions — les rares entreprises qui continuent de composer pendant des décennies après la cotation — sont le prix à gagner, mais elles sont difficiles à identifier au milieu du bruit de l'échec moyen.",
      "La tendance à s'éloigner des IPO est elle-même une histoire. Les entreprises restent privées plus longtemps, levant des sommes énormes auprès du capital-risque et du capital-investissement plutôt que de se coter, de sorte qu'au moment de leur IPO, elles sont souvent grandes, à croissance plus lente et plus proches de leur sommet. Cela déplace le risque : la croissance explosive précoce qui revenait autrefois aux acheteurs d'IPO sur le marché public revient désormais aux investisseurs privés de capital-risque et de capital-investissement, les acheteurs publics récupérant la queue mature. Pour les investisseurs particuliers, la leçon est de traiter les IPO comme des opportunités spéculatives, pas comme des positions centrales — l'entreprise vend pour une raison, et le prix reflète le meilleur moment du vendeur, qui est rarement celui de l'acheteur."
    ],
    "glossary": [
      {
        "term": "Preneur ferme (underwriter)",
        "def": "La banque qui fixe le prix et garantit une IPO — elle porte le risque de placement moyennant des frais."
      },
      {
        "term": "Période de blocage (lock-up)",
        "def": "Fenêtre post-IPO (~6 mois) pendant laquelle les initiés ne peuvent pas vendre leurs actions."
      },
      {
        "term": "Roadshow",
        "def": "La tournée de commercialisation pré-IPO où la direction présente l'entreprise aux investisseurs pour jauger la demande."
      }
    ]
  },
  "yield-curve": {
    "title": "Courbe des taux",
    "hook": "La ligne reliant les taux au jour le jour aux obligations à 30 ans — et le signal de récession que tout le monde surveille.",
    "tldr": "La courbe des taux représente les taux d'intérêt selon les échéances obligataires. Normalement croissante ; quand elle s'inverse (taux longs sous les taux courts), une récession suit souvent.",
    "definition": [
      "La courbe des taux est la ligne des rendements des obligations d'État, de l'échéance la plus courte (au jour le jour) à la plus longue (30 ans), tracée à un instant donné. Habituellement, elle est croissante — les obligations plus longues rapportent davantage, car vous immobilisez votre argent plus longtemps et prenez plus de risque de taux et d'inflation. La forme est une information : une courbe pentue signale une croissance et des hausses de taux attendues ; une courbe plate ou inversée signale un ralentissement et des baisses de taux attendus. Comme les taux longs reflètent l'anticipation du marché sur les futurs taux courts, une inversion (taux longs sous taux courts) signifie que le marché anticipe une baisse des taux — ce qui se produit généralement à cause d'une récession à venir.",
      "La courbe est l'indicateur de récession le plus surveillé. Une courbe américaine 2 ans/10 ans inversée a précédé chaque récession américaine depuis des décennies, généralement 12 à 18 mois à l'avance, avec un seul faux signal. Ce n'est pas une loi — elle peut rester inversée longtemps et les récessions ont d'autres causes — mais elle distille le jugement collectif du marché obligataire sur la trajectoire de l'économie en une seule forme. Les banques centrales la surveillent car elles contrôlent l'extrémité courte ; l'extrémité longue est le verdict du marché sur leur direction."
    ],
    "keyPoints": [
      "Représente les taux du jour le jour aux obligations à 30 ans — normalement croissante.",
      "L'inversion (taux longs sous les taux courts) a précédé la plupart des récessions.",
      "L'extrémité longue reflète les futurs taux courts anticipés ; l'extrémité courte est fixée par la banque centrale.",
      "Pentue = croissance attendue ; plate/inversée = ralentissement attendu."
    ],
    "formula": {
      "expression": "Écart de courbe = Taux long − Taux court  (ex. 10 ans − 2 ans)",
      "legend": "Taux long = taux de l'obligation longue · Taux court = taux de l'obligation courte · positif = normal, négatif = inversé",
      "note": "Théorie des anticipations : le taux long ≈ la moyenne des futurs taux courts attendus + une prime de terme."
    },
    "example": {
      "scenario": "L'obligation d'État à 2 ans rapporte 4,5 % et celle à 10 ans rapporte 4,0 %. Que dit la courbe ?",
      "steps": [
        "Écart = 4,0 % − 4,5 % = −0,5 % — une courbe inversée.",
        "Le marché anticipe une baisse des taux courts — généralement parce qu'une récession force la banque centrale à baisser ses taux.",
        "Historiquement, ce signal précède une récession dans les 12 à 18 mois environ.",
        "Les banques souffrent : elles empruntent court (dépôts) et prêtent long (crédits immobiliers), donc une inversion comprime leur marge."
      ],
      "result": "Un écart 2 ans-10 ans négatif est un pari du marché obligataire sur des baisses de taux à venir — l'avertissement le plus clair du marché que la croissance est sur le point de ralentir."
    },
    "deepDive": [
      "Pourquoi l'inversion prédit-elle une récession ? Deux canaux. Premièrement, les banques gagnent de l'argent en empruntant court et en prêtant long ; une inversion inverse leur profit, donc elles prêtent moins, étranglant le crédit et ralentissant l'économie. Deuxièmement, l'inversion elle-même est le marché disant qu'il attend des baisses de taux — et les banques centrales baissent leurs taux quand l'économie s'affaiblit. Le signal est en partie causal (les banques se resserrent) et en partie diagnostique (le marché lit les difficultés à venir). Dans les deux cas, il a gagné sa réputation, c'est pourquoi chaque journal financier suit l'écart 2 ans-10 ans.",
      "La courbe présente un risque de faux positif connu et un problème de timing connu : les inversions peuvent persister de nombreux mois avant toute récession, et des arguments du type « cette fois c'est différent » apparaissent à chaque cycle (le QE déformant l'extrémité longue, par exemple). Traiter la courbe comme un oracle conduit à vendre trop tôt et à manquer les gains de fin de cycle. L'usage discipliné consiste à la considérer comme un élément parmi d'autres — un avertissement de récession à forte conviction qui a quand même besoin de preuves confirmatoires provenant du crédit, de l'emploi et des enquêtes. La courbe vous dit qu'une tempête se forme peut-être ; le reste des données vous dit quand vous mettre à l'abri."
    ],
    "glossary": [
      {
        "term": "Inversion",
        "def": "Les taux longs tombant sous les taux courts — le signal de récession classique."
      },
      {
        "term": "Prime de terme",
        "def": "Le rendement supplémentaire que les investisseurs exigent pour détenir des obligations longues plutôt que de renouveler des obligations courtes."
      },
      {
        "term": "Écart 2 ans-10 ans",
        "def": "Le taux à 10 ans moins le taux à 2 ans — la mesure de courbe la plus surveillée."
      }
    ]
  },
  "securitization": {
    "title": "Titrisation",
    "hook": "Transformer un tas de prêts en obligations que l'on peut vendre — l'alchimie qui finance les prêts immobiliers, et le mécanisme derrière la crise de 2008.",
    "tldr": "La titrisation regroupe de nombreux prêts (immobiliers, automobiles, cartes de crédit) en titres vendus à des investisseurs, transformant des prêts illiquides en obligations négociables.",
    "definition": [
      "La titrisation prend un ensemble de prêts similaires — disons mille prêts immobiliers — et transforme leurs flux de trésorerie en obligations (titres adossés à des actifs) que les investisseurs peuvent acheter. La banque qui a accordé les prêts les revend, libérant son bilan pour prêter à nouveau ; l'investisseur reçoit une obligation payant les intérêts des prêts. C'est de l'alchimie financière : des prêts individuels illiquides deviennent des titres liquides et négociables, et le risque de défaut d'un emprunteur donné est mutualisé entre des milliers d'autres. Bien menée, elle répartit le risque et élargit le crédit ; mal menée, elle diffuse des prêts empoisonnés et cache la pourriture.",
      "Les opérations sont découpées en « tranches » selon le risque : les tranches senior payées en premier (sûres, notées AAA), la tranche mezzanine au milieu, la tranche equity en dernier (première à absorber les pertes, rendement le plus élevé). Les notations de crédit et ce découpage faisaient paraître les tranches senior sûres même quand les prêts sous-jacents étaient fragiles — la tromperie centrale de 2008, quand les prêts subprime ont été regroupés, découpés en tranches, estampillés « investment grade » et vendus à des investisseurs qui n'ont jamais regardé le sous-jacent. Les règles post-crise obligent les prêteurs à garder une part du risque et ont durci les critères d'octroi, mais la structure elle-même reste un outil légitime et utile."
    ],
    "keyPoints": [
      "Regroupe de nombreux prêts en titres négociables (ABS, MBS) — transforme des prêts illiquides en obligations.",
      "Libère le bilan de l'initiateur pour prêter à nouveau ; répartit le risque entre les investisseurs.",
      "Découpée en tranches par ancienneté — la senior payée en premier (plus sûre), l'equity en dernier (plus risquée).",
      "Solide quand la souscription des prêts l'est ; la crise de 2008 est venue de mauvais prêts tranchés et sur-notés."
    ],
    "formula": {
      "expression": "Valeur ABS = Σ [Flux de trésorerie du prêt_t ÷ (1 + r)^t]  (par tranche)",
      "legend": "Flux de trésorerie du prêt = principal + intérêts moins défauts · r = rendement de la tranche · sommé par ancienneté",
      "note": "Les pertes touchent d'abord la tranche equity ; une fois celle-ci épuisée, elles remontent vers la mezzanine, puis la senior."
    },
    "example": {
      "scenario": "Une banque regroupe 1 Md € de prêts immobiliers en MBS, répartis en Senior (900 M €, AAA), Mezzanine (80 M €, BBB), Equity (20 M €, non notée). Les pertes atteignent 30 M €. Qui perd quoi ?",
      "steps": [
        "La tranche equity (20 M €) est totalement effacée.",
        "Les 10 M € de pertes restants touchent la Mezzanine (80 M € → 70 M € restants).",
        "La Senior (900 M €) n'est pas touchée — protégée par 100 M € de tranches subordonnées en dessous.",
        "Les investisseurs senior ont obtenu une sécurité de type AAA grâce à la structure, pas parce que les prêts sous-jacents étaient sûrs."
      ],
      "result": "Le découpage a fait paraître 900 M € comme AAA en empilant tout le risque dans les 100 M € en dessous. Quand les pertes dépassent le coussin, la tranche « sûre » finit par saigner — exactement ce qui s'est passé en 2008."
    },
    "deepDive": [
      "L'échec de 2008 tenait moins à la structure qu'aux intrants et aux incitations. Les initiateurs touchaient des commissions pour accorder des prêts, pas pour que ces prêts soient remboursés (ils les revendaient), donc la souscription s'est effondrée (prêts « sans documents »). Les agences de notation, payées par les émetteurs, ont estampillé investment grade des pools toxiques. Les investisseurs se fiaient à la notation plutôt que de lire les prêts. La structure n'a pas causé la crise — des incitations brisées à chaque maillon de la chaîne l'ont fait, et la structure a simplement transmis efficacement les mauvais prêts à quiconque faisait confiance aux étiquettes. Corrigez les incitations (part du risque conservée, meilleures notations, transparence) et la titrisation fonctionne.",
      "La titrisation reste réellement utile quand elle est bien menée. Elle finance des prêts immobiliers que les banques seules ne pourraient porter, elle permet aux investisseurs d'acheter une exposition crédit diversifiée, et elle répartit le risque vers ceux les mieux à même de le supporter. La leçon n'est pas « la titrisation est mauvaise » mais « la sécurité d'un ABS dépend entièrement de la qualité des prêts sous-jacents et de l'honnêteté des notations — la structure ne peut pas créer une sécurité qui n'existe pas ». Un investisseur qui comprend les prêts, le découpage en tranches et les seuils de déclenchement des pertes peut bien utiliser les ABS ; celui qui achète la notation et l'étiquette est de retour en 2008."
    ],
    "glossary": [
      {
        "term": "ABS",
        "def": "Titre adossé à des actifs — une obligation garantie par un ensemble de prêts (auto, carte de crédit, étudiant)."
      },
      {
        "term": "Tranche",
        "def": "Une part d'une titrisation avec un risque/rang défini — de senior (sûre) à equity (première perte)."
      },
      {
        "term": "Part du risque conservée",
        "def": "Exiger que l'initiateur garde une partie de l'opération pour aligner ses intérêts avec ceux des investisseurs."
      }
    ]
  },
  "lbo": {
    "title": "Rachat avec effet de levier (LBO)",
    "hook": "Racheter une entreprise principalement avec de l'argent emprunté — et faire payer à l'entreprise le remboursement de l'emprunt qui l'a achetée.",
    "tldr": "Un LBO consiste à acquérir une entreprise en utilisant une large part d'argent emprunté, le flux de trésorerie de la cible servant à rembourser la dette.",
    "definition": [
      "Dans un rachat avec effet de levier (LBO), une société de capital-investissement achète une entreprise en apportant relativement peu de fonds propres et en empruntant le reste — souvent 60 à 70 % du prix. L'emprunt est garanti par les actifs de la cible et remboursé par le flux de trésorerie de la cible elle-même. Le génie et le danger sont identiques : l'acheteur contrôle un actif important avec peu de fonds propres, et c'est l'entreprise (pas l'acheteur) qui assure le service de la dette qui l'a achetée. Si le flux de trésorerie tient, la dette est remboursée et les fonds propres — représentant désormais une part plus grande d'une entreprise moins endettée — valent bien plus ; si le flux de trésorerie flanche, la dette écrase l'entreprise.",
      "Les LBO sont l'opération signature du capital-investissement. Les rendements proviennent de trois leviers : l'effet de levier financier (amplifiant les rendements des fonds propres tant que l'actif rapporte plus que le coût de la dette), l'amélioration opérationnelle (réduction des coûts, cession d'actifs, croissance des marges), et l'expansion du multiple (revendre l'entreprise à une valorisation supérieure à celle payée). Le premier est de l'ingénierie financière pure et le plus risqué — il fonctionne dans les bons moments et explose dans les mauvais. Les mathématiques récompensent les entreprises stables et génératrices de trésorerie (services publics, biens de consommation courante) et pénalisent les entreprises cycliques ou gourmandes en capital dont le flux de trésorerie ne peut assurer le service de la dette au pic en cas de repli."
    ],
    "keyPoints": [
      "Racheter une entreprise principalement avec de la dette ; le flux de trésorerie de la cible rembourse l'emprunt.",
      "Les rendements viennent de l'effet de levier, de l'amélioration opérationnelle et de l'expansion du multiple.",
      "Fonctionne sur des entreprises stables et génératrices de trésorerie ; détruit les cycliques ou à faible trésorerie.",
      "Une dette élevée signifie un risque élevé — un repli peut faire basculer l'entreprise dans la détresse ou la faillite."
    ],
    "formula": {
      "expression": "Rendement des fonds propres LBO ≈ Rendement de l'actif + (Dette ÷ Fonds propres) × (Rendement de l'actif − Coût de la dette)",
      "legend": "Dette ÷ Fonds propres = effet de levier · Rendement de l'actif = gain opérationnel · Coût de la dette = taux d'intérêt",
      "note": "L'équation classique du levier : des rendements supérieurs au coût de la dette amplifient les fonds propres ; en dessous, le levier les détruit."
    },
    "example": {
      "scenario": "Une société de capital-investissement rachète une entreprise pour 1 Md €, apportant 300 M € de fonds propres et 700 M € de dette à 6 %. Le flux de trésorerie de l'entreprise croît de 10 % et la dette est réduite à 500 M € sur 5 ans, puis revendue au même multiple. Rendement des fonds propres ?",
      "steps": [
        "Valeur d'entreprise à l'entrée 1 Md € ; fonds propres 300 M €, dette 700 M €.",
        "5 ans plus tard : la VE a crû d'environ 10 %/an → ~1,6 Md € ; dette réduite à 500 M €.",
        "Valeur des fonds propres = VE − dette = 1,6 Md − 0,5 Md = 1,1 Md €, contre 300 M € investis.",
        "Multiple des fonds propres ≈ 3,7× — un rendement annuel d'environ 30 %, principalement dû au levier et au remboursement de dette."
      ],
      "result": "Une modeste amélioration de l'entreprise est devenue un rendement de 3,7× des fonds propres car la dette a été remboursée avec la propre trésorerie de l'entreprise. Inversez le flux de trésorerie et le même levier anéantit les fonds propres."
    },
    "deepDive": [
      "Le côté sombre du LBO apparaît quand le flux de trésorerie déçoit. La dette est fixe ; le flux de trésorerie ne l'est pas. En période de ralentissement, l'EBITDA chute mais pas les intérêts, le ratio de couverture s'effondre, et l'entreprise passe de « endettée » à « insolvable ». Beaucoup de LBO célèbres du boom 2005-2007 (distribution, presse) ont fait faillite en 2008-2009 exactement pour cette raison — la dette a survécu au boom mais pas à la récession. La discipline consiste à calibrer la dette sur le flux de trésorerie au creux, pas au pic, et à laisser assez de marge pour l'inévitable mauvaise année. Le levier qui fonctionne au sommet tue au creux.",
      "La critique plus profonde des LBO est distributive : la société de capital-investissement et ses investisseurs captent la hausse, tandis que l'entreprise porte la dette et souvent les coupes de coûts (emplois, R&D, entretien) qui financent le service de la dette. Le même flux de trésorerie qui autrefois investissait dans l'entreprise sert désormais l'emprunt qui l'a achetée. Bien menée, cette discipline rend l'entreprise plus efficiente et meilleure ; mal menée, elle dépèce l'entreprise et laisse une coquille incapable de rivaliser. Que le LBO crée ou détruise de la valeur dépend presque entièrement du caractère réel et durable des améliorations opérationnelles ou de leur simple vernis d'ingénierie financière — et seul le temps, pas la présentation commerciale, le révèle."
    ],
    "glossary": [
      {
        "term": "Capital-investissement",
        "def": "Les sociétés qui font des LBO — rachètent des entreprises privées/stables, les endettent, les améliorent et les revendent."
      },
      {
        "term": "Dette/EBITDA",
        "def": "Un indicateur courant du levier — combien d'années de résultat d'exploitation la dette représente."
      },
      {
        "term": "Ratio de couverture",
        "def": "Flux de trésorerie ÷ intérêts — l'aisance avec laquelle la dette est servie ; faible signifie danger."
      }
    ]
  },
  "fiat-money": {
    "title": "Monnaie fiduciaire",
    "hook": "L'argent n'a de valeur que parce que nous acceptons tous qu'il en ait — la fiction partagée qui fait tourner l'économie moderne.",
    "tldr": "La monnaie fiduciaire est une devise qui a de la valeur parce qu'un gouvernement la déclare cours légal, et non parce qu'elle est adossée à l'or ou à un autre actif.",
    "definition": [
      "La monnaie fiduciaire est de l'argent par décret : un gouvernement dit que c'est de l'argent, exige que les impôts soient payés avec, et l'accepte pour les dettes — et cela suffit. Contrairement à l'or ou à un billet adossé à l'or, un euro ou un dollar n'a aucune valeur intrinsèque ni aucune créance sur quoi que ce soit de physique ; sa valeur repose entièrement sur la confiance dans l'État émetteur et la stabilité de son économie. Perdez cette confiance (hyperinflation, effondrement du régime) et la devise s'effondre. Toute monnaie moderne est fiduciaire ; l'étalon-or a pris fin au XXe siècle car il liait les mains des gouvernements pendant les crises.",
      "Le grand avantage du fiduciaire est sa flexibilité : une banque centrale peut en créer ou en détruire pour piloter l'économie — élargir la masse monétaire en crise, la resserrer en période de croissance. C'est l'outil qui permet aux banques centrales modernes de combattre les récessions et de sauver le système, impossible sous un étalon-or rigide. Son grand danger est ce même pouvoir : un gouvernement qui peut créer de la monnaie peut en créer trop, produisant de l'inflation ou, dans les cas extrêmes, de l'hyperinflation. La valeur du fiduciaire est un contrat social ; le contrat tient tant que l'émetteur est discipliné et digne de confiance."
    ],
    "keyPoints": [
      "Valeur par décret gouvernemental et confiance, non par un adossement physique.",
      "Toute monnaie moderne est fiduciaire ; l'étalon-or a pris fin le siècle dernier.",
      "Permet aux banques centrales de créer/détruire de la monnaie pour piloter l'économie — un outil puissant et dangereux.",
      "La confiance est le fondement : une création excessive cause de l'inflation ; la perte de confiance cause l'effondrement de la devise."
    ],
    "formula": {
      "expression": "Valeur de la monnaie ≈ 1 ÷ (Masse monétaire ÷ Production réelle)",
      "legend": "Masse monétaire = total de la devise/crédit en circulation · Production réelle = biens et services produits",
      "note": "Théorie quantitative : trop d'argent pour trop peu de biens → prix plus élevés (inflation)."
    },
    "example": {
      "scenario": "Un pays double sa masse monétaire alors que la production reste stable. Que se passe-t-il pour les prix (à long terme) ?",
      "steps": [
        "Mêmes biens, deux fois plus d'argent → chaque unité achète environ moitié moins.",
        "Les prix doublent à peu près — la « taxe inflationniste » sur quiconque détient la devise.",
        "Les détenteurs d'épargne en liquide perdent la moitié de leur pouvoir d'achat ; les détenteurs d'actifs réels conservent le leur.",
        "C'est pourquoi l'hyperinflation (monnaie imprimée sans limite) détruit la confiance et la valeur d'une devise."
      ],
      "result": "Imprimer deux fois plus de monnaie pour la même production fait doubler les prix. Le pouvoir du fiduciaire est aussi sa tentation — une création disciplinée permet la politique monétaire, une création indisciplinée détruit la devise."
    },
    "deepDive": [
      "La monnaie fiduciaire est une fiction collective, mais les fictions peuvent être extraordinairement durables lorsqu'elles sont soutenues par un État qui prélève l'impôt. L'obligation de payer les impôts dans cette devise crée une demande garantie pour elle — les citoyens ont besoin de la monnaie du gouvernement pour régler leurs obligations, ce qui explique pourquoi la monnaie fiduciaire d'un État crédible conserve de la valeur même sans adossement. Le système se brise quand l'État perd sa crédibilité (effondrement du régime, guerre) ou abuse de la planche à billets (financer les dépenses en créant de la monnaie plutôt qu'en taxant). Les hyperinflations — Allemagne de Weimar, Zimbabwe, Venezuela — sont le mode d'échec : une spirale où plus d'impression → plus d'inflation → besoin de plus d'impression, jusqu'à ce que la devise soit abandonnée pour quelque chose de stable (dollars, or, billets étrangers).",
      "L'ambition plus profonde du mouvement crypto est de remplacer le fiduciaire par une monnaie qu'aucun gouvernement ne peut inflater — l'offre fixe du Bitcoin est un miroir délibéré de la discipline de l'étalon-or. Savoir si une monnaie sans confiance et à offre fixe peut servir une économie en croissance est la question ouverte : la monnaie rigide a déjà échoué (l'étalon-or a aggravé la Grande Dépression), et une devise qui ne peut s'étendre risque de forcer une déflation douloureuse. Fiduciaire et crypto incarnent des théories opposées de la monnaie — flexible mais fondée sur la confiance vs rigide mais sans confiance — et savoir laquelle sert le mieux une économie est l'un des débats vivants de la finance moderne, pas un fait établi."
    ],
    "glossary": [
      {
        "term": "Cours légal",
        "def": "Monnaie qu'un gouvernement déclare devoir être acceptée pour les dettes sur son territoire."
      },
      {
        "term": "Étalon-or",
        "def": "Un système où la devise est convertible en or à taux fixe — rigide, abandonné au profit de la flexibilité du fiduciaire."
      },
      {
        "term": "Théorie quantitative de la monnaie",
        "def": "L'idée que plus de monnaie pour la même production signifie des prix plus élevés."
      }
    ]
  },
  "volatility": {
    "title": "Volatilité",
    "hook": "L'ampleur des variations — le substitut du risque en finance, aussi utile que trompeur.",
    "tldr": "La volatilité mesure à quel point le prix d'un actif oscille autour de sa moyenne — la mesure standard du risque, bien qu'elle ne soit pas le vrai danger.",
    "definition": [
      "La volatilité est la mesure statistique de la variabilité des rendements — généralement l'écart-type des rendements sur une période. Une action qui bouge de ±2 % par jour est plus volatile qu'une qui bouge de ±0,3 %. La finance l'utilise comme jauge de risque par défaut car elle est mesurable, comparable, et alimente les modèles (Sharpe, options, VaR). Une volatilité élevée signifie une plage de résultats possibles plus large, en mieux comme en pire ; une faible volatilité signifie une bande plus resserrée autour de la moyenne.",
      "La volatilité est un indicateur utile mais une définition imparfaite du risque. Le vrai risque pour la plupart des investisseurs est la perte permanente de capital ou le fait d'être forcé de vendre au plus bas — ce qui n'a rien à voir avec les oscillations de prix. Une action peut être très volatile tout en étant un bon placement à long terme (les oscillations sont du bruit autour d'une tendance haussière), ou peu volatile tout en saignant lentement vers zéro. Assimiler volatilité et risque conduit à détenir des perdants ennuyeux et à éviter des gagnants volatils, et à des modèles qui sous-estiment les mouvements rares et catastrophiques (queues épaisses) qui causent les vrais dégâts."
    ],
    "keyPoints": [
      "Mesurée comme l'écart-type des rendements — l'ampleur des oscillations.",
      "L'indicateur de risque par défaut : plus de volatilité = plage de résultats plus large.",
      "Un indicateur, pas la vérité : le vrai risque est la perte permanente ou la vente forcée, pas seulement les oscillations.",
      "Sous-estime le risque de queue — les mouvements à queue épaisse arrivent bien plus souvent que ne le prédisent les modèles « normaux »."
    ],
    "formula": {
      "expression": "Volatilité (σ) = √( Σ (R_t − R̄)² ÷ (n − 1) )",
      "legend": "R_t = chaque rendement · R̄ = rendement moyen · n = nombre de périodes",
      "note": "Volatilité annualisée = σ journalière × √252 (jours de bourse) — la mise à l'échelle standard."
    },
    "example": {
      "scenario": "Les rendements mensuels de l'action A ont une moyenne de 1 % avec une volatilité de 3 %. L'action B a une moyenne de 1 % avec une volatilité de 8 %. Quel est un « mauvais » résultat sur un mois pour chacune (~5 % pires mois) ?",
      "steps": [
        "Environ 95 % des mois se situent dans ±2σ de la moyenne (en supposant une distribution normale).",
        "A : 1 % − 2×3 % = −5 % — un mauvais mois est une perte d'environ 5 %.",
        "B : 1 % − 2×8 % = −15 % — un mauvais mois est une perte d'environ 15 %.",
        "Même rendement attendu, tolérance à la douleur très différente requise."
      ],
      "result": "Même rendement moyen, trois fois la pire perte. La volatilité est le prix du potentiel de hausse plus élevé — et la mesure de la douleur qu'il faut encaisser pour le gagner."
    },
    "deepDive": [
      "Le défaut le plus profond de la volatilité est l'hypothèse de normalité. Les rendements réels ont des queues épaisses — les mouvements extrêmes arrivent bien plus souvent que ne le prédit une courbe en cloche. Le krach de 1987 était un événement d'environ 20 écarts-types selon les hypothèses normales, quelque chose qui ne devrait se produire qu'une fois dans l'âge de l'univers ; cela s'est produit en un jour. Traiter la volatilité comme la mesure complète du risque conduit à des modèles VaR qui disent « cela ne peut pas arriver » juste avant que cela n'arrive. La solution est d'utiliser la volatilité comme un intrant parmi d'autres, aux côtés de mesures de queue, de tests de résistance et d'analyses de scénarios — jamais de confondre le milieu confortable de la distribution avec ses bords dangereux.",
      "Une vérité contre-intuitive : la volatilité n'est pas toujours mauvaise pour un investisseur à long horizon. Un jeune investisseur qui épargne chaque mois bénéficie de la volatilité — l'investissement programmé achète plus de parts quand les prix chutent, abaissant le coût moyen. Et le « frein de volatilité » (l'écart entre le rendement moyen et le rendement composé) ne mord que sur de grandes oscillations ; pour des portefeuilles diversifiés ordinaires, il est mineur. L'investisseur qui traite la volatilité comme l'ennemi finit souvent trop prudent, sacrifiant des rendements à long terme pour éviter un inconfort de court terme qu'il aurait pu surmonter. Le talent consiste à distinguer la volatilité qu'il faut exploiter (long horizon) de celle qu'il faut éviter (vendeur forcé, proche d'un retrait)."
    ],
    "glossary": [
      {
        "term": "Écart-type",
        "def": "La mesure statistique de dispersion — à quel point les rendements s'écartent de leur moyenne."
      },
      {
        "term": "Queues épaisses",
        "def": "Des événements extrêmes se produisant plus souvent que ne le prédit une distribution normale."
      },
      {
        "term": "Volatilité implicite",
        "def": "L'anticipation du marché quant à la volatilité future, intégrée dans les prix des options."
      }
    ]
  },
  "value-at-risk": {
    "title": "Valeur à risque (VaR)",
    "hook": "Un chiffre unique qui tente de répondre à « combien pourrais-je perdre un mauvais jour ? » — puissant, et dangereusement facile à surestimer.",
    "tldr": "La VaR estime la perte maximale qu'un portefeuille est peu susceptible de dépasser sur une période donnée, à un niveau de confiance choisi — par exemple « VaR à 95 % de 10 000 € » signifie qu'une journée pire que -10 000 € survient environ 5 % du temps.",
    "definition": [
      "La valeur à risque (VaR) répond à une question précise : sur un horizon temporel donné (un jour, un mois), quel est le seuil de perte que les rendements ne dépasseront pas, X % du temps ? Une « VaR à 1 jour, 95 %, de 50 000 € » signifie que sur 95 jours sur 100, le portefeuille ne devrait pas perdre plus de 50 000 € en une journée. Réciproquement, elle ne dit rien des 5 % restants — les mauvais jours — au-delà du fait qu'ils existent.",
      "La VaR se calcule de trois façons principales : historique (rejouer les rendements passés réels et lire le centile pertinent), paramétrique/variance-covariance (supposer que les rendements sont normalement distribués et utiliser la volatilité et les corrélations pour calculer le seuil analytiquement), et Monte-Carlo (simuler des milliers de trajectoires futures aléatoires à partir d'un modèle et lire le centile). Banques, fonds et régulateurs utilisent la VaR pour fixer les exigences de capital et les limites de risque car elle condense toute une distribution de résultats en un seul chiffre comparable."
    ],
    "keyPoints": [
      "VaR = un seuil de perte à un niveau de confiance sur un horizon temporel (par exemple 95 %, 1 jour).",
      "Elle indique la frontière des mauvais résultats — pas à quel point les pires sont réellement mauvais.",
      "Trois méthodes principales : simulation historique, paramétrique (variance-covariance), Monte-Carlo.",
      "Largement utilisée pour les règles de capital bancaire et les limites de risque des desks de trading, et largement critiquée."
    ],
    "formula": {
      "expression": "VaR paramétrique = z × σ × Valeur du portefeuille",
      "legend": "z = multiplicateur de confiance (1,645 pour 95 %, 2,33 pour 99 %) · σ = volatilité du rendement du portefeuille sur l'horizon",
      "note": "Cette forme paramétrique suppose des rendements normalement distribués — les marchés réels ont des queues plus épaisses que cela."
    },
    "example": {
      "scenario": "Un portefeuille de 1 000 000 € a une volatilité journalière des rendements (σ) de 1,2 %. Quelle est sa VaR à 1 jour, 95 % ?",
      "steps": [
        "z pour une confiance de 95 % ≈ 1,645.",
        "VaR = 1,645 × 1,2 % × 1 000 000 € ≈ 19 740 €.",
        "Interprétation : un mauvais jour normal (les ~5 % pires), attendez-vous à perdre jusqu'à environ 19 740 €.",
        "Sur les ~1 % pires jours (la queue au-delà de la VaR), les pertes peuvent être — et ont historiquement été — bien plus élevées que ce chiffre."
      ],
      "result": "La VaR donne un chiffre de risque net et comparable pour le reporting et les limites — mais par construction, elle ne dit rien de la gravité que peuvent atteindre les pertes au-delà du seuil. C'est exactement l'écart que l'Expected Shortfall est conçu pour combler."
    },
    "deepDive": [
      "La faiblesse la plus citée de la VaR est qu'elle n'est pas une mesure de risque « cohérente » — elle échoue à la sous-additivité, ce qui signifie que la VaR d'un portefeuille combiné peut, dans certains cas, dépasser la somme des VaR de ses composantes. Cela contredit toute l'intuition selon laquelle la diversification réduit le risque. Elle donne aussi une fausse impression de précision : une VaR à 95 % calculée sur deux ans de marchés calmes sous-estimera fortement le risque une fois qu'un changement de régime survient, car la fenêtre historique sur laquelle elle a été estimée n'a tout simplement jamais contenu le choc à venir.",
      "La crise financière de 2008 est l'exemple classique : les banques rapportaient des chiffres de VaR confortables construits sur la volatilité et les corrélations d'avant-crise, jusqu'à ce que les corrélations s'effondrent et que les pertes explosent bien au-delà de ce qu'aucun modèle de VaR n'estimait plausible. La leçon que les régulateurs ont finalement retenue fut d'exiger l'Expected Shortfall en complément ou à la place de la VaR pour les besoins de capital (Bâle III/FRTB), précisément parce que la VaR ignore la forme et la gravité de la queue au-delà de son propre seuil."
    ],
    "glossary": [
      {
        "term": "Niveau de confiance",
        "def": "La probabilité (par exemple 95 %, 99 %) que les pertes restent dans le seuil de la VaR."
      },
      {
        "term": "Horizon temporel",
        "def": "La période couverte par l'estimation de la VaR — communément 1 jour ou 10 jours."
      },
      {
        "term": "Backtesting",
        "def": "Vérifier à quelle fréquence les pertes réelles ont dépassé la VaR, pour valider le modèle."
      }
    ]
  },
  "expected-shortfall": {
    "title": "Expected Shortfall (CVaR)",
    "hook": "La VaR indique où commencent les mauvais jours. L'Expected Shortfall indique à quel point ils empirent une fois commencés.",
    "tldr": "L'Expected Shortfall (aussi appelé CVaR) est la perte moyenne dans les scénarios les plus défavorables au-delà du seuil de VaR — elle mesure la gravité de la queue, pas seulement où elle commence.",
    "definition": [
      "L'Expected Shortfall (ES), aussi connu sous le nom de Conditional Value at Risk (CVaR), répond à la question que la VaR laisse ouverte : sachant qu'une perte dépasse le seuil de VaR, quelle est son ampleur moyenne ? Là où une VaR à 95 % marque la frontière des 5 % pires résultats, l'Expected Shortfall à 95 % est la perte moyenne sur l'ensemble de ces 5 % pires — elle regarde au-delà de la frontière et dans la queue elle-même.",
      "Parce qu'il fait la moyenne sur toute la queue plutôt que de lire un seul point, l'Expected Shortfall est mathématiquement « cohérent » — contrairement à la VaR, il respecte toujours la diversification (combiner des portefeuilles n'augmente jamais l'ES au-delà de la somme de ses composantes) et il est sensible à l'ampleur des pires résultats, pas seulement à la fréquence à laquelle les pertes franchissent une ligne. C'est pourquoi la réglementation bancaire post-2008 (les règles FRTB de Bâle III) a fait basculer les calculs de capital de la VaR vers l'Expected Shortfall."
    ],
    "keyPoints": [
      "ES = la perte moyenne dans les X % pires résultats, pas seulement leur frontière.",
      "Aussi appelé Conditional VaR (CVaR) — « conditionnel au fait d'être dans la queue ».",
      "Mathématiquement cohérent : contrairement à la VaR, il récompense toujours la diversification.",
      "L'ES est toujours au moins aussi grand que la VaR au même niveau de confiance, puisqu'il fait la moyenne de la queue au-delà de celle-ci."
    ],
    "formula": {
      "expression": "ES₉₅ = perte moyenne des 5 % pires résultats",
      "legend": "Calculé en faisant la moyenne de toutes les pertes simulées/historiques dépassant le seuil VaR₉₅",
      "note": "Sous une distribution normale, ES₉₅ ≈ VaR₉₅ × 1,16 — mais les marchés réels à queues épaisses rendent souvent l'écart bien plus grand."
    },
    "example": {
      "scenario": "Même portefeuille de 1 000 000 € : VaR à 1 jour, 95 % ≈ 19 740 €. Une simulation historique des 5 % pires jours montre des pertes moyennes de 31 000 €. Que cela vous apprend-il ?",
      "steps": [
        "La VaR dit : 95 % des jours, vous ne perdrez pas plus d'environ 19 740 €.",
        "L'ES dit : sur les 5 % de jours où vous dépassez cette ligne, la perte moyenne est de 31 000 € — bien au-delà du chiffre de la VaR.",
        "L'écart entre 19 740 € et 31 000 € est exactement la sévérité de la queue que la VaR seule cache.",
        "Un gestionnaire de risque qui se fie uniquement à la VaR calibrerait positions et capital comme si 19 740 € était proche du pire cas — ce n'est pas le cas."
      ],
      "result": "L'Expected Shortfall révèle à quel point les mauvais jours peuvent être pires que ne le suggère le chiffre affiché de la VaR, ce qui explique précisément pourquoi c'est désormais la mesure privilégiée pour fixer les coussins de capital bancaire."
    },
    "deepDive": [
      "Le choix entre VaR et ES est en réalité un choix sur la question à laquelle on veut répondre. La VaR répond à « combien souvent » (fréquence des dépassements) ; l'ES répond à « combien » (sévérité une fois dépassé). Pour quiconque gère un risque catastrophique — la solvabilité d'une banque, la survie d'un fonds — c'est la sévérité qui tue réellement, donc l'ES est le chiffre le plus honnête même s'il demande plus de données et de rigueur de modélisation pour être estimé fiablement (sa nature de moyenne de queue le rend plus bruité à estimer à partir d'échantillons historiques limités que le centile unique de la VaR).",
      "Les deux mesures partagent une limitation plus profonde : elles ne valent que ce que valent les données et les hypothèses de distribution qui les alimentent. Un ES historique construit sur une décennie sans krach sous-estimera encore le risque du prochain krach. C'est la même leçon que pour la Volatilité et la VaR : aucune mesure de risque en un seul chiffre ne remplace les tests de résistance face à des scénarios qui ne se sont pas encore produits. L'ES réduit l'angle mort que la VaR laisse dans la queue, mais il n'élimine pas le problème plus fondamental que les marchés peuvent faire des choses que le passé récent ne vous a jamais montrés."
    ],
    "glossary": [
      {
        "term": "Conditional VaR (CVaR)",
        "def": "Un autre nom pour l'Expected Shortfall — la perte conditionnelle au fait d'être au-delà de la VaR."
      },
      {
        "term": "Mesure de risque cohérente",
        "def": "Une mesure qui satisfait des propriétés mathématiques (comme récompenser la diversification) que la VaR ne satisfait pas."
      },
      {
        "term": "Sévérité de la queue",
        "def": "L'ampleur des pertes une fois déjà dans les scénarios les plus défavorables, par opposition à leur fréquence."
      }
    ]
  },
  "hedge-fund": {
    "title": "Fonds spéculatif (hedge fund)",
    "hook": "Un fonds privé peu réglementé qui peut parier sur tout, partout — « couverture » de nom, souvent spéculation en pratique.",
    "tldr": "Un hedge fund est un fonds d'investissement privé et peu réglementé utilisant des stratégies flexibles (dont l'effet de levier et la vente à découvert) pour des clients fortunés et institutionnels.",
    "definition": [
      "Un hedge fund est un partenariat d'investissement privé ouvert uniquement aux investisseurs « qualifiés » (fortunés ou institutionnels), ce qui lui donne une liberté que les fonds communs de placement n'ont pas : il peut vendre à découvert, utiliser l'effet de levier, détenir des actifs illiquides, négocier des produits dérivés et concentrer ses paris. Le nom vient de l'idée originelle de « couvrir » (hedger) le risque de marché (positions longues/courtes pour être neutre au marché), mais les hedge funds modernes mènent une vaste gamme de stratégies — macro, arbitrage, activiste, décote — dont beaucoup relèvent de la pure spéculation. Le modèle est à commissions élevées : « 2 et 20 » signifiait 2 % de frais de gestion plus 20 % des profits, bien que les frais aient baissé.",
      "Les caractéristiques déterminantes sont la flexibilité et l'incitation. Le gérant peut aller partout et utiliser n'importe quel outil pour exprimer une vue, et la commission de performance aligne le gérant sur les rendements (avec un bémol : le « high watermark » signifie que les frais ne sont payés que sur les nouveaux profits, pas en récupérant les pertes passées). Le compromis pour l'investisseur est l'illiquidité (périodes de blocage, portes trimestrielles), l'opacité (on fait confiance aux valorisations du gérant), et le fait que la plupart des hedge funds, nets de frais, ont eu du mal à battre de simples portefeuilles actions/obligations — le fameux « rendement des hedge funds » s'est compressé à mesure que le secteur a grossi et que les inefficiences faciles ont été arbitrées."
    ],
    "keyPoints": [
      "Fonds privé peu réglementé pour investisseurs qualifiés — stratégies flexibles.",
      "Peut vendre à découvert, utiliser l'effet de levier, des produits dérivés, et détenir des positions illiquides ou concentrées.",
      "Modèle à frais élevés (historiquement 2 % + 20 % des profits, souvent avec un high watermark).",
      "La plupart ont eu du mal à battre de simples portefeuilles passifs nets de frais ces dernières années."
    ],
    "formula": {
      "expression": "Commission du gérant = 2 % × AUM + 20 % × Max(0, Profit − High watermark)",
      "legend": "AUM = actifs sous gestion · Profit = gain annuel · High watermark = pic historique",
      "note": "Le high watermark signifie que le gérant ne touche les 20 % que sur les nouveaux profits au-dessus du pic historique du fonds."
    },
    "example": {
      "scenario": "Un hedge fund gère 1 Md €, réalise 15 % dans une année où le marché a fait 12 %, avec des frais « 2 et 20 » et aucune perte antérieure à récupérer. Que gagne le gérant ?",
      "steps": [
        "Profit = 15 % × 1 Md € = 150 M €.",
        "Frais de gestion = 2 % × 1 Md € = 20 M €.",
        "Commission de performance = 20 % × 150 M € = 30 M €.",
        "L'investisseur touche net 150 − 20 − 30 = 100 M € → 10 % après frais, contre 12 % pour un fonds indiciel bon marché."
      ],
      "result": "Le fonds a battu le marché en brut mais a perdu en net, après frais. Un fonds indiciel rapportant 11,9 % net l'aurait battu — la barre du « talent » est haute une fois les frais comptés."
    },
    "deepDive": [
      "La tension centrale du secteur des hedge funds est l'écart entre la promesse affichée (rendements absolus en toutes circonstances, « décorrélés » des actions) et le résultat livré (des rendements qui se corrèlent aux actions dans les ventes massives et sont en retard en marché haussier). La proposition de valeur originale — des rendements stables quand les marchés chutent — est réelle pour quelques fonds ayant de véritables stratégies diversifiantes, mais beaucoup de fonds sont simplement des actions à effet de levier déguisées, vendant une protection anti-krach qui échoue précisément quand elle est nécessaire. Identifier à l'avance les véritables diversificateurs est le problème difficile, et les données montrent que la performance passée est un piètre prédicteur des résultats futurs.",
      "Le biais de survivance et de reporting dans les données des hedge funds fait paraître le secteur meilleur qu'il ne l'est. Les fonds qui échouent cessent de rapporter et disparaissent des indices, donc les moyennes publiées surestiment la réalité — un phénomène appelé « biais de survivance ». Ajoutez le biais de rétro-remplissage (les fonds ne commencent à rapporter qu'une fois qu'ils ont un bon historique) et le rendement publié des hedge funds peut être de plusieurs points de pourcentage supérieur à ce qu'un investisseur aléatoire a réellement reçu. La leçon pour les allocataires est de décompter le marketing et de tester la corrélation : un hedge fund qui protège dans le calme et saigne dans le chaos n'est pas une couverture, c'est un coût. Le rare fonds qui diversifie réellement mérite ses frais ; les nombreux qui ne le font pas ne les méritent pas."
    ],
    "glossary": [
      {
        "term": "2 et 20",
        "def": "Les frais classiques des hedge funds : 2 % de gestion + 20 % des profits — désormais souvent plus bas."
      },
      {
        "term": "High watermark",
        "def": "Des commissions de performance uniquement sur les profits au-dessus du pic historique du fonds — protège les investisseurs."
      },
      {
        "term": "Blocage / porte",
        "def": "Restrictions sur les retraits (mois/années) pour éviter une vente forcée en période de tension."
      }
    ]
  },
  "private-equity": {
    "title": "Capital-investissement",
    "hook": "Acheter des entreprises entières pour les redresser et les revendre — le métier long, endetté et illiquide de posséder des entreprises privées.",
    "tldr": "Le capital-investissement investit dans des entreprises privées (non cotées), souvent avec effet de levier (LBO), pour les améliorer sur plusieurs années et les revendre avec profit.",
    "definition": [
      "Les sociétés de capital-investissement (private equity, PE) lèvent des réserves de capital auprès d'institutions et d'investisseurs fortunés, puis les utilisent pour racheter des entreprises — parfois des entreprises publiques entières rendues privées, plus souvent des entreprises privées de taille moyenne. L'opération type est un rachat avec effet de levier (LBO) : acheter principalement avec de la dette, améliorer les opérations sur 4 à 7 ans (réduire les coûts, professionnaliser la gestion, accroître les marges, réaliser des acquisitions complémentaires), puis vendre ou introduire en bourse l'entreprise. L'argent des investisseurs est immobilisé pour toute la durée de vie du fonds (7 à 10 ans), échangeant liquidité et transparence contre la chance de rendements supérieurs issus d'une propriété illiquide et pratique.",
      "La revendication du PE est que la propriété privée libère les dirigeants de la pression trimestrielle des marchés publics, permettant une création de valeur à plus long terme ; sa critique est que les rendements proviennent largement du levier et de l'ingénierie financière plutôt que d'une véritable amélioration opérationnelle, et que la prime d'illiquidité et les valorisations lissées flattent la performance rapportée. La vérité varie selon les sociétés : les meilleures maisons de PE sont de véritables opérateurs qui bâtissent de meilleures entreprises ; les pires sont des ingénieurs financiers qui chargent les entreprises de dette, extraient des frais et laissent une coquille affaiblie. Les distinguer est le problème central de l'investisseur, et les données — comme pour les hedge funds — sont brouillées par des biais de survivance et de reporting des valorisations."
    ],
    "keyPoints": [
      "Rachète des entreprises privées (ou rend privées des entreprises cotées), souvent via un rachat avec effet de levier.",
      "Améliore l'entreprise sur 4 à 7 ans, puis sort (vente, IPO ou recapitalisation).",
      "Le capital des investisseurs est immobilisé pour les 7 à 10 ans de vie du fonds — illiquidité contre rendement supérieur.",
      "Les rendements combinent levier, amélioration opérationnelle et expansion du multiple — la qualité varie selon la société."
    ],
    "formula": {
      "expression": "Rendement des fonds propres = VE de sortie − Dette restante,  où VE ≈ EBITDA × Multiple de sortie",
      "legend": "VE de sortie = valeur d'entreprise à la vente · Dette restante = dette encore due · EBITDA × multiple = valorisation",
      "note": "Les rendements augmentent si l'EBITDA croît, si le multiple de sortie s'élargit, ou si la dette est remboursée — les trois leviers."
    },
    "example": {
      "scenario": "Un PE rachète une entreprise à 8× l'EBITDA (EBITDA 50 M € → VE 400 M €) avec 280 M € de dette / 120 M € de fonds propres. En 5 ans, l'EBITDA atteint 80 M € et ils vendent à 9×, avec une dette réduite à 220 M €. Fonds propres ?",
      "steps": [
        "VE de sortie = 9 × 80 M € = 720 M €.",
        "Fonds propres à la sortie = 720 − 220 = 500 M €, contre 120 M € investis → environ 4,2× sur 5 ans.",
        "Levier : la dette est passée de 280 M € à 220 M € grâce à la propre trésorerie de l'entreprise.",
        "L'expansion du multiple (8×→9×) et la croissance de l'EBITDA (50 M €→80 M €) ont fait le reste."
      ],
      "result": "Un rendement des fonds propres d'environ 4× issu d'une modeste amélioration de l'entreprise plus le levier. Inversez n'importe quel levier — l'EBITDA qui baisse, ou le multiple de sortie qui se contracte — et le rendement s'effondre, dette comprise."
    },
    "deepDive": [
      "Les rendements rapportés du PE bénéficient de pratiques de valorisation que les marchés publics n'autorisent pas. Les participations privées sont valorisées trimestriellement par le gérant (souvent avec lissage ou marques obsolètes), donc les rendements du PE paraissent plus stables et moins corrélés aux marchés publics qu'ils ne le sont réellement — le « blanchiment de volatilité » qui fait paraître la classe d'actifs offrant un rendement élevé pour un risque faible. Dans une véritable récession, les portefeuilles privés sont en retard sur les marchés publics pour la dépréciation, puis rattrapent plus tard à mesure que les marques rejoignent la réalité. Les allocataires qui se fient à la volatilité rapportée du PE sous-estiment le vrai risque et sur-allouent.",
      "La question distributive est plus aiguë pour le PE que pour la plupart des actifs. Le service de la dette et les coupes de coûts qui financent les rendements du PE proviennent souvent de la main-d'œuvre et de l'entreprise elle-même — moins d'emplois, moins de R&D, plus de fragilité financière. Une société de PE bien gérée crée une meilleure entreprise ; une mal gérée la dépèce. L'effet agrégé sur l'économie est contesté : le PE affirme qu'il rend les entreprises efficientes et productives ; les critiques affirment qu'il extrait de la valeur et charge un risque systémique. Pour l'investisseur commanditaire (LP), la décision est de savoir si un gérant (GP) donné a le savoir-faire opérationnel pour créer une valeur réelle ou se contente de récolter levier et frais — et la seule preuve honnête est l'historique de la société sur des cycles complets, net de tous les frais et ajusté des biais."
    ],
    "glossary": [
      {
        "term": "LBO",
        "def": "Rachat avec effet de levier — racheter une entreprise principalement avec de la dette ; l'opération signature du PE."
      },
      {
        "term": "Commanditaire (LP)",
        "def": "Les institutions/particuliers dont le capital finance les opérations de la société de PE."
      },
      {
        "term": "Carried interest",
        "def": "La part de profits de la société de PE (~20 %) — taxée favorablement, souvent de manière controversée."
      }
    ]
  },
  "venture-capital": {
    "title": "Capital-risque",
    "hook": "Financer les entreprises qui échouent pour la plupart, en espérant que celle qui gagne paie pour toutes les autres — l'investissement en loi de puissance dans sa forme la plus pure.",
    "tldr": "Le capital-risque fournit un financement en fonds propres à des startups en phase précoce à forte croissance en échange d'une participation, en pariant que les rares gagnants rentabilisent le fonds.",
    "definition": [
      "Le capital-risque (venture capital, VC) finance de jeunes entreprises trop risquées ou trop précoces pour des prêts bancaires ou les marchés publics, en échange de fonds propres. Les VC investissent à travers les étapes — amorçage, Série A, B, C — à mesure que la startup grandit, chaque tour achetant une part plus petite à une valorisation plus élevée si l'entreprise progresse. La structure économique est une loi de puissance : la plupart des paris échouent ou rapportent peu, quelques-uns atteignent l'équilibre ou réussissent modestement, et une poignée infime (la « licorne » qui passe de zéro à des milliards) rembourse le fonds entier et bien plus. L'art consiste à trouver la rare entreprise avec un immense marché et une vraie chance de le dominer, puis à l'aider à y arriver.",
      "Les rendements du VC sont portés par le petit nombre, pas la masse. Un fonds classique pourrait voir la moitié de ses paris échouer, un tiers rapporter modestement, et un ou deux rapporter 10 à 100×. Cela signifie que la discipline est l'opposé de la diversification : on ne peut pas obtenir de bons rendements en VC en moyennant de nombreux paris médiocres ; il faut détenir le rare gagnant extrême. Le corollaire est que le plus grand risque en VC n'est pas de financer une entreprise qui échoue (c'est attendu) mais de manquer celle qui réussit — l'« erreur d'omission » compte plus que l'« erreur de commission ». Cela façonne la pensée des VC : financer agressivement tout ce qui pourrait devenir immense, accepter que la plupart ne le deviendront pas."
    ],
    "keyPoints": [
      "Financement en fonds propres pour startups en phase précoce à forte croissance en échange d'une participation.",
      "Les rendements suivent une loi de puissance : la plupart des paris échouent, quelques gagnants rentabilisent le fonds.",
      "Investissement par étapes (amorçage → Séries A, B, C) à mesure que l'entreprise franchit des jalons.",
      "Le plus grand risque est de manquer le rare gagnant, pas de financer un perdant."
    ],
    "formula": {
      "expression": "Rendement du fonds ≈ Σ (Valeur de sortie_i × Participation_i) − Coûts",
      "legend": "Valeur de sortie_i = ce pour quoi l'entreprise i se vend/s'introduit en bourse · Participation_i = part du VC à la sortie",
      "note": "Un gagnant à 100× compense cinquante pertes totales — la loi de puissance qui définit cette classe d'actifs."
    },
    "example": {
      "scenario": "Un fonds de VC de 100 M € réalise 30 investissements. 25 échouent (perte), 4 rapportent environ 1×, et 1 rapporte 300 M € sur une participation de 3 M €. Résultat du fonds ?",
      "steps": [
        "25 échecs : environ 70 M € perdus (la plupart des participations disparues).",
        "4 modestes : environ 20 M € rendus sur environ 20 M € investis (capital rendu, gain minime).",
        "1 gagnant : participation de 3 M € → sortie à 300 M € (un 100×).",
        "Total rendu ≈ 70 M € (résidus des échecs) + 20 M € + 300 M € ≈ 320 M € sur 100 M € → environ 3,2×."
      ],
      "result": "Un gagnant à 100× a porté le fonds. Sans lui, le fonds rapporte environ 90 M € (une perte). Tout le modèle économique dépend de trouver la rare entreprise qui atteint un résultat immense."
    },
    "deepDive": [
      "Le modèle du capital-risque ne fonctionne que dans des marchés à résultats immenses — logiciels, internet, biotechnologie — où une seule entreprise peut atteindre des milliards de valeur. Un excellent restaurant ou cabinet de conseil, aussi bien géré soit-il, ne peut pas rentabiliser un fonds de VC, car son résultat est plafonné. C'est pourquoi le VC se concentre sur des marchés à dynamique « le gagnant rafle presque tout », effets de réseau et coûts marginaux proches de zéro : seulement là la loi de puissance peut payer. La question de l'investisseur n'est jamais « est-ce une bonne entreprise ? » mais « peut-elle devenir exceptionnellement grande ? » — et la plupart des bonnes entreprises, raisonnablement, ne rentabilisent pas un fonds, ce qui explique pourquoi le VC est l'exception, pas la règle, de la création d'entreprises.",
      "La compression récente des rendements du VC est une histoire structurelle. À mesure que davantage de capital poursuivait le même nombre de grandes entreprises, les valorisations ont grimpé sur le marché privé plus vite que les sorties, donc une entreprise qui rapportait autrefois 100× à une entrée de 10 M € a désormais besoin d'une entrée de 50 M € et d'une sortie proportionnellement plus grande pour faire de même. La loi de puissance tient toujours mais les prix d'entrée ont rendu les mathématiques plus difficiles — plus de capital par fonds, plus de dilution, moins de vraies licornes par rapport à l'argent qui les poursuit. Pour les LP, l'implication est que les rendements du VC se concentrent de plus en plus dans les fonds du quartile supérieur ayant le meilleur flux d'affaires ; le fonds de VC médian a eu du mal à battre les marchés publics, et la dispersion des résultats est plus large que dans presque toute autre classe d'actifs. Choisir le bon gérant de VC est le pari tout entier."
    ],
    "glossary": [
      {
        "term": "Loi de puissance",
        "def": "Une distribution où quelques résultats dominent — les mathématiques des rendements du VC."
      },
      {
        "term": "Licorne",
        "def": "Une startup privée valorisée au-dessus de 1 Md $ — le rare fonds-rentabilisateur que traquent les VC."
      },
      {
        "term": "Term sheet",
        "def": "Les termes de l'accord (valorisation, participation, droits) proposés pour un tour de financement."
      }
    ]
  },
  "balance-sheet": {
    "title": "Bilan",
    "hook": "La photographie financière — tout ce qu'une entreprise possède et doit, figé à un instant.",
    "tldr": "Un bilan est un instantané des actifs, passifs et fonds propres d'une entreprise à un moment donné. L'actif égale toujours le passif plus les fonds propres.",
    "definition": [
      "Le bilan est l'un des trois états financiers essentiels, et le seul qui soit un instantané à un instant donné plutôt qu'une période d'activité. Il liste ce qu'une entreprise possède (actifs) et doit (passifs), la différence constituant les fonds propres des actionnaires — la part des propriétaires. L'identité fondamentale le maintient cohérent : Actif = Passif + Fonds propres. Chaque transaction que l'entreprise effectue modifie deux éléments du bilan, le maintenant perpétuellement équilibré — d'où le nom. Il indique ce qu'est l'entreprise, financièrement, à cet instant précis.",
      "Les actifs se répartissent en courants (trésorerie, stocks, créances — convertibles en liquidités en moins d'un an) et non courants (immobilier, équipement, écarts d'acquisition). Les passifs se répartissent de la même façon : courants (fournisseurs, dette à court terme) et non courants (dette à long terme, retraites). La structure révèle comment l'entreprise est financée (fonds propres vs dette) et son degré de liquidité (actifs courants vs passifs courants — l'histoire du fonds de roulement). Lu avec le compte de résultat (comment elle a performé) et le tableau de flux de trésorerie (si le profit s'est transformé en liquidités), le bilan complète le portrait d'une entreprise."
    ],
    "keyPoints": [
      "Instantané à un instant donné : Actif = Passif + Fonds propres (toujours équilibré).",
      "La répartition courant vs non courant révèle la liquidité et la structure de financement.",
      "Fonds propres = créance résiduelle des propriétaires après paiement de toutes les dettes.",
      "À lire avec le compte de résultat et le tableau de flux de trésorerie pour une vue complète."
    ],
    "formula": {
      "expression": "Actif = Passif + Fonds propres",
      "legend": "Actif = ce que l'entreprise possède · Passif = ce qu'elle doit · Fonds propres = part résiduelle des propriétaires",
      "note": "Chaque transaction modifie deux postes, gardant le bilan équilibré — le fondement de la comptabilité en partie double."
    },
    "example": {
      "scenario": "Une boulangerie a 20 k€ d'équipement, 10 k€ de stocks, 5 k€ de trésorerie (actif 35 k€) ; elle doit 8 k€ à ses fournisseurs et 15 k€ à sa banque (passif 23 k€). Quels sont ses fonds propres ?",
      "steps": [
        "Actif total = 20 + 10 + 5 = 35 k€.",
        "Passif total = 8 + 15 = 23 k€.",
        "Fonds propres = 35 − 23 = 12 k€ — la part des propriétaires après paiement de toutes les dettes.",
        "Si la boulangerie vendait tout et remboursait toutes ses dettes, il resterait 12 k€ pour les propriétaires."
      ],
      "result": "Le bilan montre que la boulangerie est solvable avec 12 k€ de fonds propres. Si le passif dépassait l'actif, les fonds propres seraient négatifs — la boulangerie serait insolvable."
    },
    "deepDive": [
      "La plus grande limite du bilan est qu'il reflète des coûts, pas des valeurs. Les actifs sont pour la plupart enregistrés à ce que l'entreprise a payé (coût historique), moins l'amortissement — donc un immeuble acheté il y a des décennies peut figurer au bilan bien en dessous de sa valeur de marché, et une marque construite organiquement peut ne pas y apparaître du tout. Ce n'est que lorsqu'une entreprise est acquise que le « goodwill » (écart d'acquisition) capture la prime au-dessus de la valeur comptable, ce qui explique pourquoi les bilans des entreprises acquises paraissent plus riches que ceux des entreprises développées organiquement. Cela signifie que le bilan sous-estime systématiquement la valeur des entreprises légères en actifs, axées sur la marque ou détenues de longue date — la valeur comptable est souvent un mauvais indicateur de ce que vaut réellement une entreprise.",
      "Le lecteur avisé regarde au-delà des totaux vers la composition et la qualité. Les actifs sont-ils réels et recouvrables (ou les stocks sont-ils obsolètes, les créances irrécouvrables) ? La dette est-elle structurée pour correspondre aux actifs (actifs à long terme financés par une dette longue) ? Les fonds propres croissent-ils grâce aux bénéfices non distribués (une entreprise saine) ou diminuent-ils à cause des pertes et dividendes ? Le bilan seul ne répond pas à ces questions, mais il pose les bonnes — et associé au tableau de flux de trésorerie (qui révèle si le profit devient de la trésorerie), il expose la qualité des résultats et la santé financière d'une façon qu'aucun chiffre isolé ne peut faire. C'est la photographie statique ; les autres états sont le mouvement qui lui donne son sens."
    ],
    "glossary": [
      {
        "term": "Fonds propres",
        "def": "Part résiduelle des propriétaires — actif moins passif ; ce qui reste après paiement de toutes les dettes."
      },
      {
        "term": "Courant vs non courant",
        "def": "Moins d'un an vs plus long — répartitions qui révèlent la liquidité et la structure de financement."
      },
      {
        "term": "Comptabilité en partie double",
        "def": "Enregistrer chaque transaction avec deux écritures compensatoires, gardant le bilan équilibré."
      }
    ]
  },
  "income-statement": {
    "title": "Compte de résultat",
    "hook": "Le film de la performance — chiffre d'affaires en entrée, coûts en sortie, profit tout en bas, sur une période donnée.",
    "tldr": "Un compte de résultat (P&L) enregistre le chiffre d'affaires, les charges et le profit d'une entreprise sur une période, montrant comment l'entreprise a performé.",
    "definition": [
      "Le compte de résultat — aussi appelé compte de profits et pertes (P&L) — résume la performance d'une entreprise sur une période (un trimestre, une année). Il descend du chiffre d'affaires (la ligne du haut) à travers les coûts jusqu'au résultat net (la ligne du bas), montrant chaque étape : le chiffre d'affaires moins le coût des marchandises vendues donne la marge brute ; moins les charges d'exploitation donne le résultat d'exploitation (EBIT) ; moins les intérêts et les impôts donne le résultat net. Chaque sous-total répond à une question différente — la marge brute montre l'efficacité de production, la marge d'exploitation montre l'activité principale, la marge nette montre le profit final après tout.",
      "C'est le « film » par rapport à la « photographie » du bilan : là où le bilan montre ce qu'est l'entreprise, le compte de résultat montre ce qu'elle a fait. Mais il repose sur la comptabilité d'engagement, qui enregistre le chiffre d'affaires quand il est gagné et les coûts quand ils sont engagés — pas quand la trésorerie bouge. Ainsi une entreprise peut afficher un joli profit tout en saignant de la trésorerie (si les clients paient lentement), ou une perte tout en générant de la trésorerie (si elle a un important amortissement non monétaire). Lire le compte de résultat sans le tableau de flux de trésorerie, c'est ne voir que la moitié de l'histoire : le profit est une opinion, la trésorerie est un fait."
    ],
    "keyPoints": [
      "Enregistre le chiffre d'affaires, les charges et le profit sur une période (le P&L).",
      "Flux du haut vers le bas : chiffre d'affaires → marge brute → résultat d'exploitation (EBIT) → résultat net.",
      "Chaque sous-total (marge brute/d'exploitation/nette) répond à une question différente.",
      "Repose sur la comptabilité d'engagement — profit ≠ trésorerie ; à lire avec le tableau de flux de trésorerie."
    ],
    "formula": {
      "expression": "Résultat net = Chiffre d'affaires − COGS − Charges d'exploitation − Intérêts − Impôts",
      "legend": "COGS = coût des marchandises vendues · Charges d'exploitation = frais d'exploitation · Intérêts = coût de la dette · Impôts = impôt sur le revenu",
      "note": "EBIT = Chiffre d'affaires − COGS − Charges d'exploitation ; l'EBITDA rajoute l'amortissement et les dépréciations."
    },
    "example": {
      "scenario": "Une entreprise : chiffre d'affaires 1 000 k€, COGS 400 k€, charges d'exploitation 300 k€, intérêts 50 k€, impôts 75 k€. Quelles sont ses marges clés ?",
      "steps": [
        "Marge brute = 1 000 − 400 = 600 k€ → marge brute 60 %.",
        "EBIT = 600 − 300 = 300 k€ → marge d'exploitation 30 %.",
        "Avant impôt = 300 − 50 = 250 k€ → résultat net = 250 − 75 = 175 k€ → marge nette 17,5 %.",
        "Chaque marge montre une couche d'efficacité : production, exploitation, financement & fiscalité."
      ],
      "result": "Sur chaque 100 € de chiffre d'affaires, 60 € ont survécu à la production, 30 € ont survécu à l'exploitation, et 17,50 € ont atteint la ligne du bas. Les marges racontent l'histoire de là où va l'argent."
    },
    "deepDive": [
      "Le compte de résultat est le terrain de la gestion des résultats, car la comptabilité d'engagement laisse une marge de manœuvre à la direction. Quand le chiffre d'affaires est-il comptabilisé ? À quelle vitesse l'amortissement est-il pratiqué ? Les coûts sont-ils immobilisés (étalés sur plusieurs années) ou passés en charges (pris immédiatement) ? Les éléments ponctuels sont-ils « exceptionnels » (exclus des bénéfices « ajustés ») ? Chaque choix déplace le profit sans changer l'activité sous-jacente. Les entreprises orientent les analystes vers des bénéfices « ajustés » ou « non-GAAP » qui retirent tout ce qui est peu flatteur — et ces chiffres ajustés sont devenus de plus en plus généreux avec le temps. L'écart entre bénéfices publiés et ajustés est lui-même un signal : un écart large et persistant signifie souvent que la direction flatte les chiffres.",
      "La compétence plus profonde consiste à lire le compte de résultat comme une suite de questions, pas un chiffre unique. Le chiffre d'affaires croît-il en volume ou en prix ? La marge brute s'élargit-elle (pouvoir de tarification) ou se comprime-t-elle (concurrence/coûts) ? Les charges d'exploitation croissent-elles plus lentement que le chiffre d'affaires (levier opérationnel — le profit croît plus vite que les ventes) ou plus vite (l'entreprise devient moins efficiente) ? Les coûts d'intérêt augmentent-ils par rapport à l'EBIT (levier croissant, risque croissant) ? Le chiffre du résultat net est la destination ; les postes du compte de résultat sont le voyage, et ce voyage indique si le profit est durable ou emprunté au futur. Une entreprise dont le profit augmente grâce aux coupes de coûts et à l'ingénierie financière ressemble à une autre dont le profit augmente grâce à une vraie croissance — jusqu'à ce que le cycle se retourne."
    ],
    "glossary": [
      {
        "term": "Marge brute",
        "def": "Marge brute ÷ chiffre d'affaires — l'efficacité de production, avant les coûts d'exploitation."
      },
      {
        "term": "Marge d'exploitation",
        "def": "EBIT ÷ chiffre d'affaires — rentabilité de l'activité principale, avant financement et fiscalité."
      },
      {
        "term": "Comptabilité d'engagement",
        "def": "Enregistrer le chiffre d'affaires quand il est gagné et les coûts quand ils sont engagés — pourquoi profit ≠ trésorerie."
      }
    ]
  },
  "cryptocurrency": {
    "title": "Cryptomonnaie",
    "hook": "De l'argent numérique sans émetteur central — sécurisé par les mathématiques et un registre partagé, valorisé par la croyance.",
    "tldr": "Une cryptomonnaie est un actif numérique sécurisé par la cryptographie sur un registre distribué, sans banque centrale ni émetteur — le Bitcoin est l'original.",
    "definition": [
      "Une cryptomonnaie est un jeton numérique dont la propriété et les transferts sont enregistrés sur un registre distribué (une blockchain) sécurisé par la cryptographie, sans autorité centrale pour l'émettre ou le contrôler. L'innovation est la résolution du problème de « double dépense » sans intermédiaire de confiance : un réseau d'ordinateurs s'accorde sur qui possède quoi, rendant possible l'envoi de valeur numériquement sans banque. Le Bitcoin, créé en 2009, fut le premier ; des milliers d'autres (Ethereum, Solana, stablecoins) ont suivi, chacun avec des règles différentes d'émission, de vitesse et de programmabilité.",
      "Le débat économique porte sur ce qu'est réellement la crypto. Les optimistes y voient une réserve de valeur numérique à offre fixe (le Bitcoin comme « or numérique »), une couverture contre la dévalorisation du fiduciaire, et un système financier programmable (Ethereum). Les sceptiques notent que la plupart des cryptomonnaies ne génèrent aucun flux de trésorerie, donc leur prix repose entièrement sur la théorie du « plus grand idiot » — on ne profite que si quelqu'un paie plus cher plus tard. La volatilité est extrême, les manies spéculatives fréquentes, et les échecs (effondrements de plateformes d'échange, stablecoins qui perdent leur parité, arnaques) courants. Savoir si la crypto va mûrir en une composante réelle du système financier ou rester un pari spéculatif annexe est la question vivante, non résolue après une décennie et demie d'histoire."
    ],
    "keyPoints": [
      "Actif numérique sur un registre distribué, sécurisé par la cryptographie, sans émetteur central.",
      "Résout le transfert numérique sans intermédiaire de confiance (pas de double dépense).",
      "Le Bitcoin est l'original ; des milliers d'autres varient en émission, vitesse, programmabilité.",
      "La plupart ne génèrent aucun flux de trésorerie — le prix repose sur la croyance, pas sur les bénéfices."
    ],
    "formula": {
      "expression": "Pas de flux de trésorerie intrinsèque → valeur = consensus du marché (offre × croyance)",
      "legend": "Offre = règles du protocole (Bitcoin : plafonné à 21 M) · Croyance = ce que d'autres paieront plus tard",
      "note": "Contrairement à une action ou une obligation, il n'existe pas de flux de trésorerie actualisé pour ancrer une « juste valeur »."
    },
    "example": {
      "scenario": "Le Bitcoin a une offre plafonnée à 21 M de pièces ; vous en achetez une à 40 000 €. Qu'est-ce qui détermine si c'est « bon marché » ou « cher » ?",
      "steps": [
        "Il n'y a ni bénéfices ni flux de trésorerie à actualiser — aucun DCF ne donne une juste valeur.",
        "Le prix dépend de la demande : plus d'acheteurs que l'offre fixe ne peut satisfaire → le prix monte.",
        "Si la croyance s'affaiblit (réglementation, meilleure alternative, scandale), le prix peut chuter fortement.",
        "Comparez : une action valant 40 000 € est adossée à des bénéfices futurs actualisés ; un bitcoin est adossé à ce que d'autres accepteront de payer."
      ],
      "result": "La « valeur » d'une crypto est un pur phénomène de consensus — durable si la confiance tient, fragile si elle se brise. Il n'y a pas d'ancrage fondamental, seulement le pari collectif du marché."
    },
    "deepDive": [
      "L'argument optimiste honnête en faveur de la crypto est étroit mais réel. L'offre fixe du Bitcoin est un engagement crédible contre l'inflation — précieux dans les pays qui abusent de la planche à billets, où les citoyens utilisent déjà des dollars ou de la crypto pour échapper à la défaillance de la monnaie locale. Les blockchains publiques règlent des valeurs sans faire confiance à une banque ou un gouvernement, utile là où les institutions sont faibles. Et les chaînes programmables (Ethereum) permettent des primitives financières (prêt, négociation, tokenisation) qui pourraient réduire les coûts. Ce sont des usages réels, quoique naissants — mais ils ne représentent qu'une petite part du volume spéculatif qui domine la crypto aujourd'hui.",
      "L'argument pessimiste est le reflet inverse. La « décentralisation » est souvent illusoire — le minage/la validation se concentrent, les plateformes d'échange agissent comme des banques non réglementées (et échouent comme elles, avec des pertes clients), et les systèmes « sans confiance » réintroduisent des intermédiaires de confiance dès qu'ils touchent le monde réel. L'offre fixe qui fait du Bitcoin une « monnaie dure » en fait aussi un mauvais moyen d'échange (déflationniste, thésaurisé) et une mauvaise unité de compte (extrêmement volatile). Et le coût énergétique de la preuve de travail est énorme pour la valeur délivrée. La synthèse à laquelle parviennent la plupart des observateurs raisonnables : la crypto contient une innovation réelle mais est actuellement 90 % spéculation et 10 % utilité ; savoir si ce ratio s'inverse est la question des prochaines décennies, et la réponse n'est pas encore connue."
    ],
    "glossary": [
      {
        "term": "Blockchain",
        "def": "Le registre distribué qui enregistre la propriété des cryptomonnaies — la technologie sous-jacente."
      },
      {
        "term": "Stablecoin",
        "def": "Une crypto adossée à un actif stable (généralement le dollar) — un pont vers la valeur quotidienne."
      },
      {
        "term": "Preuve de travail / preuve d'enjeu",
        "def": "Les deux principales méthodes de sécurisation d'un réseau crypto — énergivore vs capital-intensif."
      }
    ]
  },
  "blockchain": {
    "title": "Blockchain",
    "hook": "Un registre que tout le monde partage et que personne ne contrôle — la technologie derrière la crypto, et une possible colonne vertébrale pour la finance elle-même.",
    "tldr": "Une blockchain est un registre partagé, en ajout seul, répliqué sur de nombreux ordinateurs et sécurisé par la cryptographie, enregistrant des transactions sans autorité centrale.",
    "definition": [
      "Une blockchain est une base de données avec trois propriétés particulières : elle est distribuée (copiée sur de nombreux ordinateurs, donc aucune partie unique ne la contrôle), en ajout seul (les enregistrements peuvent être ajoutés mais pas modifiés, rendant l'historique visiblement inviolable), et sécurisée par cryptographie (chaque bloc d'enregistrements est mathématiquement lié au précédent, donc altérer tout enregistrement passé brise la chaîne de façon visible). Ensemble, ces propriétés permettent à un réseau d'inconnus de s'accorder sur une vérité partagée — qui possède quoi, qui a payé qui — sans se faire confiance mutuellement ni faire confiance à un arbitre central. C'est l'innovation : le consensus sans autorité.",
      "La technologie sous-tend toutes les cryptomonnaies, mais son potentiel est plus large. Tout système qui repose actuellement sur un intermédiaire de confiance pour tenir des registres — règlement de titres, traçabilité de la chaîne d'approvisionnement, registres de propriété, identité — pourrait en principe fonctionner sur un registre partagé, avec un règlement plus rapide et moins d'intermédiaires. La réalité est plus difficile : les blockchains sont plus lentes et plus coûteuses que les bases de données centralisées, la prétention « sans confiance » réintroduit souvent de la confiance en périphérie, et la plupart des expérimentations en entreprise ont montré qu'une base de données traditionnelle bien gérée résout plus facilement la plupart des problèmes. La technologie est réelle et parfois utile ; la révolution prend bien plus de temps que ne le promettait le battage médiatique."
    ],
    "keyPoints": [
      "Registre distribué, en ajout seul, lié par cryptographie — consensus sans autorité centrale.",
      "Permet à des inconnus de s'accorder sur une vérité partagée sans se faire confiance mutuellement.",
      "Sous-tend toutes les cryptomonnaies ; potentiellement utile pour le règlement, la traçabilité, les registres.",
      "Plus lente et plus coûteuse que les bases de données centralisées — la révolution est plus lente que le battage médiatique."
    ],
    "formula": {
      "expression": "Hachage du bloc = Hachage(hachage précédent + transactions + nonce)",
      "legend": "Hachage = empreinte cryptographique · hachage précédent = relie les blocs · nonce = valeur rendant le hachage valide (preuve de travail)",
      "note": "Modifier toute transaction passée change son hachage, brisant tous les blocs ultérieurs — l'inviolabilité."
    },
    "example": {
      "scenario": "Alice envoie 1 bitcoin à Bob. Comment la blockchain enregistre-t-elle et protège-t-elle cela sans banque ?",
      "steps": [
        "La transaction est diffusée au réseau de nœuds.",
        "Les mineurs/validateurs l'incluent dans un nouveau bloc et s'affrontent pour produire un hachage valide.",
        "Le bloc gagnant est ajouté à la chaîne, lié au hachage du bloc précédent.",
        "Désormais chaque nœud a le même enregistrement ; pour l'altérer, un attaquant devrait refaire tout le travail ultérieur — un coût prohibitif."
      ],
      "result": "Aucune banque n'a approuvé ni enregistré le transfert — le réseau l'a fait, par consensus. La cryptographie rend l'historique effectivement immuable, ce qui rend possible le transfert sans confiance."
    },
    "deepDive": [
      "Le fameux « trilemme de la blockchain » saisit le défi d'ingénierie : une blockchain ne peut avoir au maximum que deux propriétés parmi décentralisation, sécurité et scalabilité. Le Bitcoin a choisi décentralisation et sécurité au prix de la vitesse (quelques transactions par seconde) ; de nombreuses chaînes plus récentes sacrifient une part de décentralisation pour la vitesse. Aucune n'a résolu les trois à la fois, ce qui explique pourquoi les blockchains restent plus lentes et plus coûteuses que les systèmes centralisés qu'elles visent à remplacer — et pourquoi, pour la plupart des tenues de registres ordinaires, une base de données traditionnelle reste le meilleur outil. Les véritables cas d'usage sont ceux où l'absence d'intermédiaire de confiance compte plus que le coût en vitesse.",
      "La question plus profonde pour la finance est de savoir si les blockchains améliorent le règlement ou le réorganisent simplement. Aujourd'hui, les titres se règlent sur plusieurs jours à travers une chaîne de dépositaires et de chambres de compensation ; une blockchain pourrait, en principe, régler en quelques minutes avec une livraison contre paiement atomique et bien moins d'intermédiaires. Les banques centrales et les bourses expérimentent activement (obligations tokenisées, monnaies numériques de banque centrale, « règlement atomique »). La promesse est réelle — un règlement plus rapide, moins coûteux, moins fragmenté — mais la migration de milliers de milliards de flux quotidiens vers de nouveaux rails est un projet générationnel, et le système existant, malgré toute sa complexité, fonctionne et inspire confiance. La blockchain en finance est moins une question de possibilité que de rythme : la technologie peut le faire, mais le système financier avance à la vitesse de la confiance et de la réglementation, pas du code."
    ],
    "glossary": [
      {
        "term": "Registre distribué",
        "def": "Une base de données répliquée sur de nombreux nœuds — le concept général, dont la blockchain est un type."
      },
      {
        "term": "Hachage",
        "def": "Une empreinte cryptographique de données — le lien qui rend une blockchain inviolable de façon visible."
      },
      {
        "term": "Mécanisme de consensus",
        "def": "Comment les nœuds s'accordent sur le bloc suivant — preuve de travail, preuve d'enjeu, etc."
      }
    ]
  },
  "mortgage": {
    "title": "Prêt hypothécaire",
    "hook": "Le plus gros emprunt que la plupart des gens signeront jamais — et le plus gros pari à effet de levier qu'ils feront jamais.",
    "tldr": "Un prêt hypothécaire est un emprunt garanti par un bien immobilier : vous empruntez la majeure partie du prix du bien, apportez le reste en fonds propres, et remboursez sur plusieurs décennies — la maison servant elle-même de garantie en cas de défaut de paiement.",
    "definition": [
      "Un prêt hypothécaire est un emprunt à long terme utilisé pour acheter un bien immobilier, où le bien lui-même garantit la dette. Si l'emprunteur cesse de payer, le prêteur peut saisir le bien — le prendre et le vendre pour récupérer les sommes dues. Parce que le prêt est garanti, les taux hypothécaires sont généralement bien inférieurs à ceux d'une dette non garantie comme les cartes de crédit, et les durées s'étendent sur 15 à 30 ans pour maintenir des mensualités supportables au regard du montant emprunté.",
      "Les acheteurs paient rarement 100% comptant : ils versent un apport personnel (l'acompte) et empruntent le reste. Le rapport entre le montant emprunté et la valeur du bien est le ratio prêt/valeur (LTV), et il détermine presque tout le reste — le taux d'intérêt proposé, l'obligation ou non de souscrire une assurance emprunteur, et la marge de sécurité dont dispose l'acheteur si les prix baissent. Un prêt hypothécaire revient, en pratique, à utiliser l'effet de levier pour acheter un actif : les gains et les pertes sur le bien sont amplifiés par rapport à la mise de fonds propre de l'acheteur."
    ],
    "keyPoints": [
      "Le bien immobilier sert de garantie : suffisamment d'impayés et le prêteur peut saisir puis vendre le bien.",
      "Ratio prêt/valeur (LTV) = montant emprunté ÷ valeur du bien ; un LTV plus faible donne généralement un meilleur taux et dispense d'assurance obligatoire.",
      "Les prêts à taux fixe verrouillent le taux pour toute la durée ; les prêts à taux variable/ajustable se réajustent périodiquement selon le marché.",
      "Comme un prêt hypothécaire est un effet de levier, une baisse de 10% de la valeur du bien peut effacer plus de 50% des fonds propres de l'acheteur s'il n'a apporté que 20%."
    ],
    "formula": {
      "expression": "LTV = Montant emprunté ÷ Valeur du bien",
      "legend": "LTV = ratio prêt/valeur, exprimé en pourcentage",
      "note": "La plupart des prêteurs exigent une assurance emprunteur privée (équivalent français : assurance de prêt) lorsque le LTV dépasse 80% — elle protège le prêteur, pas l'emprunteur, jusqu'à ce que suffisamment de fonds propres se soient constitués."
    },
    "example": {
      "scenario": "Vous achetez une maison à 300 000 € avec un apport de 30 000 € (10%), en finançant 270 000 € sur 30 ans à 4,5%.",
      "steps": [
        "LTV = 270 000 ÷ 300 000 = 90% — au-dessus du seuil de 80%, le prêteur exige donc une assurance emprunteur.",
        "Mensualité (capital + intérêts) sur 270 000 € à 4,5% sur 360 mois ≈ 1 368 €.",
        "L'assurance emprunteur, à environ 0,5%/an du capital restant dû, ajoute ≈ 112,50 €/mois tant que le LTV reste au-dessus de 80%.",
        "Une fois le capital restant dû tombé à 240 000 € (LTV = 80%) — grâce au remboursement, à des versements supplémentaires ou à la hausse des prix — l'assurance disparaît, ramenant le coût mensuel à ≈ 1 368 €."
      ],
      "result": "Le coût total démarre près de 1 480 €/mois et retombe à 1 368 €/mois une fois le seuil des 80% de LTV franchi — le même prêt devient structurellement moins cher à mesure que votre part de fonds propres augmente."
    },
    "deepDive": [
      "Le choix entre taux fixe et taux variable est en réalité un pari sur la direction des taux et sur la durée pendant laquelle vous conserverez le prêt. Un taux fixe échange un taux de départ (généralement) plus élevé contre une certitude totale — utile si vous comptez rester pour toute la durée du prêt ou si les taux risquent de monter. Un taux variable démarre souvent moins cher mais transfère le risque de taux à l'emprunteur ; cela peut être pertinent si vous prévoyez de vendre ou de renégocier avant le premier ajustement, mais c'est un pari, pas une remise gratuite. Les prêteurs ne rendent service à personne avec l'une ou l'autre option — ils tarifient un risque qu'ils ne veulent pas porter eux-mêmes.",
      "Un débat fréquent et souvent mal posé est : « faut-il rembourser le prêt par anticipation ou investir l'argent disponible ? » La comparaison honnête oppose le taux d'intérêt après impôt du prêt au rendement attendu après impôt d'un placement, ajusté du risque : rembourser un prêt à 4,5% garantit un rendement de 4,5%, tandis qu'investir en actions offre un rendement attendu plus élevé mais avec une réelle volatilité et aucune garantie. Il n'existe pas de réponse universelle — cela dépend du taux, des autres dettes de l'emprunteur, de son épargne de précaution, et de sa tolérance à un patrimoine net irrégulier plutôt qu'à une maison entièrement payée. Ce qui se justifie rarement, en revanche, c'est de conserver un prêt à taux élevé tout en gardant des liquidités inactives rapportant moins que ce que coûte le prêt."
    ],
    "glossary": [
      {
        "term": "Apport personnel",
        "def": "Le montant en liquide qu'un acheteur verse d'avance sur le prix d'achat, réduisant d'autant le prêt nécessaire."
      },
      {
        "term": "Saisie immobilière",
        "def": "La procédure juridique par laquelle le prêteur s'approprie et vend le bien après des impayés prolongés."
      },
      {
        "term": "Fonds propres (immobilier)",
        "def": "La part de la valeur d'un bien réellement détenue par le propriétaire : la valeur moins le capital restant dû."
      }
    ]
  },
  "retirement-accounts": {
    "title": "Comptes de retraite",
    "hook": "Un compte d'investissement classique paie des impôts ; un compte de retraite, presque pas — même marché, résultat très différent.",
    "tldr": "Les comptes de retraite sont des enveloppes fiscalement avantageuses pour l'épargne de long terme — l'argent y fructifie en franchise d'impôt ou avec un report d'imposition, ce qui, par capitalisation, aboutit sur plusieurs décennies à un solde nettement plus élevé qu'un compte imposable classique.",
    "definition": [
      "Un compte de retraite n'est pas un placement en soi — c'est un statut fiscal particulier qui enveloppe des placements ordinaires comme des actions, des obligations ou des fonds. Les États créent ces enveloppes (401(k) et IRA aux États-Unis, PER en France, et des dispositifs similaires ailleurs) pour encourager l'épargne de long terme, généralement selon l'un de deux régimes fiscaux : l'imposition différée (les versements réduisent le revenu imposable dès maintenant, et versements comme gains ne sont taxés qu'au retrait, à la retraite) ou la croissance exonérée (les versements sont effectués avec de l'argent déjà taxé, mais les gains et les retraits sont exonérés d'impôt). Dans les deux cas, l'argent placé est protégé d'une imposition chaque année, ce qui est normalement le cas sur un compte-titres ordinaire.",
      "La contrepartie, c'est l'accès : ces comptes limitent en général les retraits avant un âge fixé (souvent autour de 60-65 ans), avec des pénalités en cas de retrait anticipé, précisément parce que l'avantage fiscal est une contrepartie à une épargne retraite de long terme, pas à une liquidité disponible à tout moment. De nombreux employeurs ajoutent aussi un abondement — des versements supplémentaires en plus des cotisations propres du salarié, jusqu'à un certain plafond — ce qui se rapproche le plus, en finance personnelle, d'un rendement garanti et immédiat."
    ],
    "keyPoints": [
      "Les comptes à imposition différée font économiser de l'impôt maintenant et sont taxés plus tard ; les comptes à croissance exonérée (type Roth) sont taxés maintenant et fructifient ensuite sans impôt pour toujours.",
      "L'abondement de l'employeur est en pratique de l'argent gratuit et un rendement immédiat garanti — il faut prioriser la captation de l'abondement maximal avant d'investir ailleurs.",
      "Les plafonds de versement et les pénalités de retrait anticipé existent parce que l'avantage fiscal est conçu pour la retraite, pas pour l'épargne de court terme.",
      "Ne pas payer d'impôt chaque année sur les gains permet à l'ensemble du solde de se capitaliser, et non seulement la part nette d'impôt — l'écart avec un compte imposable se creuse chaque année."
    ],
    "formula": {
      "expression": "VF(imposition différée) = P(1+r)ⁿ vs. VF(imposable) = P(1+r(1−t))ⁿ",
      "legend": "P = versement · r = rendement annuel · n = nombre d'années · t = taux marginal d'imposition appliqué chaque année sur un compte imposable",
      "note": "Ceci isole le pur effet de capitalisation lié à l'absence d'imposition annuelle ; un compte à imposition différée devra tout de même acquitter l'impôt au retrait, ce qu'une comparaison plus complète doit déduire."
    },
    "example": {
      "scenario": "Vous versez 6 000 €/an pendant 30 ans, avec un rendement annuel moyen de 7%, dans une tranche marginale d'imposition de 30%.",
      "steps": [
        "Compte à imposition différée (fructifie au plein taux de 7% chaque année) : VF = 6 000 × [(1,07³⁰ − 1) / 0,07] ≈ 6 000 × 94,46 ≈ 566 800 €.",
        "Compte imposable équivalent (gains annuels taxés à 30%, donc croissance effective de 7% × 0,70 = 4,9%) : VF = 6 000 × [(1,049³⁰ − 1) / 0,049] ≈ 6 000 × 65,37 ≈ 392 200 €.",
        "Écart dû au seul report d'imposition ≈ 174 600 € — de l'argent qui n'a jamais quitté le compte pour être taxé en cours de route.",
        "Les retraits du compte à imposition différée seront tout de même soumis à l'impôt sur le revenu à terme, donc l'avantage réel est inférieur à 174 600 € — mais comme l'ensemble du solde s'est capitalisé pendant 30 ans, le report l'emporte dans presque tous les scénarios réalistes."
      ],
      "result": "Mettre les gains à l'abri de l'imposition annuelle transforme la même habitude de 6 000 €/an en un solde nettement plus élevé — c'est l'enveloppe fiscale, et non un choix de placement plus astucieux, qui explique l'essentiel de la différence."
    },
    "deepDive": [
      "Le choix entre imposition différée (type traditionnel) et exonération (type Roth) — payer l'impôt maintenant ou plus tard — est fondamentalement un pari sur votre future tranche d'imposition. Si vous anticipez une tranche plus basse à la retraite que pendant votre vie active, différer l'impôt (type traditionnel) l'emporte. Si vous anticipez des taux similaires ou plus élevés plus tard — un cas fréquent pour les jeunes épargnants en début de carrière, ou si les taux d'imposition augmentent globalement — payer l'impôt maintenant pendant que votre tranche est basse (type Roth) peut s'avérer plus avantageux, et évite aussi des retraits obligatoires plus tard. Comme personne ne peut prédire avec certitude sa future tranche d'imposition ni la politique fiscale future de l'État, détenir un mélange des deux types de comptes est un arbitrage raisonnable, pas de l'indécision.",
      "L'autre risque sous-estimé se situe à l'approche de la retraite elle-même : le risque de séquence des rendements. Un krach boursier survenant l'année précédant votre départ à la retraite, combiné au début des retraits, peut fragiliser durablement un portefeuille d'une manière que le même krach en milieu de carrière ne ferait pas — parce que vous vendez alors des actifs dépréciés pour financer vos dépenses courantes au lieu de les acheter à bas prix. C'est pourquoi les trajectoires de désensibilisation vers la retraite déplacent progressivement l'allocation vers les obligations et les liquidités à l'approche de la retraite : non parce que les obligations surperforment, mais parce qu'un petit coussin stable élimine le besoin de vendre des actions au pire moment possible."
    ],
    "glossary": [
      {
        "term": "Abondement de l'employeur",
        "def": "Les versements supplémentaires qu'un employeur ajoute en complément des cotisations propres du salarié, jusqu'à un plafond fixé — un rendement garanti et immédiat en pratique."
      },
      {
        "term": "Acquisition des droits (vesting)",
        "def": "Le calendrier selon lequel les sommes versées par l'employeur deviennent pleinement et définitivement la propriété du salarié."
      },
      {
        "term": "Retrait minimum obligatoire",
        "def": "Un retrait minimal imposé par certains comptes à imposition différée à partir d'un certain âge, pour garantir que l'État finisse par percevoir l'impôt."
      }
    ]
  },
  "insurance": {
    "title": "Assurance",
    "hook": "Vous n'achetez pas une bonne affaire en souscrivant une assurance — vous achetez de la certitude, et la certitude a un prix.",
    "tldr": "L'assurance mutualise les primes modestes et certaines d'un grand nombre de personnes pour couvrir les pertes rares mais importantes que l'une d'entre elles pourrait subir — elle échange un coût faible et garanti contre une protection face à une perte catastrophique.",
    "definition": [
      "L'assurance fonctionne grâce à la loi des grands nombres : personne ne peut prédire si une maison en particulier brûlera cette année, mais un assureur couvrant un million de maisons peut prévoir le nombre total d'incendies avec une réelle précision. Cette prévisibilité permet à l'assureur de collecter auprès de chacun une prime modeste et calculable, et d'utiliser le fonds mutualisé pour indemniser intégralement les rares malchanceux qui subissent un sinistre. Individuellement, souscrire une assurance est presque toujours un pari perdant en termes de pure espérance de gain — l'assureur intègre ses propres coûts et sa marge — mais c'est précisément le but : vous payez pour éliminer une faible probabilité d'une perte que vous ne pourriez pas assumer, pas pour gagner de l'argent.",
      "C'est pourquoi la bonne règle en matière d'assurance personnelle est « assurez les pertes que vous ne pouvez pas absorber, auto-assurez celles que vous pouvez ». Un écran de téléphone brisé est agaçant mais surmontable sans assurance ; un incendie de maison, une maladie grave ou un procès après un accident de voiture peuvent être financièrement ruineux. Les franchises existent pour la même raison, côté assureur : faire absorber au souscripteur la première tranche, faible et prévisible, de toute perte supprime le coût administratif du traitement des petits sinistres et maintient des primes plus basses pour tout le monde."
    ],
    "keyPoints": [
      "Les primes sont tarifées au-dessus de la perte attendue « équitable » car les assureurs doivent couvrir la gestion des sinistres, le coût du capital et leur marge — l'assurance est délibérément à espérance de gain négative pour l'acheteur.",
      "Antisélection : les personnes qui se savent plus à risque sont plus enclines à souscrire une couverture, ce qui pousse les assureurs vers des examens médicaux, des relevés de conduite et d'autres vérifications de souscription.",
      "Aléa moral : être assuré peut en soi modifier le comportement (conduire moins prudemment, retarder l'entretien), c'est pourquoi les franchises et la coassurance laissent une part du risque au souscripteur.",
      "Le bon niveau d'assurance dépend de ce que vous ne pouvez pas vous permettre de perdre, pas de ce qui fait peur — l'assurance existe pour les risques catastrophiques et peu probables."
    ],
    "formula": {
      "expression": "Prime ≈ (Probabilité de sinistre × Sévérité moyenne du sinistre) × (1 + Coefficient de chargement)",
      "legend": "Probabilité × sévérité = la prime « pure » ou actuariellement équitable · Coefficient de chargement = majoration pour les frais de gestion, le coût du capital et la marge",
      "note": "La prime pure correspond à ce que l'assureur s'attend à verser en moyenne ; le chargement explique pourquoi souscrire une assurance n'est pas, et n'est pas censé être, à espérance de gain positive pour l'acheteur."
    },
    "example": {
      "scenario": "Un assureur habitation estime une probabilité annuelle de sinistre de 2%, avec une sévérité moyenne de 150 000 €, et applique un coefficient de chargement de 50%.",
      "steps": [
        "Estimer les paramètres : probabilité de sinistre = 2% par an, sévérité moyenne = 150 000 €.",
        "Prime pure (actuariellement équitable) = 0,02 × 150 000 = 3 000 €/an.",
        "Appliquer le chargement pour la gestion des sinistres, le marketing, les réserves de capital et la marge : 3 000 € × 1,50 = 4 500 €/an facturés au souscripteur.",
        "Du point de vue de l'acheteur : payer 4 500 € pour couvrir un risque dont le coût attendu n'est que de 3 000 € ressemble à une « perte » moyenne de 1 500 €/an — mais l'alternative est une probabilité de 2% de subir une perte inabordable de 150 000 € sans aucun coussin."
      ],
      "result": "L'écart de 1 500 € entre la prime équitable et le prix facturé est le coût du transfert hors de votre propre bilan d'un risque catastrophique et peu probable — une mauvaise affaire en espérance, et une bonne affaire en pratique."
    },
    "deepDive": [
      "L'antisélection et l'aléa moral sont les deux forces contre lesquelles les assureurs luttent le plus, et ce sont toutes deux des problèmes d'information. L'antisélection survient avant la souscription : les personnes les plus enclines à souscrire une assurance-vie ou santé sont de manière disproportionnée celles qui se savent, en privé, plus à risque, ce qui fausserait la tarification de l'assureur si rien n'était fait — d'où les examens médicaux, les relevés de conduite et les déclarations de statut fumeur. L'aléa moral survient après la souscription : une fois la perte couverte, l'assuré a moins intérêt à la prévenir (laisser une voiture non verrouillée, négliger l'entretien), c'est pourquoi les assureurs font porter une partie du risque au souscripteur via les franchises, les pourcentages de coassurance et les bonus de non-sinistre plutôt que de couvrir chaque euro de chaque perte.",
      "Un point plus subtil est que l'assurance et l'épargne de précaution remplissent, au fond, la même fonction — absorber un choc sans dérailler ses finances — mais elles couvrent des plages de sévérité différentes. L'épargne de précaution est le bon outil pour les perturbations fréquentes, modérées et globalement prévisibles en agrégat (une perte d'emploi, une réparation automobile, un appareil ménager en panne) ; l'assurance est le bon outil pour les événements rares mais potentiellement ruineux (un incendie de maison, un procès en responsabilité civile, une maladie grave). Souscrire une assurance pour de petits coûts prévisibles — les garanties étendues sur des appareils bon marché en sont l'exemple classique — inverse cette logique : vous payez des frais de chargement récurrents pour assurer une perte qu'une épargne de précaution modeste pourrait absorber directement, ce qui explique pourquoi cette catégorie d'assurance est systématiquement rentable pour le vendeur et systématiquement peu avantageuse pour l'acheteur."
    ],
    "glossary": [
      {
        "term": "Franchise",
        "def": "Le montant que le souscripteur paie de sa poche avant que l'assureur ne prenne en charge le reste d'un sinistre."
      },
      {
        "term": "Souscription",
        "def": "Le processus par lequel l'assureur évalue le risque d'un candidat pour décider de le couvrir ou non, et à quel prix."
      },
      {
        "term": "Prime",
        "def": "Le montant que le souscripteur verse, généralement à intervalles réguliers, pour maintenir un contrat d'assurance actif."
      }
    ]
  },
  "monetary-policy": {
    "title": "Politique monétaire",
    "hook": "Une poignée de membres d'un comité déplace un seul chiffre — le taux d'intérêt — et cela se répercute sur chaque crédit immobilier, chaque prêt aux entreprises et chaque valorisation boursière de l'économie.",
    "tldr": "La politique monétaire est l'utilisation par une banque centrale des taux d'intérêt et de la masse monétaire pour maintenir l'inflation basse et l'économie stable.",
    "definition": [
      "La politique monétaire est la manière dont une banque centrale (la Réserve fédérale, la BCE, la Banque d'Angleterre) gère l'économie en contrôlant le prix et la quantité de monnaie. Le principal levier est le taux d'intérêt directeur à court terme : le relever rend l'emprunt plus coûteux, ce qui ralentit les dépenses et l'investissement et refroidit l'inflation ; le baisser rend l'emprunt moins cher, ce qui relance les dépenses et l'investissement et soutient la croissance et l'emploi. La plupart des banques centrales visent un taux d'inflation précis (généralement autour de 2 %) et ajustent leurs taux pour y ramener l'économie.",
      "Lorsque les taux seuls ne suffisent plus — c'est ce qui s'est le plus nettement produit lors de la crise financière de 2008 et de la pandémie de 2020, alors que les taux directeurs étaient déjà proches de zéro — les banques centrales recourent à des outils non conventionnels comme l'assouplissement quantitatif (quantitative easing, QE) : l'achat massif d'obligations pour injecter directement de l'argent dans le système financier et faire baisser les coûts d'emprunt à long terme. La politique monétaire agit avec un décalage de plusieurs mois, ce qui la rend difficile à mener : une banque centrale doit agir en fonction de prévisions sur l'évolution future de l'inflation et de la croissance, et non seulement sur leur niveau actuel, et elle peut se tromper lourdement sur ce calendrier, dans un sens comme dans l'autre."
    ],
    "keyPoints": [
      "Le principal outil est le taux d'intérêt directeur à court terme : le relever pour refroidir l'inflation, le baisser pour soutenir la croissance.",
      "La plupart des banques centrales visent une inflation d'environ 2 % et calibrent leur politique en conséquence.",
      "L'assouplissement quantitatif (achats massifs d'obligations) est l'outil de secours lorsque les taux atteignent zéro.",
      "La politique agit avec un long décalage (souvent 12 à 18 mois), ce qui oblige les banques centrales à agir sur la base de prévisions, pas seulement des données actuelles."
    ],
    "formula": {
      "expression": "Taux d'intérêt réel ≈ Taux d'intérêt nominal − Taux d'inflation",
      "legend": "Taux nominal = le taux affiché · Taux d'inflation = rythme de hausse des prix · Taux réel = rendement en pouvoir d'achat effectif",
      "note": "Ce qui freine ou stimule réellement l'économie, c'est le taux réel, pas le taux nominal — un taux de 5 % avec une inflation à 6 % reste stimulant."
    },
    "example": {
      "scenario": "L'inflation atteint 6 %, bien au-delà de l'objectif de 2 %. La banque centrale relève son taux directeur de 2 % à 5,5 % sur un an. Que se passe-t-il ?",
      "steps": [
        "Taux réel avant : 2 % nominal − 6 % d'inflation = −4 % (fortement négatif — emprunter revient presque à ne rien payer, ce qui alimente encore les dépenses).",
        "Taux réel après : 5,5 % nominal − 6 % d'inflation (initialement) = −0,5 %, toujours légèrement négatif mais beaucoup plus restrictif.",
        "Les crédits immobiliers, les prêts automobiles et les crédits aux entreprises se renchérissent tous, si bien que ménages et entreprises empruntent et dépensent moins.",
        "Au cours de l'année suivante, cette demande plus faible se traduit par un ralentissement des hausses de prix, et l'inflation recommence à se rapprocher de l'objectif."
      ],
      "result": "La hausse du taux de 2 % à 5,5 % transforme un taux réel fortement négatif en un taux quasi neutre, refroidissant suffisamment la demande pour faire reculer l'inflation — au prix de crédits immobiliers plus chers et, souvent, d'une croissance plus lente ou de pertes d'emplois en chemin."
    },
    "deepDive": [
      "La politique monétaire est un instrument peu précis visant un problème particulier : elle peut ralentir une économie en surchauffe ou soutenir une économie affaiblie, mais elle ne peut pas résoudre une pénurie de main-d'œuvre, une rupture de chaîne d'approvisionnement ou une flambée des prix de l'énergie liée à une guerre — ces « chocs d'offre » qui provoquent eux aussi de l'inflation. Relever les taux face à une inflation d'offre refroidit tout de même la demande, mais en rendant les crédits immobiliers et les prêts aux entreprises douloureusement chers sans agir sur le véritable goulot d'étranglement — c'est pourquoi l'outil qui arrête une inflation de demande peut, s'il est mal utilisé, faire basculer une inflation d'offre dans une récession inutile. Les banquiers centraux marchent constamment sur ce fil, et des économistes raisonnables peuvent, en temps réel, ne pas s'accorder sur le type d'inflation auquel ils font face.",
      "L'autre tension profonde oppose crédibilité et marge de manœuvre discrétionnaire. Une banque centrale qui change de cap de façon imprévisible apprend aux marchés et aux travailleurs à se méfier de son objectif d'inflation, ce qui rend cet objectif contre-productif — si les gens s'attendent à une inflation de 6 %, ils réclament des hausses de salaire de 6 % et fixent des prix en conséquence, et l'inflation devient auto-réalisatrice indépendamment de ce que montrent les données. C'est pourquoi les banques centrales consacrent tant d'efforts à la communication (guidage prospectif, conférences de presse) et pourquoi leur indépendance vis-à-vis des pressions politiques de court terme est considérée comme sacrée : un gouvernement à l'approche d'une élection a tout intérêt à réclamer des taux bas quelle que soit l'inflation, et une banque centrale qui céderait à cette pression perdrait la crédibilité qui permet précisément d'obtenir une inflation faible à moindre coût économique."
    ],
    "glossary": [
      {
        "term": "Taux directeur",
        "def": "Le taux d'intérêt à court terme fixé par une banque centrale, qui sert de référence aux coûts d'emprunt dans toute l'économie."
      },
      {
        "term": "Assouplissement quantitatif (QE)",
        "def": "Achats massifs d'obligations par une banque centrale, utilisés pour faire baisser les taux à long terme lorsque le taux directeur est proche de zéro."
      },
      {
        "term": "Guidage prospectif",
        "def": "La communication publique d'une banque centrale sur la trajectoire future de ses taux, destinée à orienter les anticipations avant même qu'elle n'agisse."
      }
    ]
  },
  "fiscal-policy": {
    "title": "Politique budgétaire",
    "hook": "Pendant que les banques centrales déplacent les taux d'intérêt, les gouvernements manient quelque chose de plus vaste — le montant de leurs impôts et de leurs dépenses — et cela seul peut faire ou défaire une économie.",
    "tldr": "La politique budgétaire est l'utilisation par un gouvernement de la fiscalité et des dépenses publiques pour influencer la croissance économique, l'emploi et la demande.",
    "definition": [
      "La politique budgétaire est le volet gouvernemental du pilotage de l'économie, distinct de la politique monétaire menée par la banque centrale. Les gouvernements peuvent mener une politique budgétaire expansionniste — en réduisant les impôts ou en augmentant les dépenses (infrastructures, aides sociales, versements directs) — pour soutenir la demande en période de ralentissement, ou une politique budgétaire restrictive — en augmentant les impôts ou en réduisant les dépenses — pour refroidir une économie en surchauffe ou contenir la dette. Contrairement à la politique monétaire, généralement fixée par une banque centrale indépendante, la politique budgétaire est décidée par des gouvernements et des parlements élus, ce qui la rend plus lente à mettre en œuvre mais aussi plus directement ciblée (une baisse d'impôt précise ou un programme de dépenses spécifique peut viser un groupe ou un secteur donné).",
      "Le solde budgétaire — les recettes moins les dépenses — est le tableau de bord permanent de la politique budgétaire. Un déficit (dépenser plus que ce que l'on perçoit) est normal et souvent utile en période de ralentissement, lorsque le gouvernement est le seul acteur encore disposé à dépenser alors que ménages et entreprises se replient ; mais des déficits importants et persistants s'accumulent en dette publique, et le service de cette dette (le paiement des intérêts) finit par entrer en concurrence avec d'autres priorités budgétaires. La question budgétaire centrale, chaque année, n'est pas « déficit ou excédent » dans l'abstrait, mais si le déficit actuel est de la bonne taille compte tenu de l'état actuel de l'économie."
    ],
    "keyPoints": [
      "Les leviers sont la fiscalité et les dépenses publiques, décidées par les gouvernements et les parlements, et non par les banques centrales.",
      "Une politique expansionniste (baisses d'impôts, hausse des dépenses) soutient la demande ; une politique restrictive (hausses d'impôts, baisse des dépenses) la refroidit.",
      "Solde budgétaire = recettes − dépenses ; un déficit accroît le stock de dette publique.",
      "La politique budgétaire est plus lente à mettre en œuvre que la politique monétaire, mais elle peut cibler directement des groupes, des secteurs ou des régions précis."
    ],
    "formula": {
      "expression": "Solde budgétaire = Recettes de l'État − Dépenses de l'État",
      "legend": "Positif = excédent · Négatif = déficit · Déficits cumulés = dette publique",
      "note": "Le ratio dette/PIB est le moyen standard d'évaluer si la dette est soutenable au regard de la taille de l'économie qui doit la rembourser."
    },
    "example": {
      "scenario": "Un gouvernement perçoit 900 Md€ de recettes fiscales et dépense 1 050 Md€ (dont 60 Md€ d'intérêts sur la dette existante). Quelle est la situation budgétaire, et qu'advient-il de la dette ?",
      "steps": [
        "Solde budgétaire = 900 − 1 050 = −150 Md€, soit un déficit.",
        "Ce déficit de 150 Md€ doit être financé par l'émission de nouvelles obligations d'État — donc par l'emprunt.",
        "Si le PIB s'élève à 3 000 Md€, le déficit de cette seule année représente 5 % du PIB — une orientation nettement expansionniste.",
        "L'année suivante, la dette publique totale sera plus élevée de 150 Md€, et si les taux restent inchangés, la facture d'intérêts de l'année suivante augmentera aussi, à défaut d'une hausse compensatoire des recettes."
      ],
      "result": "Le gouvernement affiche un déficit équivalent à 5 % du PIB, financé par un nouvel emprunt — un soutien à la demande aujourd'hui, mais qui alourdit le stock de dette et la facture d'intérêts de l'année suivante, illustrant l'arbitrage central entre relance immédiate et dette future."
    },
    "deepDive": [
      "La politique budgétaire et la politique monétaire peuvent se renforcer ou se contrecarrer, et lorsqu'elles s'opposent, la politique monétaire l'emporte généralement à court terme dans la lutte contre l'inflation, car une banque centrale peut agir plus vite et plus fortement qu'un parlement. Un gouvernement qui creuse de larges déficits (relance) pendant qu'une banque centrale relève ses taux pour combattre l'inflation tire dans des directions opposées — la dépense budgétaire ajoute de la demande que la banque centrale doit ensuite compenser par des taux encore plus élevés, ce qui explique en grande partie pourquoi les économistes surveillent la combinaison des deux politiques, et non l'une isolément. À l'inverse, un soutien budgétaire bien calibré peut raccourcir une récession que la politique monétaire seule mettrait beaucoup plus de temps à corriger, en particulier lorsque les taux sont déjà proches de zéro et que la banque centrale dispose de peu de marge de baisse supplémentaire.",
      "L'ampleur du « multiplicateur » budgétaire — la quantité de PIB supplémentaire générée par chaque euro de dépense déficitaire — fait l'objet d'un véritable débat et dépend du contexte. Dépenser en pleine récession, lorsque des capacités inutilisées et des travailleurs sans emploi existent, tend à produire un multiplicateur élevé, car cet argent n'aurait sinon été dépensé par personne. La même dépense dans une économie en plein emploi tend surtout à faire monter les prix ou à évincer l'emprunt privé (une demande de crédit accrue de l'État peut faire grimper les taux d'intérêt pour tous les autres), produisant un multiplicateur faible et davantage d'inflation pour le même déficit. C'est pourquoi « dépenser plus » ou « baisser les impôts » ne sont pas des réponses universelles — l'orientation budgétaire appropriée dépend fortement de l'état dans lequel se trouve déjà l'économie, et se tromper sur ce diagnostic est l'une des erreurs de politique économique les plus fréquentes, dans un sens comme dans l'autre."
    ],
    "glossary": [
      {
        "term": "Déficit budgétaire",
        "def": "L'écart constaté lorsque les dépenses publiques dépassent les recettes sur une période donnée, financé par l'emprunt."
      },
      {
        "term": "Dette publique",
        "def": "Le stock accumulé des déficits passés qu'un gouvernement doit rembourser, généralement mesuré par rapport au PIB."
      },
      {
        "term": "Multiplicateur budgétaire",
        "def": "La quantité de production économique supplémentaire générée par unité de dépense publique ou de baisse d'impôt."
      }
    ]
  },
  "exchange-rate": {
    "title": "Taux de change",
    "hook": "Le prix de la monnaie d'un pays exprimé dans celle d'un autre — et l'un des rares prix capables de rendre discrètement toute une nation plus riche ou plus pauvre du jour au lendemain.",
    "tldr": "Un taux de change est le prix d'une monnaie exprimé dans une autre, déterminé principalement par l'offre et la demande relatives, les taux d'intérêt et les flux commerciaux.",
    "definition": [
      "Un taux de change exprime la quantité d'une monnaie nécessaire pour en acheter une autre — par exemple, 1 euro = 1,08 dollar américain. Les taux sont pour l'essentiel déterminés sur d'immenses marchés des changes mondiaux négociés en continu, où les principales forces en jeu sont les flux commerciaux (les pays qui exportent plus qu'ils n'importent voient la demande pour leur monnaie augmenter), les écarts de taux d'intérêt (des taux plus élevés attirent des capitaux étrangers en quête de rendement, ce qui accroît la demande pour cette monnaie) et les anticipations relatives d'inflation et de croissance. Une monnaie qui se renforce (« s'apprécie ») rend les importations d'un pays moins chères et ses exportations plus coûteuses à l'étranger ; une monnaie qui s'affaiblit (« se déprécie ») produit l'effet inverse.",
      "La plupart des grandes monnaies (le dollar, l'euro, le yen, la livre sterling) flottent librement, leur valeur étant fixée par le marché plutôt que par décret gouvernemental. Certains pays préfèrent arrimer leur monnaie à une autre (le plus souvent le dollar américain) à un taux fixe ou géré, sacrifiant ainsi l'indépendance de leur politique monétaire au profit de la stabilité du taux de change — une banque centrale ne peut pas à la fois fixer son taux de change, contrôler librement son propre taux d'intérêt et autoriser la libre circulation des capitaux à travers ses frontières, une contrainte connue sous le nom de « triangle d'incompatibilité ». Choisir lesquels de ces trois objectifs privilégier constitue l'une des décisions fondamentales que prend, explicitement ou non, le cadre monétaire de chaque pays."
    ],
    "keyPoints": [
      "Le taux de change est le prix d'une monnaie exprimé dans une autre ; il est déterminé par les flux commerciaux, les écarts de taux d'intérêt et la croissance/l'inflation relatives.",
      "Une monnaie plus forte rend les importations moins chères et affaiblit la compétitivité des exportations à l'étranger ; une monnaie plus faible produit l'effet inverse.",
      "Des taux d'intérêt plus élevés tendent à attirer des capitaux étrangers et à renforcer une monnaie, toutes choses égales par ailleurs.",
      "Le « triangle d'incompatibilité » : un pays ne peut pas avoir simultanément un taux de change fixe, une libre circulation des capitaux et une politique monétaire indépendante."
    ],
    "formula": {
      "expression": "Taux de change PPA = Prix du panier dans le pays A ÷ Prix du même panier dans le pays B",
      "legend": "PPA = parité de pouvoir d'achat · « Panier » = un ensemble identique de biens dont le prix est relevé dans les deux pays",
      "note": "L'indice Big Mac est une célèbre vérification informelle de la PPA : si un Big Mac coûte 5 $ aux États-Unis et 60 pesos ailleurs, la PPA implique un taux de 12 pesos par dollar — tout écart par rapport à ce taux laisse penser qu'une monnaie est sur- ou sous-évaluée."
    },
    "example": {
      "scenario": "L'euro s'échange à 1,08 dollar. La BCE relève ensuite ses taux nettement au-dessus de ceux de la Fed, tandis que l'inflation américaine ralentit plus vite que celle de la zone euro. Que va-t-il probablement arriver à l'euro ?",
      "steps": [
        "Des taux plus élevés dans la zone euro rendent les obligations libellées en euros plus attractives pour les investisseurs mondiaux en quête de rendement.",
        "Les investisseurs vendent des dollars pour acheter des euros afin de détenir ces actifs en euros mieux rémunérés, ce qui accroît la demande d'euros.",
        "Le ralentissement plus rapide de l'inflation américaine rend aussi le rendement réel (corrigé de l'inflation) du dollar relativement moins attractif.",
        "L'euro s'apprécie — passant par exemple de 1,08 à 1,15 dollar — ce qui renchérit les exportations européennes pour les acheteurs américains et rend les importations américaines moins chères pour les Européens."
      ],
      "result": "L'écart de taux et l'écart d'inflation font passer l'euro de 1,08 à 1,15 dollar, soit une appréciation d'environ 6,5 % — une bonne nouvelle pour les consommateurs européens qui achètent des produits importés, mais un frein pour les exportateurs européens qui se font concurrence sur les prix."
    },
    "deepDive": [
      "Une monnaie faible n'est pas simplement « mauvaise », ni une monnaie forte simplement « bonne » — elle redistribue gagnants et perdants au sein d'une même économie. Une monnaie plus faible profite aux exportateurs et aux producteurs nationaux en concurrence avec les importations (leurs produits paraissent moins chers aux acheteurs étrangers, et les importations paraissent plus chères aux acheteurs nationaux, qui se tournent alors vers des alternatives locales), mais elle pénalise les consommateurs achetant des produits importés ainsi que les entreprises endettées en devises étrangères, dont les remboursements coûtent soudain plus cher en monnaie locale. C'est précisément le piège dans lequel sont tombés à répétition des gouvernements et des entreprises de marchés émergents : emprunter en dollars parce que les taux y sont plus bas, puis voir la monnaie locale se déprécier et le fardeau de la dette gonfler en termes de monnaie locale, alors même que le montant dû en dollars n'a pas changé.",
      "Les taux de change sont aussi l'un des domaines où l'écart entre la valorisation de marché à court terme et la réalité économique de long terme est le plus manifeste. La théorie de la parité de pouvoir d'achat suggère que les taux de change devraient converger vers le niveau qui égalise le prix de biens identiques d'un pays à l'autre, mais en pratique les taux peuvent s'écarter durablement de cette valeur d'équilibre pendant des années, sous l'effet des flux de capitaux, de la spéculation sur les taux d'intérêt, de la demande de valeurs refuges et des interventions des banques centrales — des écarts qui finissent par peser sur la compétitivité commerciale, mais qui peuvent persister bien plus longtemps que ce « finissent par » n'est utile à quiconque cherche à planifier en fonction d'eux. C'est pourquoi les prévisions de taux de change sont notoirement peu fiables, même parmi les professionnels : la théorie indique où une monnaie devrait finir par se situer, mais elle en dit très peu sur le chemin ou le calendrier pour y parvenir."
    ],
    "glossary": [
      {
        "term": "Appréciation / dépréciation",
        "def": "Le renforcement ou l'affaiblissement de la valeur d'une monnaie par rapport à une autre."
      },
      {
        "term": "Parité de pouvoir d'achat (PPA)",
        "def": "La théorie selon laquelle les taux de change devraient s'ajuster de manière à ce que des biens identiques coûtent le même prix dans tous les pays."
      },
      {
        "term": "Triangle d'incompatibilité",
        "def": "La contrainte selon laquelle un pays ne peut pas avoir simultanément un taux de change fixe, une libre circulation des capitaux et une politique monétaire indépendante."
      }
    ]
  },
  "capital-structure": {
    "title": "Structure du capital",
    "hook": "Le mélange de dette et de capitaux propres qu'une entreprise choisit est un pari sur sa propre survie — se tromper peut tuer même une bonne activité par le simple poids de son financement.",
    "tldr": "La structure du capital, c'est la manière dont une entreprise se finance — le mélange de dette et de capitaux propres — et ce mélange détermine à la fois son potentiel de rendement et son risque de faillite.",
    "definition": [
      "Toute entreprise est financée par une combinaison de dette (emprunts, obligations — de l'argent qui doit être remboursé avec intérêts, quelle que soit la marche des affaires) et de capitaux propres (l'apport des actionnaires, sans remboursement fixe mais avec une part des profits et du contrôle). La structure du capital n'est rien d'autre que ce mélange, généralement exprimé sous forme de ratio dette/capitaux propres ou de pourcentage dette/capital total. Une entreprise financée entièrement par capitaux propres est prudente et flexible, mais laisse peut-être de la valeur sur la table ; une entreprise fortement endettée démultiplie les rendements pour les actionnaires, mais doit assurer le service de cette dette aussi bien dans les bonnes années que dans les mauvaises.",
      "Ce choix n'est pas qu'une question d'ingénierie financière — il détermine qui supporte le risque et qui a un droit sur l'avenir de l'entreprise. Les créanciers sont payés en premier et perçoivent un rendement fixe ; les actionnaires reçoivent ce qui reste, ce qui peut être considérable (à la hausse) ou nul (en cas de faillite). Comme les intérêts sont déductibles fiscalement dans la plupart des juridictions alors que les dividendes ne le sont pas, la dette bénéficie d'un avantage de coût intégré — le « bouclier fiscal » — ce qui explique pourquoi presque aucune entreprise saine ne se finance à 100% par capitaux propres. Tout l'art consiste à trouver le mélange qui capte cet avantage sans flirter avec l'insolvabilité."
    ],
    "keyPoints": [
      "Structure du capital = le mélange de dette et de capitaux propres finançant une entreprise, généralement mesuré en ratio dette/capitaux propres ou dette/capital.",
      "La dette est moins chère (intérêts déductibles, coût fixe) mais doit être remboursée quelle que soit la performance ; les capitaux propres sont plus coûteux mais plus flexibles.",
      "La structure « optimale » équilibre l'avantage fiscal de la dette avec le coût croissant des difficultés financières à mesure que l'endettement augmente.",
      "Les secteurs à flux de trésorerie stables et prévisibles (services publics, télécoms) peuvent supporter sans risque bien plus de dette que les activités cycliques ou fortement axées sur la R&D."
    ],
    "formula": {
      "expression": "Ratio dette/capitaux propres = Dette totale ÷ Capitaux propres totaux",
      "legend": "Dette totale = engagements portant intérêt à court et long terme · Capitaux propres = valeur comptable de l'apport des actionnaires",
      "note": "Un ratio de 1,0 signifie que l'entreprise est financée à parts égales par dette et capitaux propres ; des ratios plus élevés signifient plus de levier et plus d'engagements fixes par rapport au coussin qui absorbe les pertes."
    },
    "example": {
      "scenario": "Deux entreprises identiques génèrent chacune 100 M€ de résultat d'exploitation sur 1 Md€ d'actifs. L'entreprise A est financée par 800 M€ de capitaux propres / 200 M€ de dette (taux 5%). L'entreprise B est financée par 300 M€ de capitaux propres / 700 M€ de dette (taux 5%). Comparer le rendement des capitaux propres (ROE).",
      "steps": [
        "Entreprise A : intérêts = 5% × 200 M€ = 10 M€. Résultat net = 100 M€ − 10 M€ = 90 M€. ROE = 90 ÷ 800 = 11,3%.",
        "Entreprise B : intérêts = 5% × 700 M€ = 35 M€. Résultat net = 100 M€ − 35 M€ = 65 M€. ROE = 65 ÷ 300 = 21,7%.",
        "Les actionnaires de l'entreprise B gagnent presque le double de rendement sur leur capital, pour une activité sous-jacente identique.",
        "Supposons maintenant que le résultat d'exploitation chute à 20 M€ en cas de récession : le résultat net de A = 10 M€ (ROE 1,25%, toujours positif) ; celui de B = 20 M€ − 35 M€ = −15 M€ (ROE −5%, une perte, et B pourrait avoir du mal à simplement payer ses intérêts)."
      ],
      "result": "La même activité d'exploitation produit un rendement bien plus élevé pour les actionnaires de l'entreprise B en période faste — et une véritable perte, avec un risque de service de la dette, en période difficile. La structure du capital ne change pas l'activité ; elle redistribue son risque et sa récompense entre créanciers et propriétaires."
    },
    "deepDive": [
      "Le point de départ académique classique (Modigliani-Miller) affirme que dans un monde sans friction, sans impôts ni coûts de faillite, la structure du capital n'aurait aucune importance — la valeur d'une entreprise serait la même quel que soit le mélange dette/capitaux propres, car les investisseurs pourraient répliquer eux-mêmes n'importe quel levier. Le théorème est célèbre précisément parce que la réalité viole ses hypothèses de manière significative : les impôts rendent la dette moins chère (le bouclier fiscal des intérêts), et la faillite est coûteuse et perturbatrice, loin d'être un événement propre et sans friction. En pratique, la structure du capital compte donc énormément — la « théorie de l'arbitrage » (trade-off theory) affirme que les entreprises devraient s'endetter jusqu'à ce que l'avantage fiscal marginal d'un euro de dette supplémentaire égale le coût marginal attendu des difficultés financières qu'il engendre.",
      "Dans le monde réel, les décisions de structure du capital sont aussi façonnées par des considérations de signal et de contrôle, pas seulement par le calcul fiscal. Émettre de nouvelles actions signale souvent au marché que la direction estime le titre surévalué (pourquoi vendre des actions plutôt qu'emprunter, sinon ?), ce qui explique pourquoi les cours chutent fréquemment à l'annonce d'une émission de capital — un phénomène que la « théorie du financement hiérarchique » (pecking order theory) explique en prédisant que les entreprises préfèrent l'autofinancement, puis la dette, puis les capitaux propres en dernier recours. La dette discipline aussi la direction : des paiements d'intérêts fixes ne peuvent pas être sautés comme peut l'être un dividende discrétionnaire, ce qui force une allocation du capital plus rigoureuse — mais cette même rigidité est ce qui transforme une baisse temporaire de trésorerie en violation de covenant ou en défaut. La structure de capital adéquate est donc spécifique à chaque secteur et à chaque cycle : un monopole stable dans les services publics peut porter sans risque plus de 60% de dette, tandis qu'une biotech qui brûle du cash avant tout revenu serait imprudente avec le moindre levier significatif."
    ],
    "glossary": [
      {
        "term": "Bouclier fiscal",
        "def": "La réduction du revenu imposable créée par la déduction des charges d'intérêts, qui abaisse le coût effectif de la dette."
      },
      {
        "term": "Coût des difficultés financières",
        "def": "Les coûts directs et indirects (frais juridiques, perte de clients, direction distraite) qui apparaissent lorsque le risque de défaut augmente."
      },
      {
        "term": "Covenant",
        "def": "Une condition d'un contrat de prêt (par exemple un ratio dette/EBITDA maximal) qui, si elle est enfreinte, peut déclencher un défaut même sans impayé."
      }
    ]
  },
  "mergers-acquisitions": {
    "title": "Fusions-acquisitions",
    "hook": "Deux entreprises n'en deviennent qu'une sur la promesse que l'ensemble vaudra plus que la somme des parties — une promesse qui échoue plus souvent qu'elle ne se réalise.",
    "tldr": "Les fusions-acquisitions (M&A) désignent des entreprises qui se combinent, par fusion (union entre égaux) ou par acquisition (l'une rachète l'autre), généralement pour créer une valeur que les deux entreprises n'auraient pu créer seules.",
    "definition": [
      "Une fusion combine deux entreprises en une seule, généralement présentée comme une union entre égaux ; une acquisition consiste pour une entreprise (l'acquéreur) à racheter et absorber une autre (la cible) — c'est le cas le plus fréquent en pratique. L'acquéreur paie en numéraire, en actions, ou par une combinaison des deux, souvent avec une « prime de contrôle » — un surplus par rapport au cours actuel de l'action de la cible — pour convaincre les actionnaires de vendre et compenser la perte de contrôle indépendant. Tout le raisonnement économique repose sur l'idée que l'opération crée davantage de valeur ensemble que ce que les deux entreprises valaient séparément.",
      "Cette valeur supplémentaire s'appelle la synergie, et elle se décline en deux catégories : les synergies de coûts (élimination des fonctions redondantes — un seul service RH au lieu de deux, pouvoir d'achat combiné, fermeture d'usines superflues) et les synergies de revenus (ventes croisées de produits, distribution combinée, nouveaux marchés). Les synergies de coûts sont relativement prévisibles et se matérialisent souvent ; les synergies de revenus sont notoirement trop optimistes dans les présentations de transactions et déçoivent fréquemment, car les clients, les équipes commerciales et les feuilles de route produit ne fusionnent pas aussi facilement que les organigrammes."
    ],
    "keyPoints": [
      "Les acquisitions (une entreprise en rachetant une autre) sont bien plus courantes en pratique que les véritables fusions entre égaux.",
      "Les acquéreurs paient généralement une prime de contrôle au-dessus du cours de l'action de la cible avant l'opération.",
      "La valeur de l'opération dépend des synergies — les synergies de coûts sont plus fiables que les synergies de revenus.",
      "La plupart des études montrent qu'une majorité d'acquisitions détruisent de la valeur pour les actionnaires de l'acquéreur, même lorsqu'elles profitent à ceux de la cible."
    ],
    "formula": {
      "expression": "Valeur de synergie = Valeur de l'entité combinée − (Valeur autonome de l'acquéreur + Valeur autonome de la cible)",
      "legend": "Valeur combinée = la valeur de l'entité fusionnée après intégration · Valeurs autonomes = ce que chaque entreprise valait indépendamment",
      "note": "Pour que l'opération crée de la valeur pour l'acquéreur, la valeur de synergie doit dépasser la prime de contrôle payée — un seuil que de nombreuses opérations ne franchissent pas."
    },
    "example": {
      "scenario": "Un Acquéreur (valant 2 Md€ en autonome) rachète une Cible (valant 500 M€ en autonome, cotant à ce niveau) pour 650 M€ — soit une prime de contrôle de 150 M€ (30%). La direction projette 80 M€/an de synergies de coûts dès le premier jour, valorisées avec un multiple simple de 5x en guise d'approximation de rente perpétuelle. Le prix était-il justifié ?",
      "steps": [
        "Valeur combinée autonome sans synergies = 2 Md€ + 500 M€ = 2,5 Md€.",
        "Valeur de synergie projetée ≈ 80 M€ × 5 = 400 M€ (le multiple servant d'approximation grossière à une rente perpétuelle actualisée).",
        "Valeur combinée totale avec synergies ≈ 2,5 Md€ + 400 M€ = 2,9 Md€.",
        "Prix payé pour la Cible = 650 M€ (contre 500 M€ en autonome) → prime payée = 150 M€, largement inférieure aux 400 M€ de valeur de synergie — si les synergies se matérialisent pleinement, l'opération crée environ 250 M€ de valeur nette pour l'acquéreur."
      ],
      "result": "L'opération n'a de sens que si la majeure partie de ces 400 M€ de synergies projetées se concrétise réellement ; si seule la moitié se matérialise (200 M€), l'acquéreur atteint tout juste le seuil de rentabilité sur la prime payée — c'est exactement ce risque qui fait de l'exécution de l'opération, et non de la négociation du prix, le véritable déterminant du succès."
    },
    "deepDive": [
      "La statistique dérangeante de la recherche en fusions-acquisitions est durable : entre 50 et 70% des acquisitions ne parviennent pas à créer de valeur pour les actionnaires de l'acquéreur, et les actionnaires de la cible captent l'essentiel, voire la totalité, des gains annoncés par la seule prime. Cela s'explique par des raisons structurelles, pas seulement par la malchance : les acquéreurs surpaient régulièrement dans les enchères concurrentielles (la « malédiction du gagnant » — l'enchérisseur gagnant est, presque par définition, celui qui était le plus optimiste), les équipes dirigeantes ont des incitations de carrière et d'ego à croître par les opérations, indépendamment de toute discipline sur le prix, et les synergies de revenus mises en avant devant le conseil d'administration survivent rarement au contact des clients et des équipes commerciales réels, qui n'ont pas demandé à être fusionnés.",
      "Les opérations qui fonctionnent partagent un schéma commun : une valorisation disciplinée (se retirer lorsque le prix dépasse la valeur de synergie réaliste, plutôt qu'une psychologie du « il faut gagner à tout prix »), un plan d'intégration clair établi avant la signature plutôt qu'après, et des synergies majoritairement fondées sur les coûts, donc sous le contrôle direct de la direction plutôt que dépendantes du comportement des clients. Le mode de paiement est lui aussi un signal important : les acquéreurs ont tendance à proposer des actions lorsqu'ils estiment que leur propre titre est surévalué, et du numéraire lorsqu'ils estiment que la cible est une véritable bonne affaire — ce qui explique pourquoi les marchés réagissent souvent avec plus de scepticisme aux opérations financées par actions. En définitive, les fusions-acquisitions sont l'une des rares décisions d'entreprise où le cours de l'action de l'acheteur le jour de l'annonce constitue un référendum immédiat et assez honnête sur la crédibilité que le marché accorde à l'histoire racontée — et plus souvent que ne le suggèrent les présentations des banquiers d'affaires, le marché répond non."
    ],
    "glossary": [
      {
        "term": "Prime de contrôle",
        "def": "Le montant supplémentaire payé au-dessus de la valeur de marché autonome d'une cible pour en acquérir le contrôle."
      },
      {
        "term": "Synergie",
        "def": "La valeur additionnelle créée par la combinaison de deux entreprises, au-delà de ce que chacune valait séparément."
      },
      {
        "term": "Malédiction du gagnant",
        "def": "La tendance de l'enchérisseur gagnant lors d'une vente concurrentielle à avoir surpayé, car remporter l'enchère suppose d'être le participant le plus optimiste."
      }
    ]
  },
  "cost-of-capital": {
    "title": "Coût du capital",
    "hook": "Le rendement minimum qu'une entreprise doit dégager simplement pour justifier son existence — ne pas l'atteindre revient à détruire de la valeur, même en réalisant un profit.",
    "tldr": "Le coût du capital est le rendement moyen pondéré qu'une entreprise doit verser à ses créanciers et à ses actionnaires — le taux plancher que tout investissement doit franchir pour créer de la valeur.",
    "definition": [
      "Le coût du capital est le rendement moyen pondéré qu'une entreprise doit générer sur ses investissements pour satisfaire à la fois ses créanciers (qui exigent des intérêts) et ses actionnaires (qui exigent un rendement à la mesure du risque de détenir des capitaux propres, puisqu'ils n'ont aucun paiement garanti). Il est généralement calculé sous forme de Coût Moyen Pondéré du Capital (CMPC, ou WACC en anglais), combinant le coût de la dette après impôt et le coût des capitaux propres, pondérés selon la manière dont l'entreprise est réellement financée. Le CMPC est le taux d'actualisation utilisé pour valoriser les flux de trésorerie futurs, ainsi que le taux plancher qu'un projet doit franchir pour valoir la peine d'être entrepris.",
      "Le coût des capitaux propres est plus difficile à observer que le coût de la dette, car les actionnaires ne signent jamais de contrat précisant le rendement qu'ils exigent — il doit être estimé, généralement via le Modèle d'Évaluation des Actifs Financiers (MEDAF, ou CAPM en anglais), à partir du taux sans risque additionné d'une prime liée à la volatilité de l'action par rapport au marché. Le coût du capital n'est donc jamais un chiffre fixe et connu ; c'est une estimation qui évolue avec les taux d'intérêt, l'appétit pour le risque du marché, et le levier ainsi que le risque d'exploitation propres à l'entreprise — mais obtenir une estimation à peu près juste est l'un des jugements les plus lourds de conséquences en finance d'entreprise, car il détermine quels investissements paraissent attractifs et lesquels ne le sont pas."
    ],
    "keyPoints": [
      "Le CMPC combine le coût de la dette après impôt et le coût des capitaux propres, pondérés selon le financement réel de l'entreprise.",
      "Il sert à la fois de taux d'actualisation pour la valorisation et de taux plancher minimum pour les nouveaux investissements.",
      "Le coût des capitaux propres (via le MEDAF) est une estimation, pas un chiffre observable, et il est toujours supérieur au coût de la dette car les capitaux propres supportent davantage de risque.",
      "Un projet dont le rendement dépasse le CMPC crée de la valeur ; un projet dont le rendement est inférieur en détruit, même s'il est « rentable » au sens comptable."
    ],
    "formula": {
      "expression": "CMPC = (E/V) × Re + (D/V) × Rd × (1 − Tc)",
      "legend": "E = valeur de marché des capitaux propres · D = valeur de marché de la dette · V = E + D · Re = coût des capitaux propres · Rd = coût de la dette · Tc = taux d'imposition des sociétés",
      "note": "Le terme (1 − Tc) reflète le bouclier fiscal : la dette après impôt est moins chère que son taux d'intérêt affiché, ce qui explique pourquoi la dette réduit généralement le CMPC — jusqu'au point où le risque accru de difficultés financières compense cet effet."
    },
    "example": {
      "scenario": "Une entreprise dispose de 600 M€ de capitaux propres (valeur de marché) et de 400 M€ de dette. Le coût des capitaux propres (selon le MEDAF) est de 11%. Le coût de la dette est de 6%. Le taux d'imposition des sociétés est de 25%. Calculer le CMPC et évaluer un projet dont le rendement attendu est de 8%.",
      "steps": [
        "V = E + D = 600 + 400 = 1 000 M€. Pondération des capitaux propres = 600/1 000 = 0,6. Pondération de la dette = 400/1 000 = 0,4.",
        "Coût de la dette après impôt = 6% × (1 − 0,25) = 4,5%.",
        "CMPC = (0,6 × 11%) + (0,4 × 4,5%) = 6,6% + 1,8% = 8,4%.",
        "Le rendement attendu du projet, 8%, est inférieur au taux plancher du CMPC de 8,4%."
      ],
      "result": "Même si le projet dégage un rendement positif de 8%, il reste en deçà des 8,4% que l'entreprise doit générer pour compenser ses créanciers et ses actionnaires du capital et du risque engagés — l'entreprendre détruirait de la valeur plutôt que d'en créer, malgré une apparence « rentable » sur le papier."
    },
    "deepDive": [
      "Le CMPC est une formule trompeusement simple mais périlleuse en pratique, car chaque intrant est une estimation truffée de jugements subjectifs. Le coût des capitaux propres via le MEDAF dépend du bêta (une mesure rétrospective de volatilité qui peut varier selon la fenêtre d'estimation retenue et se montre réellement instable pour les petites capitalisations ou les titres peu liquides), de la prime de risque des actions (un chiffre sur lequel des économistes raisonnables peuvent diverger de plusieurs points de pourcentage), et du taux sans risque (qui évolue lui-même avec la politique monétaire). De petites différences se cumulent : modifier la prime de risque des actions supposée d'à peine 1 point de pourcentage peut faire varier une valorisation de 10 à 20% ou plus, ce qui signifie qu'une même entreprise peut paraître bon marché ou chère selon les seules hypothèses de CMPC retenues par l'analyste — un avertissement à ne jamais traiter un calcul de CMPC comme plus précis qu'il ne l'est réellement.",
      "Une erreur plus subtile et plus fréquente consiste à utiliser un CMPC unique, à l'échelle de toute l'entreprise, pour évaluer tous ses projets, indépendamment du risque propre à chacun. Une division stable et mature et une nouvelle activité spéculative au sein de la même entreprise n'ont pas le même profil de risque ; actualiser les deux au CMPC moyen de l'entreprise conduit systématiquement à surinvestir dans l'activité risquée (dont le véritable taux plancher devrait être plus élevé) et à sous-investir dans la division sûre (dont le véritable taux plancher devrait être plus bas). Les méthodes sophistiquées de budgétisation des investissements utilisent précisément pour cette raison des taux d'actualisation spécifiques au projet ou à la division. Le coût du capital n'est pas non plus statique : à mesure qu'une entreprise s'endette, son coût des capitaux propres tend lui aussi à augmenter (davantage de risque financier repose sur un coussin de capitaux propres plus réduit), ce qui explique pourquoi le simple ajout de dette bon marché ne fait pas baisser mécaniquement le CMPC indéfiniment — au-delà d'un certain seuil, le risque croissant de difficultés financières et l'exigence de rendement accrue des actionnaires compensent l'avantage fiscal, et le CMPC repart à la hausse."
    ],
    "glossary": [
      {
        "term": "MEDAF",
        "def": "Modèle d'Évaluation des Actifs Financiers (CAPM) — estime le rendement exigé des capitaux propres comme le taux sans risque plus le bêta multiplié par la prime de risque des actions."
      },
      {
        "term": "Taux plancher",
        "def": "Le taux de rendement minimum acceptable qu'un projet ou un investissement doit franchir pour valoir la peine d'être entrepris."
      },
      {
        "term": "Bêta",
        "def": "Une mesure de la volatilité d'une action par rapport au marché dans son ensemble, utilisée pour estimer la prime de risque exigée par les investisseurs en actions."
      }
    ]
  },
  "defi": {
    "title": "DeFi (finance décentralisée)",
    "hook": "La banque sans banque — prêts, échanges et emprunts entièrement gérés par du code sur une blockchain publique.",
    "tldr": "La DeFi reconstruit les services financiers — prêts, échanges, assurance — sous forme de smart contracts open-source sur des blockchains publiques, remplaçant banques et courtiers par du code et des garanties.",
    "definition": [
      "La finance décentralisée (DeFi) désigne un ensemble d'applications financières construites sur des blockchains publiques, principalement Ethereum, qui reproduisent des services traditionnellement fournis par les banques et les courtiers — prêter, emprunter, échanger, gagner des intérêts — sans qu'une entreprise centrale détienne votre argent ou approuve votre transaction. Ce sont des programmes auto-exécutables appelés smart contracts qui détiennent les fonds dans des pools partagés et appliquent des règles automatiquement : déposer une garantie, emprunter contre celle-ci, échanger un jeton contre un autre, le tout régi par un code que chacun peut inspecter et que personne ne peut modifier unilatéralement. Les utilisateurs interagissent directement depuis leur propre portefeuille, il n'y a donc aucun compte à ouvrir et, en principe, aucun intermédiaire pour dire non.",
      "Le fonctionnement diffère nettement de la finance traditionnelle. Un pool de prêt DeFi fixe les taux d'intérêt de façon algorithmique en fonction de l'offre et de la demande pour chaque actif, en les ajustant à chaque bloc plutôt qu'à chaque trimestre. Une plateforme d'échange décentralisée n'apparie pas les transactions face à un teneur de marché humain, mais face à un pool de jetons déposés par d'autres utilisateurs (un « pool de liquidité »), qui perçoivent des frais en échange. Comme il n'existe aucun service crédit pour évaluer votre fiabilité, les prêts DeFi sont généralement surcollatéralisés — vous devez déposer plus de valeur que vous n'en empruntez — ce qui évite le recours à un score de crédit, mais plafonne aussi la taille du prêt et exclut quiconque n'a pas de capital à immobiliser au départ."
    ],
    "keyPoints": [
      "Les services financiers (prêt, échange, emprunt) sont exécutés par des smart contracts et non par des banques ou des courtiers.",
      "Les utilisateurs gardent la garde de leurs fonds dans leur propre portefeuille — pas de compte, mais personne à appeler en cas de problème.",
      "Les prêts sont surcollatéralisés (déposer plus que ce que l'on emprunte) puisqu'il n'y a pas de vérification de crédit.",
      "La composabilité permet aux protocoles de s'interconnecter automatiquement — mais signifie aussi qu'une défaillance peut se propager en cascade."
    ],
    "example": {
      "scenario": "Vous voulez générer un rendement sur 10 000 € en stablecoin sans passer par une banque. Vous les déposez dans un protocole de prêt DeFi.",
      "steps": [
        "Vous connectez votre portefeuille crypto à l'application du protocole de prêt et déposez 10 000 € de stablecoin dans son pool partagé.",
        "Le smart contract enregistre votre dépôt et commence à générer des intérêts, fixés algorithmiquement selon la part du pool actuellement empruntée (disons 4 % de rendement annuel quand 80 % du pool est emprunté).",
        "Un autre utilisateur souhaite emprunter en garantissant ses avoirs en Ethereum : il doit déposer, disons, 15 000 € d'ETH en garantie pour emprunter vos 10 000 € — une surcollatéralisation qui maintient la solvabilité du pool même si le prix de l'ETH baisse quelque peu.",
        "Si le prix de l'ETH chute trop, le smart contract liquide automatiquement la garantie de l'emprunteur pour rembourser le pool — pas d'appel téléphonique, pas de délai de grâce, juste du code qui applique la règle instantanément."
      ],
      "result": "Vous avez généré un rendement sans compte bancaire, sans formulaire KYC, sans comité de crédit — mais vous n'avez non plus aucune assurance des dépôts, aucun médiateur, et aucun recours si le smart contract contient un bug ou si l'actif en garantie s'effondre plus vite que la liquidation ne peut suivre."
    },
    "deepDive": [
      "L'argument optimiste honnête est que la DeFi supprime réellement les frictions et les barrières que la finance traditionnelle a accumulées pendant des décennies. Quiconque dispose d'une connexion internet et d'un portefeuille peut prêter, emprunter ou échanger à toute heure, sans solde minimum, sans restriction géographique, sans qu'une banque décide qu'il n'est pas assez rentable à servir. Les taux sont transparents et fixés par une offre et une demande visibles plutôt que négociés à huis clos, et le code est open-source et auditable plutôt qu'une boîte noire. La « composabilité » — des protocoles qui s'assemblent comme des bibliothèques logicielles — permet aux développeurs de construire en quelques semaines des produits sophistiqués (stratégies de rendement automatisées, actifs synthétiques) qu'une banque mettrait des années à livrer à travers la conformité et les systèmes hérités.",
      "L'argument pessimiste est que la DeFi a, en pratique, réintroduit la plupart des risques que la finance traditionnelle avait été construite pour gérer — sans les filets de sécurité. Des milliards de dollars ont été perdus à cause de bugs dans des smart contracts, d'attaques par flash loan exploitées, et de purs « rug pulls » où les développeurs repartent simplement avec les fonds mis en commun ; contrairement à la faillite d'une banque, il n'y a ni assurance des dépôts, ni régulateur, et souvent aucune partie identifiable à poursuivre. La surcollatéralisation, si elle supprime le besoin d'un score de crédit, est profondément inefficace en capital et exclut précisément les personnes que le crédit traditionnel est censé servir — celles qui n'ont pas de capital disponible à immobiliser. Et la composabilité joue dans les deux sens : quand un protocole tombe en panne (ce qui est arrivé à plusieurs lors de krachs de marché), les interconnexions qui rendaient la DeFi élégante transmettent aussi la défaillance instantanément à travers tous les protocoles construits par-dessus. La technologie résout de vrais problèmes d'accès et de transparence ; reste une question ouverte et non résolue de savoir si elle peut le faire sans faire périodiquement disparaître le capital des utilisateurs."
    ],
    "glossary": [
      {
        "term": "Pool de liquidité",
        "def": "Une réserve commune de jetons déposés par des utilisateurs qu'un protocole utilise pour faciliter les échanges ou les prêts, en reversant aux déposants une part des frais."
      },
      {
        "term": "Surcollatéralisation",
        "def": "L'obligation pour un emprunteur de déposer plus de valeur qu'il n'en emprunte, faute de vérification de crédit pour évaluer le risque de défaut."
      },
      {
        "term": "Flash loan",
        "def": "Un prêt sans garantie qui doit être emprunté et remboursé au sein d'une seule transaction blockchain — utile pour l'arbitrage, mais aussi un vecteur d'attaque courant."
      }
    ]
  },
  "smart-contracts": {
    "title": "Smart contracts",
    "hook": "Un contrat qui s'exécute lui-même — pas d'avocat, pas de signature, aucun moyen de discuter avec le code une fois qu'il tourne.",
    "tldr": "Un smart contract est un code stocké sur une blockchain qui exécute automatiquement des règles convenues à l'avance lorsque certaines conditions sont remplies, remplaçant l'application manuelle par une exécution automatique et inviolable.",
    "definition": [
      "Un smart contract est un programme déployé sur une blockchain qui s'exécute exactement tel qu'il a été écrit, sans qu'aucune partie — y compris son créateur — ne puisse le modifier une fois en ligne (sauf si cette possibilité a été délibérément codée). Il traduit un accord en logique : « si la condition X est remplie, exécuter l'action Y » — libérer un paiement une fois la livraison d'une marchandise confirmée, liquider une garantie quand sa valeur passe sous un seuil, distribuer des dividendes proportionnellement aux détenteurs de jetons à une date fixée. Comme le code tourne sur un réseau distribué plutôt que sur le serveur d'une seule entreprise, son exécution est très difficile à censurer, et ses règles sont visibles par quiconque sait lire le code, ce qui supprime en principe le besoin de faire confiance à la promesse d'une contrepartie ou à l'application éventuelle d'un tribunal.",
      "Le nom est quelque peu trompeur sur ses deux mots : un smart contract n'est pas particulièrement « intelligent » — il fait exactement et uniquement ce que dit son code, sans jugement ni marge d'appréciation — et ce n'est pas toujours un « contrat » au sens juridique, car les tribunaux, dans la plupart des juridictions, n'ont pas pleinement tranché la question de savoir comment son exécution s'articule avec le droit des contrats traditionnel. Ce qu'il fait de façon fiable, c'est transformer un accord qui nécessiterait normalement un intermédiaire de confiance pour être appliqué (un agent séquestre, une banque, un tribunal) en quelque chose appliqué par le mécanisme de consensus du réseau lui-même. C'est puissant quand les conditions sont objectives et lisibles par une machine (un prix qui franchit un seuil) ; c'est beaucoup moins fiable quand les conditions nécessitent un jugement, se produisent hors chaîne, ou dépendent de données du monde réel que la blockchain ne peut pas observer directement."
    ],
    "keyPoints": [
      "Un code sur une blockchain qui s'exécute automatiquement dès que ses conditions sont remplies — aucune application manuelle nécessaire.",
      "Immuable une fois déployé (en général) — puissant pour la confiance, impitoyable en cas de bug ou d'ambiguïté.",
      "Fonctionne mieux pour des conditions objectives et lisibles par une machine ; peine face aux jugements de valeur ou aux faits hors chaîne.",
      "Dépend d'« oracles » pour faire entrer des données du monde réel sur la chaîne, ce qui réintroduit un point de confiance et de défaillance."
    ],
    "formula": {
      "expression": "SI (condition remplie sur la chaîne) ALORS (exécuter l'action) — aucune marge d'appréciation, aucun appel possible",
      "legend": "Condition = une règle inscrite dans le code (ex. prix, date, nombre de signatures) · Action = exécution automatique (transfert, liquidation, versement)",
      "note": "Contrairement à un contrat juridique, il n'y a pas de juge pour interpréter l'intention — seulement le code littéral qui a été déployé."
    },
    "example": {
      "scenario": "Deux entreprises conviennent que l'entreprise A paiera 50 000 € à l'entreprise B dès que les données de suivi d'une expédition confirmeront la livraison — appliqué par un smart contract plutôt que par un processus de facturation manuel.",
      "steps": [
        "Le smart contract est déployé en détenant 50 000 € (ou leur équivalent en jetons) sous séquestre, avec une règle : libérer les fonds à réception d'un signal confirmant la livraison.",
        "Un flux de données fiable (un « oracle ») rapporte les données GPS et douanières de l'expédition lorsqu'elle franchit le dernier point de contrôle.",
        "Le smart contract compare les données de l'oracle à sa condition — livraison confirmée au lieu et à l'heure convenus.",
        "La condition est remplie, le contrat libère donc automatiquement les 50 000 € à l'entreprise B, sans facture, sans étape d'approbation, sans délai de virement bancaire."
      ],
      "result": "Le paiement a eu lieu quelques minutes après la livraison, au lieu du cycle habituel de facturation de 30 à 60 jours — mais toute la mise en place dépend désormais de l'exactitude des informations rapportées par l'oracle ; si les données de suivi sont erronées ou manipulées, le contrat versera (ou retiendra) le paiement exactement comme codé, sans qu'aucun humain puisse intervenir."
    },
    "deepDive": [
      "L'argument optimiste honnête est que les smart contracts suppriment un coût bien réel en finance : le coût de faire confiance à quelqu'un pour tenir sa promesse, et tout l'appareil juridique et administratif construit pour faire respecter cette confiance quand elle est trahie. Agents séquestres, chambres de compensation et pans entiers de réconciliation back-office existent en grande partie pour gérer le risque de contrepartie et la vérification manuelle ; un smart contract bien conçu peut remplir la même fonction instantanément, en continu, pour une fraction du coût, sans entreprise intermédiaire susceptible de faire faillite, de se faire pirater en interne, ou de simplement refuser de payer. Pour les accords avec des conditions claires, objectives et vérifiables sur la chaîne — échanges de jetons, prêts garantis, versements programmés — c'est un gain d'efficacité réel et déjà démontré.",
      "L'argument pessimiste est que « le code fait office de contrat » est une promesse bien plus difficile à tenir qu'il n'y paraît. Des bugs dans le code de smart contracts ont provoqué des centaines de millions de dollars de pertes — des fonds gelés pour toujours, ou vidés par un attaquant exploitant un cas limite que les développeurs n'avaient jamais anticipé — et comme le code est souvent immuable par conception, il n'existe fréquemment aucun moyen de corriger l'erreur après coup. Les conditions du monde réel (l'expédition correspondait-elle vraiment à sa description, la garantie a-t-elle réellement été livrée) exigent encore des flux de données fiables appelés oracles, ce qui réintroduit précisément le point unique de confiance et de défaillance que les smart contracts étaient censés éliminer — si l'oracle se trompe ou est manipulé, le contrat exécute le mauvais résultat avec une confiance totale et sans recours. Et les tribunaux n'ont pas tranché la question de savoir comment l'exécution littérale d'un smart contract se rapporte à l'intention réelle des parties, si bien que les litiges portant sur ce qui aurait dû se passer, plutôt que sur ce que le code a fait, demeurent un territoire juridique réellement non résolu. Cette technologie se comprend mieux comme un puissant outil d'exécution pour des accords étroits et bien définis — et non encore comme un remplacement total du droit des contrats."
    ],
    "glossary": [
      {
        "term": "Oracle",
        "def": "Un service qui fait entrer des données du monde réel (prix, événements, statut d'une expédition) dans une blockchain afin que les smart contracts puissent agir en fonction de celles-ci."
      },
      {
        "term": "Immuabilité",
        "def": "La propriété selon laquelle le code d'un contrat déployé ne peut généralement pas être modifié — fiable pour la confiance, dangereuse s'il contient un bug."
      },
      {
        "term": "Frais de gas",
        "def": "Le coût payé au réseau pour exécuter le code d'un smart contract, qui varie selon la congestion du réseau et la complexité du calcul."
      }
    ]
  },
  "payment-systems": {
    "title": "Systèmes de paiement",
    "hook": "Déplacer de l'argent semble instantané sur votre écran — derrière se joue une course de relais entre banques, réseaux et chambres de compensation qui peut prendre des jours.",
    "tldr": "Un système de paiement est le réseau de rails, de règles et d'intermédiaires qui déplace l'argent entre le payeur et le bénéficiaire — allant des virements bancaires lents mais bon marché aux réseaux de cartes rapides mais coûteux, jusqu'aux rails blockchain quasi instantanés mais encore naissants.",
    "definition": [
      "Un système de paiement est l'infrastructure qui déplace l'argent du compte d'un payeur vers celui d'un bénéficiaire — les rails qui se cachent derrière chaque paiement par carte, virement bancaire et paiement mobile. Différents rails arbitrent entre vitesse, coût et portée de manières différentes. Les réseaux de cartes (Visa, Mastercard) sont rapides au point de vente mais coûteux, facturant aux commerçants 1,5 à 3 % par transaction pour couvrir la protection contre la fraude, les rétrofacturations et les multiples banques impliquées. Les virements bancaires (virement, ACH, SEPA) sont bon marché mais historiquement lents, prenant souvent un à trois jours ouvrés car ils passent par lots et se réconcilient via des banques intermédiaires et des chambres de compensation plutôt que de se régler instantanément. Les nouveaux rails de paiement en temps réel (virements bancaires instantanés, portefeuilles mobiles) visent à combiner le faible coût des virements bancaires avec la rapidité des cartes, et gagnent rapidement du terrain, en particulier en dehors des États-Unis.",
      "Chaque système de paiement doit résoudre le même problème fondamental : comment déplacer de la valeur entre deux parties qui ne se font pas entièrement confiance, vérifier que le payeur dispose bien des fonds, prévenir la fraude, et finaliser la transaction pour qu'elle ne puisse être ni annulée ni dépensée deux fois — tout en maintenant un coût assez bas pour que la transaction ait encore un sens économique. Les réseaux de cartes résolvent cela grâce à un ensemble de relations contractuelles et à un système de lutte contre la fraude et de gestion des litiges coûteux mais efficace ; les virements bancaires le résolvent par une compensation bilatérale plus lente mais moins chère entre banques régulées ; et les rails de paiement fondés sur la blockchain tentent de le résoudre par un consensus cryptographique plutôt que par la confiance institutionnelle, au prix de la volatilité, de la complexité et, pour l'instant, d'une acceptation limitée par les commerçants."
    ],
    "keyPoints": [
      "Les rails de paiement arbitrent entre vitesse, coût et portée — les cartes sont rapides mais chères ; les virements bancaires sont bon marché mais plus lents.",
      "Chaque système doit vérifier les fonds, prévenir la fraude et finaliser la transaction — seuls les mécanismes diffèrent.",
      "Les rails de paiement en temps réel réduisent l'écart entre la rapidité des cartes et le faible coût des virements bancaires.",
      "Les paiements transfrontaliers restent le cas le plus coûteux et le plus lent, car plusieurs devises et juridictions cumulent les coûts."
    ],
    "formula": {
      "expression": "Coût de transaction effectif = frais % × montant + (coût de portage lié au délai de règlement)",
      "legend": "Frais % = frais de réseau/d'interchange facturés par transaction · Coût de portage = le coût d'opportunité des fonds immobilisés jusqu'au règlement complet",
      "note": "Un virement bancaire « gratuit » qui se règle en 3 jours a quand même un coût caché : l'argent reste immobilisé et inutilisable pendant ce temps."
    },
    "example": {
      "scenario": "Un commerçant compare trois moyens de recevoir un paiement de 1 000 € : une carte de crédit, un virement bancaire classique et un rail de paiement instantané.",
      "steps": [
        "Carte de crédit : le commerçant reçoit environ 970 € utilisables instantanément sous 1 à 2 jours, après des frais d'interchange et de réseau de 2,5 % (25 €), avec en plus le risque d'une future rétrofacturation.",
        "Virement bancaire classique (virement SEPA) : le commerçant reçoit l'intégralité des 1 000 €, mais les fonds peuvent ne pas être compensés et utilisables avant 1 jour ouvré, et le payeur a dû l'initier manuellement.",
        "Rail de paiement instantané (par ex. SEPA Instantané, ou un virement mobile en temps réel) : le commerçant reçoit l'intégralité des 1 000 € utilisables en quelques secondes, généralement pour des frais très inférieurs à l'interchange des cartes (souvent moins de 0,50 €).",
        "Le commerçant compare : la carte coûte 25 € pour une liquidité instantanée et une protection contre les litiges ; le virement bancaire ne coûte rien mais immobilise les fonds pendant un jour ; les rails instantanés offrent rapidité et faible coût, mais l'adoption et la familiarité des payeurs sont encore en train de rattraper celles des cartes."
      ],
      "result": "Les rails de paiement instantané semblent l'évidence gagnante en coût et en rapidité, et les commerçants s'y tournent de plus en plus — mais les cartes conservent la protection contre la fraude, la gestion des litiges et une familiarité quasi universelle des payeurs, construites en plusieurs décennies, ce qui explique pourquoi elles dominent encore au point de vente."
    },
    "deepDive": [
      "L'argument optimiste honnête pour les systèmes de paiement modernes est que la concurrence et la technologie réduisent régulièrement le coût et le délai que l'on tenait autrefois pour inévitables. Les rails de paiement en temps réel, désormais actifs dans des dizaines de pays, permettent à un paiement de se compenser et de se régler en quelques secondes pour une fraction des frais d'interchange d'une carte, ce qui compte énormément pour les commerçants à faibles marges et pour les personnes qui vivent de salaire en salaire et ne peuvent pas se permettre un blocage de plusieurs jours sur leurs fonds. Les systèmes de mobile money ont apporté une infrastructure de paiement et d'épargne de base à des centaines de millions de personnes qui n'ont jamais eu de compte bancaire, en s'appuyant sur les réseaux téléphoniques plutôt que sur des agences. Et les réglementations d'open banking, dans certaines régions, permettent désormais à des applications tierces d'initier des virements bancaires directement, contournant entièrement les frais des réseaux de cartes — une véritable menace structurelle pour l'économie du duopole des cartes.",
      "L'argument pessimiste est que l'infrastructure des paiements est un cimetière de standards bien intentionnés qui n'ont jamais atteint les effets de réseau nécessaires pour déloger les acteurs en place. Les réseaux de cartes restent dominants non pas parce qu'ils sont bon marché ou rapides, mais parce qu'ils ont résolu à grande échelle, il y a des décennies, la confiance et la résolution des litiges, et commerçants comme consommateurs répugnent à abandonner quelque chose qui fonctionne de manière fiable, rétrofacturations comprises. Les paiements transfrontaliers restent lents et coûteux — prenant souvent plusieurs jours et coûtant plusieurs pour cent — car ils doivent enchaîner des banques correspondantes à travers devises et juridictions, chacune ajoutant des frais et un délai, et aucun nouveau rail n'a encore atteint la portée mondiale nécessaire pour contourner entièrement cette chaîne. Et chaque rail plus rapide et moins cher introduit de nouveaux vecteurs de fraude : les virements instantanés et irrévocables sont une aubaine pour les escrocs, car la rapidité qui profite aux utilisateurs légitimes signifie aussi que les fonds volés se déplacent et disparaissent avant qu'une banque ne puisse intervenir. La vérité peu glorieuse est que les progrès en matière de paiements se comptent en décennies, pas en années, freinés moins par la technologie (qui est globalement prête) que par le travail lent et essentiel de construction de la confiance, de la réglementation et de l'acceptation universelle autour de tout nouveau rail."
    ],
    "glossary": [
      {
        "term": "Frais d'interchange",
        "def": "Les frais que la banque d'un commerçant verse à la banque du titulaire de la carte à chaque transaction par carte, en fin de compte répercutés sur le commerçant."
      },
      {
        "term": "Règlement",
        "def": "Le moment où un paiement devient définitif et où les fonds sont effectivement transférés entre les banques, par opposition à une simple autorisation."
      },
      {
        "term": "Banque correspondante",
        "def": "La chaîne de banques intermédiaires qui relaient un paiement transfrontalier entre la banque du payeur et celle du bénéficiaire, chacune ajoutant un coût et un délai."
      }
    ]
  },
  "cash-flow-statement": {
    "title": "Tableau des flux de trésorerie",
    "hook": "Le bénéfice est une opinion ; la trésorerie est un fait — ce tableau suit le fait.",
    "tldr": "Le tableau des flux de trésorerie indique combien de liquidités sont réellement entrées et sorties d'une entreprise sur une période, réparties entre activités d'exploitation, d'investissement et de financement.",
    "definition": [
      "Le tableau des flux de trésorerie réconcilie le résultat net (un chiffre issu de la comptabilité d'engagement, truffé d'estimations et d'éléments non monétaires) avec ce qui s'est réellement passé au niveau de la trésorerie de l'entreprise. Il répartit tous les mouvements de trésorerie en trois catégories : les activités d'exploitation (la trésorerie générée par l'activité principale — on part du résultat net, on y ajoute les charges non monétaires comme les amortissements, puis on ajuste les variations du besoin en fonds de roulement), les activités d'investissement (la trésorerie dépensée ou perçue au titre des actifs à long terme — achat d'équipements, acquisition d'une société, cession d'une division) et les activités de financement (la trésorerie provenant des ou destinée aux prêteurs et actionnaires — émission ou remboursement de dette, émission d'actions, versement de dividendes, rachats d'actions). Les trois flux, additionnés, donnent la variation nette de trésorerie sur la période, qui relie le solde de trésorerie d'ouverture à celui de clôture du bilan.",
      "Son objectif est de répondre à une question à laquelle le compte de résultat ne peut pas répondre : le bénéfice s'est-il traduit en trésorerie ? Une entreprise peut afficher un bénéfice croissant tout en voyant sa trésorerie fondre — parce que les clients paient lentement, que les stocks s'accumulent, ou qu'elle investit massivement dans sa croissance. À l'inverse, une entreprise peut afficher une perte tout en générant une trésorerie solide — un amortissement élevé est une charge bien réelle sur le papier, mais aucune liquidité n'est sortie de la caisse cette année-là. Les investisseurs et les prêteurs s'appuient sur ce tableau précisément parce que le résultat net peut être façonné par des choix comptables, alors que la trésorerie, elle, ne se discute guère."
    ],
    "keyPoints": [
      "Répartit les mouvements de trésorerie en activités d'exploitation, d'investissement et de financement.",
      "Part du résultat net, puis réintègre les éléments non monétaires et les variations du besoin en fonds de roulement.",
      "Les trois sections, additionnées, donnent la variation nette de trésorerie sur la période.",
      "Met en évidence l'écart entre le bénéfice comptable et la trésorerie réellement générée."
    ],
    "formula": {
      "expression": "Variation nette de trésorerie = FTE + FTI + FTF",
      "legend": "FTE = flux de trésorerie d'exploitation · FTI = flux de trésorerie d'investissement · FTF = flux de trésorerie de financement",
      "note": "Le FTE se calcule généralement comme Résultat net + Dotations aux amortissements − Augmentation du besoin en fonds de roulement."
    },
    "example": {
      "scenario": "Une entreprise affiche un résultat net de 175 k€ et des amortissements de 40 k€, mais ses créances clients ont augmenté de 20 k€ (FTE). Elle a acheté un équipement pour 60 k€ (FTI). Elle a remboursé 30 k€ de dette et versé 25 k€ de dividendes (FTF). Quelle est la variation nette de trésorerie ?",
      "steps": [
        "FTE = 175 + 40 − 20 = 195 k€ — le bénéfice plus l'amortissement non monétaire, moins la trésorerie immobilisée dans les factures clients impayées.",
        "FTI = −60 k€ — la trésorerie dépensée pour acheter l'équipement, un investissement à long terme.",
        "FTF = −30 − 25 = −55 k€ — la trésorerie versée aux prêteurs et aux actionnaires.",
        "Variation nette de trésorerie = 195 − 60 − 55 = 80 k€."
      ],
      "result": "La trésorerie a augmenté de 80 k€, alors même que 20 k€ du bénéfice déclaré restent bloqués, non encaissés, dans les créances clients — le tableau montre exactement d'où vient réellement l'argent et où il est allé."
    },
    "deepDive": [
      "Le tableau des flux de trésorerie est l'outil classique pour repérer une entreprise « rentable mais pauvre en liquidités » avant qu'elle ne bascule dans une crise de solvabilité. Une entreprise peut afficher des bénéfices croissants trimestre après trimestre tandis que ses créances clients enflent (les clients ne paient pas), que ses stocks gonflent (les produits ne se vendent pas), ou qu'elle capitalise des coûts qui devraient sans doute être passés en charges — autant d'éléments qui flattent le résultat net pendant que le flux de trésorerie d'exploitation stagne ou devient négatif. Cette divergence entre résultat net et flux de trésorerie d'exploitation, lorsqu'elle se prolonge sur plusieurs trimestres, est l'un des signaux d'alerte les plus fiables en analyse financière ; plusieurs fraudes comptables et quasi-faillites célèbres (négociants en énergie, distributeurs gonflant artificiellement leurs ventes aux revendeurs) ont montré exactement ce schéma pendant des années avant que le marché ne s'en aperçoive. Une entreprise peut littéralement se retrouver à court de liquidités et faire faillite tout en déclarant un bénéfice — le bénéfice ne paie ni les salaires ni les fournisseurs, la trésorerie oui.",
      "Les trois sections, lues ensemble, racontent aussi l'histoire du stade de développement d'une entreprise. Une jeune entreprise en forte croissance affiche souvent un flux de trésorerie d'exploitation négatif (elle est encore en train de construire son activité), un flux de trésorerie d'investissement fortement négatif (elle finance sa croissance par des dépenses d'investissement ou des acquisitions) et un flux de trésorerie de financement positif (elle lève des fonds auprès d'investisseurs ou de prêteurs pour combler l'écart) — une situation normale, voire saine, tant que l'histoire de croissance tient la route. Une entreprise mature et en bonne santé affiche typiquement un flux d'exploitation fortement positif, des sorties d'investissement modestes (dépenses d'entretien) et un flux de financement négatif (remboursement de dette, rachats d'actions, retour de trésorerie aux actionnaires). Une entreprise qui brûle de la trésorerie d'exploitation tout en s'appuyant sur du financement pour rester à flot — sans perspective claire de FTE positif — signale quelque chose que le seul compte de résultat ne révélerait jamais."
    ],
    "glossary": [
      {
        "term": "FTE (flux de trésorerie d'exploitation)",
        "def": "La trésorerie générée par l'activité principale — la plus scrutée des trois sections."
      },
      {
        "term": "Dépenses d'investissement (capex)",
        "def": "La trésorerie consacrée aux actifs à long terme — le principal poste des activités d'investissement."
      },
      {
        "term": "Flux de trésorerie disponible (free cash flow)",
        "def": "Le FTE diminué des dépenses d'investissement — la trésorerie restante après maintien et développement de la base d'actifs, souvent utilisée pour valoriser une entreprise."
      }
    ]
  },
  "ebitda": {
    "title": "EBITDA",
    "hook": "Retirez les intérêts, les impôts et les charges non monétaires, et vous obtenez une approximation grossière de la trésorerie générée par l'activité principale.",
    "tldr": "L'EBITDA — le résultat avant intérêts, impôts, dépréciation et amortissement — approxime la capacité de génération de trésorerie du cœur d'activité d'une entreprise, indépendamment de son financement et de ses choix comptables.",
    "definition": [
      "L'EBITDA part du résultat net et y réintègre les intérêts, les impôts, les dépréciations et les amortissements — quatre éléments qui reflètent soit des décisions de financement ou fiscales (intérêts, impôts) plutôt que la performance opérationnelle, soit des charges comptables non monétaires (dépréciation, amortissement) plutôt que de véritables sorties de trésorerie. Le résultat est censé approximer la capacité de génération de trésorerie du cœur de métier, indépendamment de son mode de financement (dette ou capitaux propres), de sa juridiction fiscale, ou de l'agressivité avec laquelle elle amortit ses actifs. En neutralisant ces différences, l'EBITDA est largement utilisé pour comparer, sur une base plus homogène, des entreprises ayant des structures de capital, des régimes fiscaux ou des parcs d'actifs d'âges différents.",
      "Il est devenu la mesure de référence dans les rachats à effet de levier (LBO) et le capital-investissement, car les prêteurs s'intéressent à la trésorerie disponible pour assurer le service de la dette, et l'EBITDA en constitue une première approximation raisonnable avant de tenir compte des dépenses d'investissement et des besoins en fonds de roulement. Il se calcule rapidement à partir d'un compte de résultat standard et se transpose facilement d'un secteur ou d'un pays à l'autre, ce qui explique en partie sa diffusion, du capital-investissement vers la recherche actions, les présentations de résultats et les clauses de covenants bancaires. Mais sa popularité a dépassé sa rigueur : l'EBITDA n'est défini ni par les normes GAAP ni par les normes IFRS, si bien que les entreprises disposent d'une grande latitude sur ce qu'elles y réintègrent, et deux entreprises publiant chacune un « EBITDA » peuvent ne pas être comparables du tout."
    ],
    "keyPoints": [
      "Réintègre les intérêts, les impôts, les dépréciations et les amortissements dans le résultat net.",
      "Approxime la capacité de génération de trésorerie du cœur d'activité, avant choix de financement et fiscaux.",
      "Central dans les rachats à effet de levier et l'analyse des clauses de covenants (trésorerie disponible pour le service de la dette).",
      "Ce n'est pas une mesure définie par les normes GAAP/IFRS — les entreprises ont une marge d'appréciation, ce qui limite la comparabilité."
    ],
    "formula": {
      "expression": "EBITDA = Résultat net + Intérêts + Impôts + Dépréciation + Amortissement",
      "legend": "Intérêts = coût de la dette · Impôts = impôt sur les bénéfices · D&A = charges non monétaires liées à l'usure ou à l'obsolescence des actifs",
      "note": "De manière équivalente, EBITDA = EBIT (résultat d'exploitation) + Dépréciation + Amortissement."
    },
    "example": {
      "scenario": "Une entreprise déclare un résultat net de 175 k€, des charges d'intérêts de 50 k€, des impôts de 75 k€, des dépréciations de 40 k€ et des amortissements de 10 k€. Quel est son EBITDA ?",
      "steps": [
        "Partir du résultat net : 175 k€.",
        "Réintégrer les intérêts et les impôts : 175 + 50 + 75 = 300 k€ (il s'agit de l'EBIT, le résultat d'exploitation).",
        "Réintégrer la dépréciation et l'amortissement : 300 + 40 + 10 = 350 k€.",
        "EBITDA = 350 k€, contre un résultat net déclaré de 175 k€ — exactement le double, car les coûts de financement, les impôts et les charges non monétaires ont absorbé l'autre moitié."
      ],
      "result": "Un EBITDA de 350 k€ suggère que le cœur d'activité génère environ deux fois plus de trésorerie que ne le laisse penser le résultat net — utile pour un prêteur ou un acquéreur évaluant la capacité d'endettement, mais seulement si les charges non monétaires sont réellement discrétionnaires et ne masquent pas de véritables coûts futurs."
    },
    "deepDive": [
      "Le critique le plus cité de l'EBITDA, Charlie Munger, qualifiait les références à cet indicateur de « bénéfice de charlatan » — une pique acerbe mais qui vise juste le défaut central de la mesure : la dépréciation et l'amortissement sont réintégrés comme s'ils étaient fictifs, alors que les actifs amortis (usines, camions, serveurs, logiciels) s'usent réellement et devront tôt ou tard être remplacés avec de la trésorerie bien réelle. Une entreprise à forte intensité capitalistique (une compagnie aérienne, un opérateur télécom, un industriel) peut afficher un EBITDA impressionnant alors que son flux de trésorerie disponible réel est mince, voire négatif, une fois déduites des dépenses d'entretien réalistes. L'EBITDA exclut également les intérêts — ce qui convient pour comparer la performance opérationnelle, mais devient dangereux s'il est utilisé sans précaution pour évaluer la capacité de survie d'une entreprise fortement endettée, car la facture d'intérêts, elle, est bien réelle et exigible en trésorerie, à échéance, quoi que dise l'EBITDA.",
      "Cet indicateur est aussi vulnérable à la manipulation précisément parce qu'il n'est pas normalisé : les entreprises publient un « EBITDA ajusté » qui exclut la rémunération en actions, les charges de restructuration, des pertes « exceptionnelles » qui reviennent étrangement souvent, et d'autres éléments jugés non représentatifs par la direction. Chaque réintégration éloigne un peu plus le chiffre de la réalité de la trésorerie et le rapproche du récit que la direction souhaite raconter — c'est pourquoi les prêteurs et analystes avertis lisent la réconciliation entre résultat net et EBITDA ligne par ligne plutôt que d'accepter le chiffre affiché tel quel, et pourquoi l'EBITDA doit rester une donnée parmi d'autres (aux côtés du flux de trésorerie disponible et du tableau des flux de trésorerie) plutôt qu'un verdict autonome sur la santé d'une entreprise."
    ],
    "glossary": [
      {
        "term": "EBIT",
        "def": "Résultat avant intérêts et impôts — le résultat d'exploitation, c'est-à-dire l'EBITDA avant réintégration des D&A."
      },
      {
        "term": "EBITDA ajusté",
        "def": "Un EBITDA retraité avec des réintégrations choisies par l'entreprise — moins standardisé, plus enclin à l'enjolivement."
      },
      {
        "term": "VE/EBITDA",
        "def": "Un multiple de valorisation courant comparant la valeur d'entreprise à l'EBITDA, apprécié car il neutralise les différences de structure de capital."
      }
    ]
  },
  "depreciation": {
    "title": "Dépréciation (amortissement des immobilisations corporelles)",
    "hook": "La règle comptable qui admet que chaque actif se meurt discrètement — et qui en étale le coût sur sa durée de vie utile.",
    "tldr": "La dépréciation étale le coût d'un actif physique à long terme sur sa durée de vie utile, en faisant correspondre la charge aux périodes où il contribue réellement à générer des revenus.",
    "definition": [
      "La dépréciation répartit le coût d'un actif corporel (machines, bâtiments, véhicules, équipements) sur les années durant lesquelles il est censé être utilisé, plutôt que de passer en charge la totalité du prix d'achat dès son acquisition. Cela découle du principe de rattachement des charges aux produits propre à la comptabilité d'engagement : si une machine contribue à générer des revenus pendant dix ans, son coût doit être comptabilisé en charge sur ces dix années, et non intégralement l'année de l'achat — sinon une seule année paraîtrait artificiellement déficitaire et les neuf suivantes artificiellement profitables. (L'amortissement des immobilisations incorporelles est le concept identique appliqué aux actifs incorporels, comme les brevets ou les marques acquises, plutôt qu'aux actifs physiques.)",
      "La dépréciation est une charge non monétaire : la trésorerie est sortie de l'entreprise au moment de l'achat de l'actif, mais la charge est constatée progressivement par la suite. C'est pourquoi elle est réintégrée aussi bien dans le tableau des flux de trésorerie que dans le calcul de l'EBITDA — elle réduit le bénéfice déclaré sans réduire la trésorerie de la période où elle est enregistrée. Les entreprises choisissent parmi plusieurs méthodes (linéaire, qui étale le coût de façon égale ; dégressive, qui concentre la charge sur les premières années ; unités de production, liée à l'usage réel), et le choix de la méthode, de la durée de vie utile et de la valeur résiduelle relèvent tous d'un jugement bien réel qui façonne le bénéfice déclaré, l'impôt et la valeur comptable des actifs au bilan."
    ],
    "keyPoints": [
      "Étale le coût d'un actif sur sa durée de vie utile plutôt que de le passer entièrement en charge dès l'achat.",
      "Suit le principe de rattachement des charges aux produits : la charge est constatée en même temps que les revenus qu'elle contribue à générer.",
      "C'est une charge non monétaire — réintégrée dans le tableau des flux de trésorerie et dans l'EBITDA.",
      "La méthode, la durée de vie utile et la valeur résiduelle sont des choix de jugement qui influencent le bénéfice déclaré et l'impôt."
    ],
    "formula": {
      "expression": "Dépréciation linéaire = (Coût − Valeur résiduelle) / Durée de vie utile",
      "legend": "Coût = prix d'achat · Valeur résiduelle = valeur estimée en fin de vie · Durée de vie utile = nombre d'années d'utilisation prévues",
      "note": "La méthode la plus courante ; la méthode dégressive et la méthode des unités de production répartissent le même coût total, mais différemment dans le temps."
    },
    "example": {
      "scenario": "Une boulangerie achète un four pour 50 000 €, prévoit de l'utiliser pendant 9 ans, et estime sa valeur résiduelle à 5 000 € à la fin. Avec la méthode linéaire, quelle est la charge annuelle de dépréciation ?",
      "steps": [
        "Montant amortissable = Coût − Valeur résiduelle = 50 000 − 5 000 = 45 000 €.",
        "Dépréciation annuelle = 45 000 / 9 = 5 000 € par an.",
        "Chaque année, le compte de résultat enregistre 5 000 € de charge, même si aucune trésorerie n'est sortie de l'entreprise cette année-là.",
        "Après 9 ans, la valeur comptable du four au bilan est passée de 50 000 € à sa valeur résiduelle de 5 000 €."
      ],
      "result": "La sortie de trésorerie de 50 000 € (dépensée intégralement la première année) est au contraire constatée comme une charge de 5 000 € répartie sur neuf ans — faisant correspondre le coût aux années où le four contribue réellement à fabriquer et vendre du pain."
    },
    "deepDive": [
      "Une subtilité qui déroute de nombreux apprenants : la dépréciation utilisée pour le reporting financier (dépréciation comptable, présentée aux actionnaires) diffère souvent de celle utilisée pour les déclarations fiscales (dépréciation fiscale, présentée à l'administration fiscale) — les deux étant légales, simultanément, pour le même actif. Dans de nombreuses juridictions, les règles fiscales autorisent des méthodes de dépréciation accélérée ou des amortissements exceptionnels qui concentrent la charge bien plus rapidement que la méthode linéaire, permettant aux entreprises de différer leurs impôts vers les années suivantes (un prêt sans intérêt, réel et précieux, consenti par l'État). Cela crée un « passif d'impôt différé » au bilan — l'écart entre ce qui a été passé en charge à des fins comptables et à des fins fiscales — et explique pourquoi une entreprise rentable et en croissance peut afficher un résultat avant impôt confortable tout en payant très peu d'impôt en trésorerie une année donnée : ce n'est pas de l'évasion fiscale, c'est une question de calendrier, qui s'inverse dans les années suivantes lorsque la dépréciation fiscale s'épuise plus vite que la dépréciation comptable.",
      "La dépréciation confère aussi à la direction une réelle marge de manœuvre pour façonner les résultats déclarés sans toucher à l'activité sous-jacente : allonger la durée de vie utile supposée d'un actif, relever sa valeur résiduelle supposée, ou changer de méthode, réduisent tous la charge annuelle de dépréciation et gonflent le bénéfice déclaré, alors même que rien n'a changé physiquement dans l'actif. Des hypothèses optimistes peuvent flatter les résultats pendant des années — jusqu'à ce que l'actif doive être remplacé plus tôt que prévu, provoquant une dépréciation exceptionnelle soudaine ou une flambée inhabituelle des dépenses d'investissement qui surprend les investisseurs. C'est précisément pourquoi l'EBITDA, qui réintègre entièrement la dépréciation, peut être trompeur pour les entreprises à forte intensité capitalistique : les actifs s'usent réellement, une trésorerie bien réelle sera un jour nécessaire pour les remplacer, et la dépréciation — aussi imparfaite soit-elle comme estimation — est la tentative de la comptabilité de reconnaître ce coût économique réel et continu avant que la facture n'arrive effectivement."
    ],
    "glossary": [
      {
        "term": "Valeur résiduelle",
        "def": "La valeur de récupération estimée d'un actif à la fin de sa durée de vie utile — déduite avant de répartir le coût."
      },
      {
        "term": "Dépréciation accélérée",
        "def": "Des méthodes qui concentrent la charge sur les premières années, souvent utilisées à des fins fiscales pour différer l'impôt dû en trésorerie."
      },
      {
        "term": "Valeur comptable",
        "def": "Le coût d'origine d'un actif diminué de la dépréciation cumulée — sa valeur nette au bilan."
      }
    ]
  }
};
