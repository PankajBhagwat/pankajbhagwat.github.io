/* ============================================================
   SITE CONTENT — this is the only file you should need to edit
   for day‑to‑day updates (new paper, new talk, new award...).
   Everything below is plain JavaScript objects and arrays.
   Keep the commas between entries, and you can't break anything
   the HTML/CSS relies on.
   ============================================================ */

const SITE = {
  name: "Pankaj Bhagwat",
  title: "Assistant Professor",
  dept: "Department of Statistics",
  university: "University of Manitoba",
  office: "UCommon 5-252",
  email_formatted: "Pankaj-dot-Bhagwat-at-umanitoba-dot-ca",
  tagline: "Trustworthy AI · Conformal Prediction · Dependence Modeling for Complex Data",
  location: "Winnipeg, Manitoba, Canada",
  email: "Pankaj.Bhagwat@umanitoba.ca",
  phone: "",
  lastUpdated: "August 31, 2026",
  // TODO: replace these with your real links
  links: {
    scholar: "https://scholar.google.ca/citations?user=Lu4JOj4AAAAJ&hl=en",
    github: "",
    cv: "assets/Pankaj_Bhagwat_CV.pdf",
    orcid: "",
    linkedin: ""
  },
  about: [
    "My work sits at the intersection of statistical theory and machine learning: I develop methods for trustworthy AI — conformal prediction, fairness, and uncertainty quantification — alongside nonparametric tools for dependence and complex, non‑Euclidean data."
  ],

  openings: "I am currently looking for highly motivated graduate and undergraduate students interested in working on the statistical foundations of trustworthy AI, including conformal prediction, uncertainty quantification, fairness, and dependence modeling for complex data. Interested students are welcome to contact me by email with their CV and a brief description of their research interests."

};

// ---- Research interests -------------------------------------------------
const RESEARCH_AREAS = [
  {
    title: "Trustworthy AI & Statistical Machine Learning",
    body: "Uncertainty quantification, conformal prediction, fairness, privacy, synthetic data, risk evaluation for LLMs, AI safety."
  },
  {
    title: "Dependence Modeling & Complex Data",
    body: "Nonparametric dependence measures for metric-space and structured data, independence testing, variable selection, causal inference, empirical process theory."
  },
  {
    title: "Bayesian & Decision-Theoretic Inference",
    body: "Bayesian inference, shrinkage methods, predictive density estimation, statistical decision theory, multivariate analysis."
  }
];

// ---- News (short-form, most recent first) --------------------------------
// Add a new object to the TOP of this array whenever something happens.
const NEWS = [
  { date: "2026-09", text: "Started as Assistant Professor at the University of Manitoba." },
  { date: "2026-07", text: "Started as Max Wyman Assistant Professor at the University of Alberta." },
  { date: "2026-05", text: "RSA-CP accepted to ICML 2026 (Seoul, South Korea)." },
  { date: "2025-09", text: "Fairness/prediction-error paper accepted to NeurIPS 2025." },
  { date: "2025-01", text: "CBMA accepted to ICLR 2025 (Singapore)." }
];

// ---- Education ------------------------------------------------------------
const EDUCATION = [
  {
    degree: "Ph.D. in Statistics",
    school: "Département de mathématiques, Université de Sherbrooke, Canada",
    schoolUrl: "https://www.usherbrooke.ca/mathematiques/",
    years: "2019 – 2023",
    detail: "Thesis: On prediction and estimation problems for some multivariate distributions.",
    advisor: "Prof. Éric Marchand",
    advisorUrl: "https://www.usherbrooke.ca/mathematiques/nous-joindre/personnel/corps-professoral/professeurs/eric-marchand"
  },
  {
  degree: "BS-MS in Mathematics",
  degreeUrl: "https://www.iiserpune.ac.in/education/programmes",
  school: "Indian Institute of Science Education and Research (IISER), Pune",
  schoolUrl: "https://www.iiserpune.ac.in/",
  department: "",
  departmentUrl: "https://www.iiserpune.ac.in/research/department/mathematics",
  years: "2014 – 2019",
  detail: "Thesis: Models and Statistical Inference for Multivariate Count Data."
}
];

