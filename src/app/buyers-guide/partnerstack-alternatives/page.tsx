/* eslint-disable @next/next/no-img-element, react/no-unescaped-entities */
import type { Metadata } from "next";
import styles from "./page.module.css";
import { GridBackground } from "@/components/layout/grid-background";
import { Header } from "@/components/layout/header";
import { TopBanner } from "@/components/layout/top-banner";
import { Footer } from "@/components/layout/footer";
import { TableOfContents } from "./table-of-contents";

export const metadata: Metadata = {
  title: "Best PartnerStack Alternatives in 2026 | JazzHQ",
  description:
    "Compare the top PartnerStack alternatives and choose the best one that suits your needs based on pricing, feature sets, and how it fits your partner requirements.",
  alternates: {
    canonical: "/buyers-guide/partnerstack-alternatives",
  },
};

const imageDimensions: Record<string, readonly [number, number]> = {
  "jazzhq": [2048, 1002],
  "mindmatrix": [2048, 1043],
  "kiflo": [2048, 1005],
  "channeltivity": [2048, 1064],
  "salesforce-partner-cloud": [2048, 1027],
  "unifyr": [2048, 1061],
  "introw": [2048, 1064],
  "xamplify": [2048, 1020],
};

type Tool = {
  slug: string;
  name: string;
  label: string;
  bestFor: string;
  intro: string[];
  features: string[];
  pros: string[];
  considerationsLabel: "Cons" | "Things to consider";
  considerations: string[];
  pricing: string[];
  image: string;
  imageAlt: string;
  accent: "purple" | "coral" | "lime" | "yellow";
};

