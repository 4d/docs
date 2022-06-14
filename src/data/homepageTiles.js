import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const Sections = [
  {
    title: translate({
      message: 'Getting started',
      id: 'homepage.sections.getting-started.title',
    }),
    image: {
      src: '/img/illu_GettingStarted.png',
      width: 1009.54,
      height: 717.96,
    },
    links: (
      <div className="homepageLinks">
        <Link to="/docs/GettingStarted/installation" >
          <Translate>Installation</Translate>
        </Link>
        <Link to="/docs/GettingStarted/creating">
          <Translate>Working with a project</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: translate({
      message: 'Desktop applications',
      id: 'homepage.sections.desktop-applications.title',
    }),
    image: {
      src: '/img/illu_DesktopApplication.png',
      width: 1108,
      height: 731.18,
    },
    links: (
      <div className="homepageLinks">
        <Link to="/docs/Project/overview" >
          <Translate>Project Management</Translate>
        </Link>
        <Link to="/docs/Concepts/about" >
          <Translate>Language Concepts</Translate>
        </Link>
        <Link to="https://doc.4d.com/4Dv19R4/4D/19-R4/4D-Language-Reference.100-5738429.en.html" >
          <Translate>Language Reference (4D Doc Center)</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: translate({
      message: 'Web applications',
      id: 'homepage.sections.web-applications.title',
    }),
    image: {
      src: '/img/illu_WebApplication.png',
      width: 1137,
      height: 776.59,
    },
    links: (
      <Link to="/docs/GettingStarted/installation" className="homepageLink">
        <Translate>Installation</Translate>
      </Link>
    ),
  },
  {
    title: translate({
      message: 'Mobile applications',
      id: 'homepage.sections.mobile-applications.title',
    }),
    image: {
      src: '/img/illu_MobileApplication.png',
      width: 1038.23,
      height: 693.31,
    },
    links: (
      <Link to="/docs/GettingStarted/installation" className="homepageLink">
        <Translate>Installation</Translate>
      </Link>
    ),
  },
  {
    title: translate({
      message: 'Administration',
      id: 'homepage.administration.title',
    }),
    image: {
      src: '/img/illu_Administration.png',
      width: 1137.97,
      height: 736.21,
    },
    links: (
      <Link to="/docs/GettingStarted/installation" className="homepageLink">
        <Translate>Installation</Translate>
      </Link>
    ),
  },
];

export default Sections;