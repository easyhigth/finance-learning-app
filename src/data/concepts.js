// Curated finance learning dataset — personal use, depth over breadth.
// Each concept is self-contained: everything you need on one page.

export const categories = [
  { id: 'foundations', name: 'Foundations', icon: '💡', blurb: 'The ideas every financially literate person needs first.' },
  { id: 'investing', name: 'Investing', icon: '📈', blurb: 'How money grows when you put it to work.' },
  { id: 'markets', name: 'Markets', icon: '📊', blurb: 'How prices get made and who trades them.' },
  { id: 'personal', name: 'Personal Finance', icon: '💰', blurb: 'Budgets, credit, savings — your own money.' },
  { id: 'corporate', name: 'Corporate Finance', icon: '🏢', blurb: 'How companies fund and run themselves.' },
  { id: 'banking', name: 'Banking & Credit', icon: '🏦', blurb: 'Interest, loans, and how banks work.' },
  { id: 'economics', name: 'Economics', icon: '🌍', blurb: 'The big forces behind prices and growth.' },
  { id: 'risk', name: 'Risk & Behavior', icon: '🎯', blurb: 'How we mis-handle uncertainty.' },
  { id: 'institutions', name: 'Financial Institutions', icon: '🏛️', blurb: 'The architects and gatekeepers of the financial system.' },
  { id: 'derivatives', name: 'Derivatives & Trading', icon: '⚡', blurb: 'Advanced tools for hedging, speculation, and price discovery.' },
  { id: 'accounting', name: 'Accounting', icon: '📚', blurb: 'The language of business — how companies record and report money.' },
  { id: 'fintech', name: 'Crypto & Fintech', icon: '🔗', blurb: 'Digital money, ledgers, and the technology reshaping finance.' },
];

