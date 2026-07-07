const { themes } = require('prism-react-renderer');
const { default: remarkGfm } = require('remark-gfm');
const lightTheme = themes.github;
const darkTheme = themes.palenight;


const isProduction = process.env.GITHUB_REPOSITORY_OWNER === '4d';
const router = process.env.DOCUSAURUS_ROUTER
const isStatic = process.env.DOCUSAURUS_ROUTER === "hash"
const language = process.env.DOCUSAURUS_LANGUAGE ?? "en"
const LANGUAGE_TO_BUILD = process.env.LANGUAGE_TO_BUILD ?? "en"
const BASE_URL_LANGUAGE = LANGUAGE_TO_BUILD !== "en" ? `${LANGUAGE_TO_BUILD}/` : "";
console.log("Language ", BASE_URL_LANGUAGE)

const locales = isStatic ? [language] : ['en', 'fr', 'es', 'ja', 'pt']
const localeConfigs = isStatic ? {} : {
  en: {
    label: "English",
    baseUrl: "/docs/",
  },
  fr: {
    label: "Français",
    baseUrl: "/docs/fr/",
  },
  es: {
    label: "Español",
    baseUrl: "/docs/es/",
  },
  ja: {
    label: "日本語",
    baseUrl: "/docs/ja/",
  },
  pt: {
    label: "Português",
    baseUrl: "/docs/pt/",
  },
}




function getCliLocaleFromArgv() {
  // supporte: "--locale fr" ou "--locale=fr"
  const i = process.argv.indexOf('--locale');
  if (i > -1 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')) {
    return process.argv[i + 1];
  }
  const eq = process.argv.find((a) => a.startsWith('--locale='));
  if (eq) return eq.split('=')[1];
  return undefined;
}



// docusaurus.config.js
const fs = require('fs');
const path = require('path');

// 1) Collator FR (tri “dictionnaire” : accents pris en compte)
const collators = {};
function getCollator(locale) {
  const loc = locale || 'en';
  if (!collators[loc]) {
    // Sensibilité 'accent' => 'é' > 'e' (contraire de 'base' qui les considère égaux)
    collators[loc] = new Intl.Collator(loc, {
      usage: 'sort',
      sensitivity: 'accent',
      ignorePunctuation: false,
      numeric: true,
    });
    // Log de diag : vérifie la locale réellement résolue par ICU
    const resolved = collators[loc].resolvedOptions().locale;
    console.log(`[sidebar-sort] requested=${loc} resolved=${resolved}`);
  }
  return collators[loc];
}

// 2) Charge le catalogue i18n des sidebars pour la locale
function loadSidebarTranslations(locale) {
  if (!locale || typeof locale !== 'string') return {};
  const base = path.join(__dirname, 'i18n', locale, 'docusaurus-plugin-content-docs');
  const candidates = [
    path.join(base, 'current.json'),
    path.join(base, 'current', 'current.json'),
    path.join(base, 'default', 'current.json'),
    path.join(__dirname, 'i18n', locale, 'code.json'),
  ];
  for (const file of candidates) {
    if (fs.existsSync(file)) {
      try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
      } catch { /* ignore */ }
    }
  }
  return {};
}

// 3) Déduit le nom de la sidebar (docs/mainSidebar/…)
//    à partir des clés présentes dans le JSON de traduction.
function guessSidebarNameFromTranslations(translations) {
  for (const k of Object.keys(translations || {})) {
    const m = /^sidebar\.([^.]+)\.category\./.exec(k);
    if (m) return m[1];
  }
  return 'docs';
}

