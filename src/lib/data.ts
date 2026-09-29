// ---------------------------------------------------------------------------
// Central data layer for the JcBx site.
//
// Everything the site displays reads from here. Right now the values are
// placeholder/sample data you can edit directly. Later, this file (or the
// JSON it could be split into) is the seam where a nightly job — reading
// from Google Sheets or an exported copy of the VS Data workbook — would
// write real numbers, instead of touching every page individually.
// ---------------------------------------------------------------------------

export type AllianceEvent = {
  id: string;
  title: string;
  type: "Server War" | "Black Market" | "Rally" | "Alliance" | "Season";
  start: string; // ISO datetime
  notes?: string;
};

// Edit/replace this list with real dates. The landing-page countdown
// automatically targets whichever entry is soonest in the future.
export const events: AllianceEvent[] = [
  {
    id: "sw-1",
    title: "Server War: JcBx vs. Rival Alliance",
    type: "Server War",
    start: "2026-10-02T19:00:00-04:00",
    notes: "All hands — check #war-callouts on Discord for squad assignments.",
  },
  {
    id: "bm-1",
    title: "Black Market Window Opens",
    type: "Black Market",
    start: "2026-10-05T00:00:00-04:00",
    notes: "Save resources ahead of time — priority list posted in the wiki.",
  },
  {
    id: "rally-1",
    title: "Coordinated Rally Night",
    type: "Rally",
    start: "2026-10-08T20:00:00-04:00",
  },
];

export type RosterHighlight = {
  member: string;
  headline: string;
  detail?: string;
};

// Hall of Fame: morale piece, not raw numbers.
export const hallOfFame: RosterHighlight[] = [
  { member: "Kentucky Cobra", headline: "Founding R5", detail: "Leading since the MTV8 days." },
  { member: "Member Name", headline: "Longest-serving officer", detail: "With the alliance since Season 1." },
  { member: "Member Name", headline: "Biggest single VS contribution", detail: "Season 2, Week 6." },
];

export const memberOfTheWeek: RosterHighlight = {
  member: "Member Name",
  headline: "Member of the Week",
  detail: "Recognized for standout donations and rally turnout this week.",
};

export type JuiceboxHero = {
  superlative: string;
  commander: string;
};

// Weekly superlatives — just the title and who earned it, no scores or raw
// numbers (public page). Sourced from Corbett's weekly VS analysis.
export const juiceboxHeroes: JuiceboxHero[] = [
  { superlative: "\uD83C\uDFC6 Top Point Earner", commander: "\uD638\uBC15\uCC2C" },
  { superlative: "\uD83D\uDE80 Most Improved \u2014 Points", commander: "JQuez" },
  { superlative: "\uD83D\uDCB0 Donation Leader", commander: "XbreezyX" },
  { superlative: "\u2694\uFE0F Kill Leader", commander: "\uD638\uBC15\uCC2C" },
  { superlative: "\uD83D\uDD25 Triple Threat", commander: "StevenMick" },
];

export type LeadershipRole = {
  emoji: string;
  title: string;
  subtitle?: string;
  // Who currently holds this role — fed live from the "LEADERS - How We
  // Operate" tab in the Site Feed Sheet (see sheet-feed.ts). Empty/omitted
  // here since the Sheet is the source of truth; only used as a fallback.
  owners?: string[];
  responsibilities: string[];
  specificTasks?: string[];
};

