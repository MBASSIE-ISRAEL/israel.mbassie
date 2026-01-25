(() => {
  const THEME_KEY = "theme";
  const LANG_KEY = "lang";
  const root = document.documentElement;

  const themeBtn = document.getElementById("themeToggle");
  const langFR = document.getElementById("langFR");
  const langEN = document.getElementById("langEN");

  const dict = {
    fr: {
      title: "Data Scientist | Data Analyst | Power Platform | Procurement",
      darkMode: "Sombre",
      downloadCV: "Télécharger mon CV",
      navAbout: "À propos",
      navProjects: "Projets",
      navExperience: "Expériences",
      navEducation: "Formation",
      navCerts: "Certifications",
      info: "Infos",
      skills: "Compétences",
      bi: "Data Analysis / BI",
      powerPlatform: "Power Platform",
      langs: "Langages",
      languages: "Langues",
      lang1: "Français : Langue maternelle",
      lang2: "Anglais : Niveau B2",
      about: "À propos",
      aboutText: "Data Scientist et Data Analyst orienté métier, je conçois des solutions décisionnelles (dashboards, reporting, automatisation) et des modèles prédictifs (machine learning), en veillant à la qualité des données et à la mise en production.",
      latestProjects: "Projets",
      selected: "Sélection",
      daProjects: "Data Analyst",
      dsProjects: "Data Science",
      viewGitHub: "Voir sur GitHub",
      viewPDF: "Voir le PDF",
      experience: "Expériences professionnelles",
      viewProof: "Voir attestation",
      education: "Formation",
      viewDiploma: "Voir diplôme",
      inProgress: "En cours",
      certsTitle: "Certifications",
      viewCert: "Voir la certification",
      certRgpdTitle: "Protection des données (RGPD)",
      certRgpdMeta: "SUEZ • 45 minutes • Mars 2025",
      certCyberTitle: "Cybersecurity Awareness",
      certCyberMeta: "SUEZ • 30 minutes • Octobre 2024",
      quote: "« La donnée n’a de valeur que lorsqu’elle éclaire une décision. »",

      expSuezDates: "sept 2024 – sept 2025",
      expSuezRole: "Chargé de Projet Data & Achats (Alternance)",
      expSuezDept: "Direction Procurement Excellence, Service Process & Outils",
      expSuez1: "Pilotage et amélioration de la data achats : consolidation multi-outils (P2P/ERP – S2P/Ivalua), réconciliation des référentiels fournisseurs et fiabilisation des données.",
      expSuez2: "Développement et optimisation de reportings Power BI pour le pilotage achats (montants commandés pluriannuels, segmentation fournisseurs, KPI de performance).",
      expSuez3: "Maintenance évolutive d’outils d’aide à la décision : résolution d’anomalies fonctionnelles, optimisation des performances et enrichissement fonctionnel.",
      expSuez4: "Extraction, transformation et automatisation de flux de données via SQL, Python et Excel.",
      expSuez5: "Conception de guides utilisateurs, documentation technico-fonctionnelle et amélioration de l’UX des outils internes.",

      expNpspDates: "nov 2022 – août 2023",
      expNpspRole: "Data Analyst Achats (Stage)",
      expNpspDept: "Centrale d’achats pharmaceutiques, Direction Logistique Pharmaceutique",
      expNpsp1: "Analyses statistiques pour la stratégie d’achat (consommations, prévisions, prix fournisseurs).",
      expNpsp2: "Structuration et gestion de bases de données achats sous Excel et Access.",
      expNpsp3: "Développement et automatisation de reportings décisionnels.",
      expNpsp4: "Production de rapports et présentations pour la Direction Achats & Approvisionnements.",
      expNpsp5: "Soutien opérationnel : traitement de factures proforma, suivi de commandes, numérisation et archivage documentaire.",

      eduEslscaDates: "oct 2025 – actuellement",
      eduEslscaProgram: "MBA Data Finance Performance",
      eduIasDates: "sept 2023 – sept 2025",
      eduIasProgram: "Mastère Management de Projet & Data",
      eduIuaDates: "déc 2019 – sept 2022",
      eduIuaProgram: "Licence en Mathématiques Appliquées (option Actuariat)",

      // labels for project paragraphs
      lbl_context: "Contexte & enjeux",
      lbl_method: "Approche & réalisation",
      lbl_impact: "Apports & résultats",

      // Projects - Uber
      p_uber_title: "Uber Dashboard (Data Visualisation & Pilotage de la performance)",
      p_uber_ctx: "Dans des environnements opérationnels à fort volume de données, la data visualisation est essentielle pour transformer l’information brute en indicateurs décisionnels exploitables.",
      p_uber_meth: "J’ai conçu un tableau de bord Power BI pour suivre l’activité via des KPI clés (réservations, revenus, annulations, satisfaction), en structurant le modèle de données et les mesures.",
      p_uber_res: "Le dashboard fournit une lecture synthétique et dynamique de la performance, facilite l’analyse temporelle et soutient le pilotage stratégique et opérationnel.",

      // Projects - Green
      p_green_title: "Analyse de la végétalisation à Paris",
      p_green_ctx: "La végétalisation urbaine est un levier d’adaptation climatique et un indicateur clé de qualité de vie. Analyser sa répartition permet d’orienter les actions de verdissement.",
      p_green_meth: "J’ai exploité des données open data afin de mesurer la distribution de la végétation par zones et arrondissements, avec nettoyage, structuration et analyses descriptives.",
      p_green_res: "L’étude met en évidence des disparités territoriales et permet d’identifier des zones prioritaires pour des actions ciblées.",

      // Projects - Books
      p_books_title: "Scraping Books (Analyse de données issues du web)",
      p_books_ctx: "Les données web constituent une source précieuse pour analyser des tendances, à condition de pouvoir les collecter, fiabiliser et structurer correctement.",
      p_books_meth: "J’ai développé un pipeline de scraping pour extraire catégories, prix et notations, puis construit un dataset propre et prêt pour l’analyse et la visualisation.",
      p_books_res: "Le projet aboutit à une analyse comparative des segments, à des distributions de prix/notes et à des visualisations synthétiques.",

      // Projects - CV
      p_cv_title: "Détection d’engins (Vision par ordinateur)",
      p_cv_ctx: "La reconnaissance d’objets est au cœur de nombreux usages en sécurité, mobilité et analyse vidéo, où l’automatisation améliore la rapidité et la fiabilité.",
      p_cv_meth: "J’ai constitué un dataset, entraîné un modèle de deep learning et évalué ses performances afin de détecter et classifier des véhicules à partir d’images.",
      p_cv_res: "Le modèle obtenu identifie automatiquement différents engins avec un bon niveau de précision sur des images réelles.",

      // Projects - Chat
      p_chat_title: "Chatbot Raven Fox (Assistant intelligent)",
      p_chat_ctx: "Les assistants conversationnels améliorent l’accessibilité en fournissant une aide immédiate et contextualisée, notamment pour des publics ayant des besoins spécifiques.",
      p_chat_meth: "J’ai conçu un pipeline NLP et intégré un modèle de langage, avec une interface simple visant un usage pratique et une expérience utilisateur fluide.",
      p_chat_res: "Le résultat est un prototype fonctionnel capable de répondre à des requêtes ciblées et de servir de base à une solution plus complète.",

      // Projects - Credit
      p_credit_title: "Risque Crédit (Modélisation prédictive)",
      p_credit_ctx: "Anticiper la probabilité de défaut est essentiel pour sécuriser l’octroi de crédit et optimiser la gestion du risque.",
      p_credit_meth: "J’ai construit un modèle de scoring : préparation des données, feature engineering, modèles supervisés, évaluation et mise à disposition via une interface de démonstration.",
      p_credit_res: "Le pipeline permet d’estimer efficacement la probabilité de défaut et illustre une approche machine learning orientée décision."
    },

    en: {
      title: "Data Scientist | Data Analyst | Power Platform | Procurement",
      darkMode: "Dark",
      downloadCV: "Download my CV",
      navAbout: "About",
      navProjects: "Projects",
      navExperience: "Experience",
      navEducation: "Education",
      navCerts: "Certifications",
      info: "Info",
      skills: "Skills",
      bi: "Data Analysis / BI",
      powerPlatform: "Power Platform",
      langs: "Languages",
      languages: "Languages",
      lang1: "French: Native",
      lang2: "English: B2",
      about: "About",
      aboutText: "Business-oriented Data Scientist and Data Analyst. I build decision-making solutions (dashboards, reporting, automation) and predictive models (machine learning), with a strong focus on data quality and deployment.",
      latestProjects: "Projects",
      selected: "Selected",
      daProjects: "Data Analyst",
      dsProjects: "Data Science",
      viewGitHub: "View on GitHub",
      viewPDF: "View PDF",
      experience: "Work Experience",
      viewProof: "View proof",
      education: "Education",
      viewDiploma: "View diploma",
      inProgress: "In progress",
      certsTitle: "Certifications",
      viewCert: "View certification",
      certRgpdTitle: "Data Protection (GDPR)",
      certRgpdMeta: "SUEZ • 45 minutes • March 2025",
      certCyberTitle: "Cybersecurity Awareness",
      certCyberMeta: "SUEZ • 30 minutes • October 2024",
      quote: "“Data only matters when it informs decisions.”",

      expSuezDates: "Sep 2024 – Sep 2025",
      expSuezRole: "Data & Procurement Project Officer (Apprenticeship)",
      expSuezDept: "Procurement Excellence, Process & Tools Department",
      expSuez1: "Procurement data improvement: multi-tool consolidation (P2P/ERP – S2P/Ivalua), supplier master data reconciliation and data quality assurance.",
      expSuez2: "Power BI dashboards for procurement steering (multi-year spend, supplier segmentation, performance KPIs).",
      expSuez3: "Decision-support tool maintenance: issue resolution, performance optimization and feature enhancements.",
      expSuez4: "Data extraction, transformation and automation using SQL, Python and Excel.",
      expSuez5: "User guides, techno-functional documentation and UX improvements for internal tools.",

      expNpspDates: "Nov 2022 – Aug 2023",
      expNpspRole: "Procurement Data Analyst (Internship)",
      expNpspDept: "Central pharmaceutical purchasing, Logistics Department",
      expNpsp1: "Statistical analyses for procurement strategy (consumption, forecasting, supplier pricing).",
      expNpsp2: "Procurement database structuring and management using Excel and Access.",
      expNpsp3: "Decision reporting design and automation.",
      expNpsp4: "Reports and presentations for Procurement & Supply teams.",
      expNpsp5: "Operational support: proforma invoice processing, order tracking, document digitization and archiving.",

      eduEslscaDates: "Oct 2025 – Present",
      eduEslscaProgram: "MBA Data Finance Performance",
      eduIasDates: "Sep 2023 – Sep 2025",
      eduIasProgram: "Master’s in Project Management & Data",
      eduIuaDates: "Dec 2019 – Sep 2022",
      eduIuaProgram: "BSc in Applied Mathematics (Actuarial track)",

      lbl_context: "Context & stakes",
      lbl_method: "Approach & delivery",
      lbl_impact: "Outcome & value",

      p_uber_title: "Uber Dashboard (Data Visualization & Performance Steering)",
      p_uber_ctx: "In high-volume operational environments, data visualization is essential to transform raw information into actionable decision-making indicators.",
      p_uber_meth: "I built a Power BI dashboard to monitor key KPIs (bookings, revenue, cancellations, satisfaction), designing the data model and measures for decision-oriented views.",
      p_uber_res: "The dashboard provides a clear and dynamic performance overview, enables time-based analysis and supports strategic and operational steering.",

      p_green_title: "Paris Greening Analysis",
      p_green_ctx: "Urban greening is a key lever for climate adaptation and quality of life. Understanding its spatial distribution helps prioritize greening actions effectively.",
      p_green_meth: "I used open data to assess vegetation distribution by area and district, including cleaning, structuring and descriptive analysis.",
      p_green_res: "The analysis highlights territorial disparities and helps identify priority zones for targeted initiatives.",

      p_books_title: "Book Scraping (Web Data Analysis)",
      p_books_ctx: "Web data is a valuable source for trend analysis, provided it can be reliably collected, cleaned and structured.",
      p_books_meth: "I developed a scraping pipeline to extract categories, prices and ratings, then built a clean dataset ready for analysis and visualization.",
      p_books_res: "The project delivers segment comparisons, price/rating distributions and concise visual insights.",

      p_cv_title: "Vehicle Detection (Computer Vision)",
      p_cv_ctx: "Object recognition is central to mobility, security and video analytics, where automation improves speed and reliability.",
      p_cv_meth: "I built a dataset, trained a deep learning model and evaluated performance to detect and classify vehicles from images.",
      p_cv_res: "The resulting model reliably identifies multiple vehicle types on real-world images.",

      p_chat_title: "Raven Fox Chatbot (Intelligent Assistant)",
      p_chat_ctx: "Conversational assistants can improve accessibility by delivering immediate, contextual support for users with specific needs.",
      p_chat_meth: "I designed an NLP pipeline and integrated an LLM with a simple interface focused on usability and user experience.",
      p_chat_res: "The outcome is a functional prototype that answers targeted queries and can evolve into a richer assistance solution.",

      p_credit_title: "Credit Risk (Predictive Modeling)",
      p_credit_ctx: "Estimating default probability is essential to secure credit decisions and optimize risk management.",
      p_credit_meth: "I built a scoring model pipeline: data preparation, feature engineering, supervised modeling, evaluation and an interactive demo interface.",
      p_credit_res: "The pipeline estimates default probability effectively and illustrates a decision-oriented machine learning approach."
    }
  };

  function applyI18n(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[lang] && dict[lang][key] !== undefined) {
        el.textContent = dict[lang][key];
      }
    });

    root.setAttribute("lang", lang);

    langFR?.classList.toggle("btn-secondary", lang === "fr");
    langFR?.classList.toggle("btn-outline-secondary", lang !== "fr");
    langEN?.classList.toggle("btn-secondary", lang === "en");
    langEN?.classList.toggle("btn-outline-secondary", lang !== "en");
  }

  function setThemeBtn(theme) {
    if (!themeBtn) return;
    const icon = themeBtn.querySelector("i");
    const label = themeBtn.querySelector("span");
    const isDark = theme === "dark";

    if (icon) icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    const currentLang = root.getAttribute("lang") || "fr";
    if (label) {
      label.textContent = isDark
        ? (currentLang === "fr" ? "Clair" : "Light")
        : (currentLang === "fr" ? "Sombre" : "Dark");
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    setThemeBtn(theme);
  }

  const savedLang = localStorage.getItem(LANG_KEY) || "fr";
  applyI18n(savedLang);

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  applyTheme(initialTheme);

  langFR?.addEventListener("click", () => {
    localStorage.setItem(LANG_KEY, "fr");
    applyI18n("fr");
    setThemeBtn(root.dataset.theme);
  });

  langEN?.addEventListener("click", () => {
    localStorage.setItem(LANG_KEY, "en");
    applyI18n("en");
    setThemeBtn(root.dataset.theme);
  });

  themeBtn?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
})();

