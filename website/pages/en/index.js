/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
//const Showcase = require(`${process.cwd()}/core/Showcase.js`);
const translate = require("../../server/translate.js").translate;

function HomeSplash(props) {
  const { siteConfig, language } = props;

  return (
    <div className="index-hero">
      <div className="index-hero-inner">
        <h1 className="index-hero-project-tagline">
          <img
            alt="4D Banner"
            className="index-hero-logo"
            src={`${siteConfig.baseUrl}img/banner-object.png`}
          />
          {siteConfig.tagline}
        </h1>
      </div>
    </div>
  );
}
class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "en" } = this.props;
    const pinnedUsersToShowcase = siteConfig.users.filter(user => user.pinned);
    var subContents = {
      installation: <translate desc="in index page Getting started">Installation</translate>,
      start: <translate desc="in index page Getting started">Starting 4D</translate>,
      languageConcepts: <translate desc="in index page Getting started">Language Concepts</translate>,
      projectDatabases: <translate desc="in index page Getting started">Project Management</translate>,
      ORDA: <translate desc="in index page Getting started">Object Relational Data Access (ORDA)</translate>,
      class: <translate>Class API Reference</translate>,
      formEditor: <translate>Forms</translate>,
      formProperties: <translate>Form Properties</translate>,
      events: <translate>Form Events</translate>,
      formObjects: <translate>Form Objects</translate>,
      formObjectProperties: <translate>Form Object Properties</translate>,
      menus: <translate>Menus</translate>,
      webServer: <translate>Web Server</translate>,
      webDev: <translate>Web Development</translate>,
      restServer: <translate>REST Server</translate>,
      msc: <translate>Maintenance and Security Center</translate>,
      backup: <translate>Backup and Restore</translate>,
      licenses: <translate>License Management</translate>,
      buildApp: <translate>Build Application</translate>,
      webAdmin: <translate>Web Administration</translate>,
      serverAdmin: <translate>4D Server Administration Window</translate>,
      components: <translate>4D Components Library</translate>,
      cs: <translate>Client/Server</translate>,
      tls: <translate>TLS Protocol</translate>,
      debugging: <translate>Debugging</translate>,
      codeEditor: <translate>Code Editor</translate>,
      dataExplorer: <translate>Web Data Explorer</translate>,
      langRef: <translate>Language Reference (4D Doc Center)</translate>,
      users: <translate>Access Rights</translate>,
      debugLogFiles: <translate>Description of log files</translate>,
      cli: <translate>Command Line Interface</translate>,
      viewPro: <translate>4D View Pro</translate>,
      preferences: <translate>Preferences</translate>,
      overview: <translate>Overview</translate>,
      comp: <translate>Developing Components</translate>,
      plug: <translate>Developing Plugins</translate>,
      working: <translate>Working with a project</translate>,
      settings: <translate>Settings</translate>,
      usersettings: <translate>User Settings</translate>,
	    langUrl: <translate>https://doc.4d.com/4Dv19R3/4D/19-R3/4D-Language-Reference.100-5582450.en.html</translate>
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Container padding={["bottom", "top"]} background="white">
            <GridBlock
              align="left"
              contents={[
                {
                  content: `[${subContents.installation}](${siteConfig.baseUrl}${this.props.language}/GettingStarted/installation.html)<br>
				  [${subContents.working}](${siteConfig.baseUrl}${this.props.language}/GettingStarted/creating.html)`,
                  image: `${siteConfig.baseUrl}img/illu_GettingStarted.png`,
                  imageAlign: "top",
                  imageAlt: "Get started",
                  title: <translate>Getting started</translate>,
                },
                {
                  content: `[${subContents.projectDatabases}](${siteConfig.baseUrl}${this.props.language}/Project/overview.html)<br>
                  [${subContents.languageConcepts}](${siteConfig.baseUrl}${this.props.language}/Concepts/about.html)<br>
				  [${subContents.langRef}](${subContents.langUrl})<br>
                  [${subContents.ORDA}](${siteConfig.baseUrl}${this.props.language}/ORDA/overview.html)<br>
                  [${subContents.class}](${siteConfig.baseUrl}${this.props.language}/API/overview.html)<br>
                  [${subContents.codeEditor}](${siteConfig.baseUrl}${this.props.language}/code-editor/navigation.html)<br>
				  [${subContents.debugging}](${siteConfig.baseUrl}${this.props.language}/Debugging/basics.html)<br>
          [${subContents.settings}](${siteConfig.baseUrl}${this.props.language}/settings/overview.html)<br>
				  [${subContents.preferences}](${siteConfig.baseUrl}${this.props.language}/Preferences/overview.html)`,
                  image: `${siteConfig.baseUrl}img/illu_CoreDevelopment.png`,
                  imageAlign: "top",
                  imageAlt: "Core",
                  title: <translate>Core Development</translate>,
                },
                {
                  content: `[${subContents.serverAdmin}](${siteConfig.baseUrl}${this.props.language}/ServerWindow/overview.html)<br>
				[${subContents.webAdmin}](${siteConfig.baseUrl}${this.props.language}/Admin/webAdmin.html)<br>
				[${subContents.cli}](${siteConfig.baseUrl}${this.props.language}/Admin/cli.html)<br>
				[${subContents.tls}](${siteConfig.baseUrl}${this.props.language}/Admin/tls.html)<br>
				[${subContents.licenses}](${siteConfig.baseUrl}${this.props.language}/Admin/licenses.html)<br>
                 [${subContents.users}](${siteConfig.baseUrl}${this.props.language}/Users/overview.html)<br>
				[${subContents.msc}](${siteConfig.baseUrl}${this.props.language}/MSC/overview.html)<br>
                [${subContents.backup}](${siteConfig.baseUrl}${this.props.language}/Backup/overview.html)<br>`,
                  image: `${siteConfig.baseUrl}img/illu_Administration.png`,
                  imageAlign: "top",
                  imageAlt: "Admin",
                  title: <translate>Administration</translate>,
                },
              ]}
              layout="threeColumn"
            />
            <br />
            <br />
            <GridBlock
              align="left"
              contents={[
                {
                  content: `[${subContents.webServer}](${siteConfig.baseUrl}${this.props.language}/WebServer/webServer.html)<br>
				  [${subContents.webDev}](${siteConfig.baseUrl}${this.props.language}/WebServer/gettingStarted.html)<br>
				  [${subContents.restServer}](${siteConfig.baseUrl}${this.props.language}/REST/gettingStarted.html)`,
                  image: `${siteConfig.baseUrl}img/illu_WebApplication.png`,
                  imageAlign: "top",
                  imageAlt: "Web",
                  title: <translate>Web applications</translate>,
                },
                {
                  content: `[Go Mobile with 4D](https://developer.4d.com/go-mobile)<br>
				  [4D for iOS (archive)](https://developer.4d.com/4d-for-ios/docs/${this.props.language}/overview.html)`,
                  image: `${siteConfig.baseUrl}img/illu_MobileApplication.png`,
                  imageAlign: "top",
                  imageAlt: "Mobile",
                  title: <translate>Mobile applications</translate>,
                },
                {
                  content: `[${subContents.cs}](${siteConfig.baseUrl}${this.props.language}/Desktop/clientServer.html)<br>
				  [${subContents.formEditor}](${siteConfig.baseUrl}${this.props.language}/FormEditor/forms.html)<br>
				  [${subContents.formProperties}](${siteConfig.baseUrl}${this.props.language}/FormEditor/jsonReference.html)<br>
				  [${subContents.formObjects}](${siteConfig.baseUrl}${this.props.language}/FormObjects/formObjectsOverview.html)<br>
				  [${subContents.formObjectProperties}](${siteConfig.baseUrl}${this.props.language}/FormObjects/propertiesReference.html)<br>
				  [${subContents.events}](${siteConfig.baseUrl}${this.props.language}/Events/overview.html)<br>
				  [${subContents.menus}](${siteConfig.baseUrl}${this.props.language}/Menus/overview.html)<br>
				  [${subContents.usersettings}](${siteConfig.baseUrl}${this.props.language}/Desktop/user-settings.html)<br>
				  [${subContents.buildApp}](${siteConfig.baseUrl}${this.props.language}/Desktop/building.html)`,
                  //image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
                  image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
                  imageAlign: "top",
                  imageAlt: "Desktop",
                  title: <translate>Desktop applications</translate>,
                },
                {},
              ]}
              layout="threeColumn"
            />
            <br />
            <br />
            <GridBlock
              align="left"
              contents={[
                {
                  content: `[${subContents.overview}](${siteConfig.baseUrl}${this.props.language}/Extensions/overview.html)<br>
				  [${subContents.viewPro}](${siteConfig.baseUrl}${this.props.language}/ViewPro/getting-started.html)<br>
				  [4D Mobile App Server](ttps://github.com/4d-go-mobile/4D-Mobile-App-Server)<br>
				  [4D NetKit](https://github.com/4d/4D-NetKit)<br>
				  [4D Progress](https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html)<br>
				  [4D SVG](https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html)<br>
				  [4D Widgets](https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html)<br>
				  [4D Write Pro Interface](https://github.com/4d/4D-WritePro-Interface)<br>
				  [${subContents.comp}](${siteConfig.baseUrl}${this.props.language}/Extensions/develop-components.html)<br>
				  [${subContents.plug}](${siteConfig.baseUrl}${this.props.language}/Extensions/develop-plug-ins.html)<br>`,
                  image: `${siteConfig.baseUrl}img/illu_Extensions.png`,
                  imageAlign: "top",
                  imageAlt: "Extensions",
                  title: <translate>Extensions</translate>,
                }
              ]}
              layout="threeColumn"
            />
          </Container>
          <div className="doc-updates">
            <a href={`${siteConfig.baseUrl}${language}/Notes/updates`}>
              <translate>Documentation updates</translate>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