export const concepts = [
  /* ---------------- FOUNDATIONS ---------------- */
  {
    id: 'time-value-of-money',
    title: 'Time Value of Money',
    category: 'foundations',
    icon: '⏳',
    color: ['#6366f1', '#8b5cf6'],
    illustration: 'curve',
    hook: 'A euro today is worth more than a euro tomorrow — the single idea all finance rests on.',
    tldr: 'Money now is worth more than the same amount later, because money now can earn a return in the meantime.',
    definition: [
      'The time value of money (TVM) says a sum of money today has a higher value than the identical sum in the future. The reason is opportunity: money you hold now can be invested and grow, so giving up that money for a year means giving up the returns it would have earned.',
      'This is why lenders charge interest, why investors demand a return, and why "pay me later" always costs someone. Every loan, bond, stock valuation, and retirement calculation is built on TVM math.',
    ],
    keyPoints: [
      'Present value (PV) discounts a future amount back to today using a rate.',
      'Future value (FV) compounds a present amount forward using a rate.',
      'The higher the rate or the longer the time, the bigger the gap between PV and FV.',
      'Inflation makes TVM even harsher: future money buys less AND lost the chance to grow.',
    ],
    formula: {
      expression: 'FV = PV × (1 + r)ⁿ',
      legend: 'FV = future value · PV = present value · r = periodic rate · n = number of periods',
      note: 'Flip it to discount: PV = FV ÷ (1 + r)ⁿ.',
    },
    example: {
      scenario: 'Would you rather have €1,000 today or €1,050 in one year, if you can invest at 6%?',
      steps: [
        'FV of €1,000 at 6% for 1 year = 1000 × 1.06 = €1,060',
        '€1,060 (today\'s money grown) beats €1,050 (the offered future amount)',
        'So €1,000 today is worth more — take it now.',
      ],
      result: 'Taking €1,000 today and investing it beats waiting for €1,050. The "bird in the hand" has a real, computable advantage.',
    },
    deepDive: [
      'TVM forces a single question onto every financial decision: "What could this money do instead?" That alternative return is the "discount rate". A company evaluating a project discounts future cash flows at its cost of capital; if the present value of inflows exceeds the cost, the project is worth doing.',
      'Two corollaries trip people up. First, compounding works both ways: debt compounds against you just as investing compounds for you. Second, the rate you pick changes everything — discount future cash at 3% and a distant payment looks fine; discount at 9% and it nearly vanishes. Small rate changes, big value changes, long horizons.',
    ],
    glossary: [
      { term: 'Discount rate', def: 'The return used to bring future cash back to today\'s value.' },
      { term: 'Compounding', def: 'Earning returns on prior returns, accelerating growth over time.' },
      { term: 'Opportunity cost', def: 'The return you forgo by choosing one option over another.' },
    ],
    related: ['compound-interest', 'inflation', 'opportunity-cost'],
  },
  {
    id: 'compound-interest',
    title: 'Compound Interest',
    category: 'foundations',
    icon: '🧮',
    color: ['#16a34a', '#0d9488'],
    illustration: 'growth',
    hook: 'Einstein supposedly called it the eighth wonder of the world — returns that earn their own returns.',
    tldr: 'Compound interest is earning a return on both your original money and the interest it already accumulated, so growth accelerates over time.',
    definition: [
      'With simple interest you earn a return only on your starting amount. With compound interest you earn a return on the starting amount AND on all the interest piled up so far. Each period, the base you earn on gets bigger, so the growth curve bends upward instead of running in a straight line.',
      'The effect is modest at first and dramatic later. The longer the money compounds, the more the gains come from past gains rather than new deposits. This is why starting early beats investing more later.',
    ],
    keyPoints: [
      'Compounding frequency matters: monthly beats yearly at the same nominal rate.',
      'Time is the multiplier — the last years contribute the most.',
      'It works against you on debt (credit cards, loans) just as it works for you on savings.',
      'The "rule of 72" estimates doubling time: 72 ÷ rate ≈ years to double.',
    ],
    formula: {
      expression: 'A = P × (1 + r/n)^(n·t)',
      legend: 'A = final amount · P = principal · r = annual rate · n = times compounded per year · t = years',
      note: 'Rule of 72: years to double ≈ 72 ÷ r (r as a number, e.g. 6).',
    },
    example: {
      scenario: 'Invest €200/month at 8% compounded monthly for 30 years. How much do you end with?',
      steps: [
        'Monthly rate r/n = 0.08/12 ≈ 0.00667',
        'Number of periods n·t = 12 × 30 = 360',
        'Annuity FV = 200 × [((1.00667)^360 − 1) / 0.00667]',
        '(1.00667)^360 ≈ 11.02 → factor ≈ 1503',
        'FV ≈ 200 × 1503 ≈ €300,600',
      ],
      result: 'You put in €72,000 total (€200 × 360). Compounding turns it into ~€300,600 — over 4× your contributions.',
    },
    deepDive: [
      'The psychological heart of compounding is that it rewards patience invisibly. In year 1 the gains feel trivial; in year 25 they dwarf the deposits. People who bail out early never see the bend in the curve, which is exactly where the money is made.',
      'Compounding frequency has a quiet cost: a "6% annual" rate compounded monthly is really 6.17% effective. Lenders advertise the lower nominal number; the effective annual rate (EAR) is what you actually pay or earn. Always compare EAR to EAR.',
    ],
    glossary: [
      { term: 'Principal', def: 'The original amount you invest or borrow.' },
      { term: 'EAR', def: 'Effective annual rate — the true yearly rate after compounding.' },
      { term: 'Rule of 72', def: 'Shortcut: divide 72 by the rate to estimate doubling time.' },
    ],
    related: ['time-value-of-money', 'dollar-cost-averaging', 'inflation'],
  },
  {
    id: 'inflation',
    title: 'Inflation',
    category: 'foundations',
    icon: '🔥',
    color: ['#f59e0b', '#dc2626'],
    illustration: 'bars',
    hook: 'The silent tax on anyone holding cash — the same money buys less every year.',
    tldr: 'Inflation is the general rise in prices over time, which means each unit of currency buys less than before.',
    definition: [
      'Inflation is a sustained increase in the average price level of goods and services. When inflation is 3%, what €100 buys today costs €103 a year later — your money lost 3% of its purchasing power even though the number stayed the same.',
      'A low, predictable inflation (around 2%) is considered healthy: it greases the economy and discourages hoarding cash. High or volatile inflation erodes savings, distorts planning, and punishes anyone on a fixed income.',
    ],
    keyPoints: [
      'Real return = nominal return − inflation. A 5% return at 3% inflation is a 2% real return.',
      'Cash earns ~0%, so inflation makes cash a guaranteed loser in real terms.',
      'Wage growth must outpace inflation or your living standard falls.',
      'Deflation (falling prices) is its own problem — it rewards not spending, which stalls economies.',
    ],
    formula: {
      expression: 'Real return = (1 + nominal) ÷ (1 + inflation) − 1',
      legend: 'nominal = stated return · inflation = inflation rate (as decimals)',
      note: 'For small rates, the shortcut real ≈ nominal − inflation is close enough.',
    },
    example: {
      scenario: 'Savings account pays 2%. Inflation is 4%. What is your real return?',
      steps: [
        'Nominal return = 0.02, inflation = 0.04',
        'Real return = (1.02 ÷ 1.04) − 1 = 0.9808 − 1 ≈ −0.0192',
        'Real return ≈ −1.9%',
      ],
      result: 'Your account shows more euros, but each euro buys less. You are 1.9% poorer in real terms despite "earning interest".',
    },
    deepDive: [
      'Inflation is measured by price indexes (CPI for consumers, PCE in the US). These track a basket of goods, which never matches any one person\'s spending — your personal inflation can be very different from the official number, especially if you spend heavily on housing or energy.',
      'Assets protect against inflation differently. Equities raise prices with costs; real assets (property, commodities) hold real value; long bonds are crushed by inflation because their fixed payments buy less. The investor\'s job is to own things whose cash flows grow faster than prices.',
    ],
    glossary: [
      { term: 'CPI', def: 'Consumer Price Index — measures the cost of a typical basket of goods.' },
      { term: 'Real return', def: 'Return after subtracting inflation.' },
      { term: 'Deflation', def: 'Falling prices — the opposite of inflation.' },
    ],
    related: ['time-value-of-money', 'interest-rate', 'market-cap'],
  },
  {
    id: 'risk-vs-return',
    title: 'Risk vs. Return',
    category: 'foundations',
    icon: '⚖️',
    color: ['#8b5cf6', '#ec4899'],
    illustration: 'scale',
    hook: 'No extra return without extra risk — the bargain at the center of all investing.',
    tldr: 'Higher potential returns always come with higher risk of losing money. You cannot separate the two.',
    definition: [
      'Risk and return are joined at the hip. Assets that have paid more over time (stocks) have also swung more in price; assets that barely move (cash, short bonds) pay little. The extra return is the reward for accepting the extra uncertainty.',
      'There is no free lunch: any investment offering a high "guaranteed" return is hiding the risk somewhere — liquidity, fraud, or a risk you are not seeing. The question is never "high return or low return?" but "am I being paid enough for the risk I am taking?"',
    ],
    keyPoints: [
      'Risk is usually measured by volatility (standard deviation of returns).',
      'Diversification reduces risk without giving up much return — the rare free lunch.',
      'Your risk tolerance depends on time horizon and need, not just temperament.',
      '"Risk-free" usually means government short-term debt; everything else adds a risk premium.',
    ],
    formula: {
      expression: 'Expected return = Risk-free rate + Risk premium',
      legend: 'Risk-free rate = return on safe government debt · Risk premium = extra pay for the risk taken',
      note: 'A stock might be: 4% risk-free + 5% equity premium = ~9% expected.',
    },
    example: {
      scenario: 'Cash returns ~2%, government bonds ~4%, stocks ~9% long-run. Why not just own stocks?',
      steps: [
        'Stocks\' extra ~5% over bonds is the equity risk premium — pay for living through crashes.',
        'Stocks can drop 40%+ in a year; cash cannot.',
        'If you need the money in 1 year, the risk of stocks is unacceptable.',
        'If you need it in 30 years, the risk of NOT owning stocks (inflation drag) is worse.',
      ],
      result: 'Same asset, different decision — risk depends on your horizon, not the asset alone.',
    },
    deepDive: [
      'A common error is to treat volatility and "real risk" as the same. For a long-horizon investor, a 30% drawdown is not a loss — it is a chance to buy cheaper. The real risk is permanent loss of capital (a company going to zero) or being forced to sell at the bottom. Volatility is just the price of admission.',
      'Risk capacity (can you afford the loss?) should drive asset allocation more than risk tolerance (how much loss can you stomach?). People with high capacity but low tolerance often end up too conservative and run out of money in real terms; people with low capacity but high tolerance blow up. Match the plan to capacity, then nudge tolerance up with education.',
    ],
    glossary: [
      { term: 'Volatility', def: 'How much an asset\'s price swings — the usual proxy for risk.' },
      { term: 'Equity risk premium', def: 'The extra return stocks offer over risk-free debt.' },
      { term: 'Drawdown', def: 'The drop from a peak to a trough in the value of an investment.' },
    ],
    related: ['diversification', 'opportunity-cost', 'risk-management'],
  },
  {
    id: 'opportunity-cost',
    title: 'Opportunity Cost',
    category: 'foundations',
    icon: '🔀',
    color: ['#0ea5e9', '#6366f1'],
    illustration: 'scale',
    hook: 'The true cost of anything is the best thing you gave up to get it.',
    tldr: 'Opportunity cost is the value of the next-best alternative you forgo when you make a choice.',
    definition: [
      'Every choice uses scarce money or time, so choosing one thing means not choosing another. Opportunity cost is the value of the best alternative you gave up. Spending €5,000 on a car upgrade is also not investing €5,000 — the forgone growth is part of the car\'s real cost.',
      'Most people price only the visible cost (the price tag) and ignore the invisible one (what the money would have done instead). Including opportunity cost makes many "cheap" things expensive and many "expensive" things reasonable.',
    ],
    keyPoints: [
      'Only the next-best alternative counts, not all alternatives combined.',
      'Sunk costs are irrelevant — they are gone regardless of what you do now.',
      'Time has an opportunity cost too: hours have a financial equivalent.',
      'Comparing options without their opportunity costs leads to systematically bad choices.',
    ],
    formula: {
      expression: 'True cost = Direct cost + Forgone return',
      legend: 'Direct cost = what you pay · Forgone return = what the money would have earned',
      note: 'Over 30 years at 7%, €1 spent is really €7.61 of future wealth forgone.',
    },
    example: {
      scenario: 'Buy a €3,000 TV on credit at 18%, or pay cash from a fund earning 7%? Look 10 years out.',
      steps: [
        'Finance it: €3,000 at 18% for 10 years (if unpaid) ≈ €15,700 owed.',
        'Pay cash: lose 10 years of growth on €3,000 at 7% ≈ €5,900 missed.',
        'Either way the "€3,000 TV" costs far more than €3,000.',
        'Best path: save first, buy cash, keep the €2,900 difference invested.',
      ],
      result: 'The TV was never €3,000. Counted honestly, it cost years of compounding — opportunity cost is the hidden price tag.',
    },
    deepDive: [
      'Opportunity cost reframes "saving money." Spending two hours to save €10 only makes sense if your time\'s next-best use is worth less than €5/hour. The same logic exposes why "I got it on sale" is often a rationalization: the question is whether the thing was worth its all-in cost, not whether the discount was big.',
      'Businesses use this constantly — capital budgeting ranks projects by the return on the best forgone project, not by absolute profit. Saying yes to a mediocre project silently says no to a better one. The skill is not finding good options; it is declining good options that block great ones.',
    ],
    glossary: [
      { term: 'Sunk cost', def: 'Money already spent that should not affect future decisions.' },
      { term: 'Capital budgeting', def: 'Choosing which projects a company funds, by return.' },
      { term: 'Hurdle rate', def: 'The minimum return a project must clear to be worth doing.' },
    ],
    related: ['time-value-of-money', 'risk-vs-return', 'dollar-cost-averaging'],
  },

  /* ---------------- INVESTING ---------------- */
  {
    id: 'diversification',
    title: 'Diversification',
    category: 'investing',
    icon: '🥧',
    color: ['#22c55e', '#3b82f6'],
    illustration: 'pie',
    hook: 'Don\'t try to pick the winner — own the whole field so you can\'t miss it.',
    tldr: 'Spreading money across many unrelated assets so no single failure can sink you, while keeping the overall return.',
    definition: [
      'Diversification means holding many assets whose risks do not move together. If one sector crashes, others may hold steady, smoothing the ride without giving up much expected return. The magic is in low correlation: combining shaky assets that do not shake at the same time produces a surprisingly stable portfolio.',
      'It is the closest thing to a free lunch in finance — you cut risk sharply while barely trimming return. The limit is that once everything is diversified, you are left with the market\'s own risk, which cannot be diversified away.',
    ],
    keyPoints: [
      'Risk falls fast as you add uncorrelated assets, then flattens — 20–30 names capture most of the benefit.',
      'Diversify across asset classes (stocks, bonds, real estate), geographies, and sectors.',
      'Correlation, not count, is what matters — 30 banks are not diversified.',
      'Over-diversification ("diworsification") adds cost and complexity with no extra safety.',
    ],
    formula: {
      expression: 'Portfolio variance = Σ wᵢ²·σᵢ² + ΣΣ wᵢ·wⱼ·σᵢ·σⱼ·ρᵢⱼ',
      legend: 'w = weight · σ = volatility · ρ = correlation between assets',
      note: 'Low ρ shrinks the cross terms, which is where the risk reduction comes from.',
    },
    example: {
      scenario: 'Two stocks, each 50/50, same 20% volatility. Compare ρ = 1.0 (identical moves) vs ρ = 0.',
      steps: [
        'ρ = 1.0: portfolio volatility = 20% (no benefit, they move as one)',
        'ρ = 0: portfolio volatility = √(0.5²·20² + 0.5²·20²) ≈ 14.1%',
        'Risk cut ~30% for the same expected return, just by pairing uncorrelated stocks.',
        'Returns average out; the downside does not.',
      ],
      result: 'Same expected return, ~30% less risk — the free lunch, paid for by giving up the chance to own only the winner.',
    },
    deepDive: [
      'Diversification fails exactly when you need it most: in crashes, correlations spike toward 1 as "everything sells off together." Holding some bonds, cash, or gold helps because their correlation to stocks often (not always) stays low in panics. True diversification is about what protects you when stocks do not, not about owning many stocks.',
      'Index funds and ETFs deliver diversification cheaply. A single global equity ETF can hold thousands of stocks for ~0.1% per year — far better than hand-picking a dozen. The enemy of diversification is conviction in a single bet; the friend is the humility to admit you cannot know which line will win.',
    ],
    glossary: [
      { term: 'Correlation', def: 'How closely two assets\' returns move together (−1 to +1).' },
      { term: 'Systematic risk', def: 'Market-wide risk that diversification cannot remove.' },
      { term: 'Diworsification', def: 'Over-diversifying to the point of added cost and no benefit.' },
    ],
    related: ['risk-vs-return', 'etf', 'risk-management'],
  },
  {
    id: 'dollar-cost-averaging',
    title: 'Dollar-Cost Averaging',
    category: 'investing',
    icon: '📆',
    color: ['#3b82f6', '#22c55e'],
    illustration: 'bars',
    hook: 'Buy a little every month on a schedule — and stop trying to time the market.',
    tldr: 'Investing a fixed amount at regular intervals, so you buy more shares when prices are low and fewer when high.',
    definition: [
      'Dollar-cost averaging (DCA) means investing the same amount on a fixed schedule regardless of price. Because the amount is fixed, you automatically buy more units when prices are down and fewer when they are up. This averages your purchase price downward and removes the impossible task of picking the best moment.',
      'Its real power is behavioral: it turns investing into a habit and removes the agony of "is now a good time?" You never get the single best price, but you also never commit everything right before a crash.',
    ],
    keyPoints: [
      'Fixed money + variable price = more shares when cheap, fewer when dear.',
      'Removes emotion: the schedule decides, not your mood.',
      'Lump-sum beats DCA on average (markets rise over time), but DCA reduces regret and timing risk.',
      'Works best with volatile assets you want to hold long-term, like broad equity funds.',
    ],
    formula: {
      expression: 'Average price = Total invested ÷ Total shares bought',
      legend: 'Total invested = sum of fixed payments · Total shares = Σ (payment ÷ price that day)',
      note: 'This is the harmonic mean of prices — always ≤ the simple average.',
    },
    example: {
      scenario: 'Invest €300/month for 4 months. Prices: €10, €6, €8, €12. Compare to buying €1,200 once at the average price.',
      steps: [
        'Shares: 30 + 50 + 37.5 + 25 = 142.5 shares',
        'Total invested = €1,200 → avg price = 1200 ÷ 142.5 ≈ €8.42',
        'Simple average price = (10+6+8+12) ÷ 4 = €9.00',
        'DCA bought cheaper (€8.42 < €9.00) by loading up at €6.',
      ],
      result: 'By buying more at the low price, DCA averaged your cost below the simple average — a small but real edge, repeated for decades.',
    },
    deepDive: [
      'DCA\'s edge comes from arithmetic: the harmonic mean is always below the arithmetic mean when prices vary. But this is a mathematical curiosity, not a guarantee of profit — if prices only rise, you would have done better investing everything immediately (lump sum wins ~two-thirds of the time in rising markets). The honest case for DCA is risk and behavior, not return.',
      'The danger of DCA is stopping it during crashes — exactly when it buys the most cheaply. Investors who pause "until things calm down" forfeit the whole point. The discipline is the strategy; without it, DCA is just slow lump-summing with worse results.',
    ],
    glossary: [
      { term: 'Lump-sum investing', def: 'Investing everything at once — the alternative to DCA.' },
      { term: 'Harmonic mean', def: 'The "average of rates" that DCA naturally produces.' },
      { term: 'Market timing', def: 'Trying to buy low and sell high by predicting moves — rarely works.' },
    ],
    related: ['compound-interest', 'etf', 'opportunity-cost'],
  },
  {
    id: 'etf',
    title: 'ETFs & Index Funds',
    category: 'investing',
    icon: '🧺',
    color: ['#06b6d4', '#3b82f6'],
    illustration: 'pie',
    hook: 'Buy the whole market in one click, for pennies — and beat most professionals over time.',
    tldr: 'A fund that holds a basket of assets tracking an index, traded like a stock, with very low fees.',
    definition: [
      'An index fund tracks a basket (an index like the S&P 500 or MSCI World), so you own a slice of hundreds or thousands of companies in one purchase. An ETF is a fund that trades on an exchange like a stock, so you can buy and sell it anytime; most index funds are now ETFs.',
      'Because they do not pay managers to pick stocks, index funds charge tiny fees (often under 0.2% per year). After costs and taxes, low-cost index funds beat the large majority of actively managed funds over long periods — a result so consistent it is now treated as near-law.',
    ],
    keyPoints: [
      'Fee (TER) matters enormously: 1% vs 0.1% over 30 years ≈ a 25% wealth gap.',
      'Broad index = instant diversification across sectors and countries.',
      'You get the market return — no more, no less. That beats ~90% of pros over 15+ years.',
      'Tax-efficient and simple: one fund can hold your whole portfolio.',
    ],
    formula: {
      expression: 'Your return ≈ Market return − Fee − Tax drag',
      legend: 'Market return = index performance · Fee = total expense ratio · Tax drag = yearly tax leakage',
      note: 'Fees compound against you just like returns compound for you.',
    },
    example: {
      scenario: '€100,000 invested for 30 years at 7% market return. Compare a 1.0% fee fund vs a 0.1% fee ETF.',
      steps: [
        '1.0% fee: net 6.0% → 100,000 × 1.06³⁰ ≈ €574,000',
        '0.1% fee: net 6.9% → 100,000 × 1.069³⁰ ≈ €738,000',
        'Same market, same strategy, 0.9%/year fee difference.',
        'Gap ≈ €164,000 — more than your original investment.',
      ],
      result: 'A 0.9% fee difference ate €164,000 over 30 years. The cheapest fund is usually the best fund.',
    },
    deepDive: [
      'Why do active funds usually lose? Markets are competitive and prices already reflect available information, so beating the average requires finding mistakes others miss — and the average is hard to beat after costs. The few who do beat it are hard to identify in advance and rarely repeat. Indexing concedes the un-winnable game of stock-picking to win the winnable game of cost and discipline.',
      'Not all ETFs are index funds, and not all index funds are good. Some ETFs track niche themes with high fees and poor diversification; some "smart beta" funds add complexity and cost for uncertain benefit. The default for most people is a small number of broad, cheap, market-cap-weighted funds covering stocks and bonds globally — boring and effective.',
    ],
    glossary: [
      { term: 'TER / Expense ratio', def: 'The yearly fee a fund charges, as % of assets.' },
      { term: 'Market-cap weighting', def: 'Owning companies in proportion to their size — the default index method.' },
      { term: 'Active management', def: 'A manager picks stocks trying to beat the index — usually fails after fees.' },
    ],
    related: ['diversification', 'market-cap', 'dollar-cost-averaging'],
  },
  {
    id: 'dividends',
    title: 'Dividends',
    category: 'investing',
    icon: '💵',
    color: ['#84cc16', '#16a34a'],
    illustration: 'cycle',
    hook: 'The cash a company hands you just for owning its stock — profit you did not have to sell to get.',
    tldr: 'A dividend is a share of a company\'s profit paid out to shareholders, usually quarterly, in cash.',
    definition: [
      'When a company earns a profit, it can reinvest the money to grow, buy back stock, or hand some back to shareholders as a dividend. A dividend is that cash payment, typically a few cents or euros per share, paid on a regular schedule. Mature, profitable companies (utilities, banks, consumer goods) tend to pay them; fast-growing companies reinvest instead.',
      'The dividend yield is the annual dividend divided by the share price — a measure of the cash return. A €100 stock paying €3/year has a 3% yield. Reinvested dividends are a huge part of long-term returns, because they compound when you use them to buy more shares.',
    ],
    keyPoints: [
      'Yield = annual dividend ÷ share price. High yield can mean high risk, not a bargain.',
      'Dividend growth matters more than today\'s yield — a growing payout beats a fat static one.',
      'Dividends are not free money: the price usually drops by the dividend on the ex-dividend date.',
      'Taxed as income in many countries, often less favorably than capital gains.',
    ],
    formula: {
      expression: 'Dividend yield = Annual dividend ÷ Share price',
      legend: 'Annual dividend = yearly cash per share · Share price = current market price',
      note: 'Payout ratio = dividend ÷ earnings; above ~75% is often unsustainable.',
    },
    example: {
      scenario: 'A stock costs €50, pays €2/year (4% yield), and raises the dividend 7%/year. You reinvest. After 20 years?',
      steps: [
        'Starting yield 4%, growing 7%/year → yield-on-cost after 20 yrs ≈ 4% × 1.07²⁰ ≈ 15.4%',
        'Dividend alone grows to €2 × 1.07²⁰ ≈ €7.73/share yearly.',
        'With reinvestment, total return ≈ price growth + compounding dividends.',
        'Most of the final income is from dividends on dividends, not the original.',
      ],
      result: 'A 4% starter yield, grown and reinvested, becomes a large stream of cash — the quiet engine of long-term compounding.',
    },
    deepDive: [
      'A "dividend aristocrat" is a company that has raised its dividend for 25+ years — a signal of durable, growing profits. Investors prize them for steady income and inflation protection, since payouts rise over time. But dividend obsession has a trap: chasing the highest yields often leads to troubled companies whose high yield is a warning (price has fallen, payout may be cut).',
      'Dividends vs. buybacks is a long debate. Both return cash to shareholders; buybacks are more tax-efficient and flexible, dividends are more visible and "sticky" (companies hate cutting them). Economically they are similar; the difference is tax treatment and signaling. A company buying back cheap stock is smart; one buying back overpriced stock is destroying value.',
    ],
    glossary: [
      { term: 'Ex-dividend date', def: 'The cutoff: own before this date to get the next dividend.' },
      { term: 'Payout ratio', def: 'Share of earnings paid as dividends — sustainability gauge.' },
      { term: 'DRIP', def: 'Dividend reinvestment plan — auto-buys more shares with dividends.' },
    ],
    related: ['market-cap', 'etf', 'compound-interest'],
  },

  /* ---------------- MARKETS ---------------- */
  {
    id: 'market-cap',
    title: 'Market Capitalization',
    category: 'markets',
    icon: '🏛️',
    color: ['#6366f1', '#0ea5e9'],
    illustration: 'bars',
    hook: 'How the market puts a price tag on a whole company — share price times shares.',
    tldr: 'Market cap is the total value of a company = share price × number of shares outstanding.',
    definition: [
      'Market capitalization is the stock market\'s valuation of an entire company: the price of one share multiplied by how many shares exist. A €100 stock with 10 million shares has a €1 billion market cap. It is the simplest answer to "what is this company worth, according to the market?"',
      'Size buckets matter: large-cap (>$10B) companies are stable and liquid; mid-caps are growing; small-caps are riskier with higher potential. Indexes weighted by market cap give bigger companies more influence, so a few huge firms can dominate an index.',
    ],
    keyPoints: [
      'Market cap = price × shares outstanding. It is the market\'s opinion, not a fact.',
      'Large-cap = stability; small-cap = growth potential + risk.',
      'Free-float cap counts only shares available to the public, not insider-held ones.',
      'Cap weighting means the biggest firms drive index returns.',
    ],
    formula: {
      expression: 'Market cap = Share price × Shares outstanding',
      legend: 'Share price = current trading price · Shares outstanding = total shares in existence',
      note: 'Enterprise value adds debt and subtracts cash for a fuller valuation.',
    },
    example: {
      scenario: 'Company A: €200 share, 50M shares → €10B cap. Company B: €20 share, 500M shares → €10B cap. Which is bigger?',
      steps: [
        'A: 200 × 50,000,000 = €10,000,000,000',
        'B: 20 × 500,000,000 = €10,000,000,000',
        'Same market value — share price alone says nothing about size.',
        'A "cheap" €20 stock can be a bigger company than a €200 stock.',
      ],
      result: 'Share price is meaningless for comparing size. Market cap is the real yardstick.',
    },
    deepDive: [
      'Market cap is not the same as value. A company can be a €10B cap with €2B of debt and no cash, or a €10B cap with no debt and €3B cash. Enterprise value (EV = cap + debt − cash) is what an acquirer would really pay, and ratios like EV/EBITDA are often more meaningful than price/earnings. Cap tells you the market\'s mood; EV tells you the underlying business price.',
      'In cap-weighted indexes, the biggest companies get the largest weight. As a giant rises, its weight rises, so the index concentrates in winners — sometimes a single firm can become 7% of an index. This is usually fine (it reflects where value is) but means index buyers implicitly momentum-follow, owning ever more of what has already gone up.',
    ],
    glossary: [
      { term: 'Free float', def: 'Shares the public can actually trade, excluding locked-up insider shares.' },
      { term: 'Enterprise value (EV)', def: 'Cap + debt − cash — the full price to buy the company.' },
      { term: 'Float adjustment', def: 'Index weighting by free float, not total shares.' },
    ],
    related: ['etf', 'valuation', 'liquidity'],
  },
  {
    id: 'liquidity',
    title: 'Liquidity',
    category: 'markets',
    icon: '💧',
    color: ['#0ea5e9', '#06b6d4'],
    illustration: 'curve',
    hook: 'How fast you can turn an asset into cash without giving up a price — the safety you only notice when it\'s gone.',
    tldr: 'Liquidity is how easily and cheaply you can sell an asset for cash at a fair price.',
    definition: [
      'Liquidity is the ability to convert an asset to cash quickly without taking a loss. Cash is perfectly liquid; a broadly traded stock is very liquid; real estate or private equity are illiquid — selling takes months and often requires a price cut. Liquidity has two halves: speed (how fast you can sell) and cost (how big a price concession you must accept).',
      'In markets, liquidity shows up as the bid-ask spread and depth: a liquid stock has a tight spread and lots of shares available at each price; an illiquid one has a wide spread and thin orders, so big trades move the price against you. Liquidity is confidence — it evaporates in panics precisely when people need it most.',
    ],
    keyPoints: [
      'Cash & equivalents = high liquidity; property, private equity, art = low.',
      'Bid-ask spread and depth measure market liquidity; tight + deep = good.',
      'Illiquid assets often pay a "liquidity premium" — extra return for the lock-up.',
      'Liquidity dries up in crises: "it\'s only there when you don\'t need it."',
    ],
    formula: {
      expression: 'Liquidation cost ≈ (Spread ÷ 2) × Trade size',
      legend: 'Spread = bid−ask gap · Trade size = shares sold',
      note: 'Worse for large trades in thin markets — "market impact" pushes price against you.',
    },
    example: {
      scenario: 'You must sell €100,000 of two stocks fast. Stock X: spread €0.02 on a €50 price. Stock Y: spread €0.80 on a €50 price.',
      steps: [
        'X: half-spread cost = (0.02÷2) × 2000 shares = €20',
        'Y: half-spread cost = (0.80÷2) × 2000 shares = €800',
        'Same trade, same price — Y costs €780 more to exit instantly.',
        'And Y\'s price would slip further as you sell (market impact).',
      ],
      result: 'Liquidity has a price. In a rush, the illiquid stock quietly taxes you €780 — the hidden cost of owning thin markets.',
    },
    deepDive: [
      'The liquidity premium is why illiquid assets (private equity, infrastructure, long bonds) offer higher expected returns: investors demand pay for tying up money. But the premium is only worth it if you genuinely do not need the money soon — if you are forced to sell an illiquid asset, you lose the premium AND take a haircut. Liquidity planning (holding enough cash/cash-equivalents) is what lets you actually capture the premium.',
      'Liquidity risk is systemic, not just personal. In 2008 and several bond-market flash events, liquidity vanished across the market at once: spreads blew out, buyers disappeared, and "safe" assets became untradeable at any sane price. Funds that promised daily liquidity but held illiquid assets broke. The lesson: an asset\'s liquidity in calm markets tells you little about its liquidity in a crisis.',
    ],
    glossary: [
      { term: 'Bid-ask spread', def: 'Gap between best buy and sell prices — a liquidity tax.' },
      { term: 'Market impact', def: 'How much your own trade moves the price against you.' },
      { term: 'Liquidity premium', def: 'Extra return investors demand for tying up money.' },
    ],
    related: ['market-cap', 'bull-bear-market', 'risk-management'],
  },
  {
    id: 'bull-bear-market',
    title: 'Bull & Bear Markets',
    category: 'markets',
    icon: '🐂',
    color: ['#16a34a', '#dc2626'],
    illustration: 'curve',
    hook: 'Bulls charge up, bears swipe down — two names for the moods that move every price.',
    tldr: 'A bull market is a sustained rise in prices; a bear market is a sustained fall, usually 20%+ from peak.',
    definition: [
      'A bull market is a prolonged period of rising prices and optimism; a bear market is a prolonged fall, conventionally a drop of 20% or more from a recent peak, accompanied by pessimism and often recession. The names come from how each animal attacks: a bull thrusts its horns up, a bear swipes its paws down.',
      'Markets spend most of history in bull territory, which is why "time in the market beats timing the market." But bear markets are the test of an investor — they feel long, scare people into selling at the bottom, and reward those who hold or buy through them. Most long-term returns are earned by staying invested through both.',
    ],
    keyPoints: [
      'Bear = −20% from peak (rule of thumb); correction = −10%.',
      'Bulls last years; bears are shorter but sharper, and feel worse.',
      'Bear-market rallies trick people — big up days often happen inside downtrends.',
      'The biggest up days cluster in the worst down periods — missing them ruins returns.',
    ],
    formula: {
      expression: 'Recovery gain needed = 1 ÷ (1 − loss) − 1',
      legend: 'loss = fraction lost from peak (as a decimal)',
      note: 'Lose 50% → need +100% just to break even. Losses are asymmetric.',
    },
    example: {
      scenario: 'Your portfolio falls 50% in a bear market. How much must it gain to recover?',
      steps: [
        'Loss = 50%, so remaining value = 50% of original.',
        'Recovery gain = 1 ÷ (1 − 0.5) − 1 = 1 ÷ 0.5 − 1 = 100%',
        'A 50% loss requires a 100% gain to get back to even.',
        'A 20% loss needs only +25%; an 80% loss needs +400%.',
      ],
      result: 'Losses are asymmetric — the deeper the hole, the disproportionately harder the climb. This is why avoiding catastrophic loss matters more than maximizing gains.',
    },
    deepDive: [
      'Bear markets are defined by price, but caused by fundamentals: recessions, rate shocks, credit crises, or popped bubbles. Some are short and V-shaped (2020), some long and grinding (2000–2002, 2007–2009). Trying to exit before them and re-enter after is reliably destructive — investors who go to cash miss the recovery, and recoveries often begin on the worst news.',
      'The behavioral trap is that bear markets feel permanent while you are in them and bull markets feel fragile. The data says the opposite: the long-run drift is up, and the average bear is over in under a year. Discipline — an allocation you can hold through a 40% drop without flinching — is the single biggest determinant of who captures the market\'s long-run return.',
    ],
    glossary: [
      { term: 'Correction', def: 'A drop of ~10% from a peak — smaller than a bear market.' },
      { term: 'Dead-cat bounce', def: 'A brief rally inside a falling market — a trap for early buyers.' },
      { term: 'Drawdown', def: 'The drop from a past peak to the subsequent trough.' },
    ],
    related: ['liquidity', 'risk-vs-return', 'dollar-cost-averaging'],
  },

  /* ---------------- PERSONAL ---------------- */
  {
    id: 'budgeting-50-30-20',
    title: 'The 50/30/20 Budget',
    category: 'personal',
    icon: '🧾',
    color: ['#f59e0b', '#16a34a'],
    illustration: 'pie',
    hook: 'A one-line budget that actually works: needs, wants, future — split your pay three ways.',
    tldr: 'A simple budgeting rule: 50% of income to needs, 30% to wants, 20% to savings and debt payoff.',
    definition: [
      'The 50/30/20 rule splits after-tax income into three buckets: 50% to needs (rent, food, utilities, minimum debt payments — things you must pay), 30% to wants (dining out, hobbies, travel — things you choose), and 20% to the future (savings, investing, extra debt repayment). It is a guideline, not a law: in high-cost cities the "needs" share often exceeds 50%, so the rule flexes.',
      'Its strength is simplicity. Instead of tracking 30 categories, you sort every expense into one of three. The 20% to the future is the non-negotiable core — that is the money buying your freedom. If you cannot hit 20% yet, you aim the whole budget at making room for it.',
    ],
    keyPoints: [
      'Needs = survival + obligations; Wants = everything optional; Future = savings + debt paydown.',
      '20% to the future is the target that buys long-term freedom.',
      'High rent areas may push needs above 50% — adjust wants first, not savings.',
      'Pay yourself first: automate the 20% on payday, not "what\'s left."',
    ],
    formula: {
      expression: 'Take-home pay × {0.5 needs · 0.3 wants · 0.2 future}',
      legend: 'Take-home pay = income after taxes · future = savings + investing + extra debt paydown',
      note: 'Automate the 20% the day you are paid — never rely on leftovers.',
    },
    example: {
      scenario: 'You take home €2,500/month. Apply 50/30/20.',
      steps: [
        'Needs: €1,250 (rent, groceries, bills, min. debt)',
        'Wants: €750 (eating out, subscriptions, fun)',
        'Future: €500 (emergency fund, investing, extra debt)',
        'Invest €500/month at 7% for 30 years → ≈ €610,000',
      ],
      result: 'Just the "future" slice of an ordinary salary, invested steadily, builds serious wealth — without draconian saving.',
    },
    deepDive: [
      'The rule works because it is forgiving and forward-looking. Strict zero-based budgets (every euro assigned) are precise but exhausting; 50/30/20 keeps a third of income for enjoyment, which makes it sustainable. The common failure is mislabeling wants as needs — a big phone plan, the "right" neighborhood, a car loan bigger than necessary — which silently eats the 20% future share.',
      'The 20% is best deployed in priority order: first, a small emergency fund (stop the bleeding from surprises); second, pay off toxic high-interest debt (guaranteed 18% "return"); third, build a 3–6 month emergency fund; fourth, invest in low-cost funds. Each step removes a source of future financial stress before the next begins.',
    ],
    glossary: [
      { term: 'Needs', def: 'Essential, non-optional expenses and minimum debt payments.' },
      { term: 'Wants', def: 'Optional spending that improves life but can be cut.' },
      { term: 'Pay yourself first', def: 'Save/invest on payday before any discretionary spending.' },
    ],
    related: ['emergency-fund', 'compound-interest', 'opportunity-cost'],
  },
  {
    id: 'emergency-fund',
    title: 'Emergency Fund',
    category: 'personal',
    icon: '🛟',
    color: ['#06b6d4', '#3b82f6'],
    illustration: 'bars',
    hook: 'The cash buffer that turns a crisis into an inconvenience — and stops you selling investments at the worst time.',
    tldr: 'A stash of 3–6 months of expenses kept in safe, accessible cash to cover surprises without going into debt.',
    definition: [
      'An emergency fund is money set aside for unplanned, essential expenses: a job loss, medical bill, car repair, broken boiler. It sits in a safe, instantly accessible account (high-yield savings, money market) — not invested, because its job is to be there, unchanged, the day you need it. The standard target is 3–6 months of essential expenses; less stable income pushes it toward 9–12.',
      'Its real purpose is behavioral insurance. Without it, a surprise forces you onto a credit card (toxic debt) or to sell investments — often at a market low. With it, the same surprise is merely annoying. You pay for this safety by giving up investment returns on that cash — a deliberate, small cost for enormous peace of mind.',
    ],
    keyPoints: [
      'Target: 3–6 months of essential expenses (rent, food, bills, min. debt).',
      'Keep it liquid and safe — a savings account, not the stock market.',
      'Irregular income or single earner → lean toward 9–12 months.',
      'Replenish it after using; it is not a slush fund for wants.',
    ],
    formula: {
      expression: 'Fund target = Monthly essential expenses × Months of cover',
      legend: 'Essential expenses = needs only, not wants · Months = 3 to 6 (more if income is unstable)',
      note: 'Use "needs" from your 50/30/20 — the floor, not your full spending.',
    },
    example: {
      scenario: 'Essential monthly expenses = €1,800. Build a 6-month fund. Where do you keep €10,800?',
      steps: [
        'Target = 1,800 × 6 = €10,800',
        'Park it in a high-yield savings account earning ~3%',
        'On a €1,200 surprise car repair, you pay cash — no card, no sold stocks.',
        'Replenish the €1,200 over a few months from the "future" budget slice.',
      ],
      result: 'A €1,200 emergency becomes a minor inconvenience instead of a €1,200 credit-card balance at 18%.',
    },
    deepDive: [
      'People argue about whether to invest the emergency fund. The answer is no — its job is not return, it is reliability. A fund invested in stocks might be down 30% exactly when you lose your job. The "cost" of cash is the forgone return, and that cost is the price of the insurance. Some keep a tiered setup: 1 month in checking, the rest in a high-yield savings or ultra-short bond fund for a little extra yield with minimal risk.',
      'The fund changes the rest of your financial life. Once it exists, you can invest other money for the long term without worrying about short-term drops, because you will not be forced to sell. It is the foundation that makes long-term investing possible — without it, every market dip is a personal threat.',
    ],
    glossary: [
      { term: 'High-yield savings', def: 'A savings account paying competitive interest, still FDIC/guaranteed and liquid.' },
      { term: 'Liquidity', def: 'How fast you can access the money without loss — maximum for an emergency fund.' },
      { term: 'Essential expenses', def: 'The bare minimum monthly cost to live and meet obligations.' },
    ],
    related: ['budgeting-50-30-20', 'liquidity', 'risk-vs-return'],
  },
  {
    id: 'credit-score',
    title: 'Credit Score',
    category: 'personal',
    icon: '🔢',
    color: ['#8b5cf6', '#6366f1'],
    illustration: 'bars',
    hook: 'A three-digit number that decides what you pay to borrow — and it is largely in your hands.',
    tldr: 'A number summarizing your credit history that lenders use to judge how likely you are to repay.',
    definition: [
      'A credit score is a number (commonly 300–850) predicting how likely you are to repay borrowed money on time. It is built from your credit history: payment record, amounts owed, age of accounts, credit mix, and recent applications. Lenders use it to approve loans and set interest rates — a higher score means cheaper borrowing, sometimes saving tens of thousands on a mortgage.',
      'The score rewards a long, clean history and penalizes missed payments and high balances. Crucially, it measures credit behavior, not wealth or income — a modest earner who pays on time can outscore a wealthy one who misses payments. You can build it deliberately over time, and the biggest factor — paying on time — is fully in your control.',
    ],
    keyPoints: [
      'Payment history (~35%) is the biggest factor — never miss a payment.',
      'Credit utilization (~30%): keep balances below 30% of limits, lower is better.',
      'Older accounts help — keep your oldest card open even if unused.',
      'New applications cause small, temporary dips — avoid applying in clusters before a mortgage.',
    ],
    formula: {
      expression: 'Utilization = Balance ÷ Credit limit',
      legend: 'Balance = amount currently owed · Credit limit = total available across cards',
      note: 'Pay cards down before the statement closes — utilization is reported then, not just at month-end.',
    },
    example: {
      scenario: 'Card limit €5,000. You carry a €2,000 balance. How does it look, and how to fix it cheaply?',
      steps: [
        'Utilization = 2000 ÷ 5000 = 40% — above the 30% "good" line.',
        'Pay it to €1,000 → 20% utilization → score improvement.',
        'Or ask for a limit increase to €8,000 (same €2,000 balance = 25%).',
        'Best: pay in full each month → utilization near 0%, no interest.',
      ],
      result: 'Same spending, lower reported utilization, higher score — and paying in full costs nothing in interest.',
    },
    deepDive: [
      'A strong score pays off most on big loans. On a €250,000, 30-year mortgage, the gap between a top-tier rate and a mid-tier rate can be ~1.5 percentage points — over €70,000 of interest over the life of the loan. So the score is worth tending months before any major borrowing: pay down balances, avoid new applications, and fix errors on your credit report (which are common and free to dispute).',
      'The score has real limits. It does not measure savings, income, or assets — someone with an excellent score can still be one job loss from disaster if they have no emergency fund. Treat it as a borrowing-cost optimizer, not a measure of financial health. The truly "credit-invisible" (no history) can use secured cards or credit-builder loans to start a file from scratch.',
    ],
    glossary: [
      { term: 'Utilization', def: 'Balance ÷ limit — how much of available credit you are using.' },
      { term: 'Hard inquiry', def: 'A credit check from an application — small, temporary score impact.' },
      { term: 'Secured card', def: 'A card backed by a cash deposit — a way to build credit with no history.' },
    ],
    related: ['interest-rate', 'amortization', 'budgeting-50-30-20'],
  },

  /* ---------------- CORPORATE ---------------- */
  {
    id: 'leverage',
    title: 'Leverage',
    category: 'corporate',
    icon: '🔧',
    color: ['#ec4899', '#8b5cf6'],
    illustration: 'scale',
    hook: 'Borrowed money amplifies outcomes — wins get bigger, losses get bigger, exactly the same.',
    tldr: 'Leverage is using borrowed money to increase returns — it magnifies gains and losses equally.',
    definition: [
      'Leverage means using borrowed capital to make an investment, so you control more assets than your own money would allow. If you put €10 of your own and borrow €90 to buy €100 of stock, you are 10× leveraged: a 10% rise doubles your equity, and a 10% fall wipes you out. The borrowed money is a magnifying glass on both directions.',
      'Companies use leverage (debt) to amplify returns on equity and benefit from tax-deductible interest. Investors use margin loans. Both face the same truth: leverage turns a survivable loss into a fatal one. It is the single most common way capable people go broke — not because they were wrong, but because they could not stay solvent long enough to be right.',
    ],
    keyPoints: [
      'Leverage multiplies returns — up AND down — by the leverage ratio.',
      'Interest is a fixed cost: it must be paid regardless of how the asset performs.',
      'Margin calls can force you to sell at the worst possible price.',
      'Tax deductibility of interest makes debt subtly attractive — and subtly risky.',
    ],
    formula: {
      expression: 'Return on equity = Return on assets × (Assets ÷ Equity)',
      legend: 'Assets ÷ Equity = leverage ratio (e.g. 3× means €3 of assets per €1 of equity)',
      note: 'Losses follow the same formula — a −5% asset return at 3× = −15% on equity.',
    },
    example: {
      scenario: 'You buy €100 of stock with €50 own money + €50 borrowed at 5% interest. Stock rises 10%. ROE?',
      steps: [
        'Asset gain = €10. Interest = 5% × €50 = €2.50.',
        'Net gain = €10 − €2.50 = €7.50 on €50 equity = 15%.',
        'Asset returned 10%; your equity returned 15% — leverage helped.',
        'If stock had fallen 10%: −€10 − €2.50 = −€12.50 → −25% ROE. Leverage hurt more.',
      ],
      result: 'A 10% move became +15% or −25%. The amplifier works both ways; the cost of debt is paid in both outcomes.',
    },
    deepDive: [
      'The dangerous feature of leverage is asymmetry with solvency. A unleveraged investor who is "too early" just waits; a leveraged one who is too early gets a margin call and is forced to sell before the market agrees. Leverage removes the option to wait — it converts "eventually right" into "wrong." This is why leverage is fatal even for correct views: you need both the right direction and the ability to survive the path.',
      'Companies balance leverage against a tax shield (interest is deductible, dividends are not) and bankruptcy cost (too much debt raises default risk). The "optimal capital structure" trades these off. For individuals, the lesson is starker: use leverage rarely, only on long-horizon assets you can hold, and never in amounts that a margin call could force you to liquidate. Survival is the prerequisite for every other strategy.',
    ],
    glossary: [
      { term: 'Margin call', def: 'A demand to add cash or sell assets when borrowed collateral falls in value.' },
      { term: 'Capital structure', def: 'A company\'s mix of debt and equity funding.' },
      { term: 'Tax shield', def: 'The tax saving from deducting interest payments.' },
    ],
    related: ['risk-vs-return', 'liquidity', 'interest-rate'],
  },
  {
    id: 'working-capital',
    title: 'Working Capital',
    category: 'corporate',
    icon: '🔄',
    color: ['#0ea5e9', '#22c55e'],
    illustration: 'cycle',
    hook: 'The money a company needs just to keep the daily engine turning — the lifeblood most investors ignore.',
    tldr: 'Working capital is the short-term money tied up in running the business: current assets minus current liabilities.',
    definition: [
      'Working capital = current assets (cash, inventory, receivables) − current liabilities (payables, short-term debt). It is the money needed to fund day-to-day operations: buy inventory, wait for customers to pay, and cover bills before revenue arrives. Positive working capital means the business can fund itself short-term; negative or tight working capital means a liquidity squeeze is never far away.',
      'A company can be profitable on paper and still go bust if it runs out of working capital — because profit is not cash. If it sells a lot but customers pay slowly while suppliers demand cash, the profit shows up but the bank account empties. Managing the "cash conversion cycle" (inventory days + receivable days − payable days) is how healthy companies keep money from getting stuck.',
    ],
    keyPoints: [
      'Working capital = current assets − current liabilities.',
      'Profit ≠ cash: a profitable firm can fail if cash is tied up.',
      'Cash conversion cycle = inventory days + receivable days − payable days (lower is better).',
      'Negative working capital can be a superpower (e.g. retailers paid before they stock) or a warning.',
    ],
    formula: {
      expression: 'Working capital = Current assets − Current liabilities',
      legend: 'Current assets = cash + inventory + receivables (due < 1 yr) · Current liabilities = payables + short-term debt (due < 1 yr)',
      note: 'Cash conversion cycle = Inventory days + Receivable days − Payable days.',
    },
    example: {
      scenario: 'A shop: €30k inventory, €20k owed by customers, €10k cash. Owes suppliers €25k due soon. Healthy?',
      steps: [
        'Current assets = 30 + 20 + 10 = €60k',
        'Current liabilities = €25k',
        'Working capital = 60 − 25 = €35k (positive, comfortable)',
        'But if customers pay 60 days late, the €20k receivable is slow cash — watch the cycle.',
      ],
      result: 'On paper the shop has €35k of working capital. The risk is not the total, but whether the receivables turn into cash before the payables come due.',
    },
    deepDive: [
      'Some of the best businesses run on negative working capital — they collect cash from customers before they pay suppliers. Supermarkets and insurers do this: you pay at the register / for the policy now, they pay suppliers / claims later. That is essentially free financing, a structural advantage competitors cannot easily copy. It shows up as a fat, growing cash balance funded by operations, not profits alone.',
      'For investors, working capital quality separates good earnings from mirages. "Earnings quality" checks whether profit converts to cash: if net income rises but operating cash flow lags, money is getting stuck in receivables or inventory — a red flag that sales may be on credit that won\'t be collected, or inventory that won\'t sell. Watching the trend in working capital relative to sales is a quiet but powerful way to spot trouble early.',
    ],
    glossary: [
      { term: 'Current assets/liabilities', def: 'Items expected to convert to/from cash within one year.' },
      { term: 'Cash conversion cycle', def: 'How long a euro is tied up from buying inventory to collecting cash.' },
      { term: 'Earnings quality', def: 'How reliably accounting profit turns into actual cash.' },
    ],
    related: ['liquidity', 'leverage', 'valuation'],
  },

  /* ---------------- BANKING ---------------- */
  {
    id: 'interest-rate',
    title: 'Interest Rates',
    category: 'banking',
    icon: '🎚️',
    color: ['#6366f1', '#0ea5e9'],
    illustration: 'curve',
    hook: 'One number that sets the price of every loan, every bond, and every stock on Earth.',
    tldr: 'The interest rate is the price of borrowing money — paid by the borrower to the lender, usually as a yearly percentage.',
    definition: [
      'An interest rate is the cost of borrowing money, expressed as a yearly percentage of the amount borrowed. Borrow €1,000 at 6% for a year and you pay €60 in interest. The same rate is the return the lender earns for giving up the use of their money. Rates are set by central banks (the "policy rate") and then filtered through markets to mortgages, savings, bonds, and credit cards.',
      'Rates are the gravity of finance: when they rise, borrowing costs more, spending and investment slow, asset prices (especially bonds and growth stocks) fall, and saving pays more. When they fall, the reverse. Every asset is priced relative to the risk-free rate, so a change in rates ripples through the entire financial system at once.',
    ],
    keyPoints: [
      'Nominal rate = the stated %; real rate = nominal − inflation (the true cost/gain).',
      'Central banks move short rates to steer the economy; markets set long rates.',
      'Higher rates → cheaper to save, costlier to borrow, lower asset prices.',
      'APR includes fees; APY includes compounding — compare like with like.',
    ],
    formula: {
      expression: 'Interest = Principal × Rate × Time',
      legend: 'Principal = amount borrowed · Rate = yearly rate (decimal) · Time = years',
      note: 'Real rate ≈ nominal rate − inflation. APR ≠ APY: APR ignores compounding, APY includes it.',
    },
    example: {
      scenario: 'Two loans, both "10%": a credit card compounding daily vs a simple-interest personal loan. Real cost?',
      steps: [
        'Card 10% compounded daily → APY ≈ 10.52%',
        'Simple loan 10% → APY = 10.00%',
        'On a €5,000 balance for a year, the card costs ~€26 more for the same "10%".',
        'Always compare APY to APY — the "same rate" hides a compounding gap.',
      ],
      result: 'Two "10%" loans are not the same. The compounding method changes the real cost — read APY, not the headline number.',
    },
    deepDive: [
      'The real interest rate, not the nominal one, drives behavior. If a mortgage is 6% and inflation is 4%, the real cost is only ~2% — historically low. Borrowers and businesses look through inflation to the real rate when deciding whether a loan is "expensive." This is why high inflation can coexist with booming borrowing: nominal rates look high but real rates are low or negative.',
      'Rate changes move bond prices in the opposite direction, and the longer the bond\'s maturity, the bigger the swing (duration). A long bond can lose 20%+ when rates spike. This is why "safe" long bonds can be among the riskiest assets in a rate shock, while cash and short bonds hold steady. Matching the duration of your assets to when you need the money is how thoughtful investors manage rate risk.',
    ],
    glossary: [
      { term: 'APR', def: 'Annual percentage rate — yearly cost of borrowing, fees included, compounding often excluded.' },
      { term: 'APY', def: 'Annual percentage yield — yearly return/growth including compounding.' },
      { term: 'Duration', def: 'A bond\'s price sensitivity to rate changes; longer bonds have higher duration.' },
    ],
    related: ['time-value-of-money', 'inflation', 'leverage'],
  },
  {
    id: 'amortization',
    title: 'Amortization',
    category: 'banking',
    icon: '📉',
    color: ['#22c55e', '#0ea5e9'],
    illustration: 'curve',
    hook: 'Why your mortgage payment stays flat while the interest part shrinks year after year.',
    tldr: 'Amortization is spreading a loan repayment into fixed payments where the interest share falls and principal share rises over time.',
    definition: [
      'Amortization is how a loan is paid off in equal installments over time. Each fixed payment splits into interest (on the remaining balance) and principal (paying down the debt). Early on, almost all of the payment is interest because the balance is large; as the balance shrinks, interest falls and more of each payment chips at principal. By the end, almost the entire payment is principal.',
      'The counterintuitive result: after years of "paying your mortgage," you may have barely reduced the balance, because most early money went to interest. This is why early extra payments are so powerful — a single extra principal payment in year 1 can eliminate dozens of later payments, because it compounds as avoided interest for the whole remaining term.',
    ],
    keyPoints: [
      'Fixed payment = interest + principal, but the split shifts over time.',
      'Early payments are mostly interest; late payments are mostly principal.',
      'Extra principal early wipes out far more total interest than the same amount later.',
      'Longer loans = lower monthly payment but vastly more total interest.',
    ],
    formula: {
      expression: 'Payment = P × [ r(1+r)ⁿ ÷ ((1+r)ⁿ − 1) ]',
      legend: 'P = loan principal · r = monthly rate · n = number of payments',
      note: 'The formula holds payment constant; interest and principal rebalance inside it.',
    },
    example: {
      scenario: '€200,000 mortgage, 30 years, 4% rate. Monthly payment? How much is interest vs principal in month 1 vs year 25?',
      steps: [
        'r = 0.04/12 = 0.00333, n = 360 → payment ≈ €954.83',
        'Month 1 interest = 200,000 × 0.00333 = €666.67 → principal = €288.16',
        'Total interest over 30 years ≈ €143,700 — you pay for the house 1.7× over.',
        'Add €100/month extra principal → payoff ~4.5 years early, ~€31,000 less interest.',
      ],
      result: 'Month 1, 70% of your payment is interest. A €100/month overpayment saves €31,000 and nearly 5 years — the magic of attacking principal early.',
    },
    deepDive: [
      'The amortization structure is why the first years of a mortgage feel like paying for nothing. On a 30-year loan at 4%, after 5 years you have paid ~€57,000 in cash but reduced the balance by only ~€18,000 — the other ~€39,000 was interest. This is not a scam; it is the cost of borrowing a large sum for a long time. The remedy, if you can afford it, is the 15-year mortgage or extra principal: a shorter term raises the payment modestly but roughly halves the total interest.',
      'Refinancing resets the clock on amortization. Dropping your rate but restarting a 30-year term can lower the payment while actually increasing lifetime interest if you stay the full term. The honest comparison is total interest, not monthly payment — and the win comes from keeping the old (shorter) payoff timeline after refinancing, by paying the difference as extra principal.',
    ],
    glossary: [
      { term: 'Principal', def: 'The loan balance you actually owe and pay down over time.' },
      { term: 'Installment', def: 'A fixed periodic payment covering interest and a bit of principal.' },
      { term: 'Refinancing', def: 'Replacing an old loan with a new one, often to get a lower rate.' },
    ],
    related: ['interest-rate', 'credit-score', 'time-value-of-money'],
  },

  /* ---------------- ECONOMICS ---------------- */
  {
    id: 'supply-demand',
    title: 'Supply & Demand',
    category: 'economics',
    icon: '⚖️',
    color: ['#f59e0b', '#0ea5e9'],
    illustration: 'scale',
    hook: 'The whole of economics in two lines: prices move to where what people want meets what people make.',
    tldr: 'Prices are set where the quantity buyers want equals the quantity sellers will provide — the equilibrium point.',
    definition: [
      'Supply and demand is the model at the heart of all market pricing. Demand is how much of something buyers want at each price; supply is how much sellers will provide at each price. The demand curve slopes down (cheaper → more buyers want it); the supply curve slopes up (pricier → more sellers make it). Where they cross, the quantity buyers want equals the quantity sellers offer, and that intersection sets the market price — the equilibrium.',
      'Anything that shifts demand (income, tastes, substitutes) or supply (costs, technology, weather) moves the equilibrium price and quantity. The model is powerful because it predicts direction: a freeze cuts coffee supply → price rises; a recession cuts demand for cars → price falls. Almost every price change, from stocks to groceries, is a supply-and-demand story underneath.',
    ],
    keyPoints: [
      'Equilibrium price = where quantity demanded = quantity supplied.',
      'Demand up (or supply down) → price up; demand down (or supply up) → price down.',
      'Elasticity = how much quantity reacts to price (essential goods are inelastic).',
      'Price controls (caps/floors) create shortages or surpluses by fighting the equilibrium.',
    ],
    formula: {
      expression: 'Equilibrium: Qd(P) = Qs(P)',
      legend: 'Qd = quantity demanded at price P · Qs = quantity supplied at price P',
      note: 'Price elasticity = % change in quantity ÷ % change in price.',
    },
    example: {
      scenario: 'A coffee frost cuts the bean supply. What happens to the price of a cup of coffee?',
      steps: [
        'Supply shifts left (less available at every price).',
        'At the old price, demand exceeds supply → shortage.',
        'Price rises until buyers want exactly the new, smaller supply.',
        'Demand for coffee is inelastic (people keep buying) → price jumps a lot, quantity falls a little.',
      ],
      result: 'A supply cut on an inelastic good produces a big price spike and a small quantity drop — why coffee and gas prices swing hard on small supply shocks.',
    },
    deepDive: [
      'Elasticity is the refinement that makes the model practical. Inelastic goods (insulin, fuel, addictive items) absorb price changes with little quantity change, so shocks hit price hard — and so do taxes on them (which is why governments tax cigarettes and fuel). Elastic goods (luxuries, brands with substitutes) see quantity move a lot for small price changes. Investors care because inelastic demand is the source of pricing power: a company selling something people must buy can raise prices without losing customers, which is the root of durable profits.',
      'The model also explains why interfering with it backfires. A price cap below equilibrium (rent control) keeps the listed price low but creates a shortage — queues, waitlists, reduced quality, or black markets. A price floor above equilibrium (minimum wage in some markets) creates a surplus — unemployment. The price signal is information; suppressing it does not remove scarcity, it just hides where the scarcity moves to.',
    ],
    glossary: [
      { term: 'Equilibrium', def: 'The price/quantity where supply and demand balance.' },
      { term: 'Elasticity', def: 'How responsive quantity is to a price change.' },
      { term: 'Price ceiling/floor', def: 'Legal limits on price that create shortages or surpluses.' },
    ],
    related: ['inflation', 'interest-rate', 'market-cap'],
  },
  {
    id: 'gdp',
    title: 'GDP',
    category: 'economics',
    icon: '🌍',
    color: ['#16a34a', '#f59e0b'],
    illustration: 'bars',
    hook: 'The single number we use to measure an entire economy — and the many things it quietly leaves out.',
    tldr: 'GDP is the total monetary value of all goods and services a country produces in a year.',
    definition: [
      'Gross Domestic Product (GDP) measures the total value of everything produced within a country in a period. It is usually measured as the sum of consumption (C) + investment (I) + government spending (G) + net exports (exports − imports). Rising real GDP (adjusted for inflation and population) means the economy is growing; falling real GDP for two quarters is the common definition of recession.',
      'GDP is the headline number for economic health, but it is a flow (production per year), not a stock (wealth). It counts paid work but not unpaid care work; it counts rebuilding after a disaster as growth while ignoring the destruction; it says nothing about who gets the income. It measures the size of the economy, not the quality of life within it.',
    ],
    keyPoints: [
      'GDP = C + I + G + (X − M) — consumption, investment, government, net exports.',
      'Real GDP adjusts for inflation; GDP per capita adjusts for population.',
      'Recession ≈ two quarters of falling real GDP.',
      'GDP measures activity, not wellbeing — more is not always better.',
    ],
    formula: {
      expression: 'GDP = C + I + G + (X − M)',
      legend: 'C = consumption · I = investment · G = government spending · X − M = exports − imports',
      note: 'Real GDP growth ≈ nominal GDP growth − inflation.',
    },
    example: {
      scenario: 'An economy: consumption €1,000B, investment €300B, government €400B, exports €200B, imports €250B. GDP?',
      steps: [
        'Net exports = 200 − 250 = −€50B (a trade deficit)',
        'GDP = 1000 + 300 + 400 + (−50) = €1,650B',
        'If inflation is 3% and nominal GDP grew 5%, real growth ≈ 2%.',
        'GDP per capita = GDP ÷ population — the living-standard figure.',
      ],
      result: 'GDP = €1,650B. The trade deficit subtracted; the "real" growth strips out the 3% that was just price rises, not more output.',
    },
    deepDive: [
      'The biggest misuse of GDP is treating it as a scoreboard for national success. A country can raise GDP by cutting down forests, building prisons, or cleaning up pollution that should not have been created — all count as activity. Two economies with identical GDP can have very different living standards depending on inequality, health, leisure, and environmental quality. This is why economists increasingly pair GDP with dashboard measures (inequality, life expectancy, leisure, sustainability).',
      'GDP growth also has a tricky relationship with debt and finance. A lot of "growth" in financialized economies is the financial sector\'s own output, which can shrink the real economy in a crisis. And debt-driven GDP growth (consumption funded by borrowing) looks identical to income-driven growth in the headline number, but one is sustainable and the other is not. Reading GDP well means reading what kind of growth it is, not just how fast.',
    ],
    glossary: [
      { term: 'Real GDP', def: 'GDP adjusted to remove the effect of inflation.' },
      { term: 'GDP per capita', def: 'GDP divided by population — a proxy for living standard.' },
      { term: 'Recession', def: 'A sustained downturn, commonly two quarters of falling real GDP.' },
    ],
    related: ['inflation', 'interest-rate', 'supply-demand'],
  },

  /* ---------------- RISK ---------------- */
  {
    id: 'risk-management',
    title: 'Risk Management',
    category: 'risk',
    icon: '🛡️',
    color: ['#dc2626', '#8b5cf6'],
    illustration: 'scale',
    hook: 'You cannot eliminate risk — you choose which risks to keep, transfer, avoid, or reduce.',
    tldr: 'Risk management is identifying, measuring, and deliberately handling the risks you face rather than letting them happen to you.',
    definition: [
      'Risk management is the deliberate process of handling uncertainty: identify what could go wrong, estimate how likely and how bad, then decide what to do. The four classic responses are: avoid (don\'t take the risk), reduce (mitigate it), transfer (insure against it), and accept (keep it, because the reward is worth it or the cost of avoiding it is too high). Good risk management is not about eliminating risk — that is impossible — but about making sure no single risk can ruin you.',
      'In personal finance this shows up as diversification (reduce), emergency funds and insurance (transfer/accept the right ones), and avoiding ruinous bets (avoid). The guiding principle is "avoid ruin": manage so that the worst plausible outcome is survivable. You do not need every outcome to be good — you need no outcome to be catastrophic.',
    ],
    keyPoints: [
      'Four responses: avoid, reduce, transfer (insure), accept.',
      'The goal is not zero risk but no ruinous risk — survive all plausible paths.',
      'Insure catastrophic, rare risks (house fire, disability); self-insure frequent small ones.',
      'Diversification and cash are risk-management tools, not just return tools.',
    ],
    formula: {
      expression: 'Expected loss = Probability × Impact',
      legend: 'Probability = likelihood of the bad event · Impact = cost if it happens',
      note: 'Insure when Impact is unaffordable, regardless of low Probability.',
    },
    example: {
      scenario: 'Insuring a €300k home against fire: €400/year premium, fire chance ~0.2%/year. Worth it?',
      steps: [
        'Expected loss = 0.002 × 300,000 = €600/year (more than the €400 premium).',
        'But the real question is impact: a €300k loss is ruinous; €400/year is trivial.',
        'Even if expected loss were €100, you would still insure — you cannot afford the tail.',
        'Insure the catastrophic; skip the €50 phone-screen warranty (affordable, frequent).',
      ],
      result: 'You do not insure to optimize expected value — you insure to cap the downside. Insure what you cannot afford to lose; self-insure what you can.',
    },
    deepDive: [
      'The distinction between risk and uncertainty matters. Risk is quantifiable (you can estimate fire odds from data); uncertainty (Knightian) is not — you cannot put odds on genuinely novel events like a new pandemic or a geopolitical shock. Many of the worst losses come from uncertainty treated as if it were mere risk, using models that assume the future resembles the past. The remedy is robustness over optimization: hold more cash, more diversification, and more optionality than a pure expected-value calculation justifies.',
      'A practical hierarchy: first protect against ruin (emergency fund, insurance, no toxic debt, diversification); second protect against inflation (own real assets and equities); third optimize return. Most people invert this — chasing return first and leaving ruin unprotected. The order matters because the first two are cheap and reliable; the third is expensive and uncertain. Get the cheap, certain wins before gambling on the expensive, uncertain one.',
    ],
    glossary: [
      { term: 'Risk vs uncertainty', def: 'Risk is quantifiable; uncertainty cannot be reliably priced.' },
      { term: 'Tail risk', def: 'Low-probability, high-impact events — what insurance exists for.' },
      { term: 'Self-insurance', def: 'Covering small risks from your own savings instead of paying premiums.' },
    ],
    related: ['diversification', 'emergency-fund', 'leverage'],
  },
  {
    id: 'behavioral-finance',
    title: 'Behavioral Finance',
    category: 'risk',
    icon: '🧠',
    color: ['#8b5cf6', '#ec4899'],
    illustration: 'cycle',
    hook: 'We are not the rational calculators economics assumes — and our predictable mistakes cost us real money.',
    tldr: 'Behavioral finance studies how real people systematically deviate from rational money decisions, and how to guard against it.',
    definition: [
      'Classical finance assumes rational actors who weigh costs and benefits perfectly. Behavioral finance shows that people are predictably irrational: we fear losses more than we value gains, we follow the crowd, we anchor to irrelevant numbers, and we treat the same money differently depending on where it came from. These biases are not random — they are systematic, which means they are identifiable and, with discipline, avoidable.',
      'The practical lesson is that the biggest risk to your wealth is usually you. Most underperformance comes not from markets but from investors selling low in fear, buying high in FOMO, and trading too much. Knowing the named biases lets you build defenses: rules, automation, and pauses that stop emotion from driving decisions.',
    ],
    keyPoints: [
      'Loss aversion: a loss feels ~2× as bad as an equal gain feels good.',
      'Recency & herd bias: we extrapolate the recent past and copy the crowd.',
      'Anchoring: we cling to irrelevant reference prices (what we paid, the old high).',
      'Mental accounting: we treat "found money" or "house money" differently — a costly illusion.',
    ],
    formula: {
      expression: 'Felt value of a loss ≈ −2.25 × same-sized gain',
      legend: 'From prospect theory — losses hurt roughly twice as much as gains please',
      note: 'This asymmetry explains why we hold losers too long and sell winners too early.',
    },
    example: {
      scenario: 'A stock you bought at €100 drops to €70. Do you sell? Compare to finding €70 cash and choosing whether to invest it in the same stock.',
      steps: [
        'Holding "until it comes back" is anchoring to the €100 you paid — a sunk cost.',
        'The real question: would you buy this stock today at €70? If no, sell now.',
        'Loss aversion makes selling feel like "realizing" the pain — so people freeze.',
        'Reframing it as a fresh €70 decision removes the anchor and the freeze.',
      ],
      result: 'The "should I sell?" question is really "would I buy it now?" Asking that strips out the sunk-cost anchor that loss aversion uses to trap you.',
    },
    deepDive: [
      'A few biases do most of the damage. Loss aversion makes us sell winners too early ("lock in the gain") and hold losers too long ("wait to break even") — the exact opposite of "cut your losers, let your winners run." Recency bias makes us assume the current trend continues, so we pile into whatever just went up and flee whatever just went down — buying high, selling low. Confirmation bias makes us seek news that agrees with our position and ignore what contradicts it.',
      'The defenses are mechanical, not psychological. Automate investing (DCA) so emotion never decides. Use written rules ("rebalance when stocks exceed 70%") so the decision is made in advance, in calm. Keep a decision journal to hold yourself accountable to past reasoning. And slow down: the most expensive decisions are the fast ones made in panic or excitement. Discipline beats prediction, because prediction is what we are worst at.',
    ],
    glossary: [
      { term: 'Loss aversion', def: 'Losses hurt ~2× more than equal gains please — from prospect theory.' },
      { term: 'Sunk cost fallacy', def: 'Continuing because of past spending, instead of future value.' },
      { term: 'Recency bias', def: 'Overweighting recent events when judging the future.' },
    ],
    related: ['risk-vs-return', 'dollar-cost-averaging', 'risk-management'],
  },
  {
    id: 'broker',
    title: 'Broker',
    category: 'institutions',
    icon: '🤝',
    color: ['#3b82f6', '#6366f1'],
    illustration: 'cycle',
    hook: 'The middleman of the markets — turning your "I want to buy" into a real transaction.',
    tldr: 'An agent who executes buy and sell orders for an investor in exchange for a commission or fee.',
    definition: [
      'A broker is a licensed professional or firm that acts as an intermediary between a buyer and a seller. In the stock market, you cannot simply walk up to the New York Stock Exchange and buy shares; you need a broker to access the exchange and execute the trade on your behalf.',
      'Brokers range from full-service firms (providing research and advice) to discount brokers (providing only a platform for execution). In the modern era, "Neo-brokers" (apps) have democratized access by offering zero-commission trades, shifting their profit model to payment for order flow (PFOF).',
    ],
    keyPoints: [
      'Bridges the gap between individual investors and complex exchanges.',
      'Earns money through commissions, spreads, or monthly fees.',
      'Fiduciary duty: Some brokers are legally required to act in the client\'s best interest.',
      'Execution quality: The broker\'s ability to get the best possible price is key.',
    ],
    formula: {
      expression: 'Total Trade Cost = Asset Price + Commission',
      legend: 'Asset Price = market price · Commission = broker\'s fee per trade',
      note: 'With zero-commission apps, the "cost" is often hidden in the bid-ask spread.',
    },
    example: {
      scenario: 'You want to buy 10 shares of Apple at €150. Your broker charges a €5 flat fee per trade.',
      steps: [
        'Trade value = 10 × 150 = €1,500',
        'Total cost = 1,500 + 5 = €1,505',
        'Your break-even price is slightly higher than the market price due to the fee.',
      ],
      result: 'The broker handled the routing, the exchange communication, and the settlement, taking €5 for the service.',
    },
    deepDive: [
      'The evolution of brokerage has shifted power from the "advisor" to the "algorithm." Full-service brokers once held the monopoly on information; today, retail traders have the same data as pros, but often lack the discipline. This shift has led to the rise of "gamification" in trading apps, which increases volume (and profit for the broker) but can increase risk for the user.',
      'A critical distinction is between a "broker-dealer." A broker acts as an agent (matching you with someone else), while a dealer acts as a principal (selling you something from their own inventory). When a dealer sells to you, they take the risk of the asset falling; when a broker matches you, they take no risk, just a fee.',
    ],
    glossary: [
      { term: 'PFOF', def: 'Payment for Order Flow — when brokers sell your trade data to market makers.' },
      { term: 'Fiduciary', def: 'A legal obligation to act in the best interest of the client.' },
      { term: 'Discount Broker', def: 'A low-cost provider that offers execution without personalized advice.' },
    ],
    related: ['liquidity', 'market-cap', 'market-maker', 'swap'],
  },
  {
    id: 'depositary',
    title: 'Depositary / Custodian',
    category: 'institutions',
    icon: '🔒',
    color: ['#64748b', '#475569'],
    illustration: 'bars',
    hook: 'The vault of the financial world — keeping your assets safe so you don\'t have to hide them under a mattress.',
    tldr: 'A financial institution that holds and safeguards a client\'s assets, ensuring they are not stolen or lost.',
    definition: [
      'A depositary (or custodian) is a specialized entity that holds securities for safekeeping. While your broker handles the *trading*, the depositary handles the *holding*. They ensure that the shares you "own" actually exist and are registered in your name or for your benefit.',
      'This separation is crucial for security. If a broker goes bankrupt, you don\'t want your assets to be part of the broker\'s bankruptcy estate. Because the depositary holds them separately, the assets remain the property of the client, not the firm.',
    ],
    keyPoints: [
      'Prevents fraud and theft by separating the trading function from the storage function.',
      'Handles corporate actions: collecting dividends and processing stock splits automatically.',
      'Crucial for institutional investors (pension funds, insurance) who hold billions in assets.',
      'Regulated heavily to ensure assets are truly "segregated" from the firm\'s own money.',
    ],
    formula: {
      expression: 'Custody Fee = AUM × Fee Rate',
      legend: 'AUM = Assets Under Management · Fee Rate = yearly percentage for safekeeping',
      note: 'Usually a very small percentage, but significant for large portfolios.',
    },
    example: {
      scenario: 'A pension fund invests €1B in global stocks. They use a global custodian bank.',
      steps: [
        'The fund manager decides what to buy (Investment Decision).',
        'The broker executes the trade (Execution).',
        'The custodian bank receives the shares and records them in the fund\'s account (Custody).',
        'When dividends are paid, the custodian collects them and sends them back to the fund.',
      ],
      result: 'The fund manager never actually "touches" the shares; they are locked in a digital vault for safety.',
    },
    deepDive: [
      'In the digital age, most shares are "dematerialized" (held as electronic entries). This creates a chain of ownership. You see your shares in an app, but that app is seeing a record from a broker, who is seeing a record from a central depositary (like Euroclear or Clearstream). This chain is the backbone of global finance.',
      'The "custodial risk" occurs if the depositary itself fails or commits fraud (e.g., the MF Global or FTX collapses). This is why high-net-worth individuals and institutions use "Tier 1" custodians—global banks with massive capital buffers and strict oversight.',
    ],
    glossary: [
      { term: 'Segregated Account', def: 'An account where client assets are kept separate from the firm\'s own assets.' },
      { term: 'Dematerialization', def: 'The process of replacing physical paper certificates with electronic records.' },
      { term: 'Corporate Actions', def: 'Events like dividends or mergers that require the custodian to update records.' },
    ],
    related: ['broker', 'liquidity', 'risk-management'],
  },
  {
    id: 'central-bank',
    title: 'Central Bank',
    category: 'institutions',
    icon: '🏦',
    color: ['#1e293b', '#475569'],
    illustration: 'curve',
    hook: 'The "Bank of Banks" — the only entity that can literally print money to save the system.',
    tldr: 'A national institution that manages a country\'s currency, money supply, and interest rates to ensure economic stability.',
    definition: [
      'The Central Bank (like the ECB in Europe or the Fed in the US) is the ultimate authority on a nation\'s money. Unlike commercial banks, it doesn\'t seek profit; its goal is "price stability" (keeping inflation low) and "financial stability" (preventing crashes).',
      'It has two primary tools: the interest rate (the cost of money) and the money supply (how much currency exists). By raising rates, it cools an overheating economy; by lowering them, it encourages spending and investment to fight recession.',
    ],
    keyPoints: [
      'Lender of Last Resort: Provides emergency loans to banks to prevent a systemic collapse.',
      'Monetary Policy: Adjusts interest rates to control inflation and growth.',
      'Currency Management: Manages the value of the national currency against others.',
      'Independence: Ideally operates independently of politics to avoid "printing money" for short-term popularity.',
    ],
    formula: {
      expression: 'Real Rate = Nominal Rate − Inflation',
      legend: 'Nominal Rate = the rate set by the central bank · Inflation = rate of price rise',
      note: 'If the central bank keeps rates at 2% but inflation is 5%, the real rate is -3% (effectively paying people to borrow).',
    },
    example: {
      scenario: 'Inflation hits 8%, and the economy is overheating. What does the Central Bank do?',
      steps: [
        'The Bank raises its policy rate (e.g., from 0% to 4%).',
        'Commercial banks raise their rates for loans and mortgages to maintain margins.',
        'Borrowing becomes expensive → Businesses invest less, consumers spend less.',
        'Demand drops → Prices stop rising so fast → Inflation falls.',
      ],
      result: 'The Central Bank used the "interest rate lever" to slow down the economy and kill inflation.',
    },
    deepDive: [
      'The most controversial tool of the modern era is "Quantitative Easing" (QE). When interest rates hit zero but the economy still needs help, the central bank simply buys bonds from the market, pumping trillions of new euros/dollars into the system. This is "printing money" in a sophisticated form. While it prevents depressions, critics argue it creates "asset bubbles" by making stocks and real estate artificially expensive.',
      'Central Bank independence is the "holy grail" of macro-finance. If a government can order a bank to print money to pay for its debts, you get hyperinflation (like Zimbabwe or Weimar Germany). By separating the "printing press" from the "politicians," countries maintain trust in their currency.',
    ],
    glossary: [
      { term: 'Lender of Last Resort', def: 'The central bank\'s role in providing liquidity to banks during a panic.' },
      { term: 'Monetary Policy', def: 'Actions taken by the central bank to manage the money supply and interest rates.' },
      { term: 'QE (Quantitative Easing)', def: 'Buying assets to inject liquidity into the financial system.' },
    ],
    related: ['interest-rate', 'inflation', 'supply-demand'],
  },
  {
    id: 'clearing-house',
    title: 'Clearing House',
    category: 'institutions',
    icon: '⚙️',
    color: ['#4b5563', '#1f2937'],
    illustration: 'cycle',
    hook: 'The invisible glue of the markets — ensuring that "I pay, you deliver" actually happens.',
    tldr: 'An intermediary that guarantees the completion of a trade, acting as the buyer to every seller and the seller to every buyer.',
    definition: [
      'In a fast-moving market, you don\'t know if the person on the other side of your trade will actually pay up. The Clearing House (or Central Counterparty - CCP) solves this. Once a trade is agreed upon, the Clearing House steps in and becomes the counterparty to both sides.',
      'It validates the trade, ensures both sides have the money/assets, and manages the settlement process. By doing this, it removes "counterparty risk" from the equation. If one party goes bust, the Clearing House uses its own reserves to ensure the other party still gets paid.',
    ],
    keyPoints: [
      'Acts as a buffer against systemic failure: one bank\'s collapse doesn\'t trigger a domino effect.',
      'Requires "Margin" (collateral) from traders to cover potential losses.',
      'Netting: Instead of 1,000 small trades, it calculates the "net" amount each party owes at the end of the day.',
      'Critical for derivatives (swaps, futures) where contracts can last years.',
    ],
    formula: {
      expression: 'Net Position = Total Buys − Total Sells',
      legend: 'Net Position = the final amount a trader must settle with the clearing house',
      note: 'Netting reduces the amount of cash that needs to move across the system, increasing efficiency.',
    },
    example: {
      scenario: 'Bank A sells €1M of gold to Bank B. Bank B sells €800k of gold to Bank C. Bank C sells €600k to Bank A.',
      steps: [
        'Without a clearing house: 3 separate payments of 1M, 800k, and 600k.',
        'With a clearing house: It nets the positions.',
        'Bank A: +1M (from B) - 600k (to C) = +400k',
        'Bank B: -1M (to A) + 800k (from C) = -200k',
        'Bank C: -800k (to B) + 600k (from A) = -200k',
      ],
      result: 'Instead of €2.4M moving, only €600k total moves. The system is safer and faster.',
    },
    deepDive: [
      'The "Margin Call" is the Clearing House\'s primary weapon. To protect itself, the CCP demands a "Initial Margin" (deposit) and "Variation Margin" (daily payment for price moves). If the market moves against you, the CCP demands more cash immediately. If you can\'t pay, they liquidate your position instantly to prevent their own loss.',
      'The 2008 crisis highlighted the danger of "Over-the-Counter" (OTC) trades—trades made privately without a clearing house. When Lehman Brothers failed, no one knew who owed what to whom because there was no central record. Since then, global regulations have forced most derivatives into clearing houses to make the system transparent and robust.',
    ],
    glossary: [
      { term: 'CCP', def: 'Central Counterparty — the technical name for a clearing house.' },
      { term: 'Margin', def: 'Collateral deposited to guarantee the performance of a contract.' },
      { term: 'Netting', def: 'Combining multiple trades into a single net payment.' },
    ],
    related: ['counterparty', 'liquidity', 'risk-management'],
  },

  /* ---------------- INSTITUTIONS (cont.) ---------------- */
  {
    id: 'counterparty',
    title: 'Counterparty',
    category: 'institutions',
    icon: '🤼',
    color: ['#6366f1', '#0ea5e9'],
    illustration: 'cycle',
    hook: 'The other side of your trade — the entity whose promise makes your contract worth anything.',
    tldr: 'A counterparty is the other party in a financial transaction — the one who must deliver what you bought, or pay what you are owed.',
    definition: [
      'Every trade has two sides: when you buy, someone sells to you, and that someone is your counterparty. In a simple stock trade the counterparty is anonymous and the risk is near zero because the clearing house guarantees it. But in many contracts — a swap, a forward, a private loan, an OTC derivative — the counterparty is a specific entity whose default would leave you unpaid. Your profit is only as good as their promise.',
      'Counterparty risk (or default risk) is the chance the other side fails to honor the contract. It is the central risk in all over-the-counter (OTC) dealing, where no exchange stands between you and the other party. Managing it is a whole industry: collateral, netting agreements (ISDA master agreements), margin, and the move to push derivatives through clearing houses.',
    ],
    keyPoints: [
      'Your counterparty is whoever owes you performance under a contract.',
      'Counterparty risk = the chance they default before paying you.',
      'Cleared trades replace the other party with a clearing house (near-zero risk).',
      'OTC trades keep the original counterparty — collateral and netting mitigate it.',
    ],
    formula: {
      expression: 'Exposure = Max(0, Contract value − Collateral posted)',
      legend: 'Contract value = mark-to-market of the deal · Collateral = cash/asset pledged to you',
      note: 'Banks track "Potential Future Exposure" — how much the contract could be worth if markets move against the counterparty.',
    },
    example: {
      scenario: 'You enter a €10M interest-rate swap with a bank. Rates move your way; the swap is now worth €600k to you. The bank is your counterparty — what if it fails?',
      steps: [
        'Mark-to-market value to you = +€600k (the bank owes you).',
        'If the bank defaults now, you lose €600k plus you must replace the swap at current rates.',
        'To reduce this, the ISDA agreement requires the bank to post collateral as the swap gains value.',
        'If €500k of collateral is posted, your net exposure = 600 − 500 = €100k.',
      ],
      result: 'Collateral turns a €600k default loss into a €100k one. Counterparty risk management is mostly about never being owed more than is collateralized.',
    },
    deepDive: [
      'The 2008 crisis was a counterparty risk event. Lehman was a counterparty to thousands of derivative trades; its failure left everyone owed by Lehman scrambling to replace contracts at worse prices, and left those who owed Lehman suddenly owing its bankruptcy estate. The chaos came not just from the losses but from not knowing who owed what to whom. This is why regulators forced central clearing onto standard swaps afterward: a clearing house becomes everyone\'s counterparty, and a single default no longer cascades.',
      'A subtle point: counterparty risk is bilateral and asymmetric. Your bank is your counterparty on the swap where you are in the money — but you are their counterparty on the swap where they are in the money. "Wrong-way risk" is the nasty case where the counterparty\'s credit quality is correlated with your exposure: e.g. buying protection from a bank on that bank\'s own debt means the protection becomes worthless exactly when you need it.',
    ],
    glossary: [
      { term: 'OTC', def: 'Over-the-counter — trades negotiated directly between two parties, not on an exchange.' },
      { term: 'ISDA', def: 'The master agreement framework governing most OTC derivative trades.' },
      { term: 'Netting', def: 'Offsetting what you owe a counterparty against what they owe you, paying only the difference.' },
    ],
    related: ['clearing-house', 'swap', 'risk-management'],
  },
  {
    id: 'fund',
    title: 'Investment Fund',
    category: 'institutions',
    icon: '🧺',
    color: ['#22c55e', '#3b82f6'],
    illustration: 'pie',
    hook: 'Pooling thousands of investors\' money so even €100 can own a slice of a billion-euro portfolio.',
    tldr: 'A fund pools money from many investors and invests it collectively, with a professional manager, so each investor owns a slice of a diversified portfolio.',
    definition: [
      'An investment fund is a collective vehicle: investors put in money, the fund buys a portfolio of assets, and each investor owns a proportional share (units or shares) of the whole. The point is pooling: €1,000 from each of 10,000 investors becomes €10M — enough to build a globally diversified portfolio no individual could assemble alone, while keeping each person\'s stake liquid.',
      'Funds come in legal flavors: mutual funds (open-ended, priced once daily), ETFs (exchange-traded, priced all day), hedge funds (private, lightly regulated, flexible strategies), and pension funds (long-horizon, serving retirement). What unites them is the fiduciary split: the investor owns the money; the fund manager runs it, for a fee, under a mandate.',
    ],
    keyPoints: [
      'Pooling delivers diversification and access that small sums cannot.',
      'Net Asset Value (NAV) = total portfolio value ÷ shares outstanding.',
      'Open-ended funds create/redeem shares on demand; closed-ended have a fixed number.',
      'The manager earns a fee (TER) and owes a fiduciary duty to investors.',
    ],
    formula: {
      expression: 'NAV per share = (Assets − Liabilities) ÷ Shares outstanding',
      legend: 'Assets = market value of the portfolio · Liabilities = fund\'s debts · Shares = units in issue',
      note: 'NAV is struck once daily for mutual funds, continuously for ETFs via on-exchange trading.',
    },
    example: {
      scenario: 'A fund holds €100M of stocks and €5M of cash, owes €2M in fees/financing, and has 10M shares. What is one share worth?',
      steps: [
        'Assets = 100M + 5M = €105M',
        'Net assets = 105M − 2M = €103M',
        'NAV per share = 103M ÷ 10M = €10.30',
        'An investor with 1,000 units holds €10,300 of the portfolio, diversified across all its holdings.',
      ],
      result: '€1,000 bought a stake in a €100M diversified portfolio. Pooling turned a small sum into institutional-grade diversification.',
    },
    deepDive: [
      'The open-ended structure is a quiet engineering marvel: when investors want in, the fund creates new shares and buys more assets; when they want out, it redeems shares and sells assets (or pays cash). The catch is that forced selling in a panic crystallizes losses for the remaining investors, which is why some funds (hedge funds, private equity) impose "gates" or lock-ups to prevent a rush for the exit. Liquidity transformation — offering daily redemption while holding illiquid assets — is a classic fault line.',
      'Fees are the silent variable that decides long-run outcomes. A 1.5% management fee plus a 20% performance cut (the "2 and 20" hedge-fund model) must be earned back before the investor sees a cent, and high-fee funds rarely beat a cheap index after costs. The investor\'s edge is not picking the best manager (nearly impossible in advance) but paying the lowest fee for broad exposure — which is why index ETFs have captured most of the industry\'s growth.',
    ],
    glossary: [
      { term: 'NAV', def: 'Net Asset Value — the per-share worth of a fund\'s portfolio.' },
      { term: 'Open-ended', def: 'A fund that issues and redeems shares on demand, keeping price ≈ NAV.' },
      { term: 'Hedge fund', def: 'A lightly regulated private fund using flexible, often leveraged strategies.' },
    ],
    related: ['etf', 'asset-manager', 'diversification'],
  },
  {
    id: 'client',
    title: 'The Client / Investor',
    category: 'institutions',
    icon: '🧑‍💼',
    color: ['#f59e0b', '#6366f1'],
    illustration: 'scale',
    hook: 'The person whose money it actually is — and the one every other player in the chain is, in theory, serving.',
    tldr: 'A client is the end owner of the money — the investor whose assets a broker, custodian, and manager act on behalf of, for fees.',
    definition: [
      'In the financial chain, the client (or investor) is the principal: the person or institution whose assets are at stake. Everyone else — broker executing trades, custodian holding them, fund manager choosing them, advisor recommending them — is an agent acting on the client\'s behalf and for the client\'s account. The entire architecture of regulation, fiduciary duty, and segregated custody exists to protect this one party, because the client is the one who bears the losses.',
      'Clients range from retail (individuals investing savings) to high-net-worth (private banking) to institutional (pension funds, insurers, sovereign wealth funds managing billions). The relationship differs by tier: retail gets standardized products under strong consumer protection; institutions negotiate bespoke terms, custody, and mandates directly. But in every case the defining feature is the same — it is their money, and the firm is hired to serve it.',
    ],
    keyPoints: [
      'The client is the principal; brokers, custodians, and managers are agents.',
      'Fiduciary duty legally requires acting in the client\'s best interest — not the firm\'s.',
      'Client assets must be segregated from the firm\'s own (the custody principle).',
      'Suitability vs. fiduciary: "not unsuitable" is a weaker standard than "best interest".',
    ],
    formula: {
      expression: 'Client return = Gross return − Fees − Taxes − Behavior drag',
      legend: 'Gross return = market/strategy result · Fees = all intermediation costs · Behavior drag = self-inflicted timing losses',
      note: 'The client eats every layer of cost; the goal of good advice is to minimize the layers that add nothing.',
    },
    example: {
      scenario: 'A retail client invests €50k through a broker, into a fund run by a manager, held by a custodian. Who does what, and what does the client pay?',
      steps: [
        'Custodian holds the €50k of assets safely, segregated from the broker\'s books.',
        'Broker executes buy/sell orders and may charge a commission or spread.',
        'Fund manager picks the portfolio and charges the TER (~0.1%–1.5%).',
        'The client pays all of it — and keeps whatever return remains after costs.',
      ],
      result: 'Four parties, one owner. The client is the only one bearing risk; the others earn fees for enabling, holding, and deciding.',
    },
    deepDive: [
      'The central tension in finance is principal–agent conflict: the firm wants fees, the client wants returns, and these diverge whenever a profitable-for-the-firm product is mediocre-for-the-client. A broker incentivized by commission may overtrade; a manager paid on assets may resist returning cash; an advisor paid to sell in-house products may steer the client to them. Fiduciary duty and fee-only compensation are the structural fixes — paying advisors a flat fee rather than a product commission aligns them with the client and is the single best predictor of advice quality.',
      'The client\'s most powerful and most ignored advantage is time horizon. Institutions must report quarterly and face withdrawal pressure; individuals saving for retirement have a 40-year view and no forced seller. That long horizon, combined with the discipline to not panic, is an edge institutions literally cannot deploy. The tragedy of retail investing is that most clients surrender this edge by trading, panicking, and paying for advice that underperforms a cheap index fund they could have held for free.',
    ],
    glossary: [
      { term: 'Principal vs agent', def: 'Principal owns the money; agent acts on its behalf — the core of client relationships.' },
      { term: 'Fiduciary duty', def: 'Legal obligation to put the client\'s interest above the firm\'s.' },
      { term: 'Segregation', def: 'Keeping client assets separate from the firm\'s so they survive firm failure.' },
    ],
    related: ['broker', 'depositary', 'asset-manager', 'fund'],
  },
  {
    id: 'market-maker',
    title: 'Market Maker',
    category: 'institutions',
    icon: '⚖️',
    color: ['#0ea5e9', '#6366f1'],
    illustration: 'scale',
    hook: 'The trader who is always willing to deal — standing ready to buy when nobody wants to and sell when nobody will.',
    tldr: 'A market maker continuously quotes both a buy and a sell price, profiting from the spread, and providing the liquidity that lets others trade instantly.',
    definition: [
      'A market maker is a firm that stands ready to buy and sell a particular asset at publicly quoted prices, all day, every day. They quote a bid (price they\'ll pay) and an ask (price they\'ll sell for); the gap between them is the spread, which is their compensation for taking on inventory risk. Because they will trade with anyone at any time, they are the source of the instant liquidity that makes markets feel smooth — you can always sell, because the market maker will always buy (at its price).',
      'Their business is small edge × huge volume minus the losses from holding the wrong inventory when prices move. They earn cents per share on millions of shares. The risk is that they accumulate a position just before the market moves against it — so good market making is fast, hedged, and ruthless about inventory. Many retail "zero-commission" brokers don\'t execute your order themselves; they sell your order flow to a market maker, which captures the spread. The commission moved; it did not vanish.',
    ],
    keyPoints: [
      'Quotes a bid and an ask; profit is the spread, earned on volume.',
      'Provides immediacy — the ability to trade now, without waiting for a natural counterparty.',
      'Bears inventory risk: a position that moves the wrong way loses money.',
      'Designated market makers on exchanges also stabilize prices in stress.',
    ],
    formula: {
      expression: 'Spread profit = (Ask − Bid) × Volume − Inventory loss',
      legend: 'Ask − Bid = quoted spread · Volume = shares traded through them · Inventory loss = price moves against held stock',
      note: 'Tight spreads mean competition and depth; wide spreads mean risk or illiquidity.',
    },
    example: {
      scenario: 'A market maker quotes a stock at bid €99.98 / ask €100.02. You buy 1,000 shares at ask. Five minutes later the price is unchanged and they sell those shares to another investor at ask.',
      steps: [
        'They sold to you at €100.02 → received €100,020.',
        'They bought from you (effectively) at €99.98 → paid €99,980.',
        'Spread earned = 1,000 × (100.02 − 99.98) = €40 on a tiny price move.',
        'Repeat across millions of shares a day — the model is pennies times enormous volume.',
      ],
      result: 'You got instant execution; the market maker earned €40 for providing it. The spread is the price of immediacy.',
    },
    deepDive: [
      'The market maker\'s nemesis is "adverse selection" — trading with someone who knows more. If a hedge fund is buying aggressively because it knows good news is coming, the market maker keeps selling, builds a short position, and gets run over when the news hits. Market makers lose money to informed flow and make money to "noise" (uninformed) flow; the entire art is distinguishing the two, fast, and widening the spread when informed flow appears. This is why spreads blow out before announcements: the market maker fears it is trading against someone who knows the result.',
      'High-frequency market making is the modern form: algorithms quote and cancel thousands of prices per second, holding inventory for seconds or less, capturing tiny spreads with near-zero risk. Critics argue this is "phantom liquidity" — it vanishes in a crash when it is most needed, because the algos switch off rather than catch a falling knife. Defenders point out that spreads have collapsed and trading costs are a fraction of what they were. Both are true: the liquidity is real in calm markets and conditional in chaos, which is exactly when liquidity matters most.',
    ],
    glossary: [
      { term: 'Bid-ask spread', def: 'The gap between the best quoted buy and sell prices — the market maker\'s edge.' },
      { term: 'Inventory risk', def: 'The risk of holding a position that loses value before it can be offloaded.' },
      { term: 'Adverse selection', def: 'Trading with better-informed counterparties who pick you off.' },
    ],
    related: ['broker', 'liquidity', 'order-book'],
  },
  {
    id: 'prime-broker',
    title: 'Prime Broker',
    category: 'institutions',
    icon: '🏛️',
    color: ['#1e293b', '#6366f1'],
    illustration: 'bars',
    hook: 'The bank behind a hedge fund — lending it money, clearing its trades, and holding its collateral.',
    tldr: 'A prime broker is a big investment bank that provides hedge funds with financing, clearing, custody, and securities lending in one bundled service.',
    definition: [
      'A prime broker is the operational and financial backbone for hedge funds and other large institutional traders. Rather than dealing with a dozen separate providers, a fund signs with one prime broker that bundles: custody of its assets, clearing and settlement of its trades, margin financing (lending it money to lever up), securities lending (so it can short), and reporting. In return the prime broker earns interest on the loans, fees on financing, and a claim on the fund\'s assets as collateral — a very profitable, sticky relationship.',
      'Because the prime broker holds the fund\'s assets as collateral for its loans, it is also the fund\'s biggest counterparty. This concentration is efficient but dangerous: if a prime broker fails (Bear Stearns, Lehman), the funds tied to it can lose access to their own assets and face months of legal recovery. Large funds therefore split across two or more primes to avoid single-counterparty dependence — a lesson written in 2008.',
    ],
    keyPoints: [
      'One-stop shop: custody + clearing + financing + securities lending for hedge funds.',
      'Earns on margin loans, financing spreads, and securities-lending fees.',
      'Holds the fund\'s assets as collateral — making it the fund\'s key counterparty.',
      'Concentration risk: a prime failure strands its funds, hence multi-prime setups.',
    ],
    formula: {
      expression: 'Margin loan = Portfolio value × (1 − Haircut)',
      legend: 'Portfolio value = fund\'s assets held at the prime · Haircut = % the prime requires as equity buffer',
      note: 'A 20% haircut on a €1B portfolio funds €800M of leverage; lower haircuts mean more leverage and more prime-broker risk.',
    },
    example: {
      scenario: 'A hedge fund has €500M of assets and wants 2× exposure. Its prime broker applies a 25% haircut. How much can it borrow and control?',
      steps: [
        'Max borrowing = 500M × (1 − 0.25) = €375M margin loan.',
        'Total assets controlled = 500M + 375M = €875M (1.75× leveraged).',
        'To reach 2× (€1B), the fund adds €125M more equity or finds a lower-haircut prime.',
        'The prime broker holds all €500M as collateral and charges financing interest on the €375M.',
      ],
      result: 'The prime broker turned the fund\'s equity into leveraged buying power, keeping the assets and earning financing income in return.',
    },
    deepDive: [
      'The prime brokerage business is a flywheel of network effects: the more funds a prime serves, the more it knows about flows and the better it can match securities to lend (for shorts) and price financing. The top few primes dominate the industry, which makes prime brokerage a concentrated, systemic business — a reason regulators watch it closely. The margin terms (haircuts, concentration limits) a prime sets are effectively a private-sector brake on hedge-fund leverage.',
      'When a fund gets into trouble, the prime broker is the one who decides its fate. A margin call, if unmet, lets the prime liquidate the collateral — often into a falling market, deepening the fund\'s losses and sometimes the market\'s (the Archegos failure in 2021 was prime brokers liquidating huge concentrated positions all at once). The lesson for the system is that multiple primes holding the same collateral without knowing about each other creates hidden leverage; the lesson for a fund is that your prime can be your friend in calm and your executioner in stress.',
    ],
    glossary: [
      { term: 'Haircut', def: 'The % of an asset\'s value the prime won\'t lend against — the equity buffer required.' },
      { term: 'Securities lending', def: 'Lending stock so a client can short it; the prime earns a fee and takes collateral.' },
      { term: 'Margin financing', def: 'Loans letting a fund buy more assets than its equity would allow.' },
    ],
    related: ['broker', 'fund', 'margin-trading', 'counterparty'],
  },
  {
    id: 'asset-manager',
    title: 'Asset Manager',
    category: 'institutions',
    icon: '🎯',
    color: ['#16a34a', '#6366f1'],
    illustration: 'cycle',
    hook: 'The professional hired to grow other people\'s money — judged not by absolute returns but by beating a benchmark.',
    tldr: 'An asset manager runs investment portfolios on behalf of clients, charging a fee and aiming to deliver a return that justifies it against a benchmark.',
    definition: [
      'An asset manager (BlackRock, Vanguard, Fidelity, or a boutique) is a firm that invests pooled money on behalf of clients — individuals via funds, institutions via mandates — for a fee. The core deal: clients hand over capital and a mandate (growth, income, liability-matching), the manager builds and rebalances portfolios to deliver it, and charges a percentage of assets (TER) and sometimes a performance fee. The manager does not own the money; it is paid to be a good agent for it.',
      'Managers split into active (trying to beat a benchmark by picking securities) and passive/index (replicating a benchmark at minimal cost). The industry has shifted hard toward passive because, net of fees, most active managers fail to beat their benchmark over long periods — a result so consistent that trillions have migrated from stock-pickers to cheap index funds. The active managers who survive either have a genuine, scalable edge or serve niches (private markets, fixed-income, specialized strategies) where indexing doesn\'t yet work well.',
    ],
    keyPoints: [
      'Runs client money under a mandate, for a fee (TER and/or performance).',
      'Active tries to beat a benchmark; passive replicates one cheaply.',
      'Judged on risk-adjusted return vs. benchmark, net of fees, after taxes.',
      'Scale matters: more AUM spreads fixed costs, lowering fees and winning more AUM.',
    ],
    formula: {
      expression: 'Active return = Manager return − Benchmark return',
      legend: 'Manager return = portfolio result · Benchmark return = passive comparison index',
      note: 'Positive "alpha" after fees is the active manager\'s whole justification; persistent alpha is extremely rare.',
    },
    example: {
      scenario: 'An active manager runs €1B against the MSCI World index. The index returns 8%; the manager returns 9% gross but charges 1.2%. Net alpha?',
      steps: [
        'Gross outperformance (alpha) = 9% − 8% = +1.0%',
        'Fee = 1.2% → net return = 9% − 1.2% = 7.8%',
        'Net alpha vs. benchmark = 7.8% − 8% = −0.2% (underperformed)',
        'A 0.1% index fund nets 7.9% — beats the "star" manager after fees.',
      ],
      result: 'Outperforming the index before fees does not save you; after fees the cheap passive fund won. Fees are the only reliable predictor of long-term returns.',
    },
    deepDive: [
      'Why is persistent alpha so rare? Because markets are competitive and prices already reflect available information (the efficient-market hypothesis, roughly true). To beat the average you must find a mistake others miss — but the average is set by everyone else trying the same thing, and after trading costs and fees the average active dollar must underperform the passive dollar by definition (the math is brutal and unavoidable). The few managers with real edge tend to be capacity-constrained: their strategy stops working if too much money piles in, which is why the biggest winners often close their funds to new money.',
      'The asset manager\'s deeper conflict is "gathering assets" vs. "generating returns." Because fees scale with AUM, the firm is rewarded for size even when size dilutes performance (capacity strain). A manager who closes the fund to protect returns turns away fees — a rare, principled move. The structural fix for clients is to favor managers whose interests align with theirs (performance fees with high watermarks, employee ownership, capacity discipline) and to remember that the manager is a service provider to be evaluated relentlessly, not a guru to be trusted.',
    ],
    glossary: [
      { term: 'Alpha', def: 'Return above the benchmark — the active manager\'s value-add (or not).' },
      { term: 'Benchmark', def: 'The passive index an active manager is measured against.' },
      { term: 'High watermark', def: 'Fee structure that pays performance fees only on new profits, not recovery of losses.' },
    ],
    related: ['fund', 'etf', 'broker', 'client'],
  },

  /* ---------------- DERIVATIVES & TRADING ---------------- */
  {
    id: 'swap',
    title: 'Swaps',
    category: 'derivatives',
    icon: '🔄',
    color: ['#8b5cf6', '#3b82f6'],
    illustration: 'cycle',
    hook: 'Two parties trading each other\'s cash flows — the most used derivative you\'ve never heard of.',
    tldr: 'A swap is a derivative where two parties exchange sequences of cash flows — most often a fixed rate for a floating one — over a set period.',
    definition: [
      'A swap is an agreement between two counterparties to exchange cash flows on set dates for a fixed term. The canonical form is the interest-rate swap: party A pays a fixed rate to B, and B pays a floating rate (like SOFR/Euribor) to A, on the same "notional" amount. No principal changes hands — the notional is just the number the interest is calculated on. The net is a single payment each period from whoever owes more to whoever is owed.',
      'Swaps exist because different parties have different needs and views. A company with a floating-rate loan that fears rising rates swaps into fixed; a bank with fixed-rate deposits swaps into floating. Beyond rates there are currency swaps (exchange principal and interest in two currencies), credit default swaps (insure against a borrower defaulting), commodity swaps, and equity swaps. Swaps are mostly over-the-counter — bespoke, bilateral, and now largely cleared through central counterparties after 2008.',
    ],
    keyPoints: [
      'Exchange of cash flows, not principal — notional is just the reference amount.',
      'Interest-rate swaps are the largest derivatives market by notional.',
      'Used to convert floating exposure to fixed (or vice versa) — hedging, not just speculation.',
      'Bilateral/OTC → counterparty risk is central; clearing mitigates it.',
    ],
    formula: {
      expression: 'Net payment = (Floating rate − Fixed rate) × Notional × Day-fraction',
      legend: 'Notional = reference amount · rates as decimals · Day-fraction = period/360 or /365',
      note: 'Only the net difference is paid, each period — that is what "netting" means in practice.',
    },
    example: {
      scenario: 'A company has a €10M floating-rate loan (Euribor) and worries rates will rise. It enters a 5-year swap: pay 3% fixed, receive Euribor.',
      steps: [
        'If Euribor is 2%: company pays 3% − receives 2% = net pays 1% × €10M = €100k/yr.',
        'On the loan it pays 2% Euribor; swap nets to: 2% + (3%−2%) = 3% all-in = fixed.',
        'If Euribor jumps to 5%: swap nets receive 5%−3% = +2% × €10M = +€200k.',
        'Loan costs 5%, swap pays €200k → net cost 3%. The swap locked in a fixed 3%.',
      ],
      result: 'Whatever Euribor does, the company\'s net cost is 3%. The swap converted a floating-rate loan into an effective fixed-rate loan without refinancing.',
    },
    deepDive: [
      'Swaps are powerful precisely because they separate the asset from its risk. The company above kept its loan (cheap, flexible, relationship-based) but changed its interest-rate exposure synthetically. This "synthetic" transformation is the general virtue of derivatives: you can gain or shed any exposure without buying or selling the underlying — cheaper, faster, and without disrupting the real business. The risk is that the same leverage and flexibility lets you take exposures you cannot actually afford, which is why swaps are now centrally cleared and margined.',
      'The notional amounts in swaps sound terrifying (hundreds of trillions globally) but are misleading: they reference principal that never moves. The real economic exposure — the mark-to-market value of all outstanding swaps — is far smaller, on the order of single-digit trillions. Still, that value is real and bilateral; the post-2008 push to clear standard swaps through CCPs turns those bilateral exposures into margined, guaranteed ones, trading counterparty risk for the systemic risk of a clearing-house failure (a smaller but more concentrated danger).',
    ],
    glossary: [
      { term: 'Notional', def: 'The reference amount used to calculate swap payments — not actually exchanged.' },
      { term: 'Interest-rate swap', def: 'Exchange of a fixed for a floating rate on a notional — the benchmark swap.' },
      { term: 'CDS', def: 'Credit default swap — a swap that pays out if a named borrower defaults (default insurance).' },
    ],
    related: ['futures', 'options', 'counterparty', 'hedging'],
  },
  {
    id: 'futures',
    title: 'Futures',
    category: 'derivatives',
    icon: '📜',
    color: ['#f59e0b', '#dc2626'],
    illustration: 'bars',
    hook: 'A binding contract to buy or sell something later at a price set today — traded on an exchange, margined daily.',
    tldr: 'A future is a standardized, exchange-traded contract to buy or sell an asset at a fixed price on a future date, settled daily through a clearing house.',
    definition: [
      'A futures contract commits you to buy (long) or sell (short) a set quantity of an asset at a price agreed now, for settlement on a fixed future date. Unlike a private forward, a future is standardized (quantity, quality, date all set by the exchange) and exchange-traded, which means two things change: the clearing house becomes your counterparty (no default risk), and you must post margin and settle gains and losses every single day ("mark-to-market").',
      'Daily settlement is the defining mechanic. Each day the exchange credits or debits your account for that day\'s price move. If your margin falls below a maintenance level, you get a margin call and must top up immediately or be liquidated. This makes futures self-collateralizing and removes credit risk — but it also means a position can be closed out by margin calls before the contract matures, the way a private forward cannot. Futures are used by hedgers (a farmer locking in a crop price, an airline locking in fuel costs) and speculators who never want the underlying.',
    ],
    keyPoints: [
      'Standardized and exchange-traded → liquid, transparent, and clearing-house guaranteed.',
      'Daily mark-to-market and margin calls remove counterparty risk but force cash management.',
      'Physical settlement = deliver the asset; cash settlement = pay the price difference.',
      'Used to hedge price risk or speculate with leverage (small margin controls full exposure).',
    ],
    formula: {
      expression: 'P&L = (Settlement price − Entry price) × Contract size × Number of contracts',
      legend: 'Settlement price = daily close · Contract size = units per contract · Number = contracts held',
      note: 'Sign flips for shorts: they profit when price falls. Margin must cover daily swings.',
    },
    example: {
      scenario: 'A baker wants to lock in wheat at €200/ton for delivery in 3 months. One futures contract = 50 tons. He buys 10 contracts.',
      steps: [
        'Exposure = 10 × 50 tons = 500 tons, locked at €200.',
        'If wheat rises to €250 by expiry: gain = (250−200) × 500 = €25,000 in margin credits.',
        'He takes delivery at €200 (or cash-settles +€25,000 and buys spot at €250 — same result).',
        'If wheat falls to €150: −€25,000, but he still buys his wheat cheaply at market — he hedged.',
      ],
      result: 'The baker locked his input cost at €200/ton regardless of price moves. The futures turned an unpredictable cost into a known one.',
    },
    deepDive: [
      'The price of a future is not just today\'s spot price; it embeds the "cost of carry" — the financing, storage, and (for commodities) convenience of holding the physical asset. A future often trades at a premium (contango) when storage/carry is positive, or a discount (backwardation) when the physical is scarce and urgently needed. The curve shape — the prices across different expiry months — is itself information: backwardation signals tightness now; contango signals abundance (or a glut being stored for later).',
      'Futures are leveraged: a small margin (often 5–10%) controls the full contract value, so a 5% price move can double or wipe out your margin. This leverage is the appeal to speculators and the danger to the unwary — a position you cannot afford to hold through normal swings will be liquidated at the worst moment. Hedgers tolerate this because they have an offsetting physical exposure; speculators are betting they can manage the margin calls. Most retail ruin in futures comes not from being wrong about direction but from being right too early and running out of margin before being proven right.',
    ],
    glossary: [
      { term: 'Margin call', def: 'A demand to add funds when daily losses push your margin below the maintenance level.' },
      { term: 'Contango / backwardation', def: 'Future above spot (contango) vs. future below spot (backwardation) — the curve shape.' },
      { term: 'Mark-to-market', def: 'Revaluing a position to the current market price daily, settling the difference in cash.' },
    ],
    related: ['forward', 'options', 'swap', 'hedging'],
  },
  {
    id: 'forward',
    title: 'Forward Contracts',
    category: 'derivatives',
    icon: '📅',
    color: ['#0ea5e9', '#6366f6'],
    illustration: 'curve',
    hook: 'The futures contract\'s older, private cousin — bespoke, bilateral, and only settled at the end.',
    tldr: 'A forward is a private, customized contract to buy or sell an asset at a set price on a future date, settled once at maturity.',
    definition: [
      'A forward contract is the simplest derivative: two parties agree today on a price for an asset to be delivered on a future date. Unlike a future, it is private (over-the-counter), fully customized (any size, date, quality the two parties want), and settled just once at maturity rather than daily. That simplicity is its strength — a currency forward can lock in exactly the amount and date a company needs for an invoice — and its weakness: the counterparty is the other party, with all the default risk that implies, and there is no daily margin to surface trouble early.',
      'Forwards are most common in foreign exchange (a €/USD forward lets an exporter lock in the rate at which it will convert future dollar sales), commodities, and interest rates (FRAs). Because they are bilateral and bespoke, they are illiquid — you cannot easily sell a forward to someone else; you typically offset it by entering an opposite forward with the same or another counterparty, leaving two contracts that net out economically but both still carry credit risk until they mature.',
    ],
    keyPoints: [
      'Private, customized, settled once at maturity — the flexible alternative to futures.',
      'Counterparty risk is real and bilateral — no clearing house, no daily margin.',
      'Currency forwards are the largest use case (locking future FX rates).',
      'Illiquid: hard to transfer; usually offset with an opposing forward.',
    ],
    formula: {
      expression: 'Forward price = Spot × (1 + r·t)  (zero-carry asset)',
      legend: 'Spot = today\'s price · r = financing rate · t = time to maturity in years',
      note: 'With dividends, storage, or yield, adjust: Forward = Spot × (1 + (r − yield)·t) + storage costs.',
    },
    example: {
      scenario: 'A US exporter will receive €1M in 90 days and wants to lock the €→$ rate. Spot is 1.10 $/€; 90-day dollar rate is 5%. Forward?',
      steps: [
        't = 90/360 = 0.25 yr; financing cost = 5% × 0.25 = 1.25%',
        'Forward = 1.10 × (1 + 0.0125) = 1.11375 $/€',
        'In 90 days, €1M converts at 1.11375 = $1,113,750 regardless of the spot then.',
        'If the euro has crashed to 1.00 by then, the exporter is glad — the forward saved $113,750.',
      ],
      result: 'The exporter removed currency risk from a known future receivable. The forward price reflects the cost of carrying the position, not a market bet.',
    },
    deepDive: [
      'The difference between a forward and a future is mostly institutional but consequential. The future\'s daily margining makes credit risk vanish but forces active cash management; the forward\'s single settlement keeps cash idle until maturity but lets credit risk build invisibly — you only learn the other party is in trouble when they fail to pay at the end. This is why banks that write forwards demand collateral and why regulators pushed standard forwards toward clearing. The lesson of 2008 was that invisible, bilateral credit risk concentrates and then detonates.',
      'A forward\'s "fair value" at any moment before maturity is the difference between the locked price and the current market forward price, discounted back. This is exactly how banks mark their forward books to market daily for risk and accounting, even though the contract itself doesn\'t settle until the end. A company with a deep in-the-money forward to a struggling counterparty holds an asset that may be worthless — the mark shows a profit that the credit team knows may never be collected.',
    ],
    glossary: [
      { term: 'OTC', def: 'Over-the-counter — privately negotiated, off-exchange; the forward\'s home turf.' },
      { term: 'FRA', def: 'Forward Rate Agreement — a forward on a future interest rate.' },
      { term: 'NDF', def: 'Non-deliverable forward — a forward settled in cash (the difference), used for restricted currencies.' },
    ],
    related: ['futures', 'swap', 'hedging', 'counterparty'],
  },
  {
    id: 'options',
    title: 'Options',
    category: 'derivatives',
    icon: '🎚️',
    color: ['#ec4899', '#8b5cf6'],
    illustration: 'curve',
    hook: 'The right, not the obligation — pay a premium today to decide later whether a trade is worth it.',
    tldr: 'An option gives the buyer the right (not obligation) to buy (call) or sell (put) an asset at a set price by a set date, for a premium paid upfront.',
    definition: [
      'An option is asymmetric by design. The buyer pays a premium and gets a right; the seller collects the premium and takes on an obligation. A call gives the right to buy at the strike; a put gives the right to sell at the strike. Because the buyer can walk away, the most they ever lose is the premium — while the seller can lose far more (a call seller\'s loss is, in principle, unlimited). That asymmetry is the whole point: options let you cap your downside and keep your upside, for the price of the premium.',
      'Option value has two parts. Intrinsic value is what the option is worth if exercised now (a call with a €50 strike while the stock is €60 is worth €10 intrinsic). Time value is the extra you pay for the chance the stock keeps moving before expiry — driven by time remaining and volatility. Higher volatility, more time, lower rates all raise premiums. The famous Black–Scholes formula prices a European option from these inputs; the deeper truth it encodes is that volatility is the single most important driver of option value.',
    ],
    keyPoints: [
      'Buyer has a right (max loss = premium); seller has an obligation (can lose much more).',
      'Call = right to buy; Put = right to sell; Strike = the locked price; Expiry = the deadline.',
      'Value = intrinsic + time value; time value rises with volatility and time.',
      'Used to hedge (buy puts as insurance) or to speculate/earn income (sell covered calls).',
    ],
    formula: {
      expression: 'Call value = Intrinsic + Time value,  Intrinsic = Max(0, Spot − Strike)',
      legend: 'Spot = current price · Strike = exercise price · Time value ≈ f(volatility, time, rates)',
      note: 'Black–Scholes: C = S·N(d1) − K·e^(−rt)·N(d2) — the closed-form pricer for European calls.',
    },
    example: {
      scenario: 'You own a stock at €100 and fear a crash. You buy a 3-month put with a €90 strike for €3 (premium). What happens?',
      steps: [
        'Cost = €3/share — the most you can lose (the "insurance premium").',
        'If stock stays at €100: put expires worthless, you lose the €3 — insurance not used.',
        'If stock crashes to €70: put lets you sell at €90 → you get €90 not €70, saving €20 − €3 = €17.',
        'Your effective floor is €90 − €3 = €87; your upside above €100 is unchanged.',
      ],
      result: 'For €3 you bought a floor under your position. The put is portfolio insurance — a small, certain cost to cap a catastrophic loss.',
    },
    deepDive: [
      'Options are the purest trade on volatility. A buyer of a straddle (a call and a put at the same strike) profits if the stock moves a lot in either direction and loses if it sits still — they have bought volatility. The seller profits if it sits still and loses if it explodes — they have sold volatility. This is why options traders think in "vol," not direction: the question is whether realized volatility will exceed the implied volatility already priced into the premium. The Volatility Index (VIX) is literally the implied volatility of S&P 500 options — the market\'s expectation of future swings, tradable as an asset in its own right.',
      'The quiet danger of options is time decay ("theta"): an option loses a little value every day it doesn\'t move into the money, accelerating near expiry. Option buyers are fighting both the direction and the clock; option sellers collect theta but take on tail risk they may not see for years. Most retail option buyers lose money not because direction is hard (it is) but because they systematically overpay for time value and let it decay — they are the counterparty funding the premium income of more disciplined sellers. Options are tools, not lottery tickets; the difference is whether you have a view on volatility, not just direction.',
    ],
    glossary: [
      { term: 'Premium', def: 'The price paid for an option — the buyer\'s maximum loss.' },
      { term: 'Implied volatility', def: 'The future volatility embedded in an option\'s market price — what you\'re really trading.' },
      { term: 'Theta', def: 'Time decay — how much value an option bleeds each day it doesn\'t move in the money.' },
    ],
    related: ['futures', 'swap', 'hedging', 'risk-management'],
  },
  {
    id: 'hedging',
    title: 'Hedging',
    category: 'derivatives',
    icon: '🛡️',
    color: ['#0ea5e9', '#16a34a'],
    illustration: 'scale',
    hook: 'Not a bet on being right — a bet on not being ruined. The art of offsetting one risk with another.',
    tldr: 'Hedging is taking an offsetting position whose gains cancel the losses of a risk you already hold, so the net exposure is what you want, not what chance delivers.',
    definition: [
      'To hedge is to reduce or eliminate an unwanted exposure by taking a position that moves opposite to it. A farmer who will sell wheat hedges by selling wheat futures: if the price falls, the crop is worth less but the futures profit offsets it; if the price rises, the futures lose but the crop is worth more. Either way, the net is roughly the locked price. Hedging is not about making money — it is about making an outcome certain so the real business (farming, manufacturing, importing) can be planned.',
      'A "perfect hedge" leaves no exposure at all, but in practice hedges are imperfect: the hedge instrument rarely matches the underlying exactly (basis risk), the timing may differ, and hedging costs money (premiums, spreads, margin). The art is hedging the big, ruinous risks cheaply and accepting the small, survivable ones. Over-hedging — hedging so much that you speculate by accident — is a common error: a company that hedges 130% of its fuel needs is now short fuel, betting on prices, even if it calls the position a hedge.',
    ],
    keyPoints: [
      'Offset an existing risk so net exposure is the planned outcome, not the random one.',
      'Perfect hedges are rare — "basis risk" is the gap between hedge and underlying.',
      'Hedging costs money (premiums, spreads, margin); the cost is the price of certainty.',
      'Over-hedging turns a hedge into a speculative bet — size to the actual exposure.',
    ],
    formula: {
      expression: 'Hedge ratio = Value of hedge position ÷ Value of exposure',
      legend: 'Hedge position = offsetting instrument · Exposure = risk being hedged',
      note: 'A ratio of 1.0 is a full hedge; the optimal ratio also depends on how the hedge moves vs. the exposure (beta).',
    },
    example: {
      scenario: 'A European fund holds $10M of US stocks and fears a euro strengthening against the dollar before it reports in 3 months. How does it hedge the FX risk?',
      steps: [
        'Risk: if $/€ falls, the $10M is worth fewer euros when repatriated.',
        'Hedge: sell $10M forward (or buy $10M of puts on the dollar) for 3 months out.',
        'If $/€ drops 5%: the US stocks are worth 5% less in euros, but the forward gains 5% → nets out.',
        'Fund has locked the euro value of its US holdings, removing the currency bet it never wanted.',
      ],
      result: 'The fund was long US stocks AND long the dollar by accident; the hedge removed the accidental currency bet, leaving only the stock bet it intended.',
    },
    deepDive: [
      'The deepest point about hedging is that it is about risk selection, not risk elimination. Every portfolio is a bundle of risks — market, currency, rate, commodity, credit — and most investors hold many they never chose (a stock portfolio is implicitly long growth, short volatility, long the dollar, etc.). Hedging lets you strip out the risks you have no edge on and no wish to carry, keeping only the ones you actually want to be paid for. The fund above wanted to be paid for stock-picking, not currency; the hedge made that clean. Done well, hedging sharpens a position; done poorly, it just adds cost and complexity.',
      'Hedging and insurance are the same idea viewed differently. Buying a put is buying insurance on your stock; buying a CDS is buying insurance on a bond; buying fire insurance is buying a put on your house. The principle is universal: pay a small certain premium to avoid an unaffordable loss, when the loss is unaffordable and the premium is bearable. The mistake is insuring what you can afford to self-insure (phone warranties) and self-insuring what you cannot (going uninsured against catastrophe). Hedging is just insurance applied to financial exposures — same economics, same discipline.',
    ],
    glossary: [
      { term: 'Basis risk', def: 'The risk that the hedge doesn\'t perfectly track the exposure — the residual gap.' },
      { term: 'Hedge ratio', def: 'How much hedge to hold per unit of exposure; 1.0 fully offsets.' },
      { term: 'Natural hedge', def: 'An exposure that offsets itself (revenue and costs in the same currency) — no instrument needed.' },
    ],
    related: ['futures', 'options', 'swap', 'diversification'],
  },
  {
    id: 'short-selling',
    title: 'Short Selling',
    category: 'derivatives',
    icon: '🔻',
    color: ['#dc2626', '#f59e0b'],
    illustration: 'curve',
    hook: 'Betting something will fall — by selling borrowed shares you don\'t own, hoping to buy them back cheaper.',
    tldr: 'Short selling is selling a borrowed asset in the hope its price falls, so you can buy it back cheaper, return it, and keep the difference.',
    definition: [
      'Short selling reverses the usual order: you sell first, buy later. To short a stock, you borrow shares from a broker (which lends them from its inventory or other clients\' holdings), sell them into the market, and receive cash. Later you must buy the same number of shares back to return them. If the price fell, you buy back cheaper than you sold — you keep the difference. If it rose, you buy back dearer than you sold — you lose. Your profit is capped at the original price (the stock can only fall to zero) but your loss is, in principle, unlimited (the stock can rise without limit).',
      'Shorting requires a stock loan, which has its own cost (a "borrow fee") and the risk the lender recalls the shares, forcing you to buy back at a bad price. It also requires margin, because your losses can exceed the proceeds. And it carries "short squeeze" risk: if many shorts are caught and the stock rises, they all rush to buy back at once, driving the price higher and trapping more of them — a feedback loop that can multiply losses in days. Shorting is rational and useful (it improves price discovery and lets you express a negative view), but it is asymmetrically dangerous and not for the unhedged.',
    ],
    keyPoints: [
      'Sell borrowed shares high, buy back low, return them, keep the gap.',
      'Profit capped at the original price; loss theoretically unlimited.',
      'Costs a borrow fee and margin; the lender can recall the shares.',
      'Short squeezes: rising price forces shorts to cover, pushing the price higher.',
    ],
    formula: {
      expression: 'Short P&L = (Sell price − Buyback price) × Shares − Borrow fees − Dividends paid',
      legend: 'Sell price = proceeds when shorted · Buyback = cost to close · Dividends paid = short pays the lender any dividends',
      note: 'A short seller owes the lender any dividends paid while short — and must cover recall at any time.',
    },
    example: {
      scenario: 'You short 100 shares at €50. The stock pays no dividend and borrow is free. It falls to €40. You close.',
      steps: [
        'Sell: 100 × €50 = €5,000 received (held as collateral, not yours yet).',
        'Buy back: 100 × €40 = €4,000 paid.',
        'Profit = 5,000 − 4,000 = €1,000 (a 20% gain on the €5,000 notional).',
        'Had it risen to €70: buy back = €7,000 → loss €2,000 (28% of notional) — and rising.',
      ],
      result: 'A €10 fall made €1,000; a €20 rise lost €2,000. The asymmetry — capped upside, open downside — is why shorting is riskier than going long.',
    },
    deepDive: [
      'Short selling is the moral lightning rod of markets: when a company collapses, shorts are blamed for causing it, even though they only profited from detecting it first. Economically, shorts are essential — they are the only force pushing overvalued or fraudulent stocks back toward truth, because longs have no incentive to ever say "sell." A market without shorts is a market where bad companies stay overpriced and frauds run longer (research shows short interest improves price efficiency and deters manipulation). Banning shorting, as several countries did in 2008, removes a stabilizing force and makes prices less accurate, not safer.',
      'The professional short seller\'s real skill is risk management, not picking losers. A short thesis can be 100% right and still bankrupt you: frauds can take years to unravel, and a stock can double before it halves. Famous shorts lose money for years before being vindicated, requiring capital and nerve most lack. This is why disciplined shorts size small, hedge with long positions (market-neutral "long/short"), and use options (buy puts — capped downside) rather than naked shorts when the asymmetry is unbearable. Most retail shorts blow up not because they were wrong about the company but because they couldn\'t survive the path to being right.',
    ],
    glossary: [
      { term: 'Borrow fee', def: 'The cost of borrowing shares to short — high for "hard-to-borrow" stocks.' },
      { term: 'Short squeeze', def: 'A feedback loop where rising prices force shorts to cover, pushing prices higher still.' },
      { term: 'Naked short', def: 'Selling short without arranging to borrow — banned or restricted in most markets.' },
    ],
    related: ['margin-trading', 'bull-bear-market', 'liquidity', 'options'],
  },
  {
    id: 'margin-trading',
    title: 'Margin Trading',
    category: 'derivatives',
    icon: '🧲',
    color: ['#ec4899', '#6366f1'],
    illustration: 'scale',
    hook: 'Trading with borrowed money — bigger positions, bigger swings, and a broker who can sell you out without asking.',
    tldr: 'Margin trading is buying assets partly with money borrowed from your broker, amplifying both gains and losses and exposing you to margin calls.',
    definition: [
      'Margin trading means borrowing cash from your broker to buy more securities than your own money would allow. You put up a portion ("initial margin") and the broker lends the rest, holding your purchased assets as collateral. If the assets rise, your gains are magnified; if they fall, your losses are magnified equally, and once your equity drops below a "maintenance margin" the broker issues a margin call — add cash or we sell your positions, at the market, without your consent.',
      'The defining feature is the margin call. It converts a temporary price dip into a permanent loss, because you are forced to sell at the bottom to satisfy the loan. This is leverage\'s core danger: it removes your option to wait. An unleveraged investor who is "too early" simply waits; a leveraged one who is too early is sold out by their broker before the market comes around. Margin trading is the engine of both amplified retail speculation and the catastrophic blow-ups that end trading careers — the math is fine, the human under it usually isn\'t.',
    ],
    keyPoints: [
      'Borrowed money from the broker amplifies gains and losses equally.',
      'Margin call: if equity falls below maintenance, add cash or be auto-liquidated.',
      'Forced selling at bad prices turns temporary dips into permanent losses.',
      'The broker holds your assets as collateral and can sell them without asking.',
    ],
    formula: {
      expression: 'Equity = Position value − Borrowed amount',
      legend: 'Position value = securities held · Borrowed = margin loan from broker · Equity = your stake',
      note: 'Margin call triggers when Equity ÷ Position value falls below the maintenance margin %.',
    },
    example: {
      scenario: 'You have €5,000 and buy €10,000 of stock on 50% margin (€5,000 borrowed). The stock drops 25%. What happens?',
      steps: [
        'Position = 10,000 × 0.75 = €7,500. Loan still €5,000. Equity = 7,500 − 5,000 = €2,500.',
        'Your equity fell from €5,000 to €2,500 — a 50% loss on a 25% price drop (2× leverage).',
        'If maintenance margin is 25%: 2,500 ÷ 7,500 = 33% — still above, no call yet.',
        'Another 10% drop (to €6,750): equity = 1,750 → 1,750/6,750 = 26% — call imminent; one more slip triggers liquidation.',
      ],
      result: 'A 25% dip cost you half your money. With leverage, "hold and wait" can be taken off the table by a margin call — the broker, not you, decides when to sell.',
    },
    deepDive: [
      'Margin is where retail leverage and institutional leverage meet the same physics. A hedge fund at 5× leverage on a portfolio that falls 20% loses 100% of its equity and is liquidated — exactly the retail trader at 2× who gets a margin call on a 25% dip. The mechanism scales: borrowed money + forced selling = the universal formula for converting a bad day into a wiped-out account. The brokers\' margin terms (initial %, maintenance %, how fast they liquidate) are the private-sector brake, and the prime brokers\' haircuts are the institutional version of the same dial.',
      'The behavioral trap is that margin feels safe because the numbers move slowly at first. A 5% dip barely dents your equity, so you hold; a 15% dip starts to hurt but you "know" it will rebound; by 25% the margin call arrives and you are sold at the low you were sure was temporary. Leverage doesn\'t change the outcome distribution of the asset — it changes your survival in it. The unifying rule across all of finance is that leverage is survivable only with a horizon long enough and capital deep enough to meet any plausible margin call; without both, it is a bet on the path, not the destination, and the path is what nobody can predict.',
    ],
    glossary: [
      { term: 'Initial margin', def: 'The minimum cash you must put up to open a leveraged position.' },
      { term: 'Maintenance margin', def: 'The minimum equity you must keep holding; below it, a margin call fires.' },
      { term: 'Auto-liquidation', def: 'The broker selling your collateral to repay the loan when you don\'t meet a call.' },
    ],
    related: ['short-selling', 'leverage', 'liquidity', 'prime-broker'],
  },

  /* ---------------- BANKING (cont.) ---------------- */
  {
    id: 'bond',
    title: 'Bonds',
    category: 'banking',
    icon: '🧾',
    color: ['#475569', '#0ea5e9'],
    illustration: 'curve',
    hook: 'An IOU you can trade — you lend money, collect interest, and (in theory) get it back at the end.',
    tldr: 'A bond is a loan an investor makes to a borrower (government or company), paying regular interest and returning the principal at a set maturity date.',
    definition: [
      'A bond is a tradable IOU. The borrower (issuer) promises to pay the lender (bondholder) regular interest (the "coupon") and to return the original amount (the "face value" or "principal") on a fixed maturity date. Governments borrow via sovereign bonds (the safest, "risk-free"); companies borrow via corporate bonds (riskier, higher yield). Because the payments are fixed in advance, a bond\'s behavior is the inverse of interest rates: when rates rise, existing bonds paying the old (lower) coupon become less attractive, so their price falls; when rates fall, their price rises.',
      'Two risks dominate bonds. Credit risk is the chance the issuer defaults (pays no coupon or fails to repay principal) — higher for companies, lower for governments, and captured in credit ratings (AAA down to junk). Interest-rate risk is the chance rates rise and your fixed-coupon bond loses market value — bigger for longer-maturity bonds ("duration"). A short government bond is close to cash; a 30-year junk bond can swing like a stock.',
    ],
    keyPoints: [
      'Bond = tradable loan: fixed coupon, fixed maturity, return of principal.',
      'Price moves opposite to rates; longer maturity = bigger swings (duration).',
      'Yield = total return if held to maturity; rises when price falls.',
      'Credit risk (default) and rate risk (price swings) are the two main risks.',
    ],
    formula: {
      expression: 'Price = Σ [ Coupon ÷ (1+r)^t ] + Face ÷ (1+r)^n',
      legend: 'Coupon = periodic interest · Face = principal · r = discount (yield) · t = each period · n = maturity',
      note: 'Yield to maturity (YTM) is the rate r that makes the price equal the present value of all cash flows.',
    },
    example: {
      scenario: 'You buy a 10-year €1,000 bond paying a 4% coupon when market yields are 4%. A year later yields rise to 5%. What happens to the price?',
      steps: [
        'At issue, coupon = market yield → price = face = €1,000 (par).',
        'Rates rise to 5%: your 4% coupon is now below-market, so the price must fall to offer 5% overall.',
        'New price ≈ present value of remaining coupons + principal discounted at 5% ≈ €930.',
        'Hold to maturity and you still get €1,000 back — the loss is temporary if you don\'t sell.',
      ],
      result: 'A 1% rate rise knocked the bond from €1,000 to ~€930. The bond still pays as promised; only its market price moved. Hold to maturity and the loss reverses.',
    },
    deepDive: [
      'The "yield" you read is not the return you get. Yield to maturity assumes you reinvest every coupon at the same yield and hold to the end — neither is guaranteed. And a bond fund (which never holds to maturity, constantly rolling) delivers the rolling yield, not the YTM of any one bond. This is why bond funds can lose money even when "yields are positive": if rates rise faster than coupons accrue, the price losses outpace the income. The cleanest mental model: a single bond held to maturity is a fixed-cash instrument; a bond fund is a perpetual bet on the rate path.',
      'Bonds sit at the foundation of the whole system because the risk-free government bond yield is the discount rate for every other asset — stocks, real estate, private equity are all valued by discounting their cash flows at a rate built on top of the government bond yield plus a risk premium. So when bond yields move, everything reprices — which is why rate shocks are the most system-wide of all financial events. The bond market, not the stock market, is the true nervous system of finance; stocks are the noise on top of it.',
    ],
    glossary: [
      { term: 'Coupon', def: 'The regular interest payment a bond makes (often fixed).' },
      { term: 'Duration', def: 'A bond\'s price sensitivity to rate changes, in years — longer = riskier to rates.' },
      { term: 'YTM', def: 'Yield to maturity — the total annualized return if held to the end and coupons reinvested.' },
    ],
    related: ['interest-rate', 'inflation', 'amortization'],
  },
  {
    id: 'repo',
    title: 'Repo Market',
    category: 'banking',
    icon: '♻️',
    color: ['#0ea5e9', '#475569'],
    illustration: 'cycle',
    hook: 'The plumbing of Wall Street — borrowing cash for a day by pledging a bond as collateral.',
    tldr: 'A repo (repurchase agreement) is a short-term loan where one party sells a security and agrees to buy it back later at a slightly higher price — collateralized lending.',
    definition: [
      'A repo is a collateralized short-term loan, usually overnight. Party A "sells" a security (often a government bond) to party B for cash today, and simultaneously agrees to buy it back tomorrow at a higher price — the difference is the interest, the "repo rate." Economically it is a loan: the bond is collateral, the cash is the loan, the repurchase premium is the interest. Repos are how banks, funds, and dealers fund themselves day to day; the repo market is where trillions move nightly and where the true marginal cost of short-term money is set.',
      'Because repos are collateralized by safe securities and self-liquidating in a day, they are normally the safest, most boring corner of finance. But they are also the system\'s plumbing: when repo freezes, institutions that fund themselves overnight cannot roll their borrowing and must sell assets into a falling market — a classic crisis amplifier. The "repo crisis" of September 2019 (rates spiked to 10%) and the 2008 freeze both showed that even the safest collateralized market can seize when everyone wants cash at once.',
    ],
    keyPoints: [
      'Sell a security today, agree to buy it back tomorrow at a higher price = a collateralized overnight loan.',
      'The repo rate is the short-term cost of money, collateralized by safe bonds.',
      'The system\'s plumbing: trillions move nightly to fund banks, funds, and dealers.',
      'Normally ultra-safe; can seize in a panic when everyone wants cash, not bonds.',
    ],
    formula: {
      expression: 'Repo interest = Collateral value × Repo rate × (Days ÷ 360)',
      legend: 'Collateral value = bond pledged · Repo rate = annualized overnight rate · Days = term of the repo',
      note: 'A "haircut" reduces the cash lent vs. collateral value, leaving a buffer if the bond drops.',
    },
    example: {
      scenario: 'A dealer bank needs €100M overnight. It pledges €102M of government bonds (a 2% haircut) and agrees a 3% repo rate. What is the cost?',
      steps: [
        'Cash received = €100M (98% of €102M collateral, the haircut protecting the lender).',
        'Interest = 100M × 3% × (1/360) ≈ €8,333 for one night.',
        'Tomorrow it pays back €100,008,333 and gets its bonds returned.',
        'It can roll the repo nightly — funding its inventory of bonds cheaply and short-term.',
      ],
      result: 'For €8,333 the dealer funded €100M overnight against safe collateral. Repos let institutions finance huge balance sheets with tiny overnight costs — until the market freezes.',
    },
    deepDive: [
      'Repos are how leverage is built at the institutional level. A hedge fund buys a bond, repos it for cash, buys another bond, repos that — each turn adds leverage funded by the overnight market. As long as the repo rolls, the position is cheaply financed; the moment it stops rolling (counterparties won\'t lend, or demand a bigger haircut), the fund must sell the bond into a market where everyone else is also selling. This is the leverage-and-funding spiral at the heart of 1998 (LTCM), 2008 (Lehman), and 2020 (COVID bond fund stress) — safe collateral, unsafe leverage, same physics.',
      'The central bank is itself a giant repo participant. Through its repo facility it lends cash against collateral to keep the overnight rate at target, making the repo market the literal transmission channel of monetary policy into the financial system. When the Fed or ECB does a repo operation, it is pumping or draining reserves at the shortest end — the same plumbing the private market uses, just with the central bank as the backstop counterparty. Understanding repo is understanding where policy meets the market: every interest-rate decision becomes a real overnight cost in this one market before it reaches anyone\'s mortgage.',
    ],
    glossary: [
      { term: 'Repo rate', def: 'The interest rate on a repurchase agreement — the collateralized overnight cost of money.' },
      { term: 'Haircut', def: 'The discount to collateral value the lender requires as a buffer against price moves.' },
      { term: 'Reverse repo', def: 'The lender\'s side — handing out cash to take in collateral (the mirror of a repo).' },
    ],
    related: ['bond', 'central-bank', 'clearing-house', 'leverage'],
  },

  /* ---------------- MARKETS (cont.) ---------------- */
  {
    id: 'valuation',
    title: 'Valuation',
    category: 'markets',
    icon: '🏷️',
    color: ['#8b5cf6', '#0ea5e9'],
    illustration: 'scale',
    hook: 'Putting a number on "what is this worth?" — part math, part judgment, and the question behind every buy or sell.',
    tldr: 'Valuation is estimating what an asset or company is worth, by discounting its future cash flows or comparing it to similar assets.',
    definition: [
      'Valuation is the art of putting a price on "intrinsic worth" rather than just quoting the market price. The cleanest method is discounted cash flow (DCF): estimate every future cash flow an asset will produce, discount them back to today at a rate reflecting their risk, and sum them — that sum is what the asset is "worth" today. If that intrinsic value is above the market price, the asset is cheap; if below, it is dear. The market price is an opinion; the valuation is your own independent estimate to trade against it.',
      'In practice, valuation blends three approaches. Intrinsic (DCF) discounts future cash flows. Relative (multiples) compares to peers — price/earnings, EV/EBITDA, price/book — the question "is this company cheaper or dearer than similar ones?" Asset-based sums up what the parts would sell for. None is "right"; each has a weakness (DCF is exquisitely sensitive to the discount rate and growth assumptions; multiples assume the peers are fairly valued; asset-based ignores the going concern). Serious valuation triangulates all three and stays humble about the answer.',
    ],
    keyPoints: [
      'Intrinsic value = present value of all future cash flows, discounted for risk and time.',
      'DCF is precise-looking but dominated by the discount rate and growth assumptions.',
      'Multiples (P/E, EV/EBITDA) compare to peers — fast but assumes peers are fairly priced.',
      'Market price is an opinion; valuation is your independent check to trade against it.',
    ],
    formula: {
      expression: 'Value = Σ [ CF_t ÷ (1 + r)^t ]  (DCF)',
      legend: 'CF_t = cash flow in year t · r = discount rate (risk-adjusted) · sum over the asset\'s life',
      note: 'A perpetual version: Value = CF_next ÷ (r − g), where g is the long-run growth rate.',
    },
    example: {
      scenario: 'A company will generate €10M/yr growing 3%, forever. A buyer demands a 9% return. What is it worth?',
      steps: [
        'Use the perpetual formula: Value = CF_next ÷ (r − g) = 10 × 1.03 ÷ (0.09 − 0.03).',
        'Numerator = €10.3M (next year\'s cash flow grown 3%).',
        'Denominator = 6% (the spread between required return and growth).',
        'Value = 10.3 ÷ 0.06 ≈ €172M. If the market cap is €130M, the stock looks cheap; if €250M, dear.',
      ],
      result: 'Small assumption changes swing the value hugely: at g = 4% (1% more growth) value jumps to €206M; at r = 10% it falls to €147M. Valuation is a range, not a number.',
    },
    deepDive: [
      'The DCF\'s reputation for false precision is well-earned. Discount a distant cash flow at 8% and it matters; discount at 12% and it nearly vanishes — and the "right" discount rate is itself a judgment about risk, not a measured fact. Growth is worse: a DCF that assumes 3% perpetual growth and one that assumes 5% produce wildly different values, and nobody can tell the future growth rate of a company a decade out. This is why valuation is always a range built from assumptions, and why the honest output is "this is cheap if you believe X, dear if you believe Y" rather than "this is worth exactly €172M."',
      'The deeper value of valuation is discipline, not precision. Forcing yourself to write down the cash flows, the growth, and the discount rate exposes what you\'re really betting on — usually a small number of heroic assumptions hidden in a spreadsheet. The investor who "does the DCF" and finds the whole value rides on a 5-year growth rate they invented has learned something more useful than a number: they\'ve learned which uncertainty actually matters, and that the market price may be the part they can trust most. Valuation is less a calculator than a humility machine — it shows you what you don\'t know, which is the most valuable thing to know.',
    ],
    glossary: [
      { term: 'DCF', def: 'Discounted Cash Flow — valuing an asset as the present value of its future cash flows.' },
      { term: 'Multiple (P/E, EV/EBITDA)', def: 'Relative valuation ratios comparing a company to peers or its own history.' },
      { term: 'Margin of safety', def: 'Buying well below intrinsic value, so being wrong about assumptions doesn\'t lose you money.' },
    ],
    related: ['market-cap', 'leverage', 'working-capital'],
  },
  {
    id: 'order-book',
    title: 'Order Book',
    category: 'markets',
    icon: '📒',
    color: ['#6366f1', '#0ea5e9'],
    illustration: 'bars',
    hook: 'The live list of who wants to buy, who wants to sell, and at what price — the market\'s nervous system laid bare.',
    tldr: 'An order book is the real-time list of all outstanding buy and sell orders for an asset, organized by price, that prices emerge from.',
    definition: [
      'The order book is the queue of intent. On one side sit bids: orders to buy, each with a quantity at a price. On the other sit asks (offers): orders to sell, each with a quantity at a price. The best bid is the highest price anyone will pay; the best ask is the lowest anyone will accept. The gap between them is the spread, and a trade happens only when someone crosses it — a buyer lifts the ask, or a seller hits the bid. Until then, the orders just sit, waiting, and the order book shows exactly what supply and demand look like at every price.',
      'The book reveals liquidity and conviction. A "deep" book has large quantities queued at many prices, so a big order can be absorbed with little price movement; a "thin" book has little queued, so a modest order moves the price sharply. Limit orders (priced, waiting) provide liquidity and are said to "make" the market; market orders (execute now at whatever price) consume liquidity and "take" it. Watching the book lets you see where the real support and resistance are — not at magical round numbers, but where large orders are actually parked.',
    ],
    keyPoints: [
      'Bids (buy orders) on one side, asks (sell orders) on the other, each by price.',
      'Spread = best ask − best bid; a trade happens when someone crosses it.',
      'Depth at each price shows how much volume can be traded without moving the price.',
      'Limit orders make liquidity; market orders take it.',
    ],
    formula: {
      expression: 'Market impact ≈ Trade size ÷ Available depth',
      legend: 'Trade size = shares in your order · Available depth = shares queued at/near the best price',
      note: 'A big order eats through price levels, so its average fill price is worse than the best quote — the cost of size.',
    },
    example: {
      scenario: 'The book shows best bid €99.90 (500 shares) and best ask €100.05 (300 shares). You place a market buy for 1,000 shares. What happens?',
      steps: [
        'You take the 300 shares at €100.05 first (filling the best ask).',
        'Remaining 700 shares eat the next ask levels: 200 at €100.10, 500 at €100.20.',
        'Average fill ≈ (300×100.05 + 200×100.10 + 500×100.20) ÷ 1000 = €100.135.',
        'You moved the price against yourself by ~€0.085/share — your own market impact.',
      ],
      result: 'A "€100.05" quote was only good for 300 shares. Your 1,000-share order paid €100.135 on average — the slippage from consuming more depth than existed.',
    },
    deepDive: [
      'The order book is where price discovery actually lives — not in a magic "true value" but in the mechanical meeting of queued orders. When news hits, orders are pulled and replaced in milliseconds, the spread widens, and the new equilibrium price is found by whoever is brave (or automated) enough to post first. In liquid markets this is invisible and continuous; in stressed markets you can watch the book thin out and the spread blow wide as humans and algos alike withdraw, leaving a fragile, jumpy market — the visible signature of evaporating liquidity.',
      'Most modern trading is "maker-taker" incentivized: exchanges pay rebates to those who post limit orders (makers) and charge fees to those who take them (takers), because makers provide the liquidity everyone depends on. This shapes behavior: institutions slice large orders into many small limit orders to earn rebates and avoid impact, while retail market orders effectively subsidize the makers. The order book is therefore not a neutral mirror of supply and demand — it is a structured market whose rules (fees, rebates, tick size) shape who trades how, and thus what prices you see.',
    ],
    glossary: [
      { term: 'Limit order', def: 'An order to trade only at a specified price or better — it sits in the book.' },
      { term: 'Market order', def: 'An order to execute immediately at the best available price — it crosses the spread.' },
      { term: 'Slippage', def: 'The gap between the quoted price and the price you actually get, due to market impact.' },
    ],
    related: ['liquidity', 'market-maker', 'market-cap'],
  },
  {
    id: 'dark-pool',
    title: 'Dark Pools',
    category: 'markets',
    icon: '🌑',
    color: ['#1e293b', '#6366f1'],
    illustration: 'curve',
    hook: 'Private trading venues where big orders hide from the public book — so they don\'t tip off the market before they\'re done.',
    tldr: 'A dark pool is a private trading venue that doesn\'t display orders publicly, letting institutions trade large blocks without moving the visible price.',
    definition: [
      'A dark pool is an alternative trading system that matches orders without publishing them to the public order book. The "lit" exchanges show every bid and ask; dark pools show nothing until a trade is done, then report it after the fact. The purpose is to let an institution trade a large block of shares without advertising its intent — because a huge visible buy order would lift the ask, raise the price against the buyer, and let others front-run it. By trading in the dark, the institution hopes to fill the order at the midpoint of the public spread, with no price impact and no tip-off.',
      'Dark pools now handle a meaningful share of equity volume. They are "dark" because prices aren\'t displayed — the match usually happens at the midpoint of the lit market\'s best bid and ask, so both sides get half the spread. The catch is that you can\'t see liquidity you might interact with, and the pool can be exploited by faster participants who detect large resting orders and trade against them advantageously. Regulators police dark pools for exactly these "information leakage" and front-running problems.',
    ],
    keyPoints: [
      'Private venues that don\'t display orders — trades reported only after execution.',
      'Let institutions move big blocks without tipping off or moving the public market.',
      'Typically execute at the midpoint of the lit market\'s spread.',
      'Risk: information leakage and being picked off by faster participants.',
    ],
    formula: {
      expression: 'Dark fill price ≈ (Best bid + Best ask) ÷ 2',
      legend: 'Best bid/ask = the lit market\'s top-of-book prices at execution time',
      note: 'Both sides effectively split the spread they\'d pay on a lit exchange — the dark pool\'s main appeal.',
    },
    example: {
      scenario: 'A pension fund wants to buy 200,000 shares without pushing the price up. Lit book shows bid €99.95 / ask €100.05 (spread €0.10). It routes to a dark pool.',
      steps: [
        'A visible lit market buy of 200k would eat through ask levels and push price up several cents.',
        'In the dark pool, if a matching seller is found, both trade at the midpoint = €100.00.',
        'Buyer pays €100.00 (vs €100.05 ask); seller gets €100.00 (vs €99.95 bid) — both save €0.05.',
        'No public order was displayed, so no one front-ran the fund\'s intent.',
      ],
      result: 'Both sides saved €0.05/share (€10,000 on 200k shares) and the public price never moved. The hidden trade avoided the very market impact the fund feared.',
    },
    deepDive: [
      'The name "dark pool" sounds sinister, but the motivation is benign and even pro-investor: large institutional orders are systematically picked off in lit markets because their intent is visible, so a venue that hides intent until execution protects them from that leakage. The tension is that "dark" also hides activity from the public, fragmenting the market and reducing the informativeness of lit prices. Regulators balance this with "trade-at" rules forcing orders to lit markets when lit prices are better, and by requiring dark trade reporting so the market learns what happened, if not what is about to.',
      'The real complexity is fragmentation: an institution\'s order may be sliced across a dozen dark pools and several lit exchanges simultaneously by a smart-order router hunting the best fill. Each venue has different rules, speeds, and counterparties, and some dark pools were caught favoring certain clients or leaking information to proprietary traders (the major banks paid large fines for such abuses around 2014). The lesson is that venue choice is itself a source of edge and risk: where you trade affects the price you get as surely as what you trade, which is why execution quality — not just commission — is the real cost the sophisticated investor manages.',
    ],
    glossary: [
      { term: 'Lit vs dark', def: 'Lit venues display orders publicly; dark venues match without displaying.' },
      { term: 'Block trade', def: 'A large privately-negotiated trade, often done in a dark pool to avoid impact.' },
      { term: 'Midpoint pricing', def: 'Executing at the average of the lit market\'s best bid and ask — the standard dark fill.' },
    ],
    related: ['order-book', 'liquidity', 'market-maker'],
  },

  /* ---------------- INVESTING (cont.) ---------------- */
  {
    id: 'portfolio-theory',
    title: 'Modern Portfolio Theory',
    category: 'investing',
    icon: '🎯',
    color: ['#6366f1', '#16a34a'],
    illustration: 'curve',
    hook: 'Don\'t pick the best asset — build the best mix. The insight that turned investing from stock-picking into portfolio engineering.',
    tldr: 'Modern Portfolio Theory (MPT) shows how to combine assets into a portfolio that maximizes return for a given level of risk, using diversification and correlation.',
    definition: [
      'Harry Markowitz\'s 1952 insight was that an asset\'s risk and return cannot be judged in isolation — only its contribution to the whole portfolio matters. An asset that swings wildly on its own can actually reduce a portfolio\'s risk if it tends to rise when the rest falls (low or negative correlation). MPT formalized this: for any target risk, there is a "best" mix of assets that no other combination can beat, and the set of all such best mixes forms the "efficient frontier."',
      'The practical upshot is that the goal is not the best individual asset but the best combination. Adding a risky but uncorrelated asset can improve a portfolio — the magic of diversification is a math result, not folk wisdom. MPT launched the entire industry of asset allocation, index funds, and risk-budgeting; its core claim — that risk is portfolio-level and diversification is the closest thing to a free lunch — has held up better than its precise math.',
    ],
    keyPoints: [
      'Judge an asset by its effect on the whole portfolio, not on its own.',
      'Low correlation between assets is what makes diversification actually reduce risk.',
      'The efficient frontier = the set of portfolios with max return per level of risk.',
      'The "risk-free asset + tangent portfolio" gives the optimal mix for any investor (the Capital Market Line).',
    ],
    formula: {
      expression: 'Portfolio σ = √(Σ wᵢ²σᵢ² + ΣΣ wᵢwⱼσᵢσⱼρᵢⱼ)',
      legend: 'w = weights · σ = volatility · ρ = correlation between assets i and j',
      note: 'The cross terms (with ρ) are where diversification lives — low correlation shrinks them, cutting portfolio risk.',
    },
    example: {
      scenario: 'Two assets, each 10% return and 20% volatility. Compare a 50/50 mix at ρ = 1.0 (identical moves) vs ρ = 0 (independent).',
      steps: [
        'ρ = 1.0: portfolio volatility = 20% (the mix is no safer than either alone).',
        'ρ = 0: portfolio volatility = √(0.5²·20² + 0.5²·20²) ≈ 14.1%',
        'Same 10% expected return, risk cut ~30% just by pairing uncorrelated assets.',
        'At ρ = −1 you could hit zero risk — the theoretical limit of diversification.',
      ],
      result: 'Same assets, same expected return, 30% less risk. The free lunch is real, and it comes entirely from correlation, not from picking better stocks.',
    },
    deepDive: [
      'MPT\'s elegance hides uncomfortable assumptions. It equates risk with volatility (standard deviation), assuming returns are roughly bell-shaped — but real returns have fat tails, so a "low-volatility" portfolio can still blow up. It also assumes correlations are stable, when they spike to 1 in exactly the crashes where diversification is needed most. These flaws are why the theory is taught as a foundation and used with humility, not as a blueprint to follow literally.',
      'The deeper legacy is the shift in mindset: from "which stock is best?" to "which mix is best?" Once you think in portfolios, you stop chasing the one winner and start managing the trade-off between risk and return across the whole. That single mental move — diversify by design, not by accident — is MPT\'s real gift, and it survives even where its precise optimization fails.',
    ],
    glossary: [
      { term: 'Efficient frontier', def: 'The curve of optimal portfolios — highest return for each risk level.' },
      { term: 'Correlation', def: 'How two assets move together (−1 to +1) — the engine of diversification.' },
      { term: 'Capital Market Line', def: 'The risk/return line from the risk-free asset through the tangent (market) portfolio.' },
    ],
    related: ['diversification', 'sharpe-ratio', 'capm'],
  },
  {
    id: 'sharpe-ratio',
    title: 'Sharpe Ratio',
    category: 'investing',
    icon: '📐',
    color: ['#0ea5e9', '#8b5cf6'],
    illustration: 'bars',
    hook: 'Return per unit of risk — the one number that lets you fairly compare a hedge fund to a bond fund.',
    tldr: 'The Sharpe ratio measures risk-adjusted return: excess return (above the risk-free rate) divided by volatility. Higher is better.',
    definition: [
      'A 15% return is not automatically better than a 10% return — the 15% might come with triple the volatility and a real chance of ruin. The Sharpe ratio fixes this by dividing the "extra" return an investment earns over a risk-free asset by how much its value swings. The result is return per unit of risk: a high Sharpe means you are being well paid for the uncertainty you accept; a low Sharpe means you are taking a bumpy ride for thin compensation.',
      'It is the standard yardstick for comparing investments, funds, and strategies on a level field. A passive index fund might run a Sharpe of ~0.5; a well-run diversified portfolio ~0.7; the rare consistently profitable strategy above 1.0 is considered excellent. The ratio turns "how much did you make?" into "how much did you make per unit of sleep you lost?" — the question that actually matters.',
    ],
    keyPoints: [
      'Sharpe = (return − risk-free rate) ÷ volatility — return per unit of risk.',
      'Lets you compare a volatile strategy to a calm one fairly.',
      'Above ~1.0 is good; above ~2.0 is exceptional (or too good to be true).',
      'Penalizes upside volatility too, which some argue is a flaw (see Sortino).',
    ],
    formula: {
      expression: 'Sharpe = (R − Rf) ÷ σ',
      legend: 'R = investment return · Rf = risk-free rate · σ = standard deviation of returns',
      note: 'The Sortino ratio uses only downside volatility — it doesn\'t penalize "good" swings, a fairer gauge for skewed returns.',
    },
    example: {
      scenario: 'Fund A returns 12% with 18% volatility. Fund B returns 9% with 8% volatility. Risk-free rate is 3%. Which is better risk-adjusted?',
      steps: [
        'A: (12% − 3%) ÷ 18% = 0.50',
        'B: (9% − 3%) ÷ 8% = 0.75',
        'B has the lower raw return but the higher Sharpe — more return per unit of risk.',
        'Many investors would prefer B: smoother compounding, less chance of a ruinous drawdown.',
      ],
      result: 'The headline-return leader lost on the measure that counts. B earns its keep more efficiently — the point of risk-adjusting is to stop rewarding people for taking more risk.',
    },
    deepDive: [
      'The Sharpe ratio\'s biggest weakness is its blindness to skew and tail risk. A strategy that sells options earns steady small premiums with rare catastrophic losses can show a beautiful Sharpe right up until it blows up — the volatility looks low because the disaster hasn\'t happened yet. Long-Term Capital Management had an enviable Sharpe before it lost billions in weeks. A high Sharpe from a short-options book is a warning, not a pedigree.',
      'A subtler issue: Sharpe is backward-looking and assumes the future resembles the sample. A strategy with a 2.0 Sharpe over three calm years may carry a 0.3 Sharpe over the next crisis. Use it as one input among several — alongside maximum drawdown, tail measures, and stress tests — never as the single number that decides an allocation. The ratio is a lens, not a verdict; it clarifies the risk/return trade but cannot predict whether the trade survives regime change.',
    ],
    glossary: [
      { term: 'Risk-free rate', def: 'The return on the safest asset — subtracted to get the "excess" return you\'re really being paid for.' },
      { term: 'Sortino ratio', def: 'A variant of Sharpe using only downside volatility — doesn\'t punish good swings.' },
      { term: 'Volatility (σ)', def: 'Standard deviation of returns — the denominator that converts raw return into return-per-risk.' },
    ],
    related: ['portfolio-theory', 'beta', 'risk-vs-return'],
  },
  {
    id: 'beta',
    title: 'Beta',
    category: 'investing',
    icon: '🌡️',
    color: ['#f59e0b', '#ec4899'],
    illustration: 'curve',
    hook: 'How much an asset moves with the market — the Greek letter that prices how much market risk you\'re really buying.',
    tldr: 'Beta measures an asset\'s sensitivity to market moves: beta 1 moves with the market, 2 amplifies it, 0.5 dampens it.',
    definition: [
      'Beta tells you how much an asset tends to swing when the market swings. A beta of 1 means it moves in lockstep with the index; 2 means it moves twice as much (up and down); 0.5 means half. Beta is measured from history — you regress the asset\'s returns against the market\'s and read the slope — so it describes typical co-movement, not a guarantee. The market itself has a beta of 1 by definition.',
      'Beta is the workhorse of risk decomposition. It splits total risk into market risk (beta, which you cannot diversify away and are paid a premium for) and idiosyncratic risk (which diversification removes and pays nothing for). This is why a high-beta stock should offer higher expected returns — you\'re bearing market risk that can\'t be diversified, so you demand compensation. Beta is also the input to CAPM, the simplest model of how risk should be priced.',
    ],
    keyPoints: [
      'Beta 1 = market-like; >1 = more volatile than market; <1 = calmer; negative = moves opposite.',
      'Measured from historical co-movement with the market (regression slope).',
      'Separates market risk (paid) from diversifiable risk (not paid).',
      'The key input to CAPM: expected return = risk-free + beta × market premium.',
    ],
    formula: {
      expression: 'Beta = Cov(asset, market) ÷ Var(market)',
      legend: 'Cov = how the asset and market move together · Var = market\'s own volatility',
      note: 'Equivalently the slope of the regression of asset returns on market returns.',
    },
    example: {
      scenario: 'A stock has a beta of 1.5. The market rises 10%. The risk-free rate is 3% and the market premium is 5%. Expected return?',
      steps: [
        'CAPM: expected return = 3% + 1.5 × 5% = 10.5%.',
        'If the market rises 10%, the stock should rise ~1.5 × 10% = 15% (in a typical move).',
        'In a −10% market drop, expect ~−15% — high beta amplifies both directions.',
        'Investors demand the higher 10.5% expected return because the beta of 1.5 means bigger swings.',
      ],
      result: 'High beta means high sensitivity and a higher required return. The stock isn\'t "better" for its 15% upside — it carries 1.5× the market\'s pain in the downside too.',
    },
    deepDive: [
      'Beta\'s limitation is that it\'s an average of past co-movement, and averages lie in tails. A bank stock may show a modest beta of 1.1 in calm years but spike to 2.5+ in a crisis as correlations collapse toward 1 — exactly when you can\'t count on the old number. "Tail beta" — how an asset behaves in the worst market days — is the version that actually matters for risk, and it is systematically higher than the headline beta for financials and other leveraged sectors.',
      'A deeper philosophical point: beta measures exposure to market risk, not the quality of a business. A great company can have a low beta (and thus a low CAPM-required return) while a mediocre one has a high beta. Investors who confuse beta with quality overpay for calm stocks and underpay for volatile ones. Beta is a risk weight, not a value judgment — it tells you how much market you\'re buying, not whether the underlying business is any good. The two questions are independent, and conflating them is a classic error.',
    ],
    glossary: [
      { term: 'Alpha', def: 'Return above what beta predicts — the manager\'s skill, or luck, above market risk.' },
      { term: 'Market risk premium', def: 'The extra return the market offers over the risk-free rate.' },
      { term: 'Negative beta', def: 'An asset that tends to move opposite the market — rare and prized (gold, sometimes).' },
    ],
    related: ['capm', 'risk-vs-return', 'diversification'],
  },
  {
    id: 'capm',
    title: 'CAPM',
    category: 'investing',
    icon: '🧮',
    color: ['#8b5cf6', '#0ea5e9'],
    illustration: 'scale',
    hook: 'The simplest theory of how risk should be priced — one line linking expected return to market risk.',
    tldr: 'The Capital Asset Pricing Model says an asset\'s expected return equals the risk-free rate plus beta times the market risk premium.',
    definition: [
      'CAPM is the bridge between Markowitz\'s portfolio theory and a practical recipe for required returns. Its claim: only market risk (beta) earns a premium, because the rest can be diversified away for free. So an asset\'s expected return should be the risk-free rate plus a premium proportional to its beta. A stock twice as sensitive to the market as the average should offer twice the market\'s excess return — no more, no less. The formula is one line; the assumptions behind it are an entire worldview.',
      'In corporate finance CAPM is the default way to estimate a company\'s cost of equity, which feeds the weighted-average cost of capital (WACC) used to value projects. In investing it sets the benchmark an active manager must beat: the "fair" return for a given beta. If you beat CAPM, you have alpha; if you don\'t, you were just compensated for risk you took, not skill you deployed. The model is taught everywhere precisely because it is simple enough to use and captures a true core idea — risk that can\'t be diversified is the only risk that pays.',
    ],
    keyPoints: [
      'Expected return = risk-free rate + beta × market risk premium.',
      'Only systematic (market) risk earns a premium; diversifiable risk does not.',
      'The standard way to estimate a company\'s cost of equity for valuation.',
      'Built on strong assumptions: rational investors, identical views, one-period, no frictions.',
    ],
    formula: {
      expression: 'E(R) = Rf + β × (E(Rm) − Rf)',
      legend: 'Rf = risk-free rate · β = asset beta · E(Rm) = expected market return · (E(Rm)−Rf) = market premium',
      note: 'A beta of 1.2 with Rf=3% and premium=5% → E(R)=3%+1.2×5%=9%.',
    },
    example: {
      scenario: 'A company has beta 1.2. Risk-free rate 3%, expected market return 8%. What return should investors demand for the equity?',
      steps: [
        'Market premium = 8% − 3% = 5%.',
        'Required equity return = 3% + 1.2 × 5% = 9%.',
        'This 9% is the cost of equity — used to discount the company\'s expected cash flows.',
        'A project returning 11% clears the 9% hurdle and adds value; one returning 7% destroys it.',
      ],
      result: 'CAPM turns a risk measure (beta) into a required return (9%). Every valuation and project decision flows from that one number — its power and its danger.',
    },
    deepDive: [
      'CAPM\'s empirical record is poor. Real expected returns are not cleanly proportional to beta — low-beta stocks have often outperformed the model predicts and high-beta stocks underperformed (the "low-volatility anomaly"). Other factors (size, value, momentum) explain returns better than beta alone, which is why academics moved to multi-factor models like Fama-French. The model survives because it is a clear, defensible default, not because it is correct.',
      'The honest way to use CAPM is as a starting estimate, not a truth. Vary the inputs — the risk-free rate, the market premium (which is itself hotly debated, 4%? 6%?), the beta (which is unstable) — and see how much the answer moves. If a project\'s value flips sign under reasonable input changes, the decision is being driven by assumptions, not economics. CAPM is most useful as a discipline: it forces you to make your risk assumptions explicit and shows you which ones matter. That is its real contribution, more than the precise number it spits out.',
    ],
    glossary: [
      { term: 'Cost of equity', def: 'The return shareholders require — CAPM\'s output, used as a discount rate.' },
      { term: 'WACC', def: 'Weighted Average Cost of Capital — blending the cost of equity and after-tax cost of debt.' },
      { term: 'Market risk premium', def: 'E(Rm) − Rf — the extra return the market offers over risk-free.' },
    ],
    related: ['beta', 'portfolio-theory', 'risk-vs-return'],
  },
  {
    id: 'efficient-market',
    title: 'Efficient Market Hypothesis',
    category: 'investing',
    icon: '🌀',
    color: ['#0ea5e9', '#22c55e'],
    illustration: 'cycle',
    hook: 'You can\'t beat the market because the price already knows what you know — the controversial claim that explains why index funds win.',
    tldr: 'The Efficient Market Hypothesis (EMH) holds that prices already reflect all available information, so you cannot consistently earn returns above the risk-adjusted average.',
    definition: [
      'EMH says prices are "right" in a specific sense: they already incorporate everything known, so no analysis of public information can systematically beat the market. New news is priced in fast, and the residual moves are unpredictable — a random walk around fair value. Three forms exist: weak (past prices won\'t help), semi-strong (public info won\'t help), and strong (even private info is priced in, an extreme few defend). The semi-strong form is the practical claim: studying fundamentals, reading reports, and timing the market won\'t reliably outperform a cheap index fund.',
      'The evidence is broadly on EMH\'s side. After fees, the great majority of active managers fail to beat their benchmark over long periods, and the few who do are hard to identify in advance and rarely repeat. This is why trillions have migrated to index funds — if prices are efficient, the rational move is to own the whole market at minimal cost rather than pay for stock-picking skill that probably isn\'t there. EMH is not a claim that prices are always "correct," only that errors are not reliably exploitable.',
    ],
    keyPoints: [
      'Prices already reflect available info — you cannot systematically beat the market.',
      'Three forms: weak (past prices), semi-strong (public info), strong (all info).',
      'Explains why low-cost index funds beat most active managers after fees.',
      '"Right on average" — prices can be wrong, but not predictably enough to exploit.',
    ],
    formula: {
      expression: 'Price today = best estimate of fair value (given all info)',
      legend: 'Fair value = discounted expected future cash flows, given current information',
      note: 'Future price changes are then unpredictable around this estimate — a "random walk."',
    },
    example: {
      scenario: 'A company reports earnings that beat forecasts. The stock jumps 8% in the first minute. What does EMH say about your chance to profit?',
      steps: [
        'The good news is incorporated almost instantly into the price.',
        'By the time you read the headline and buy, the 8% is already in the price.',
        'Any further move is unpredictable — you have no edge, only risk.',
        'Buying "because earnings were great" after the move is paying fair value, not a bargain.',
      ],
      result: 'Public information is not an edge — the market already acted on it. The only reliable edge is private information (usually illegal to trade on) or a structural advantage (speed, scale) most lack.',
    },
    deepDive: [
      'EMH\'s critics have real ammunition. Bubbles, crashes, and obvious mispricings (the 2000 tech bubble, meme stocks) show prices can be wildly wrong — the hypothesis says only that they aren\'t reliably exploitable, which is cold comfort when you\'re watching them. Behavioral finance documents systematic biases that can push prices away from fair value for long stretches. The synthesis most professionals hold: markets are efficient enough that beating them after costs is very hard, but not so efficient that prices are always sane — there are pockets of inefficiency, mostly in less-watched corners, and exploiting them is far harder than spotting them.',
      'The practical lesson of EMH is humility about your edge. The question is never "is the market wrong?" (it often is) but "do I have a genuine, durable advantage in exploiting this particular error, after costs, after taxes, against competitors doing the same thing?" For almost everyone the honest answer is no — which is why the rational default is broad, low-cost index funds, and why the few who beat the market are the exception that proves how hard the rule is. EMH is best read not as a statement about prices but as a warning about overconfidence: the market is harder to beat than it looks.',
    ],
    glossary: [
      { term: 'Random walk', def: 'The idea that future price changes are unpredictable — no pattern to exploit.' },
      { term: 'Weak / semi-strong / strong', def: 'The three forms of EMH, by how much information is already priced in.' },
      { term: 'Anomaly', def: 'A pattern (size, value, momentum) that seems to beat the market — a challenge to strict EMH.' },
    ],
    related: ['etf', 'behavioral-finance', 'asset-manager'],
  },

  /* ---------------- MARKETS (cont.) ---------------- */
  {
    id: 'pe-ratio',
    title: 'P/E Ratio',
    category: 'markets',
    icon: '🏷️',
    color: ['#6366f1', '#f59e0b'],
    illustration: 'bars',
    hook: 'How many years of profit you\'re paying per share — the first number everyone checks, and the one most misread.',
    tldr: 'The P/E ratio is share price divided by earnings per share — how much you pay per €1 of yearly profit. A quick "cheap or dear?" gauge.',
    definition: [
      'The price-to-earnings ratio tells you how many euros you pay for one euro of a company\'s yearly earnings. A stock at €100 earning €5/share has a P/E of 20 — you pay 20 years of current profit. A low P/E suggests a stock is cheap (or that the market expects trouble); a high P/E suggests it\'s dear (or that the market expects fast growth). The number alone is ambiguous: the same P/E can be a bargain in a stable, growing company or a trap in one whose earnings are about to collapse.',
      'Two versions matter. The trailing P/E uses the past year\'s earnings (fact, but backward-looking); the forward P/E uses forecast earnings (forward-looking, but a guess). Forward P/Es are usually lower when growth is expected, which is why they look attractive — they bake in optimism that may not arrive. Comparing a company\'s P/E to its own history, to peers, and to the market, while checking whether the earnings are real and repeatable, is how the ratio becomes useful rather than misleading.',
    ],
    keyPoints: [
      'P/E = price ÷ earnings per share — years of profit you pay per share.',
      'Low can mean cheap or a warning; high can mean expensive or expected growth.',
      'Trailing uses past earnings (fact); forward uses forecasts (optimism).',
      'Compare to history, peers, and the market — never use the number in isolation.',
    ],
    formula: {
      expression: 'P/E = Share price ÷ Earnings per share',
      legend: 'Share price = current market price · EPS = net income ÷ shares',
      note: 'Earnings yield = 1 ÷ P/E — the profit per €1 of price, comparable to a bond yield.',
    },
    example: {
      scenario: 'Stock A: €100, EPS €5 → P/E 20. Stock B: €50, EPS €1 → P/E 50. Which is cheaper?',
      steps: [
        'A costs 20 years of earnings; B costs 50 years — A looks cheaper on the ratio.',
        'But if A\'s earnings are flat and B\'s are growing 30%/year, B may be the bargain.',
        'Forward P/E: if B\'s EPS grows to €2 next year, its forward P/E falls to 25.',
        'P/E is a starting question, not an answer — earnings quality and growth finish the analysis.',
      ],
      result: 'The cheaper P/E isn\'t always the cheaper stock. A\'s 20 is fair for no growth; B\'s 50 may be cheap for fast growth — the ratio needs a story to interpret it.',
    },
    deepDive: [
      'P/E\'s biggest blind spot is earnings themselves. Reported earnings depend on accounting choices (depreciation, one-time items, revenue recognition) and can be massaged — two identical businesses can report different EPS. "Earnings quality" (how reliably profit converts to cash) matters more than the P/E\'s denominator. A company showing a great P/E on paper profits that don\'t turn into cash is a trap; one with an ugly P/E on depressed, temporary earnings can be a steal. Always ask whether the E is real before trusting the ratio.',
      'A related danger is extrapolating cyclical earnings. At a commodity peak, a miner\'s earnings are sky-high, so its P/E looks cheap — but those earnings will fall with the cycle, and the "cheap" stock is about to get dearer in reality. At a trough, a miner\'s P/E looks expensive on collapsed earnings, yet that is often the best time to buy. P/E works best for stable, non-cyclical businesses; for cyclicals, use normalized earnings averaged across a cycle, or the price-to-book or price-to-sales ratios that don\'t distort at the extremes. The P/E is a fine tool, but only when paired with judgment about what kind of earnings you\'re dividing by.',
    ],
    glossary: [
      { term: 'Trailing vs forward P/E', def: 'Past-year earnings (fact) vs. forecast earnings (a guess) — forward is usually more flattering.' },
      { term: 'Earnings yield', def: '1 ÷ P/E — profit per euro of price, comparable to a bond yield.' },
      { term: 'PEG ratio', def: 'P/E ÷ growth rate — adjusts the multiple for how fast earnings grow.' },
    ],
    related: ['valuation', 'market-cap', 'dividends'],
  },
  {
    id: 'arbitrage',
    title: 'Arbitrage',
    category: 'markets',
    icon: '⚖️',
    color: ['#16a34a', '#0ea5e9'],
    illustration: 'scale',
    hook: 'Buy low and sell high in two markets at once — the riskless profit that shouldn\'t exist, and the force that makes prices agree.',
    tldr: 'Arbitrage is profiting from a price difference for the same (or equivalent) asset in two markets, with little or no risk — the mechanism that keeps prices in line.',
    definition: [
      'Pure arbitrage is the rare riskless profit: the same asset trades at two prices, so you buy the cheap one and sell the dear one simultaneously, pocketing the gap. If a stock is €100 in New York and €101 in London, you buy in NY and sell in London for a guaranteed €1, with no view on where the price will go. The trade is self-liquidating and riskless — that is the definition. In practice most "arbitrage" carries some risk (timing, execution, that the two legs aren\'t truly identical), which is why arbitrageurs are paid for bearing it.',
      'Arbitrage is more than a strategy — it is the mechanism that makes markets efficient. When a price gap opens, arbitrageurs rush in to close it, and their buying/selling pushes the prices back together. Without arbitrage, identical assets could trade at wildly different prices; with it, prices stay in line across markets. The existence of arbitrage opportunities is a sign of inefficiency; their rapid disappearance is the sign of a working market. The harder an arb is to execute, the larger and longer-lived the gap can be.',
    ],
    keyPoints: [
      'Buy cheap, sell dear the same asset simultaneously — a riskless profit.',
      'The mechanism that keeps prices aligned across markets.',
      'Pure arbitrage is rare; most real "arbs" carry some risk (execution, basis, timing).',
      'Gaps that persist are too risky, costly, or restricted for arbitrageurs to close.',
    ],
    formula: {
      expression: 'Arb profit = Sell price − Buy price − Costs',
      legend: 'Sell price = dear market · Buy price = cheap market · Costs = fees, spread, financing',
      note: 'Profit only if positive after all costs — many "arbs" vanish once costs are counted.',
    },
    example: {
      scenario: 'A stock trades at €100 in Frankfurt and €100.40 in Paris, with €0.05 of total trading costs. Arbitrageur buys in Frankfurt, sells in Paris.',
      steps: [
        'Buy at €100, simultaneously sell at €100.40 → gross €0.40 per share.',
        'Costs €0.05 → net €0.35 riskless per share.',
        'On 10,000 shares that is €3,500 of profit with no market risk.',
        'As arbitrageurs do this, buying lifts Frankfurt\'s price and selling presses Paris\'s down — the gap closes.',
      ],
      result: 'A riskless €3,500 for being faster and cheaper than the next arbitrageur — and the act of capturing it removes the gap that created it.',
    },
    deepDive: [
      'The interesting arbitrage is never the textbook kind. "Statistical arbitrage" bets that two historically related stocks will revert to a normal spread — profitable on average, but it can blow up when the relationship breaks (Long-Term Capital Management). "Merger arbitrage" buys a target after a takeover is announced, betting the deal closes; it loses if the deal breaks. "Convertible arbitrage" buys a convertible bond and shorts the stock. None is truly riskless; each is paid for bearing a specific risk that most people can\'t or won\'t take. The "riskless" label is aspirational; the reality is a spectrum.',
      'The deepest role of arbitrage is the "law of one price" — the principle that identical assets should trade at one price, enforced by anyone willing to do the trade. When it fails catastrophically (CDOs pricing diverged from their underlying bonds in 2008), the market is broken, not merely inefficient — and the breakdown signals that the arbitrageurs who normally enforce it are themselves constrained (out of capital, out of nerve, or out of liquidity). Watching where arbitrage breaks down is a way to detect stress: persistent, large, "obvious" mispricings are usually not free money but a warning that something is preventing the trade. The market is telling you the risk you can\'t see.',
    ],
    glossary: [
      { term: 'Law of one price', def: 'Identical assets should trade at the same price — enforced by arbitrage.' },
      { term: 'Statistical arbitrage', def: 'Betting that historical relationships revert — risky, not riskless.' },
      { term: 'Merger arbitrage', def: 'Betting an announced takeover closes — loses if the deal breaks.' },
    ],
    related: ['market-maker', 'valuation', 'liquidity'],
  },
  {
    id: 'ipo',
    title: 'IPO',
    category: 'markets',
    icon: '🚀',
    color: ['#6366f1', '#ec4899'],
    illustration: 'growth',
    hook: 'The day a private company sells shares to the public for the first time — the moment it joins the market.',
    tldr: 'An Initial Public Offering is a private company\'s first sale of shares to the public, raising capital and turning the company into a listed, tradable stock.',
    definition: [
      'An IPO is the transition from private to public. The company works with investment banks (underwriters) that price the shares, market them to investors, and guarantee the capital is raised — for a fee of several percent. On listing day the shares begin trading on an exchange, anyone can buy them, and the company gains access to a deep pool of capital and a liquid currency (its shares) it can use to fund growth, acquire companies, or let founders and early investors cash out. The IPO price is set the night before, based on demand gathered during a "roadshow."',
      'IPOs are famously double-edged for buyers. The first-day "pop" (the price jumping above the IPO price) is common because underwriters price slightly low to ensure a successful launch and reward favored clients. But over the medium term, IPOs as a group have historically underperformed the market — the company is selling when it can get the best price, and the fresh capital plus new public scrutiny often coincides with the end of the fastest growth. The lock-up period prevents insiders from selling for ~6 months; when it expires, the stock often wobbles as insiders finally cash out.',
    ],
    keyPoints: [
      'First sale of shares to the public — turning a private firm into a listed stock.',
      'Underwriters price, market, and guarantee the raise, for a fee (~3–7%).',
      'A first-day pop is common (deliberate underpricing); long-term IPO returns are often weak.',
      'Lock-up (~6 months) stops insiders selling early; its expiry can pressure the stock.',
    ],
    formula: {
      expression: 'IPO proceeds = Shares offered × IPO price × (1 − Underwriting fee)',
      legend: 'Shares offered = new + existing shares sold · IPO price = set the night before · Fee = underwriting discount',
      note: 'Primary shares raise cash for the company; secondary shares let existing holders sell and cash out.',
    },
    example: {
      scenario: 'A company offers 10M new shares at €40 in its IPO, with a 5% underwriting fee. What does the company receive, and what happens if the stock closes at €48?',
      steps: [
        'Gross proceeds = 10M × €40 = €400M raised from investors.',
        'Underwriting fee = 5% × €400M = €20M → company nets €380M for growth.',
        'First-day close €48 → a 20% pop; investors who got shares at €40 are up €8/share.',
        'The company doesn\'t get the €8 — that accrues to IPO buyers, not the issuer.',
      ],
      result: 'The company raised €380M for its future; the underwriters earned €20M; the favored buyers got a €8/share "thank you." Everyone except retail chasing the pop tends to win on day one.',
    },
    deepDive: [
      'The IPO is timed by the seller, not the buyer — and that timing is the source of its long-run underperformance. Companies go public when conditions are best: when earnings are strong, sentiment is high, and valuations are rich. Buyers at the IPO are getting the company at the moment its promoters think it is most valuable. Add the costs of going public (fees, disclosure, quarterly pressure to hit targets) and the dilution of share-based compensation, and the average IPO has a high hurdle to clear. The exceptions — the rare companies that keep compounding for decades after listing — are the prize, but they are hard to identify amid the noise of the average flop.',
      'The trend away from IPOs is itself a story. Companies stay private longer, raising huge sums from venture capital and private equity instead of listing, so by the time they IPO they are often large, slower-growing, and closer to their peak. This shifts the risk: the explosive early growth that used to accrue to public-market IPO buyers now accrues to private VC/PE investors, with public buyers getting the mature tail. For retail investors, the lesson is to treat IPOs as speculative opportunities, not core holdings — the company is selling for a reason, and the price reflects the seller\'s best moment, which is rarely the buyer\'s.',
    ],
    glossary: [
      { term: 'Underwriter', def: 'The bank that prices and guarantees an IPO — bears the placement risk for a fee.' },
      { term: 'Lock-up period', def: 'Post-IPO window (~6 months) when insiders cannot sell their shares.' },
      { term: 'Roadshow', def: 'The pre-IPO marketing tour where management pitches investors to gauge demand.' },
    ],
    related: ['market-cap', 'valuation', 'private-equity'],
  },

  /* ---------------- BANKING (cont.) ---------------- */
  {
    id: 'yield-curve',
    title: 'Yield Curve',
    category: 'banking',
    icon: '📈',
    color: ['#0ea5e9', '#22c55e'],
    illustration: 'curve',
    hook: 'The line connecting overnight rates to 30-year bonds — and the recession signal everyone watches.',
    tldr: 'The yield curve plots interest rates across bond maturities. Normally upward-sloping; when it inverts (long below short), recession often follows.',
    definition: [
      'The yield curve is the line of yields on government bonds from the shortest maturity (overnight) to the longest (30 years), drawn at one moment. Usually it slopes upward — longer bonds pay more, because you tie up money longer and take more rate and inflation risk. The shape is information: a steep curve signals expected growth and rate rises; a flat or inverted curve signals expected slowdown and cuts. Because long rates reflect the market\'s expectation of future short rates, an inversion (long below short) means the market expects rates to fall — which usually happens because of a coming recession.',
      'The curve is the most-watched single recession predictor. An inverted US 2-year/10-year curve has preceded every American recession for decades, usually 12–18 months ahead, with only one false signal. It is not a law — it can stay inverted a long time and recessions have other causes — but it distills the bond market\'s collective judgment about the path of the economy into one shape. Central banks watch it because they control the short end; the long end is the market\'s verdict on where they\'re heading.',
    ],
    keyPoints: [
      'Plots yields from overnight to 30-year bonds — normally upward-sloping.',
      'Inversion (long yields below short) has preceded most recessions.',
      'Long end reflects expected future short rates; short end is set by the central bank.',
      'Steep = growth expected; flat/inverted = slowdown expected.',
    ],
    formula: {
      expression: 'Curve spread = Long yield − Short yield  (e.g. 10yr − 2yr)',
      legend: 'Long yield = long-bond rate · Short yield = short-bond rate · positive = normal, negative = inverted',
      note: 'Expectations theory: long rate ≈ average of expected future short rates + term premium.',
    },
    example: {
      scenario: 'The 2-year government bond yields 4.5% and the 10-year yields 4.0%. What is the curve saying?',
      steps: [
        'Spread = 4.0% − 4.5% = −0.5% — an inverted curve.',
        'The market expects short rates to fall — typically because a recession forces the central bank to cut.',
        'Historically this signal precedes a recession within ~12–18 months.',
        'Banks suffer: they borrow short (deposits) and lend long (mortgages), so an inversion squeezes their margin.',
      ],
      result: 'A negative 2s10s spread is the bond market betting on rate cuts ahead — the market\'s clearest warning that growth is about to slow.',
    },
    deepDive: [
      'Why does inversion predict recession? Two channels. First, banks make money by borrowing short and lending long; an inversion inverts their profit, so they lend less, choking credit and slowing the economy. Second, the inversion itself is the market saying it expects cuts — and central banks cut when the economy is weakening. The signal is partly causal (banks tighten) and partly diagnostic (the market reads trouble). Either way, it has earned its reputation, which is why every financial newspaper tracks the 2s10s spread.',
      'The curve has a known false-positive risk and a known timing problem: inversions can persist for many months before any recession, and "this time is different" arguments appear every cycle (QE distorting the long end, for instance). Treating the curve as an oracle leads to selling out too early and missing late-cycle gains. The disciplined use is as one input — a high-conviction recession warning that still needs confirming evidence from credit, employment, and surveys. The curve tells you a storm may be forming; the rest of the data tells you when to take cover.',
    ],
    glossary: [
      { term: 'Inversion', def: 'Long yields falling below short yields — the classic recession signal.' },
      { term: 'Term premium', def: 'Extra yield investors demand for holding long bonds vs. rolling short ones.' },
      { term: '2s10s spread', def: 'The 10-year minus 2-year yield — the most-watched curve measure.' },
    ],
    related: ['bond', 'interest-rate', 'central-bank'],
  },
  {
    id: 'securitization',
    title: 'Securitization',
    category: 'banking',
    icon: '🧩',
    color: ['#475569', '#8b5cf6'],
    illustration: 'pie',
    hook: 'Turning a pile of loans into bonds you can sell — the alchemy that funds mortgages, and the mechanism behind 2008.',
    tldr: 'Securitization bundles many loans (mortgages, auto, credit cards) into securities sold to investors, turning illiquid loans into tradable bonds.',
    definition: [
      'Securitization takes a pool of similar loans — say a thousand mortgages — and packages their cash flows into bonds (Asset-Backed Securities) that investors can buy. The bank that made the loans sells them off, freeing its balance sheet to lend again; the investor gets a bond paying the loans\' interest. It is financial alchemy: illiquid, individual loans become liquid, tradable securities, and the risk of any one borrower defaulting is pooled across thousands. Done soundly, it spreads risk and expands credit; done badly, it spreads poisoned loans and hides the rot.',
      'The deals are sliced into "tranches" by risk: senior tranches paid first (safe, AAA-rated), mezzanine in the middle, equity last (first to absorb losses, highest yield). Credit ratings and the slicing made the senior slices appear safe even when the underlying loans were weak — the core deception of 2008, when subprime mortgages were pooled, tranched, stamped investment-grade, and sold to investors who never looked at the underlying. Post-crisis rules force lenders to keep "skin in the game" and tightened underwriting, but the structure itself remains a legitimate and useful tool.',
    ],
    keyPoints: [
      'Bundles many loans into tradable securities (ABS, MBS) — turns illiquid loans into bonds.',
      'Frees the originator\'s balance sheet to lend again; spreads risk across investors.',
      'Sliced into tranches by seniority — senior paid first (safer), equity last (riskiest).',
      'Sound when underwriting is sound; the 2008 crisis came from tranched, over-rated bad loans.',
    ],
    formula: {
      expression: 'ABS value = Σ [Loan cash flow_t ÷ (1 + r)^t]  (by tranche)',
      legend: 'Loan cash flow = principal + interest minus defaults · r = tranche yield · summed by seniority',
      note: 'Losses hit the equity tranche first; once it\'s wiped out, losses climb to the mezzanine, then senior.',
    },
    example: {
      scenario: 'A bank packages €1B of mortgages into MBS, split into Senior (€900M, AAA), Mezzanine (€80M, BBB), Equity (€20M, unrated). Losses hit €30M. Who loses what?',
      steps: [
        'Equity tranche (€20M) is wiped out completely.',
        'Remaining €10M of losses hits the Mezzanine (€80M → €70M surviving).',
        'Senior (€900M) untouched — protected by €100M of subordinated tranches below it.',
        'Senior investors got AAA-like safety from the structure, not from the underlying loans being safe.',
      ],
      result: 'The slicing made €900M look AAA by stacking all the risk into the €100M below it. When losses exceed the buffer, the "safe" tranche finally bleeds — exactly what happened in 2008.',
    },
    deepDive: [
      'The 2008 failure was less the structure than the inputs and the incentives. Originators earned fees for making loans, not for the loans being repaid (they sold them on), so underwriting collapsed ("no-doc" loans). Ratings agencies, paid by the issuers, stamped toxic pools investment-grade. Investors relied on the rating instead of reading the loans. The structure didn\'t cause the crisis — broken incentives at every link of the chain did, and the structure just transmitted the bad loans efficiently to whoever trusted the labels. Fix the incentives (skin in the game, better ratings, transparency) and securitization works.',
      'Securitization remains genuinely useful when done right. It funds mortgages that banks alone couldn\'t hold, it lets investors buy diversified credit exposure, and it spreads risk to those best able to bear it. The lesson is not "securitization bad" but "the safety of an ABS depends entirely on the quality of the underlying loans and the honesty of the ratings — the structure cannot create safety that isn\'t there." An investor who understands the loans, the tranching, and the loss triggers can use ABS well; one who buys the rating and the label is back in 2008.',
    ],
    glossary: [
      { term: 'ABS', def: 'Asset-Backed Security — a bond backed by a pool of loans (auto, credit card, student).' },
      { term: 'Tranche', def: 'A slice of a securitization with defined risk/seniority — senior (safe) to equity (first loss).' },
      { term: 'Skin in the game', def: 'Requiring the originator to keep a slice of the deal so its incentives align with investors.' },
    ],
    related: ['bond', 'repo', 'working-capital'],
  },

  /* ---------------- CORPORATE (cont.) ---------------- */
  {
    id: 'lbo',
    title: 'Leveraged Buyout (LBO)',
    category: 'corporate',
    icon: '🏗️',
    color: ['#ec4899', '#475569'],
    illustration: 'bars',
    hook: 'Buying a company mostly with borrowed money — and making the company pay back the loan that bought it.',
    tldr: 'An LBO is acquiring a company using a large share of borrowed money, with the target\'s own cash flow used to repay the debt.',
    definition: [
      'In a leveraged buyout a private-equity firm buys a company putting up relatively little of its own money and borrowing the rest — often 60–70% of the price. The loan is secured against the target\'s assets and repaid from the target\'s own cash flow. The genius and the danger are the same: the buyer controls a large asset with little equity, and the company (not the buyer) services the debt that bought it. If cash flow holds up, the debt is paid down and the equity — now a larger share of a less-levered business — is worth far more; if cash flow stumbles, the debt crushes the company.',
      'LBOs are the signature move of private equity. The returns come from three levers: financial leverage (amplifying equity returns as long as the asset earns more than the debt costs), operational improvement (cutting costs, selling assets, growing margins), and multiple expansion (selling the company at a higher valuation than you paid). The first is pure financial engineering and the riskiest — it works in good times and detonates in bad ones. The math rewards stable, cash-generative businesses (utilities, consumer staples) and punishes cyclical or capital-hungry ones whose cash flow can\'t service peak debt in a downturn.',
    ],
    keyPoints: [
      'Buy a company mostly with debt; the target\'s cash flow repays the loan.',
      'Returns come from leverage, operational improvement, and multiple expansion.',
      'Works on stable, cash-generative businesses; destroys cyclical or weak-cash-flow ones.',
      'High debt means high risk — a downturn can tip the company into distress or bankruptcy.',
    ],
    formula: {
      expression: 'LBO equity return ≈ Asset return + (Debt ÷ Equity) × (Asset return − Debt cost)',
      legend: 'Debt ÷ Equity = leverage · Asset return = operating gain · Debt cost = interest rate',
      note: 'The classic leverage equation: returns above the cost of debt amplify equity; below it, leverage destroys equity.',
    },
    example: {
      scenario: 'A PE firm buys a company for €1B, putting €300M equity and €700M debt at 6%. The company\'s cash flow grows 10% and debt is paid down to €500M over 5 years, then sold at the same multiple. Equity return?',
      steps: [
        'Entry enterprise value €1B; equity €300M, debt €700M.',
        '5 years later: EV has grown ~10%/yr → ~€1.6B; debt reduced to €500M.',
        'Equity value = EV − debt = 1.6B − 0.5B = €1.1B, vs €300M invested.',
        'Equity multiple ≈ 3.7× — a ~30% annual return, mostly from leverage and debt paydown.',
      ],
      result: 'A modest business improvement became a 3.7× equity return because the debt was paid down with the company\'s own cash. Reverse the cash flow and the same leverage wipes the equity out.',
    },
    deepDive: [
      'The LBO\'s dark side is what happens when cash flow disappoints. The debt is fixed; the cash flow isn\'t. In a downturn, EBITDA falls but interest doesn\'t, the coverage ratio collapses, and the company tips from "leveraged" to "insolvent." Many celebrated LBOs of the 2005–2007 boom (retail, newspapers) went bankrupt in 2008–2009 for exactly this reason — the debt survived the boom but not the bust. The discipline is sizing debt to the trough cash flow, not the peak, and leaving enough headroom for the inevitable bad year. Leverage that works at the top kills at the bottom.',
      'The deeper critique of LBOs is distributional: the PE firm and its investors capture the upside, while the company bears the debt and often the cost cuts (jobs, R&D, maintenance) that fund the debt service. The same cash flow that once invested in the business now services the loan that bought it. Done well, this discipline makes the business leaner and better; done badly, it strips the company for parts and leaves a husk unable to compete. Whether an LBO creates or destroys value depends almost entirely on whether the operational improvements are real and durable or merely a veneer over financial engineering — and only time, not the marketing deck, reveals which.',
    ],
    glossary: [
      { term: 'Private equity', def: 'The firms that do LBOs — buy private/stable companies, lever them, improve and resell.' },
      { term: 'Debt/EBITDA', def: 'A common leverage gauge — how many years of operating profit the debt represents.' },
      { term: 'Coverage ratio', def: 'Cash flow ÷ interest — how comfortably the debt is serviced; low means danger.' },
    ],
    related: ['leverage', 'working-capital', 'private-equity'],
  },

  /* ---------------- ECONOMICS (cont.) ---------------- */
  {
    id: 'fiat-money',
    title: 'Fiat Money',
    category: 'economics',
    icon: '💵',
    color: ['#16a34a', '#0ea5e9'],
    illustration: 'cycle',
    hook: 'Money is valuable only because we all agree it is — the shared fiction that runs the modern economy.',
    tldr: 'Fiat money is currency that has value because a government declares it legal tender, not because it is backed by gold or another asset.',
    definition: [
      'Fiat money is money by decree: a government says it is money, requires taxes to be paid in it, and accepts it for debts — and that suffices. Unlike gold or a gold-backed note, a euro or dollar has no intrinsic value and no claim on anything physical; its worth rests entirely on trust in the issuing state and the stability of its economy. Lose that trust (hyperinflation, regime collapse) and the currency fails. Every modern currency is fiat; the gold standard ended in the 20th century because it tied governments\' hands during crises.',
      'Fiat\'s great advantage is flexibility: a central bank can create or destroy it to manage the economy — expanding money in a crisis, tightening in a boom. This is the tool that lets modern central banks fight recessions and bail out the system, impossible under a rigid gold standard. Its great danger is the same power: a government that can create money can over-create it, producing inflation or, in extreme cases, hyperinflation. Fiat\'s value is a social contract; the contract holds as long as the issuer is disciplined and trusted.',
    ],
    keyPoints: [
      'Value by government decree and trust, not by physical backing.',
      'Every modern currency is fiat; the gold standard ended last century.',
      'Lets central banks create/destroy money to manage the economy — a powerful, dangerous tool.',
      'Trust is the foundation: over-creation causes inflation; lost trust causes currency collapse.',
    ],
    formula: {
      expression: 'Money value ≈ 1 ÷ (Money supply ÷ Real output)',
      legend: 'Money supply = total currency/credit · Real output = goods & services produced',
      note: 'Quantity theory: too much money chasing too few goods → higher prices (inflation).',
    },
    example: {
      scenario: 'A country doubles its money supply while output is flat. What happens to prices (long run)?',
      steps: [
        'Same goods, twice the money → each unit buys roughly half as much.',
        'Prices roughly double — the "inflation tax" on anyone holding the currency.',
        'Holders of cash savings lose half their purchasing power; holders of real assets keep theirs.',
        'This is why hyperinflation (money printed without limit) destroys a currency\'s trust and value.',
      ],
      result: 'Print twice the money for the same output and prices double. Fiat\'s power is also its temptation — disciplined creation enables policy, undisciplined creation destroys the currency.',
    },
    deepDive: [
      'Fiat money is a collective fiction, but fictions can be extraordinarily durable when backed by a state that taxes. The requirement to pay taxes in the currency creates guaranteed demand for it — citizens need the government\'s money to settle their obligations, which is why a credible state\'s fiat holds value even with no backing. The system breaks when the state either loses credibility (regime collapse, war) or abuses the printing press (financing spending by creating money rather than taxing). Hyperinflations — Weimar Germany, Zimbabwe, Venezuela — are the failure mode: a spiral where more printing → more inflation → need for more printing, until the currency is abandoned for anything stable (dollars, gold, foreign notes).',
      'The crypto movement\'s deeper ambition is to replace fiat with a money no government can inflate — Bitcoin\'s fixed supply is a deliberate mirror image of gold-standard discipline. Whether a trustless, fixed-supply money can serve a growing economy is the open question: rigid money failed before (the gold standard worsened the Great Depression), and a currency that can\'t expand may force painful deflation. Fiat and crypto embody opposite theories of money — flexible-but-trusting vs. rigid-but-trustless — and which better serves an economy is one of the live arguments of modern finance, not a settled fact.',
    ],
    glossary: [
      { term: 'Legal tender', def: 'Money a government says must be accepted for debts within its jurisdiction.' },
      { term: 'Gold standard', def: 'A system where currency is convertible to fixed gold — rigid, abandoned for fiat\'s flexibility.' },
      { term: 'Quantity theory of money', def: 'The idea that more money for the same output means higher prices.' },
    ],
    related: ['inflation', 'central-bank', 'gdp'],
  },

  /* ---------------- RISK (cont.) ---------------- */
  {
    id: 'volatility',
    title: 'Volatility',
    category: 'risk',
    icon: '🌊',
    color: ['#0ea5e9', '#ec4899'],
    illustration: 'curve',
    hook: 'The size of the swings — finance\'s stand-in for risk, useful and misleading in equal measure.',
    tldr: 'Volatility is how much an asset\'s price swings around its average — the standard proxy for risk, though not the same as the real danger.',
    definition: [
      'Volatility is the statistical measure of how much returns vary — usually the standard deviation of returns over a period. A stock that moves ±2% a day is more volatile than one moving ±0.3%. Finance uses it as the default risk gauge because it is measurable, comparable, and feeds the models (Sharpe, options, VaR). High volatility means a wider range of possible outcomes, both better and worse; low volatility means a tighter band around the average.',
      'Volatility is a useful proxy but a flawed definition of risk. The real risk to most investors is permanent loss of capital or being forced to sell at the bottom — neither of which is the same as price swings. A stock can be highly volatile yet a sound long-term hold (the swings are noise around an upward drift), or low-volatility yet a slow bleed to zero. Equating volatility with risk leads to owning boring losers and avoiding volatile winners, and to models that underestimate the rare, catastrophic moves (fat tails) that do the actual damage.',
    ],
    keyPoints: [
      'Measured as standard deviation of returns — the size of the swings.',
      'The default risk proxy: higher volatility = wider outcome range.',
      'Proxy, not truth: real risk is permanent loss or forced selling, not just swings.',
      'Underestimates tail risk — fat-tailed moves happen far more than "normal" models predict.',
    ],
    formula: {
      expression: 'Volatility (σ) = √( Σ (R_t − R̄)² ÷ (n − 1) )',
      legend: 'R_t = each return · R̄ = average return · n = number of periods',
      note: 'Annualized volatility = daily σ × √252 (trading days) — the standard scaling.',
    },
    example: {
      scenario: 'Stock A\'s monthly returns average 1% with volatility 3%. Stock B averages 1% with volatility 8%. What is a one-month "bad" outcome for each (~worst 5% of months)?',
      steps: [
        'Approx 95% of months fall within ±2σ of the mean (assuming normal).',
        'A: 1% − 2×3% = −5% — a bad month is roughly a 5% loss.',
        'B: 1% − 2×8% = −15% — a bad month is roughly a 15% loss.',
        'Same expected return, very different pain tolerance required.',
      ],
      result: 'Same average return, three times the worst-case loss. Volatility is the price of the higher potential upside — and the measure of how much pain you must stomach to earn it.',
    },
    deepDive: [
      'Volatility\'s deepest flaw is the assumption of normality. Real returns have fat tails — extreme moves happen far more often than a bell curve predicts. The 1987 crash was a ~20-standard-deviation event under normal assumptions, something that should happen once in the age of the universe; it happened in a day. Treating volatility as the full measure of risk leads to VaR models that say "this can\'t happen" right before it does. The fix is to use volatility as one input alongside tail measures, stress tests, and scenario analysis — never to mistake the comfortable middle of the distribution for its dangerous edges.',
      'A counterintuitive truth: volatility is not always bad for a long-horizon investor. A young investor saving monthly benefits from volatility — DCA buys more shares when prices swing low, lowering the average cost. And "volatility drag" (the gap between average return and compounded return) only bites on large swings; for ordinary diversified portfolios it is minor. The investor who treats volatility as the enemy often ends up too conservative, surrendering long-term returns to avoid short-term discomfort they could have ridden out. The skill is distinguishing volatility you should exploit (long horizon) from volatility you must avoid (forced seller, near a withdrawal).',
    ],
    glossary: [
      { term: 'Standard deviation', def: 'The statistical measure of dispersion — how far returns stray from their average.' },
      { term: 'Fat tails', def: 'Extreme events occurring more often than a normal distribution predicts.' },
      { term: 'Implied volatility', def: 'The market\'s expectation of future volatility, embedded in option prices.' },
    ],
    related: ['options', 'bull-bear-market', 'risk-vs-return'],
  },

  /* ---------------- INSTITUTIONS (cont.) ---------------- */
  {
    id: 'hedge-fund',
    title: 'Hedge Fund',
    category: 'institutions',
    icon: '🦔',
    color: ['#475569', '#16a34a'],
    illustration: 'scale',
    hook: 'A lightly regulated private fund that can bet on anything, anywhere — "hedging" in name, often speculation in practice.',
    tldr: 'A hedge fund is a private, lightly regulated investment fund using flexible strategies (including leverage and shorting) for high-net-worth and institutional clients.',
    definition: [
      'A hedge fund is a private investment partnership open only to "qualified" investors (high net worth or institutional), which gives it freedom that mutual funds lack: it can short, use leverage, hold illiquid assets, trade derivatives, and concentrate bets. The name comes from the original idea of "hedging" market risk (long/short to be market-neutral), but modern hedge funds run a vast range of strategies — macro, arbitrage, activist, distressed — many of which are pure speculation. The model is high-fee: "2 and 20" meant a 2% management fee plus 20% of profits, though fees have fallen.',
      'The defining features are flexibility and incentive. The manager can go anywhere and use any tool to express a view, and the performance fee aligns the manager with returns (with a catch: the "high watermark" means fees are paid only on new profits, not on recovering past losses). The trade-off for the investor is illiquidity (lock-ups, quarterly gates), opacity (you trust the manager\'s valuations), and the fact that most hedge funds, net of fees, have struggled to beat simple stock/bond portfolios — the famous "hedge fund return" has compressed as the industry grew and the easy inefficiencies were competed away.',
    ],
    keyPoints: [
      'Private, lightly regulated fund for qualified investors — flexible strategies.',
      'Can short, leverage, use derivatives, and hold illiquid or concentrated positions.',
      'High-fee model (historically 2% + 20% of profits, often with a high watermark).',
      'Most have struggled to beat simple passive portfolios net of fees in recent years.',
    ],
    formula: {
      expression: 'Manager fee = 2% × AUM + 20% × Max(0, Profit − High watermark)',
      legend: 'AUM = assets under management · Profit = yearly gain · High watermark = past peak',
      note: 'High watermark means the manager only earns the 20% on new profits above the fund\'s prior peak.',
    },
    example: {
      scenario: 'A hedge fund runs €1B, returns 15% in a year when the market returned 12%, with a "2 and 20" fee and no prior loss to recover. What does the manager earn?',
      steps: [
        'Profit = 15% × €1B = €150M.',
        'Management fee = 2% × €1B = €20M.',
        'Performance fee = 20% × €150M = €30M.',
        'Investor nets 150 − 20 − 30 = €100M → 10% after fees, vs 12% from a cheap index fund.',
      ],
      result: 'The fund beat the market gross but lost net, after fees. An index fund returning 11.9% net would have beaten it — the bar for "skill" is high once fees are counted.',
    },
    deepDive: [
      'The hedge-fund industry\'s central tension is the gap between the headline promise (absolute returns in all markets, "uncorrelated" to stocks) and the delivered result (returns that correlate to stocks in sell-offs and lag them in bull markets). The original value proposition — steady returns when markets fall — is real for a few funds with genuine diversifying strategies, but many funds are simply leveraged equity in disguise, selling crash protection that fails exactly when it is needed. Identifying the genuine diversifiers in advance is the hard problem, and the data shows past performance is a weak predictor of future results.',
      'The survivorship and reporting bias in hedge-fund data makes the industry look better than it is. Funds that fail stop reporting and disappear from the indices, so the published averages overstate reality — a phenomenon called "survivorship bias." Add backfill bias (funds only report once they have a good track record) and the published hedge-fund return may be several percentage points above what a random investor actually received. The lesson for allocators is to discount the marketing and stress-test the correlation: a hedge fund that protects in calm and bleeds in chaos is not a hedge, it is a cost. The rare fund that genuinely diversifies is worth its fee; the many that don\'t are not.',
    ],
    glossary: [
      { term: '2 and 20', def: 'The classic hedge-fund fee: 2% management + 20% of profits — now often lower.' },
      { term: 'High watermark', def: 'Performance fees only on profits above the fund\'s prior peak — protects investors.' },
      { term: 'Lock-up / gate', def: 'Restrictions on withdrawals (months/years) to prevent forced selling in stress.' },
    ],
    related: ['fund', 'prime-broker', 'leverage'],
  },
  {
    id: 'private-equity',
    title: 'Private Equity',
    category: 'institutions',
    icon: '💼',
    color: ['#1e293b', '#6366f1'],
    illustration: 'bars',
    hook: 'Buying whole companies to fix and resell them — the long, leveraged, illiquid business of owning private businesses.',
    tldr: 'Private equity invests in private (non-listed) companies, often using leverage (LBOs), to improve them over years and sell at a profit.',
    definition: [
      'Private equity (PE) firms raise pools of capital from institutions and wealthy investors, then use it to buy companies — sometimes whole public companies taken private, more often mid-sized private businesses. The typical play is a leveraged buyout (LBO): buy mostly with debt, improve operations over 4–7 years (cut costs, professionalize management, grow margins, make add-on acquisitions), then sell the company or list it. Investors\' money is locked up for the fund\'s whole life (7–10 years), trading liquidity and transparency for the chance at higher returns from illiquid, hands-on ownership.',
      'PE\'s claim is that private ownership frees managers from quarterly public-market pressure, allowing longer-term value creation; its critique is that the returns come heavily from leverage and financial engineering rather than genuine operational improvement, and that the illiquidity premium and smoothed valuations flatter the reported performance. The truth varies by firm: the best PE houses are genuine operators that build better businesses; the worst are financial engineers that load debt onto companies, extract fees, and leave a weakened husk. Distinguishing them is the investor\'s central problem, and the data — like hedge funds — is muddied by survivorship and valuation-reporting biases.',
    ],
    keyPoints: [
      'Buys private companies (or takes public ones private), often via leveraged buyout.',
      'Improves the business over 4–7 years, then exits (sale, IPO, or recap).',
      'Investors\' capital is locked up for the fund\'s 7–10 year life — illiquidity for higher return.',
      'Returns mix leverage, operational improvement, and multiple expansion — quality varies by firm.',
    ],
    formula: {
      expression: 'Equity return = Exit EV − Remaining debt,  where EV ≈ EBITDA × Exit multiple',
      legend: 'Exit EV = enterprise value at sale · Remaining debt = debt still outstanding · EBITDA × multiple = valuation',
      note: 'Returns rise if EBITDA grows, the exit multiple expands, or debt is paid down — the three levers.',
    },
    example: {
      scenario: 'PE buys a company at 8× EBITDA (EBITDA €50M → EV €400M) with €280M debt / €120M equity. In 5 years EBITDA reaches €80M and they sell at 9×, with debt down to €220M. Equity?',
      steps: [
        'Exit EV = 9 × €80M = €720M.',
        'Equity at exit = 720 − 220 = €500M, vs €120M invested → ~4.2× over 5 years.',
        'Leverage: debt fell from €280M to €220M using the company\'s own cash flow.',
        'Multiple expansion (8×→9×) and EBITDA growth (€50M→€80M) did the rest.',
      ],
      result: 'A ~4× equity return from a modest business improvement plus leverage. Reverse any lever — EBITDA falling, or the exit multiple contracting — and the return collapses, debt and all.',
    },
    deepDive: [
      'PE\'s reported returns benefit from valuation practices that public markets don\'t allow. Private holdings are valued quarterly by the manager (often using smoothing or stale marks), so PE returns look steadier and less correlated to public markets than they truly are — the "volatility laundering" that makes the asset class appear to offer high return for low risk. In a real downturn, private portfolios lag public markets in marking down, then catch up later as marks catch up to reality. Allocators who rely on reported PE volatility understate the true risk and over-allocate.',
      'The distributional question is sharper for PE than for most assets. The debt service and cost cuts that fund PE returns often come from the workforce and the business itself — fewer jobs, less R&D, more financial fragility. A well-run PE firm creates a better business; a poorly run one strips it. The aggregate effect on the economy is contested: PE argues it makes companies efficient and productive; critics argue it extracts value and loads systemic risk. For the LP investor, the decision is whether a specific GP has the operational chops to create real value or is merely harvesting leverage and fees — and the only honest evidence is the firm\'s track record across full cycles, net of all fees and adjusted for the biases.',
    ],
    glossary: [
      { term: 'LBO', def: 'Leveraged Buyout — buying a company mostly with debt; the PE signature move.' },
      { term: 'Limited Partner (LP)', def: 'The institutions/individuals whose capital funds the PE firm\'s deals.' },
      { term: 'Carried interest', def: 'The PE firm\'s share of profits (~20%) — taxed favorably, often controversially.' },
    ],
    related: ['lbo', 'hedge-fund', 'venture-capital'],
  },
  {
    id: 'venture-capital',
    title: 'Venture Capital',
    category: 'institutions',
    icon: '🌱',
    color: ['#16a34a', '#f59e0b'],
    illustration: 'growth',
    hook: 'Funding the companies that mostly fail, hoping the one that wins pays for them all — power-law investing at its purest.',
    tldr: 'Venture capital provides equity funding to early-stage, high-growth startups in exchange for ownership, betting that rare winners return the fund.',
    definition: [
      'Venture capital (VC) backs young companies too risky or early for bank loans or public markets, in exchange for equity. VCs invest across stages — seed, Series A, B, C — as a startup grows, each round buying a smaller slice at a higher valuation if the company progresses. The economic structure is a power law: most bets fail or return little, a few break even or modestly succeed, and a tiny handful (the "unicorn" that goes from zero to billions) returns the entire fund and then some. The art is finding the rare business with a huge market and a real shot at dominating it, then helping it get there.',
      'VC returns are driven by the few, not the many. A classic fund might have half its bets fail, a third return modestly, and one or two return 10–100×. This means the discipline is the opposite of diversification: you cannot average your way to good VC returns by owning many mediocre bets; you must own the rare extreme winner. The corollary is that the biggest risk in VC is not funding a company that fails (that\'s expected) but missing the one that succeeds — the "error of omission" matters more than the "error of commission." This shapes how VCs think: aggressively fund anything that might be huge, accept that most won\'t be.',
    ],
    keyPoints: [
      'Equity funding for early-stage, high-growth startups in exchange for ownership.',
      'Returns follow a power law: most bets fail, a few winners return the fund.',
      'Staged investing (seed → Series A, B, C) as the company proves milestones.',
      'The biggest risk is missing the rare winner, not funding a loser.',
    ],
    formula: {
      expression: 'Fund return ≈ Σ (Exit value_i × Ownership_i) − Costs',
      legend: 'Exit value_i = what company i sells/IPOs for · Ownership_i = VC\'s stake at exit',
      note: 'One 100× winner offsets fifty total losses — the power law that defines the asset class.',
    },
    example: {
      scenario: 'A €100M VC fund makes 30 investments. 25 fail (loss), 4 return ~1×, and 1 returns €300M on a €3M stake. Fund outcome?',
      steps: [
        'Failed 25: ~€70M lost (most of their stakes gone).',
        'Modest 4: ~€20M returned on ~€20M invested (capital returned, little gain).',
        'Winner 1: €3M stake → €300M exit (a 100×).',
        'Total returned ≈ €70M (failed residuals) + €20M + €300M ≈ €320M on €100M → ~3.2×.',
      ],
      result: 'One 100× winner carried the fund. Without it, the fund returns ~€90M (a loss). The entire business model depends on finding the rare company that reaches a huge outcome.',
    },
    deepDive: [
      'The venture model only works in markets with huge outcomes — software, internet, biotech — where a single company can reach billions in value. A great restaurant or consulting firm, however well run, cannot return a venture fund, because its outcome is capped. This is why VC concentrates in markets with winner-take-most dynamics, network effects, and near-zero marginal costs: only there can the power law pay out. The investor question is never "is this a good business?" but "can this become a uniquely large one?" — and most good businesses, sensibly, are not fund-returning ones, which is why VC is the exception, not the rule, of company-building.',
      'The recent compression of VC returns is a structural story. As more capital chased the same number of great companies, valuations rose in the private market faster than exits, so a company that once returned 100× at a €10M entry now needs a €50M entry and a proportionally larger exit to do the same. The power law still holds but the entry prices have made the math harder — more capital per fund, more dilution, fewer true unicorns relative to the money chasing them. For LPs, the implication is that VC returns increasingly concentrate in the top-quartile funds with the best deal flow; the median VC fund has struggled to beat public markets, and the dispersion of outcomes is wider than in almost any other asset class. Choosing the right VC manager is the entire bet.',
    ],
    glossary: [
      { term: 'Power law', def: 'A distribution where a few outcomes dominate — the math of VC returns.' },
      { term: 'Unicorn', def: 'A private startup valued above $1B — the rare fund-returner VCs hunt.' },
      { term: 'Term sheet', def: 'The deal terms (valuation, stake, rights) offered for a funding round.' },
    ],
    related: ['private-equity', 'ipo', 'diversification'],
  },

  /* ---------------- ACCOUNTING ---------------- */
  {
    id: 'balance-sheet',
    title: 'Balance Sheet',
    category: 'accounting',
    icon: '⚖️',
    color: ['#475569', '#0ea5e9'],
    illustration: 'scale',
    hook: 'The financial photograph — everything a company owns and owes, frozen at one moment.',
    tldr: 'A balance sheet is a snapshot of a company\'s assets, liabilities, and equity at one point in time. Assets always equal liabilities plus equity.',
    definition: [
      'The balance sheet is one of the three core financial statements, and the only one that is a moment-in-time snapshot rather than a period of activity. It lists what a company owns (assets) and owes (liabilities), with the difference being shareholders\' equity — the owners\' stake. The fundamental identity holds it together: Assets = Liabilities + Equity. Every transaction the company makes changes two things on the sheet, keeping it perpetually in balance — hence the name. It tells you what the company is, financially, right now.',
      'Assets split into current (cash, inventory, receivables — convertible to cash within a year) and non-current (property, equipment, goodwill). Liabilities split the same way: current (payables, short-term debt) and non-current (long-term debt, pensions). The structure reveals how the company is funded (equity vs. debt) and how liquid it is (current assets vs. current liabilities — the working-capital story). Read with the income statement (how it performed) and cash flow statement (whether profit turned to cash), the balance sheet completes the picture of a business.',
    ],
    keyPoints: [
      'Snapshot at one moment: Assets = Liabilities + Equity (always balanced).',
      'Current vs. non-current splits reveal liquidity and funding structure.',
      'Equity = owners\' residual claim after all debts are paid.',
      'Read with income statement and cash flow statement for the full picture.',
    ],
    formula: {
      expression: 'Assets = Liabilities + Equity',
      legend: 'Assets = what the company owns · Liabilities = what it owes · Equity = owners\' residual stake',
      note: 'Every transaction changes two items, keeping the sheet in balance — the foundation of double-entry bookkeeping.',
    },
    example: {
      scenario: 'A bakery has €20k equipment, €10k inventory, €5k cash (assets €35k); owes €8k to suppliers, €15k bank loan (liabilities €23k). What\'s its equity?',
      steps: [
        'Total assets = 20 + 10 + 5 = €35k.',
        'Total liabilities = 8 + 15 = €23k.',
        'Equity = 35 − 23 = €12k — the owners\' stake after paying all debts.',
        'If the bakery sold everything and paid all debts, €12k would remain for the owners.',
      ],
      result: 'The balance sheet shows the bakery is solvent with €12k of owners\' equity. If liabilities exceeded assets, equity would be negative — the bakery would be insolvent.',
    },
    deepDive: [
      'The balance sheet\'s biggest limitation is that it reflects costs, not values. Assets are mostly recorded at what the company paid (historical cost), less depreciation — so a building bought decades ago may sit on the books far below its market value, and a brand built organically may not appear at all. Only when a company is acquired does "goodwill" capture the premium above book value, which is why acquired firms\' balance sheets look richer than organically-grown ones. This means the balance sheet systematically understates the value of asset-light, brand-driven, or long-held businesses — book value is often a poor guide to what a company is actually worth.',
      'The sophisticated reader looks past the totals to the composition and quality. Are the assets real and recoverable (or is inventory obsolete, receivables uncollectible)? Is the debt structured to match the assets (long-dated assets funded by long debt)? Is equity growing from retained earnings (a healthy business) or shrinking from losses and dividends? The balance sheet alone doesn\'t answer these, but it poses the right questions — and paired with the cash flow statement (which reveals whether profit is becoming cash) it exposes earnings quality and financial health in a way no single number can. It is the static photograph; the other statements are the motion that gives it meaning.',
    ],
    glossary: [
      { term: 'Equity', def: 'Owners\' residual stake — assets minus liabilities; what remains after all debts are paid.' },
      { term: 'Current vs. non-current', def: 'Within a year vs. longer — splits that reveal liquidity and funding structure.' },
      { term: 'Double-entry bookkeeping', def: 'Recording every transaction with two offsetting entries, keeping the sheet balanced.' },
    ],
    related: ['income-statement', 'working-capital', 'leverage'],
  },
  {
    id: 'income-statement',
    title: 'Income Statement',
    category: 'accounting',
    icon: '📊',
    color: ['#16a34a', '#dc2626'],
    illustration: 'bars',
    hook: 'The movie of performance — revenue in, costs out, profit at the bottom, over a stretch of time.',
    tldr: 'An income statement (P&L) records a company\'s revenue, expenses, and profit over a period, showing how the business performed.',
    definition: [
      'The income statement — also called the profit & loss (P&L) — summarizes a company\'s performance over a period (a quarter, a year). It flows from the top line (revenue) down through costs to the bottom line (net income), showing every step: revenue minus cost of goods sold gives gross profit; minus operating expenses gives operating income (EBIT); minus interest and taxes gives net income. Each subtotal answers a different question — gross margin shows production efficiency, operating margin shows the core business, net margin shows the final profit after everything.',
      'It is the "movie" to the balance sheet\'s "photograph": where the balance sheet shows what the company is, the income statement shows what it did. But it is built on accrual accounting, which records revenue when earned and costs when incurred — not when cash moves. So a company can show a handsome profit while bleeding cash (if customers pay slowly), or a loss while generating cash (if it has big non-cash depreciation). Reading the income statement without the cash flow statement is watching only half the story: profit is an opinion, cash is a fact.',
    ],
    keyPoints: [
      'Records revenue, expenses, and profit over a period (the P&L).',
      'Flows top-down: revenue → gross profit → operating income (EBIT) → net income.',
      'Each subtotal (gross/operating/net margin) answers a different question.',
      'Built on accrual accounting — profit ≠ cash; read with the cash flow statement.',
    ],
    formula: {
      expression: 'Net income = Revenue − COGS − OpEx − Interest − Taxes',
      legend: 'COGS = cost of goods sold · OpEx = operating expenses · Interest = debt cost · Taxes = income tax',
      note: 'EBIT = Revenue − COGS − OpEx; EBITDA adds back depreciation and amortization.',
    },
    example: {
      scenario: 'A company: revenue €1,000k, COGS €400k, OpEx €300k, interest €50k, taxes €75k. What are its key margins?',
      steps: [
        'Gross profit = 1,000 − 400 = €600k → gross margin 60%.',
        'EBIT = 600 − 300 = €300k → operating margin 30%.',
        'Pre-tax = 300 − 50 = €250k → net income = 250 − 75 = €175k → net margin 17.5%.',
        'Each margin shows a layer of efficiency: production, operations, financing & tax.',
      ],
      result: 'Of every €100 of revenue, €60 survived production, €30 survived operations, and €17.50 reached the bottom line. The margins are the story of where the money goes.',
    },
    deepDive: [
      'The income statement is where earnings management lives, because accrual accounting gives management discretion. When is revenue recognized? How fast is depreciation? Are costs capitalized (spread over years) or expensed (taken now)? Are one-time items "exceptional" (excluded from "adjusted" earnings)? Each choice moves profit without changing the underlying business. Companies guide analysts to "adjusted" or "non-GAAP" earnings that strip out anything unflattering — and these adjusted numbers have grown steadily more generous over time. The gap between reported and adjusted earnings is itself a signal: a wide, persistent gap often means management is flattering the numbers.',
      'The deeper skill is reading the income statement as a sequence of questions, not a single number. Is revenue growing from volume or price? Is gross margin expanding (pricing power) or compressing (competition/costs)? Are operating expenses scaling slower than revenue (operating leverage — profit grows faster than sales) or faster (the business is getting less efficient)? Are interest costs rising relative to EBIT (growing leverage, growing risk)? The net income number is the destination; the line items are the journey, and the journey tells you whether the profit is durable or borrowed from the future. A company whose profit rises on cost cuts and financial engineering looks the same as one whose profit rises on real growth — until the cycle turns.',
    ],
    glossary: [
      { term: 'Gross margin', def: 'Gross profit ÷ revenue — production efficiency, before operating costs.' },
      { term: 'Operating margin', def: 'EBIT ÷ revenue — core business profitability, before financing and tax.' },
      { term: 'Accrual accounting', def: 'Recording revenue when earned and costs when incurred — why profit ≠ cash.' },
    ],
    related: ['balance-sheet', 'valuation', 'working-capital'],
  },

  /* ---------------- FINTECH & CRYPTO ---------------- */
  {
    id: 'cryptocurrency',
    title: 'Cryptocurrency',
    category: 'fintech',
    icon: '🪙',
    color: ['#f59e0b', '#6366f1'],
    illustration: 'cycle',
    hook: 'Digital money with no central issuer — secured by math and a shared ledger, valued by belief.',
    tldr: 'A cryptocurrency is a digital asset secured by cryptography on a distributed ledger, with no central bank or issuer — Bitcoin is the original.',
    definition: [
      'A cryptocurrency is a digital token whose ownership and transfers are recorded on a distributed ledger (a blockchain) secured by cryptography, with no central authority issuing or controlling it. The innovation is the solution to the "double-spending" problem without a trusted middleman: a network of computers agrees on who owns what, making it possible to send value digitally without a bank. Bitcoin, created in 2009, was the first; thousands of others (Ethereum, Solana, stablecoins) followed, each with different rules for issuance, speed, and programmability.',
      'The economic debate is what crypto actually is. Bulls see a fixed-supply digital store of value (Bitcoin as "digital gold"), a hedge against fiat debasement, and a programmable financial system (Ethereum). Skeptics note that most cryptocurrencies generate no cash flows, so their price rests entirely on the greater-fool theory — you profit only if someone pays more later. The volatility is extreme, the speculative manias frequent, and the failures (exchanges collapsing, stablecoins de-pegging, scams) common. Whether crypto matures into a genuine part of the financial system or remains a speculative side-bet is the live question, unresolved by a decade and a half of history.',
    ],
    keyPoints: [
      'Digital asset on a distributed ledger, secured by cryptography, no central issuer.',
      'Solves digital transfer without a trusted middleman (no double-spending).',
      'Bitcoin is the original; thousands of others vary in issuance, speed, programmability.',
      'Most generate no cash flows — price rests on belief, not earnings.',
    ],
    formula: {
      expression: 'No intrinsic cash flow → value = market consensus (supply × belief)',
      legend: 'Supply = protocol rules (Bitcoin: capped at 21M) · Belief = what others will pay later',
      note: 'Unlike a stock or bond, there is no discounted cash flow to anchor a "fair value."',
    },
    example: {
      scenario: 'Bitcoin has a capped supply of 21M coins; you buy one at €40,000. What determines whether that is "cheap" or "dear"?',
      steps: [
        'There are no earnings or cash flows to discount — no DCF gives a fair value.',
        'Price depends on demand: more buyers than the fixed supply can satisfy → price rises.',
        'If belief fades (regulation, a better alternative, a scandal), price can fall far.',
        'Compare: a stock at €40,000 of value is backed by discounted future profits; a bitcoin is backed by what others will pay.',
      ],
      result: 'A crypto\'s "value" is a pure consensus phenomenon — durable if trust holds, fragile if it breaks. There is no fundamental anchor, only the market\'s collective bet.',
    },
    deepDive: [
      'The honest bull case for crypto is narrow but real. Bitcoin\'s fixed supply is a credible commitment against inflation — valuable in countries that abuse the printing press, where citizens already use dollars or crypto to escape local currency failure. Public blockchains settle value without trusting a bank or government, useful where institutions are weak. And programmable chains (Ethereum) enable financial primitives (lending, trading, tokenization) that could lower costs. These are genuine, if early, uses — but they are a small part of the speculative volume that dominates crypto today.',
      'The bear case is the mirror image. The "decentralization" is often illusory — mining/validating concentrates, exchanges act like unregulated banks (and fail like them, with customer losses), and "trustless" systems re-introduce trusted intermediaries the moment they touch the real world. The fixed supply that makes Bitcoin a "hard money" also makes it a poor medium of exchange (deflationary, hoarded) and a poor unit of account (wildly volatile). And the energy cost of proof-of-work is enormous for the value delivered. The synthesis most reasonable observers reach: crypto contains real innovation but is currently 90% speculation and 10% utility; whether that ratio inverts is the multi-decade question, and the answer is not yet in.',
    ],
    glossary: [
      { term: 'Blockchain', def: 'The distributed ledger that records crypto ownership — the underlying technology.' },
      { term: 'Stablecoin', def: 'A crypto pegged to a stable asset (usually the dollar) — a bridge to everyday value.' },
      { term: 'Proof of work / stake', def: 'The two main methods for securing a crypto network — energy-intensive vs. capital-intensive.' },
    ],
    related: ['blockchain', 'fiat-money', 'inflation'],
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    category: 'fintech',
    icon: '🔗',
    color: ['#0ea5e9', '#6366f1'],
    illustration: 'bars',
    hook: 'A ledger everyone shares and no one controls — the technology under crypto, and a possible backbone for finance itself.',
    tldr: 'A blockchain is a shared, append-only ledger replicated across many computers and secured by cryptography, recording transactions without a central authority.',
    definition: [
      'A blockchain is a database with three special properties: it is distributed (copied across many computers, so no single party controls it), append-only (records can be added but not changed, making the history tamper-evident), and cryptographically secured (each block of records is mathematically linked to the previous one, so altering any past record breaks the chain visibly). Together these let a network of strangers agree on a shared truth — who owns what, who paid whom — without trusting each other or a central referee. That is the innovation: consensus without authority.',
      'The technology underlies all cryptocurrencies, but its potential is broader. Any system that currently relies on a trusted intermediary to keep records — settlement of securities, supply-chain provenance, property registries, identity — could in principle run on a shared ledger, with faster settlement and fewer middlemen. The reality is harder: blockchains are slower and more expensive than centralized databases, the "trustless" claim often re-introduces trust at the edges, and most enterprise experiments have found that a well-run traditional database solves most problems more easily. The technology is real and occasionally useful; the revolution is taking far longer than the hype promised.',
    ],
    keyPoints: [
      'Distributed, append-only, cryptographically linked ledger — consensus without a central authority.',
      'Lets strangers agree on a shared truth without trusting each other.',
      'Underlies all cryptocurrencies; potentially useful for settlement, provenance, registries.',
      'Slower and costlier than centralized databases — the revolution is slower than the hype.',
    ],
    formula: {
      expression: 'Block hash = Hash(previous hash + transactions + nonce)',
      legend: 'Hash = cryptographic fingerprint · previous hash = links blocks · nonce = value making hash valid (proof of work)',
      note: 'Changing any past transaction changes its hash, breaking every later block — the tamper-evidence.',
    },
    example: {
      scenario: 'Alice sends 1 bitcoin to Bob. How does the blockchain record and protect this without a bank?',
      steps: [
        'The transaction is broadcast to the network of nodes.',
        'Miners/validators include it in a new block and compete to produce a valid hash.',
        'The winning block is added to the chain, linked to the previous block\'s hash.',
        'Now every node has the same record; to alter it, an attacker must re-do all later work — prohibitively costly.',
      ],
      result: 'No bank approved or recorded the transfer — the network did, by consensus. The cryptography makes the history effectively immutable, which is what makes trustless transfer possible.',
    },
    deepDive: [
      'The famous "blockchain trilemma" captures the engineering challenge: a blockchain can have at most two of decentralization, security, and scalability. Bitcoin chose decentralization and security at the cost of speed (a few transactions per second); many newer chains sacrifice some decentralization for speed. None has solved all three, which is why blockchains remain slower and more expensive than the centralized systems they aim to replace — and why, for most ordinary record-keeping, a traditional database remains the better tool. The genuine use cases are those where the absence of a trusted intermediary matters more than the speed cost.',
      'The deeper question for finance is whether blockchains improve settlement or merely reorganize it. Today, securities settle over days through a chain of custodians and clearing houses; a blockchain could, in principle, settle in minutes with atomic delivery-versus-payment and far fewer intermediaries. Central banks and exchanges are actively experimenting (tokenized bonds, CBDCs, "atomic settlement"). The promise is real — faster, cheaper, less fragmented settlement — but the migration of trillions in daily flows onto new rails is a generational project, and the existing system, for all its complexity, works and is trusted. Blockchain in finance is less a question of possibility than of pace: the technology can do it, but the financial system moves at the speed of trust and regulation, not of code.',
    ],
    glossary: [
      { term: 'Distributed ledger', def: 'A database replicated across many nodes — the general concept, of which blockchain is one type.' },
      { term: 'Hash', def: 'A cryptographic fingerprint of data — the link that makes a blockchain tamper-evident.' },
      { term: 'Consensus mechanism', def: 'How nodes agree on the next block — proof of work, proof of stake, etc.' },
    ],
    related: ['cryptocurrency', 'central-bank', 'dark-pool'],
  },
];

