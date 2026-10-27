/* Edit topic content here. This file contains data only; no build tools needed. */
window.RESEARCH_CONTENT = {
  areas: {
    "learning-analytics": "Learning analytics",
    "gamification": "Gamification & motivation",
    "computing-education": "Computing education & AI",
    "research-ai": "AI & research practice"
  },
  topics: [
    {
      id:"A1", area:"learning-analytics", title:"How early can we predict student disengagement?",
      question:"How accurately can the first few weeks of learning activity predict later disengagement or withdrawal?",
      approaches:["dataset"],
      method:"Reproduce a baseline predictive model using OULAD, then train comparable models using week 1, 2, 3 and 4 data. Use chronological cut-offs, stratified or course-aware evaluation and interpretable metrics; avoid leakage from future assessments.",
      evidence:"Open University Learning Analytics Dataset (OULAD); course, assessment and VLE interaction tables.",
      contribution:"A transparent benchmark of what is knowable, and when, including practical trade-offs among lead time, recall and false alerts.",
      next:"A later student could test whether the strongest indicators transfer to a local cohort or whether suggested interventions actually help.",
      ethics:"Use approved de-identified data. Do not treat model output as a deterministic student-risk label.",
      sources:[{label:"OULAD — official dataset",url:"https://research.stem.open.ac.uk/ouanalyse/dataset/"},{label:"Wu, Jia & Pham (2026) — early academic-risk warning and OULAD",url:"https://doi.org/10.3389/feduc.2026.1917092"}]
    },
    {
      id:"A2", area:"learning-analytics", title:"Fairness and reliability of student-risk models",
      question:"Are student-success models equally well calibrated and accurate across observable groups?",
      approaches:["dataset"],
      method:"Train a few interpretable models on OULAD. Compare error rates, calibration and performance across available demographic strata, reporting group sizes and uncertainty. Avoid protected-attribute shortcuts and causal claims.",
      evidence:"OULAD learner demographics, registrations and assessment outcomes.",
      contribution:"A reproducible audit of model limitations, including fairness and false-positive trade-offs.",
      next:"Future work could compare approaches to mitigating unfair errors or test model behaviour in a local setting.",
      ethics:"Use demographic data responsibly; small groups and proxies need careful interpretation.",
      sources:[{label:"OULAD — official dataset",url:"https://research.stem.open.ac.uk/ouanalyse/dataset/"},{label:"Wu, Jia & Pham (2026) — leakage and subgroup performance",url:"https://doi.org/10.3389/feduc.2026.1917092"}]
    },
    {
      id:"A3", area:"learning-analytics", title:"Does more platform activity mean more learning?",
      question:"Which learning-platform activities are meaningfully associated with academic outcomes, beyond raw click counts?",
      approaches:["dataset"],
      method:"Model click counts, consistency of participation and assessment engagement separately. Compare explanatory value after controlling for available contextual variables; examine whether effects differ between modules.",
      evidence:"OULAD activity logs, assessments and available demographic variables. EdNet is an optional alternative for sequential interaction analysis.",
      contribution:"A reproducible distinction between activity metrics and defensible indicators of learning behaviour.",
      next:"Subsequent studies could test the promising indicators against independently measured competence in a local setting.",
      ethics:"Correlations cannot establish that platform activity causes better results.",
      sources:[{label:"OULAD",url:"https://research.stem.open.ac.uk/ouanalyse/dataset/"},{label:"EdNet",url:"https://github.com/riiid/ednet"},{label:"Wu, Jia & Pham (2026) — early activity indicators",url:"https://doi.org/10.3389/feduc.2026.1917092"}]
    },
    {
      id:"A4", area:"learning-analytics", title:"Do early support messages change student behaviour?",
      question:"Can carefully designed, non-stigmatising feedback improve subsequent engagement or help-seeking?",
      approaches:["primary"],
      method:"Run a small, ethically approved pilot comparing neutral reminders with actionable learning-support messages, with a prespecified measure of engagement or help-seeking and a short follow-up.",
      evidence:"Consenting volunteer participants, approved learning activity measures and short feedback instruments.",
      contribution:"Feasibility evidence and a reusable protocol for supportive, rather than punitive, early intervention.",
      next:"Another cohort could test message timing, personalisation or academic impact in a larger study.",
      ethics:"Participation must not affect grades, access to support or relationships with lecturers; use an independent recruitment route where appropriate.",
      sources:[{label:"OULAD for background research",url:"https://research.stem.open.ac.uk/ouanalyse/dataset/"},{label:"Wu, Jia & Pham (2026) — predictive feasibility versus intervention",url:"https://doi.org/10.3389/feduc.2026.1917092"}]
    },
    {
      id:"B1", area:"gamification", title:"Do leaderboards help or hurt motivation?",
      question:"How do competitive leaderboards compare with personal-progress feedback and a non-gamified control?",
      approaches:["primary","replication"],
      method:"Adapt a published gamification design into a controlled learning task. Measure performance and motivation before and after, with particular attention to participants lower on a leaderboard.",
      evidence:"Primary experiment: matched exercises, motivation instrument, task outcomes and participant feedback.",
      contribution:"A context-specific test of a widely used gamification mechanism, including potential unintended consequences.",
      next:"Future studies could examine whether anonymous, group-based or adaptive rankings behave differently.",
      ethics:"Do not publicly expose individual grades or rank participants in a way that could cause harm.",
      sources:[{label:"Sailer et al. (2017)",url:"https://doi.org/10.1016/j.chb.2016.12.033"},{label:"Hanus & Fox (2015)",url:"https://doi.org/10.1016/j.compedu.2014.08.019"},{label:"Adam & van den Berg (2022) — gamified quizzes and student motivation (my research)",url:"https://doi.org/10.17159/nfzqpd19"},{label:"Gyedu et al. (2026) — meta-analysis of higher education gamification",url:"https://doi.org/10.1177/21582440261421375"}]
    },
    {
      id:"B2", area:"gamification", title:"Badges, activity and actual learning",
      question:"Do achievement badges improve understanding and retention, or just increase task completion?",
      approaches:["primary","replication"],
      method:"Randomise consenting participants to equivalent activities with or without badges. Distinguish task completion, immediate knowledge, delayed retention and motivation.",
      evidence:"Controlled study using short programming or digital-literacy exercises and independent assessments.",
      contribution:"Evidence about whether visible rewards translate into meaningful learning outcomes.",
      next:"Later work could compare mastery-oriented badges against attendance or streak rewards.",
      ethics:"Ensure equivalent access to materials and learning support in every condition.",
      sources:[{label:"Sailer et al. (2017)",url:"https://doi.org/10.1016/j.chb.2016.12.033"},{label:"Adam & van den Berg (2022) — gamified quizzes (my research)",url:"https://doi.org/10.17159/nfzqpd19"},{label:"Gyedu et al. (2026) — gamification meta-analysis",url:"https://doi.org/10.1177/21582440261421375"}]
    },
    {
      id:"B3", area:"gamification", title:"Competition versus cooperation in learning",
      question:"Does cooperative gamification outperform individual competition for engagement and measured learning?",
      approaches:["primary"],
      method:"Compare matched learning exercises delivered with team goals, individual rankings or neutral progress indicators. Predefine individual learning outcomes, not only group task scores.",
      evidence:"Volunteer student groups, standardised tasks, individual pre/post tests and short interviews or surveys.",
      contribution:"A structured comparison of collaborative and competitive design mechanisms.",
      next:"Another study could test whether prior skill or group composition moderates the outcomes.",
      ethics:"Protect participants who may feel excluded or uncomfortable with competition.",
      sources:[{label:"Sailer et al. (2017)",url:"https://doi.org/10.1016/j.chb.2016.12.033"},{label:"Adam & van den Berg (2022) — gamification and motivation (my research)",url:"https://doi.org/10.17159/nfzqpd19"}]
    },
    {
      id:"B4", area:"gamification", title:"When does gamification stop being motivating?",
      question:"Do motivation and satisfaction change across repeated exposure to reward-heavy learning activities?",
      approaches:["primary","replication"],
      method:"Conceptually replicate a published longitudinal classroom study with smaller-scale repeated measures across several sessions. Compare motivational trajectories rather than relying only on an end-of-study survey.",
      evidence:"Repeated motivation measures, attendance or completion observations and independent outcome measures.",
      contribution:"A local replication of potentially negative long-term gamification effects.",
      next:"Future students can test design adjustments intended to prevent declines in motivation.",
      ethics:"Limit coercion and monitor adverse effects; clearly document any departures from the original protocol.",
      sources:[{label:"Hanus & Fox (2015)",url:"https://doi.org/10.1016/j.compedu.2014.08.019"},{label:"Adam & van den Berg (2022) — gamified learning in South Africa (my research)",url:"https://doi.org/10.17159/nfzqpd19"},{label:"Gyedu et al. (2026) — gamification outcomes meta-analysis",url:"https://doi.org/10.1177/21582440261421375"}]
    },
    {
      id:"C1", area:"computing-education", title:"Can students debug AI-generated code?",
      question:"How well can novice programmers identify, explain and fix realistic defects in AI-generated code?",
      approaches:["primary"],
      method:"Create a verified task set containing correct code and intentionally flawed AI-generated solutions. Measure fault localisation, repair quality, reasoning and false-confidence rates.",
      evidence:"Consenting students; short, controlled programming/debugging tasks with an independent scoring rubric.",
      contribution:"A reusable assessment instrument for evaluating debugging competence in an AI-assisted setting.",
      next:"Later students could evaluate pedagogical interventions that improve independent debugging.",
      ethics:"Use standardised prompts and disclose any human edits to AI-generated code.",
      sources:[{label:"IBM Project CodeNet (possible defect source)",url:"https://github.com/IBM/Project_CodeNet"},{label:"Kohen-Vacs, Usher & Jansen (2025) — correcting AI code",url:"https://doi.org/10.1007/s40593-025-00496-4"},{label:"Albadarin et al. (2026) — AI-assisted debugging and critical thinking",url:"https://doi.org/10.1007/s10758-026-09998-z"}]
    },
    {
      id:"C2", area:"computing-education", title:"Does AI coding support create transferable skill?",
      question:"Does performance during AI-assisted practice translate into successful unaided programming on new tasks?",
      approaches:["primary"],
      method:"Use matched practice tasks with different allowed assistance conditions, followed by an independent unaided transfer task after a suitable interval. Assess design reasoning, not just working output.",
      evidence:"Ethically recruited participants, controlled exercises and independent code/rubric assessment.",
      contribution:"Evidence distinguishing short-term task success from durable programming competence.",
      next:"A subsequent cohort might test the impact of prompting guidelines or scaffolding strategies.",
      ethics:"Do not disadvantage students in official assessment; the research tasks should be separate or equitably designed.",
      sources:[{label:"Deslauriers et al. (2019): measured vs perceived learning",url:"https://doi.org/10.1073/pnas.1821936116"},{label:"Nathaniel et al. (2026) — structured AI use in programming education",url:"https://doi.org/10.3389/fcomp.2026.1789829"},{label:"Adam (2024) — GitHub repositories to teach programming (my research)",url:"https://doi.org/10.34190/icer.1.1.2774"}]
    },
    {
      id:"C3", area:"computing-education", title:"Which programming feedback works best?",
      question:"How do rule-based feedback, AI-generated hints and instructor-authored hints affect error correction and conceptual understanding?",
      approaches:["primary","replication"],
      method:"Develop equivalent feedback for a small set of programming errors. Randomly assign feedback modes and assess successful repairs, explanation quality and repeated errors on new exercises.",
      evidence:"A controlled task bank, verified hints, student corrections and blind scoring against a common rubric.",
      contribution:"An evidence-based comparison of feedback design choices rather than a simple opinion survey.",
      next:"Future work could test a hybrid feedback system tailored to recurring error patterns.",
      ethics:"Human-validate AI feedback and record model/version settings for reproducibility.",
      sources:[{label:"IBM Project CodeNet",url:"https://github.com/IBM/Project_CodeNet"},{label:"Qian, Liu & Zhu (2026) — AI-generated programming feedback",url:"https://doi.org/10.1057/s41599-026-07920-7"},{label:"Paruk & Adam (2026) — Guru videos for teaching programming (my research)",url:"https://doi.org/10.1007/978-981-95-8240-2_22"},{label:"Adaptive vs generative feedback (2026)",url:"https://doi.org/10.1016/j.caeai.2025.100526"}]
    },
    {
      id:"C4", area:"computing-education", title:"A reproducible taxonomy of programming errors",
      question:"Which error categories recur across programming submissions, and can they be classified reliably?",
      approaches:["dataset"],
      method:"Select a scoped language/problem subset from IBM Project CodeNet. Build an annotated taxonomy of available outcome labels and sample code defects, then compare simple classification baselines.",
      evidence:"Project CodeNet submissions, problem identifiers and status metadata; human review of a stratified sample.",
      contribution:"A replicable benchmark and documented error taxonomy for future automated-feedback research.",
      next:"Another student could validate the taxonomy against locally produced student submissions with permission.",
      ethics:"Online-judge submissions are not the same as classroom learning trajectories; respect usage and attribution terms.",
      sources:[{label:"IBM Project CodeNet",url:"https://github.com/IBM/Project_CodeNet"},{label:"Adam (2024) — GitHub repositories to teach programming (my research)",url:"https://doi.org/10.34190/icer.1.1.2774"}]
    },
    {
      id:"E1", area:"research-ai", title:"Can students spot fabricated academic references?",
      question:"How accurately can novice researchers recognise invented, corrupted or misleading AI-produced citations?",
      approaches:["primary"],
      method:"Create a ground-truthed set of real and fabricated references, stratified by error type. Ask consenting participants to verify each one using allowed tools, measuring accuracy, confidence and time.",
      evidence:"Verified reference benchmark and anonymised participant responses.",
      contribution:"A reusable instrument for assessing academic source-verification skills.",
      next:"Future researchers could test training interventions, verification checklists or tool-assisted workflows.",
      ethics:"Avoid misleading participants about assessment consequences; debrief on fabricated items.",
      sources:[{label:"Crossref metadata search for verification",url:"https://search.crossref.org/"},{label:"Han et al. (2026) — unverifiable scholarly references",url:"https://doi.org/10.1002/asi.70104"},{label:"Picazo-Sanchez & Ortiz-Martin (2026) — LLM citation integrity",url:"https://doi.org/10.3390/data11050122"}]
    },
    {
      id:"E2", area:"research-ai", title:"How good is AI feedback on research proposals?",
      question:"Can expert reviewers distinguish useful AI-generated proposal feedback from superficial or incorrect advice?",
      approaches:["primary"],
      method:"With author permission, use de-identified proposal excerpts or synthetic scenarios. Generate feedback under a fixed protocol, then have independent experts rate correctness, usefulness, specificity and possible harm.",
      evidence:"Approved proposal excerpts or synthetic materials, expert ratings and a shared quality rubric.",
      contribution:"A defensible rubric and benchmark of strengths and risks in automated research feedback.",
      next:"Later studies could test rubric-guided prompts or human-in-the-loop review methods.",
      ethics:"Protect unpublished student work and intellectual property. Avoid entering confidential texts into external models without authorisation.",
      sources:[{label:"Crossref for reference validation",url:"https://www.crossref.org/"},{label:"Han et al. (2026) — reference verification in academic research",url:"https://doi.org/10.1002/asi.70104"}]
    },
    {
      id:"E3", area:"research-ai", title:"Does AI raise confidence without raising research quality?",
      question:"Does AI-assisted methodological planning improve genuine proposal quality or only perceived confidence?",
      approaches:["primary"],
      method:"Compare matched research-planning exercises with and without AI assistance. Use blind expert rubric ratings and a separately measured confidence scale; compare objective quality with self-reported benefit.",
      evidence:"Controlled research-methods scenarios, expert assessment and pre/post confidence measures.",
      contribution:"Evidence separating metacognitive confidence from methodological competence.",
      next:"A future study could evaluate structured critical-reflection prompts as an intervention.",
      ethics:"Independent rating and equivalent opportunities to learn reduce bias; document model settings.",
      sources:[{label:"Deslauriers et al. (2019): actual vs perceived learning",url:"https://doi.org/10.1073/pnas.1821936116"},{label:"Nathaniel et al. (2026) — scaffolded AI and higher-order thinking",url:"https://doi.org/10.3389/fcomp.2026.1789829"}]
    },
    {
      id:"E4", area:"research-ai", title:"What makes peer research mentorship effective?",
      question:"Does structured peer research mentoring improve novice researchers' ability to justify research decisions?",
      approaches:["primary"],
      method:"Pilot a small mentorship model with clear meeting structure, independently scored methodological tasks and reflective interviews; avoid using only satisfaction as the outcome.",
      evidence:"Consenting participants, mentoring records with appropriate privacy safeguards, pre/post method tasks and reflections.",
      contribution:"A feasible mentorship protocol and initial evidence concerning methodological skill development.",
      next:"Successive cohorts could replicate the intervention across different student groups or disciplines.",
      ethics:"Voluntary recruitment, confidentiality and clear separation from academic grading are essential.",
      sources:[]
    }
  ]
};