// JcBx leadership structure: R5 + the R4 verticals, each with their
// Responsibilities and (where applicable) Specific Tasks.
export const leadershipStructure: LeadershipRole[] = [
  {
    emoji: "\uD83D\uDC51",
    title: "R5",
    subtitle: "Leader / Strategic Command",
    responsibilities: [
      "Set overall alliance vision and goals",
      "Make final decisions on strategy, structure, and direction",
      "Oversee all verticals (Warlord, Recruiter, Muse, Butler)",
      "Resolve conflicts within leadership or members",
      "Manage diplomacy (alliances, mergers, external relations)",
      "Ensure long-term growth and stability of the alliance",
      "Delegate responsibilities effectively to R4 leads",
      "Trust vertical leaders to execute within their roles",
      "Step in during critical moments (wars, major decisions)",
      "Provide guidance and feedback to R4 leadership",
      "Maintain visibility and presence within the alliance",
      "Reinforce culture, expectations, and accountability",
    ],
  },
  {
    emoji: "\u2694\uFE0F",
    title: "Warlord",
    responsibilities: [
      "Define overall war strategy and priorities",
      "Assign targets and coordinate timing",
      "Make real-time decisions during battles (DS & Warzone Duel)",
      "Communicate clear instructions to alliance",
      "Help execute assigned targets",
      "Reinforce communication during battles",
      "Monitor participation and report gaps",
      "Step in when needed",
    ],
    specificTasks: [
      "Desert Storm Assignments \u2014 send out team signups vote, manage teams, map assignments, and DS strategy",
      "Set Ziege/Marshall's Guard",
      "Reminder announcements for Enemy Server & Enemy Buster",
      "NAP violation enforcement & conflict/resolution",
      "Opposition scouting",
      "Primary Attack Rally Leadership",
      "Member Growth / 1-on-1 Coaching",
    ],
  },
  {
    emoji: "\uD83C\uDFAF",
    title: "Recruiter",
    responsibilities: [
      "Lead recruitment strategy and standards",
      "Approve or reject new members",
      "Maintain alliance roster strength",
      "Coordinate onboarding process",
      "Scout potential recruits",
      "Assist with onboarding new members",
      "Monitor inactivity and flag issues",
      "Help maintain member engagement early on",
    ],
    specificTasks: [
      "Post recruitment in World Chat",
      "Interview applicants",
      "Manage new additions and go over expectations",
      "Provide Discord links",
      "Assign mentorship as needed",
    ],
  },
  {
    emoji: "\uD83C\uDFAD",
    title: "Muse",
    responsibilities: [
      "Drive alliance culture and engagement",
      "Run events, awards, and announcements",
      "Maintain positive morale",
      "Ensure new members feel welcomed",
      "Set Donation Recommendations",
      "Assist with posts, shoutouts, and events",
      "Help welcome and guide new players",
      "Encourage chat participation",
      "Support morale during wins/losses",
    ],
    specificTasks: [
      "VS push schedule & announcements",
      "Profile Picture Contest / Spin the Wheel",
      "Train Schedule & Award Announcements",
      "Hive Coordination (shared with Butler)",
    ],
  },
  {
    emoji: "\uD83E\uDDF9",
    title: "Butler",
    responsibilities: [
      "Oversee operations and scheduling",
      "Track participation and activity",
      "Send reminders and enforce expectations",
      "Identify gaps and escalate to leadership",
      "Assist with tracking attendance",
      "Send reminders for events",
      "Monitor player activity",
      "Support organizational tasks",
    ],
    specificTasks: [
      "Set Donation Recommendations",
      "Daily Briefing Mail",
      "Create meeting agenda",
      "Schedule meetings",
      "Tracking Points/Kills/Data aggregation/analysis",
      "Strategic Data Analysis",
      "Educational Tips & Tricks / Graphics",
      "Hive Coordination (shared with Muse)",
    ],
  },
  {
    emoji: "\uD83E\uDD1D",
    title: "Liaison / Secretary",
    responsibilities: [
      "Direct report to R5",
      "Create contacts within allied alliances",
      "Manage documentation",
      "Coordinate meetings between leaders of alliances",
      "Coordinate strategies amongst season allies",
    ],
    specificTasks: [
      "Land Capture / Seasonal Event Coordination",
      "Alliance Furnace",
    ],
  },
];

export type ExternalResource = {
  title: string;
  url: string;
  description: string;
};

