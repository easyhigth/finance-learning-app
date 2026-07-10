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
  return concepts.filter((c) => {
    const haystack = [
      c.title,
      c.hook,
      c.tldr,
      c.definition.join(' '),
      (c.keyPoints || []).join(' '),
      (c.glossary || []).map((g) => g.term).join(' '),
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });
};