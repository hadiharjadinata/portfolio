export type CaseOption = {
  title: string;
  detail: string;
  chosen?: boolean;
};

export type CaseMetric = {
  label: string;
  value: string;
  description?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  year: string;
  role: string;
  featured?: boolean;
  tags: string[];
  overview: string[];
  problem: string[];
  constraints: string[];
  discovery: string[];
  options: CaseOption[];
  decision: string[];
  execution: string[];
  impact: string[];
  metrics: CaseMetric[];
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "dobby",
    title: "Dobby",
    category: "Internal Competitive Intelligence Platform",
    summary:
      "A platform that turns competitor pricing data into monitored, queryable signals the pricing and product teams can act on without waiting on analysts.",
    year: "2025–2026",
    role: "Product Manager — owned strategy, roadmap, and delivery end to end.",
    featured: true,
    tags: ["Platform", "Data Products", "Automation", "Internal Tools"],
    overview: [
      "Competitive Intelligence started as a set of one-off analyses. Every question about how our prices compared to competitors required an analyst to pull data, reconcile mismatched hotel identities across sources, and hand-build a chart. The insight was good; the turnaround was slow and it did not scale.",
      "Dobby is the platform that productizes that workflow. It ingests competitor pricing signals, resolves them against our own inventory, monitors for anomalies, and exposes the result as alerts and self-serve views. The goal was to move Competitive Intelligence from a reactive service into infrastructure the rest of the org can build on.",
    ],
    problem: [
      "Pricing decisions depend on knowing where we sit against competitors, but the data arrived raw, inconsistent, and days late. By the time an analysis was ready, the market had moved.",
      "Because every request went through a person, the number of questions the org could ask was bounded by analyst capacity, not by the value of the questions.",
    ],
    constraints: [
      "Small team. The platform had to reduce ongoing operational load, not add to it.",
      "Data quality was the hard part: competitor sources disagree on identity, currency, taxes, and availability, and any of those can silently corrupt a comparison.",
      "Stakeholders were mid-workflow. Adoption had to fit how pricing and product analysts already worked rather than demand a new one.",
    ],
    discovery: [
      "Shadowed how analysts actually produced competitive reports and mapped every manual step — collection, identity resolution, normalization, and interpretation.",
      "Found that the majority of effort went into reconciliation and trust-building, not analysis. People spent more time proving a number was correct than deciding what to do about it.",
      "Concluded the durable product was not another dashboard but a trusted pipeline: if the underlying signal could be trusted, alerting and self-serve became straightforward.",
    ],
    options: [
      {
        title: "Commission recurring reports",
        detail:
          "Keep humans in the loop and standardize the deliverable. Fast to start, but capacity-bound and does nothing for freshness.",
      },
      {
        title: "Buy a third-party CI tool",
        detail:
          "Faster on collection, but coverage and identity resolution were tuned to our own catalog, which vendors could not match. Trust would remain the bottleneck.",
      },
      {
        title: "Build an internal platform",
        detail:
          "Highest upfront cost, but the only option that let us own identity resolution, control freshness, and layer monitoring and self-serve on a foundation we trusted.",
        chosen: true,
      },
    ],
    decision: [
      "Built the platform, but sequenced it so trust came first. The first release did nothing fancy — it produced the same numbers analysts produced by hand, automatically, and let them verify parity.",
      "Only after the pipeline was trusted did we add monitoring, alerting, and self-serve query surfaces on top.",
    ],
    execution: [
      "Shipped the ingestion and identity-resolution layer first and ran it in parallel with the manual process until the outputs matched.",
      "Added anomaly monitoring so the platform surfaced problems rather than waiting to be asked, then routed alerts to the people who owned the response.",
      "Layered self-serve views last, so analysts could answer their own questions and reserve human time for interpretation.",
    ],
    impact: [
      "Competitive Intelligence shifted from an on-request service to always-on infrastructure. Questions that used to take days are answered in minutes, and the org can ask more of them.",
      "Analyst time moved from reconciliation toward interpretation and recommendations.",
    ],
    metrics: [
      { label: "Time to answer", value: "—", description: "Days → minutes for standard competitive questions." },
      { label: "Analyst hours reclaimed", value: "—", description: "Manual reconciliation removed per week." },
      { label: "Signal freshness", value: "—", description: "Lag between market change and visibility." },
      { label: "Coverage", value: "—", description: "Share of inventory with a reliable competitive signal." },
    ],
    lessons: [
      "For a data product, trust is the feature. No amount of UI matters if people don't believe the number, and running in parallel with the manual process was the cheapest way to earn that belief.",
      "Sequencing mattered more than scope. Shipping the boring, trusted core before the exciting layers is what made adoption stick.",
    ],
  },
  {
    slug: "platform-standardization",
    title: "Platform Standardization",
    category: "Platform Product",
    summary:
      "Consolidated fragmented, per-source data collection into one contract so downstream products stopped re-solving the same problems.",
    year: "2025–2026",
    role: "Product Manager — defined the standard and drove migration across teams.",
    featured: true,
    tags: ["Platform", "Data Infrastructure", "Standardization"],
    overview: [
      "Competitive data was collected by several independent flows, each with its own schema, quirks, and failure modes. Every downstream consumer had to learn those quirks, and every new source multiplied the surface area.",
      "This project defined a single contract for how collected data is represented and validated, then migrated existing flows onto it. The output is less visible than a feature, but it is what lets everything else move faster.",
    ],
    problem: [
      "Each collection source spoke a slightly different dialect. Downstream logic was riddled with source-specific special cases, which made every change risky and every new source expensive.",
      "There was no shared definition of what 'valid' data looked like, so quality problems were caught late, by consumers, instead of early, at ingestion.",
    ],
    constraints: [
      "The existing flows were in production and feeding live decisions; a big-bang rewrite was not acceptable.",
      "Different sources had genuinely different capabilities, so the standard had to be strict enough to be useful but flexible enough to be real.",
    ],
    discovery: [
      "Inventoried every field each source produced and how downstream consumers actually used them, separating what was essential from what was incidental.",
      "Found that consumers converged on a small common core of fields; the divergence was mostly in representation, not meaning.",
      "That convergence made a shared contract feasible: standardize the core, allow documented extensions at the edges.",
    ],
    options: [
      {
        title: "Leave flows independent, document quirks",
        detail:
          "Cheapest short term. Pushes the cost onto every current and future consumer forever, and the documentation rots.",
      },
      {
        title: "Lowest-common-denominator schema",
        detail:
          "Easy to agree on, but drops information some consumers depend on, so teams route around it and fragmentation returns.",
      },
      {
        title: "Shared contract with validation at ingestion",
        detail:
          "A strict common core plus explicit extension points, validated where data enters the system rather than where it is consumed.",
        chosen: true,
      },
    ],
    decision: [
      "Defined a per-field contract with validation at the point of ingestion, so bad data is rejected or flagged before it reaches a decision.",
      "Migrated incrementally, source by source, keeping old and new paths side by side until each source proved equivalent.",
    ],
    execution: [
      "Wrote the field-level specification and the validation rules with the teams who owned each source, so the standard was co-authored, not imposed.",
      "Migrated one source at a time behind the same interface, verifying parity before cutting over.",
      "Moved quality checks upstream to ingestion so failures surfaced at the source rather than downstream.",
    ],
    impact: [
      "New sources and new consumers now integrate against one contract instead of N dialects, and quality issues are caught earlier and closer to their cause.",
      "Downstream teams deleted large amounts of source-specific special-case code.",
    ],
    metrics: [
      { label: "Sources standardized", value: "—", description: "Flows migrated onto the shared contract." },
      { label: "Fields under validation", value: "—", description: "Fields with an enforced rule at ingestion." },
      { label: "Integration time", value: "—", description: "Effort to onboard a new source or consumer." },
    ],
    lessons: [
      "Standards succeed on adoption, not elegance. Co-authoring the contract with source owners bought the buy-in that made migration possible.",
      "Validating at ingestion changed the economics of quality — catching a problem where it enters is far cheaper than debugging it three systems downstream.",
    ],
  },
  {
    slug: "honeypot-monitoring",
    title: "Honeypot Monitoring",
    category: "Data Reliability",
    summary:
      "A canary system that detects silent collection failures by watching known-good reference signals instead of waiting for consumers to notice.",
    year: "2025",
    role: "Product Manager — framed the reliability problem and shaped the detection approach.",
    tags: ["Data Infrastructure", "Reliability", "Monitoring"],
    overview: [
      "The most dangerous failure in a data pipeline is the silent one: collection keeps running, returns plausible-looking data, but the data is wrong or incomplete. Nothing errors, so nothing alerts, and decisions are made on bad inputs.",
      "Honeypot Monitoring plants reference cases whose correct answer is known in advance. When the observed result drifts from the expected one, we know the pipeline is degrading before any consumer is affected.",
    ],
    problem: [
      "Collection failures were often partial and quiet — a source would start returning empty or malformed results while still reporting success.",
      "We were relying on downstream consumers to notice something looked off, which meant bad data had already reached decisions by the time anyone reacted.",
    ],
    constraints: [
      "A canary that fires constantly is worse than none; the false-positive rate had to be low enough that alerts stayed credible.",
      "Reference cases had to be representative of real collection, not a synthetic path that could pass while the real one failed.",
    ],
    discovery: [
      "Reviewed past incidents and found a recurring pattern: 'success' status with degraded content. Status codes were not a reliable health signal.",
      "Identified a set of stable, predictable cases whose expected output rarely changes, making deviation a strong signal of a real problem.",
      "Learned that timing mattered — some apparent failures were benign artifacts of when collection ran, so the detector had to account for expected variation.",
    ],
    options: [
      {
        title: "Threshold alerts on volume",
        detail:
          "Catches total outages but misses partial degradation, and thresholds are noisy across normal daily variation.",
      },
      {
        title: "Full output validation on live data",
        detail:
          "Thorough but expensive and hard to define 'correct' for data whose true value we don't independently know.",
      },
      {
        title: "Known-good reference canaries",
        detail:
          "Watch a small set of cases with a known expected answer. Cheap, interpretable, and sensitive to the silent failures that hurt most.",
        chosen: true,
      },
    ],
    decision: [
      "Built the canary approach around reference cases with known expected outcomes, and tuned sensitivity so alerts stayed trustworthy.",
      "Segmented detection by the conditions that produce benign variation, so the system distinguished real degradation from expected noise.",
    ],
    execution: [
      "Selected reference cases that exercise the same path as production collection, then defined what a healthy result looks like for each.",
      "Added segmentation for known sources of variation to suppress predictable false positives.",
      "Routed alerts to the team that owns remediation, with enough context to act without re-investigating from scratch.",
    ],
    impact: [
      "Silent degradations are now caught by the system rather than by a confused consumer downstream, which shortens time-to-detection and protects decisions made on the data.",
    ],
    metrics: [
      { label: "Time to detection", value: "—", description: "From degradation start to alert." },
      { label: "Silent failures caught", value: "—", description: "Incidents surfaced before consumer impact." },
      { label: "False-positive rate", value: "—", description: "Alerts that did not correspond to a real issue." },
    ],
    lessons: [
      "Health is not the same as success. Building a signal for correctness rather than status was the whole point.",
      "Alert credibility is a product decision. A monitor people learn to ignore has negative value, so tuning the false-positive rate was as important as the detection itself.",
    ],
  },
  {
    slug: "automapper",
    title: "Automapper",
    category: "Data Quality / Automation",
    summary:
      "Automated the matching of external listings to our own catalog — the reconciliation step that gated every competitive comparison.",
    year: "2025–2026",
    role: "Product Manager — owned the accuracy/coverage tradeoff and rollout.",
    featured: true,
    tags: ["Automation", "Data Products", "Marketplace"],
    overview: [
      "Every competitive comparison depends on knowing that a competitor's listing and ours refer to the same thing. That matching was largely manual and was the single biggest bottleneck to coverage.",
      "Automapper proposes matches automatically, with confidence, and routes only the uncertain cases to a human. It trades a small amount of precision risk for a large gain in coverage — carefully, because a wrong match silently corrupts a comparison.",
    ],
    problem: [
      "Manual matching could not keep pace with the catalog, so a large share of inventory had no reliable competitive signal simply because it was unmatched.",
      "Bad matches are worse than no match: an incorrect pairing produces a confident, wrong comparison that is hard to detect downstream.",
    ],
    constraints: [
      "Precision and coverage trade off directly; pushing coverage up risks pulling precision down, and the cost of a false match is high.",
      "The catalog spans regions and languages, so naive text similarity produces cross-region false positives.",
    ],
    discovery: [
      "Analyzed manual matches to understand which signals humans actually relied on — location, identifiers, and contextual attributes, not just names.",
      "Found that a majority of matches were unambiguous and safe to automate, while a minority were genuinely hard and belonged with a human.",
      "A prior automated attempt had produced cross-region false positives by trusting name similarity without geographic validation — a concrete lesson to design against.",
    ],
    options: [
      {
        title: "Keep matching manual",
        detail: "Safe on precision, but coverage stays capacity-bound and the bottleneck never moves.",
      },
      {
        title: "Fully automatic matching",
        detail:
          "Maximizes coverage but accepts false matches that silently corrupt comparisons — unacceptable given the cost of a wrong pairing.",
      },
      {
        title: "Confidence-scored automation with human review of the uncertain tail",
        detail:
          "Automate the high-confidence majority, add geographic and identifier validation, and route ambiguous cases to a person.",
        chosen: true,
      },
    ],
    decision: [
      "Chose confidence-scored automation with mandatory geographic validation, and set the confidence threshold deliberately conservative so automated matches favored precision.",
      "Kept a human in the loop for the low-confidence tail rather than forcing a decision the system wasn't sure about.",
    ],
    execution: [
      "Built matching on multiple signals with explicit geographic validation to eliminate the cross-region false-positive class seen previously.",
      "Attached a confidence score to every proposed match and tuned the auto-accept threshold against a labeled sample.",
      "Routed below-threshold candidates to human review and fed those decisions back to improve the matcher.",
    ],
    impact: [
      "Coverage of matched inventory increased without a manual headcount increase, while the conservative threshold kept false matches contained.",
      "Human effort concentrated on the genuinely hard cases instead of the obvious ones.",
    ],
    metrics: [
      { label: "Match coverage", value: "—", description: "Share of inventory with a confirmed match." },
      { label: "Precision", value: "—", description: "Correctness of auto-accepted matches on a labeled sample." },
      { label: "Manual review load", value: "—", description: "Cases still needing a human decision." },
    ],
    lessons: [
      "The right question was not 'can we automate matching' but 'which matches should we automate' — separating the safe majority from the hard tail was the whole design.",
      "Learning from the earlier false-positive failure was cheaper than rediscovering it. Encoding geographic validation as a hard constraint prevented repeating a known mistake.",
    ],
  },
  {
    slug: "account-health-monitoring",
    title: "Account Health Monitoring",
    category: "Operational Reliability",
    summary:
      "Turned scattered health signals into a single daily read on whether the collection system is actually working — and where it isn't.",
    year: "2025",
    role: "Product Manager — defined 'health' and the escalation model.",
    tags: ["Monitoring", "Internal Tools", "Automation"],
    overview: [
      "As collection scaled across many accounts and sources, no one had a single answer to 'is everything working today?' Health lived in fragments across dashboards, logs, and people's heads.",
      "This product consolidates those fragments into a daily health read with clear thresholds and routing, so problems are noticed and owned on the day they happen rather than discovered later.",
    ],
    problem: [
      "Health signals were spread across systems, so forming an overall picture required manually stitching sources together every day.",
      "Because no one owned the aggregate view, degradations could persist unnoticed until they compounded into a visible failure.",
    ],
    constraints: [
      "The team was too small to babysit dashboards; the system had to push what mattered and stay quiet otherwise.",
      "Overly noisy health reporting would be ignored, so the signal-to-noise ratio was a first-class requirement.",
    ],
    discovery: [
      "Mapped every existing signal and how it was interpreted, then defined what 'healthy' concretely meant for each dimension.",
      "Found that green-most-days was the norm, so the product should make the healthy case a one-line confirmation and reserve detail for when something is wrong.",
      "Identified recurring false-alarm patterns tied to timing and environment that had to be suppressed to keep the report credible.",
    ],
    options: [
      {
        title: "A dashboard to check manually",
        detail: "Better than nothing, but relies on someone remembering to look, which does not scale with a small team.",
      },
      {
        title: "Raw alerts per signal",
        detail: "High recall, low precision — floods the team and trains them to ignore alerts.",
      },
      {
        title: "Aggregated daily read with escalation",
        detail:
          "A single scheduled health summary: a one-line all-clear when green, a structured breakdown with routing when not.",
        chosen: true,
      },
    ],
    decision: [
      "Built a scheduled daily health read that collapses to one line when everything is green and expands into a structured, routed breakdown when it isn't.",
      "Encoded the known false-alarm patterns as suppression rules so the report stayed trustworthy.",
    ],
    execution: [
      "Defined thresholds per health dimension and an escalation path that names who owns each kind of problem.",
      "Automated the daily summary and made the healthy path deliberately low-noise so the unhealthy path stands out.",
      "Iterated the suppression rules as new benign patterns appeared, protecting the signal.",
    ],
    impact: [
      "The team now starts the day with a single trustworthy read on system health, and problems get an owner immediately instead of aging quietly.",
    ],
    metrics: [
      { label: "Time to awareness", value: "—", description: "From degradation to the team knowing." },
      { label: "Manual checks removed", value: "—", description: "Dashboards no longer checked by hand daily." },
      { label: "Alert precision", value: "—", description: "Share of escalations that were real." },
    ],
    lessons: [
      "For an operations team, silence is a feature. Designing the green path to be nearly invisible is what kept the red path meaningful.",
      "Defining 'healthy' precisely was harder and more valuable than building the report — the definition is the product.",
    ],
  },
  {
    slug: "scraping-roi-optimization",
    title: "Scraping ROI Optimization",
    category: "Resource Allocation",
    summary:
      "Reframed collection from 'cover everything' to 'spend where it pays', using coverage and utilization to allocate a finite budget.",
    year: "2026",
    role: "Product Manager — built the framework and drove the reallocation decisions.",
    tags: ["Marketplace", "Data Products", "Product Strategy"],
    overview: [
      "Collection has a real cost, and the instinct is to maximize coverage. But not all coverage is equally valuable — some competitors and segments drive decisions, and a long tail barely gets looked at.",
      "This work built the framework to judge collection by return rather than volume: where does an additional unit of collection actually change a decision, and where are we paying for data no one uses.",
    ],
    problem: [
      "Collection spend was allocated by habit and completeness rather than by value, so effort went to low-utility segments while high-value ones competed for the same budget.",
      "Without a shared measure of value, every request to collect more was hard to say no to.",
    ],
    constraints: [
      "The budget is finite; more coverage in one place means less somewhere else.",
      "Value is not uniform and not obvious — a segment can be small in volume but decisive in impact, so a naive volume metric would mislead.",
    ],
    discovery: [
      "Combined coverage (how much of a segment we see) with utilization (how much that data is actually used in decisions) to expose where spend and value diverged.",
      "Found clear cases of low-utilization, high-cost collection that could be reduced with little decision impact, and under-served high-value segments worth more.",
      "Established that success should be measured primarily by whether high-value segments are well covered, with the long tail treated as an ROI question, not a completeness one.",
    ],
    options: [
      {
        title: "Maximize total coverage",
        detail: "Simple and defensible-sounding, but spends the marginal dollar wherever it's cheapest, not where it matters.",
      },
      {
        title: "Cut cost uniformly",
        detail: "Easy to execute but damages high-value coverage as much as low-value coverage — the wrong cut.",
      },
      {
        title: "Allocate by coverage × utilization",
        detail:
          "Reduce spend where utilization is low and cost is high; protect and grow it where value is high. Value-driven, not volume-driven.",
        chosen: true,
      },
    ],
    decision: [
      "Adopted a value-driven allocation: protect coverage on high-value segments, trim low-utilization high-cost collection, and treat the long tail explicitly as an ROI decision.",
      "Made the framework the shared language for future 'collect more?' requests so they could be answered consistently.",
    ],
    execution: [
      "Built the coverage-and-utilization view so allocation decisions were grounded in data both sides could see.",
      "Identified specific low-ROI collection to reduce and high-value gaps to close, and drove those changes with stakeholders.",
      "Reframed the team's north-star toward coverage of what matters rather than raw volume.",
    ],
    impact: [
      "Collection spend moved toward the segments that actually drive decisions, and 'should we collect this?' became a question with a principled answer.",
    ],
    metrics: [
      { label: "High-value coverage", value: "—", description: "Coverage of the segments that drive decisions." },
      { label: "Low-ROI spend removed", value: "—", description: "Collection cost cut with minimal decision impact." },
      { label: "Utilization", value: "—", description: "Share of collected data actually used." },
    ],
    lessons: [
      "Completeness is a seductive but wrong objective for a costed system. Tying collection to utilization changed which arguments won.",
      "A shared framework is leverage. Once value was measurable, saying no to low-ROI requests stopped being political and became obvious.",
    ],
  },
  {
    slug: "fallback-strategy",
    title: "Fallback Strategy",
    category: "System Resilience",
    summary:
      "Designed graceful degradation for collection so a single blocked path reduces coverage instead of causing an outage.",
    year: "2026",
    role: "Product Manager — defined the degradation model and its acceptable-loss thresholds.",
    tags: ["Data Infrastructure", "Reliability", "Product Strategy"],
    overview: [
      "Collection depends on paths that can be blocked or degraded without warning. Treated naively, one blocked path takes down a whole signal. Treated well, the system leans on alternatives and loses a little rather than everything.",
      "This work defined how the system falls back — which alternative to prefer, how much accuracy loss is acceptable, and when a degraded signal is still better than none.",
    ],
    problem: [
      "When a primary collection path was blocked, the signal it fed simply disappeared, even when an imperfect alternative existed.",
      "There was no explicit policy for how much quality we were willing to trade to keep a signal alive, so each incident was handled ad hoc.",
    ],
    constraints: [
      "Alternatives are not free substitutes — they can differ in price representation, freshness, or coverage, so falling back changes the meaning of the data.",
      "Silent fallback is dangerous: if consumers don't know a signal is degraded, they'll over-trust it.",
    ],
    discovery: [
      "Compared primary and alternative paths to quantify how much the signal actually changes when we fall back, so the tradeoff was known rather than assumed.",
      "Found that for some segments the alternative was near-equivalent and a fine substitute, while for others the gap was large enough that a degraded signal should be labeled, not hidden.",
      "Concluded that fallback had to be a labeled, policy-driven decision — not a silent swap.",
    ],
    options: [
      {
        title: "Fail hard",
        detail: "When the primary is blocked, drop the signal. Honest but brittle — loses value that an alternative could preserve.",
      },
      {
        title: "Silently swap to an alternative",
        detail: "Keeps a number flowing, but consumers can't tell the meaning changed, so they over-trust degraded data.",
      },
      {
        title: "Policy-driven, labeled degradation",
        detail:
          "Fall back to the best alternative within an acceptable-loss threshold, and label the signal as degraded so consumers can weigh it.",
        chosen: true,
      },
    ],
    decision: [
      "Chose labeled, policy-driven degradation with explicit acceptable-loss thresholds per segment, informed by the measured gap between paths.",
      "Where the gap was too large to preserve meaning, chose to withhold rather than mislead.",
    ],
    execution: [
      "Quantified the primary-vs-alternative gap so thresholds were grounded in evidence, not guesswork.",
      "Defined the fallback order and the acceptable-loss threshold per segment, and made degraded signals explicitly labeled.",
      "Documented when withholding beats degrading, so incident response followed a policy instead of improvising.",
    ],
    impact: [
      "A blocked path now reduces coverage gracefully instead of causing a signal outage, and consumers know when they're looking at a degraded signal.",
    ],
    metrics: [
      { label: "Signal availability", value: "—", description: "Uptime of the signal during path disruptions." },
      { label: "Accuracy delta", value: "—", description: "Measured gap between primary and fallback paths." },
      { label: "Coverage preserved", value: "—", description: "Share retained during a primary-path block." },
    ],
    lessons: [
      "Resilience is a product decision, not just an engineering one — 'how wrong are we allowed to be to stay available' is a question only the product owner can answer.",
      "Labeling degraded data preserved trust. The moment we swapped silently we'd have traded a visible outage for an invisible one, which is worse.",
    ],
  },
  {
    slug: "operational-dashboard",
    title: "Operational Dashboard",
    category: "Decision Support",
    summary:
      "A shared operating picture for Competitive Intelligence — the metrics that matter, defined once, visible to everyone.",
    year: "2025–2026",
    role: "Product Manager — decided what to measure and how to define it.",
    tags: ["Internal Tools", "Data Products", "Decision Making"],
    overview: [
      "As the platform grew, stakeholders each had their own view of how things were going, and the views disagreed because the definitions did. The dashboard exists to give everyone one operating picture built on agreed definitions.",
      "The hard part was not the charts; it was deciding what actually matters and defining each metric precisely enough that two people reading it reach the same conclusion.",
    ],
    problem: [
      "Different stakeholders tracked different numbers with different definitions, so conversations started by reconciling metrics instead of making decisions.",
      "Important operating signals were buried in ad hoc queries that only a few people could run or interpret.",
    ],
    constraints: [
      "A dashboard that shows everything shows nothing; restraint about what to include was essential.",
      "Definitions had to be exact and durable, because a metric that quietly changes meaning is worse than no metric.",
    ],
    discovery: [
      "Interviewed stakeholders to separate the metrics they truly acted on from the ones they merely liked to see.",
      "Found genuine disagreement on definitions of seemingly simple metrics, which explained why past discussions kept stalling.",
      "Concluded the dashboard's real deliverable was a set of agreed definitions; the visualization was secondary.",
    ],
    options: [
      {
        title: "Comprehensive dashboard",
        detail: "Include everything anyone asked for. Impressive, unreadable, and quickly ignored.",
      },
      {
        title: "Per-team dashboards",
        detail: "Each team gets its own view. Comfortable, but re-creates the definition drift the project was meant to fix.",
      },
      {
        title: "One shared picture on agreed definitions",
        detail:
          "A small, curated set of decision-driving metrics, each with a single locked definition everyone signs off on.",
        chosen: true,
      },
    ],
    decision: [
      "Built one shared dashboard around a deliberately small set of decision-driving metrics, each with a documented, locked definition.",
      "Resisted scope creep by requiring that any new metric earn its place by tying to a decision.",
    ],
    execution: [
      "Locked metric definitions with stakeholders before building anything, so the numbers meant the same thing to everyone.",
      "Built the shared view for speed and clarity, prioritizing the few metrics that drive action.",
      "Established a light process for adding metrics so the dashboard stayed curated over time.",
    ],
    impact: [
      "Stakeholders now share one operating picture, and conversations start from decisions instead of from reconciling whose number is right.",
    ],
    metrics: [
      { label: "Definition disputes", value: "—", description: "Time spent reconciling metrics in reviews." },
      { label: "Metrics tracked", value: "—", description: "Curated set that survived the 'tied to a decision' bar." },
      { label: "Self-serve adoption", value: "—", description: "Stakeholders using the shared view directly." },
    ],
    lessons: [
      "The dashboard was a forcing function for agreement. The value was in the definitions the team was forced to settle, not the pixels.",
      "Curation is the job. Saying no to metrics was harder and more valuable than adding them.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
