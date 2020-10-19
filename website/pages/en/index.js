/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
//const Showcase = require(`${process.cwd()}/core/Showcase.js`);
const translate = require('../../server/translate.js').translate;

function HomeSplash(props) {
  const {siteConfig, language} = props;

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
    const {config: siteConfig, language = 'en'} = this.props;
    const pinnedUsersToShowcase = siteConfig.users.filter(user => user.pinned);
    var subContents={
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
	  restServer: <translate>REST Server</translate>,
	  msc: <translate>Maintenance and Security Center</translate>,
	  backup: <translate>Backup and Restore</translate>,
    licenses: <translate>License Management</translate>,
    buildApp: <translate>Build Application</translate>,
	langRef: <translate>Language Reference (4D Doc Center)</translate>,
	  users: <translate>Access Rights</translate>
    };



    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Container padding={['bottom', 'top']} background="white">
            <GridBlock
              align="left"
              contents={[
                {
                  content: `[${subContents.installation}](${siteConfig.baseUrl}${this.props.language}/GettingStarted/installation.html)`,
                  image: `${siteConfig.baseUrl}img/illu_GettingStarted.png`,
                  imageAlign: 'top',
                  imageAlt: 'Get started',
                  title: <translate>Getting started</translate>,
                },
                {
                  content: `[${subContents.projectDatabases}](${siteConfig.baseUrl}${this.props.language}/Project/overview.html)<br>
                  [${subContents.languageConcepts}](${siteConfig.baseUrl}${this.props.language}/Concepts/about.html)<br>
				  [${subContents.langRef}](https://doc.4d.com/4Dv18R4/4D/18-R4/4D-Language-Reference.100-4981854.en.html)<br>
                  [${subContents.ORDA}](${siteConfig.baseUrl}${this.props.language}/ORDA/overview.html)<br>
                  [${subContents.class}](${siteConfig.baseUrl}${this.props.language}/API/cryptoClass.html)<br>
                  [${subContents.users}](${siteConfig.baseUrl}${this.props.language}/Users/overview.html)`,
                  image: `${siteConfig.baseUrl}img/illu_CoreDevelopment.png`,
                  imageAlign: 'top',
                  imageAlt: 'Web',
                  title: <translate>Core Development</translate>,
                },
                {
                  content: `[${subContents.licenses}](${siteConfig.baseUrl}${this.props.language}/Admin/licenses.html)<br>
                  [${subContents.msc}](${siteConfig.baseUrl}${this.props.language}/MSC/overview.html)<br>
                  [${subContents.backup}](${siteConfig.baseUrl}${this.props.language}/Backup/overview.html)<br>
                  [${subContents.buildApp}](${siteConfig.baseUrl}${this.props.language}/Admin/building.html)`,
                  image: `${siteConfig.baseUrl}img/illu_Administration.png`,
                  imageAlign: 'top',
                  imageAlt: 'Admin',
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
                  content: `[${subContents.webServer}](${siteConfig.baseUrl}${this.props.language}/WebServer/webServerObject.html)<br>[${subContents.restServer}](${siteConfig.baseUrl}${this.props.language}/REST/gettingStarted.html)`,
                  image: `${siteConfig.baseUrl}img/illu_WebApplication.png`,
                  imageAlign: 'top',
                  imageAlt: 'Web',
                  title: <translate>Web applications</translate>,
                },
                {
                  content: `[4D for iOS](https://developer.4d.com/4d-for-ios/docs/${this.props.language}/overview.html)`,
                  image: `${siteConfig.baseUrl}img/illu_MobileApplication.png`,
                  imageAlign: 'top',
                  imageAlt: 'Mobile',
                  title: <translate>Mobile applications</translate>,
                },
                {
                  content: `[${subContents.formEditor}](${siteConfig.baseUrl}${this.props.language}/FormEditor/forms.html)<br>[${subContents.formProperties}](${siteConfig.baseUrl}${this.props.language}/FormEditor/jsonReference.html)<br>[${subContents.formObjects}](${siteConfig.baseUrl}${this.props.language}/FormObjects/formObjectsOverview.html)<br>[${subContents.formObjectProperties}](${siteConfig.baseUrl}${this.props.language}/FormObjects/propertiesReference.html)<br>[${subContents.events}](${siteConfig.baseUrl}${this.props.language}/Events/overview.html)<br>[${subContents.menus}](${siteConfig.baseUrl}${this.props.language}/Menus/overview.html)`,
                  //image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
                  image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
				  imageAlign: 'top',
                  imageAlt: 'Desktop',
                  title: <translate>Desktop applications</translate>,
                },
				{},
              ]}
              layout="threeColumn"
            />
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