export const externalResources: ExternalResource[] = [
  {
    title: "Last War: Survival Game Calculators",
    url: "https://cpt-hedge.com/calculators",
    description:
      "Complete collection of calculators and tools to optimize your gameplay in Last War: Survival. From hero progression to base management to overlord, find the resources you need to dominate the warzone.",
  },
  {
    title: "Squad & Hero Tier Lists",
    url: "https://lwatlas.com/squad-meta?season=3&army=all",
    description:
      "Based on combat squads observed marching over the last 30 days \u2014 popularity, not win-rate.",
  },
  {
    title: "LastWarTutorial.com",
    url: "https://www.lastwartutorial.com/",
    description:
      "The ultimate unofficial guides for Last War: Survival Game. Comprehensive guides, tips and strategies covering all seasons.",
  },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  { question: "How do I join JcBx?", answer: "Reach out through our Discord — see the New Member Guide for the invite link." },
  { question: "What are the activity requirements?", answer: "Details are maintained by the Activity & Compliance officer — see How We Operate." },
  { question: "Where do I find event times?", answer: "Check the Event Calendar page — all times are shown in your local timezone." },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date
  summary: string;
  body: string; // plain text / simple markdown-ish paragraphs
  // Optional table rendered below the body (e.g. rankings, standings).
  table?: { head: string[]; rows: string[][] };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "s2-composite-rankings",
    title: "S2 Composite Rankings \u2014 Top 15",
    date: "2026-09-28",
    summary: "Final Season 2 composite contribution rankings for the alliance.",
    body: "Congratulations to the top 15 JcBx commanders in the alliance composite rankings for S2 contribution",
    table: {
      head: ["Commander", "JcBx S2 - Composite Ranking"],
      rows: [
        ["Feras88N", "1"],
        ["\uD638\uBC15\uCC2C", "2"],
        ["IYAOYAS75", "3"],
        ["StevenMick", "4"],
        ["K0Ko", "5"],
        ["Ryker256", "6"],
        ["Kentucky Cobra", "7"],
        ["Pink Fenix", "8"],
        ["\u2661Jjang gu\u2661\uC9F1\uAD6C", "9"],
        ["ZeeSmiter", "10"],
        ["McCurleyGurley", "11"],
        ["Vintonsami1", "12"],
        ["Torn acl", "13"],
        ["RTWODTWO", "14"],
        ["Needatan", "15"],
      ],
    },
  },
  {
    slug: "welcome-to-jcbx",
    title: "Welcome to the new JcBx site",
    date: "2026-09-25",
    summary: "Our alliance now has a home base outside of Discord.",
    body: "This is the first post on the new JcBx site. Use this space for war recaps, merger updates, and announcements going forward.",
  },
];

export type WikiSection = {
  title: string;
  description: string;
  items: { title: string; description: string; href?: string }[];
};

