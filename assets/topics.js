/* Research briefs: public-data projects can begin independently; participant studies require institutional ethics approval before recruitment. */
window.RESEARCH_CONTENT = {
  "areas": {
    "learning-analytics": "Learning analytics",
    "gamification": "Gamification & motivation",
    "computing-education": "Computing education & AI",
    "research-ai": "AI & research practice"
  },
  "topics": [
    {
      id:"A1",
      "area": "learning-analytics",
      "title": "How early can we predict student disengagement?",
      "question": "How well can engagement in the first four weeks predict later course withdrawal or failure using only information available at the prediction date?",
      "approaches": [
        "dataset"
      ],
      "method": "Reproduce a published OULAD early-warning baseline and compare simple logistic regression with one tree-based model at week 2 and week 4. Exclude outcomes already known at each cut-off, prevent repeated learners crossing train/test splits, and report precision, recall and false-alert rates.",
      "evidence": "Public OULAD registration, activity and outcome tables; no access to a local LMS or student records.",
      "contribution": "A replicable comparison showing how much warning is possible at different points and which errors matter for useful support.",
      "next": "A later student could test whether the strongest indicators transfer to a local cohort or whether suggested interventions actually help.",
      "ethics": "Prediction is not proof of disengagement or a basis for decisions about real students. Avoid features that would not exist at prediction time.",
      "sources": [
        {
          "label": "OULAD — official dataset",
          "url": "https://research.stem.open.ac.uk/ouanalyse/dataset/"
        },
        {
          "label": "Wu, Jia & Pham (2026) — early academic-risk warning and OULAD",
          "url": "https://doi.org/10.3389/feduc.2026.1917092"
        }
      ],
      "scope": "Use one clearly defined outcome, two prediction checkpoints and at most two models. Report an honest baseline and leakage checks rather than maximising accuracy.",
      "access": "Public, de-identified dataset; no participant recruitment or external institutional data agreement needed. Check the institution’s secondary-data ethics/exemption procedure."
    },
    {
      id:"A2",
      "area": "learning-analytics",
      "title": "Fairness and reliability of student-risk models",
      "question": "How much do the errors and probability estimates of one student-success model differ across groups represented in an open learning dataset?",
      "approaches": [
        "dataset"
      ],
      "method": "Use one OULAD baseline model, evaluate calibration, false-negative and false-positive rates across two or three sufficiently large available groups, and report subgroup counts and uncertainty. Treat fairness criteria as potentially competing rather than assuming one metric proves fairness.",
      "evidence": "OULAD public demographics, registrations and outcomes; no local student profiles required.",
      "contribution": "An interpretable and reproducible assessment of when a seemingly accurate educational model may mislead different populations.",
      "next": "Future work could compare approaches to mitigating unfair errors or test model behaviour in a local setting.",
      "ethics": "Do not infer why group differences exist, imply protected groups are intrinsically risky, or report unstable estimates from tiny groups.",
      "sources": [
        {
          "label": "OULAD — official dataset",
          "url": "https://research.stem.open.ac.uk/ouanalyse/dataset/"
        },
        {
          "label": "Wu, Jia & Pham (2026) — leakage and subgroup performance",
          "url": "https://doi.org/10.3389/feduc.2026.1917092"
        }
      ],
      "scope": "Audit one reproducible model and two to three well-populated groups. Avoid attempting every fairness metric or solving algorithmic fairness in one dissertation.",
      "access": "Public dataset; no recruitment or permission from another institution. Follow local secondary-data governance guidance."
    },
    {
      id:"A3",
      "area": "learning-analytics",
      "title": "Does more platform activity mean more learning?",
      "question": "Are consistency and type of learning-platform activity more informative about assessment outcomes than the number of clicks alone?",
      "approaches": [
        "dataset"
      ],
      "method": "Use OULAD to compare raw click totals with two or three time-aware engagement indicators (for example active weeks, recency and types of activity). Model their associations with available outcomes using simple, interpretable statistics; consider differences between two module presentations.",
      "evidence": "Public OULAD interactions and assessment results. EdNet can be considered only as an optional later extension.",
      "contribution": "Evidence on which commonly used platform metrics are useful and which may be misleading proxies for learning.",
      "next": "Subsequent studies could test the promising indicators against independently measured competence in a local setting.",
      "ethics": "Do not make causal claims from observational click logs. Avoid equating digital access or activity volume with actual learning.",
      "sources": [
        {
          "label": "OULAD",
          "url": "https://research.stem.open.ac.uk/ouanalyse/dataset/"
        },
        {
          "label": "EdNet",
          "url": "https://github.com/riiid/ednet"
        },
        {
          "label": "Wu, Jia & Pham (2026) — early activity indicators",
          "url": "https://doi.org/10.3389/feduc.2026.1917092"
        }
      ],
      "scope": "Limit the analysis to one or two module presentations and three engagement measures; distinguish recorded activity from demonstrated competence.",
      "access": "Open, de-identified secondary dataset; no participant or institutional-system access needed, subject to local governance checks."
    },
    {
      id:"A4",
      "area": "learning-analytics",
      "title": "Do early support messages change student behaviour?",
      "question": "In a standalone learning activity, do actionable support prompts improve voluntary follow-through compared with neutral reminders?",
      "approaches": [
        "primary"
      ],
      "method": "Create one short optional online learning task with two randomly assigned message conditions: a neutral reminder and a practical next-step prompt. Compare completion or voluntary return and a brief acceptability measure over one short follow-up period. Do not label or target real students as at risk.",
      "evidence": "Responses from consenting adult volunteers using a separate study task and minimal anonymous completion records; no LMS records.",
      "contribution": "A reusable low-stakes protocol for testing supportive educational messages instead of assuming that predictive alerts cause improvement.",
      "next": "Another cohort could test message timing, personalisation or academic impact in a larger study.",
      "ethics": "Independent consent, no influence on grades, no withholding normal support, no student-risk profiling. If ethics approval cannot be obtained, the participant-effect question cannot be answered as framed.",
      "sources": [
        {
          "label": "OULAD for background research",
          "url": "https://research.stem.open.ac.uk/ouanalyse/dataset/"
        },
        {
          "label": "Wu, Jia & Pham (2026) — predictive feasibility versus intervention",
          "url": "https://doi.org/10.3389/feduc.2026.1917092"
        }
      ],
      "scope": "One task, two message versions, one behavioural outcome and one short follow-up; a small pilot reports feasibility and uncertainty, not definitive impact.",
      "access": "No permission from other lecturers or access to institutional systems required. Institutional human-participant ethics approval and voluntary recruitment ARE required before data collection."
    },
    {
      id:"B1",
      "area": "gamification",
      "title": "Do leaderboards help or hurt motivation?",
      "question": "During a short learning activity, how does leaderboard feedback affect motivation and performance compared with personal-progress feedback?",
      "approaches": [
        "primary",
        "replication"
      ],
      "method": "Conceptually replicate leaderboard-versus-progress principles from published gamification research with one standalone task. Randomly allocate consenting adults to two feedback conditions; compare task performance and a short established motivation measure. Use anonymous/private rankings.",
      "evidence": "Self-contained digital activities, anonymised volunteer responses and completion scores; no enrolled class access.",
      "contribution": "A locally testable comparison of competitive feedback and self-referenced progress without a large gamification platform.",
      "next": "Future studies could examine whether anonymous, group-based or adaptive rankings behave differently.",
      "ethics": "Avoid displaying identifiable positions, grades or ability judgements. Recruitment must be separate from formal academic assessment.",
      "sources": [
        {
          "label": "Sailer et al. (2017)",
          "url": "https://doi.org/10.1016/j.chb.2016.12.033"
        },
        {
          "label": "Hanus & Fox (2015)",
          "url": "https://doi.org/10.1016/j.compedu.2014.08.019"
        },
        {
          "label": "Adam & van den Berg (2022) — gamified quizzes and student motivation (my research)",
          "url": "https://doi.org/10.17159/nfzqpd19"
        },
        {
          "label": "Gyedu et al. (2026) — meta-analysis of higher education gamification",
          "url": "https://doi.org/10.1177/21582440261421375"
        }
      ],
      "scope": "Two conditions and one task; treat the findings as a short-term contextual test, not a full replication of semester-long studies.",
      "access": "Self-contained study; participant ethics approval and recruitment required, but no class/LMS permissions or third-party learning records."
    },
    {
      id:"B2",
      "area": "gamification",
      "title": "Badges, activity and actual learning",
      "question": "Do achievement badges change short-term task completion and demonstrated understanding in a controlled learning activity?",
      "approaches": [
        "primary",
        "replication"
      ],
      "method": "Create two versions of the same short activity, with and without badges. Randomise consenting volunteers; compare completion and one immediate knowledge measure. Include a short delayed recall check only if the recruitment and follow-up plan support it.",
      "evidence": "A lightweight standalone activity, automated task records and an identical independent quiz for both groups.",
      "contribution": "A feasible experiment distinguishing activity completion from measured understanding.",
      "next": "Later work could compare mastery-oriented badges against attendance or streak rewards.",
      "ethics": "Participants must receive the same content and support; engagement differences alone should not be described as learning gains.",
      "sources": [
        {
          "label": "Sailer et al. (2017)",
          "url": "https://doi.org/10.1016/j.chb.2016.12.033"
        },
        {
          "label": "Adam & van den Berg (2022) — gamified quizzes (my research)",
          "url": "https://doi.org/10.17159/nfzqpd19"
        },
        {
          "label": "Gyedu et al. (2026) — gamification meta-analysis",
          "url": "https://doi.org/10.1177/21582440261421375"
        }
      ],
      "scope": "One topic, one badge mechanism, two conditions and two primary outcome measures; delayed retention is optional rather than essential.",
      "access": "Participant ethics approval and volunteers required; no dependence on existing courses, gradebooks or proprietary platforms."
    },
    {
      id:"B3",
      "area": "gamification",
      "title": "Competition versus cooperation in learning",
      "question": "In a small controlled learning activity, how do cooperative goals compare with individual competition in engagement and task performance?",
      "approaches": [
        "primary"
      ],
      "method": "Run a self-contained matched activity with two conditions: a shared-goal/dyad format and an individual competition format. Predefine individual performance and a short engagement measure. Randomise groups where practical and report group-size limitations.",
      "evidence": "Voluntary adult participants, reusable tasks, and individual outcomes collected outside taught modules.",
      "contribution": "An initial context-specific comparison of cooperative and competitive feedback that can be extended in later cohorts.",
      "next": "Another study could test whether prior skill or group composition moderates the outcomes.",
      "ethics": "Avoid public individual ranking or coercive group arrangements; address dependence between paired observations in the analysis.",
      "sources": [
        {
          "label": "Sailer et al. (2017)",
          "url": "https://doi.org/10.1016/j.chb.2016.12.033"
        },
        {
          "label": "Adam & van den Berg (2022) — gamification and motivation (my research)",
          "url": "https://doi.org/10.17159/nfzqpd19"
        }
      ],
      "scope": "Two conditions rather than three. Use one brief session and a modest number of pairs; avoid claims about broad collaborative-learning effectiveness.",
      "access": "Participant ethics approval and recruitment needed. No institutional classroom allocation or LMS access required; pairing increases scheduling complexity."
    },
    {
      id:"B4",
      "area": "gamification",
      "title": "When does gamification stop being motivating?",
      "question": "Does enthusiasm for repeated reward-heavy learning tasks change over a small number of exposures?",
      "approaches": [
        "primary",
        "replication"
      ],
      "method": "Use a short, self-contained sequence of three comparable learning rounds with a consistent badge/points mechanic. Collect brief motivation ratings after each round and an objective task outcome; compare within-person change. Refer to Hanus and Fox as a conceptual, not direct, replication.",
      "evidence": "Consenting volunteers and repeated responses within one scheduled session; no semester-long access or classroom retention required.",
      "contribution": "A practical protocol for investigating short-term reward fatigue that can be tested over longer periods later.",
      "next": "Future students can test design adjustments intended to prevent declines in motivation.",
      "ethics": "Separate the study from coursework and avoid implying that short-term fatigue reproduces semester-scale effects.",
      "sources": [
        {
          "label": "Hanus & Fox (2015)",
          "url": "https://doi.org/10.1016/j.compedu.2014.08.019"
        },
        {
          "label": "Adam & van den Berg (2022) — gamified learning in South Africa (my research)",
          "url": "https://doi.org/10.17159/nfzqpd19"
        },
        {
          "label": "Gyedu et al. (2026) — gamification outcomes meta-analysis",
          "url": "https://doi.org/10.1177/21582440261421375"
        }
      ],
      "scope": "Three short rounds in one session. Investigate immediate novelty or fatigue only; do not claim long-term motivational decline.",
      "access": "Ethics approval and volunteer recruitment required, but no ongoing institutional access or multi-month tracking."
    },
    {
      id:"C1",
      "area": "computing-education",
      "title": "Can students debug AI-generated code?",
      "question": "How accurately can novice programmers locate, explain and repair errors in a standardised set of AI-generated programs?",
      "approaches": [
        "primary"
      ],
      "method": "Prepare four to six small AI-produced code examples with known faults and passing/failing tests. Give consenting volunteers a time-limited standalone debugging task, then score fault localisation and repair with a pre-specified rubric and automated tests.",
      "evidence": "Synthetic or openly licensed code snippets; volunteer responses to standalone tasks; no access to classroom repositories.",
      "contribution": "A repeatable AI-code debugging task bank and baseline analysis of observed reasoning difficulties.",
      "next": "Later students could evaluate pedagogical interventions that improve independent debugging.",
      "ethics": "Disclose any human modifications to AI code; assess objectively and do not connect performance to participants’ academic results.",
      "sources": [
        {
          "label": "IBM Project CodeNet (possible defect source)",
          "url": "https://github.com/IBM/Project_CodeNet"
        },
        {
          "label": "Kohen-Vacs, Usher & Jansen (2025) — correcting AI code",
          "url": "https://doi.org/10.1007/s40593-025-00496-4"
        },
        {
          "label": "Albadarin et al. (2026) — AI-assisted debugging and critical thinking",
          "url": "https://doi.org/10.1007/s10758-026-09998-z"
        }
      ],
      "scope": "One programming language, up to six tasks and a small rubric; do not attempt a full diagnosis of programming competence.",
      "access": "No access to a specific class or GitHub organisation required; human-participant ethics approval and recruitment still needed."
    },
    {
      id:"C2",
      "area": "computing-education",
      "title": "Does AI coding support create transferable skill?",
      "question": "After practising with AI assistance, can novice programmers solve a related problem independently in the same session?",
      "approaches": [
        "primary"
      ],
      "method": "Run a one-session experiment: equivalent short practice with AI permitted versus conventional documentation permitted, followed by a new unaided task for everyone. Compare correctness and explanations using the same test cases and rubric.",
      "evidence": "Small standalone programming exercises, automated tests, and consenting adult volunteers; no module marks.",
      "contribution": "An initial measure of whether assisted task success corresponds to independent near-transfer.",
      "next": "A subsequent cohort might test the impact of prompting guidelines or scaffolding strategies.",
      "ethics": "Use comparable tasks, consistent AI settings and a fair unaided assessment; no claims about durable learning without delayed testing.",
      "sources": [
        {
          "label": "Deslauriers et al. (2019): measured vs perceived learning",
          "url": "https://doi.org/10.1073/pnas.1821936116"
        },
        {
          "label": "Nathaniel et al. (2026) — structured AI use in programming education",
          "url": "https://doi.org/10.3389/fcomp.2026.1789829"
        },
        {
          "label": "Adam (2024) — GitHub repositories to teach programming (my research)",
          "url": "https://doi.org/10.34190/icer.1.1.2774"
        }
      ],
      "scope": "One language, two assistance conditions and one immediate transfer task. Measure immediate transfer, not long-term skill retention.",
      "access": "Participant ethics approval and recruitment required; no institution-level access, semester-long follow-up or classroom intervention."
    },
    {
      id:"C3",
      "area": "computing-education",
      "title": "Which programming feedback works best?",
      "question": "For a small set of programming errors, which feedback helps novices make correct fixes: rule-based hints or AI-generated hints?",
      "approaches": [
        "primary",
        "replication"
      ],
      "method": "Develop a bank of common defects and verify every candidate hint against tests. Randomly assign volunteers to two feedback conditions and compare successful repairs, time and explanation quality. Use executable tests plus a simple blinded explanation rubric.",
      "evidence": "Open or synthetic code tasks, pre-checked feedback, and responses from consenting volunteers.",
      "contribution": "A small reproducible comparison of feedback design using actual debugging outcomes rather than satisfaction alone.",
      "next": "Future work could test a hybrid feedback system tailored to recurring error patterns.",
      "ethics": "Check that AI hints are correct and comparably informative before the experiment; record model/version settings.",
      "sources": [
        {
          "label": "IBM Project CodeNet",
          "url": "https://github.com/IBM/Project_CodeNet"
        },
        {
          "label": "Qian, Liu & Zhu (2026) — AI-generated programming feedback",
          "url": "https://doi.org/10.1057/s41599-026-07920-7"
        },
        {
          "label": "Paruk & Adam (2026) — Guru videos for teaching programming (my research)",
          "url": "https://doi.org/10.1007/978-981-95-8240-2_22"
        },
        {
          "label": "Adaptive vs generative feedback (2026)",
          "url": "https://doi.org/10.1016/j.caeai.2025.100526"
        }
      ],
      "scope": "One programming language, four to six error types, two feedback conditions; instructor-authored hints can be investigated later.",
      "access": "Study runs outside formal courses; participant ethics and recruitment required, but no expert review panel or access to institutional assessment data."
    },
    {
      id:"C4",
      "area": "computing-education",
      "title": "A reproducible taxonomy of programming errors",
      "question": "Which recurring programming defect categories can be reliably identified in a reproducible subset of public code submissions?",
      "approaches": [
        "dataset"
      ],
      "method": "Take a manageable Python or Java subset of IBM Project CodeNet. Define a taxonomy from available verdicts and manually reviewed code samples, assess inter-rater agreement where a second reviewer is available, and test a simple automated classification baseline.",
      "evidence": "Public Project CodeNet submissions and verdict metadata; sample files only rather than the full multi-gigabyte archive.",
      "contribution": "A clearly specified error taxonomy and reproducible sample useful in subsequent automated-feedback studies.",
      "next": "Another student could validate the taxonomy against locally produced student submissions with permission.",
      "ethics": "Submission verdicts do not always identify underlying code misconceptions; respect dataset licence and avoid unsupported generalisation.",
      "sources": [
        {
          "label": "IBM Project CodeNet",
          "url": "https://github.com/IBM/Project_CodeNet"
        },
        {
          "label": "Adam (2024) — GitHub repositories to teach programming (my research)",
          "url": "https://doi.org/10.34190/icer.1.1.2774"
        }
      ],
      "scope": "One language, two or three problem families and a documented sample of approximately 100–200 submissions; avoid a universal taxonomy.",
      "access": "Public released dataset; no recruitment, external institutional permission or special API keys. Review dataset terms and local ethics/exemption guidance."
    },
    {
      id:"E1",
      "area": "research-ai",
      "title": "Can students spot fabricated academic references?",
      "question": "How effectively do novice researchers verify authentic and fabricated references when given access to ordinary scholarly search tools?",
      "approaches": [
        "primary"
      ],
      "method": "Curate 12–20 references with independently verified ground truth and known error categories. Ask consenting adult volunteers to check them using allowed scholarly search tools; score identification accuracy and confidence on a short task.",
      "evidence": "Synthetic and real bibliographic records verified using Crossref or publisher pages, plus anonymised participant responses.",
      "contribution": "A reusable source-verification assessment and an empirical snapshot of common checking mistakes.",
      "next": "Future researchers could test training interventions, verification checklists or tool-assisted workflows.",
      "ethics": "Debrief participants about fabricated references; do not use real academic submissions without consent.",
      "sources": [
        {
          "label": "Crossref metadata search for verification",
          "url": "https://search.crossref.org/"
        },
        {
          "label": "Han et al. (2026) — unverifiable scholarly references",
          "url": "https://doi.org/10.1002/asi.70104"
        },
        {
          "label": "Picazo-Sanchez & Ortiz-Martin (2026) — LLM citation integrity",
          "url": "https://doi.org/10.3390/data11050122"
        }
      ],
      "scope": "One reference set, one verification task and a small number of error categories. A tool-only detection benchmark is a different, no-participant fallback question.",
      "access": "Public reference metadata needs no special access; to measure people’s verification ability, recruitment and institutional ethics approval ARE required."
    },
    {
      id:"E2",
      "area": "research-ai",
      "title": "Can AI identify weaknesses in a postgraduate research proposal?",
      "question": "How reliably can AI feedback detect specific, pre-defined methodological flaws in synthetic postgraduate research proposals?",
      "approaches": [
        "dataset",
        "replication"
      ],
      "method": "Create eight to twelve wholly synthetic short proposal excerpts with deliberately introduced weaknesses (for example, a misaligned question, sampling mismatch or unsupported inference). Define an answer key from established methods guidance, test fixed AI prompts, and independently score correct detections, missed errors and invented criticisms.",
      "evidence": "Researcher-authored synthetic proposal snippets, transparent flaw annotations, recorded prompts and AI outputs; no unpublished student work or expert panel.",
      "contribution": "An auditable benchmark for when AI proposal feedback is accurate, incomplete or misleading.",
      "next": "A later student could validate the benchmark with expert reviewers or investigate whether novice researchers actually learn from such feedback.",
      "ethics": "Use entirely synthetic material; do not upload confidential proposals. A benchmark of detected flaws does not prove that advice improves researcher skill.",
      "sources": [
        {
          "label": "Deslauriers et al. (2019) — learning versus perceived learning",
          "url": "https://doi.org/10.1073/pnas.1821936116"
        },
        {
          "label": "Han et al. (2026) — scholarly reference verification",
          "url": "https://doi.org/10.1002/asi.70104"
        }
      ],
      "scope": "Three or four flaw types, one or two AI models and a modest case bank. Use defensible objective issues rather than pretending all proposal quality is binary.",
      "access": "No participant recruitment, proprietary student proposals or expert permissions needed. Public methods sources and normal model-access terms apply; check local ethics classification."
    },
    {
      id:"E3",
      "area": "research-ai",
      "title": "Does AI give reliable advice on research-methods decisions?",
      "question": "When presented with realistic methodological dilemmas, does AI explain sound research choices or produce plausible but misleading recommendations?",
      "approaches": [
        "dataset",
        "replication"
      ],
      "method": "Write ten to fifteen synthetic postgraduate research-methods scenarios with explicit constraints and a published-methods-based scoring rubric. Compare responses from two prompt strategies or model settings for factual correctness, alignment with the scenario, justification and unsupported certainty.",
      "evidence": "Synthetic research-design vignettes, peer-reviewed research-methodology sources, preserved AI prompts and scored outputs.",
      "contribution": "A transparent benchmark for distinguishing useful methodological reasoning from polished but unsupported AI advice.",
      "next": "A later human-participant study could ask whether persuasive AI advice raises confidence even when the advice is wrong.",
      "ethics": "Scoring must distinguish genuinely contestable methodological choices from factual mistakes. Without participants the project cannot measure changes in confidence.",
      "sources": [
        {
          "label": "Deslauriers et al. (2019) — perceived versus measured learning",
          "url": "https://doi.org/10.1073/pnas.1821936116"
        },
        {
          "label": "Han et al. (2026) — unverifiable scholarly references",
          "url": "https://doi.org/10.1002/asi.70104"
        }
      ],
      "scope": "Focus on one methodological area (for example sampling or quantitative inference), ten to fifteen scenarios and two prompt conditions; no participant confidence claims.",
      "access": "No human participants, student records or expert-panel approvals required. Uses public literature and accessible AI tools, subject to local ethical guidance."
    },
    {
      id:"E4",
      "area": "research-ai",
      "title": "How reliable are AI-generated research-methods learning activities?",
      "question": "Can AI create accurate, appropriately challenging practice activities that build towards critical research-methods reasoning?",
      "approaches": [
        "dataset",
        "replication"
      ],
      "method": "Generate short worked examples and practice questions for one postgraduate research-methods outcome (for example aligning a question, design and analysis). Evaluate against a published-methods-based rubric for correctness, ambiguity, cognitive demand and quality of explanations. Test alternative prompts on the same content specification.",
      "evidence": "Researcher-authored outcome specification, synthetic exercises and solutions, reproducible prompts and published research-methods references.",
      "contribution": "A reusable, quality-checked activity bank and evidence about when AI-created teaching material needs human correction.",
      "next": "A subsequent postgraduate could test the refined activities with consenting novice researchers to measure whether they improve understanding.",
      "ethics": "Only synthetic content; do not upload real student projects or represent content accuracy as proof that learning improved.",
      "sources": [
        {
          "label": "Deslauriers et al. (2019) — perceived and actual learning",
          "url": "https://doi.org/10.1073/pnas.1821936116"
        },
        {
          "label": "Han et al. (2026) — accuracy of scholarly references",
          "url": "https://doi.org/10.1002/asi.70104"
        }
      ],
      "scope": "One learning outcome, 20–30 short generated activities, two prompt designs and a scoring rubric. Assess content quality only, not gains in actual student learning.",
      "access": "No participant recruitment or permission to access a mentorship scheme, course or student records. Use publicly available methods literature and institutionally permitted AI tools."
    }
  ]
};
