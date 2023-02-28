import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const localizedLinks = {
  "homepage.sections.core-development.langage-ref-url" : translate({
    message: 'https://doc.4d.com/4Dv19R8/4D/19-R8/4D-Language-Reference.100-6101683.en.html',
    id: 'homepage.sections.core-development.langage-ref-url',
  }),
  "homepage.sections.textensions.4D-Write-Pro-Reference-url" : translate({
    message: 'https://doc.4d.com/4Dv19R8/4D/19-R8/4D-Write-Pro-Reference.100-6130471.en.html',
    id: 'homepage.sections.textensions.4D-Write-Pro-Reference-url',
  }),
  "homepage.sections.textensions.4D-Progress-url" : translate({
    message: 'https://doc.4d.com/4Dv19R8/4D/19-R8/4D-Progress.100-6205973.en.html',
    id: 'homepage.sections.textensions.4D-Progress-url',
  }),
  "homepage.sections.textensions.4D-SVG-Component-url" : translate({
    message: 'https://doc.4d.com/4Dv19R8/4D/19-R8/4D-SVG-Component.100-6206845.en.html',
    id: 'homepage.sections.textensions.4D-SVG-Component-url',
  }),
  "homepage.sections.textensions.4D-Widgets-url" : translate({
    message: 'https://doc.4d.com/4Dv19R8/4D/19-R8/4D-Widgets.100-6207497.en.html',
    id: 'homepage.sections.textensions.4D-Widgets-url',
  }),
  "homepage.sections.mobile-applications.4D-for-iOS-Archive-url" : translate({
    message: 'https://developer.4d.com/4d-for-ios/docs/en/overview.html',
    id: 'homepage.sections.mobile-applications.4D-for-iOS-Archive-url',
  }),
  "homepage.sections.mobile-applications.go-mobile-url" : translate({
    message: 'https://developer.4d.com/go-mobile/',
    id: 'homepage.sections.mobile-applications.go-mobile-url',
  })
};

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
        <Link to="GettingStarted/installation" >
          <Translate>Installation</Translate>
        </Link>
        <Link to="GettingStarted/creating" >
          <Translate>Working with a project</Translate>
        </Link>
		<Link to="Notes/updates" >
          <i><Translate>Release Notes</Translate></i>
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
        <Link to="Project/overview" >
          <Translate>Project Management</Translate>
        </Link>
        <Link to="Concepts/about">
          <Translate>Language Concepts</Translate>
        </Link>
        <Link to={localizedLinks["homepage.sections.core-development.langage-ref-url"]} >
          <Translate>Language Reference (4D Doc Center)</Translate>
        </Link>
        <Link to="ORDA/overview" >
          <Translate>Object Relational Data Access (ORDA)</Translate>
        </Link>
        <Link to="API/overview" >
          <Translate>Class API Reference</Translate>
        </Link>
        <Link to="code-editor/overview" >
          <Translate>Handling code</Translate>
        </Link>
        <Link to="Tags/tags" >
          <Translate>Transformation tags</Translate>
        </Link>
        <Link to="Debugging/basics" >
          <Translate>Debugging</Translate>
        </Link>
        <Link to="settings/overview" >
          <Translate>Settings</Translate>
        </Link>
        <Link to="Preferences/overview" >
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
        <Link to="ServerWindow/overview" >
          <Translate>4D Server Administration Window</Translate>
        </Link>
        <Link to="Admin/webAdmin">
          <Translate>Web Administration</Translate>
        </Link>
        <Link to="Admin/cli">
          <Translate>Command Line Interface</Translate>
        </Link>
        <Link to="Admin/tls">
          <Translate>TLS Protocol</Translate>
        </Link>
        <Link to="Admin/licenses">
          <Translate>Licenses & Data Collection</Translate>
        </Link>
        <Link to="Users/overview">
          <Translate>Access Rights</Translate>
        </Link>
        <Link to="MSC/overview">
          <Translate>Maintenance and Security Center</Translate>
        </Link>
        <Link to="Backup/overview">
          <Translate>Backup and Restore</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: translate({
      message: 'Extensions',
      id: 'homepage.sections.textensions.title',
    }),
    image: {
      src: '/img/illu_Extensions.png',
      width: 1038.23,
      height: 693.31,
    },
    links: (
      <div className="homepageLinks">
        <Link to="Extensions/overview">
          <Translate>Overview</Translate>
        </Link>
        <Link to="ViewPro/getting-started">
          <Translate>4D View Pro</Translate>
        </Link>
         <Link to={localizedLinks["homepage.sections.textensions.4D-Write-Pro-Reference-url"]}>
          <Translate>4D Write Pro</Translate>
        </Link>
        <Link to="https://github.com/4d/4D-WritePro-Interface">
          <Translate>4D Write Pro Interface</Translate>
        </Link>
       <Link to="https://github.com/4d/4D-Mobile-App-Server">
          <Translate>4D Mobile App Server</Translate>
        </Link>
        <Link to="https://github.com/4d/4D-NetKit">
          <Translate>4D NetKit</Translate>
        </Link>
        <Link to={localizedLinks["homepage.sections.textensions.4D-Progress-url"]}>
          <Translate>4D Progress</Translate>
        </Link>
        <Link to={localizedLinks["homepage.sections.textensions.4D-SVG-Component-url"]}>
          <Translate>4D SVG</Translate>
        </Link>
        <Link to={localizedLinks["homepage.sections.textensions.4D-Widgets-url"]}>
          <Translate>4D Widgets</Translate>
        </Link>
        <Link to="Extensions/develop-components">
          <Translate>Developing Components</Translate>
        </Link>
        <Link to="Extensions/develop-plug-ins">
          <Translate>Developing Plugins</Translate>
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
        <Link to="WebServer/overview">
          <Translate>Web Server</Translate>
        </Link>
        <Link to="WebServer/gettingStarted">
          <Translate>Web Development</Translate>
        </Link>
        <Link to="REST/gettingStarted">
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
        <Link to="Desktop/clientServer" >
          <Translate>Client/Server</Translate>
        </Link>
        <Link to="FormEditor/forms" >
          <Translate>Forms</Translate>
        </Link>
        <Link to="FormEditor/jsonReference" >
          <Translate>Form Properties</Translate>
        </Link>
        <Link to="FormObjects/formObjectsOverview" >
          <Translate>Form Objects</Translate>
        </Link>
        <Link to="FormObjects/propertiesReference" >
          <Translate>Form Object Properties</Translate>
        </Link>
        <Link to="Events/overview" >
          <Translate>Form Events</Translate>
        </Link>
        <Link to="Menus/overview" >
          <Translate>Menus</Translate>
        </Link>
        <Link to="Desktop/user-settings" >
          <Translate>User Settings</Translate>
        </Link>
        <Link to="Desktop/building" >
          <Translate>Build Application</Translate>
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
        <Link to={localizedLinks["homepage.sections.mobile-applications.go-mobile-url"]}>
          <Translate>Go Mobile with 4D</Translate>
        </Link>
        <Link to={localizedLinks["homepage.sections.mobile-applications.4D-for-iOS-Archive-url"]}>
          <Translate>4D for iOS (Archive)</Translate>
        </Link>
      </div>
    ),
  },
];

export default Sections;
