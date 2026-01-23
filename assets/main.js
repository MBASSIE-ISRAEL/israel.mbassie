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
      lang1: "Français — Langue maternelle",
      lang2: "Anglais — Niveau B2",
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
      certRgpdDesc: "Intégrer le respect du RGPD dans une gestion professionnelle des données.",
      certCyberTitle: "Cybersecurity Awareness",
      certCyberMeta: "SUEZ • 30 minutes • Octobre 2024",
      certCyberDesc: "Sensibilisation aux risques cyber et aux bonnes pratiques de sécurité de l’information.",
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
      expNpspDept: "Centrale d’achats pharmaceutiques — Direction Logistique Pharmaceutique",
      expNpsp1: "Analyses statistiques pour la stratégie d’achat (consommations, prévisions, prix fournisseurs).",
      expNpsp2: "Structuration et gestion de bases de données achats sous Excel et Access.",
      expNpsp3: "Développement et automatisation de reportings décisionnels.",
      expNpsp4: "Production de rapports et présentations pour la Direction Achats & Approvisionnements.",
      expNpsp5: "Soutien opérationnel : traitement de factures proforma, suivi de commandes, numérisation et archivage documentaire.",

      eduEslscaDates: "oct 2025 – actuellement",
      eduEslscaProgram: "MBA Data Finance Performance",
      eduEslscaCourses: "Matières clés : Data Visualisation, Modélisation financière, Machine Learning, Data Analytics, Data Management et Gouvernance de la donnée.",
      eduIasDates: "sept 2023 – sept 2025",
      eduIasProgram: "Mastère Management de Projet & Data",
      eduIasCourses: "Matières clés : Python, Machine Learning, SQL, Analyse de données, Probabilités, Modélisation et analyse de données, Data Pipelines.",
      eduIuaDates: "déc 2019 – sept 2022",
      eduIuaProgram: "Licence en Mathématiques Appliquées — option Actuariat",
      eduIuaCourses: "Matières clés : Statistiques, Probabilités, Modélisation mathématiques, Programmation orientée objet."
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
      lang1: "French — Native",
      lang2: "English — B2",
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
      certRgpdDesc: "Integrating GDPR compliance into professional data management practices.",
      certCyberTitle: "Cybersecurity Awareness",
      certCyberMeta: "SUEZ • 30 minutes • October 2024",
      certCyberDesc: "Awareness of cyber risks and best practices in information security.",
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
      expNpspDept: "Pharmaceutical Central Purchasing — Logistics Department",
      expNpsp1: "Statistical analyses for procurement strategy (consumption, forecasting, supplier pricing).",
      expNpsp2: "Procurement database structuring and management using Excel and Access.",
      expNpsp3: "Decision reporting design and automation.",
      expNpsp4: "Reports and presentations for Procurement & Supply teams.",
      expNpsp5: "Operational support: proforma invoice processing, order tracking, document digitization and archiving.",

      eduEslscaDates: "Oct 2025 – Present",
      eduEslscaProgram: "MBA Data Finance Performance",
      eduEslscaCourses: "Key modules: Data Visualization, Financial Modeling, Machine Learning, Data Analytics, Data Management and Data Governance.",
      eduIasDates: "Sep 2023 – Sep 2025",
      eduIasProgram: "Master’s in Project Management & Data",
      eduIasCourses: "Key modules: Python, Machine Learning, SQL, Data Analysis, Probability, Modeling & Data Analytics, Data Pipelines.",
      eduIuaDates: "Dec 2019 – Sep 2022",
      eduIuaProgram: "BSc in Applied Mathematics — Actuarial track",
      eduIuaCourses: "Key modules: Statistics, Probability, Mathematical Modeling, Object-Oriented Programming."
    }
  };

  function applyI18n(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
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
    if (label) label.textContent = isDark ? (root.lang === "fr" ? "Clair" : "Light") : (root.lang === "fr" ? "Sombre" : "Dark");
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