const tools: Tool[] = [
  {
    slug: "jazzhq",
    name: "JazzHQ",
    label: "Best for combining partner software with strategy",
    bestFor:
      "JazzHQ is best for early-to-mid-sized AI and SaaS companies that want to build a partner program from the ground up. It is the right platform if you want help finding partners, designing the program, and running it, without hiring a channel team or stitching together multiple tools.",
    intro: [
      "JazzHQ is a full-stack partner platform built for finding and managing partners. Unlike PartnerStack, it also helps early-stage AI and SaaS companies build a partner program from scratch, with partner recruitment, program strategy, and day-to-day support included. You get the platform and the people to help run it, rather than having to build the program yourself.",
    ],
    features: [
      "Partner marketplace to find agencies, consultants, and resellers already looking for AI and SaaS products.",
      "Partner program design, including strategy, incentives, onboarding, and go-to-market planning.",
      "End-to-end partner management: onboarding, deal registration, MDF, enablement, and incentive payouts.",
      "AI assistant that answers partner questions and automates routine partner admin.",
      "On-demand execution team for events, partner activation, and expansion into new markets.",
      "Partner network across 15+ countries, including India, Europe, LATAM, and Southeast Asia.",
    ],
    pros: [
      "Finds partners for you through its marketplace, instead of assuming you already have them.",
      "Includes program strategy and setup, so you don't need a dedicated channel hire.",
      "Pairs software with a team that runs execution.",
      "Built for AI and SaaS companies, with an advisory arm that shapes the whole program.",
      "No revenue-share fee model like PartnerStack's percentage cut on partner-sourced revenue.",
    ],
    considerationsLabel: "Cons",
    considerations: [
      "Newer platform, so some features and workflows are still being refined.",
      "It’s most useful for teams that are still building or reshaping their partner program, rather than those simply managing an established one.",
    ],
    pricing: ["Pricing is custom."],
    image: "/buyers-guide/partnerstack/jazzhq.png",
    imageAlt: "JazzHQ full-stack AI distribution platform",
    accent: "purple",
  },
  {
    slug: "introw",
    name: "Introw",
    label: "Best for CRM-native partner management without a portal",
    bestFor:
      "Introw is best for HubSpot or Salesforce-centric teams, especially mid-market and startups, that want a fast-to-launch PRM their partners will actually use.",
    intro: [
      "Introw is a PRM built around the idea that partners shouldn't have to log into a separate portal. It's CRM-native and headless, so your partners can work from HubSpot, Salesforce, Slack, Teams, email, or even an AI assistant like Claude or ChatGPT.",
      "Everything syncs back to your CRM in real time. That makes it a strong PartnerStack alternative for teams who found partner adoption low. Instead of chasing partners to use a tool, you meet them where they already work.",
    ],
    features: [
      "CRM-native two-way sync with HubSpot and Salesforce.",
      "No-code branded partner portal with deal and lead registration, shared pipeline, and real-time co-selling.",
      "Headless collaboration. Partners can register deals and get answers from Slack, Teams, email, or an AI assistant without logging in.",
      "AI features include deal coaching, a 24/7 partner support agent, channel conflict resolution, and QBR prep.",
      "MCP integration with Claude, ChatGPT, and Gemini, so partners can work from their own AI tools.",
    ],
    pros: [
      "Partners work from tools they already use, which drives higher adoption than a standalone portal.",
      "Deeper two-way CRM sync with HubSpot and Salesforce than PartnerStack's integrations.",
      "Faster setup, most teams launch in days to a few weeks.",
      "No revenue-share cut on partner-sourced revenue, unlike PartnerStack's percentage model.",
    ],
    considerationsLabel: "Things to consider",
    considerations: [
      "Reporting and dashboard customization could go deeper, a common note in reviews.",
      "It leans heavily on your CRM, so a messy or poorly maintained CRM causes problems.",
      "Some navigation and workflow customization limitations.",
      "Native account mapping could be limited.",
    ],
    pricing: [
      "There's a free Starter plan for 1 partner.",
      "Paid plans (Pro, Scale, Enterprise) are tier-based on the number of partners you manage and quote-based.",
      "Some features like MDF, CPQ, affiliate, LMS are add-ons.",
    ],
    image: "/buyers-guide/partnerstack/introw.png",
    imageAlt: "Introw agentic partnership management platform",
    accent: "yellow",
  },
  {
    slug: "kiflo",
    name: "Kiflo",
    label: "Best for turning a partner ecosystem into pipeline",
    bestFor:
      "Kiflo is best for SMB and mid-market SaaS teams launching or scaling their first serious partner program that wants the full PRM toolkit plus account mapping at a transparent price.",
    intro: [
      "Kiflo now calls itself a partner revenue platform, more than a PRM. It does the core PRM work (onboarding, deal registration, commissions) and then connects it to your sales pipeline through account mapping and co-selling. It ties partner activity directly to the target accounts your sales team is already chasing, so partnerships prove revenue.",
    ],
    features: [
      "Partner management for onboarding, partner portal, resource sharing, lead and deal registration, and program tiers.",
      "Account mapping lets you see which partners overlap with your target accounts, prospects, and open opportunities.",
      "Spot which partner can open or influence a live deal, then track intros with sales using Co-Selling.",
      "Automatic commission calculation, including multi-tier, with revenue synced from Stripe and Chargebee.",
      "Native two-way HubSpot and Salesforce integration, plus Zapier and API for other CRMs.",
    ],
    pros: [
      "Transparent public pricing starting at $399/month.",
      "No revenue-share cut on partner-sourced revenue, so cost stays predictable as you grow.",
      "Account mapping and co-selling built in.",
      "Fast setup, Kiflo says teams deploy in days, along with instant self-onboarding.",
    ],
    considerationsLabel: "Things to consider",
    considerations: [
      "Commission payouts run through Stripe or manual triggers rather than a native payout engine.",
      "Integration breadth is narrower than PartnerStack's for complex stacks.",
      "The Core plan caps at 50 partners, so larger programs need to move to a quote-based Plus plan.",
    ],
    pricing: [
      "There is a 14-day free trial.",
      "The Core plan starts at $399/month for up to 25 partners (scales with active partners, capped at 50).",
      "Plus and Premier plans are quote-based.",
    ],
    image: "/buyers-guide/partnerstack/kiflo.png",
    imageAlt: "Kiflo partner revenue platform",
    accent: "coral",
  },
  {
    slug: "mindmatrix",
    name: "Mindmatrix",
    label: "Best for combining PRM with partner marketing",
    bestFor:
      "Mindmatrix is best for companies running co-branded, localized marketing through partners at scale, across resellers, MSPs, dealers, and distributors, that want PRM, TCMA, and enablement in one platform.",
    intro: [
      "Mindmatrix is one of the oldest players in the space, running since 1998. Its AI platform, Bridge, is an AI-powered partner operating system that combines PRM, partner marketing automation (TCMA), channel sales enablement, and ecosystem orchestration.",
      "Its biggest strength is partner marketing. Mindmatrix turns a single corporate campaign into thousands of localized, co-branded partner campaigns, and its team can run those campaigns (as a concierge service) for partners who don't have the time.",
    ],
    features: [
      "Next-gen PRM with partner onboarding, deal registration, tiering, multi-partner deal workflows, and pipeline visibility.",
      "No separate LMS needed. Channel sales enablement is built in with training, certifications, guided selling, sales plays, and content management.",
      "Predictive insights, automated language translation, generative content, a 24/7 conversational assistant, and admin automation across the platform with Bridge AI.",
      "Marketplace and solution locators to match customer needs with the right partners.",
    ],
    pros: [
      "Combines PRM and partner marketing (TCMA) in one platform.",
      "Concierge execution.",
      "Handles multiple partner types (resellers, ISVs, alliances, influencers).",
      "Strong multilingual and localization support for global partner networks.",
      "Mature and stable, with 25+ years behind it and enterprise clients like Lenovo, Adobe, and ADP.",
    ],
    considerationsLabel: "Cons",
    considerations: [
      "Steeper learning curve than lighter PRM tools for new users. Its breadth is sometimes also its friction.",
      "Broader, heavier implementation than a simple portal tool. Some users would like a bit more in depth training experience for admin users.",
      "Some customization workflows could be more intuitive.",
    ],
    pricing: ["You can book a demo to get started.", "Pricing is custom."],
    image: "/buyers-guide/partnerstack/mindmatrix.png",
    imageAlt: "Mindmatrix Bridge partner operating system",
    accent: "purple",
  },
  {
    slug: "salesforce-partner-cloud",
    name: "Salesforce Partner Cloud",
    label: "Best for teams already on Salesforce",
    bestFor:
      "Salesforce Partner Cloud is best for mid-market and enterprise teams already standardized on Salesforce that want partner management unified with their CRM and have the budget and admin resources to run it.",
    intro: [
      "Salesforce PRM is now part of Partner Cloud, Salesforce's umbrella for partner management. It's built natively on Sales Cloud and Experience Cloud, so it isn't a separate partner system, it's an extension of the CRM your sales team already uses. Partners get a branded portal with access to deals, leads, training, and resources, and all of it runs on the same records as your direct sales.",
      "If Salesforce already sits at the center of your sales operation, Partner Cloud keeps partner data in the same place as everything else, with no second system to sync. The tradeoff is that it only makes sense if you're already a Salesforce shop, and it takes real setup to get running.",
    ],
    features: [
      "AI-assisted collaboration through Einstein, Agentforce, and Slack for partner support and guided selling.",
      "Partner onboarding, training, and enablement tools built into the portal.",
      "Channel Revenue Management and Partner Ecosystem Management add-ons for MDF, rebates, incentives, and referrals.",
      "Enterprise-grade security, governance, and partner access controls.",
    ],
    pros: [
      "Native to Salesforce, so partner data lives in the same CRM as direct sales, with no syncing.",
      "Deep customization and scale for complex, multi-tier partner programs.",
      "Strong AI through Einstein and Agentforce, plus Slack collaboration.",
      "Familiar to teams already running on Salesforce, which eases internal adoption.",
      "Backed by the AppExchange ecosystem of add-ons and consultants.",
    ],
    considerationsLabel: "Things to consider",
    considerations: [
      "Complex setup that usually needs a Salesforce admin or paid implementation partner.",
      "The total cost runs well above the $25 headline once you add Sales Cloud, add-ons, and implementation.",
      "Only makes sense if you're already on Salesforce.",
      "Reporting can feel counterintuitive, and small changes often require admin support.",
    ],
    pricing: [
      "Because it's member-based, there's no free trial, but you can test in a sandbox or through a Salesforce workshop.",
      "PRM starts at $25 per member/month.",
      "Partner Ecosystem Management is $50 per member/month. Both are add-ons that require a separate Sales Cloud subscription, so the real cost is higher.",
      "Login-based pricing is also available.",
    ],
    image: "/buyers-guide/partnerstack/salesforce-partner-cloud.png",
    imageAlt: "Salesforce Partner Cloud",
    accent: "yellow",
  },
  {
    slug: "channeltivity",
    name: "Channeltivity",
    label: "Best for a quick, structured channel program",
    bestFor:
      "Channeltivity is best for mid-market and high-growth B2B tech companies (including manufacturing and hardware) that want a full-featured partner portal deployed quickly, with solid Salesforce and HubSpot integration and without enterprise complexity.",
    intro: [
      "Channeltivity is a cloud-based PRM for B2B tech companies that want a full partner portal without enterprise complexity. It covers the core channel work, partner recruitment, deal registration, a self-serve partner portal, and performance analytics, and is popular with technology, manufacturing, and hardware companies. Dedicated Salesforce and HubSpot editions make CRM integration one of its strengths.",
      "Speed and fit are the biggest differentiators here. The platform is built to scale from a first program (around 100 partners) up to global channel networks.",
    ],
    features: [
      "Partner recruitment with partner scoring, application workflows, and tiered onboarding paths.",
      "Deal registration with real-time pipeline visibility and deal protection to reduce channel conflict.",
      "Branded self-serve partner portal for collateral, training, and progress tracking.",
      "Native integrations with Salesforce, HubSpot, and Microsoft Dynamics 365, plus Zapier, Zoho, NetSuite, and SAP.",
    ],
    pros: [
      "Strong, responsive support.",
      "Solid native Salesforce and HubSpot integration through dedicated editions.",
      "Configurable in real time, admins can build modules and reports themselves.",
      "Enterprise security: SOC 2, GDPR and a 99.50% uptime SLA.",
    ],
    considerationsLabel: "Things to consider",
    considerations: [
      "Limited deep customization for complex partner programs, especially for partner groups and deal custom fields.",
      "Reporting and dashboard flexibility could go further.",
      "A small learning curve at the start for beginners.",
      "Not an AI-native platform, so it competes on simplicity rather than AI features.",
    ],
    pricing: [
      "You can book a demo and talk to their sales team.",
      "Pricing is quote-based.",
      "Channeltivity offers three tiers: Growth, Mid-Market, Enterprise.",
    ],
    image: "/buyers-guide/partnerstack/channeltivity.png",
    imageAlt: "Channeltivity channel management platform",
    accent: "coral",
  },
  {
    slug: "xamplify",
    name: "xAmplify",
    label: "Best for AI-native PRM without a revenue-share fee",
    bestFor:
      "xAmplify is best for channel and reseller teams that want an AI-driven PRM with TCMA built in and a free path to start.",
    intro: [
      "xAmplify is an AI-powered PRM built around its AI engine, Oliver AI. It combines partner management, through-channel marketing (TCMA), and deal registration in one platform. It offers real channel/reseller PRM features, an AI layer, and no percentage cut on partner-sourced revenue.",
      "It also positions on cost and access. xAmplify offers an open-source, self-hosted PRM edition for free, plus paid plans that scale by partner count.",
    ],
    features: [
      "Oliver AI acts proactively across partner matching, predictive deal scoring, MDF ROI attribution, and AI-generated marketing content.",
      "TCMA for co-branded campaigns, partner microsites, and lead capture.",
      "AI led Co-sell and revenue tools with predictive pipeline insights, partner attribution, and risk alerts.",
      "MCP-native integrations connecting CRM, ERP, and comms (Slack, Teams, email) through Oliver AI.",
    ],
    pros: [
      "AI built into every workflow through Oliver AI.",
      "Supports all partner types (reseller, referral, VAR, distribution).",
      "Combines PRM and TCMA in one platform.",
      "A free open-source, self-hosted edition for teams that want to start without paying.",
    ],
    considerationsLabel: "Things to consider",
    considerations: [
      "Email and landing page customization can feel limited in some workflows.",
      "The open-source edition is self-hosted, which requires technical setup rather than a plug-and-play free tier.",
      "Reporting could use deeper filters and more granular insights.",
    ],
    pricing: [
      "The free trial is in the form of a free, self-hosted open-source PRM edition. No credit card required, but it needs technical setup.",
      "Pricing is custom for the paid plans (Aspire, Advance, Amplify).",
    ],
    image: "/buyers-guide/partnerstack/xamplify.png",
    imageAlt: "xAmplify AI-powered partner ecosystem platform",
    accent: "yellow",
  },
  {
    slug: "unifyr",
    name: "Unifyr",
    label: "Best for combining PRM with through-channel marketing",
    bestFor:
      "Unifyr is best for mid-market and enterprise channel programs that want PRM, through-channel marketing, and partner training unified in one mature platform.",
    intro: [
      "Unifyr is the platform formerly known as Zift Solutions (its product was ZiftONE). It's an AI-native PRM that brings partner management, through-channel marketing (TCMA), and a built-in learning management system into one platform.",
      "With more than 20 years behind it, it's aimed at established channel programs that want partner management and partner marketing in the same place rather than in separate tools.",
    ],
    features: [
      "Control and filter content by user, campaigns and partner type, and build custom pages with unique URLs and brand style.",
      "Built-in learning management system (LMS) for partner onboarding, courses, and certifications.",
      "MDF, co-op funds, SPIFFs, and rebates with tier-aware delivery and ROI tracking.",
      "Onboarding agents, campaign recommendations, and a partner-facing assistant with Unifyr IQ agentic AI.",
    ],
    pros: [
      "Built-in LMS for partner training and certification.",
      "Handles the full channel motion (resellers, VARs, MSPs, distributors).",
      "Strong multilingual support (English, German, Japanese, Chinese, Korean) for global programs.",
    ],
    considerationsLabel: "Things to consider",
    considerations: [
      "Complex to implement for large, tiered channel structures.",
      "Built for established mid-market and enterprise channels, so it can be heavier than a small team needs.",
    ],
    pricing: ["You can book a demo to get started.", "Paid plans are custom."],
    image: "/buyers-guide/partnerstack/unifyr.png",
    imageAlt: "Unifyr agentic partner experience platform",
    accent: "lime",
  },
];