// ---- Appointments / research experience (for the timeline) ---------------
const APPOINTMENTS = [
  {
    role: "Assistant Professor",
    place: "Department of Statistics, University of Manitoba",
    placeUrl: "https://umanitoba.ca/science/directory/statistics",
    location: "Canada",
    years: "09/2026 – Present"
  },
  {
    role: "Max Wyman Assistant Professor",
    place: "Department of Mathematical and Statistical Sciences, University of Alberta",
    placeUrl: "https://www.ualberta.ca/en/mathematical-and-statistical-sciences/",
    location: "Canada",
    years: "07/2026 – 08/2026"
  },
  {
    role: "IVADO Long-Term Visiting Researcher",
    roleUrl: "https://ivado.ca/en/thematic-programs/long-term-visitors/",
    place: "IVADO",
    placeUrl: "https://ivado.ca/en/",
    secondaryPlace: "McGill University",
    secondaryPlaceUrl: "https://www.mcgill.ca/",
    location: "Canada",
    years: "05/2026 - 08/2026"
  },
  {
    role: "Postdoctoral Research Fellow",
    place: "Department of Mathematical and Statistical Sciences, University of Alberta",
    placeUrl: "https://www.ualberta.ca/en/mathematical-and-statistical-sciences/",
    location: "Canada",
    years: "09/2023 – 06/2026",
    advisors: [
      {
        name: "Prof. Bei Jiang",
        url: "https://apps.ualberta.ca/directory/person/bei1"
      },
      {
        name: "Prof. Linglong Kong",
        url: "https://apps.ualberta.ca/directory/person/lkong"
      }
    ]
  },
  {
    role: "Visiting Researcher",
    place: "Department of Statistics, Rutgers University",
    placeUrl: "https://statistics.rutgers.edu/",
    location: "USA",
    years: "11/2022 – 02/2023"
  }
];

// ---- Lab ------------------------------------------------------------------
// TODO: rename LAB.name to your actual group name.
const LAB = {
  name: "Research Group",
  intro: "Our group develops statistically principled methods for reliable machine learning, artificial intelligence, and data-driven decision-making. We work on uncertainty quantification, conformal prediction, algorithmic fairness, synthetic-data evaluation, dependence and causal structure in complex data, and Bayesian and decision-theoretic inference. A central goal of our research is to develop methods that are theoretically rigorous, computationally useful, and accompanied by transparent statistical guarantees. We are particularly interested in problems involving limited data, complex or non-Euclidean observations, model uncertainty, and high-stakes applications of modern AI systems.",
  joinNote: "Prospective students interested in conformal prediction, fairness, or dependence modeling are welcome to reach out by email with a CV and a short note on your interests."
};

// One entry per person. `photo` points at assets/lab/<file>.jpg — add the
// file and it appears automatically; leave it pointing at a non-existent
// file and initials are shown instead, so nothing ever looks broken.
const LAB_MEMBERS = [
  {
    name: "Pankaj Bhagwat",
    role: "Principal Investigator",
    bio: "",
    photo: "assets/lab/pankaj-bhagwat.jpg"
  },
  {
    name: "",
    role: "Ph.D. Student",
    bio: "",
    photo: "assets/lab/student1.jpg"
  },
  {
    name: "",
    role: "MS Student",
    bio: "",
    photo: "assets/lab/student1.jpg"
  },
  {
    name: "",
    role: "Undergrad Student",
    bio: "",
    photo: "assets/lab/student1.jpg"
  }
];

