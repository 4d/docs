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
          {siteConfig.title} for 4D developers
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
                  content: `[Language Concepts](${siteConfig.baseUrl}${this.props.language}/Concepts/about)<br>[Project databases](${siteConfig.baseUrl}${this.props.language}/Project/overview)`,
                  image: `${siteConfig.baseUrl}img/illu_GettingStarted.png`,
                  imageAlign: 'top',
                  imageAlt: 'Get started',
                  title: <translate>Getting started</translate>,
                },
                {
                  content: `[Form Editor](${siteConfig.baseUrl}${this.props.language}/FormEditor/objectLibrary)<br>[Form Objects](${siteConfig.baseUrl}${this.props.language}/FormObjects/formObjectsOverview)<br>[Form Object Properties](${siteConfig.baseUrl}${this.props.language}/FormObjects/propertiesReference)<br>[Menus](${siteConfig.baseUrl}${this.props.language}/Menus/overview)`,
                  //image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
                  image: `${siteConfig.baseUrl}img/illu_DesktopApplication.png`,
				  imageAlign: 'top',
                  imageAlt: 'Desktop',
                  title: <translate>Developing a Desktop application</translate>,
                },
                {
                  content: `[Web Server](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html)`,
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
                  content: `[4D for iOS](https://developer.4d.com/4d-for-ios/)`,
                  image: `${siteConfig.baseUrl}img/illu_MobileApplication.png`,
                  imageAlign: 'top',
                  imageAlt: 'Mobile',
                  title: <translate>Developing a Mobile application</translate>,
                },
                {
                  content: `[Maintenance and Security Center](${siteConfig.baseUrl}${this.props.language}/MSC/overview)<br>[Backup and Restore](${siteConfig.baseUrl}${this.props.language}/Backup/overview)<br>[Users and Groups](${siteConfig.baseUrl}${this.props.language}/Users/overview)`,
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