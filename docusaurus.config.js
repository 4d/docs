module.exports = {
  title: "4D Docs",
  tagline: "Documentation for 4D developers",
  baseUrl: "/docs/",
  url: "https://doc4d.github.io/",
  organizationName: "4D",
  projectName: "docs",
  favicon: "img/favicon/4d.gif",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: 'docs',
          routeBasePath: '/',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          versions: {
            '19-R6': {
              label: 'v19 R6',
              banner: 'none',
            },
            '19': {
              label: 'v19',
              banner: 'none',
            },
            '18': {
              label: 'v18',
              banner: 'none',
            },
          },
          includeCurrentVersion: true, // false for prod only
        },
        theme: {
          customCss: [require.resolve('./src/css/customTheme.css')],
        },
      },
    ],
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          "parser": {
            "syntax": "typescript",
            "tsx": true
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        }
      },
    }),
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "es", "ja", "pt"],
    localeConfigs: {
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
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ]
      }
    ]
  ],
  "themeConfig": {
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true
    },
    prism: {
      theme: require("./src/theme/highlight/themes/palenight"),
    },
    "navbar": {
      "title": "4D Documentation",
      items: [{
        type: 'docsVersionDropdown',
        position: 'right',
      }, {
        type: 'localeDropdown',
        position: 'right',
      },
      ],
    },
    "image": "../assets/en/logohome.png",
    "footer": {
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
              href: 'https://github.com/facebook/docusaurus',
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
      "copyright": "© 2022 4D SAS - All rights reserved",
    },
  }
}