const quickAlternatives = [
  [
    "JazzHQ",
    "A full-service partner relationship management platform that brings together a partner marketplace and partner OS with strategy and execution, so you can build the program together.",
  ],
  [
    "Introw",
    "A CRM-native PRM that lets partners work from HubSpot, Salesforce, Slack, or email instead of a separate portal, with a branded partner portal you can launch quickly.",
  ],
  [
    "Kiflo",
    "An affordable, easy-to-use partner platform for referral, reseller, and affiliate programs, with account mapping and co-selling built in and transparent pricing.",
  ],
  [
    "Mindmatrix",
    "A partner operating system that unifies PRM, partner marketing (TCMA), and enablement, with strong co-branded campaign automation and concierge execution services.",
  ],
  [
    "Salesforce Partner Cloud",
    "Partner management built natively on Salesforce, giving partners a branded portal with live CRM data, deal registration, and AI-assisted collaboration.",
  ],
  [
    "Channeltivity",
    "A cloud-based PRM for growing B2B tech companies that offers a self-service partner portal, deal registration, and MDF, with dedicated Salesforce and HubSpot editions.",
  ],
  [
    "xAmplify",
    "An AI-native PRM that combines partner management, through-channel marketing, and deal registration in one platform, with no revenue-share fee on partner-sourced sales.",
  ],
  [
    "Unifyr",
    "An AI-native PRM (formerly Zift) that combines partner management, through-channel marketing, and a built-in LMS in one platform, built for established reseller and channel programs.",
  ],
];

