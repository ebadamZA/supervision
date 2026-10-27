/* Curated introductory topics for prospective postgraduate researchers.
   Reading links are starting points, not a comprehensive literature review.
   Students develop their own research gap, proposal and methodology. */
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
      "route": "Public-data study",
      "area": "learning-analytics",
      "title": "How early can we predict student disengagement?",
      "question": "How well can engagement in the first four weeks predict later course withdrawal or failure using only information available at the prediction date?",
      "approaches": [
        "dataset"
      ],
      "context": "Digital learning environments generate traces of participation, but it is not always clear how early those traces can identify learners who may withdraw. The challenge is to understand what predictions can and cannot tell us about engagement.",
      "approach": "A secondary-data investigation of early-warning predictions using an established open learning dataset.",
      "data": "Public OULAD learning-activity and outcome data. No participants or access to an institution's learning platform are planned; institutional secondary-data requirements still apply.",
      "contribution": "Explore the opportunities and limitations of predicting disengagement before the end of a course.",
      "reading": [
        [
          "Wu, Duan & Luo (2026) — Early-warning models for course withdrawal",
          "https://doi.org/10.1371/journal.pone.0352867"
        ],
        [
          "Kuzilek, Hlosta & Zdrahal (2017) — Open University Learning Analytics dataset",
          "https://doi.org/10.1038/sdata.2017.171"
        ]
      ],
      "resources": [
        [
          "OULAD — download and documentation",
          "https://research.stem.open.ac.uk/ouanalyse/dataset/"
        ]
      ]
    },
    {
      id:"A2",
      "route": "Public-data study",
      "area": "learning-analytics",
      "title": "Fairness and reliability of student-risk models",
      "question": "How much do the errors and probability estimates of one student-success model differ across groups represented in an open learning dataset?",
      "approaches": [
        "dataset"
      ],
      "context": "A model may perform well overall while making different kinds of mistakes for different groups of learners. Investigating the fairness and reliability of these predictions raises questions about how educational decisions are supported by data.",
      "approach": "A reproducible evaluation of model reliability and subgroup differences using public learning data.",
      "data": "Public OULAD data; no participant recruitment or local student records. Any sensitive-group analysis needs careful interpretation and the institution's secondary-data determination.",
      "contribution": "Offer evidence about when seemingly useful student-risk predictions may be misleading or inequitable.",
      "reading": [
        [
          "Opoku, Pei & Xing (2025) — Accuracy–fairness trade-offs in student prediction",
          "https://doi.org/10.18608/jla.2025.8543"
        ],
        [
          "Wu, Duan & Luo (2026) — Fairness auditing in early-warning models",
          "https://doi.org/10.1371/journal.pone.0352867"
        ]
      ],
      "resources": [
        [
          "OULAD — download and documentation",
          "https://research.stem.open.ac.uk/ouanalyse/dataset/"
        ]
      ]
    },
    {
      id:"A3",
      "route": "Public-data study",
      "area": "learning-analytics",
      "title": "Does more platform activity mean more learning?",
      "question": "Are consistency and type of learning-platform activity more informative about assessment outcomes than the number of clicks alone?",
      "approaches": [
        "dataset"
      ],
      "context": "Learning platforms often treat activity counts as signals of engagement. Yet frequent clicks do not necessarily mean deeper understanding, and different patterns of interaction may have different implications.",
      "approach": "An exploratory analysis of the relationship between recorded online-learning activity and available learning outcomes.",
      "data": "Public OULAD activity and assessment data; no participants or institutional system access are required. Secondary-data governance must be checked.",
      "contribution": "Clarify what platform activity can reasonably tell us about learning, and what remains invisible in clickstream data.",
      "reading": [
        [
          "Tellakat, Boyd & Pennebaker (2019) — Clicking patterns in online courses",
          "https://doi.org/10.1371/journal.pone.0213863"
        ],
        [
          "Kuzilek, Hlosta & Zdrahal (2017) — Open University Learning Analytics dataset",
          "https://doi.org/10.1038/sdata.2017.171"
        ]
      ],
      "resources": [
        [
          "OULAD — download and documentation",
          "https://research.stem.open.ac.uk/ouanalyse/dataset/"
        ]
      ]
    },
    {
      id:"A4",
      "route": "Participant study · ethics required",
      "area": "learning-analytics",
      "title": "Do early support messages change student behaviour?",
      "question": "In a standalone learning activity, do actionable support prompts improve voluntary follow-through compared with neutral reminders?",
      "approaches": [
        "primary"
      ],
      "context": "Early warnings and reminders are commonly proposed as ways to support learners, but noticing a message is not the same as taking action. The effectiveness of supportive communication depends on what it asks learners to do and how they respond.",
      "approach": "A small standalone experiment or pilot involving different forms of voluntary learning support messages.",
      "data": "New data from consenting adult volunteers. Ethics approval and recruitment are needed before collection; the study need not use an existing class or learning-management system.",
      "contribution": "Investigate whether the way support is communicated is associated with meaningful learner follow-through.",
      "reading": [
        [
          "O'Connell & Lang (2018) — Personalised nudges in hybrid classes",
          "https://doi.org/10.1080/15391523.2017.1408438"
        ],
        [
          "Dobronyi, Oreopoulos & Petronijevic (2019) — Goal setting and reminders",
          "https://doi.org/10.1080/19345747.2018.1517849"
        ]
      ],
      "resources": []
    },
    {
      id:"B1",
      "route": "Participant study · ethics required",
      "area": "gamification",
      "title": "Do leaderboards help or hurt motivation?",
      "question": "During a short learning activity, how does leaderboard feedback affect motivation and performance compared with personal-progress feedback?",
      "approaches": [
        "primary",
        "replication"
      ],
      "context": "Leaderboards can make progress visible and encourage competition, but they may also create unhelpful social comparisons. It is worth questioning whether they motivate learners more effectively than feedback about their own improvement.",
      "approach": "A conceptual replication or small experimental study comparing alternative feedback experiences.",
      "data": "A standalone learning activity and consenting adult volunteers. Ethics review and recruitment are required; institutional classes or grades need not be used.",
      "contribution": "Contribute context-sensitive evidence about when competitive feedback helps or hinders learning-related motivation.",
      "reading": [
        [
          "Do et al. (2024) — Longitudinal evidence on leaderboard effectiveness",
          "https://doi.org/10.1016/j.lindif.2024.102572"
        ],
        [
          "Adam & van den Berg — Gamified e-learning quizzes and motivation (supervisor publication)",
          "https://doi.org/10.17159/nfzqpd19"
        ]
      ],
      "resources": []
    },
    {
      id:"B2",
      "route": "Participant study · ethics required",
      "area": "gamification",
      "title": "Badges, activity and actual learning",
      "question": "Do achievement badges change short-term task completion and demonstrated understanding in a controlled learning activity?",
      "approaches": [
        "primary",
        "replication"
      ],
      "context": "Badges may encourage people to complete activities, but increased activity is not automatically evidence of improved understanding. Separating behavioural engagement from learning is an important challenge in gamification research.",
      "approach": "A small empirical comparison of learning experiences with and without achievement badges.",
      "data": "A self-contained activity and consenting adult participants. Ethics clearance and voluntary recruitment are required; no student records are necessary.",
      "contribution": "Examine whether reward signals are associated with participation, learning, or both.",
      "reading": [
        [
          "Hakulinen, Auvinen & Korhonen (2015) — Achievement badges and behaviour",
          "https://doi.org/10.3991/ijet.v10i1.4221"
        ],
        [
          "Kyewski & Krämer (2018) — Badges, motivation and performance",
          "https://doi.org/10.1016/j.compedu.2017.11.006"
        ]
      ],
      "resources": []
    },
    {
      id:"B3",
      "route": "Participant study · ethics required",
      "area": "gamification",
      "title": "Competition versus cooperation in learning",
      "question": "In a small controlled learning activity, how do cooperative goals compare with individual competition in engagement and task performance?",
      "approaches": [
        "primary"
      ],
      "context": "Gamified learning is often designed around individual competition, even though shared goals could influence engagement differently. Understanding the social and learning effects of cooperation could help inform more thoughtful activity design.",
      "approach": "An empirical investigation comparing cooperative and competitive elements in a manageable learning task.",
      "data": "Consenting adult volunteers and a standalone task. Ethics approval is needed, and coordinating participants may be more demanding than in individual tasks.",
      "contribution": "Offer evidence about the different experiences created by cooperative and competitive learning goals.",
      "reading": [
        [
          "Dindar, Ren & Järvenoja (2021) — Gamified cooperation and competition",
          "https://doi.org/10.1111/bjet.12977"
        ],
        [
          "Sailer et al. (2017) — Game design elements and psychological needs",
          "https://doi.org/10.1016/j.chb.2016.12.033"
        ]
      ],
      "resources": []
    },
    {
      id:"B4",
      "route": "Participant study · ethics required",
      "area": "gamification",
      "title": "When does gamification stop being motivating?",
      "question": "Does enthusiasm for repeated reward-heavy learning tasks change over a small number of exposures?",
      "approaches": [
        "primary",
        "replication"
      ],
      "context": "A new reward system may initially appear exciting, but its appeal could shift with repeated exposure. It is important to distinguish short-term novelty from lasting motivational benefits.",
      "approach": "A short repeat-exposure study examining motivation during a gamified learning experience.",
      "data": "A standalone activity with consenting adults. Ethics approval and recruitment are required; a brief study cannot establish semester-long effects.",
      "contribution": "Provide early evidence about changing motivational responses to repeated gamified activity.",
      "reading": [
        [
          "Hanus & Fox (2015) — Longitudinal effects of classroom gamification",
          "https://doi.org/10.1016/j.compedu.2014.08.019"
        ],
        [
          "Rodrigues et al. (2022) — Novelty and familiarisation effects",
          "https://doi.org/10.1186/s41239-021-00314-6"
        ]
      ],
      "resources": []
    },
    {
      id:"C1",
      "route": "Participant study · ethics required",
      "area": "computing-education",
      "title": "Can students debug AI-generated code?",
      "question": "How accurately can novice programmers locate, explain and repair errors in a standardised set of AI-generated programs?",
      "approaches": [
        "primary"
      ],
      "context": "AI-generated programs can look convincing while containing subtle defects. Programming education therefore needs to consider whether learners can critically examine and repair code rather than simply accept generated solutions.",
      "approach": "A primary-data study of how novice programmers reason about and debug AI-generated code.",
      "data": "Prepared programming tasks and consenting adult participants with relevant programming experience. Ethics approval and recruitment are required; no course results need be accessed.",
      "contribution": "Improve understanding of the critical debugging skills needed when learning with generated code.",
      "reading": [
        [
          "Kohen-Vacs, Usher & Jansen (2025) — Correcting AI-generated code",
          "https://doi.org/10.1007/s40593-025-00496-4"
        ]
      ],
      "resources": []
    },
    {
      id:"C2",
      "route": "Participant study · ethics required",
      "area": "computing-education",
      "title": "Does AI coding support create transferable skill?",
      "question": "After practising with AI assistance, can novice programmers solve a related problem independently in the same session?",
      "approaches": [
        "primary"
      ],
      "context": "AI may make solving a programming exercise easier, but support during practice does not necessarily translate into independent ability. Understanding what learners retain when the assistance is removed is an important question.",
      "approach": "A controlled, standalone investigation of assisted programming practice followed by independent work.",
      "data": "Programming activities and consenting adult novice programmers. Ethics approval and recruitment are required; AI tool access must be feasible and documented.",
      "contribution": "Explore the relationship between AI-supported task performance and independently demonstrated programming skill.",
      "reading": [
        [
          "Pankiewicz & Baker (2024) — GPT hints and compiler errors",
          "https://doi.org/10.1145/3649217.3653608"
        ],
        [
          "Adam (2024) — GitHub repositories in programming education (supervisor publication)",
          "https://doi.org/10.34190/icer.1.1.2774"
        ]
      ],
      "resources": []
    },
    {
      id:"C3",
      "route": "Participant study · ethics required",
      "area": "computing-education",
      "title": "Which programming feedback works best?",
      "question": "For a small set of programming errors, which feedback helps novices make correct fixes: rule-based hints or AI-generated hints?",
      "approaches": [
        "primary",
        "replication"
      ],
      "context": "Timely feedback can help novice programmers recover from mistakes, yet the usefulness of AI-generated explanations is not guaranteed. Different feedback approaches may support debugging in different ways.",
      "approach": "A small comparative investigation of feedback provided during programming-error correction.",
      "data": "A prepared set of programming tasks and consenting adult novice programmers. Ethics approval is needed; existing course submissions are not required.",
      "contribution": "Contribute evidence about which qualities of feedback support meaningful error correction.",
      "reading": [
        [
          "Qian, Liu & Zhu (2026) — Effectiveness of AI programming feedback",
          "https://doi.org/10.1057/s41599-026-07920-7"
        ],
        [
          "Er et al. (2025) — Instructor versus AI-generated feedback",
          "https://doi.org/10.1111/bjet.13558"
        ]
      ],
      "resources": []
    },
    {
      id:"C4",
      "route": "Public-data study",
      "area": "computing-education",
      "title": "A reproducible taxonomy of programming errors",
      "question": "Which recurring programming defect categories can be reliably identified in a reproducible subset of public code submissions?",
      "approaches": [
        "dataset"
      ],
      "context": "Programming submissions contain recurring faults, but their labels do not always explain the underlying mistakes. Understanding useful patterns of error can inform how programming is taught and how feedback is designed.",
      "approach": "A reproducible classification study using an appropriately scoped public programming-submission dataset.",
      "data": "Public code submissions from IBM Project CodeNet, subject to its licence and computing constraints. No participant recruitment or local submission access is planned.",
      "contribution": "Develop evidence about recurring defect types without assuming every unsuccessful submission reveals a learner misconception.",
      "reading": [
        [
          "Altadmri & Brown (2015) — 37 million compilations and novice mistakes",
          "https://doi.org/10.1145/2676723.2677258"
        ],
        [
          "Dargan et al. (2025) — Efficiency bugs in student code",
          "https://doi.org/10.1145/3641554.3701939"
        ]
      ],
      "resources": [
        [
          "IBM Project CodeNet — public dataset",
          "https://github.com/IBM/Project_CodeNet"
        ]
      ]
    },
    {
      id:"E1",
      "route": "Participant study · ethics required",
      "area": "research-ai",
      "title": "Can students spot fabricated academic references?",
      "question": "How effectively do novice researchers verify authentic and fabricated references when given access to ordinary scholarly search tools?",
      "approaches": [
        "primary"
      ],
      "context": "Generative AI can produce citations that look plausible even when they do not match real publications. A researcher's ability to check sources is therefore a meaningful part of scholarly information literacy.",
      "approach": "A small primary-data investigation of reference-verification decisions and experiences.",
      "data": "A verified set of reference examples and consenting adult volunteers. Ethics approval is required; real confidential research documents are unnecessary.",
      "contribution": "Explore how novice researchers recognise and verify unreliable references.",
      "reading": [
        [
          "Bhattacharyya et al. (2023) — Fabricated references in AI-generated content",
          "https://doi.org/10.7759/cureus.39238"
        ]
      ],
      "resources": [
        [
          "Crossref — public scholarly metadata search",
          "https://search.crossref.org/"
        ]
      ]
    },
    {
      id:"E2",
      "route": "Computational study",
      "area": "research-ai",
      "title": "Can AI identify weaknesses in a postgraduate research proposal?",
      "question": "How reliably can AI feedback detect specific, pre-defined methodological flaws in synthetic postgraduate research proposals?",
      "approaches": [
        "dataset",
        "replication"
      ],
      "context": "AI can offer persuasive feedback on research writing, but it is not always reliable when judging methodological alignment. Testing how consistently it recognises genuine weaknesses could inform responsible research support.",
      "approach": "A computational evaluation using fictional proposal excerpts and clearly justified methodological criteria.",
      "data": "Student-created synthetic research proposals and accessible AI tools. No real student proposals or human participants are required; institutional AI-use rules still apply.",
      "contribution": "Examine the strengths and limitations of AI feedback on research-methodology quality.",
      "reading": [
        [
          "Dun et al. (2025) — LLM evaluation of study quality",
          "https://doi.org/10.36469/001c.145214"
        ]
      ],
      "resources": []
    },
    {
      id:"E3",
      "route": "Computational study",
      "area": "research-ai",
      "title": "Does AI give reliable advice on research-methods decisions?",
      "question": "When presented with realistic methodological dilemmas, does AI explain sound research choices or produce plausible but misleading recommendations?",
      "approaches": [
        "dataset",
        "replication"
      ],
      "context": "Researchers increasingly ask AI tools for guidance about study design and analysis. Such advice may sound authoritative even when its assumptions or recommendations are incomplete.",
      "approach": "A reproducible computational study of AI advice on synthetic research-methods scenarios.",
      "data": "Research scenarios created by the student, published methodology guidance and an accessible AI tool. No human participants or private datasets are needed.",
      "contribution": "Clarify where AI supports sound methodological reasoning and where human judgement remains essential.",
      "reading": [
        [
          "Paolella & Tadinada (2026) — AI selection of statistical tests",
          "https://doi.org/10.7759/cureus.111768"
        ],
        [
          "Ruta et al. (2025) — Validation of AI-assisted statistical analysis",
          "https://doi.org/10.2196/63550"
        ]
      ],
      "resources": []
    },
    {
      id:"E4",
      "route": "Computational study",
      "area": "research-ai",
      "title": "How reliable are AI-generated research-methods learning activities?",
      "question": "Can AI create accurate, appropriately challenging practice activities that build towards critical research-methods reasoning?",
      "approaches": [
        "dataset",
        "replication"
      ],
      "context": "AI can quickly generate research-methods exercises, but fluent wording does not guarantee that activities are accurate, clear or intellectually challenging. Before considering their use for teaching, their quality needs to be examined.",
      "approach": "A computational evaluation of AI-generated practice activities in a selected area of research methodology.",
      "data": "Synthetic learning materials, relevant published methods literature and accessible AI tools. No participant recruitment is planned; the study cannot by itself demonstrate learning gains.",
      "contribution": "Investigate the quality of AI-generated materials intended to support research-methods reasoning.",
      "reading": [
        [
          "Nguyen et al. (2026) — Cognitive depth of AI-generated questions",
          "https://doi.org/10.1371/journal.pone.0341317"
        ],
        [
          "Evaluating psychometric properties of ChatGPT questions (2024)",
          "https://doi.org/10.1016/j.caeai.2024.100284"
        ]
      ],
      "resources": []
    }
  ]
};