// ---- Publications -----------------------------------------------------
// type: "journal" | "review" | "preprint"
const PUBLICATIONS = [
  {
    type: "journal",
    authors: "Bhagwat, P., Yang, Z., Wang, Y., Jiang, B., Kong, L.",
    title: "RSA-CP: Efficient Conformal Prediction in Small-Sample Regimes via Random Score Alignment",
    venue: "Proceedings of the 43rd International Conference on Machine Learning (ICML)",
    year: 2026,
    note: "Acceptance rate 26.60%",
    url: "https://openreview.net/forum?id=4sYfnI9HLV"
  },
  {
    type: "journal",
    authors: "Shi, E., Bhagwat, P., Yang, Z., Kong, L., Jiang, B.",
    title: "Understanding Fairness and Prediction Error through Subspace Decomposition and Influence Analysis",
    venue: "Proceedings of the 39th Conference on Neural Information Processing Systems (NeurIPS)",
    year: 2025,
    note: "Acceptance rate 24.52%",
    url: "https://arxiv.org/abs/2510.23935"
  },
  {
    type: "journal",
    authors: "Bhagwat, P., Kong, L., Jiang, B.",
    title: "CBMA: Improving Conformal Prediction through Bayesian Model Averaging",
    venue: "13th International Conference on Learning Representations (ICLR)",
    year: 2025,
    note: "Acceptance rate 32.08%",
    url: "https://openreview.net/forum?id=BKSeNw2HIr"
  },
  {
    type: "journal",
    authors: "Bhagwat, P., Marchand, É.",
    title: "Predictive density estimators with integrated L1 loss",
    venue: "Journal of Multivariate Analysis, 197, 105190",
    year: 2023,
    url: "https://doi.org/10.1016/j.jmva.2023.105190"
  },
  {
    type: "journal",
    authors: "Bhagwat, P., Marchand, É.",
    title: "Bayesian inference and prediction for mean-mixtures of normal distributions",
    venue: "Electronic Journal of Statistics, 17(2), 1893–1922",
    year: 2023,
    url: "https://projecteuclid.org/journals/electronic-journal-of-statistics/volume-17/issue-2/Bayesian-inference-and-prediction-for-mean-mixtures-of-normal-distributions/10.1214/23-EJS2142.full"
  },
  {
    type: "journal",
    authors: "Bhagwat, P., Marchand, É.",
    title: "On a proper Bayes, but inadmissible estimator",
    venue: "The American Statistician, 74(3), 294–296",
    year: 2019,
    url: "https://doi.org/10.1080/00031305.2019.1604432"
  },

  //{
  //type: "review",
  //  authors: "Bhagwat, P., Jiang, B., Kong, L.",
  //  title: "Beyond Empirical Quantiles: A New Framework for Conformal Prediction",
  //  venue: "",
  //  year: 2026,
   // url: ""
  //},
  //{
  //  type: "review",
  //  authors: "Chilwal, A., Bhagwat, P., Jiang, B., Kong, L.",
  //  title: "Certifying Synthetic Data Generators with Finite-Sample Guarantees",
  //  venue: "",
  //  year: 2026,
  //  url: ""
  //},
  {
    type: "review",
    authors: "Bhagwat, P., Shi, E., Yang, Z., Kong, L., Jiang, B.",
    title: "Achieving Fairness-Utility Trade-offs through Decoupling Direct and Indirect Bias",
    venue: "",
    year: 2026,
    url: "https://openreview.net/pdf?id=X1qSwfzPo1"
  },
  {
    type: "review",
    authors: "Bhagwat, P., Marchand, É.",
    title: "Unbiased estimation in one-parameter exponential families for the inverse of the natural parameter with extensions",
    venue: "",
    year: 2026,
    url: "https://arxiv.org/abs/2507.15077"
  },

  //{
  //  type: "preprint",
  //  authors: "Bhagwat, P., Kong, L., Jiang, B.",
  //  title: "Nonparametric dependence measure for metric space-valued data via conditional distance profiles",
  //  venue: "",
  //  year: 2026,
  //  url: ""
  //},
  
  //{
  //  type: "preprint",
  //  authors: "Bhagwat, P., Kong, L., Jiang, B.",
  //  title: "A Conditional Dependence Measure for Random Objects in Metric Spaces",
  //  venue: "",
  //  year: 2026,
   // url: ""
  //},
  {
    type: "preprint",
    authors: "Bhagwat, P., Strawderman, W., George, E.",
    title: "Proper Bayes minimax multiple shrinkage estimation",
    venue: "",
    year: 2026,
    url: "https://arxiv.org/abs/2607.23717"
  }
];