const comparison = [
  ["JazzHQ", "Building a partner program from scratch", "Partner marketplace, AI Partner OS, done-for-you setup", "Custom"],
  ["Introw", "CRM-first teams wanting high partner adoption", "CRM-native headless portal, no-code deal registration, AI agents (Claude/ChatGPT/Gemini)", "Custom"],
  ["Kiflo", "An affordable first partner program", "Partner management, account mapping, co-selling, commission automation", "From $399/mo (25 partners), guided POC"],
  ["Salesforce Partner Cloud", "Teams already on Salesforce", "CRM-native branded portal, deal registration, Einstein/Agentforce AI", "From $25/member/mo + Sales Cloud"],
  ["Mindmatrix", "Marketing-heavy partner programs", "PRM + TCMA, concierge campaign execution, BridgeAI, built-in LMS", "Custom"],
  ["Channeltivity", "A fast, structured mid-market channel program", "Partner recruitment, deal registration, self-serve portal, analytics", "Custom"],
  ["xAmplify", "AI-native PRM without a revenue-share fee", "Oliver AI, PRM + TCMA, deal registration, MDF tracking", "Free open-source (self-hosted), Custom paid plans"],
  ["Unifyr", "Established channels that market through partners", "PRM + TCMA, built-in LMS, MDF/co-op funds, Unifyr IQ agentic AI", "Custom"],
];

