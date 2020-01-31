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

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Container padding={['bottom', 'top']} background="white">
            <GridBlock
              align="left"
              contents={[
                {
                  content: `[<translate>Language Concepts</translate>](${siteConfig.baseUrl}${this.props.language}/Concepts/about.html)<br>[<translate>Project databases</translate>](${siteConfig.baseUrl}${this.props.language}/Project/overview.html)`,
                  image: `${siteConfig.baseUrl}img/illu_GettingStarted.png`,
                  imageAlign: 'top',
                  imageAlt: 'Get started',
                  title: <translate>Getting started</translate>,
                },
                {
                  content: `[<translate>Form Editor</translate>](${siteConfig.baseUrl}${this.props.language}/FormEditor/objectLibrary.html)<br>[<translate>Form Objects</translate>](${siteConfig.baseUrl}${this.props.language}/FormObjects/formObjectsOverview.html)<br>[<translate>Form Object Properties</translate>](${siteConfig.baseUrl}${this.props.language}/FormObjects/propertiesReference.html)<br>[<translate>Menus</translate>](${siteConfig.baseUrl}${this.props.language}/Menus/overview.html)`,
                  //image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
                  image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
				  imageAlign: 'top',
                  imageAlt: 'Desktop',
                  title: <translate>Developing a Desktop application</translate>,
                },
                {
                  content: `[<translate>Web Server</translate>](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.${this.props.language}.html)<br>[<translate>REST Server</translate>](${siteConfig.baseUrl}${this.props.language}/REST/gettingStarted.html)`,
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
                  content: `[<translate>Maintenance and Security Center</translate>](${siteConfig.baseUrl}${this.props.language}/MSC/overview.html)<br>[<translate>Backup and Restore</translate>](${siteConfig.baseUrl}${this.props.language}/Backup/overview.html)<br>[<translate>Users and Groups</translate>](${siteConfig.baseUrl}${this.props.language}/Users/overview.html)`,
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