// ---- Presentations & Invited Talks (most recent first) --------------------
const PRESENTATIONS = [
  { title: "Can External Information improve Conformal Prediction without Sacrificing Reliability", venue: " Département d'informatique et de recherche opérationnelle, Université de Montréal, Canada", kind: "Invited", year: 2026 },
  { title: "Measuring Dependence in Complex Data: A Universal Approach", venue: "Seminar, Département de mathématiques, Université de Sherbrooke, Canada", kind: "Invited", year: 2026 },
  { title: "RSA-CP: Efficient Conformal Prediction in Small-Sample Regimes via Random Score Alignment", venue: "Concordia University, Montréal, Canada", kind: "Invited", year: 2026 },
  { title: "Universal Measures of Dependence for Complex Objects", venue: "IVADO Workshop: Statistics in Trustworthy AI, Montréal, Canada", kind: "Invited", year: 2026 },
  { title: "Beyond Simple Shrinkage: Optimal Estimation in Multi-Target Settings", venue: "Alberta Mathematics Dialogue, Edmonton, Canada", kind: "Invited", year: 2026 },
  { title: "CBMA: Improved Conformal Prediction through Bayesian Model Averaging", venue: "ICLR, Singapore", kind: "Poster", year: 2025 },
  { title: "Integrating Bayesian Model Averaging with Conformal Prediction", venue: "Seminar, Département de mathématiques, Université de Sherbrooke, Canada", kind: "Invited", year: 2024 },
  { title: "Improving Conformal Prediction through Bayesian Model Averaging under Model Misspecification", venue: "CANSSI Showcase", kind: "Lightning Talk", year: 2024 },
  { title: "Predictive Density Estimators with Integrated L1 Loss", venue: "Joint Statistical Meetings (JSM), Toronto, Canada", kind: "Talk", year: 2023 },
  { title: "Predictive Density Estimators with Integrated L1 Loss", venue: "STATQAM Seminar Series, UQAM, Québec, Canada", kind: "Invited", year: 2023 },
  { title: "On the Construction of Bayes Minimax Multiple Shrinkage Estimators", venue: "Statistical Society of Canada (SSC), Ottawa, Canada", kind: "Talk", year: 2023 },
  { title: "Improved Predictive Densities for Mean Mixtures of Normal Distributions under KL Loss", venue: "Seminar, Dept. of Statistics, Université de Sherbrooke", kind: "Invited", year: 2022 },
  { title: "Bayesian Inference and Prediction for Mean Mixtures of Normal Distributions", venue: "Junior International Society for Bayesian Analysis (j-ISBA), Montréal, Canada", kind: "Talk", year: 2022 },
  { title: "Improved Predictive Density Estimators for Mean Mixtures of Normal Distributions", venue: "Statistical Society of Canada (SSC), Canada", kind: "Talk", year: 2022 },
  { title: "Improved Predictive Density Estimators for Multivariate Skew-Normal Distributions", venue: "International Society for Bayesian Analysis (ISBA), Online", kind: "Talk", year: 2021 },
  { title: "Efficient Predictive Density Estimation for Multivariate Skew-Normal Distributions", venue: "Statistical Society of Canada (SSC), Online", kind: "Talk", year: 2021 },
  { title: "Models and Statistical Inference for Multivariate Count Data", venue: "IISER Pune, Pune, India", kind: "Invited", year: 2019 },
  { title: "Models and Statistical Inference for Multivariate Count Data", venue: "Seminar, Département de mathématiques, Université de Sherbrooke, Canada", kind: "Invited", year: 2018 },
  { title: "Computing Issues in Regression Analysis and Testing Statistical Hypothesis", venue: "Human Genetics Unit, Indian Statistical Institute (ISI), Kolkata, India", kind: "Invited", year: 2017 }
];