/* ---------------- Helpers ---------------- */

export const getConcept = (slug) => concepts.find((c) => c.id === slug || c.id === slug);

export const getConceptsByCategory = (catId) =>
  concepts.filter((c) => c.category === catId);

export const getCategory = (catId) => categories.find((c) => c.id === catId);

export const getRelatedConcepts = (concept) =>
  (concept.related || [])
    .map((slug) => concepts.find((c) => c.id === slug))
    .filter(Boolean);

// Prev/next within the same category for continuous learning
export const getAdjacent = (concept) => {
  if (!concept) return { prev: null, next: null };
  const inCat = getConceptsByCategory(concept.category);
  const idx = inCat.findIndex((c) => c.id === concept.id);
  return {
    prev: idx > 0 ? inCat[idx - 1] : null,
    next: idx < inCat.length - 1 ? inCat[idx + 1] : null,
  };
};

export const searchConcepts = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const rank = (c) => {
    const title = (c.title || '').toLowerCase();
    const tldr = (c.tldr || '').toLowerCase();
    const hook = (c.hook || '').toLowerCase();
    const body = [
      c.title,
      c.hook,
      c.tldr,
      c.definition.join(' '),
      (c.keyPoints || []).join(' '),
      (c.deepDive || []).join(' '),
      (c.glossary || []).map((g) => `${g.term} ${g.def}`).join(' '),
    ].join(' ').toLowerCase();

    // Exact title → best, then title starts-with, then every token in body
    if (title === q) return 4;
    if (title.startsWith(q) || title.includes(q)) return 3;
    if (tokens.every((t) => body.includes(t))) return 2;
    if (tokens.some((t) => body.includes(t))) return 1;
    return -1;
  };
  return concepts
    .map((c) => ({ c, r: rank(c) }))
    .filter((x) => x.r > 0)
    .sort((a, b) => b.r - a.r)
    .map((x) => x.c);
};