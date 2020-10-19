/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/4DLogo.gif',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: '4D Documentation' /* title for your website */,
  tagline: 'Documentation for 4D Developers',
  url: 'https://4d.github.io' /* your website url */,
  //baseUrl: '/doc/' /* base url for your project */,
  //baseUrl: '/docs/' /* base url for your project */,
  baseUrl: '/docs/Rx/' /* base url for your project */,
// For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: '4D',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  docsUrl:'',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [

    //{doc: 'Concepts/about', label: 'Docs'},
    //{doc: 'REST/gettingStarted', label: 'REST'},
    {href: 'https://developer.4d.com/docs', label:'v18 R5 BETA'},
    {href: 'https://developer.4d.com/docs/Rx', label:'v18 R4'},
    {href: 'https://developer.4d.com/docs/18', label:'v18'},
    //{href: 'https://developer.4d.com/', label:'Developer Center'},
    //{href: 'http://kb.4d.com/', label: 'knowledgebase'},
    //{page: 'help', label: 'Help'},
    //{blog: false, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  algolia: {
    apiKey: '2f94e2c8270ac2b1db0c23691592fb10',
    indexName: '4d',
    algoliaOptions: {facetFilters: [ "language:LANGUAGE" ]}, // Optional, if provided by Algolia
	lineheight: '30px'
  },

  docsSideNavCollapsible: true,
  
  /* path to images for header/footer */
  //headerIcon: 'img/4DlogoK.gif',
  footerIcon: 'img/logohome.png',
  favicon: 'img/4d.gif',


  /* colors for website */
  colors: {
    //primaryColor: '#2E8555',
    //secondaryColor: '#205C3B',
	//primaryColor: '#696969', gris
  
	primaryColor: '#004289',
	secondaryColor: '#696969',

  },

  editUrl: 'https://github.com/4D/docs/edit/Rx/docs/',

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    '© ' +
    new Date().getFullYear() +
    ' 4D SAS - All rights reserved',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'routeros',
    hljs: function(hljs) {
      var hljsRobotsTxt = require('highlightjs-4d');
      hljs.registerLanguage("4d", hljsRobotsTxt);
    }
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js',
  'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  '/docs/js/code-blocks-buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/logohome.png',
  twitterImage: 'img/logohome.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