// ---- Teaching ---------------------------------------------------------
// To link a future course webpage, add: page: "courses/stat-151.html"
const TEACHING = [
  { course: "STAT 1000 — Basic Statistical Analysis I", place: "University of Manitoba", term: "Fall 2026", role: "Term Instructor" },
  { course: "STAT 151 — Introduction to Applied Statistics I", place: "University of Alberta", term: "Fall 2025, Fall 2024", role: "Term Instructor" },
  { course: "STAT 161 — Introduction to Statistics: Business & Economics", place: "University of Alberta", term: "Spring 2024", role: "Term Instructor" },
  { course: "Linear Algebra and Vector Geometry", place: "Université de Sherbrooke", term: "2023", role: "Teaching Assistant" },
  { course: "Applied Statistics", place: "Université de Sherbrooke", term: "2020 – 2023", role: "Teaching Assistant" },
  { course: "Vector Calculus", place: "Université de Sherbrooke", term: "2022", role: "Teaching Assistant" },
  { course: "Survival Analysis", place: "Université de Sherbrooke", term: "2020", role: "Teaching Assistant" }
];

const TEACHING_CERTS = [
  "Graduate Teaching and Learning Program Level 3: Course Design and Pedagogy, University of Alberta (2026)",
  "Graduate Teaching and Learning Program Level 2: Practicum, University of Alberta (2025)",
  "Graduate Teaching and Learning Program I, University of Alberta (2025)",
  "Generative AI for Educators Certificate, Google (2025)"
];

// ---- Mentorship ---------------------------------------------------------
const MENTORSHIP = [
  { topic: "Conformal prediction for small samples", students: "Zhixian Yang (3rd-year Ph.D.), Yihao Wang (1st-year Ph.D.)" },
  { topic: "Synthetic data fidelity", students: "Aditya Chilwal (2nd-year M.S.)" },
  { topic: "Fair conformal prediction", students: "Jiamei Wu (2nd-year Ph.D.)" }
];

// ---- Photo gallery -------------------------------------------------------
// To add a new photo:
// 1. Place the image in assets/gallery/
// 2. Add one object below with its filename, alt text, and caption.
// It will automatically become part of the rotating gallery.

const GALLERY = [
  {
    image: "assets/gallery/IVADO2026groupphoto.jpg",
    alt: "Group photo from the IVADO Thematic Semester 2026 in Montréal",
    caption: "IVADO Thematic Semester 2026 — Statistical Foundations for Trustworthy AI, Montréal, May 11, 2026."
  },
  {
    image: "assets/gallery/PhotowithEric.jpg",
    alt: "Photo with PhD supervisor Éric Marchand",
    caption: "A memorable moment with my PhD supervisor, Éric Marchand. Throughout this journey, Éric has been a mentor and guide, and together we shared the longest academic adventure of my life. (2023)"
  },
  {
    image: "assets/gallery/Convocation2023.jpg",
    alt: "PhD convocation at the Université de Sherbrooke",
    caption: "Receiving my PhD degree from my supervisor and the Dean of the Faculty of Science at the Université de Sherbrooke. (2024)"
  },
  {
    image: "assets/gallery/RutgersBlackboard.jpg",
    alt: "Blackboard during a research visit to Rutgers University",
    caption: "During my research visit to Rutgers University, where I had the opportunity to work with Professor William E. Strawderman on a challenging statistical problem that led to a beautiful result. (2022)"
  },
  {
    image: "assets/gallery/Hotpotdinner.png",
    alt: "Jiang–Kong Lab members at a hot pot dinner in Edmonton",
    caption: "An enjoyable Jiang–Kong Lab get-together over hot pot in Edmonton. (2025)"
  },
  {
    image: "assets/gallery/PhotowithEd.png",
    alt: "Discussion meeting with Ed",
    caption: "A screenshot from one of our regular online meetings captured by Ed. (2026)"
  },
  {
    image: "assets/gallery/iiser_convocation_gold_medal_collage.jpg",
    alt: "IISER Gold Medal",
    caption: "Receiving the IISER Pune Gold Medal at the 2019 Convocation Ceremony."
  }
];

