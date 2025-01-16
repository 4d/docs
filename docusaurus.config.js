const { themes } = require('prism-react-renderer');
const { default: remarkGfm } = require('remark-gfm');
const lightTheme = themes.github;
const darkTheme = themes.palenight;


const isProduction = process.env.GITHUB_REPOSITORY_OWNER === '4d';
const router = process.env.DOCUSAURUS_ROUTER
const isStatic = process.env.DOCUSAURUS_ROUTER === "hash"
const language = process.env.DOCUSAURUS_LANGUAGE ?? "en"

const locales = isStatic ? [language] : ["en", "fr", "es", "ja", "pt"]
const localeConfigs = isStatic ? {} : {
  en: {
    label: "English",
  },
  fr: {
    label: "Français",
  },
  es: {
    label: "Español",
  },
  ja: {
    label: "日本語",
  },
  pt: {
    label: "Português",
  },
}

module.exports = {
  title: "4D Docs",
  tagline: "Documentation for 4D developers",
  baseUrl: isStatic ? "/" : "/docs/",
  //url: "https://4d.github.io/",
  url: "https://developer.4d.com/",
  organizationName: "4D",
  projectName: "docs",
  favicon: "img/favicon/4d.gif",
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
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
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          versions: {
            '20-R8': {
              label: '20 R8 BETA',
              banner: 'none',
            },
            '20-R7': {
              label: '20 R7',
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
              label: '4D Developer Center',
              to: 'https://developer.4d.com',
            },
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
              label: 'Twitter',
              to: 'https://twitter.com/4Dsoftware',
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
              label: '4D Doc Center (Where It All Began)',
              to: 'https://doc.4d.com',
            },
            {
              label: 'Knowledgebase',
              to: 'https://kb.4d.com',
            },
            {
              label: 'Downloads',
              href: 'https://us.4d.com/product-download/Feature-Release',
            },
            {
              label: 'Resources',
              href: 'https://us.4d.com/resources',
            },
            {
              label: 'Get Support',
              href: 'https://us.4d.com/4d-technical-support',
            }
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About 4D',
              href: 'https://us.4d.com/about-us',
            },
            {
              label: 'Contact us',
              href: 'https://us.4d.com/contact-us',
            },
            {
              label: '4D around the world',
              href: 'https://us.4d.com/4d-around-the-world',
            },
            {
              label: 'Careers',
              href: 'https://us.4d.com/Careers',
            },
          ],
        },
      ],
      "copyright": "© 2025 4D SAS - All rights reserved",
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
  },
  themes: ['@docusaurus/theme-mermaid'],
}
