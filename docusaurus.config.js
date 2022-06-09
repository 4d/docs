module.exports={
  "title": "4D Documentation",
  "tagline": "Documentation for 4D Developers",
  "url": "https://4d.github.io/",
  "baseUrl": "/docs/18/",
  "organizationName": "4D",
  "projectName": "docs",
  "scripts": [
    "https://code.jquery.com/jquery-3.5.1.min.js",
    "/docs/18/js/comment.js",
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/docs/18/js/code-blocks-buttons.js"
  ],
  "favicon": "../assets/img/4d.gif",
  "customFields": {
    "docsUrl": "",
    "users": [
      {
        "caption": "User1",
        "image": "/../assets/img/4DLogo.gif",
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
        // ...
      },
    ],
  ],
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
    "navbar": {
      "title": "4D Documentation",
      "items": [
        {
          "href": "https://developer.4d.com/docs",
          "label": "v19 R5 BETA",
          "position": "left"
        },
        {
          "href": "https://developer.4d.com/docs/Rx",
          "label": "v19 R4",
          "position": "left"
        },
        {
          "href": "https://developer.4d.com/docs/19",
          "label": "v19",
          "position": "left"
        },
        {
          "href": "https://developer.4d.com/docs/18",
          "label": "v18",
          "position": "left"
        }
      ]
    },
    "image": "../assets/img/logohome.png",
    "footer": {
      "links": [],
      "copyright": "© 2022 4D SAS - All rights reserved",
      "logo": {
        "src": "../assets/img/logohome.png"
      }
    },
  }
}