// 4) Récupère la traduction d’un label de catégorie
function getTranslatedCategoryLabel(labelSource, sidebarName, translations) {
  const src = String(labelSource || '').normalize('NFC').trim();
  if (!src) return '';
  const directKey = `sidebar.${sidebarName}.category.${src}`;
  const direct = translations[directKey]?.message;
  if (direct && direct.trim()) return direct;

  // Tolérance : si le nom de sidebar diffère, on scanne
  for (const [k, v] of Object.entries(translations)) {
    const m = /^sidebar\.([^.]+)\.category\.(.+)$/.exec(k);
    if (!m) continue;
    const keyLabel = String(m[2] || '').normalize('NFC').trim();
    if (keyLabel.localeCompare(src, undefined, {sensitivity: 'accent'}) === 0) {
      const msg = v?.message;
      if (msg && msg.trim()) return msg;
    }
  }
  // Pas de traduction → fallback source
  return src;
}

// 5) Clé de tri
function sortKey(item, helpers) {
  const { translations, sidebarName } = helpers;
  if (item.type === 'category') {
    return getTranslatedCategoryLabel(item.label, sidebarName, translations);
  }
  return item.label || item.title || item.id || '';
}

// 6) Tri des catégories racine.
function sortRec(items, helpers) {
  const collator = getCollator(helpers.locale);
  const withChildrenSorted = items.map((it) => {
    //if (it.type === 'category' && Array.isArray(it.items)) {
    if (it.type === 'category' && Array.isArray(it.items)) {
      const translated = getTranslatedCategoryLabel(
        it.label,
        helpers.sidebarName,
        helpers.translations
      );
      return { ...it, label: translated, items: sortRec(it.items, helpers) };
    }
    return it;
  });
  return withChildrenSorted.sort((a, b) => collator.compare(sortKey(a, helpers), sortKey(b, helpers)));
}



