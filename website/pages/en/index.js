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

const siteConfig = require(process.cwd() + '/siteConfig.js');

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

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
		// juste en dessous /h1 <div className="inner">
         //  <PromoSection>
          //  <Button href="https://developer.4d.com/docs/18/">v18</Button>
           // <Button href="https://developer.4d.com/docs/18Rx/">v18 R2 BETA</Button>
          //  <Button href="https://developer.4d.com/docs/18RxBETA/">v18 R3</Button>
       //   </PromoSection>
      //  </div>

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};


class Index extends React.Component {
  render() {
    const {config: siteConfig, language = 'en'} = this.props;
    const pinnedUsersToShowcase = siteConfig.users.filter(user => user.pinned);
    var subContents={
      languageConcepts: <translate desc="in index page Getting started">Language Concepts</translate>,
      projectDatabases: <translate desc="in index page Getting started">Project databases</translate>,
	  formEditor: <translate>Form Editor</translate>,
	  events: <translate>Form Events</translate>,
	  formObjects: <translate>Form Objects</translate>,
	  formObjectProperties: <translate>Form Object Properties</translate>,
	  menus: <translate>Menus</translate>,
	  webServer: <translate>Web Server</translate>,
	  restServer: <translate>REST Server</translate>,
	  msc: <translate>Maintenance and Security Center</translate>,
	  backup: <translate>Backup and Restore</translate>,
	  users: <translate>Users and Groups</translate>	  
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
                  content: `[${subContents.languageConcepts}](${siteConfig.baseUrl}${this.props.language}/Concepts/about.html)<br>[${subContents.projectDatabases}](${siteConfig.baseUrl}${this.props.language}/Project/overview.html)`,
                  image: `${siteConfig.baseUrl}img/illu_GettingStarted.png`,
                  imageAlign: 'top',
                  imageAlt: 'Get started',
                  title: <translate>Getting started</translate>,
                },
                {

                  content: `[${subContents.formEditor}](${siteConfig.baseUrl}${this.props.language}/FormEditor/objectLibrary.html)<br>[${subContents.formObjects}](${siteConfig.baseUrl}${this.props.language}/FormObjects/formObjectsOverview.html)<br>[${subContents.formObjectProperties}](${siteConfig.baseUrl}${this.props.language}/FormObjects/propertiesReference.html)<br>[${subContents.events}](${siteConfig.baseUrl}${this.props.language}/Events/overview.html)<br>[${subContents.menus}](${siteConfig.baseUrl}${this.props.language}/Menus/overview.html)`,
                  //image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
                  image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
				  imageAlign: 'top',
                  imageAlt: 'Desktop',
                  title: <translate>Developing a Desktop application</translate>,
                },
                {
                  content: `[${subContents.webServer}](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.${this.props.language}.html)<br>[${subContents.restServer}](${siteConfig.baseUrl}${this.props.language}/REST/gettingStarted.html)`,
                  image: `${siteConfig.baseUrl}img/illu_WebApplication.png`,
                  imageAlign: 'top',
                  imageAlt: 'Web',
                  title: <translate>Developing a Web application</translate>,
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
                  content: `[4D for iOS](https://developer.4d.com/4d-for-ios/docs/${this.props.language}/overview.html)`,
                  image: `${siteConfig.baseUrl}img/illu_MobileApplication.png`,
                  imageAlign: 'top',
                  imageAlt: 'Mobile',
                  title: <translate>Developing a Mobile application</translate>,
                },
                {
                  content: `[${subContents.msc}](${siteConfig.baseUrl}${this.props.language}/MSC/overview.html)<br>[${subContents.backup}](${siteConfig.baseUrl}${this.props.language}/Backup/overview.html)<br>[${subContents.users}](${siteConfig.baseUrl}${this.props.language}/Users/overview.html)`,
                  image: `${siteConfig.baseUrl}img/illu_Administration.png`,
                  imageAlign: 'top',
                  imageAlt: 'Admin',
                  title: <translate>Administration</translate>,
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
