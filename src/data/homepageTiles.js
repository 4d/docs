import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const localizedLinks = {
  "homepage.sections.textensions.4D-Progress-url" : translate({
    message: 'https://github.com/4d/4D-Progress/blob/main/README.md',
    id: 'homepage.sections.textensions.4D-Progress-url',
  }),
  "homepage.sections.textensions.4D-SVG-Component-url" : translate({
    message: 'https://developer.4d.com/4D-SVG',
    id: 'homepage.sections.textensions.4D-SVG-Component-url',
  }),
  "homepage.sections.textensions.4D-Widgets-url" : translate({
    message: 'https://github.com/4d/4D-Widgets/blob/main/Readme.md',
    id: 'homepage.sections.textensions.4D-Widgets-url',
  }),
  "homepage.sections.mobile-applications.go-mobile-url" : translate({
    message: 'https://developer.4d.com/go-mobile',
    id: 'homepage.sections.mobile-applications.go-mobile-url',
  })
};

const Sections = [
  {
    
title: (
    <>
      <i class="fa-solid fa-rocket" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.getting-started.title">
        Getting Started
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="GettingStarted/installation" >
          <Translate>Installation</Translate>
        </Link>
        <Link to="Project/overview" >
          <Translate>4D at a glance</Translate>
        </Link>
        <Link to="Notes/updates" ><i class="fa-solid fa-pen-to-square" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
          <i><Translate>Release Notes</Translate></i>
        </Link>
      </div>
    ),
  }, {
    title: (
    <>
      <i class="fa-solid fa-hammer" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.ide.title">
          Project & IDE
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="GettingStarted/creating" >
          <Translate>Creating or opening a project</Translate>
        </Link>
        <Link to="Project/architecture" >
          <Translate>Architecture</Translate>
        </Link>
        <Link to="settings/overview" >
          <Translate>Project Settings</Translate>
        </Link>
        <Link to="Develop/field-properties">
          <Translate>Database structure</Translate>
        </Link>
        <Link to="Project/code-overview" >
          <Translate>Code & Methods</Translate>
        </Link>
        <Link to="Project/components" >
          <Translate>Dependencies</Translate>
        </Link>
        <Link to="Project/compiler" >
          <Translate>Compilation</Translate>
        </Link>
        <Link to="Desktop/building" >
          <Translate>Application Builder</Translate>
        </Link>
        <Link to="Debugging/basics" >
          <Translate>Debugging</Translate>
        </Link>
         <Link to="Preferences/overview" >
          <Translate>Application Preferences</Translate>
        </Link>
      </div>
    ),
  },{
    title: (
    <>
      <i class="fa-solid fa-code" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.language.title">
          4D Language
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="Concepts/about">
          <Translate>Concepts</Translate>
        </Link>
        <Link to="commands/command-index">
          <Translate>Commands by name</Translate>
        </Link>
        <Link to="category/commands">
          <Translate>Commands by theme</Translate>
        </Link>
       <Link to="category/class-API-reference" >
          <Translate>Classes</Translate>
        </Link>
      </div>
    ),
  },{
    title: (
    <>
      <i class="fa-solid fa-gears" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.core.title">
          Core Development
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="ORDA/overview">
          <Translate>ORDA</Translate>
        </Link>
        <Link to="category/processes">
          <Translate>Processes</Translate>
        </Link>
       <Link to="category/database-methods">
          <Translate>Database Methods</Translate>
        </Link>
         <Link to="Develop-legacy/transactions">
          <Translate>Transactions</Translate>
        </Link>
        <Link to="Tags/transformation-tags">
          <Translate>Transformation tags</Translate>
        </Link>
       <Link to="Project/date-time-formats">
          <Translate>Date and Time Formats</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: (
    <>
      <i class="fa-solid fa-globe" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.web-applications.title">
          Web applications
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
         <Link to="https://developer.4d.com/qodly/">
          <Translate>4D Qodly Pro</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to="WebServer/overview">
          <Translate>Web Server</Translate>
        </Link>
        <Link to="REST/gettingStarted">
          <Translate>REST Server</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: (
    <>
      <i class="fa-solid fa-computer" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.desktop-applications.title">
          Desktop Applications
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="Desktop/clientServer" >
          <Translate>Client/Server</Translate>
        </Link>
        <Link to="FormEditor/forms" >
          <Translate>Forms</Translate>
        </Link>
        <Link to="Menus/overview" >
          <Translate>Menus</Translate>
        </Link>
       <Link to="Desktop/labels" >
          <Translate>Labels</Translate>
        </Link>
        <Link to="Desktop/user-settings" >
          <Translate>User Settings</Translate>
        </Link>
        <Link to="Users/overview">
          <Translate>Access Rights</Translate>
        </Link>
      </div>
    ),
  },
  {
    title:(
    <>
      <i class="fa-solid fa-user-tie" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.administration.title">
          Server & Admin
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="ServerWindow/overview" >
          <Translate>4D Server Window</Translate>
        </Link>
        <Link to="Admin/webAdmin">
          <Translate>WebAdmin & Data Explorer</Translate>
        </Link>
        <Link to="Admin/cli">
          <Translate>Command Line Interface</Translate>
        </Link>
        <Link to="Admin/tls">
          <Translate>TLS</Translate>
        </Link>
        <Link to="Admin/licenses">
          <Translate>Licenses</Translate>
        </Link>
         <Link to="Debugging/debugLogFiles">
          <Translate>Log Files</Translate>
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
    title: (
    <>
      <i class="fa-solid fa-puzzle-piece" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.textensions.title">
          Extensions
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="Extensions/overview">
          <Translate>Extending 4D applications</Translate>
        </Link>
        <Link to="https://developer.4d.com/qodly/">
          <Translate>4D Qodly Pro</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to="ViewPro/getting-started">
          <Translate>4D View Pro</Translate>
        </Link>
        <Link to="category/4d-write-pro">
          <Translate>4D Write Pro</Translate>
        </Link>
        <Link to="https://developer.4d.com/4D-NetKit">
          <Translate>4D NetKit</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to="aikit/overview">
          <Translate>4D AIKit</Translate>
        </Link>
        <Link to={localizedLinks["homepage.sections.textensions.4D-Progress-url"]}>
          <Translate>4D Progress</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to="https://developer.4d.com/4D-SVG">
          <Translate>4D SVG</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to={localizedLinks["homepage.sections.textensions.4D-Widgets-url"]}>
          <Translate>4D Widgets</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
       <Link to="https://github.com/4d/4D-QPDF?tab=readme-ov-file#readme">
          <Translate>4D QPDF</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to={localizedLinks["homepage.sections.mobile-applications.go-mobile-url"]}>
          <Translate>Go Mobile with 4D</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to="https://github.com/4d/4D-Mobile-App-Server/blob/main/README.md">
          <Translate>4D Mobile App Server</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to="https://github.com/4d-depot/Build4D?tab=readme-ov-file#readme">
          <Translate>Build4D</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
      </div>
    ),
  },

];

export default Sections;
