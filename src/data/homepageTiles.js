import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const Sections = [
  {
    title: translate({
      message: 'Getting Started',
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
      </div>
    ),
  }, {
    title: translate({
      message: 'Core Development',
      id: 'homepage.sections.core-development.title',
    }),
    image: {
      src: '/img/illu_CoreDevelopment.png',
      width: 1108,
      height: 731.18,
    },
    links: (
      <div className="homepageLinks">
        <Link to="/docs/Project/overview" >
          <Translate>Project Management</Translate>
        </Link>
        <Link to="/docs/Concepts/about">
          <Translate>Language Concepts</Translate>
        </Link>
        <Link to="https://doc.4d.com/4Dv19R4/4D/19-R4/4D-Language-Reference.100-5738429.en.html" >
          <Translate>Language Reference (4D Doc Center)</Translate>
        </Link>
        <Link to="/docs/ORDA/overview" >
          <Translate>Object Relational Data Access (ORDA)</Translate>
        </Link>
        <Link to="/docs/API/overview" >
          <Translate>Class API Reference</Translate>
        </Link>
        <Link to="/docs/Preferences/overview" >
          <Translate>Preferences</Translate>
        </Link>
      </div>
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
      <div className="homepageLinks">
        <Link to="docs/Admin/webAdmin">
          <Translate>Web Administration</Translate>
        </Link>
        <Link to="docs/Admin/dataExplorer">
          <Translate>Web Data Explorer</Translate>
        </Link>
        <Link to="docs/Admin/licenses">
          <Translate>License Management</Translate>
        </Link>
        <Link to="docs/Admin/tls">
          <Translate>TLS Protocol (HTTPS)</Translate>
        </Link>
        <Link to="docs/Admin/cli">
          <Translate>Command Line Interface</Translate>
        </Link>
        <Link to="docs/Admin/debugLogFiles">
          <Translate>Description of log files</Translate>
        </Link>
        <Link to="docs/Users/overview">
          <Translate>Access Rights</Translate>
        </Link>
        <Link to="docs/MSC/overview">
          <Translate>Maintenance and Security Center</Translate>
        </Link>
        <Link to="docs/Backup/overview">
          <Translate>Backup and Restore</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: translate({
      message: 'Web Applications',
      id: 'homepage.sections.web-applications.title',
    }),
    image: {
      src: '/img/illu_WebApplication.png',
      width: 1137,
      height: 776.59,
    },
    links: (
      <div className="homepageLinks">
        <Link to="/docs/WebServer/webServer">
          <Translate>Web Server</Translate>
        </Link>
        <Link to="/docs/WebServer/gettingStarted">
          <Translate>Web Development</Translate>
        </Link>
        <Link to="/docs/REST/gettingStarted">
          <Translate>REST Server</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: translate({
      message: 'Desktop Applications',
      id: 'homepage.sections.desktop-applications.title',
    }),
    image: {
      src: '/img/illu_DesktopApplication.png',
      width: 1108,
      height: 731.18,
    },
    links: (
      <div className="homepageLinks">
        <Link to="/docs/Desktop/clientServer" >
          <Translate>Client/Server</Translate>
        </Link>
        <Link to="/docs/FormEditor/forms" >
          <Translate>Forms</Translate>
        </Link>
        <Link to="/docs/FormEditor/jsonReference" >
          <Translate>Form Properties</Translate>
        </Link>
        <Link to="/docs/FormObjects/formObjectsOverview" >
          <Translate>Form Objects</Translate>
        </Link>
        <Link to="/docs/FormObjects/propertiesReference" >
          <Translate>Form Object Properties</Translate>
        </Link>
        <Link to="/docs/Events/overview" >
          <Translate>Form Events</Translate>
        </Link>
        <Link to="/docs/Menus/overview" >
          <Translate>Menus</Translate>
        </Link>
        <Link to="/docs/Desktop/building" >
          <Translate>Menus</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: translate({
      message: 'Mobile Applications',
      id: 'homepage.sections.mobile-applications.title',
    }),
    image: {
      src: '/img/illu_MobileApplication.png',
      width: 1038.23,
      height: 693.31,
    },
    links: (
      <div className="homepageLinks">
        <Link to="https://developer.4d.com/4d-for-ios/docs/en/overview.html">
          <Translate>4D for iOS</Translate>
        </Link>
      </div>
    ),
  },
];

export default Sections;