export const wikiSections: WikiSection[] = [
  {
    title: "Getting Started",
    description: "Core guides for new and existing members.",
    items: [
      {
        title: "Hero Building Basics",
        description: "Squad lineups, skill priority order for Tank/Air/Missile, star-up order, and gear crafting + priority.",
        href: "/wiki/hero-building-basics",
      },
      {
        title: "Chip Upgrade Priorities",
        description: "Drone Skill Chips: craft order vs upgrade order, star breakpoints, Chip Lab and Combat Boost targets, and chest timing.",
        href: "/wiki/chip-upgrade-priorities",
      },
    ],
  },
  {
    title: "Season Strategy",
    description: "Season-specific priorities and planning.",
    items: [
      {
        title: "Season 3 - Golden Kingdom Overview",
        description: "Full breakdown of the desert season: resources, buildings, Desert Protectors, the map, and alliance strategy.",
        href: "/wiki/season-3-golden-kingdom",
      },
      {
        title: "Season 3 - Strategy Guide (Growth/Captures/War)",
        description: "Actionable playbook: opening-days growth, Mithril/Sacred Water management, stronghold capture thresholds, Spice War and Faction Duel mechanics.",
        href: "/wiki/season-3-strategy-guide",
      },
      {
        title: "Season 3 Prep",
        description: "Off-season checklist for individuals and for the alliance \u2014 what to stockpile, hero/weapon timing, Week 1 build order, and a 14-day plan.",
        href: "/wiki/season-3-prep",
      },
    ],
  },
  {
    title: "Events",
    description: "How our recurring events work.",
    items: [
      {
        title: "Warzone Duel Guide",
        description: "How the weekly invasion-rights points race works, the Saturday Capitol war, point values, and how to farm reward chests.",
        href: "/wiki/warzone-duel",
      },
      {
        title: "Pre-Season 3 Black Market Priority Guide",
        description: "S/A/B/C buy tiers for the Celebration Black Market \u2014 fund one Exclusive Weapon, skip the farmable filler.",
        href: "/wiki/black-market-priority",
      },
    ],
  },
];

export type RuleSection = {
  emoji: string;
  title: string;
  intro?: string;
  items: string[];
  highlight?: string;
  note?: string;
};

export const newMemberGuide = {
  discordInvite: "https://discord.gg/sn8TF62kn",
  rulesPurpose:
    "To ensure a strong, organized, and competitive alliance through clear expectations, consistent participation, and respectful teamwork.",
  rulesIntro:
    "JcBx is built on consistency, teamwork, and accountability. Every member plays a role in our success.",
  rulesClosing:
    "High point contributions do not override participation standards. Consistent enforcement ensures fairness and long-term alliance success.",
  rules: [
    {
      emoji: "\uD83E\uDDED",
      title: "Core Principles",
      items: [
        "Participation matters more than potential",
        "Consistency over exceptions",
        "Team success over individual performance",
        "Respectful, focused communication",
      ],
    },
    {
      emoji: "\u23F0",
      title: "Activity Expectations",
      items: [
        "Stay active daily whenever possible",
        "Notify leadership if you will be inactive",
        "Missing more than 2 days in a week without communication may result in removal",
        "Regularly missing days without communication will also result in removal",
      ],
    },
    {
      emoji: "\u2694\uFE0F",
      title: "Event Participation",
      intro: "Members are expected to actively participate in:",
      items: [
        "VS (Alliance Duel)",
        "MG (Marshall's Guard)",
        "Zombie Siege / Desert Storm events",
        "Capital Wars / Meteor Events",
        "Seasonal Battles",
        "Warzone Duel",
      ],
      highlight: "Minimum VS contribution: 4 million points",
      note: "Consistent failure to meet participation or point requirements may result in removal.",
    },
    {
      emoji: "\uD83D\uDCAC",
      title: "Communication Standards",
      items: [
        "Keep chat fun, game-related, and respectful",
        "Avoid inappropriate or unrelated topics in alliance chat",
        "Follow leadership direction during events",
      ],
    },
    {
      emoji: "\uD83D\uDC51",
      title: "Leadership Structure",
      items: [
        "R4s manage specific verticals (Warlord, Recruiter, etc.)",
        "Follow strategies and guidance provided by leadership",
        "Reach out if you need clarification or support",
      ],
    },
    {
      emoji: "\u2705",
      title: "Accountability",
      items: [
        "Expectations apply to all members equally",
        "Warnings may be given, but improvement is expected",
        "Failure to meet standards will result in removal",
      ],
    },
  ] as RuleSection[],
  contacts: [
    { area: "General questions / getting started", contact: "Goodvibes" },
    { area: "War strategy", contact: "Koko, Ryker, or \uD638\uBC15\uCC2C" },
    { area: "Hero / gear advice", contact: "Koko or Zeesmiter" },
    { area: "Anything else", contact: "R5 — Kentucky Cobra" },
  ],
};
