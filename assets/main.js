(() => {
  const THEME_KEY = "theme";
  const LANG_KEY = "lang";
  const root = document.documentElement;

  const themeBtn = document.getElementById("themeToggle");
  const langFR = document.getElementById("langFR");
  const langEN = document.getElementById("langEN");

  const dict = {
    fr: {
      title: "Data Analyst / Data Scientist Junior",
      darkMode: "Sombre",
      contactMe: "Me contacter",
      info: "Infos",
      skills: "Compétences",
      bi: "Data Analysis / BI",
      langs: "Langages",
      about: "À propos",
      aboutText: "Passionné par l’intelligence artificielle et la science des données, je conçois des solutions orientées décision (dashboards, analyses) et des solutions prédictives (machine learning), déployables dans des contextes réels.",
      latestProjects: "Projets",
      selected: "Sélection",
      daProjects: "Projets Data Analyst",
      dsProjects: "Projets Data Science",
      p1title: "Analyse de la végétalisation à Paris",
      p1sub: "Exploration et visualisation de données environnementales (open data).",
      p1text: "Nettoyage, analyse et visualisations pour produire des insights actionnables.",
      p2sub: "Web scraping, nettoyage et analyse descriptive.",
      p2text: "Extraction automatisée et production d’indicateurs/visualisations.",
      p3title: "Détection d’engins",
      p3sub: "Computer Vision pour la détection/classification de véhicules.",
      p3text: "Dataset, entraînement deep learning, évaluation et démo.",
      p4sub: "Assistant LLM orienté accessibilité.",
      p4text: "Pipeline NLP, intégration modèle de langage et interface.",
      p5title: "Risque Crédit (Modélisation prédictive)",
      p5sub: "Scoring ML + interface Streamlit.",
      p5text: "Feature engineering, modèle supervisé, évaluation et déploiement.",
      quote: "« La donnée n’a de valeur que lorsqu’elle éclaire une décision. »"
    },
    en: {
      title: "Junior Data Analyst / Data Scientist",
      darkMode: "Dark",
      contactMe: "Contact Me",
      info: "Info",
      skills: "Skills",
      bi: "Data Analysis / BI",
      langs: "Languages",
      about: "About",
      aboutText: "I’m passionate about AI and data science. I build decision-oriented solutions (dashboards, analytics) and predictive solutions (machine learning) that can be deployed in real-world contexts.",
      latestProjects: "Projects",
      selected: "Selected",
      daProjects: "Data Analyst Projects",
      dsProjects: "Data Science Projects",
      p1title: "Paris Greening Analysis",
      p1sub: "Exploratory analysis and visualization of environmental open data.",
      p1text: "Cleaning, analysis and visualizations to produce actionable insights.",
      p2sub: "Web scraping, cleaning and descriptive analytics.",
      p2text: "Automated extraction and KPI/visual production.",
      p3title: "Vehicle Detection",
      p3sub: "Computer Vision for vehicle detection/classification.",
      p3text: "Dataset, deep learning training, evaluation and demo.",
      p4sub: "Accessibility-oriented LLM assistant.",
      p4text: "NLP pipeline, LLM integration and demo interface.",
      p5title: "Credit Risk (Predictive Modeling)",
      p5sub: "ML scoring + Streamlit interface.",
      p5text: "Feature engineering, supervised model, evaluation and deployment.",
      quote: "“Data only matters when it informs decisions.”"
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

  // init lang
  const savedLang = localStorage.getItem(LANG_KEY) || "fr";
  applyI18n(savedLang);

  // init theme
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  applyTheme(initialTheme);

  // events
  langFR?.addEventListener("click", () => { localStorage.setItem(LANG_KEY, "fr"); applyI18n("fr"); setThemeBtn(root.dataset.theme); });
  langEN?.addEventListener("click", () => { localStorage.setItem(LANG_KEY, "en"); applyI18n("en"); setThemeBtn(root.dataset.theme); });

  themeBtn?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
})();
