import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';

const Features = [
  {
    title: translate({
      message: 'Getting started',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/illu_GettingStarted.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Getting started links
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Desktop applications',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/illu_DesktopApplication.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Core development links
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Web applications',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/illu_WebApplication.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        Ready for translation links
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Mobile applications',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/illu_MobileApplication.png',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        Support users on all versions of your project. Document versioning helps
        you keep documentation in sync with project releases.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Administration',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/illu_Administration.png',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Make it easy for your community to find what they need in your
        documentation. We proudly support Algolia documentation search.
      </Translate>
    ),
  },
];

export default Features;