const criteria = [
  {
    title: "Flexible Reporting and Analytics",
    text: "Don’t settle for a dashboard that simply shows you numbers. You want to be able to slice performance by partner, tier, or account, build the views your team actually needs, and export the underlying data. Reporting depth varies a lot across platforms, so this is worth testing before you commit.",
  },
  {
    title: "Streamlined Partner Payouts",
    text: "Look beyond commission calculations. Check the payment methods, currencies, payout timing, and how much of the process is actually handled by the platform. Some tools calculate commissions but still send you to Stripe or manual workflows to complete the payment.",
  },
  {
    title: "Bi-directional CRM integrations",
    text: "A Salesforce or HubSpot logo on an integrations page doesn’t tell you enough. The important question is whether the platform can sync data both ways and keep your CRM and partner activity aligned. If your revenue team lives in the CRM, treat this as a must-have.",
  },
  {
    title: "Manageable Implementation",
    text: "PartnerStack can take around 74 days to go live. That may be perfectly reasonable for a larger team, but it’s a different story when you’re running partnerships without a dedicated channel hire. Compare the actual implementation work and support needed, not just how quick the demo makes it look.",
  },
  {
    title: "Built for Your Partner Model",
    text: "This is the first question you should ask. Are you running affiliates and referrals, or are you building a reseller, VAR, MSP, or broader channel program? PartnerStack is strongest around affiliate and referral programs, while other platforms go deeper into channel and reseller models. Pick based on the motion you’re actually trying to build.",
  },
];

