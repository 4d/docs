module.exports = {
  "title": "4D Docs",
  "tagline": "Documentation for 4D developers",
  "url": "https://4d.github.io/",
  "baseUrl": "/",
  "organizationName": "4D",
  "projectName": "docs",
  "scripts": [
    "https://code.jquery.com/jquery-3.5.1.min.js",
    "/docs/18/js/comment.js",
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/docs/18/js/code-blocks-buttons.js"
  ],
  "favicon": "../assets/en/4d.gif",
  "customFields": {
    "docsUrl": "",
    "users": [
      {
        "caption": "User1",
        "image": "/../assets/en/4DLogo.gif",
        "infoLink": "https://www.facebook.com",
        "pinned": true
      }
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: './docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: [require.resolve('./src/css/customTheme.css')],
        },
        // ...
      },
    ],
  ],
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
  "plugins": [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // Options here
    }],
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
    prism: {
      theme: require("./src/theme/highlight/themes/palenight"),
    },
    "navbar": {
      "title": "4D Documentation",
      items: [{
        type: 'localeDropdown',
        position: 'right',
      }],
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
              to: 'kd.4d.com',
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