// ==============================
// Umami: tracking complet des clics sur liens
// ==============================
(function () {
  // Vérifie que Umami est bien chargé
  function hasUmami() {
    return typeof window.umami !== "undefined" && typeof window.umami.track === "function";
  }

  // Normalise texte (évite events illisibles)
  function cleanText(s) {
    return (s || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 80);
  }

  // Trouver une "section" logique (id de section, nav, header, footer, etc.)
  function getSection(el) {
    const section = el.closest("section[id]");
    if (section && section.id) return section.id;

    if (el.closest("header")) return "header";
    if (el.closest("nav")) return "nav";
    if (el.closest("footer")) return "footer";
    if (el.closest("aside")) return "sidebar";

    return "page";
  }

  // Résout URL absolute
  function toAbsoluteUrl(href) {
    try {
      return new URL(href, window.location.href).toString();
    } catch {
      return href;
    }
  }

  // Émet un event Umami
  function trackLinkClick(a) {
    const href = a.getAttribute("href") || "";
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;

    const abs = toAbsoluteUrl(href);

    // Si tu veux exclure certains liens, fais-le ici:
    // if (abs.includes("cdn.jsdelivr.net")) return;

    let domain = "";
    try {
      domain = new URL(abs).hostname;
    } catch {
      domain = "";
    }

    const payload = {
      section: getSection(a),
      text: cleanText(a.textContent) || cleanText(a.getAttribute("aria-label")) || "link",
      href: abs,
      domain: domain,
      isExternal: domain && domain !== window.location.hostname ? "1" : "0",
    };

    // Event unique et lisible par type
    // (tu peux changer "click_link" si tu veux)
    window.umami.track("click_link", payload);
  }

  // Délégation : capte tous les clics sur <a>
  document.addEventListener("click", function (e) {
    const a = e.target.closest && e.target.closest("a");
    if (!a) return;

    // Laisse priorité aux liens avec data-umami-event (si tu en ajoutes ponctuellement)
    if (a.hasAttribute("data-umami-event")) return;

    // Attend Umami si le script charge un peu après
    if (!hasUmami()) return;

    trackLinkClick(a);
  });
})();