// ---- Awards & Honors (grouped) ------------------------------------------
const AWARDS = {
  "Scholarships & Fellowships": [
    "ISM Scholarship for Outstanding Ph.D. Candidates, ISM–UQAM, Québec (2022)",
    "ISM Fellowship for Graduate Students, ISM–UQAM, Québec (2020, 2021)",
    "Mitacs Globalink Graduate Fellowship (2019)",
    "Mitacs Globalink Research Intern Fellowship (2018)",
    "Indian Academy of Science Summer Research Fellowship (2017)",
    "Infosys Foundation Scholarship (2016–2017)",
    "Department of Science and Technology INSPIRE Fellowship, Govt. of India (2014–2019)",
    "IOCL Education Scholarship, Govt. of India (2012–2014)",
    "National Merit-cum-Means Scholarship, Govt. of India (2010–2012)"
  ],
  "Awards & Distinctions": [
    "Silver Reviewer Award, ICML 2026 (2026)",
    "PDFA Travel Award, ICLR 2025, University of Alberta (2025)",
    "Dean's Honor List, Faculty of Sciences, Université de Sherbrooke (2023, 2024)",
    "Student Travel Award, Statistical Society of Canada (2021, 2023)",
    "Gold Medal, BS-MS Program, IISER Pune (2019)",
    "Honourable Mention, Master's Thesis, IISER Pune (2019)",
    "Academic Excellence Award, Best Academic Performance, IISER Pune (2017)",
    "C. N. R. Rao Education Foundation Prize, IISER Pune (2016)"
  ],
  "Competitions & Exams": [
    "CSIR–NET JRF (Mathematics & Statistics): All-India Rank 3 (2018), All-India Rank 83 (2017)",
    "Madhava Mathematics Competition — selected for National Camp, TIFR Mumbai & SP College Pune (2016)",
    "National Vijyoshi Science Camp, IISc Bangalore (2014)",
    "IISER Aptitude Test (2014)",
    "Maharashtra State Board Exams — Top 1% in HSC (2014) and SSC (2012)",
    "Maharashtra Talent Search Exam — State Rank 29 (2010), 26 (2011), 23 (2012)",
    "Maharashtra State Merit Scholarship (2006–2009)"
  ]
};

// ---- Service, grants, outreach -------------------------------------------
const SERVICE = [
  "Journal Reviewer — Journal of the American Statistical Association, Statistica Sinica, Journal of Multivariate Analysis, Data Science in Science, Transactions on Machine Learning Research",
  "Conference Reviewer — ICLR, ICML, NeurIPS, AAAI",
  "Judge, University of Alberta Three Minute Thesis (3MT®) Competition (2025)"
];

const GRANTS = [
  {
    title: "Assistant Professor Start-up Research Fund",
    role: "Principal Investigator",
    amount: "",
    detail: "Institutional start-up funding (University of Manitoba).",
    year: "Sep 2026 - Present"
  },
  {
    title: "Max Wyman Assistant Professor Start-up Research Fund",
    role: "Principal Investigator",
    amount: "",
    detail: "Institutional start-up funding (University of Alberta).",
    year: "Jul - Aug 2026"
  },
];

const OUTREACH = [
  "Delegate, Indian Youth Delegation to China — representing IISER Pune among 200 participants nationwide (2016)",
  "Volunteer, Rashtriya Avishkar Yojana (Government of India) — STEM sessions in schools (2016)",
  "Student Volunteer, DISHA Program, IISER Pune — mathematics and science sessions for underrepresented students; featured in Pahal (2016)"
];

const MEMBERSHIPS = [
  "Member, AI Career Accelerator Program, Alberta Machine Intelligence Institute (Amii) (2023 – present)",
  "Member, Statistical Society of Canada (SSC) and International Society for Bayesian Analysis (ISBA) (2020 – present)"
];