const faqs = [
  {
    q: "Which PartnerStack alternative is best for small/early-stage teams?",
    a: "That again depends on what your requirements are. For smaller teams starting out from scratch or those who need a partner management platform and the marketplace along with training all in one platform, JazzHQ is worth a try. If your partner motion focuses on co-selling and partner relationship management (PRM), Kiflo and Introw are good options too.",
  },
  {
    q: "Can I run both an affiliate program and a reseller/partner program on one platform?",
    a: "Yes, you can. You just need the right platform for that. If you look at it, JazzHQ brings partner discovery, onboarding, deal registration, MDF, incentives, and partner management into one platform. And mainly the platform is designed for companies managing different partner motions in one place, including reseller, agency, and channel relationships.",
  },
  {
    q: "Is JazzHQ a good alternative to PartnerStack?",
    a: "Yes, it is. While PartnerStack is a well-established platform with its own benefits, it is not something that fits everyone’s requirements. PartnerStack gives you a platform to manage affiliate and referral partners you recruit yourself. JazzHQ pairs the software with a team that designs the program, recruits partners from its marketplace, and helps run the day-to-day. So if you don't know where to start, JazzHQ solves something PartnerStack assumes you've already figured out.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function CheckIcon() {
  return <span className={styles.check}>✓</span>;
}

export default function PartnerStackAlternativesPage() {
  return (
    <GridBackground>
      <a className={styles.skipLink} href="#guide-content">Skip to guide</a>
      <TopBanner />
      <Header fullNavigation />
      <main className={styles.page} id="guide-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>BUYER'S GUIDE <span>2026</span></div>
          <h1><span>Best PartnerStack</span><span>Alternatives in 2026</span></h1>
          <p>
            PartnerStack is a strong option when your main goal is to run affiliate and referral programs at scale. It has been in the market for more than 10 years, has a huge partner network, and takes care of commission tracking and payouts.
          </p>
          <div className={styles.heroMeta}>
            <span>8 alternatives compared</span>
            <span>•</span>
            <span>Features, best fit & pricing</span>
            <span>•</span>
            <span>2026 buyer guide</span>
          </div>
        </div>

        <aside className={styles.heroCard}>
          <div className={styles.heroCardTop}>
            <span className={styles.heroCardKicker}>Why look beyond PartnerStack?</span>
          </div>
          <h2>Requirements change when your partner motion moves beyond affiliates.</h2>
          <p>
            Pricing can climb quickly once revenue-share fees are added, while reporting and customization may not give every team the level of control they need. You may also want a platform built more specifically for reseller and channel programs rather than an affiliate-first model.
          </p>
          <a href="#key-takeaways" className={styles.inlineArrow}>See the alternatives <span>↓</span></a>
        </aside>
      </section>

      <section className={styles.quickBand}>
        <div>
          <strong>What this guide covers</strong>
          <span>Top features · who each tool is best suited for · what you can expect to pay</span>
        </div>
      </section>

      <div className={styles.layout}>
        <TableOfContents vendors={tools.map(({ slug, name }) => ({ slug, name }))} />

        <article className={styles.article}>
          <section className={styles.introBlock}>
            <p className={styles.lede}>
              Here is a list of the top PartnerStack alternatives worth considering, compared by their top features, who they’re best suited for, and what you can expect to pay.
            </p>
          </section>

          <section id="key-takeaways" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>01</span>
              <div>
                <p>KEY TAKEAWAYS</p>
                <h2>PartnerStack Alternatives at a Glance</h2>
              </div>
            </div>

            <div className={styles.noteCard}>
              <strong>A quick note!</strong>
              <p>This isn’t a ranked list. Take a look at what each option offers, try the ones that fit your needs, and see which one feels right for your partner program.</p>
              <p>That said, we want to show you how we made these picks so you can compare them for yourself and make the call.</p>
            </div>

            <p className={styles.listIntro}>Here’s what we looked at:</p>
            <div className={styles.criteriaMiniGrid}>
              {[
                "Who is each alternative best suited for?",
                "What does it offer that PartnerStack doesn’t?",
                "How easy is it to set up and manage?",
                "How well does it fit with your existing tech stack?",
                "Does the pricing make sense for what you need?",
              ].map((item) => (
                <div key={item}><CheckIcon /> {item}</div>
              ))}
            </div>

            <div className={`${styles.tableShell} ${styles.quickTable}`}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Tool</th>
                    <th scope="col">Why it's a PartnerStack alternative</th>
                  </tr>
                </thead>
                <tbody>
                  {quickAlternatives.map((row) => (
                    <tr key={row[0]}>
                      <td><strong>{row[0]}</strong></td>
                      <td data-label="Best for">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="picks" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>02</span>
              <div>
                <p>THE SHORTLIST</p>
                <h2>8 PartnerStack alternatives worth considering</h2>
              </div>
            </div>

            <div className={styles.jumpGrid}>
              {tools.map((tool, i) => (
                <a href={`#${tool.slug}`} key={tool.slug} className={styles.jumpCard}>
                  <span className={styles.jumpNumber}>{String(i + 1).padStart(2, "0")}</span>
                  <div className={styles.jumpCopy}>
                    <div className={styles.jumpTitle}><strong>{tool.name}</strong>{tool.slug === "jazzhq" && <span className={styles.cardBadge}>Our platform</span>}</div>
                    <span className={styles.jumpDescription}>{tool.label}</span>
                  </div>
                  <span className={styles.jumpArrow} aria-hidden="true">→</span>
                </a>
              ))}
            </div>

          </section>

          {tools.map((tool, i) => (
            <section id={tool.slug} className={`${styles.toolSection} ${styles[`${tool.accent}Edge`]}`} key={tool.slug}>
              <div className={styles.toolTopline}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{tool.label}</p>
              </div>
              <div className={styles.toolTitleRow}>
                <h2>{tool.name}</h2>
                {tool.name === "JazzHQ" && <span className={styles.ourPick}>OUR PLATFORM</span>}
              </div>

              <div className={styles.toolIntro}>
                {tool.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className={styles.toolImageWrap}>
                <img src={tool.image} alt={tool.imageAlt} className={styles.toolImage} width={imageDimensions[tool.slug][0]} height={imageDimensions[tool.slug][1]} loading="lazy" />
              </div>
              <div className={styles.bestForLong}>
                <span>BEST FOR</span>
                <p>{tool.bestFor}</p>
              </div>

              <div className={styles.detailGrid}>
                <div className={styles.detailBlock}>
                  <h3>Key features</h3>
                  <ul>{tool.features.map((x) => <li key={x}><CheckIcon /> <span>{x}</span></li>)}</ul>
                </div>
                <div className={`${styles.detailBlock} ${styles.pricingBlock}`}>
                  <h3>Pricing</h3>
                  <ul>{tool.pricing.map((x) => <li key={x}><span className={styles.dot}>•</span><span>{x}</span></li>)}</ul>
                </div>
                <div className={`${styles.detailBlock} ${styles.prosBlock}`}>
                  <h3>Pros ({tool.name} vs PartnerStack)</h3>
                  <ul>{tool.pros.map((x) => <li key={x}><CheckIcon /> <span>{x}</span></li>)}</ul>
                </div>
                <div className={`${styles.detailBlock} ${styles.consBlock}`}>
                  <h3>{tool.considerationsLabel}</h3>
                  <ul>{tool.considerations.map((x) => <li key={x}><span className={styles.dot}>•</span><span>{x}</span></li>)}</ul>
                </div>

              </div>

              {tool.slug === "jazzhq" && <div className={styles.jazzCta}>
                <p>Find partners, design the program, and run it in one place.</p>
                <a href="#" className={styles.contextualLink}>Explore JazzHQ <span aria-hidden="true">↗</span></a>
              </div>}
            </section>
          ))}

          <section id="comparison" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>03</span>
              <div>
                <p>SIDE BY SIDE</p>
                <h2>A Side-by-Side Comparison of the Best PartnerStack Alternatives</h2>
              </div>
            </div>

            <div className={styles.tableShell}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Tool</th>
                    <th scope="col">Best For</th>
                    <th scope="col">Top Features</th>
                    <th scope="col">Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row[0]}>
                      <td><strong>{row[0]}</strong></td>
                      <td data-label="Best for">{row[1]}</td>
                      <td data-label="Top features">{row[2]}</td>
                      <td data-label="Pricing">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="how-to-choose" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>04</span>
              <div>
                <p>BUYING CRITERIA</p>
                <h2>What to Look for in a PartnerStack Alternative?</h2>
              </div>
            </div>

            <p className={styles.sectionIntro}>When you compare PartnerStack alternatives, start with the things that will actually affect how your team runs the program.</p>
            <p className={styles.sectionIntro}>A few areas we would check first:</p>

            <div className={styles.criteriaGrid}>
              {criteria.map((item, i) => (
                <div key={item.title} className={styles.criteriaCard}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className={styles.lastThing}>
              <strong>And one last thing.</strong>
              <p>Don’t assume an alternative is automatically better. Some will give you stronger reporting, others a faster setup, and payout options can vary widely. Use these five areas to test each platform against what your program actually needs.</p>
            </div>
          </section>

          <section id="verdict" className={styles.verdict}>
            <div className={styles.sectionHeadingLight}>
              <span className={styles.sectionNumberLight}>05</span>
              <div>
                <p>WHICH ONE FITS?</p>
                <h2>Which PartnerStack Alternative Fits You Best?</h2>
              </div>
            </div>

            <div className={styles.verdictCopy}>
              <p>When you’re moving away from PartnerStack, the right choice really comes down to what you need the platform to do for you.</p>
              <p><strong>JazzHQ</strong> is the one you can look at first if you’re starting a partner program from scratch and need help finding partners, setting up the program, and getting it running.</p>
              <p>If you already have a partner program and want the platform to fit more closely into your existing sales setup, <strong>Introw, Kiflo, and Channeltivity</strong> are worth looking at. Introw is especially suited to HubSpot and Salesforce teams, while Kiflo is a good fit for SaaS teams that want account mapping and co-selling without enterprise complexity.</p>
              <p>For larger, more established channel programs, <strong>Mindmatrix, Salesforce Partner Cloud, and Unifyr</strong> make more sense. They go further into areas like partner marketing, enablement, multi-tier channels, and enterprise CRM workflows.</p>
            </div>

            <p className={styles.verdictCloser}>So don’t pick based on the longest feature list. Start with the partner motion you’re trying to build, then see which platform fits it best.</p>
          </section>

          <section id="faq" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>06</span>
              <div>
                <p>FAQS</p>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className={styles.faqList}>
              {faqs.map((item, i) => (
                <details key={item.q} className={styles.faqItem} open={i === 0}>
                  <summary><span>{i + 1}. {item.q}</span><b>+</b></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <section id="guide-cta" className={styles.endCta} aria-labelledby="guide-cta-title">
            <div><p className={styles.ctaEyebrow}>BUILD YOUR PARTNER PROGRAM</p>
              <h2 id="guide-cta-title">Find partners, design the program, and run it in one place.</h2>
            </div>
            <a href="#" className={styles.primaryButton}>Explore JazzHQ <span aria-hidden="true">→</span></a>
          </section>
        </article>
      </div>

      </main>
      <Footer fullNavigation />
    </GridBackground>
  );
}