module.exports = {
  title: "4D Docs",
  tagline: "Documentation for 4D developers",
  baseUrl: isStatic ? "/" : "/docs/" + BASE_URL_LANGUAGE,
  //url: "https://4d.github.io/",
  url: "https://developer.4d.com/",
  organizationName: "4D",
  projectName: "docs",
  favicon: "img/favicon/4d.gif",
  trailingSlash: false,
  onBrokenLinks: "ignore",
  noIndex: isProduction ? false : true,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [remarkGfm],
          // Docs folder path relative to website dir.
          path: 'docs',
          routeBasePath: '/',
          //editUrl: 'https://github.com/4D/docs/edit/main/',
          editUrl: function edit(info) {
            // const lang = info.locale;
            // const version = info.version;
            // const permalink = info.permalink;

            const title = `Comment on ${info.docPath} (${info.version})`;
            const body = `Please enter your comment:`;
            return `https://github.com/4d/docs/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
          },
          sidebarPath: require.resolve('./sidebars.js'),
          



sidebarItemsGenerator: async function (args) {
      const { defaultSidebarItemsGenerator, item, locale } = args;

      // 1) Laisser Docusaurus générer l'arbre standard
      const items = await defaultSidebarItemsGenerator(args);

      // 2) Cibler uniquement l'autogenerated "language"
      if (item?.type === 'autogenerated' && item.dirName === 'language-legacy') {
        // 🔒 Locale robuste : jamais undefined
        // ordre de priorité :
        // - locale passée par Docusaurus
        // - locale extraite du CLI (--locale fr)
        // - locale de la version (si dispo)
        // - fallback explicite 'fr-FR' si tu veux forcer FR
        // - sinon 'en'
        const detectedLocale =
          locale ||
          getCliLocaleFromArgv() ||
          args.version?.versionMetadata?.locale ||
          // 👉 si tu veux forcer le tri FR en dev et en build, dé-commente:
          // 'fr-FR' ||
          'en';

        // Optionnel : log de diag
        const collator = new Intl.Collator(detectedLocale, {
          usage: 'sort',
          sensitivity: 'accent',
          ignorePunctuation: false,
          numeric: true,
        });
        const resolved = collator.resolvedOptions().locale;
        console.log(`[sidebar-sort] requested=${detectedLocale} resolved=${resolved}`);

        // 3) Charger le catalogue i18n pour la locale détectée
        const translations = loadSidebarTranslations(detectedLocale); // (ta fonction existante)
        const sidebarName = guessSidebarNameFromTranslations(translations); // (ta fonction existante)
        const helpers = { locale: detectedLocale, sidebarName, translations };

        // 4) Appliquer le tri (catégories + docs internes)
        return sortRec(items, helpers); // (ta fonction existante)
      }

  return items;
},
          versions: {
              '21-R3': {
              label: '21 R3',
              banner: 'none',
            },
            '21': {
              label: '21',
              banner: 'none',
            },
              '20': {
              label: '20',
              banner: 'none',
            },
            '19': {
              label: '19',
              banner: 'none',
            },
            '18': {
              label: '18',
              banner: 'none',
            },
          },
          includeCurrentVersion: isProduction ? false : true, // false for prod only
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/customTheme.css')],
        },
      },
    ],
  ],
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
    experimental_router: router,
  },
  i18n: {
    defaultLocale: language,
    locales: locales,
    localeConfigs: localeConfigs,
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": ["html"],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs')) {
            // Redirect from /docs/en to /docs
            return [
              existingPath.replace('/docs', '/docs/en'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
  themeConfig: {
    algolia: {
      apiKey: '5f22ebbb9382abafeadc3e86ca47d4af',
      appId: 'OJ04C0M3CU',
      indexName: '4d',
      //contextualSearch: false
      //added for command search
      searchParameters: {
        advancedSyntax: true,
        queryType: 'prefixAll', // Priorise la chaine entiere
        removeWordsIfNoResults: 'allOptional', // Recherche les elements individuels si aucun resultat
      },
      // end
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: ['json'],
    },
    navbar: {
      title: "4D Documentation",
      hideOnScroll: true,
      logo: {
        alt: "4D Logo",
        src: "img/logohome.png",
      },
      items: [{
        type: 'docsVersionDropdown',
        position: 'right',
      }, {
        type: 'localeDropdown',
        position: 'right',
      },
      ],
    },
    //"image": "../assets/en/logohome.png",
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: '4D Blog',
              to: 'https://blog.4d.com',
            },
            {
              label: '4D Forum',
              to: 'https://discuss.4d.com',
            },
            {
              label: 'Facebook',
              to: 'https://facebook.com/4Dsoftware',
            },
            {
              label: 'X',
              to: 'https://x.com/4Dsoftware',
            },
            {
              label: 'Youtube',
              to: 'https://youtube.com/user/4Dsoftware',
            },
            {
              label: 'Github',
              to: 'https://github.com/4D',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Documentation download',
              to: 'https://github.com/4d/docs/releases/tag/latest',
            },
            {
              label: 'Learn 4D',
              to: 'https://learn.4d.com',
            },
            {
              label: '4D Doc Center (legacy documentation web site) ',
              to: 'https://doc.4d.com',
            },
            {
              label: 'Knowledgebase',
              to: 'https://kb.4d.com',
            },
            {
              label: 'Downloads',
              to: 'https://us.4d.com/product-download',
            },
            {
              label: 'Resources',
              to: 'https://us.4d.com/resources',
            },
            {
              label: 'Get Support',
              to: 'https://us.4d.com/4d-technical-support',
            }
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About 4D',
              to: 'https://us.4d.com/about-us',
            },
            {
              label: 'Contact us',
              to: 'https://us.4d.com/contact-us',
            },
            {
              label: '4D around the world',
              to: 'https://us.4d.com/4d-around-the-world',
            },
            {
              label: 'Careers',
              to: 'https://us.4d.com/Careers',
            },
          ],
        },
      ],
      "copyright": "© 2026 4D SAS - All rights reserved",
    },
  },
  markdown: {
    format: 'detect',
    mermaid: true,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    anchors: {
      maintainCase: false,
    },
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'ignore', //tempo for test with subfolders
    },
  },
  themes: ['@docusaurus/theme-mermaid'],  
  scripts: [
     {
      src: 'https://kit.fontawesome.com/daeacc3fc4.js',
      crossorigin: 'anonymous',
    },
  ],
}
